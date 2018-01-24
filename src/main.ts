import { ErrorMapper } from "utils/ErrorMapper";
import { Spawner } from "../modules/Spawner";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);
  let spawnName = 'Spawn1';
  let roomName = 'W5N8';

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {

      // Try to keep our creep counts in sync
      if ( Memory.creeps[name].role === 'harvester' ) {
        Game.rooms[roomName].memory.harvesterCount--;
      }

      if ( Memory.creeps[name].role === 'upgrader' ) {
        Game.rooms[roomName].memory.upgraderCount--;
      }

      delete Memory.creeps[name];
    }
  }

  let spawner = new Spawner( spawnName );

  // Should just fire once, then the bool is tripped to true
  spawner.initializeRoom( roomName );

  if ( Game.rooms[roomName].memory.harvesterCount < Game.rooms[roomName].memory.harvesterMax ) {
    let spawn = spawner.spawnCreep( 'harvester', roomName );
    if ( spawn === OK ) {
      Game.rooms[roomName].memory.harvesterCount++;
    }
  }

  if ( Game.rooms[roomName].memory.upgraderCount < Game.rooms[roomName].memory.upgraderMax ) {
    let spawn = spawner.spawnCreep( 'upgrader', roomName );
    if ( spawn === OK ) {
      Game.rooms[roomName].memory.upgraderCount++;
    }
  }
});
