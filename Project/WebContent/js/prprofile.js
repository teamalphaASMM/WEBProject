//Called on load of the page.
window.onload = function() {
	if (localStorage.getItem("loginuser") != null) {
		$('#note1').show();
		$('#note').hide();
		$('#calButton').hide();
		// $("#header").load("header.html");
		// $("#myHeader").load("navtabs.html");
		// $('footer').load("footer.html");
		var navbar = document.getElementById("myHeader");
		var sticky = navbar.offsetTop;

		if (typeof (Storage) !== "undefined") {
			document.getElementById("loginuser").innerHTML = "Welcome "
					+ localStorage.getItem(localStorage.getItem("loginuser")
							+ "fname");
		}
		$('#note').hide();
		$('#fname').val(
				localStorage.getItem(localStorage.getItem("loginuser")
						+ "fname"));
		$('#lanem').val(
				localStorage.getItem(localStorage.getItem("loginuser")
						+ "lname"));
		$('#fname').css('color', '#8f8d91');
		$('#lanem').css('color', '#8f8d91');
		var scores = [ 'Select', 'Less than 6.0', '6.0', '6.5', '7.0', '7.5',
				'8.0', '8.5', '9.0' ];
		var country = [ 'Select', 'Australia', 'Brazil', 'Bangladesh',
				'Columbia', 'Denmark', 'Estonia', 'Fiji', 'Germany', 'Hungary',
				'India', 'US' ];
		var credentials = [ 'Select', 'Diploma', 'Bachelors',
				'Two or More Degrees', 'Masters', 'Doctrate' ];
		populateScores(scores, 'lscore');
		populateScores(scores, 'wscore');
		populateScores(scores, 'rscore');
		populateScores(scores, 'sscore');

		populateCountry(country, 'coc');
		populateCred(credentials, 'edu');
	} else {
		location.href = "signin.html";
	}
};

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

//Populating drop down entries in the page.
function populateScores(dropdowndata, id) {
	var displayDrop = "";
	for (i = 0; i < dropdowndata.length; i++) {
		displayDrop += "<option>" + dropdowndata[i] + "</option>";
	}
	document.getElementById(id).innerHTML = displayDrop;
}

function populateCountry(dropdowndata, id) {
	var displayDrop = "";
	for (i = 0; i < dropdowndata.length; i++) {
		displayDrop += "<option>" + dropdowndata[i] + "</option>";
	}
	document.getElementById(id).innerHTML = displayDrop;
}

function populateCred(dropdowndata, id) {
	var displayDrop = "";
	for (i = 0; i < dropdowndata.length; i++) {
		displayDrop += "<option>" + dropdowndata[i] + "</option>";
	}
	document.getElementById(id).innerHTML = displayDrop;
}

