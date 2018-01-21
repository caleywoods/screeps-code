const spawnName = 'Spawn1';

/**
  Spawn our first creep if one doesn't already exist
*/
if ( Game.spawns[spawnName].room.find(FIND_CREEPS).length === 0 ) {
  Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );
}