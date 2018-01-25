import { Creep } from './Creep';

export class Upgrader extends Creep {
  /*
    She's a super creep, a super creep, yeah she's super creeepy...
  */
  constructor(creep: Creep ) {
    super(creep);
  }

  public run(): void {
    if ( this.creep.carry.energy < this.creep.carryCapacity ) {
      // Find resources to collect.
      // Once full, go upgrade the room controller then repeat energy collection
    }
  }
}