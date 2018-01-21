const spawnName = 'Spawn1';
const spawn     = Game.spawns[spawnName];

if ( spawn.room.find(FIND_CREEPS).length === 0 ) {
  spawn.spawnCreep([WORK, CARRY, MOVE], 'Harvester1');
}

if ( spawn.energy === spawn.energyCapacity ) {
  if ( spawn.room.find(FIND_CREEPS).length < 2 ) {
    spawn.spawnCreep( [WORK, CARRY, MOVE], 'Harvester2' );
  }
}

for ( const i in Game.creeps ) {
  let creep  = Game.creeps[i];
  let source = Game.creeps[i].pos.findClosestByPath( FIND_SOURCES );

  if ( creep.harvest(source) === ERR_NOT_IN_RANGE ) {
    // console.log(`${creep.name} not in range`);
    creep.moveTo(source);
  } else {
    // console.log(`${creep.name} can harvest`);
    if ( creep.carry.energy === creep.carryCapacity ) {
      if ( creep.transfer(Game.spawns[spawnName], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
          creep.moveTo( Game.spawns[spawnName] );
      } 
    } else {
      creep.harvest( source );
    }
  }
}