//JQuery function called on load.
$(function() {
	var status = localStorage.getItem(localStorage.getItem("loginuser")
			+ "status");
	//If the form is submitted it will show a message and redirect to profile page.
	if (status === "Form Submitted") {

		$('form').hide();
		$('#btndiv').hide();
		$('#prform').hide();

		var modal3 = document.getElementById('noEntryModal');
		modal3.style.display = "block";
		var btn3 = document.getElementById("okebtn");
		btn3.onclick = function() {
			modal3.style.display = "none";
			localStorage.setItem(localStorage.getItem("loginuser") + "status",
			"Form Submitted");
			location.href = "user-pr-page.html";
		}
	}
	var l = 'n';
	var r = 'n';
	var w = 'n';
	var s = 'n';

	//Adding date picker.
	$('#dob').datepicker({
		inline : true,
		showOtherMonths : true,
		dayNamesMin : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	});
	$('#ldate').datepicker({
		inline : true,
		showOtherMonths : true,
		dayNamesMin : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	});

	//The on change functions for all the fields for proper validations.
	//On all the change functions, proper validations are checked and css for messages and border color is displayed.
	//On change functions facilitates dynamic validations on each field.
	$("#dob")
			.change(
					function() {
						$('#dob').datepicker().show();
						if (!validateDob()) {
							$("#dob").css('width', '935px');
							$("#dob").css('border-right-style', 'solid');
							$("#dob").css('border-right-color', 'red');
							$("#dob").css('border-right-width', '15px');
							document.getElementById('dobinvalid').innerHTML = "*Please enter a valid date";
						} else {
							$("#dob").css('width', '935px');
							$("#dob").css('border-right-style', 'solid');
							$("#dob").css('border-right-color', 'green');
							$("#dob").css('border-right-width', '15px');
							$("#dob").css('border-radius', '3px');
							document.getElementById('dobinvalid').innerHTML = "";
						}
					})

	$("#email")
			.change(
					function() {

						if (String(document.getElementById("email").value).length == 0) {
							$("#email").css('width', '935px');
							$("#email").css('border-right-style', 'solid');
							$("#email").css('border-right-color', 'red');
							$("#email").css('border-right-width', '15px');
							$("#email").css('border-radius', '3px');
							document.getElementById('emailinvalid').innerHTML = "*Email is Mandatory";
						} else if (!validateEmail(document
								.getElementById("email").value)) {
							$("#email").css('width', '935px');
							$("#email").css('border-right-style', 'solid');
							$("#email").css('border-right-color', 'red');
							$("#email").css('border-right-width', '15px');
							$("#email").css('border-radius', '3px');
							document.getElementById('emailinvalid').innerHTML = "*Entered Email is invalid";
						} else {
							$("#email").css('width', '935px');
							$("#email").css('border-right-style', 'solid');
							$("#email").css('border-right-color', 'green');
							$("#email").css('border-right-width', '15px');
							$("#email").css('border-radius', '3px');
							document.getElementById('emailinvalid').innerHTML = "";
						}
					})

	$("#coc")
			.change(
					function() {
						if (!validateCountry()) {
							$("#coc").css('border-right-style', 'solid');
							$("#coc").css('border-right-color', 'red');
							$("#coc").css('border-right-width', '15px');
							$("#coc").css('border-radius', '3px');
							document.getElementById('cocinvalid').innerHTML = "*Country is Mandatory";
						} else {
							$("#coc").css('border-right-style', 'solid');
							$("#coc").css('border-right-color', 'green');
							$("#coc").css('border-right-width', '15px');
							$("#coc").css('border-radius', '3px');
							document.getElementById('cocinvalid').innerHTML = "";
						}
					})

	$("#edu")
			.change(
					function() {
						if (!validateCredential()) {
							$("#edu").css('border-right-style', 'solid');
							$("#edu").css('border-right-color', 'red');
							$("#edu").css('border-right-width', '15px');
							$("#edu").css('border-radius', '3px');
							document.getElementById('eduinvalid').innerHTML = "*Education Credential is Mandatory";
						} else {
							$("#edu").css('border-right-style', 'solid');
							$("#edu").css('border-right-color', 'green');
							$("#edu").css('border-right-width', '15px');
							$("#edu").css('border-radius', '3px');
							document.getElementById('eduinvalid').innerHTML = "";
						}
					})

	$("#ldate")
			.change(
					function() {
						if (!validateLDate()) {
							$("#ldate").css('width', '935px');
							$("#ldate").css('border-right-style', 'solid');
							$("#ldate").css('border-right-color', 'red');
							$("#ldate").css('border-right-width', '15px');
							$("#ldate").css('border-radius', '3px');
							document.getElementById('ldateinvalid').innerHTML = "*Please enter a valid date";
						} else {
							$("#ldate").css('width', '935px');
							$("#ldate").css('border-right-style', 'solid');
							$("#ldate").css('border-right-color', 'green');
							$("#ldate").css('border-right-width', '15px');
							$("#ldate").css('border-radius', '3px');
							document.getElementById('ldateinvalid').innerHTML = "";
						}
					})

	$("#Oninp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})
	$("#Alinp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})
	$("#Quinp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})
	$("#Mainp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})
	$("#Sainp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})
	$("#BCinp")
			.change(
					function() {
						if (!validateProvince()) {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'red');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
						} else {
							$("#proinpdiv").css('width', '935px');
							$("#proinpdiv").css('border-radius', '3px');
							$("#proinpdiv").css('border-right-style', 'solid');
							$("#proinpdiv").css('border-right-color', 'green');
							$("#proinpdiv").css('border-right-width', '15px');
							document.getElementById('provinceinvalid').innerHTML = "";
						}
					})

	$("#maleinp")
			.change(
					function() {
						if (!validateGender()) {
							document.getElementById('genderinvalid').innerHTML = "*Gender is Mandatory";
							$("#malediv").css('width', '935px');
							$("#malediv").css('border-radius', '3px');
							$("#malediv").css('border-right-style', 'solid');
							$("#malediv").css('border-right-color', 'red');
							$("#malediv").css('border-right-width', '15px');
						} else {
							document.getElementById('genderinvalid').innerHTML = "";
							$("#malediv").css('width', '935px');
							$("#malediv").css('border-radius', '3px');
							$("#malediv").css('border-right-style', 'solid');
							$("#malediv").css('border-right-color', 'green');
							$("#malediv").css('border-right-width', '15px');
						}
					})
	
	$("#femaleinp")
			.change(
					function() {
						if (!validateGender()) {
							$("#malediv").css('width', '935px');
							$("#malediv").css('border-radius', '3px');
							$("#malediv").css('border-right-style', 'solid');
							$("#malediv").css('border-right-color', 'red');
							$("#malediv").css('border-right-width', '15px');
							document.getElementById('genderinvalid').innerHTML = "*Gender is Mandatory";
						} else {
							$("#malediv").css('width', '935px');
							$("#malediv").css('border-radius', '3px');
							$("#malediv").css('border-right-style', 'solid');
							$("#malediv").css('border-right-color', 'green');
							$("#malediv").css('border-right-width', '15px');
							document.getElementById('genderinvalid').innerHTML = "";
						}
					})

	//IELTS Score validations. On change of each score, the dependent calculate button div could also change.
	//The button could be shown or hidden along with difference in messages.
	$("#lscore")
			.change(
					function() {
						$('#crs').val("");
						if (!(document.getElementById('lscore').value === 'Select')) {
							l = 'y';
							document.getElementById('lscoreinvalid').innerHTML = "";
							$("#lscore").css('border-right-style', 'solid');
							$("#lscore").css('border-right-color', 'green');
							$("#lscore").css('border-right-width', '15px');
							$("#lscore").css('border-radius', '3px');
						} else {
							l = 'n';
							document.getElementById('lscoreinvalid').innerHTML = "*Listening Score is Mandatory";
							$("#lscore").css('border-right-style', 'solid');
							$("#lscore").css('border-right-color', 'red');
							$("#lscore").css('border-right-width', '15px');
							$("#lscore").css('border-radius', '3px');
						}
						if (s === 'y' && w === 'y' && r === 'y' && l === 'y') {
							$('#note1').hide();
							$('#note').show();
							$('#calButton').show();
						} else {
							$('#note1').show();
							$('#note').hide();
							$('#calButton').hide();
						}
						if ($('#calButton').is(':visible')) {
							document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							$("#calButton").click(function() {
								crsScoreMandatory = "";
							})
						} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
						} else {
							document.getElementById('crsinvalid').innerHTML = "";
						}
					})
	$("#wscore")
			.change(
					function() {
						$('#crs').val("");
						if (!(document.getElementById('wscore').value === 'Select')) {
							$("#wscore").css('border-right-style', 'solid');
							$("#wscore").css('border-right-color', 'green');
							$("#wscore").css('border-right-width', '15px');
							$("#wscore").css('border-radius', '3px');
							w = 'y';
							document.getElementById('wscoreinvalid').innerHTML = "";
						} else {
							$("#wscore").css('border-right-style', 'solid');
							$("#wscore").css('border-right-color', 'red');
							$("#wscore").css('border-right-width', '15px');
							$("#wscore").css('border-radius', '3px');
							w = 'n';
							document.getElementById('wscoreinvalid').innerHTML = "*Writing Score is Mandatory";
						}
						if (s === 'y' && w === 'y' && r === 'y' && l === 'y') {
							$('#note1').hide();
							$('#note').show();
							$('#calButton').show();
						} else {
							$('#note1').show();
							$('#note').hide();
							$('#calButton').hide();
						}
						if ($('#calButton').is(':visible')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
							$("#calButton").click(function() {
								crsScoreMandatory = "";
							})
						} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
						} else {
							document.getElementById('crsinvalid').innerHTML = "";
						}
					})
	$("#sscore")
			.change(
					function() {
						$('#crs').val("");
						if (!(document.getElementById('sscore').value === 'Select')) {
							$("#sscore").css('border-right-style', 'solid');
							$("#sscore").css('border-right-color', 'green');
							$("#sscore").css('border-right-width', '15px');
							$("#sscore").css('border-radius', '3px');
							s = 'y';
							document.getElementById('sscoreinvalid').innerHTML = "";
						} else {
							$("#sscore").css('border-right-style', 'solid');
							$("#sscore").css('border-right-color', 'red');
							$("#sscore").css('border-right-width', '15px');
							$("#sscore").css('border-radius', '3px');
							s = 'n';
							document.getElementById('sscoreinvalid').innerHTML = "*Speaking Score is Mandatory";
						}

						if (s === 'y' && w === 'y' && r === 'y' && l === 'y') {
							$('#note1').hide();
							$('#note').show();
							$('#calButton').show();
						} else {
							$('#note1').show();
							$('#note').hide();
							$('#calButton').hide();
						}
						if ($('#calButton').is(':visible')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
							$("#calButton").click(function() {
								crsScoreMandatory = "";
							})
						} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
						} else {
							document.getElementById('crsinvalid').innerHTML = "";
						}

					})
	$("#rscore")
			.change(
					function() {
						$('#crs').val("");
						if (!(document.getElementById('rscore').value === 'Select')) {
							r = 'y';
							$("#rscore").css('border-right-style', 'solid');
							$("#rscore").css('border-right-color', 'green');
							$("#rscore").css('border-right-width', '15px');
							$("#rscore").css('border-radius', '3px');
							document.getElementById('rscoreinvalid').innerHTML = "";
						} else {
							$("#rscore").css('border-right-style', 'solid');
							$("#rscore").css('border-right-color', 'red');
							$("#rscore").css('border-right-width', '15px');
							$("#rscore").css('border-radius', '3px');
							r = 'n';
							document.getElementById('rscoreinvalid').innerHTML = "*Reading Score is Mandatory";
						}
						if (s === 'y' && w === 'y' && r === 'y' && l === 'y') {
							$('#note1').hide();
							$('#note').show();
							$('#calButton').show();
						} else {
							$('#note1').show();
							$('#note').hide();
							$('#calButton').hide();
						}
						if ($('#calButton').is(':visible')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
							$("#calButton").click(function() {
								crsScoreMandatory = "";
							})
						} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
						} else {
							document.getElementById('crsinvalid').innerHTML = "";
						}
					})
	if (document.getElementById('rscore').value === 'Select'
			|| document.getElementById('lscore').value === 'Select'
			|| document.getElementById('wscore').value === 'Select'
			|| document.getElementById('sscore').value === 'Select') {
		$('#calButton').hide();
		$('#note').hide();
		$('#note1').show();
	}

	//IELTS Score modal dialogue box displaying.
	$("#okbtn-ielts").click(function() {
		var modal = document.getElementById('ieltsinvalidmodal');
		modal.style.display = "none";
	})

	//On click of the calculate button, if invalid scores are displayed, it will show a modal with error message
	$("#calButton")
			.click(
					function() {
						if (document.getElementById('rscore').value === 'Less than 6.0'
								|| document.getElementById('lscore').value === 'Less than 6.0'
								|| document.getElementById('wscore').value === 'Less than 6.0'
								|| document.getElementById('sscore').value === 'Less than 6.0') {

							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'red');
							$("#crs").css('border-right-width', '15px');
							var modal = document
									.getElementById('ieltsinvalidmodal');

							var btn = document.getElementById("sbtn");

							var span = document.getElementsByClassName("close")[1];

							modal.style.display = "block";

							span.onclick = function() {
								modal.style.display = "none";
							}

							/*
							 * window.onclick = function(event) { if
							 * (event.target == modal) { modal.style.display =
							 * "none"; } }
							 */

						} else {
							$("#crs").css('width', '935px');
							$("#crs").css('border-radius', '3px');
							$("#crs").css('border-right-style', 'solid');
							$("#crs").css('border-right-color', 'green');
							$("#crs").css('border-right-width', '15px');
							$('#crs').val("435");
							$('#calButton').hide();
							document.getElementById('crsinvalid').innerHTML = "";
							$('#note').hide();
						}
					})
})

