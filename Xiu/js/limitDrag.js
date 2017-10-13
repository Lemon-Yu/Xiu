function Limitdrag(id){
	Drag.call(this, id);

}

for(var i in Drag.prototype){
	Limitdrag.prototype[i] = Drag.prototype[i];
}

//重写move函数进行重写
Limitdrag.prototype.move = function(ev){
	var e = ev || window.event;
	var l = e.clientX - this.offsetX;
	var t = e.clientY - this.offsetY;
	if(l < 0){
		l = 0;
	}else if(l > document.documentElement.clientWidth - this.oDiv.offsetWidth){
		l = document.documentElement.clientWidth - this.oDiv.offsetWidth;

	} 
	if(t < 0){
		t = 0;
	}else if(t > document.documentElement.clientHeight - this.oDiv.offsetHeight){
		t = document.documentElement.clientHeight - this.oDiv.offsetHeight;
	}

	this.oDiv.style.left = l + "px";
	this.oDiv.style.top = t + "px";
}