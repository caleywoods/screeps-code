import { Panoptes } from './Panoptes';
import { Harvester } from './Harvester';

export class Spawner {
  public spawnName: string;
  public panoptes: Panoptes;

  constructor(spawnName: string) {
    this.spawnName = spawnName;
    this.panoptes  = new Panoptes();
    // return this.spawnName;
  }

  initializeRoom() {
    // How to rinse and repeat this logic for all types of creeps without repeating?
    if ( this.panoptes.harvesterCount === 0 ) {

      let nextInLine = this.panoptes.harvesterCount + 1;

      let creepAttempt = Game.spawns[this.spawnName].spawnCreep([WORK, CARRY, MOVE], `Harvester${nextInLine}`, {
        memory: {role: 'harvester'}
      });

      if ( creepAttempt === OK ) {
        console.log('Creep successfully queued for spawning.');
        this.panoptes.harvesterCount++;
      }

      if ( creepAttempt === ERR_NOT_ENOUGH_ENERGY ) {
        console.log('Not enough power to initiate creep spawning.');
      }

      if ( creepAttempt === ERR_NAME_EXISTS ) {
        // creep name already exists - try to get a new name
        console.log(`Creep with name: Harvester${nextInLine} already exists.`);
      }

    }
  }

  // Each tick use Panoptes watcher data to determine what type of creeps to spawn.
  // Somehow panoptes needs to know when creeps die to adjust the creep counts 
}