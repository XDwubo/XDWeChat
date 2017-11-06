$(function(){
	//服务团队列表
	//接收url 传值userid
	(function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);
    
//  var userId=$.getUrlParam('userId');
	var xdUrl='http://192.168.1.126:9102';
	
	//用户customer 等于attentionCustomerId 从我的信息过来   
	var attentionCustomerId="customer_1058";
	var userId=39;
	var page=1;
	employeeAl(userId,page,attentionCustomerId);
	
	function employeeAl(userId,page,attentionCustomerId){
		
		//关注员工
		
		$(".stall_cols").click(function(){
			$(".guanzhu").css("color","red");
			alert("成功"); 
			$.ajax({      
				url:xdUrl+'/customerAttention/attentionCustomer',
				data:{ 
					userId,  
					attentionCustomerId
				},
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒； 
				success:function(data){   
					
				},     
				error:function(err){  
					console.log(err);  
				}
			});
			
		});
		
		
		
		
		$.ajax({      
			url:xdUrl+'/projectBase/queryProjectsByUserId?limit=10',
			data:{ 
				userId, 
				page
			},
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒； 
			success:function(data){   
					var dataList= data.data.list;
					console.log("员工案例:"+dataList);
					
					if(dataList != ""){ 
						var employeeAl=dataList.length;
						console.log("员工案例条数："+employeeAl);
						mui.each(dataList,function(index,list){ 
							var _html='<li class="worksites_list"><div class="worksites_img pr"><div class="worksite_nic mui-row"><div class="mui-col-xs-11"><div class="worksite_nictx mui-pull-left"><img src="img/tx.png"></div><div class="mui-pull-left worksite_nicm"><span class="worksite_nicspan">不吃鱼的猫</span><div class="worksite_jdnc"><span class="worksite_gdm">'+list.residentialDistrict+'</span> <span class="worksite_gcjd">泥作工程阶段</span></div></div></div><div class="mui-col-xs-1"><span class="mui-icon iconfont icon-shipin"></span></div></div><img class="imgwh" src='+list.firstPicture+'></div><div id="worksites_first" class="mui-row"><span id="worksites_top"></span><div class="mui-col-xs-8 worksite_span"><span>'+list.decorationStyle+'</span> <span>'+list.houseType+'</span> <span>180.96万元</span> <span>'+list.buildingArea+'</span></div><div class="mui-col-xs-4 worksite_liul"><div class="mui-pull-left"><span class="mui-icon iconfont icon-liulan"></span> <a>'+list.tourNum+'</a></div><div class="mui-pull-right"><span class="mui-icon iconfont icon-zan"></span> <a>'+list.praiseNumber+'</a></div></div></div></li>';
							document.getElementById("employeeAl").innerHTML+=_html;
							 
						});   
					}
				 
				
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
		
		//点击切换 
		$(".stall_one").click(function(){
			var id=$(this).attr("id");
			if(id==1){
				$("#employeeAl").html("");
				$.ajax({      
					url:xdUrl+'/projectBase/queryProjectsByUserId?limit=10',
					data:{ 
						userId,  
						page
					},
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒； 
					success:function(data){   
						var dataList= data.data.list;
						console.log("员工案例:"+dataList);
						
						if(dataList != ""){ 
							var employeeAl=dataList.length;
							console.log("员工案例条数："+employeeAl);
							mui.each(dataList,function(index,list){ 
								var _html='<li class="worksites_list"><div class="worksites_img pr"><div class="worksite_nic mui-row"><div class="mui-col-xs-11"><div class="worksite_nictx mui-pull-left"><img src="img/tx.png"></div><div class="mui-pull-left worksite_nicm"><span class="worksite_nicspan">不吃鱼的猫</span><div class="worksite_jdnc"><span class="worksite_gdm">'+list.residentialDistrict+'</span> <span class="worksite_gcjd">泥作工程阶段</span></div></div></div><div class="mui-col-xs-1"><span class="mui-icon iconfont icon-shipin"></span></div></div><img class="imgwh" src='+list.firstPicture+'></div><div id="worksites_first" class="mui-row"><span id="worksites_top"></span><div class="mui-col-xs-8 worksite_span"><span>'+list.decorationStyle+'</span> <span>'+list.houseType+'</span> <span>180.96万元</span> <span>'+list.buildingArea+'</span></div><div class="mui-col-xs-4 worksite_liul"><div class="mui-pull-left"><span class="mui-icon iconfont icon-liulan"></span> <a>'+list.tourNum+'</a></div><div class="mui-pull-right"><span class="mui-icon iconfont icon-zan"></span> <a>'+list.praiseNumber+'</a></div></div></div></li>';
								document.getElementById("employeeAl").innerHTML+=_html;
								 
							});   
						}
					},     
					error:function(err){  
						console.log(err);  
					}
				});
			}else if(id==2){
				$("#employeeAl").html("");
				$.ajax({      
					url:xdUrl+'/projectBase/queryProjectsByUserId?limit=10',
					data:{ 
						userId,  
						page
					},
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；  
					success:function(data){   
						var diaryPlList= data.data.list.diaryCommentVOS;
						console.log("日记评论:"+diaryPlList);
						
						if(diaryPlList != "" &&diaryPlList != undefined){ 
							var employeeAl=diaryPlList.length;
							console.log("日记评论条数："+employeeAl);
							mui.each(dataList,function(index,list){ 
								var _html='<li class="worksites_list"><div class="worksites_img pr"><div class="worksite_nic mui-row"><div class="mui-col-xs-11"><div class="worksite_nictx mui-pull-left"><img src="img/tx.png"></div><div class="mui-pull-left worksite_nicm"><span class="worksite_nicspan">不吃鱼的猫</span><div class="worksite_jdnc"><span class="worksite_gdm">'+list.residentialDistrict+'</span> <span class="worksite_gcjd">泥作工程阶段</span></div></div></div><div class="mui-col-xs-1"><span class="mui-icon iconfont icon-shipin"></span></div></div><img class="imgwh" src='+list.firstPicture+'></div><div id="worksites_first" class="mui-row"><span id="worksites_top"></span><div class="mui-col-xs-8 worksite_span"><span>'+list.decorationStyle+'</span> <span>'+list.houseType+'</span> <span>180.96万元</span> <span>'+list.buildingArea+'</span></div><div class="mui-col-xs-4 worksite_liul"><div class="mui-pull-left"><span class="mui-icon iconfont icon-liulan"></span> <a>'+list.tourNum+'</a></div><div class="mui-pull-right"><span class="mui-icon iconfont icon-zan"></span> <a>'+list.praiseNumber+'</a></div></div></div></li>';
								document.getElementById("employeeAl").innerHTML+=_html;
								 
							});   
						}
					},     
					error:function(err){  
						console.log(err);  
					}
				});
				
				
				
			}else{
				$.ajax({      
					url:xdUrl+'/customerAttention/findAttentionByUserId',
					data:{ 
						userId, 
					},
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒； 
					success:function(data){   
						var dataList= data.data;
						console.log("员工案例:"+dataList);
						
						if(dataList != ""){ 
							$("#employeeAl").html("");
							$("#employeeAl").addClass("mui-table-view");
							var employeeAl=dataList.length; 
							console.log("员工粉丝条数："+employeeAl);
							mui.each(dataList,function(index,list){ 
								var _html='<li class="mui-table-view-cell mui-media"><a href="javascript:;"><img class="mui-media-object mui-pull-left" src='+list.headImgUrl+'><div class="mui-media-body" style="height:40px;border-bottom:1px solid #DBDBDB">'+list.id+'</div></a></li>';
								document.getElementById("employeeAl").innerHTML+=_html;
								 
							});    
						}
					},     
					error:function(err){  
						console.log(err);  
					}
				});
			}
			
		});
	}
}); 