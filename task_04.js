// JavaScript Document

function enterLeft(){
	var input = document.getElementById("input").value;
	if(!(input)||isNaN(input)){
	alert("��������ȷ��ֵ");
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
	alert("��������ȷ��ֵ");
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
	alert("�޷�����ɾ�������������");
	else{
	div.removeChild(firstSpan);
	alert("����"+firstSpan.innerHTML+"�ѱ�ɾ��");
	}
	}
	
		
function exitRight(){
	var div = document.getElementById("number");
	var lastSpan = div.lastChild;
	if(!lastSpan)
	alert("�޷�����ɾ�������������");
	else{
	div.removeChild(lastSpan);
	alert("�Ҳ��"+lastSpan.innerHTML+"�ѱ�ɾ��");
	}
	}