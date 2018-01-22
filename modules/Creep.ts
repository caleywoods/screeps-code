export abstract class Creep {
  public creep: Creep;

  constructor(creep: Creep) {
    this.creep = creep;
  }

  public abstract run() : void;