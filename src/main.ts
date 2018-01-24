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
      delete Memory.creeps[name];
    }
  }

  let spawner = new Spawner( spawnName );


  spawner.initializeRoom( roomName );
  console.log( Game.rooms[roomName].memory.initializedFlag);
});
