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
      
    
	
	var lcid=$.getUrlParam('lcid');
	var projectId=$.getUrlParam('projectId');
	var content=$.getUrlParam('content');
	console.log("传过来的内容："+content) 
	console.log("流程id："+lcid); 
	console.log("流程projecotid："+projectId); 
	
});
