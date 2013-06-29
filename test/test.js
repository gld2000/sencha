//Ext.require('Ext.MessageBox');
Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		var button = new Ext.create('Ext.Button',{
			text : '버튼',
			handler : function(){
				Ext.Msg.alert('버튼','옵션')
			}
		});
		var panel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			html : 'sencha test',
			items : [button]
		});
		Ext.Viewport.add(panel);
	}
});