var fs = require( 'fs' );
var faker = require( 'faker' );
var colors = require( 'colors' );


// dynamically create JSON of 100 stations
var stations = [];
for ( var i = 1; i <= 100; i++ ) {
  var station = {
    id: i,
    locationName: faker.random.words(),
    city: faker.address.city()
  };

  if ( i % 20 === 0 ) {
    station.broken = true;
  } else {
    station.broken = false;
  }

  stations.push( station );
}

// save to database.json
try {
  fs.writeFile( 'database.json', JSON.stringify( stations ), function( error ) {
    if ( error ) {
      throw new Error( error );
    } else {
      // output success
      console.log( 'Successfully created database.json for fake database.'.green );
    }
  });
} catch ( error ) {
  console.log( colors.red( 'There was an error creating a fake database file. Please log an issue or pull request at https://github.com/Volta-Charging/Code-Challenge/issues. Error: \n\n' + error.message ) );  
}