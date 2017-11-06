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
	
	var customerId=$.getUrlParam('customerId');
	console.log('customerId: '+customerId);
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
			console.log("我的日记 我的头部信息"+data)
			var toptxUrl=data.headImgUrl;
			var topName=data.name; 
			var topBuild=data.residentialDistrict;
			var topEare=data.buildingArea;
			var topStyle=data.decorationStyle;
			var topbJ=data.homeType;
			var topPice=data.expectationCost;
			
			$("#myToptx").attr("src",toptxUrl);
			$("#myTopname").html(topName);
			$("#MyTopabuild").html(topBuild);
			$("#topear").html(topEare);
			$("#topstyle").html(topStyle);
			$("#topbj").html(topbJ);
			$("#toppice").html(topPice+"元");
			
			mui.each(data,function(index,data){ 
				
			});
		},
		error:function(err){  
			//异常处理；  
			console.log(err);
		}
	});
});
 