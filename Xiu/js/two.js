// ------------------------我的走秀下拉列表---------------------------------
		window.onscroll = function(){
		var aDiv = document.getElementsByClassName("footer_box")[0];
		var oDiv = document.getElementsByClassName("gps")[0];
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTop >= 40){
			oDiv.style.position = "fixed";
			oDiv.style.top = 0;
		}else{
			if(scrollTop < 40){
				oDiv.style.position = null;
				oDiv.style.top = null;
			}
		}
	}
/*-------------------------list---------------------------*/	
	$.ajax({
		url:"js/two.json",
		type:"POST",
		dataType:"json",
		success:function(data){
			var html = "";
			for(var i in data){
				html += '<dl><dt><a href = "#"><img src = "' + data[i].imgSrc + '"/></a><p class = "dt0">可售尺码：<span>'+ data[i].chima +'</span></p></dt><dd><p class = "p1">'+ data[i].EName +'</p><p class = "p2"><a href = "#">'+ data[i].CName +'</a></p><p class = "p3">￥<span>'+ data[i].price +'</span></p></dd></dl>'
			}
			$(".dataList").html(html);
			 
		}
	})
	/*-------------------------移入边框----------------------------*/
	$(function(){
			$(".dataList").on("mouseover", "dl", function(){
				$(this).css("borderColor", "#bfbfbf");
			})
			$(".dataList").on("mouseout", "dl", function(){
				$(this).css("borderColor", "#fff");
			})
		})
/*	------------------------------侧边栏--------------------------------*/
$(function(){
			$("#side_buttom").on("mouseover", "a", function(){
				$(this).css("backgroundPositionX", "-68px");
			})
			$("#side_buttom").on("mouseout", "a", function(){
				$(this).css("backgroundPositionX", "0");
			})
		})

window.onload = function(){
	var oDiv = document.getElementById("side");
	var oSpan = document.getElementById("down");
	var eDiv = document.getElementById("side_buttom");
	oSpan.onclick = function(){
		this.style.display = "none";
		eDiv.style.display = "none";
	}
}
			