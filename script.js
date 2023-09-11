//your code here
let input = document.getElementById("input");
let currentValue = "";

function handleInput(value){
	currentValue += value;
	input.value = currentValue;
}
document.getElementById("clr").addEventListener('click', function(){
	currentValue = "";
	input.value = "";
})
document.getElementById("divide").addEventListener('click', function(){
	handleInput("/")
})
document.getElementById("multiply").addEventListener('click', function(){
	handleInput("*")
})	
document.getElementById("minus").addEventListener('click', function(){
	handleInput("-")
})
document.getElementById("plus").addEventListener('click', function(){
	handleInput("+")
})
document.getElementById("block1").addEventListener('click', function(){
	handleInput("1");	
})
document.getElementById("block2").addEventListener('click', function(){
	handleInput("2");	
})
document.getElementById("block3").addEventListener('click', function(){
	handleInput("3");	
})
document.getElementById("block4").addEventListener('click', function(){
	handleInput("4");	
})
document.getElementById("block5").addEventListener('click', function(){
	handleInput("5");	
})
document.getElementById("block6").addEventListener('click', function(){
	handleInput("6");	
})
document.getElementById("block7").addEventListener('click', function(){
	handleInput("7");	
})
document.getElementById("block8").addEventListener('click', function(){
	handleInput("8");	
})
document.getElementById("block9").addEventListener('click', function(){
	handleInput("9");	
})
document.getElementById("block0").addEventListener('click', function(){
	handleInput("0");	
})
document.getElementById("closeBracket").addEventListener('click', function(){
	handleInput(")");	
})
document.getElementById("openBracket").addEventListener('click', function(){
	handleInput("(");	
})
document.getElementById("dot").addEventListener('click', function(){
	handleInput(".");	
})
document.getElementById("clear").addEventListener('click', function(){
	currentValue = currentValue.slice(0, -1);
	input.value = currentValue;
})

document.getElementById("ans").addEventListener('click', function(){
	try{
		let result = eval(currentValue);
		if(isNaN(result)){
			input.value = "NaN"
		}
		else if(!isFinite(result)){
			input.value = "Infinity";
		}
		else{
			input.value = result;
		}
	}
	catch{
		input.value = "Error";
	}
})

