import { Panoptes } from './Panoptes';
import { Harvester } from './Harvester';

export class Spawner {
  public spawnName: string;
  public panoptes: Panoptes;

  constructor(spawnName: string) {
    this.spawnName = spawnName;
    this.panoptes  = new Panoptes();
  }

  initializeRoom( roomName: string) : void {
    if ( ! Game.rooms[roomName].memory.initializedFlag ) {

      // Need to spawn based on role and give it a role name to prepend before the name
      let creepAttempt = Game.spawns[this.spawnName].spawnCreep([WORK, CARRY, MOVE], this.getName(), {
        memory: {role: 'harvester'}
      });

      if ( creepAttempt === OK ) {
        console.log('Creep successfully queued for spawning.');
      }

      if ( creepAttempt === ERR_NOT_ENOUGH_ENERGY ) {
      }

      /*
        No real need to do anything here yet, if spawnCreep() fails with ERR_NAME_EXISTS
        then it will just re-execute again on the next tick and likely get a new unique name.
      */
      if ( creepAttempt === ERR_NAME_EXISTS ) {
      }

    }

    Game.rooms[roomName].memory.initializedFlag = true;
  }

  /*
    This should be "random" enough to get going, example names seen:

    harmless-ugly-7244
    arch-batch-6915
    extraordinary-finch-4834
    coast-cows-9047
  */
  getName() : string {
    let wordsArray = [
      'severe','bottle','agonizing','spider','disciple','fist','cotton','live',
      'heartbroken','harmless','ignorant','cows','addict','north','small',
      'kingdom','original','virtual','real','sideways','snake','oxen','mouse',
      'batch','finite','baloney','coast','donut','snow','hungry','ugly','wet',
      'face','knot','warm','arch','heist','doctor','fear','surreal','hotter',
      'common','extraordinary','gymnast','sad','grainy','cat','conqueror',
      'baboon','pony','horse','centaur','liger','elastic','consumer','finch'
    ];

    let wordSoup = _.sample( wordsArray, 2 ).join( '-' );
    let randNum  = _.random( 0,10000 )

    return `${wordSoup}-${randNum}`
  }

  // Each tick use Panoptes watcher data to determine what type of creeps to spawn.
  // Somehow panoptes needs to know when creeps die to adjust the creep counts
  // Panoptes or something needs to initialize each rooms memory with a jobs or desired creep role max count. Each tick is resetting panoptes counts.
}