//Validate Gender method.
function validateGender() {
	var radioChecked = false;
	var genderRadios = [];
	genderRadios.push(document.getElementById('maleinp'));
	genderRadios.push(document.getElementById('femaleinp'));
	if (!radioChecked) {
		for (var i = 0; i < genderRadios.length; i++) {
			if (genderRadios[i].checked) {
				radioChecked = true;
				break;
			}
		}
	}

	if (!radioChecked) {
		return false;
	} else {
		return true;
	}
}

//Validate Country method.
function validateCountry() {
	var countrySelected = false;
	var selectedCountry = document.getElementById('coc').value;
	if (selectedCountry === 'Select') {
		countrySelected = false;
	} else {
		countrySelected = true;
	}
	return countrySelected;
}

//Validate CRS Method.
function validateCRS() {
	var crsValid = false;
	var crsScore = document.getElementById('crs').value;
	if (crsScore === "") {
		crsValid = false;
	} else {
		crsValid = true;
	}
	return crsValid;
}

//Validate credential method.
function validateCredential() {
	var eduSelected = false;
	var eduCred = document.getElementById('edu').value;
	if (eduCred === 'Select') {
		eduSelected = false;
	} else {
		eduSelected = true;
	}
	return eduSelected;
}

//Validate LScore method
function validateLScore() {
	var lScoreSelected = false;
	var lScore = document.getElementById('lscore').value;
	if (lScore === 'Select') {
		lScoreSelected = false;
	} else {
		lScoreSelected = true;
	}
	return lScoreSelected;
}

