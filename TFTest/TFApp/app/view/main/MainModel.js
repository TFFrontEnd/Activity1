/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TFApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        title   : 'Activity',
        titleGrid: 'Users',

        colName : 'Name',
        colAge  : 'Age'
    }

    //TODO - add data, formulas and/or methods to support your view
});