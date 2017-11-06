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
	
	var zsName=document.getElementById("Names").value;
	var Phone=document.getElementById("Phone").value;
	var Code=document.getElementById("Code").value;
	var zw= /^[\u4E00-\u9FA5]+$/;
	var ph= /^1[3|4|5|7|8]\d{9}$/;
	
	
	mui("body").on("tap","#codeBtn",function(){
			if(zw.test(zsName)){ 
				alert(zsName)
	    		if((/^1[3|4|5|7|8]\d{9}$/.test(Phone))){
			  				document.getElementById("hqyzm").style.backgroundColor="#999";
			        		 var step = 59;
				            $("#codeBtn").text('重新发送60');
				            var _res = setInterval(function(){      
				                $("#codeBtn").attr("disabled", true);//设置disabled属性
				                $("#codeBtn").text('重新发送'+step);
				                step-=1;
				                if(step <= 0){
					                $("#codeBtn").removeAttr("disabled"); //移除disabled属性
					                $("#codeBtn").text('获取验证码');
					                clearInterval(_res);//清除setInterval 
					                document.getElementById("codeBtn").style.backgroundColor="#3ba0da";
				                }
				            },1000); 
								
					}else{
					        mui.toast("请输入正确的手机格式"); 
					    }
	    		
	    	}else{
	    		mui.toast("姓名只能输入中文")
	    	}
	});
	
	
	
	
//	$.ajax({   
//		url:xdUrl+'/customer/bridgingMobileForWeChat',
//		data:{ 
//			customerId, 
//			zsName,
//			Code 
//		}, 
//		type:'post', 
//		timeout:10000,
//		success:function(data){  
//			
//			   
//		},      
//		error:function(msg){   
//			//异常处理；   
//			console.log(msg); 
//		}
//	});
});  