//Validate WScore method
function validateWScore() {
	var wScoreSelected = false;
	var wScore = document.getElementById('wscore').value;
	if (wScore === 'Select') {
		wScoreSelected = false;
	} else {
		wScoreSelected = true;
	}
	return wScoreSelected;
}

//Validate RScore method
function validateRScore() {
	var rScoreSelected = false;
	var rScore = document.getElementById('rscore').value;
	if (rScore === 'Select') {
		rScoreSelected = false;
	} else {
		rScoreSelected = true;
	}
	return rScoreSelected;
}

//Validate SScore method
function validateSScore() {
	var sScoreSelected = false;
	var sScore = document.getElementById('sscore').value;
	if (sScore === 'Select') {
		sScoreSelected = false;
	} else {
		sScoreSelected = true;
	}
	return sScoreSelected;
}

//Validate Dob method
function validateDob() {
	var dobSelected = false;
	var dob = document.getElementById('dob').value;
	if (dob === "") {
		dobSelected = false;
	} else {
		dobSelected = true;
	}
	return dobSelected;
}

//Validate LDate method
function validateLDate() {
	var lDateSelected = false;
	var lDate = document.getElementById('ldate').value;
	if (lDate === "") {
		lDateSelected = false;
	} else {
		lDateSelected = true;
	}
	return lDateSelected;
}

