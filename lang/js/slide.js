var slide = document.getElementById('slide')
var slide_backdrop = document.getElementById('slide-backdrop')

function showAside() {
	slide.style.left = "0px";
	slide_backdrop.style.display = "block";
}

function hideAside() {
	slide.style.left = "-270px";
	slide_backdrop.style.display = "none";
}