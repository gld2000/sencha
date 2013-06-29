Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		var button1 = new Ext.create('Ext.Button',{
			text : '버튼1 비표준 방식',
			handler: function(){
				Ext.Msg.alert('메시지1','handler는 버튼에 특화된 구성옵션');   // 클릭 이벤트만 먹는다.
			}
		});
		var button2 = new Ext.create('Ext.Button',{
			text : '버튼2 표준방식',
			listeners : {
				tap : function(){
					Ext.Msg.alert('메시지2','표준적인 이벤트 처리방법');
				}
			}
		}); // 주로 쓰는 것은 2번이다. 
		var button3 = new Ext.create('Ext.Button',{
			text : '버튼3 표준방식 - 리스너를 별도로 기술',
			ui : 'action',
		});
		button3.addListener(
				'tap',
				function(){
					Ext.Msg.alert('메시지3', '표준적인 이벤트 처리방법: 리스너를 별도로');
				}
		);	
		var button4 = new Ext.create('Ext.Button',{
			text : '버튼4 표준방식 - 기타 구성 옵션',
			ui : 'confirm',
		});
		button4.addListener(
				'tap',
				function(){
					Ext.Msg.alert('메시지4', '표준적인 이벤트 처리방법: 기타구성 옵션');
				},
				this,
				{
					delay : 3000,   // 3초후
					single : true   // 한번만
				}
		);
		var button5 = new Ext.create('Ext.Button',{
			text : '버튼5 표준방식- 기타 구성옵션',
			ui : 'decline',
			listeners : {
				tap : {
					fn : function(){
						Ext.Msg.alert('메시지5', '표준적. 브라우저 차원의 이벤트');
					}
				}
			}
		}); // 2번과 비슷한 방식 fn만 다름
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch',
			},
			items : [button1, button2, button3, button4, button5]
		});
		Ext.Viewport.add(rootPanel);
	}
});