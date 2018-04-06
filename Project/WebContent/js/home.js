
var imagePos = 1;
window.onload = function() {
	displayImage(imagePos);
	headerImageSlider();
};



function incrImages(n){

displayImage(imagePos += n);

}


function activeSlide(n) {

displayImage(imagePos = n);

}


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
		setTimeout(headerImageSlider,2500);

}



