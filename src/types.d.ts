// type shim for nodejs' `require()` syntax
declare const require: (module: string) => any;

// interface CreepMemory {
//   role: string
//   name: string
// }

interface RoomMemory {
  harvesterCount: number,
  harvesterMax: number,
  initializedFlag: boolean,
  upgraderCount: number,
  upgraderMax: number
}

interface CreepMemory {
  role: string
}