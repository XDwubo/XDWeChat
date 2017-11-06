

//
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
$(function(){
	
	/**获取openid**/
   var openid = GetQueryString("openId");
// $('#codes').html(code);  
   
   if( '' != openid && undefined != openid && null != openid){
   	   
 	   $.ajax({      
	        url:"http://192.168.1.126:9102/customer/findCustomerByOpenId?openId="+openid, 
			type:'POST',//HTTP请求类型  
			success:function(data){
//				alert("我的openid："+data.data.openid);  
				var openid=data.data.openid;
				alert(openid); 
				console.log(openid);
				$("#openid").html(openid); 
			},      
		});  
} 
    
	 
	var national=GetQueryString();
	//地址
	var   xdUrl='http://192.168.1.126:9102'; 
	
	 $(".renovation").click(function(){
	 	location.href="decortecase.html"
	 });
	   
	var mineWidth=$(".mine_list").width();
	$(".mine_list").css("height",mineWidth);
	
	// 我的信息 
	console.log('我的信息：'+xdUrl+'/taskData/getScheduleById')
	var customerId="customer_1058";
	user(customerId);
	
	function user(customerId){
	 	$.ajax(    
			xdUrl+'/customerAttention/findCustomerById',
			{      
				data:{   
					customerId   
				},
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒； 
				success:function(data){
					var data=data.data;
				    var name =data.name;
				    var imgSrc=data.headImgUrl;
				    console.log(data)
				    var tjrName=data.recommendName;
				    var projectId=data.projectId;
				    console.log("projectId"+projectId);
				    console.log("推荐人姓名"+tjrName);   
				    
				    document.getElementById("myname").innerHTML=name;
				    document.getElementById("myimg").src=imgSrc; 
				    
				    $("#tjtj").click(function(){   
				    	location.href="recommend.html"+"?"+"customerId="+customerId+"&recommendName="+tjrName;
				    }); 
				     //我的日记
				    $("#myRj").click(function(){
				    	location.href="decorate.html"+"?"+"customerId="+customerId;
				    }); 
				    //装修投诉报修
				    $("#clickTsbx").click(function(){
				    	location.href="complaint.html"+"?"+"projectId="+projectId;
				    });
				    
				    //设置
				    $("#setup_tz").click(function(){
				    	location.href="../setup/setup.html"+"?"+"customerId="+customerId;
				    });
					       
				},      
				error:function(err){   
					//异常处理；   
					console.log(err); 
				}
		});
	 }
	
	//进度条
	console.log('进度条：'+xdUrl+'/taskData/getScheduleById')
	mui.ajax( 

		xdUrl+'/taskData/getScheduleById',
		{      
			data:{ 
				customerId:"customer_1066" 
			}, 
			type:'post',
			timeout:10000,
			success:function(data){  
				    console.log("进度条"+data);
				    var myJdt=data.data;
				    console.log("进度条宽度"+myJdt)
				    if(myJdt<=90){   
			    		$("#myJdt").attr("src","../img/jindu.png");
			    		$("#myJdt").css("margin-left",myJdt+'%')
			    		document.getElementById('myJdt').innerHTML=myJdt+"%";
			    		document.getElementById("jdtWidth").style.width=myJdt+"%"; 
				    }
//				    
			},     
			error:function(msg){   
				//异常处理；   
				console.log(err); 
			}
	});
	
	
});
