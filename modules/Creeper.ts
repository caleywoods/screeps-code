export class Creeper {
  public memory: CreepMemory;
  public creep: Creep;
  public carry: StoreDefinition;
  public carryCapacity: number;
  public room: Room;

  constructor( creep: Creep, room: Room ) {
    this.creep  = creep;
    this.memory = creep.memory;
    this.carry  = creep.carry;
    this.room   = room;
  }

  public canHarvest( target: Source ): boolean {
    if ( this.creep.harvest(target) === ERR_NOT_IN_RANGE ) { return false; }
    return true;
  }

  // public canUpgrade( target: Structure ): boolean {
  //   if ( this.creep.upgradeController(target) === ERR_NOT_IN_RANGE ) { return false; }
  //   return true;
  // }
}