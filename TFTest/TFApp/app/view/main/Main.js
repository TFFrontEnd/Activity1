/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TFApp.view.main.Main', {
    extend: 'Ext.Panel',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    bind : {
        title : '{title}'
    },

    layout : {
        type  : 'hbox',
        align : 'center'
    },

    defaults : {
        height : '100%',
        flex   : 1
    },

    bodyPadding : 30,

    items : [
        {
            xtype : 'grid',
            reference : 'user',
            bind  : {
                title : '{titleGrid}'
            },

            border: true,

            store : {
                type    : 'user',
                storeId : 'user'
            },

            columnLines : true,
            rowLines    : true,

            columns : [
                {
                    bind : {
                        text : '{colName}'
                    },
                    dataIndex : 'fullname',
                    flex      : 1
                }, {
                    bind : {
                        text : '{colAge}'
                    },
                    dataIndex : 'age',
                    width     : 50
                }
            ],

            listeners : {
                afterrender : 'onAfterRenderUserGrid',
                select      : 'onSelectUserGrid'
            }
        }, {
            xtype       : 'form',
            layout      : 'form',
            reference   : 'userForm',

            padding     : '0 0 0 10',
            defaultType : 'textfield',

            items       : [
                {
                    xtype         : 'hidden',
                    name          : 'id'
                }, {
                    fieldLabel    : 'First Name',
                    name          : 'firstname',
                    allowBlank    : false
                }, {
                    fieldLabel    : 'Middle Name',
                    name          : 'middlename'
                }, {
                    fieldLabel    : 'Last Name',
                    name          : 'lastname',
                    allowBlank    : false
                }, {
                    xtype         : 'numberfield',
                    allowDecimals : false,
                    hideTrigger   : true,
                    minValue      : 0,
                    fieldLabel    : 'Age',
                    name          : 'age',
                    allowBlank    : false
                }
            ],

            buttons : [
                {
                    text  : 'New',
                    handler: 'onBtnClickNew'
                }, {
                    formBind : true,
                    text  : 'Save',
                    handler : 'onBtnClickSave'
                }
            ]
        }
    ]
});
