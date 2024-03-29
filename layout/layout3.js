Ext.application({
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			 fullscreen : true,
			 layout : {
				 type : 'vbox',
				 align : 'stretch', // start, end, center
				 pack : 'center' // start, end, justify
			 },
			 items : [{
				 xtype : 'panel',
				 style : 'background:red',
				 html : 'First',
				 flex :  1
			 },{
				 xtype : 'panel',
				 style : 'background:blue',
				 html : 'Second',
				 flex :  1
			 },{
				 xtype : 'panel',
				 style : 'background:green',
				 html : 'Third',
				 flex :  1
			 },{
				 flex : 1,
				 layout : {
					 type : 'hbox',
					 align : 'stretch',
				 },
				 items : [{
					 xtype : 'panel',
					 style : 'background:yellow',
					 html : 'Fourtch',
					 flex :  1
				 },{
					 xtype : 'panel',
					 style : 'background:gray',
					 html : 'Fifth',
					 flex :  1
				 }]
			 }]
		});
	}
});