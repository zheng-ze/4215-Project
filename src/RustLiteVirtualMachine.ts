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
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
  instruction,
  instruction_type,
  word_size,
} from "./RustLiteTypes";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
}

class Heap {
  data: DataView<ArrayBuffer>;

  constructor(numWords: number) {
    const buffer = new ArrayBuffer(numWords * word_size);
    this.data = new DataView(buffer);
  }

  get(index: number): number {
    return this.data.getFloat64(index);
  }

  set(address: number, value: number): void {
    this.data.setFloat64(address, value);
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
    this.stack = [];
    this.heap = new Heap(100);
    this.pc = 0;
    this.e = 0;
    this.rts = [];
    this.instrs = instrs;
  }

  microcode: VirtualMachineMicrocode = {
    [instruction_type.LDC]: (instr: instruction) => {
      const ldc = instr as LDC;
      this.stack.push(ldc.val);
    },
  };
}
