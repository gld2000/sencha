Ext.application({
	launch : function(){
		var carousel = new Ext.create('Ext.Carousel',{
			flex : 1, // 요거 넣어야 함.
			ui : 'dark',
			indicator : true,
			direction : 'horizontal',
			items : [{
				xtype : 'panel',
				html : '<img src="../images/s1.png" width="200" /><br/>직급: 사원<br/>이름: 성명'
			},{
				xtype : 'panel',
				html : '<img src="../images/s2.png" width="200" /><br/>직급: 사원<br/>이름: 성명'
			},{
				xtype : 'panel',
				html : '<img src="../images/s3.png" width="200" /><br/>직급: 사원<br/>이름: 성명'
			}]
		});
		var panel = new Ext.create('Ext.Panel',{
			layout : {
				type : 'vbox',
				align : 'stretch',
				pack : 'center'
			},
			items : [carousel]
		});
		Ext.Viewport.add(panel);
	}
});