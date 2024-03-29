Ext.application({
	launch : function(){
		var tabPanel = Ext.create('Ext.TabPanel',{
			fullscreen : true,
			tabBar : {
				docked : 'bottom',
				layout : {
					pack : 'center'
				}
			},
			items : [{
				iconCls : 'info',
				title : 'About'
			},{
				iconCls : 'favorites',
				title : 'Favorites',
				badgeText :  '2'
			}],
			
			dockedItems : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				items : [{
					xtype : 'button',
					text : 'back',
					ui : 'back'
				},{
					xtype : 'spacer'
				},{
					xtype : 'button',
					text : 'home'
				}]
			}]
		}); //end tabPanel
	} //end launch 
});