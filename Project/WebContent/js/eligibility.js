$(function() {

	$("#datepicker").datepicker();

});

/*function checkDate()

{

      var inputDate = new Date(document.getElementById("datepicker").value);

      var endDate = new Date();



  alert(inputDatedate.toString());

  

     var e = document.getElementById("province");

      var optionSelIndex = e.options[e.selectedIndex].value;

      var optionSelectedText = e.options[e.selectedIndex].text;

      if (optionSelIndex === "selProvince") {

          alert("Please select a Course");

      }

      else {

          alert("Success !! You have selected Course : " + optionSelectedText); ;

      }

}*/

window.onload = function() {
	var scores = [ 'Select', 'Less than 6.0', '6.0', '6.5', '7.0', '7.5',
			'8.0', '8.5', '9.0' ];
	var province = [ 'Select a province', 'ON', 'AB', "Alberta",
			"British Columbia", "Manitoba", "New Brunswick",
			"Newfoundland and Labrador", "Nova Scotia", "Ontario",
			"Prince Edward Island", "Quebec", "Saskatchewan",
			"Northwest Territories", "Nunavut", "Yukon" ];
	populateScores(scores, 'writing');
	populateScores(scores, 'speaking');
	populateScores(scores, 'reading');
	populateScores(scores, 'listening');
	populateScores(province, 'province');

};

function populateScores(dropdowndata, id) {
	var displayDrop = "";
	for (i = 0; i < dropdowndata.length; i++) {
		displayDrop += "<option>" + dropdowndata[i] + "</option>";
	}
	document.getElementById(id).innerHTML = displayDrop;
}

function validateForm() {

	var province = document.forms["eligibilitycheck"]["province"];
	var isFormValid = true;

	if (province.value === "Select a province") {

		document.getElementById("provinceinvalid").innerHTML = "*Please select a province";
		isFormValid = false;

	} else {
		document.getElementById("provinceinvalid").innerHTML = "";
		isFormValid = true;
	}
	
	var date1 = document.forms["eligibilitycheck"]["datepicker"];
	var isFormValid = true;

	if (date1.value === "") {

		document.getElementById("dateinvalid").innerHTML = "*Please enter the date";

	} else {
		document.getElementById("dateinvalid").innerHTML = "";
		isFormValid = true;
	}
	
	var speakingScore = document.forms["eligibilitycheck"]["speaking"];

	if (speakingScore.value === "Select") {

		document.getElementById("speakinginvalid").innerHTML = "*Please enter the speaking score";

	} else {
		document.getElementById("speakinginvalid").innerHTML = "";
		isFormValid = true;
	}

	var writingScore = document.forms["eligibilitycheck"]["writing"];

	if (writingScore.value === "Select") {

		document.getElementById("writinginvalid").innerHTML = "*Please enter the writing score";

	} else {
		document.getElementById("writinginvalid").innerHTML = "";
		isFormValid = true;
	}

	var readingScore = document.forms["eligibilitycheck"]["reading"];

	if (readingScore.value === "Select") {

		document.getElementById("readinginvalid").innerHTML = "*Please enter the reading score";

	} else {
		document.getElementById("readinginvalid").innerHTML = "";
		isFormValid = true;
	}

	var listeningScore = document.forms["eligibilitycheck"]["listening"];

	if (listeningScore.value === "Select") {

		document.getElementById("listeninginvalid").innerHTML = "*Please enter the listening score";

	} else {
		document.getElementById("listeninginvalid").innerHTML = "";
		isFormValid = true;
	}

	var selectSkilled = document.forms["eligibilitycheck"]["skilledCanada"];

	if (selectSkilled.value === "selSkilled") {

		document.getElementById("totalskillinvalid").innerHTML = "*Please enter the appropriate value";

	} else {
		document.getElementById("totalskillinvalid").innerHTML = "";
		isFormValid = true;
	}

	var selectTotal = document.forms["eligibilitycheck"]["totalSkilled"];

	if (selectTotal.value === "selTotal") {

		document.getElementById("skillinvalid").innerHTML = "*Please select an appropriate value";

	} else {
		document.getElementById("skillinvalid").innerHTML = "";
		isFormValid = true;
	}

	var selectJob = document.forms["eligibilitycheck"]["jobOffer"];

	if (selectJob.value === "selJob") {

		document.getElementById("jobinvalid").innerHTML = "*Please enter a valid job experience";

	} else {
		document.getElementById("jobinvalid").innerHTML = "";
		isFormValid = true;
	}

	var selectLegal = document.forms["eligibilitycheck"]["legal"];

	if (selectLegal.value === "selLegal") {

		document.getElementById("legalinvalid").innerHTML = "*Please enter a valid legal status";

	} else {
		document.getElementById("legalinvalid").innerHTML = "";
		isFormValid = true;
	}

	if (isFormValid) {
		return true;
	} else {
		return false;
	}

}