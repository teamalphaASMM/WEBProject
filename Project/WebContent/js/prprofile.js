window.onload = function() {
	

	if (typeof(Storage) !== "undefined") {
	    // Retrieve
	    document.getElementById("loginuser").innerHTML = "Welcome "+localStorage.getItem("loginname");
	} else {
	    document.getElementById("loginuser").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	$('#fname').val(localStorage.getItem("loginname"));
	$('#fname').css('color','#8f8d91');
	var scores = [ 'Select', 'Less than 6.0', '6.0', '6.5', '7.0', '7.5',
			'8.0', '8.5', '9.0' ];
	var country = ['Select','Australia','Brazil','Bangladesh','Columbia','Denmark','Estonia','Fiji','Germany','Hungary','India','US'];
	var credentials = ['Select','Diploma','Bachelors','Two or More Degrees','Masters','Doctrate'];
	populateScores(scores, 'lscore');
	populateScores(scores, 'wscore');
	populateScores(scores, 'rscore');
	populateScores(scores, 'sscore');
	
	populateCountry(country, 'coc');
	populateCred(credentials, 'edu');
};

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

$(function() {
	var l = 'n';
	var r = 'n';
	var w = 'n';
	var s = 'n';
	
	$("#dob").change(function() {
		if (!validateDob()) {
			document.getElementById('dobinvalid').innerHTML = "*Please enter a valid date";
		} else {
			document.getElementById('dobinvalid').innerHTML = "";
		}
	})
	
	$("#email").change(function() {
		
		if (String(document.getElementById("email").value).length == 0) {
			document.getElementById('emailinvalid').innerHTML = "*Email is Mandatory";
		} else if (!validateEmail(document.getElementById("email").value)) {
			document.getElementById('emailinvalid').innerHTML = "*Entered Email is invalid";		
		} else {
			document.getElementById('emailinvalid').innerHTML = "";
		}
	})
	
	$("#coc").change(function() {
		if (!validateCountry()) {
			document.getElementById('cocinvalid').innerHTML = "*Country is Mandatory";
		} else {
			document.getElementById('cocinvalid').innerHTML = "";
		}
	})
	
	$("#edu").change(function() {
		if (!validateCredential()) {
			document.getElementById('eduinvalid').innerHTML = "*Education Credential is Mandatory";
		} else {
			document.getElementById('eduinvalid').innerHTML = "";
		}
	})
	
	$("#ldate").change(function() {
		if (!validateLDate()) {
			document.getElementById('ldateinvalid').innerHTML = "*Please enter a valid date";
		} else {
			document.getElementById('ldateinvalid').innerHTML = "";
		}
	})
	
	$("#Oninp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	$("#Alinp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	$("#Quinp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	$("#Mainp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	$("#Sainp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	$("#BCinp").change(function() {
		if (!validateProvince()) {
			document.getElementById('provinceinvalid').innerHTML = "*Please select atleast one province";
		} else {
			document.getElementById('provinceinvalid').innerHTML = "";
		}
	})
	
	
	$("#maleinp").change(function() {
		if (!validateGender()) {
			document.getElementById('genderinvalid').innerHTML = "*Gender is Mandatory";
		} else {
			document.getElementById('genderinvalid').innerHTML = "";
		}
	})
	
	$("#femaleinp").change(function() {
		if (!validateGender()) {
			document.getElementById('genderinvalid').innerHTML = "*Gender is Mandatory";
		} else {
			document.getElementById('genderinvalid').innerHTML = "";
		}
	})
	
	$("#lscore").change(function() {
		$('#crs').val("");
		if (!(document.getElementById('lscore').value === 'Select')) {
			l = 'y';
			document.getElementById('lscoreinvalid').innerHTML = "";
		} else {
			l = 'n';
			document.getElementById('lscoreinvalid').innerHTML = "*Listening Score is Mandatory";
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
		if($('#calButton').is(':visible')) {
				document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
			$("#calButton").click(function() {
				crsScoreMandatory = "";
			})
			} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
				document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
			} else {
				document.getElementById('crsinvalid').innerHTML = "";
			}
	})
	$("#wscore").change(function() {
		$('#crs').val("");
		if (!(document.getElementById('wscore').value === 'Select')) {
			w = 'y';
			document.getElementById('wscoreinvalid').innerHTML = "";
		} else {
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
		if($('#calButton').is(':visible')) {
			document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
			$("#calButton").click(function() {
				crsScoreMandatory = "";
			})
			} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
			document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
			} else {
				document.getElementById('crsinvalid').innerHTML = "";
			}
	})
	$("#sscore").change(function() {
		$('#crs').val("");
		if (!(document.getElementById('sscore').value === 'Select')) {
			s = 'y';
			document.getElementById('sscoreinvalid').innerHTML = "";
		} else {
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
		if($('#calButton').is(':visible')) {
			document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
			$("#calButton").click(function() {
				crsScoreMandatory = "";
			})
			} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
				document.getElementById('crsinvalid').innerHTML = "*Make sure proper IELTS score is provided.";
			} else {
				document.getElementById('crsinvalid').innerHTML = "";
			}
		
	})
	$("#rscore").change(function() {
		$('#crs').val("");
		if (!(document.getElementById('rscore').value === 'Select')) {
			r = 'y';
			document.getElementById('rscoreinvalid').innerHTML = "";
		} else  {
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
		if($('#calButton').is(':visible')) {
			document.getElementById('crsinvalid').innerHTML = "*You should calculate the CRS Score. Please click 'Calculate' button";
			$("#calButton").click(function() {
				crsScoreMandatory = "";
			})
			} else if (!(s === 'y' && w === 'y' && r === 'y' && l === 'y')) {
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
	
	$("#okbtn-ielts").click(function() {
		var modal = document.getElementById('ieltsinvalidmodal');
		 modal.style.display = "none";
	})
	
	$("#calButton").click(function() {
		if (document.getElementById('rscore').value === 'Less than 6.0' 
			|| document.getElementById('lscore').value === 'Less than 6.0' 
			|| document.getElementById('wscore').value === 'Less than 6.0' 
			|| document.getElementById('sscore').value === 'Less than 6.0') {
			
			var modal = document.getElementById('ieltsinvalidmodal');

			var btn = document.getElementById("sbtn");

			var span = document.getElementsByClassName("close")[1];

			    modal.style.display = "block";

			span.onclick = function() {
			    modal.style.display = "none";
			}

/*			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			}*/
			
		} else {
				$('#crs').val("435");
				$('#calButton').hide();
				document.getElementById('crsinvalid').innerHTML = "";
				$('#note').hide();
		}
	})
})


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

function validateProvince() {
	if (document.getElementById('Oninp').checked || document.getElementById('Quinp').checked || document.getElementById('Alinp').checked 
			|| document.getElementById('Sainp').checked || document.getElementById('Mainp').checked || document.getElementById('BCinp').checked) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validateForm () {
	
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
		emaildMandatory = "*Email is Mandatory";
		isFormValid = false;
	} else if (!validateEmail(document.getElementById("email").value)) {
		emaildMandatory += "*Entered Email is invalid";
		isFormValid = false;
	}
	
	if (!validateGender()) {
		genderMandatory += "*Gender is Mandatory";
		isFormValid = false;
	}
	
	if (!validateCountry()) {
		countryMandatory += "*Country is Mandatory";
		isFormValid = false;
	}
	
	if (!validateCRS()) {
		if($('#calButton').is(':visible')) {
		crsScoreMandatory += "*You should calculate the CRS Score. Please click 'Calculate' button";
		$("#calButton").click(function() {
			crsScoreMandatory = "";
		})
		} else {
		crsScoreMandatory += "*Make sure proper IELTS score is provided.";
		}
		isFormValid = false;
	}
	
	if (!validateCredential()) {
		credentialMandatory+= "*Educational Credential is Mandatory";
		isFormValid = false;
	}
	
	if (!validateLScore()) {
		lScoreMandatory+= "*Listening Score is Mandatory";
		isFormValid = false;
	}
	
	if (!validateRScore()) {
		rScoreMandatory+= "*Reading Score is Mandatory";
		isFormValid = false;
	}
	
	if (!validateWScore()) {
		wScoreMandatory+= "*Writing Score is Mandatory";
		isFormValid = false;
	}
	
	if (!validateSScore()) {
		sScoreMandatory+= "*Speaking Score is Mandatory";
		isFormValid = false;
	}
	
	if (!validateDob()) {
		dobMandatory+= "*Please enter a valid date";
		isFormValid = false;
	}
	
	if (!validateLDate()) {
		lDateMandatory+= "*Please enter a valid date";
		isFormValid = false;
	}
	
	if (!validateProvince()) {
		proMandatory+= "*Please select atleast one province";
		isFormValid = false;
	}
	
if (isFormValid) {
	// Get the modal
var modal = document.getElementById('submitModal');

// Get the button that opens the modal
var btn = document.getElementById("sbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

    modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
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


