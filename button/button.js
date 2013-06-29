//Ext.require('Ext.MessageBox');
Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'hbox',
				align : 'center',
				pack : 'center'
			},
			items : [{
				xtype : 'button',
				ui : 'decline', // nomal, decline, action, confirm, back, forward
				text : 'decline',
				handler : function(button, event){
					Ext.Msg.alert("Message","Title",Ext.emptyFn)
				}
			},{
				xtype : 'button',
				ui : 'confirm-round',
				text : 'confirm'				
			},{
				xtype : 'button',
				ui : 'decline-small',
				text : 'decline'				
			}]
		});
	}
});