
//获取公司id  openid

function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

mui.ready(function(){
	var openid = GetQueryString("openId");
	var xdUrl='http://192.168.1.126:9102'; 
		  
	//预约滑动显示隐藏
	document.addEventListener("touchmove",function(){
		document.getElementById("older").style.display="none";
	})   
	   
	document.addEventListener("touchend",function(){
		document.getElementById("older").style.display="block";
	});
	
	//头部value
	var companyId = 1;
	http("decorationStyle",companyId,"Styles");
	http("homeType",companyId,"House");
	function http(sign,companyId,id){
		$.ajax(xdUrl+'/deploy/queryDeployForWeChat',
		{      
			data:{ 
				"companyId":companyId,   
				"sign":sign,
				"id":id 
			},
			type:'post',//HTTP请求类型 
			timeout:10000,//超时时间设置为10秒； 
			success:function(data){    
				var data=data.data;
				console.log(data)
				//装修风格
				 
				mui.each(data,function(index,data){ 
					var _html='<option value='+data.name+'>'+data.name+'</option>'
					document.getElementById(id).innerHTML+=_html; 
				});
			},
			error:function(err){  
				//异常处理；  
				console.log(err);
			}
		});
	}    
//默认加载列表 加载一次 

	firstone(companyId);
	function firstone(companyId){
		setTimeout(function(){
			$.ajax({
				url: xdUrl+'/projectBase/queryProjectsForWeChat?limit=10',
				data:{ 
					companyId,
					page:1
				},  
				type:'post',
				timeout:10000, 
				success:function(data){  
					var dataList=data.data.list;  
					console.log(data.data.lastPage); 
					
					if(dataList.length>0){
						mui.each(dataList,function(index,data){  
							var _html='<li class="case-content-list"><a class="case-content-list-a"><img src="img/xgt3.png"/><div class="case-content-list-div"><div class="case-content-list-sj"><img src="img/topsj.png"></div><div class="case-content-list-title">'+data.residentialDistrict+'</div><div class="case-content-list-fg"><span>'+data.housingArea+'</span> <span>'+data.decorationStyle+'</span> <span>'+data.homeType+'</span></div></div></a></li>'
			 				document.getElementById("shangla").innerHTML+=_html;
						}); 
					}else{ 
						$(".loadmore_a").html("--没有更多数据--");
					}
					
				},error:function(err){  
					//异常处理；   
					console.log(err); 
				}
			});
		},1000); 
		
		nowUp(page=1,companyId=1);
	}
 	

    
	
 	//根据头部切换加载
	  
	$(".drop-down").change(function(){	
  		
  		
 		var page= 1;  
		console.log(housingArea); 
		choices(decorationStyle,homeType,housingArea,page,companyId);
		
		function choices(decorationStyle,homeType,housingArea,page,companyId){
			
			mui.ajax(   
				xdUrl+'/projectBase/queryProjectsForWeChat?&limit=10',
				{      
					data:{   
						decorationStyle,
						homeType,
						housingArea,
						companyId, 
						page   
					},
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒； 
					success:function(data){  
						console.log(data.data);
						console.log(data.data.list);
						document.getElementById("shangla").innerHTML="";
						var dataList=data.data.list;     
						if(0<dataList.length){
							
							mui.each(dataList,function(index,data){  
								var _html='<li class="case-content-list"><a class="case-content-list-a"><img src="img/xgt4.png"/><div class="case-content-list-div"><div class="case-content-list-sj"><img src="img/topsj.png"></div><div class="case-content-list-title">'+data.residentialDistrict+'</div><div class="case-content-list-fg"><span>'+data.housingArea+'</span> <span>'+data.decorationStyle+'</span> <span>'+data.homeType+'</span></div></div></a></li>'
			 					document.getElementById("shangla").innerHTML+=_html;
							}); 
							
							$(".loadmore_a").hide();
							
						}else{
							$(".loadmore_a").html("--没有更多数据--");
							
						}
					},     
					error:function(err){  
						//异常处理；   
						console.log(err);
					}
			}); 
			
			
			clickUp(decorationStyle,homeType,housingArea,page,companyId);
			
		}
	});  
 	
 	
	//上拉加载
	 
	function nowUp(page,companyId){ 
		var $window = $(window);
	    var $document = $(document);
	    $window.scroll(function(){
	        if ($document.scrollTop() + $window.height() >= $document.height()) {
	        	$(".loadmore_a").show();
	       		$(".loadmore_a").html("加载中......");
	       		
				page++ 
				
				console.log("现在页数"+page);
			  
				$.ajax({  
		            url : xdUrl+'/projectBase/queryProjectsForWeChat?limit=10',
					data:{ 
						companyId, 
						page 
					},
		            type : "post",
		            dataType: "json",  
		            success : function(data) { 
		            	var allpage=data.data.lastPage;
		            	console.log("总页数："+allpage);
		       			console.log("第"+page+"页"); 
		            	var dataList=data.data.list;  
		            	console.log(dataList)
		            	 //总页数 
		            	if(page <= allpage){    
		            		//length长度
		            		if(dataList.length>0){
								mui.each(dataList,function(index,data){  
									var _html='<li class="case-content-list"><a class="case-content-list-a"><img src="img/xgt3.png"/><div class="case-content-list-div"><div class="case-content-list-sj"><img src="img/topsj.png"></div><div class="case-content-list-title">'+data.residentialDistrict+'</div><div class="case-content-list-fg"><span>'+data.housingArea+'</span> <span>'+data.decorationStyle+'</span> <span>'+data.homeType+'</span></div></div></a></li>'
					 				document.getElementById("shangla").innerHTML+=_html;
								}); 
							}else{ 
								$(".loadmore_a").html("没有更多数据");
							}
							
		        			$(".loadmore_a").html("加载中.....");
							
		            	}else{
		            		$(".loadmore_a").html("没有更多了");
		            	}
		

		               
		            },error:function(err) {
		                console.log(err); 
		            }
		        });
	        } 
	    });	
		
		 
	}
	
	

    function clickUp(decorationStyle,homeType,housingArea,page,companyId){
    	
    	var $window = $(window);
	    var $document = $(document);
	    $window.scroll(function(){
	        if ($document.scrollTop() + $window.height() >= $document.height()) {
	        	$(".loadmore_a").show();
	       		$(".loadmore_a").html("加载中......");
	       		
				page++ 
				console.log("页数"+page);
			 
				$.ajax({  
		            url : xdUrl+'/projectBase/queryProjectsForWeChat?limit=10',
					data:{ 
						decorationStyle,
						homeType, 
						housingArea,
						companyId, 
						page 
					},
		            type : "post",
		            dataType: "json",  
		            success : function(data) { 
		            	var allpage=data.data.lastPage;
		            	console.log("总页数："+allpage);
		            	var dataList=data.data.list;  
		            	console.log(dataList)
		            	 //总页数 
		            	if(page <= allpage){    
		            		//length长度
		            		if(dataList.length>0){
								mui.each(dataList,function(index,data){  
									var _html='<li class="case-content-list"><a class="case-content-list-a"><img src="img/xgt3.png"/><div class="case-content-list-div"><div class="case-content-list-sj"><img src="img/topsj.png"></div><div class="case-content-list-title">'+data.residentialDistrict+'</div><div class="case-content-list-fg"><span>'+data.housingArea+'</span> <span>'+data.decorationStyle+'</span> <span>'+data.homeType+'</span></div></div></a></li>'
					 				document.getElementById("shangla").innerHTML+=_html;
								}); 
							}else{ 
								$(".loadmore_a").html("没有更多数据");
							}
							
		        			$(".loadmore_a").html("加载中.....");
							
		            	}else{
		            		$(".loadmore_a").html("没有更多了");
		            	}
		
		       			console.log("第"+page+"页"); 
		               
		            },error:function(err) {
		                console.log(err); 
		            }
		        });
	        } 
	    });	
    }
	
	
	
	
	

	
	
	
	
		
		
});