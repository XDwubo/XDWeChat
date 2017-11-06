//获取公司id  openid

function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


$(function(){
	var xdUrl='http://192.168.1.126:9102'; 
	//公司id
	var openid = GetQueryString("openId");
	

	var companyId=1;
	var isfinished=0;
	var sort="desc";
	var page=1;  
	var limit=5;
	 
	zxqList(page,companyId)
	
	function zxqList(page,companyId){ 
		
		$.ajax({
	 		url:xdUrl+'/diaryDetails/queryProjectsByUserId?limit=5',
			data:{  
				page, 
				companyId
			},
			type:'post',//HTTP请求类型 
			timeout:10000,//超时时间设置为10秒； 
			success:function(data){    
				var data=data.data;
				console.log("全部数据:"+data);
				
				var dataList=data.list;
				console.log("list数据"+dataList);
				
				var dzNumber=dataList.diaryPraiseVOS;
				var diaryPl=dataList.diaryCommentVOS;
				
				if(dzNumber !=undefined && dzNumber !=""){
					var dzlenth=dzNumber.length;
					$(".dzNumber").html(dzlenth);
				} 
				
				if(diaryPl !=undefined && diaryPl !=""){
					var pllenth=dzNumber.length;
					$(".plNumber").html(pllenth);
				} 
				
				if(dataList != ""){
					$.each(dataList,function(index,list){  
						
						var zanList = list.diaryPraiseVOS;
						var plList  = list.diaryCommentVOS;
						
						if('' == plList && ''== zanList ){
							$(".build_comment_xsj").hide();
						} 
						
						//点赞
						
						if(zanList != ""){
							$.each(zanList,function(index,zan){
								var _html='<span><a class="build_zan_name">马云</a> ,</span>';
								$(".build_comment_zanbox").html(_html);
							});
						}else{
							$(".dznumber").parent().parent().parent().siblings().children(".build_comment_plbox").children(".build_comment_zanbox").hide(); 
						}
						
						//评论
						if(plList != ""){
							
							$.each(plList,function(index,pl){
								var _html='<div class="build_comment_hf"><a class="build_comment_hfm">西红柿炒鸡蛋：</a><span class="build_comment_hfnr">不晓得好吃不，不好吃就不吃不好吃就不吃不晓得好吃不，不好吃就不吃不好吃就不吃</span></div> ';
								$(".build_comment_plhfbox").html(_html);
							});
							
						}else{ 
							$(".build_comment_plhfbox").hide(); 
							$(".build_comment_morepl").hide();
						}    
						
						//图片
						var pictrue=list.diaryCommentVOS;
						
						if(pictrue != ""){
							$.each(pictrue,function(index,pictrue){
								var _html='<div class="mui-col-xs-4 picture_yl"><img class="sss" src="img/xgt1.png" data-preview-src="" data-preview-group="1"/></div>';
								$(".picture_yl").html(_html);
								
								// 在不同屏幕下动态设置预览img的宽高相等
								
								var rowWidth=$(".picture_yl").width(); 
								$(".picture_yl img").css("height",rowWidth); 
							});
							
						}else{ 
							$(".picture_yl").hide(); 
						}
						
						
						var times=list.release_time;
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
							   
							var _html='<li class="buildcase_list mui-table-view-cell"><a class="mui-navigate-right buildcase_title"><div class="buildcase_title_cont"><div class="buildcase_title_l mui-pull-left"><img class="buildcase_list_tx" src='+list.headImg+'></div><div class="buildcase_title_r mui-pull-left"><div class="build_name">'+list.customerName+'</div><div class="build_names">'+list.residential_district+'</div><div class="case-content-list-fg"><span>'+list.building_area+'</span> <span>'+list.decoration_style+'</span> <span class="mr0">'+list.house_type+'</span></div></div></div></a><div><div class="build_cont"><a class="build_cont_stage">'+list.processName+'</a> <span class="build_cont_Step mui-ellipsis">'+list.diary_title+'</span><div class="build_ms">'+list.diary_content+'</div></div><div class="mui-row picture"><div class="mui-col-xs-4 picture_yl"><img class="sss" src="img/xgt1.png" data-preview-src="" data-preview-group="1"></div></div></div><div class="build_comment"><div class="build_comment_top"><span class="build_comment_time">'+oTime+'</span> <span class="build_comment_name">'+list.stationName+'-'+list.printUsername+'</span> <span class="build_comment_fb">发布</span><div class="build_comment_btn"><span id="" class="mui-icon iconfont icon-morenzan build_comment_zan"><a class="build_zan_number  dznumber"></a></span> <span class="mui-icon iconfont icon-pinglun build_comment_pl mui-pull-right"><a class="build_zan_number plnumber"></a></span></div></div><div class="build_comment_xsj"><span class="build_comment_ssj"></span><div id="" class="build_comment_plbox"><div class="build_comment_zanbox"><span class="mui-icon iconfont icon-dianjihouzan build_comment_ztzan>赞</div><div class="build_comment_plhfbox"><div class="build_comment_hf"></div></div><div class="build_comment_morepl">更多评论</div></div></div></div></li>';
							document.getElementById("zxqlb").innerHTML+=_html;
							 
					    };	   
					    //补0操作
					    function getzf(num){  
					        if(parseInt(num) < 10){  
					            num = '0'+num;  
					        }  
					        return num;  
					    }
						
					}); 
					
					
				}else{
					document.getElementById("zxqlb").innerHTML="<div class='mui-text-center'>暂时没有数据....</div>";
				}
				 
			},error:function(err){  
				console.log(err);
			}
		});
		
	}
 
});