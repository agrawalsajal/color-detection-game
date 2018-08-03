var numColor = 6;
var color = generateRandomColors(numColor);

var pickedColor = pickColor();
var color_disp = document.querySelector("#color_disp");
var box = document.querySelectorAll(".box");
var mDisplay = document.getElementById("mDisplay");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

color_disp.textContent = pickedColor;
for(var i =0 ;i<color.length;i++){
	box[i].style.background = color[i];

	box[i].addEventListener("click",function(){
		if(this.style.background === pickedColor){
			mDisplay.textContent = "You Win";
			newColor.textContent = "Play Again?";
			changeEachColor(pickedColor);
		}

		else{
			this.style.background = "grey";
			mDisplay.textContent = "Try Again";
		}
	});
}

function changeEachColor(pc){
	for(var i =0 ;i<color.length;i++){
			box[i].style.background = pc;		
	}
	h1.style.background = pc;
}

function pickColor(){
	var num = Math.floor(Math.random() * numColor) ;
	return(color[num]);
}

function generateRandomColors(num){
	var arr =[];
	for(var i=0 ; i<num; i++){
		num1 = Math.floor(Math.random() * 256 );
		num2 = Math.floor(Math.random() * 256 );
		num3 = Math.floor(Math.random() * 256 );
		arr[i] = "rgb("+num1+", "+num2+", "+num3+")";
	}
	return arr;
}

newColor.addEventListener("click",function(){
	color = generateRandomColors(numColor);
	pickedColor = pickColor();
	color_disp.textContent = pickedColor;
	mDisplay.textContent = "";
	newColor.textContent = "New Colors";
	for(var i =0 ;i<color.length;i++){
		box[i].style.background = color[i];
	}
});

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numColor = 3;
	color = generateRandomColors(numColor);
	pickedColor = pickColor();
	color_disp.textContent = pickedColor;
	for(var i =0 ;i<6;i++){
			if(i<numColor){
				box[i].style.background = color[i];
			}
			else{
				box[i].style.background = "none";
			}
	}

});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numColor = 6;
	color = generateRandomColors(numColor);
	pickedColor = pickColor();
	color_disp.textContent = pickedColor;
	mDisplay.textContent = "";
	for(var i =0 ;i<color.length;i++){
		box[i].style.background = color[i];
	}
});





