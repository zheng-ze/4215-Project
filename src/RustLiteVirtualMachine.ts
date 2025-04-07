import {
  ASSIGN,
  BINOP,
  CALL,
  ENTER_SCOPE,
  EXIT_SCOPE,
  GOTO,
  JOF,
  LD,
  LDC,
  LDF,
  POP,
  Pair,
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
  instruction,
  instruction_type,
  node_size,
  size_offset,
  word_size,
} from "./RustLiteTypes";

import { isBoolean } from "util";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
}

enum HeapTag {
  Bool = 0,
  Number = 1,
  Blockframe = 2,
  Callframe = 3,
  Closure = 4,
  Frame = 5,
  Environment = 6,
  Struct = 7,
}

function push<T>(array: T[], ...items: T[]): T[] {
  for (const item of items) {
    array.push(item);
  }
  return array;
}

function peek(array: SUPPORTED_TYPES[], index: number): SUPPORTED_TYPES {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array.slice(-1 - index)[0];
}

class Heap {
  data: DataView<ArrayBuffer>;
  free: number;

  constructor(numWords: number) {
    const buffer = new ArrayBuffer(numWords * word_size);
    this.data = new DataView(buffer);
    this.free = 0;
  }

  get(index: number): number {
    return this.data.getFloat64(index);
  }

  set(address: number, value: number): void {
    this.data.setFloat64(address, value);
  }

  allocate(tag: HeapTag, size: number): number {
    if (size > node_size) {
      throw new Error(
        `limitation: nodes cannot be larger than ${node_size} words`
      );
    }

    if (this.free === -1) {
      throw new Error("heap memory exhausted");
    }

    const address = this.free;
    this.free = this.get(this.free);
    this.data.setInt8(address * word_size, tag);
    this.data.setUint16(address * word_size + size_offset, size);
    return address;
  }

  get_at_offset(address: number, offset: number): number {
    return this.data.getUint8(address * word_size + offset);
  }

  set_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint8(address * word_size + offset, value);
  }

  get_2_at_offset(address: number, offset: number): number {
    return this.data.getUint16(address * word_size + offset);
  }

  set_2_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint16(address * word_size + offset, value);
  }

  getTag(address: number): HeapTag {
    return this.data.getInt8(address * word_size);
  }

  getSize(address: number): number {
    return this.data.getUint16(address * word_size + size_offset);
  }

  get_child(address: number, child_index: number): number {
    return this.get(address + 1 + child_index);
  }

  set_child(address: number, child_index: number, value: number): void {
    this.set(address + 1 + child_index, value);
  }

  get_num_children(address: number): number {
    return this.getTag(address) === HeapTag.Number
      ? 0
      : this.getSize(address) - 1;
  }
}

interface VirtualMachine<T> {
  microcode: VirtualMachineMicrocode;

  stack: T[];
  heap: Heap;
  pc: number;
  e: number;
  rts: number[];

  instrs: instruction[];
}

export class RustLiteVirtualMachine implements VirtualMachine<SUPPORTED_TYPES> {
  stack: SUPPORTED_TYPES[];
  heap: Heap;
  pc: number;
  e: number;
  rts: number[];

  instrs: instruction[];

  constructor(instrs: instruction[]) {
    this.reset();
    this.instrs = instrs;
  }

  run(): SUPPORTED_TYPES {
    this.reset();

    while (this.instrs[this.pc].type !== instruction_type.DONE) {
      const instr = this.instrs[this.pc++];

      const microcode = this.microcode[instr.type];
      if (microcode) {
        microcode(instr);
      } else {
        throw new Error(`Unknown instruction type: ${instr.type}`);
      }
    }

    return this.address_to_JS_value(peek(this.stack, 0) as number);
  }

  reset(): void {
    this.stack = [];
    this.heap = new Heap(100);
    this.pc = 0;
    this.e = 0;
    this.rts = [];
  }

