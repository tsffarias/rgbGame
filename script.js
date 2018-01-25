var numberOfSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();

	setupSquares();

	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6; 
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < square.length; i++){

		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				document.getElementById("message").innerHTML = "Correct! <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";


	for(var i = 0; i < square.length; i++){
		if (colors[i]) {
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else{
			square[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){

	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;

}

function randomColor(){

	//pick a "red" from 0 - 255 
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";

}