//Validate Province method
function validateProvince() {
	if (document.getElementById('Oninp').checked
			|| document.getElementById('Quinp').checked
			|| document.getElementById('Alinp').checked
			|| document.getElementById('Sainp').checked
			|| document.getElementById('Mainp').checked
			|| document.getElementById('BCinp').checked) {
		return true;
	} else {
		return false;
	}
}

//Validate Email method
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//Validate Form method
//Called on the submit button click
function validateForm() {

	var emaildMandatory = "";
	var passwordMandatory = "";
	var countryMandatory = "";
	var lScoreMandatory = "";
	var sScoreMandatory = "";
	var wScoreMandatory = "";
	var rScoreMandatory = "";
	var genderMandatory = "";
	var lDateMandatory = "";
	var dobMandatory = "";
	var proMandatory = ""
	var credentialMandatory = ""
	var isFormValid = true;
	var crsScoreMandatory = "";

	if (String(document.getElementById("email").value).length == 0) {
		$("#email").css('width', '935px');
		$("#email").css('border-right-style', 'solid');
		$("#email").css('border-right-color', 'red');
		$("#email").css('border-right-width', '15px');
		$("#email").css('border-radius', '3px');
		emaildMandatory = "*Email is Mandatory";
		isFormValid = false;
	} else if (!validateEmail(document.getElementById("email").value)) {
		$("#email").css('width', '935px');
		$("#email").css('border-right-style', 'solid');
		$("#email").css('border-right-color', 'red');
		$("#email").css('border-right-width', '15px');
		$("#email").css('border-radius', '3px');
		emaildMandatory += "*Entered Email is invalid";
		isFormValid = false;
	} else {
		$("#email").css('width', '935px');
		$("#email").css('border-right-style', 'solid');
		$("#email").css('border-right-color', 'green');
		$("#email").css('border-right-width', '15px');
		$("#email").css('border-radius', '3px');
	}

	if (!validateGender()) {
		genderMandatory += "*Gender is Mandatory";
		$("#malediv").css('width', '935px');
		$("#malediv").css('border-radius', '3px');
		$("#malediv").css('border-right-style', 'solid');
		$("#malediv").css('border-right-color', 'red');
		$("#malediv").css('border-right-width', '15px');
		isFormValid = false;
	} else {
		$("#malediv").css('width', '935px');
		$("#malediv").css('border-radius', '3px');
		$("#malediv").css('border-right-style', 'solid');
		$("#malediv").css('border-right-color', 'green');
		$("#malediv").css('border-right-width', '15px');
	}

	if (!validateCountry()) {
		$("#coc").css('border-right-style', 'solid');
		$("#coc").css('border-right-color', 'red');
		$("#coc").css('border-right-width', '15px');
		$("#coc").css('border-radius', '3px');
		countryMandatory += "*Country is Mandatory";
		isFormValid = false;
	} else {
		$("#coc").css('border-right-style', 'solid');
		$("#coc").css('border-right-color', 'green');
		$("#coc").css('border-right-width', '15px');
		$("#coc").css('border-radius', '3px');
	}

	if (!validateCRS()) {
		if ($('#calButton').is(':visible')) {
			$("#crs").css('width', '935px');
			$("#crs").css('border-radius', '3px');
			$("#crs").css('border-right-style', 'solid');
			$("#crs").css('border-right-color', 'red');
			$("#crs").css('border-right-width', '15px');
			crsScoreMandatory += "*You should calculate the CRS Score. Please click 'Calculate' button";
			$("#calButton").click(function() {
				$("#crs").css('width', '935px');
				$("#crs").css('border-radius', '3px');
				$("#crs").css('border-right-style', 'solid');
				$("#crs").css('border-right-color', 'green');
				$("#crs").css('border-right-width', '15px');
				crsScoreMandatory = "";
			})
		} else {
			$("#crs").css('width', '935px');
			$("#crs").css('border-radius', '3px');
			$("#crs").css('border-right-style', 'solid');
			$("#crs").css('border-right-color', 'red');
			$("#crs").css('border-right-width', '15px');
			crsScoreMandatory += "*Make sure proper IELTS score is provided.";
		}
		isFormValid = false;
	}

	if (!validateCredential()) {
		$("#edu").css('border-right-style', 'solid');
		$("#edu").css('border-right-color', 'red');
		$("#edu").css('border-right-width', '15px');
		$("#edu").css('border-radius', '3px');
		credentialMandatory += "*Educational Credential is Mandatory";
		isFormValid = false;
	} else {
		$("#edu").css('border-right-style', 'solid');
		$("#edu").css('border-right-color', 'green');
		$("#edu").css('border-right-width', '15px');
		$("#edu").css('border-radius', '3px');
	}

	if (!validateLScore()) {
		$("#lscore").css('border-right-style', 'solid');
		$("#lscore").css('border-right-color', 'red');
		$("#lscore").css('border-right-width', '15px');
		$("#lscore").css('border-radius', '3px');
		lScoreMandatory += "*Listening Score is Mandatory";
		isFormValid = false;
	} else {
		$("#lscore").css('border-right-style', 'solid');
		$("#lscore").css('border-right-color', 'green');
		$("#lscore").css('border-right-width', '15px');
		$("#lscore").css('border-radius', '3px');
	}

	if (!validateRScore()) {
		$("#rscore").css('border-right-style', 'solid');
		$("#rscore").css('border-right-color', 'red');
		$("#rscore").css('border-right-width', '15px');
		$("#rscore").css('border-radius', '3px');
		rScoreMandatory += "*Reading Score is Mandatory";
		isFormValid = false;
	} else {
		$("#rscore").css('border-right-style', 'solid');
		$("#rscore").css('border-right-color', 'green');
		$("#rscore").css('border-right-width', '15px');
		$("#rscore").css('border-radius', '3px');
	}

	if (!validateWScore()) {
		$("#wscore").css('border-right-style', 'solid');
		$("#wscore").css('border-right-color', 'red');
		$("#wscore").css('border-right-width', '15px');
		$("#wscore").css('border-radius', '3px');
		wScoreMandatory += "*Writing Score is Mandatory";
		isFormValid = false;
	} else {
		$("#wscore").css('border-right-style', 'solid');
		$("#wscore").css('border-right-color', 'green');
		$("#wscore").css('border-right-width', '15px');
		$("#wscore").css('border-radius', '3px');
	}

	if (!validateSScore()) {
		$("#sscore").css('border-right-style', 'solid');
		$("#sscore").css('border-right-color', 'red');
		$("#sscore").css('border-right-width', '15px');
		$("#sscore").css('border-radius', '3px');
		sScoreMandatory += "*Speaking Score is Mandatory";
		isFormValid = false;
	} else {
		$("#sscore").css('border-right-style', 'solid');
		$("#sscore").css('border-right-color', 'green');
		$("#sscore").css('border-right-width', '15px');
		$("#sscore").css('border-radius', '3px');
	}

	if (!validateDob()) {
		$("#dob").css('width', '935px');
		$("#dob").css('border-right-style', 'solid');
		$("#dob").css('border-right-color', 'red');
		$("#dob").css('border-right-width', '15px');
		$("#dob").css('border-radius', '3px');
		dobMandatory += "*Please enter a valid date";
		isFormValid = false;
	} else {
		$("#dob").css('width', '935px');
		$("#dob").css('border-right-style', 'solid');
		$("#dob").css('border-right-color', 'green');
		$("#dob").css('border-right-width', '15px');
		$("#dob").css('border-radius', '3px');
	}

	if (!validateLDate()) {
		$("#ldate").css('width', '935px');
		$("#ldate").css('border-right-style', 'solid');
		$("#ldate").css('border-right-color', 'red');
		$("#ldate").css('border-right-width', '15px');
		$("#ldate").css('border-radius', '3px');
		lDateMandatory += "*Please enter a valid date";
		isFormValid = false;
	} else {
		$("#ldate").css('width', '935px');
		$("#ldate").css('border-right-style', 'solid');
		$("#ldate").css('border-right-color', 'green');
		$("#ldate").css('border-right-width', '15px');
		$("#ldate").css('border-radius', '3px');
	}

	if (!validateProvince()) {
		proMandatory += "*Please select atleast one province";
		$("#proinpdiv").css('width', '935px');
		$("#proinpdiv").css('border-radius', '3px');
		$("#proinpdiv").css('border-right-style', 'solid');
		$("#proinpdiv").css('border-right-color', 'red');
		$("#proinpdiv").css('border-right-width', '15px');
		isFormValid = false;
	} else {
		$("#proinpdiv").css('width', '935px');
		$("#proinpdiv").css('border-radius', '3px');
		$("#proinpdiv").css('border-right-style', 'solid');
		$("#proinpdiv").css('border-right-color', 'green');
		$("#proinpdiv").css('border-right-width', '15px');
	}

	if (isFormValid) {
		showSuccess();
	}

	document.getElementById('emailinvalid').innerHTML = emaildMandatory;
	document.getElementById('dobinvalid').innerHTML = dobMandatory;
	document.getElementById('cocinvalid').innerHTML = countryMandatory;
	document.getElementById('lscoreinvalid').innerHTML = lScoreMandatory;
	document.getElementById('sscoreinvalid').innerHTML = sScoreMandatory;
	document.getElementById('wscoreinvalid').innerHTML = wScoreMandatory;
	document.getElementById('rscoreinvalid').innerHTML = rScoreMandatory;
	document.getElementById('ldateinvalid').innerHTML = lDateMandatory;
	document.getElementById('provinceinvalid').innerHTML = proMandatory;
	document.getElementById('genderinvalid').innerHTML = genderMandatory;
	document.getElementById('eduinvalid').innerHTML = credentialMandatory;
	document.getElementById('crsinvalid').innerHTML = crsScoreMandatory;
}