  microcode: VirtualMachineMicrocode = {
    [instruction_type.LDC]: (instr: instruction) => {
      const ldc = instr as LDC;
      const addr = this.JS_value_to_address(ldc.val);
      push(this.stack, addr);
    },
    [instruction_type.UNOP]: (instr: instruction) => {
      const unop = instr as UNOP;
      const arg = this.stack.pop() as number;
      const result = this.apply_unop(unop.sym, arg);
      push(this.stack, result);
    },
    [instruction_type.BINOP]: (instr: instruction) => {
      const binop = instr as BINOP;
      const right = this.stack.pop() as number;
      const left = this.stack.pop() as number;
      const result = this.apply_binop(binop.sym, left, right);
      push(this.stack, result);
    },
    [instruction_type.POP]: (instr: instruction) => {
      this.stack.pop();
    },
    [instruction_type.JOF]: (instr: instruction) => {
      const jof = instr as JOF;
      const condition = this.stack.pop() as number;
      if (this.address_to_JS_value(condition) === false) {
        this.pc = jof.addr;
      }
    },
    [instruction_type.GOTO]: (instr: instruction) => {
      const goto = instr as GOTO;
      this.pc = goto.addr;
    },
    [instruction_type.ENTER_SCOPE]: (instr: instruction) => {
      const enter = instr as ENTER_SCOPE;
      const blockframe_addr = this.allocate_Blockframe(this.e);
      this.rts.push(blockframe_addr);
      const frame_addr = this.allocate_Environment(enter.num);
      this.e = this.environment_extend(frame_addr, this.e);
      for (let i = 0; i < enter.num; i++) {
        this.heap.set_child(frame_addr, i, 0); // initialize to 0
      }
    },
    [instruction_type.EXIT_SCOPE]: (instr: instruction) => {
      const frame_addr = this.get_blockframe_env(this.rts.pop());
      this.e = frame_addr;
    },
    [instruction_type.LD]: (instr: instruction) => {
      const ld = instr as LD;
      const valueAddr = this.get_Environment_value(this.e, ld.pos);
      push(this.stack, valueAddr);
    },
    [instruction_type.ASSIGN]: (instr: instruction) => {
      const assign = instr as ASSIGN;
      const valueAddr = peek(this.stack, 0) as number;
      this.set_Environment_value(this.e, assign.pos, valueAddr);
    },
    [instruction_type.LDF]: (instr: instruction) => {
      const ldf = instr as LDF;
      const addr = this.allocate_Closure(ldf.arity, ldf.addr, this.e);
      push(this.stack, addr);
    },
    [instruction_type.CALL]: (instr: instruction) => {
      const call = instr as CALL;
      const arity = call.arity;
      const fun = peek(this.stack, arity) as number;

      const new_e = this.allocate_Environment(arity);
      for (let i = arity - 1; i >= 0; i--) {
        const arg = this.stack.pop() as number;
        this.heap.set_child(this.e, i, arg);
      }
      this.stack.pop(); // pop the function

      const callframe_addr = this.allocate_Callframe(this.e, this.pc);
      this.rts.push(callframe_addr);

      const fun_addr = this.get_closure_env(fun);
      this.e = this.environment_extend(new_e, fun_addr);

      const new_pc = this.get_closure_pc(fun);
      this.pc = new_pc;
    },
    [instruction_type.TAIL_CALL]: (instr: instruction) => {
      const tail_call = instr as TAIL_CALL;
      const arity = tail_call.arity;
      const fun = peek(this.stack, arity) as number;

      for (let i = arity - 1; i >= 0; i--) {
        const arg = this.stack.pop() as number;
        this.heap.set_child(this.e, i, arg);
      }
      this.stack.pop(); // pop the function

      //don't push on RTS here

      const fun_addr = this.get_closure_env(fun);
      this.e = fun_addr;

      const new_pc = this.get_closure_pc(fun);
      this.pc = new_pc;
    },
    [instruction_type.RESET]: (instr: instruction) => {
      const reset = instr as RESET;
      this.pc--;
      const top_frame = this.rts.pop();
      if (this.is_Callframe(top_frame)) {
        this.e = this.get_callframe_env(top_frame);
        this.pc = this.get_callframe_pc(top_frame);
      }
    },
  };

  // bool
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the number, one word
  // note: #children is 0
  private is_Bool(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Bool;
  }

  private allocate_Bool(value: boolean): number {
    const address = this.heap.allocate(HeapTag.Bool, 2);
    this.heap.set(address + 1, value ? 1 : 0);
    return address;
  }

  // number
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the number, one word
  // note: #children is 0
  private is_Number(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Number;
  }

  private allocateNumber(value: number): number {
    const address = this.heap.allocate(HeapTag.Number, 2);
    this.heap.set(address + 1, value);
    return address;
  }

  // closure
  // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the address of env
  // note: currently bytes at offset 4 and 7 are not used;
  //   they could be used to increase pc and #children range
  private is_Closure(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Closure;
  }

  private allocate_Closure(arity: number, pc: number, env: number): number {
    const address = this.heap.allocate(HeapTag.Closure, 2);
    this.heap.set_at_offset(address, 1, arity);
    this.heap.set_2_at_offset(address, 2, pc);
    this.heap.set(address + 1, env);
    return address;
  }

  private get_closure_arity(address: number): number {
    return this.heap.get_at_offset(address, 1);
  }

  private get_closure_pc(address: number): number {
    return this.heap.get_2_at_offset(address, 2);
  }

