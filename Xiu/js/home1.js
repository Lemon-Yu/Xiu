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
}
-----------------------------------main的图片切换-------------------------------------
$(function(){
	$("#main_left_bottom").find("li").click(function(){
		alert(1);
	})
})