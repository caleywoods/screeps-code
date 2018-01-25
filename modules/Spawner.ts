import { Harvester } from './Harvester';
import { Upgrader } from './Upgrader';
import { Creep } from './Creep';

export class Spawner {
  public spawnName: string;
  public roomName: string;

  constructor(spawnName: string, roomName: string) {
    this.spawnName = spawnName;
    this.roomName  = roomName;
  }

  initializeRoom() : void {
    if ( ! Game.rooms[this.roomName].memory.initializedFlag ) {
      Game.rooms[this.roomName].memory.harvesterCount  = 0;
      Game.rooms[this.roomName].memory.harvesterMax    = 5;
      Game.rooms[this.roomName].memory.upgraderCount   = 0;
      Game.rooms[this.roomName].memory.upgraderMax     = 5;
      Game.rooms[this.roomName].memory.initializedFlag = true;
    }
  }

  runCreeps(): void {
    let creepers = Game.rooms[this.roomName].find( FIND_MY_CREEPS );

    _.each( creepers, (creep: Creep) => {
      switch( creep.memory.role ) {
        case 'harvester':
          const harvester = new Harvester( creep );
          harvester.run()
          break;
        case 'upgrader':
          const upgrader = new Upgrader( creep );
          upgrader.run()
          break;
        default:
          console.log( 'Unable to determine creep role.' );
      }
    });
  }

  spawnCreep( role: string ): ScreepsReturnCode {
    let creepAttempt = Game.spawns[this.spawnName].spawnCreep([WORK, CARRY, MOVE], this.getName(), {
      memory: {role: role}
    });

    return creepAttempt;
  }

  //This should be "random" enough to get going
  getName() : string {
    let verbsArray = [
      'severe','agonizing','live','heartbroken','harmless','ignorant','north',
      'small','original','virtual','real','sideways','finite','hungry','ugly',
      'wet','warm','surreal','hotter','common','extraordinary','sad','grainy',
      'elastic','huge','bright','deadly','cloth', 'diagonal','acute','obtuse',
      'diametric','imperial','royal','correct'
    ];

    let nounsArray = [
      'bottle','spider','disciple','fist','cotton','cows','addict','kingdom',
      'snake','oxen','mouse','batch','baloney','coast','donut','snow',
      'face','knot','arch','heist','doctor','fear','gymnast','cat','conqueror',
      'baboon','pony','horse','centaur','liger','consumer','finch', 'peppermint',
      'grenade','hymn','scar','shack','glider','laser','honey','harpoon',
      'tornado','fellow','amateur','horse','battery','staple'
    ];

    let verb = _.sample( verbsArray, 1 );
    let noun = _.sample( nounsArray, 1 );

    let randNum = _.random( 0,10000 );

    return `${verb}-${noun}-${randNum}`;
  }

  // Each tick use Panoptes watcher data to determine what type of creeps to spawn.
  // Somehow panoptes needs to know when creeps die to adjust the creep counts
  // Panoptes or something needs to initialize each rooms memory with a jobs or desired creep role max count. Each tick is resetting panoptes counts.
}