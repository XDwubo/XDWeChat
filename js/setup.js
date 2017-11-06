$(function(){
	//设置
	//接收url 传值customerId
	(function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);
    
    var customerId=$.getUrlParam('customerId');
	var xdUrl='http://192.168.1.126:9102'; 
	
	//设置
	var Bound=$("#Bound").text().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
	
	$("#Bound").html(Bound); 
  
	$("#bangd").click(function(){ 
		if($("#Bound").text()==""){   
			//跳转已绑定页面
		 	window.location.href="boundlast.html"+"?"+"Bound="+Bound+"&customerId="+customerId;
		}else{     
			//跳转未绑定页面
		 	window.location.href="bound.html"+"?"+"Bound="+Bound+"&customerId="+customerId;
		 }
	}); 
	 

	console.log('进度条：'+xdUrl+'/taskData/getScheduleById');
	
	$.ajax({   
		url:xdUrl+'/taskData/getScheduleById',
		data:{ 
			customerId:"customer_1066" 
		}, 
		type:'post', 
		timeout:10000,
		success:function(data){  
			   
		},      
		error:function(msg){   
			//异常处理；   
			console.log(msg); 
		}
	});
	
	
});
