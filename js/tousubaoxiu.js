$(function(){
	var xdUrl='http://192.168.1.126:9102'; 
	//我的日记 我的信息
	(function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);
	
//	var projectId=$.getUrlParam('projectId');
	var projectId="project_17";
	console.log('projectId: '+projectId);
	
	//动态调节宽高
	 
	function heigtWidth(){
		var pingWidth=$(document.body).width();  
		var nameWidth=pingWidth-94;   
		$(".complaint_listright").css("width",nameWidth); 
		$(".complaint_listright").css("float","left"); 
		$(".complaint_listright").css("padding-left","16px"); 
	}
	 
	
	$.ajax( 
		xdUrl+'/projectFeedback/findFeedbacksForWechat',
		{        
		data:{ 
			projectId,
			type:0 
		},
		type:'post',//HTTP请求类型 
		timeout:10000,//超时时间设置为10秒；  
		success:function(data){    
			var data=data.data; 
			var tsNumer=data.length; 
			$("#tsNumber").html("("+tsNumer+")")
			
			$.each(data,function(index,data){ 
				var times=data.createDate;
				var types=data.status;
				console.log("时间："+times)
				console.log("状态"+types);
				
				 
				  
				 if(types==0){
					var times=getMyDate(times);
				 	function getMyDate(str){ 
					
						var oDate = new Date(str),   
						oYear = oDate.getFullYear(),  
	            		oMonth = oDate.getMonth()+1,  
			            oDay = oDate.getDate(),  
			            oHour = oDate.getHours(),   
			            oMin = oDate.getMinutes(),   
			            oSen = oDate.getSeconds(),    
						oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
						
						var _html='<li class="complaint_list" id='+data.id+'><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time">投诉时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg">未处理</div></div><div class="clear"></div></div></a></li><div class="clear"></div>';
						document.getElementById("wdell").innerHTML+=_html;
						 
						heigtWidth();
						

						console.log("流程id："+data.id);
						
				   };	   
				    //补0操作
				    function getzf(num){  
				        if(parseInt(num) < 10){  
				            num = '0'+num;  
				        }  
				        return num;  
				    }	
				 	
				 }else{
				 	
				 	var times=getMyDate(times);
				 	function getMyDate(str){ 
						var oDate = new Date(str),   
						oYear = oDate.getFullYear(),  
	            		oMonth = oDate.getMonth()+1,  
			            oDay = oDate.getDate(),  
			            oHour = oDate.getHours(),  
			            oMin = oDate.getMinutes(),   
			            oSen = oDate.getSeconds(),    
						oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
						
//						var cljdcont=data.content;
//							alert("详情页面内容"+cljdcont); 
							
						var _html='<li class="complaint_list" id='+data.id+'><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time complaint_times">投诉时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg complaint_jgs">已处理</div></div><div class="clear"></div></div></a></li>';  
						document.getElementById("wdell").innerHTML+=_html;
						
						 
						//传工程id projectId  
						
						$(".complaint_list").click(function(){ 
							var cljdcont=data.content;
							var dataLccont = $(this).data("content",cljdcont)
							var lcid=$(this).attr("id");
							location.href="customer.html"+"?"+"lcid="+lcid+"&projectId="+projectId+"&content="+dataLccont;
							console.log("列表流程id："+$(this).attr("id"));
						});

						heigtWidth();							 	
						console.log("流程id："+data.id);	 
				   };	   
				    //补0操作
				    function getzf(num){  
				        if(parseInt(num) < 10){  
				            num = '0'+num;  
				        }  
				        return num;  
				    }
				 	
				 }
			});
		},
		error:function(err){  
			//异常处理；  
			console.log(err);
		}
	});
	
	
	$(".ts").click(function(){ 
		
		function heigtWidth(){
			var pingWidth=$(document.body).width();  
			var nameWidth=pingWidth-94;   
			$(".complaint_listright").css("width",nameWidth); 
			$(".complaint_listright").css("float","left"); 
			$(".complaint_listright").css("padding-left","16px"); 
		}
			 
		var i = $(this).index();  
		var shbx=$(this).children("i").text();
		
		$(this).addClass("zhuangx").siblings("div").removeClass("zhuangx");
		
		
		
		if(shbx==="装修投诉"){
			$(".hb_bound").text("新增投诉"); 
			$("#wdell").html("");
			
			$.ajax( 
			xdUrl+'/projectFeedback/findFeedbacksForWechat',
			{        
			data:{ 
				projectId,
				type:0 
			},
			type:'post',//HTTP请求类型 
			timeout:10000,//超时时间设置为10秒；  
			success:function(data){    
				var data=data.data; 
				var tsNumer=data.length; 
				$("#tsNumber").html("("+tsNumer+")")
				
				$.each(data,function(index,data){ 
					var times=data.createDate;
					var types=data.status;
					console.log("时间："+times)
					console.log("状态"+types);
	
					  
					if(types==0){
						var times=getMyDate(times);
				 		function getMyDate(str){ 
					
							var oDate = new Date(str),   
							oYear = oDate.getFullYear(),  
		            		oMonth = oDate.getMonth()+1,  
				            oDay = oDate.getDate(),  
				            oHour = oDate.getHours(),  
				            oMin = oDate.getMinutes(),   
				            oSen = oDate.getSeconds(),    
							oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
							  
							var _html='<li class="complaint_list"><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time">投诉时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg">未处理</div></div><div class="clear"></div></div></a></li><div class="clear"></div>';
							document.getElementById("wdell").innerHTML+=_html;
							
						  	 
							heigtWidth();
					   };	   
					    //补0操作
					    function getzf(num){  
					        if(parseInt(num) < 10){  
					            num = '0'+num;  
					        }  
					        return num;  
					    }	
				 	 
					}else{
				 	
					 	var times=getMyDate(times);
					 	function getMyDate(str){ 
							var oDate = new Date(str),   
							oYear = oDate.getFullYear(),  
		            		oMonth = oDate.getMonth()+1,  
				            oDay = oDate.getDate(),  
				            oHour = oDate.getHours(),  
				            oMin = oDate.getMinutes(),   
				            oSen = oDate.getSeconds(),    
							oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
							  
							var _html='<li class="complaint_list"><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time complaint_times">投诉时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg complaint_jgs">已处理</div></div><div class="clear"></div></div></a></li>';  
							document.getElementById("wdell").innerHTML+=_html;
							
							heigtWidth();							 	
								 
					   };	   
				    //补0操作
					    function getzf(num){  
					        if(parseInt(num) < 10){  
					            num = '0'+num;  
					        }  
					        return num;  
					    }
						 	
						 }
					});
				},
				error:function(err){  
					//异常处理；  
					console.log(err);
				}
			});
			
			
		}else{   
			
			$(".hb_bound").text("新增报修");
			$("#wdell").html("");
			
			$.ajax( 
				xdUrl+'/projectFeedback/findFeedbacksForWechat',
				{        
				data:{ 
					projectId,
					type:3 
				},
				type:'post',//HTTP请求类型  
				timeout:10000,//超时时间设置为10秒；  
				success:function(data){    
					var data=data.data; 
					var tsNumer=data.length; 
					$("#shbxNumber").html("("+tsNumer+")")
					
					$.each(data,function(index,data){ 
						var times=data.createDate;
						var types=data.status;
						console.log("时间："+times)
						console.log("状态"+types);
		
						  
						 if(types==0){
							var times=getMyDate(times);
						 	function getMyDate(str){ 
							
								var oDate = new Date(str),   
								oYear = oDate.getFullYear(),  
			            		oMonth = oDate.getMonth()+1,  
					            oDay = oDate.getDate(),  
					            oHour = oDate.getHours(),  
					            oMin = oDate.getMinutes(),   
					            oSen = oDate.getSeconds(),    
								oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
								
								var _html='<li class="complaint_list"><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time">报修时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg">未处理</div></div><div class="clear"></div></div></a></li><div class="clear"></div>';
								document.getElementById("wdell").innerHTML+=_html;
								heigtWidth();
						   };	   
						    //补0操作
						    function getzf(num){  
						        if(parseInt(num) < 10){  
						            num = '0'+num;  
						        }  
						        return num;  
						    }	
						 	
						 }else{
						 	
						 	var times=getMyDate(times);
						 	function getMyDate(str){ 
								var oDate = new Date(str),   
								oYear = oDate.getFullYear(),  
			            		oMonth = oDate.getMonth()+1,  
					            oDay = oDate.getDate(),  
					            oHour = oDate.getHours(),  
					            oMin = oDate.getMinutes(),   
					            oSen = oDate.getSeconds(),    
								oTime = oYear +'.'+ getzf(oMonth) +'.'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间  
								  
								var _html='<li class="complaint_list"><a><div class="complaint_listdiv"><img class="complaint_listimg" src='+data.imgPath+'><div class="complaint_listright"><div class="complaint_time complaint_times">报修时间：'+oTime+'</div><div class="complaint_cont">'+data.title+'</div><div class="complaint_jg complaint_jgs">已处理</div></div><div class="clear"></div></div></a></li>';  
								document.getElementById("wdell").innerHTML+=_html;
								
								heigtWidth();							 	
									 
						   };	   
						    //补0操作
						    function getzf(num){  
						        if(parseInt(num) < 10){  
						            num = '0'+num;  
						        }  
						        return num;  
						    }
						 	
						 }
					});
				},
				error:function(err){  
					//异常处理；  
					console.log(err);
				}
			}); 
		}
		
//      $(this).parent().siblings('.types').children(".complaint_nav").eq(i).show().siblings().hide(); 
		
	});
	
	
	
});

