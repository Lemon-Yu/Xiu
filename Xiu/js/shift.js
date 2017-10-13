window.onload = function(){
	var oDiv = document.getElementById("shift");
	var oAs = oDiv.getElementsByName("box");
	alert(oAs.length);
	var speed = 0;
	for(var i = 0; i < oAs.length; i++){
		oAs[i].mouseover = function(){
			var speed = 10;
		}
	}
}