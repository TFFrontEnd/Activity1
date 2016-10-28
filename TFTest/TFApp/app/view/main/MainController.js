/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TFApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onBtnClickNew : function( btn ) {
        var form = btn.up('form').getForm();
        form.reset();
    },

    onBtnClickSave : function( btn ) {
        var form       = btn.up('form').getForm(),
            formValues = form.getValues(),
            grid       = this.lookupReference( 'user' ),
            store      = grid.getStore(),
            record;

        if( Ext.isEmpty( formValues.id )) {
            store.add( formValues );
        } else {
            record = store.findRecord('id', formValues.id);
            if( record ) {
                record.set(formValues);
            }
        }
        
        store.sync();
        store.load();

        form.reset();
    },

    onAfterRenderUserGrid : function( grid ) {
        var store = grid.getStore();
        store.load();
    },

    onSelectUserGrid : function( selectionModel, record ) {
        var form = this.lookupReference( 'userForm' ).getForm();

        form.loadRecord( record );
    }
});
