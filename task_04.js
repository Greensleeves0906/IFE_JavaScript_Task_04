// JavaScript Document

function enterLeft(){
	var input = document.getElementById("input").value;
	if(!(input)||isNaN(input)){
	alert("请输入正确数值");
	}
	else{
		var div = document.getElementById("number");
		var firstSpan = div.firstChild;
		var span = document.createElement("span");
		var text = document.createTextNode(input);
		span.appendChild(text);
		div.insertBefore(span,firstSpan);
		}
		}

function enterRight(){
	var input = document.getElementById("input").value;
	if(!(input)||isNaN(input)){
	alert("请输入正确数值");
	}
	else{
		var div = document.getElementById("number");
		var span = document.createElement("span");
		var text = document.createTextNode(input);
		span.appendChild(text);
		div.appendChild(span);
		}
		}
		
function exitLeft(){
	var div = document.getElementById("number");
	var firstSpan = div.firstChild;
	if(!firstSpan)
	alert("无法继续删除，请添加数字");
	else{
	div.removeChild(firstSpan);
	alert("左侧的"+firstSpan.innerHTML+"已被删除");
	}
	}
	
		
function exitRight(){
	var div = document.getElementById("number");
	var lastSpan = div.lastChild;
	if(!lastSpan)
	alert("无法继续删除，请添加数字");
	else{
	div.removeChild(lastSpan);
	alert("右侧的"+lastSpan.innerHTML+"已被删除");
	}
	}