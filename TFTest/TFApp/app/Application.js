/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('TFApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'TFApp',

    views: [
        // TODO: add views here
        'main.Main'
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
        'User'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
