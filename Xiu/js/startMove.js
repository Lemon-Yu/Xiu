function startMove(obj, json, func){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var bStop = true; //指示是否多个样式，都到达目的值

		for(var attr in json){
			//1、获取当前值
			//透明度不一样
			var iCur = null;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			}else{
				iCur =  parseInt(getStyle(obj, attr))
			}

			var speed = (json[attr] - iCur) / 8;

			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


			//动画执行完成，关闭定时器，判断，其中有一个到达目的值，就关闭定时器。
			//【注】保证所有运动执行完成以后再关闭定时器。
		
			iCur += speed;
			
			if(attr == "opacity"){	
				obj.style.opacity = iCur / 100;
				obj.style.filter = "alpha(opacity=" + iCur + ");"
			}else{
				obj.style[attr] = iCur + "px";
			}

			if(iCur != json[attr]){
				bStop = false;
			}
		}


		//bStop为true的时候，是所有样式都到达目的值了
		if(bStop){
			clearInterval(obj.timer);
			if(func){
				func();
			}
		}


	}, 30);
}

//获取当前有效样式
function getStyle(element, attr){
	return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr];
}