Ext.application({
	
	launch : function(){
		var date = new Date();  // date 날짜 정의
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월',
		                       '7월','8월','9월','10월','11월','12월'];
		
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber' , type : 'string'
				},{
					name : 'text' , type : 'string'
				}]
			}
		});  //  데이터 타입 정의 (필드)
				
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', text : '남'   // 필드를 text로 줘야 값이 뜬다.
			},{
				indexNumber : '2', text : '여'
			}]
		}); // 모델을 명시
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {   // 필수항목 * 인듯.
					required : true,  
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					label : '이름',
					clearIcon : true
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					label : '생년월일',
					dateFormat : 'Y/m/d',
					placeHolder : 'yyyy/mm/dd', // 처음 데이터 값을 뭐로 보일 것이냐.
					value : date,  // 오늘 날짜 넣기
					picker : { 
						yearFrom : 1950,
                        slotOrder: ['year', 'month', 'day'],  // 안에 있는 값 순서 바꾸기. 
                        useTitles : true, // 상단표기
                        dayText : '일',
                        monthText : '월',
                        yearText : '년'
                    },
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					label : '군필여부',
					checked : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					label : '경력',
					minValue : 0,
					maxValue : 100,
					increment : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						label : '성별',  
						store : genderStore  // 여기서부터는 값을 그냥 못넣는다. store로 넣는다.
					},{
						xtype : 'numberfield',  // textfield와 차이점은 키보드가 숫자로 나옴.
						name : 'age',
						label : '나이',
						value : 22    
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					label : '이메일',
					placeHolder : 'test@test.com',  // 흐릿하게 예시를 보여주는 것인듯.
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					label : '홈페이지',
				},{
					xtype : 'sliderfield',
					name : 'pay',
					label : '희망연봉',   // 이벤트 change 이용. 값이 바뀔때마다 뿌려주면 된다.
					value : 50,
					max : 100,
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							//console.log(Ext.ComponentQuery.query('emailfield'));
							var loadValues = formPanel.getValues();
							var name = loadValues.name; // 모두 잡아오기
							console.log(loadValues.name);
							// 아키텍쳐에서는 이런 방식으로 가져오지 않고 id값을 줘서
							// 그것을 이용해서 가져온다.
						}
					},{
						xtype : 'spacer',
						width : 10, // pixel 단위
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}]
			}]
		});
	}
});