// Your code goes here

const scaleUp = document.querySelectorAll("img");
scaleUp.forEach(item => {
	item.addEventListener("mouseover", e => {
		item.style.transform = "scale(1.2)";
		item.style.transition = "transform 0.5s";
	});
});

const scaleDown = document.querySelectorAll("img");
scaleDown.forEach(item => {
	item.addEventListener("mouseleave", e => {
		item.style.transform = "scale(1.0)";
		item.style.transition = "transform 0.5s";
	});
});

const zoom = document.querySelectorAll("p");
zoom.forEach(item => {
	item.addEventListener("wheel", e => {
		e.preventDefault();
		item.style.transform = "scale(2.0)";
		item.style.background = "white";
	});
});

const unZoom = document.querySelectorAll("p");
unZoom.forEach(item => {
	item.addEventListener("click", e => {
		item.style.transform = "scale(1.0)";
	});
});

const color = document.querySelectorAll("h2");
color.forEach(item => {
	item.addEventListener("dblclick", e => {
		item.style.color = "blue";
	});
});

window.addEventListener("load", e => {
	console.log("Page is fully loaded");
});

const key = document.querySelector(".main-navigation");
let turnBlue = e => {
	key.style.background = "blue";
};
document.addEventListener("keydown", turnBlue);

const header = document.querySelector(".intro");
const newInput = document.createElement("input");
newInput.setAttribute("type", "text");
header.append(newInput);

const input = document.querySelector("input");

input.addEventListener("focus", event => {
	input.style.background = "blue";
});

input.addEventListener("blur", event => {
	input.style.background = "white";
});

const button = document.querySelectorAll(".content-pick btn");
const contPick = document.querySelectorAll("content-pick");

const stopEvent = function(e) {
	event.stopPropagation();
	alert("Under Construction!");
};
const alertClick = function(e) {
	alert("Coming Soon!");
};
button.addEventListener("click", stopEvent);
contPick.addEventListener("click", alertClick);
