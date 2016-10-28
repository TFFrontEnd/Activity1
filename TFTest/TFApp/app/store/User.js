'use strict';

Ext.define( 'TFApp.store.User', {
	extend : 'Ext.data.Store',
	model  : 'TFApp.model.User',
	alias  : 'store.user',

	proxy  : {
		type : 'localstorage',
		id   : 'user'
	}
} );