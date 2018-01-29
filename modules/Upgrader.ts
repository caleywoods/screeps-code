import { Creeper } from './Creeper';

export class Upgrader extends Creeper {
  /*
    She's a super creep, a super creep, yeah she's super creeepy...
  */
  constructor(creep: Creep, room: Room ) {
    super(creep, room);
  }

  public run(): void {
    if ( this.creep.carry.energy < this.creep.carryCapacity ) {
      // Find resources to collect.
      // Once full, traverse back to spawn and deposit energy then resume collection

      const target = this.creep.pos.findClosestByRange( FIND_SOURCES_ACTIVE );
      
      if ( ! this.canHarvest(target) ) {
        this.creep.moveTo( target );
      }     
    } else {
      // Current code issue here.
      const controller = this.room.controller;
      if ( ! this.canUpgrade(this.room.controller) ) {
        this.creep.moveTo( this.room.controller );
      }
    }
  }
}