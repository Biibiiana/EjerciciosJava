var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


window.onload = function(){
    hard();

    document.querySelector("#easyButton").addEventListener("click", function(){
        easy();
    });

    document.querySelector("#hardButton").addEventListener("click", function(){
        hard();
    });

    document.querySelector("#reset").addEventListener("click", function(){
        newReset();
    });

    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
};

function easy(squares){
    //highlight button to show selected
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    //set number of squares to 3
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    //Generate a random number
    var random = Math.floor(Math.random() * colors.length);
    //pick a new random color from array
    pickedColor = colors[random];
    //change display to show new picked color
    colorDisplay.innerHTML = pickedColor;
    //loop through 3 squares and reset colors while displaying none for squares without new reset colors
    for(var i = 0; i < squares.length; i++){
        if(arr[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function hard(squares){
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    var random = Math.floor(Math.random() * colors.length);
    pickedColor = colors[random];
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
}

function newResert(){
    if (numSquares === 3){
        easy();
    }
    else {
        hard();
    }
}

function generateRandomColors(numSquares){
	//make an array with random colors
    var arr = [];
    for(var i = 0; i < numSquares; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}