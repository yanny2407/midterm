function add(char){
	var display = document.getElementById('display');
	display.value = display.value +char
}
function sub(char){
	var display = document.getElementById('display');
	display.value = display.value -char
}
function mul(char){
	var display = document.getElementById('display');
	display.value = display.value *char
}
function div(char){
	var display = document.getElementById('display');
	display.value = display.value /char
}

function calculate(){
	var display = document.getElementById('display');
	var result = eval(display.value);
	document.getElementById('display').value =result;
}

function reset(char){
	document.getElementById('display').value ="";
	document.getElementById('result').value ="";
}
