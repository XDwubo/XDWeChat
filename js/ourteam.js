$(function(){
	var   xdUrl='http://192.168.1.126:9102'; 
	//团队列表 
	$.ajax({      
		url:xdUrl+'/subjectAssign/findListByProjectId',
		data:{ 
			projectId:"customer_1059"
		},
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒； 
		success:function(data){  
			console.log(data.data.list)      
			var data=data.data;
			console.log("团队列表"+data);
			mui.each(data,function(index,data){  
				var _html='<li class="team_list" id='+data.employeeId+'><div class="team_listimg"><img src="img/rztx.png"></div><div class="team_list_right"><div class="team_namebr"><div class="team_name"><a class="team_namea">'+data.employeeName+'</a> <span class="mod-container">'+data.departmentName+'</span><div class="team_gy mui-ellipsis">'+data.signature+'</div></div><div class="team_phone"><a  href="tel:'+data.telephone+'"><img src="img/bdphone.png"></a>  </div></div></div></li>';
				document.getElementById("team_nav").innerHTML+=_html;
				  
			});    
			
			$(".team_list").click(function(){ 
				
				var userId=$(this).attr("id");
				location.href="staff_xx.html"+"?"+"userId="+userId; 
				console.log("列表流程id："+$(this).attr("id"));
			});   
		},     
		error:function(err){  
			console.log(err);  
		}
	});
});
 