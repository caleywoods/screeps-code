export class Creep {
  public memory: CreepMemory;
  public creep: Creep;
  public carry: StoreDefinition;
  public carryCapacity: number;

  constructor( creep: Creep ) {
    this.creep  = creep;
    this.memory = creep.memory;
    this.carry  = creep.carry;
  }
}