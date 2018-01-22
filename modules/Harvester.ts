export class Harvester extends Creep {
  public run() : void {
    const creep = this.creep;
    const harvester = creep.memory.harvester;
    if (!harvester) {
      this.suicide("Cannot find harvester memory, thus I have no purpose");
      return;
    }
  }
}