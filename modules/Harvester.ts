import { Creep } from './Creep';

export class Harvester extends Creep {
  public creep: Creep;
  /*
    She's a super creep, a super creep, yeah she's super creeepy...
  */
  constructor(creep: Creep ) {
    super(creep);
    this.creep = creep;
  }

  public run(): void {
    if ( this.creep.carry.energy < this.creep.carryCapacity ) {
      // Find resources to collect.
      // Once full, traverse back to spawn and deposit energy then resume collection
    }
  }
}