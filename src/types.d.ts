// type shim for nodejs' `require()` syntax
declare const require: (module: string) => any;

// interface CreepMemory {
//   role: string
//   name: string
// }

interface RoomMemory {
  initializedFlag: boolean
}

interface CreepMemory {
  role: string
}