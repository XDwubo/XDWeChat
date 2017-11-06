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
    var Bound=$.getUrlParam('Bound');
	var xdUrl='http://192.168.1.126:9102';
	$("#ysetup").html("你已绑定号码为"+Bound+"的手机");
	
	//设置  
  
	$("#chageph").click(function(){ 
		//跳转已绑定页面
 		window.location.href="chagebound.html"+"?"+"customerId="+customerId;
	}); 
}); 