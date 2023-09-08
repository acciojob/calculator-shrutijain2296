//your code here
let input = document.getElementById("input");
let currentValue = "";

function handleInput(value){
	currentValue += value;
	input.value = currentValue;
}