  private get_closure_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  // block frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  is_Blockframe(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Blockframe;
  }

  private allocate_Blockframe(env: number): number {
    const address = this.heap.allocate(HeapTag.Blockframe, 2);
    this.heap.set(address + 1, env);
    return address;
  }

  private get_blockframe_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  // call frame
  // [1 byte tag, 1 byte unused, 2 bytes pc,
  //  1 byte unused, 2 bytes #children, 1 byte unused]
  // followed by the address of env
  private is_Callframe(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Callframe;
  }

  private allocate_Callframe(env: number, pc: number): number {
    const address = this.heap.allocate(HeapTag.Callframe, 2);
    this.heap.set_2_at_offset(address, 2, pc);
    this.heap.set(address + 1, env);
    return address;
  }

  private get_callframe_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  private get_callframe_pc(address: number): number {
    return this.heap.get_2_at_offset(address, 2);
  }

  // environment frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its values

  private is_Environment(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Environment;
  }

  private allocate_Environment(numFrames: number): number {
    const address = this.heap.allocate(HeapTag.Environment, numFrames + 1);
    return address;
  }

  private get_Environment_value(address: number, index: Pair<number>): number {
    const frameIndex = index.first;
    const valueIndex = index.second;
    const frameAddress = this.heap.get_child(address, frameIndex);
    const valueAddress = this.heap.get_child(frameAddress, valueIndex);
    return valueAddress;
  }

  private set_Environment_value(
    address: number,
    index: Pair<number>,
    value: number
  ): void {
    const frameIndex = index.first;
    const valueIndex = index.second;
    const frameAddress = this.heap.get_child(address, frameIndex);
    this.heap.set_child(frameAddress, valueIndex, value);
  }

  private environment_extend(frameAddress: number, envAddress: number): number {
    const old_size = this.heap.getSize(envAddress);
    const new_env_address = this.heap.allocate(
      HeapTag.Environment,
      old_size + 1
    );
    let i = 0;
    for (i; i < old_size - 1; i++) {
      this.heap.set_child(
        new_env_address,
        i,
        this.heap.get_child(envAddress, i)
      );
    }
    this.heap.set_child(new_env_address, i, frameAddress);
    return new_env_address;
  }

  // private compile_time_env_position(
  //   env: SUPPORTED_TYPES[][],
  //   value: SUPPORTED_TYPES
  // ): Pair<number> {
  //   let frameIndex = env.length;
  //   let valueIndex = -1;
  //   while (frameIndex > 0) {
  //     frameIndex--;
  //     valueIndex = this.value_index(env[frameIndex], value);
  //     if (valueIndex !== -1) {
  //       break;
  //     }
  //   }
  //   if (valueIndex === -1) {
  //     throw new Error(`Value ${value} not found in environment`);
  //   }
  //   return { left: frameIndex, right: valueIndex };
  // }

  // private value_index(
  //   frame: SUPPORTED_TYPES[],
  //   value: SUPPORTED_TYPES
  // ): number {
  //   for (let i = 0; i < frame.length; i++) {
  //     if (frame[i] === value) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }

  // private compile_time_env_extend(
  //   env: SUPPORTED_TYPES[][],
  //   frame: SUPPORTED_TYPES[][]
  // ): SUPPORTED_TYPES[][] {
  //   for (let assignment of frame) {
  //     env.push(assignment);
  //   }
  //   return env;
  // }

  private address_to_JS_value(address: number): SUPPORTED_TYPES {
    if (this.is_Bool(address)) {
      return this.heap.get(address + 1) === 1;
    }

    if (this.is_Number(address)) {
      return this.heap.get(address + 1);
    }

    throw new Error(`Unsupported address type: ${this.heap.getTag(address)}`);
  }

  private JS_value_to_address(val: SUPPORTED_TYPES): number {
    if (typeof val === "number") {
      return this.allocateNumber(val);
    }

    if (typeof val === "boolean") {
      return this.allocate_Bool(val);
    }

    throw new Error(`Unsupported type: ${typeof val}`);
  }

  private unop_microcode = {
    "-unary": (num: number) => -num,
    "!": (bool: boolean) => !bool,
  };

  private apply_unop(op: string, address: number): SUPPORTED_TYPES {
    return this.unop_microcode[op](this.address_to_JS_value(address));
  }

  private binop_microcode = {
    "+": (left: number, right: number) => left + right,
    "-": (left: number, right: number) => left - right,
    "*": (left: number, right: number) => left * right,
    "/": (left: number, right: number) => left / right,
    "%": (left: number, right: number) => left % right,
    "==": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left === right,
    "!=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left !== right,
    "<": (left: number, right: number) => left < right,
    "<=": (left: number, right: number) => left <= right,
    ">": (left: number, right: number) => left > right,
    ">=": (left: number, right: number) => left >= right,
    "&&": (left: boolean, right: boolean) => left && right,
    "||": (left: boolean, right: boolean) => left || right,
  };

  private apply_binop(
    op: string,
    leftAddr: number,
    rightAddr: number
  ): SUPPORTED_TYPES {
    return this.binop_microcode[op](
      this.address_to_JS_value(leftAddr),
      this.address_to_JS_value(rightAddr)
    );
  }
}
