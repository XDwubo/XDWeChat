$(function(){
	var   xdUrl='http://192.168.1.126:9102'; 
	
	
	//推荐统计
	(function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);
     
    
    console.log('推荐统计：'+xdUrl+'/customerRecommend/findByCustomerIdAndType')
	
	var customerId=$.getUrlParam('customerId');
	var recommendName=$.getUrlParam('recommendName')
	console.log('推荐人'+customerId);
	$("#toptjr").html(recommendName);  
	
	user(customerId) 
	function user(customerId){  
	 	$.ajax(
	 		{
	 			url : xdUrl+'/customerRecommend/findByCustomerIdAndType',
				data:{  
					customerId,
					recommendStatus:"0"  
				},
	            type : "post",
	            dataType: "json",
	            success : function(data) { 
	            	var data=data.data; 
	            	console.log("预推荐数"+data.length);
	            	var yuyNumer=data.length;
					$("#ytj").html(yuyNumer);
					 
					if(yuyNumer = 0){ 
//						$("#yyjl").attr("disabled",true)
					}else{
						$.each(data,function(index,data){ 
							var _html='<li class="recommend_list"><img src='+data.headImg+'><div class="recommend_nc mui-ellipsis">'+data.recommendName+'</div></li><div class="clear"></div>';
	 						document.getElementById("ytjtx").innerHTML+=_html;  
						}); 
						 
						
						var times=getMyDate(1509435228000);
						 
						function getMyDate(str){ 	  
							var oDate = new Date(str),   
							oMonth = oDate.getMonth()+1,  
							oDay = oDate.getDate(),  
							oTime =getzf(oMonth) +'月'+ getzf(oDay)+'日';//最后拼接时间  
							
							console.log(oTime) 
							
							$.each(data,function(index,data){ 
								var _html='<li class="recommend_jllist"><div class="recommend_time">'+oTime+'</div><div class="recommend_right"><a>'+data.recommendName+'</a>扫描了您的专属推荐码并关注公众号</div><div class="clear"></div></li>';
			 					document.getElementById("ytjjl").innerHTML+=_html; 
	 
							});     
								
							$("#clicktj").click(function(){
							 
								if($(this).text()=="推荐记录"){
									$(this).html('收起<span class="iconfont icon-packup"></span>')
								}else{
									$(this).html('推荐记录<span class="iconfont icon-zhankai"></span>')
								} 
								
								$(this).parent().parent().siblings(".recommend_yyjl").toggle();
								
								var pingWidth=$(document.body).width();
								var nameWidth=pingWidth-95;  
								$(".recommend_right").css("width",nameWidth); 
								$(".recommend_right").css("float","left"); 
							}); 
					   	};  
					    //补0操作
					    function getzf(num){  
					          if(parseInt(num) < 10){  
					              num = '0'+num;  
					          }  
					          return num;  
					    }
					}
	                
	            },error:function(err) {
	                console.log(err); 
	            }
	        }); 
		
		console.log('预约统计：'+xdUrl+'/customerRecommend/findByCustomerIdAndType')
		//预约记录
		$.ajax({ 
				url : xdUrl+'/customerRecommend/findByCustomerIdAndType',
				data:{  
					customerId, 
					recommendStatus:"1" 
				},
	            
	            type : "post",
	            dataType: "json",
	            success : function(data) { 
	            	var data=data.data; 
	            	console.log("预约数"+data.length);
	            	var yuyNumer=data.length;
					$("#yuyuenumber").html(yuyNumer);
					
					if(yuyNumer = 0){ 
//						$("#yyjl").attr("disabled",true)
					}else{
						$.each(data,function(index,data){ 
							var _html='<li class="recommend_list"><img src='+data.headImg+'><div class="recommend_nc mui-ellipsis">'+data.recommendName+'</div></li><div class="clear"></div>';
	 						document.getElementById("yuyuetx").innerHTML+=_html;  
						}); 
						 
						
						var times=getMyDate(1509435228000);
						 
						function getMyDate(str){ 	  
							var oDate = new Date(str),   
							oMonth = oDate.getMonth()+1,  
							oDay = oDate.getDate(),  
							oTime =getzf(oMonth) +'月'+ getzf(oDay)+'日';//最后拼接时间  
							
							console.log(oTime) 
							
							$.each(data,function(index,data){ 
								var _html='<li class="recommend_jllist"><div class="recommend_time">'+oTime+'</div><div class="recommend_right"><a>'+data.recommendName+'</a>扫描了您的专属推荐码并关注公众号</div><div class="clear"></div></li>';
			 					document.getElementById("yuyuejl").innerHTML+=_html; 
	 
								});  
								
								$("#yyjl").click(function(){
								 
								if($(this).text()=="预约记录"){
									$(this).html('收起<span class="iconfont icon-packup"></span>')
								}else{
									$(this).html('预约记录<span class="iconfont icon-zhankai"></span>')
								} 
								
								$(this).parent().parent().siblings(".recommend_yyjl").toggle();
								
								var pingWidth=$(document.body).width();
								var nameWidth=pingWidth-95;  
								$(".recommend_right").css("width",nameWidth); 
								$(".recommend_right").css("float","left"); 
							}); 
					   	};  
					    //补0操作
					    function getzf(num){  
					          if(parseInt(num) < 10){  
					              num = '0'+num;  
					          }  
					          return num;  
					    }
					}
	                
	            },error:function(err) {
	                console.log(err); 
	            }
        }); 
		
		
		console.log('开工：'+xdUrl+'/customerRecommend/findByCustomerIdAndType')
		//开工记录
		$.ajax({ 
			url : xdUrl+'/customerRecommend/findByCustomerIdAndType',
			data:{ 
				customerId,
				recommendStatus:"2" 
			},
            
            type : "post",
            dataType: "json",
            success : function(data) { 
            	var data=data.data; 
            	console.log("开工数"+data.length);
            	var yuyNumer=data.length;
				$("#kgnumber").html(yuyNumer);
				
				if(yuyNumer = 0){ 
//						$("#yyjl").attr("disabled",true)
				}else{
					$.each(data,function(index,data){ 
						var _html='<li class="recommend_list"><img src='+data.headImg+'><div class="recommend_nc mui-ellipsis">'+data.recommendName+'</div></li><div class="clear"></div>';
 						document.getElementById("kgtx").innerHTML+=_html;  
					}); 
					 
					
					var times=getMyDate(1509435228000);
					 
					function getMyDate(str){ 	  
						var oDate = new Date(str),   
						oMonth = oDate.getMonth()+1,  
						oDay = oDate.getDate(),  
						oTime =getzf(oMonth) +'月'+ getzf(oDay)+'日';//最后拼接时间  
						
						console.log(oTime) 
						
						$.each(data,function(index,data){ 
							var _html='<li class="recommend_jllist"><div class="recommend_time">'+oTime+'</div><div class="recommend_right"><a>'+data.recommendName+'</a>扫描了您的专属推荐码并关注公众号</div><div class="clear"></div></li>';
		 					document.getElementById("kglb").innerHTML+=_html; 
 
							});  
							
							$("#clickkg").click(function(){
							if($(this).text()=="开工记录"){
								$(this).html('收起<span class="iconfont icon-packup"></span>')
							}else{
								$(this).html('开工记录<span class="iconfont icon-zhankai"></span>')
							}  
							
							$(this).parent().parent().siblings(".recommend_yyjl").toggle();
							
							var pingWidth=$(document.body).width();
							var nameWidth=pingWidth-95;  
							$(".recommend_right").css("width",nameWidth); 
							$(".recommend_right").css("float","left"); 
						}); 
				   	};  
				    //补0操作
				    function getzf(num){  
				          if(parseInt(num) < 10){   
				              num = '0'+num;  
				          }  
				          return num;  
				    }
				}
                
            },error:function(err) {
                console.log(err); 
            }
        }); 
		
		console.log('完工：'+xdUrl+'/customerRecommend/findByCustomerIdAndType')
		//完工记录
		$.ajax({ 
			url : xdUrl+'/customerRecommend/findByCustomerIdAndType',
			data:{ 
				customerId,
				recommendStatus:"3" 
			},
            type : "post",
            dataType: "json",
            success : function(data) { 
            	var data=data.data; 
            	console.log("完工数"+data.length);
            	var yuyNumer=data.length;
				$("#wgnumber").html(yuyNumer);
				
				if(yuyNumer = 0){ 
//						$("#yyjl").attr("disabled",true)
				}else{
					$.each(data,function(index,data){ 
						var _html='<li class="recommend_list"><img src='+data.headImg+'><div class="recommend_nc mui-ellipsis">'+data.recommendName+'</div></li><div class="clear"></div>';
 						document.getElementById("closetx").innerHTML+=_html;  
					}); 
					 
					
					var times=getMyDate(1509435228000);
					 
					function getMyDate(str){ 	  
						var oDate = new Date(str),   
						oMonth = oDate.getMonth()+1,  
						oDay = oDate.getDate(),  
						oTime =getzf(oMonth) +'月'+ getzf(oDay)+'日';//最后拼接时间  
						
						console.log(oTime) 
						
						$.each(data,function(index,data){ 
							var _html='<li class="recommend_jllist"><div class="recommend_time">'+oTime+'</div><div class="recommend_right"><a>'+data.recommendName+'</a>扫描了您的专属推荐码并关注公众号</div><div class="clear"></div></li>';
		 					document.getElementById("closelb").innerHTML+=_html; 
 
							});  
							
							$("#closejl").click(function(){
							if($(this).text()=="完工记录"){
								$(this).html('收起<span class="iconfont icon-packup"></span>')
							}else{
								$(this).html('完工记录<span class="iconfont icon-zhankai"></span>')
							}  
							
							$(this).parent().parent().siblings(".recommend_yyjl").toggle();
							
							var pingWidth=$(document.body).width();
							var nameWidth=pingWidth-95;  
							$(".recommend_right").css("width",nameWidth); 
							$(".recommend_right").css("float","left"); 
						}); 
				   	};  
				    //补0操作
				    function getzf(num){  
				          if(parseInt(num) < 10){   
				              num = '0'+num;  
				          }  
				          return num;  
				    }
				}
                
            },error:function(err) {
                console.log(err); 
            }
        }); 
		
	 } 
});
//多个头像  当数据为0 时 未处理11.11