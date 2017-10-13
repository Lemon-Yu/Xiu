$(function(){
			var aBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");

			var iNow = 0; //代表当前显示的图片的下标
			var timer = null;

			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				//当点击的时候将所有的按钮的class取消掉
				aBtns.attr("class", "");
				aBtns.eq(iNow).attr("class", "active");

				//让ul动
				oUl.animate({left: -1200 * iNow}, function(){
					if(iNow == aBtns.size()){
						oUl.css("left", 0);
						iNow = 0;
					}
				});
			}

			function timerInner(){
				iNow++;
				tab();
				
				if(iNow == aBtns.size()){
					aBtns.eq(0).attr("class" ,"active");
				}
				
			}

			timer = setInterval(timerInner, 2000);
			$("ul").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(timerInner, 2000);
			});
			
		})