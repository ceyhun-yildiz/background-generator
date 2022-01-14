var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//var button = document.querySelector(".button");
//var output = document.querySelector(".output");
var button = document.getElementById("button")
var output = document.getElementById("output")

function changeBackground() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";

	color1.setAttribute("value", color1.value);
	color2.setAttribute("value", color2.value);
}

function setRandomBackground() {
	var randomR1 = Math.round(Math.random() * 255);
	var randomG1 = Math.round(Math.random() * 255);
	var randomB1 = Math.round(Math.random() * 255);
	var randomR2 = Math.round(Math.random() * 255);
	var randomG2 = Math.round(Math.random() * 255);
	var randomB2 = Math.round(Math.random() * 255);
	body.style.background = `linear-gradient(to right, rgb(${randomR1}, ${randomG1}, ${randomB1}), rgb(${randomR2}, ${randomG2}, ${randomB2}))`
	output.textContent = window.getComputedStyle(body).backgroundImage
}


color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

button.addEventListener("click", setRandomBackground);


/*
1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

1. You need to change the 2 input values in the HTML to the same as the gradient background in the css file.
2. Delete the linear gradient in the css and add it in the javascript assigning the input values from the html file.
3. Actually I'm having a problem with this bonus task. I also need to figure it out. If anyone could give a hint would be appreciated.*/