//The loader with animation is shown
//Method waits for 3seconds and calles showFinal Method.
function callLoad() {
	$('#confirmModal').hide();
	$('.modal1').show();
	$('#loader').show();
	myVar = setTimeout(showFinal, 3000);

}

//The showSuccess method.
function showSuccess() {

	var modal2 = document.getElementById('confirmModal');

	var btn2 = document.getElementById("yesbtndiv");
	var btn3 = document.getElementById("nobtn");

	var span2 = document.getElementsByClassName("close")[0];

	modal2.style.display = "block";

	span2.onclick = function() {
		modal2.style.display = "none";
	}

	btn3.onclick = function() {
		modal2.style.display = "none";
	}

	btn2.onclick = function() {
		callLoad();

	}

}

//The showFinal Method
function showFinal() {
	$('#loader').hide();
	$('.modal1').hide();
	var modal = document.getElementById('submitModal');

	var btn = document.getElementById("sbtn");

	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	span.onclick = function() {
		modal.style.display = "none";
	}
}

//The set status function.
function setStatus() {
	
	localStorage.setItem(localStorage.getItem("loginuser") + "status",
	"Form Submitted");
	location.href = "upload.html";
}

//The signOut method.
function signOut() {
	location.href = 'signin.html';
	localStorage.removeItem("loginuser");
}
