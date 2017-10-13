function Drag(id){
	this.oDiv = document.getElementById(id);
	var _this = this;
	this.oDiv.onmousemove = function(ev){
		_this.down(ev);
	}
	//this.oDiv.onmousedown = this.down;
	document.onmouseup = this.up;
	 
}

Drag.prototype.down = function(ev){
	var e = ev || window.event;
	this.offsetX  = e.clientX - this.oDiv.offsetLeft;
	this.offsetY = e.clientY - this.oDiv.offsetTop;

	var _this = this;
	document.onmousemove = function(ev){
		_this.move(ev);
	}
	/*Drag.prototype.move = function(ev){
		_this.move(ev)
	}*/
}
Drag.prototype.move = function(ev){
	var e = ev || window.event;
	this.oDiv.style.left = e.clientX - this.offsetX + "px";
	this.oDiv.style.top = e.clientY - this.offsetY + "px";
}

Drag.prototype.up = function(){
	document.onmousemove = null;
}









