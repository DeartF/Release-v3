var carousel = document.getElementById("carousel")
var current_slide = 0;
var indicator = document.getElementsByClassName("dots-item")
console.log(indicator);

function nextSlide() {
	indicator[current_slide].className = "dots-item"
	if(current_slide == 2) {
		current_slide = 0;
	}
	else {
		current_slide ++;
	}

	carousel.style.left = -current_slide * 100 + "%";
	indicator[current_slide].className = "dots-item active"
}

function prevSlide() {
	indicator[current_slide].className = "dots-item"
	if(current_slide == 0) {
		current_slide = 2;
	}
	else {
		current_slide --;
	}
	carousel.style.left = -current_slide * 100 + "%";
	indicator[current_slide].className = "dots-item active"
}

// var slider2 = document.getElementsByClassName("slider-item");
// var current_slide2 = 0;

// function setSlider(){
// 	slider2[current_slide2].className = "slider-item"
// 	if(current_slide2 == 2){
// 		current_slide2 = 0;
// 	}
// 	else {
// 		current_slide2 ++;
// 	}
// 	slider2[current_slide2].className = "slider-item active"
// }

// setInterval(setSlider, 3000)