"use strict";

var __ = require( 'doublescore' );
var data = require( './json/data.json' );

var Phonetz = function() {

};

Phonetz.prototype.get = function( phoneNumber ) {

	phoneNumber = phoneNumber.replace( /^\+?[10]/, '' ).replace( /[^0-9]/g, '' ).match( /^([0-9]{3})/ );

	if ( !phoneNumber ) {
		return new Error( 'phone number not valid' );
	}

	phoneNumber = phoneNumber[ 1 ];

	if ( data.hasOwnProperty( phoneNumber ) ) {
		return __( data[ phoneNumber ] ).clone();
	}

	return new Error( 'not found' );

};


module.exports = Phonetz;
