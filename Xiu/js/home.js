window.onload = function(){
		var oLi = document.getElementById("mine");
		var oA = document.getElementById("show");
		var oDiv = document.getElementById("list");
		var aA = oDiv.getElementsByTagName("a");
		oLi.onmouseover = function(){
			oA.style.backgroundColor = "white";
			oA.style.color = "#d50215";
			oDiv.style.display = "block";
			oDiv.style.border = "1px solid #d7d7d7";
			oA.style.border = "1px solid #d7d7d7";
			oA.style.borderBottom = 0;
		}
		 oLi.onmouseout = function(){
			oDiv.style.display = "none";
			oA.style.backgroundColor = "#333333";
			oA.style.color = "#d7d7d7";
			oA.style.border = 0;
		}
			oDiv.onmouseover = function(ev){
				var e = ev || window.event;
				var target = e.target || window.event.srcElement;
				for(var i =0;i < aA.length;i++){
						aA[i].style.color ="";	
					}
				if(target.nodeName == "A"){
					target.style.color = "#d50215";
				}
			}
			var search_left_in = document.getElementById('search_left_in');
			search_left_in.onfocus = function(){
				this.placeholder = "";
			}
			search_left_in.onblur = function(){
				this.placeholder = "请搜索Alexander McQueen试试";
			}
			/*var oImg = document.getElementById("big");
			oImg.onmouseover = function(){
				startMove(oImg, {
			 		width: 610,
					height: 310,
					marginTop: -5,
					marginLeft: -5
				})
			}

			oImg.onmouseout = function(){
				startMove(oImg, {
					width: 600,
					height: 300,
					marginTop: 0,
					marginLeft: 0
				})
			}*/
}
/*-----------------------------------main的图片切换-------------------------------------*/
$(function(){
	$("#left_bottom_in").find("li").mouseover(function(){
		$("#left_bottom_in").find("li").find("i").attr("id", "");
		$("#left_bottom_in").find("li").find("#active").css("display","none");
		$(this).find("i").attr("id", "active");
		$("#main_left_in").find("img").css("display", "none");
		$("#main_left_in").find("img").eq($(this).index()).css("display", "block");
	})
})
/*------------------------------AJAX评价----------------------------------*/
$.ajax({
		url:"js/details.json",
		type:"POST",
		dataType:"json",
		success:function(data){
			var html = "";
			for(var i in data){
				html += '<div><img src = "'+ data[i].img +'"/><p>'+ data[i].name +'</p><a href="#">'+ data[i].if +'</a></div><div class = "list_bottom_r"><img src = "'+ data[i].imgSrc +'"/><div><p><span>评分：</span><b></b><span>'+ data[i].prize +'</span>颜色：'+ data[i].color +'</p><p>尺码：'+ data[i].size +'</p><p>'+ data[i].content +'</p><p><a href="#">'+ data[i].a +'</a><span>发表于'+ data[i].time +'</span></p></div></div>'
			}
			$(".evaluate_list_j").html(html);
			 
		}
	})