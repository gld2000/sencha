Ext.application({
	launch : function(){
		var overlayToolbar = new Ext.create('Ext.Toolbar',{
			docked : 'top',
			//title : '타이틀',
			items : [{
				xtype : 'spacer'
			},{
				xtype : 'button',
				text : '닫기',
				ui : 'decline-round',
				handler : function(btn, event){
					overlay.hide();
				}
			}]
		}); //end overlayToolbar
		var overlay = new Ext.create('Ext.Panel',{
			floatingCls : 'x-floating',
			modal : true,
			contentEl : 'overlayid',
			items : [overlayToolbar],
			width : 350,
			height : 350
		}); //end overlay
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				items : [{
					xtype : 'button',
					text : '버튼overlay',
					handler : function(btn, event){
						overlay.setCentered(false);
						overlayToolbar.setTitle('버튼에 위치한 Overlay');
						overlay.showBy(btn);
					}
				},{
					xtype : 'spacer'
				},{
					xtype : 'button',
					text : '가운데overlay',
					handler : function(btn, event){
						overlay.setCentered(true);
						overlayToolbar.setTitle('중앙에 위치한 Overlay');
						overlay.show();
					}
				}]
			}]
		}); //end rootPanel
		Ext.Viewport.add(rootPanel);
	}//end launch
});