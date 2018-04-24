//The window on load function called on page load.
var imagePos = 1;
window.onload = function() {
	displayImage(imagePos);
	headerImageSlider();
};


//The fnction to increment images in the slider.
function incrImages(n){

displayImage(imagePos += n);

}

//To select active image for slider.
function activeSlide(n) {

displayImage(imagePos = n);

}

//The display image image to display slide images.
function displayImage(n){

var i;

var images = document.getElementsByClassName("trendsimage");

var navig = document.getElementsByClassName("navig");

if (n > images.length) { imagePos = 1};

if (n < 1) { imagePos = images.length};

for (i=0;i<images.length;i++) {

images[i].style.display = "none";

};

for (i=0;i<navig.length;i++) {

navig[i].className = navig[i].className.replace(" active","");

};

images[imagePos-1].style.display = "block";

navig[imagePos-1].className += " active";

}

//The automatic image slider with time out function.
function headerImageSlider() {
	var i;
	var images = document.getElementsByClassName("hiimage");
	for (i=0;i<images.length;i++) {

		images[i].style.display = "none";

		};
		if (imagePos > images.length) {
			imagePos = 1;
		}
		images[imagePos-1].style.display = "block";
		imagePos++;
		//Set timeout of 2.5 seconds before each slide.
		setTimeout(headerImageSlider,2500);

}

//On scroll function.
window.onscroll = function() {
	navStickFuntion()
};

//The function to make navigation bar to follow.
function navStickFuntion() {
	// Get the navbar
	var navbar = document.getElementById("myHeader");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;
	if (window.pageYOffset >= 128) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}



