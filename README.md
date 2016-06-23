# PhoneNumber-to-Area
A npm module to fetch area and timezone detail of a phone number

  How to use :
  
      var Phonetz = require( 'phonetz' );

      var phonetz = new Phonetz();
    
      var phonetzObj = phonetz.get( '+1-303-123-4567');

      //phonetzObj = areacode: '856', type: 'local', city: 'camden', state: 'new jersey', location: { latitude: 39.925946, longitude: -75.119619 },timezone: 'America/New_York' }
