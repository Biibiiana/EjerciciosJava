var totalSquares = 6;

window.onload = function(){
    hard(totalSquares);

    document.querySelector("#easyButton").addEventListener("click", function(){
        easy(totalSquares);
    });

    document.querySelector("#hardButton").addEventListener("click", function(){
        hard(totalSquares);
    });

    document.querySelector("#reset").addEventListener("click", function(){
        newResert(totalSquares);
    });

    for(var i = 0; i < totalSquares; i++) {
        //add click listeners to squares
        document.querySelectorAll(".square")[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                document.querySelector("#message").textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                document.querySelector("#message").textContent = "Try Again";
            }
        });
    }
};

function easy(totalSquares){
    document.querySelector("#hardButton").classList.remove("selected");
	document.querySelector("#easyButton").classList.add("selected");
    document.querySelector("#message").textContent = "";

    numSquares = 3;

    colors = generateRandomColors(numSquares);
    var random = Math.floor(Math.random() * colors.length);
    pickedColor = colors[random];
    document.querySelector("#colorDisplay").textContent = pickedColor;

    var squares = document.querySelectorAll(".square");
    for(var i = 0; i < totalSquares; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } 
        else {
            squares[i].style.display = "none";
        }
    }
}

function hard(totalSquares){
    document.querySelector("#easyButton").classList.remove("selected");
	document.querySelector("#hardButton").classList.add("selected");
    document.querySelector("#message").textContent = "";

    numSquares = 6;

    colors = generateRandomColors(numSquares);
    var random = Math.floor(Math.random() * colors.length);
    pickedColor = colors[random];
    document.querySelector("#colorDisplay").textContent = pickedColor;

    var squares = document.querySelectorAll(".square");
    for(var i = 0; i < totalSquares; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
}

function newResert(total){
    if (numSquares === 3){
        easy(total);
    }
    else if (numSquares === 6){
        hard(total);
    }
}

function generateRandomColors(numSquares){
    var arr = [];
    for(var i = 0; i < numSquares; i++){
        arr.push(randomColor());
    }
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