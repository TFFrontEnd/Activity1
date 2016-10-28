'use strict';

Ext.define( 'TFApp.model.User', {
	extend : 'Ext.data.Model',

	fields : [
		'firstname',
		'lastname',
		'middlename',
		{
			name : 'age',
			type : 'int'
		},
		{
			name : 'fullname',
			convert : function( value, record ) {
				return record.get( 'firstname' ) + ' ' + record.get( 'middlename' ) + ' ' + record.get( 'lastname' )
			}
		}
	]
});