//The window on load function
window.onload = function() {

	var codeCard = "";
	var months = [ 'MM', '01', '02', '03', '04', '05', '06', '07', '08', '09',
			'10', '11', '12' ];
	var years = [ 'YY', '18', '19', '20', '21', '22', '23', '23', '24', '25',
			'26', '27', '28' ];
	populateMonthYears(months, 'month');
	populateMonthYears(years, 'year');
	$("#obtn").css("border-color", "#ce9132");
	$("#onlineform").hide();
	var x = $("#scotiainp");
	if (localStorage.getItem("loginuser") != null) {
		if (typeof (Storage) !== "undefined") {
			document.getElementById("loginuser").innerHTML = "Welcome "
					+ localStorage.getItem(localStorage.getItem("loginuser")
							+ "fname");
		}
		$('#fname').val(
				localStorage.getItem(localStorage.getItem("loginuser")
						+ "fname"));
		$('#fname').css('color', '#8f8d91');
		$('#cardDetails').hide();
		$('#btndiv').hide();
		$('#loader').hide();
		$('#onlineDetails').css('margin-top', '-420px');
		$('footer').css('margin-top', '120px');
	} else {
		location.href = "signin.html";
	}
};

//The method to populate months and years
function populateMonthYears(dropdowndata, id) {
	var displayDrop = "";
	for (i = 0; i < dropdowndata.length; i++) {
		displayDrop += "<option>" + dropdowndata[i] + "</option>";
	}
	document.getElementById(id).innerHTML = displayDrop;
}

//The function called on online method of payment.
function regulateOnline() {
	$("#obtn").css("border-color", "#ce9132");
	$("#cbtn").css("border-color", "#1c5080");
	$("#pbtn").css("border-color", "#1c5080");
	$("#gbtn").css("border-color", "#1c5080");
	$("#onlineform").hide();
	$(".onlinemessage").show();
	$('#btndiv').hide();
	$("#cardDetails").hide();
	$('#onlineDetails').css('margin-top', '-420px');
	$('footer').css('margin-top', '220px');
	$("#onlineDetails").show();
}

//The function on load window.
$(function() {

	//$("#header").load("header.html");
	//$("#myHeader").load("navtabs.html");
	//$('footer').load("footer.html");

	$("#scotiainp").change(function() {

		$("#onlineform").show();
		$(".onlinemessage").hide();
		$('#btndiv').show();
		$('#onlineDetails').css('margin-top', '-520px');
		$('footer').css('margin-top', '220px');
		generateCaptcha();

	})

	$("#tdinp").change(function() {
		$("#onlineform").show();
		$(".onlinemessage").hide();
		$('#btndiv').show();
		$('#onlineDetails').css('margin-top', '-520px');
		$('footer').css('margin-top', '220px');
		generateCaptcha();
	})

	$("#rbcinp").change(function() {
		$("#onlineform").show();
		$(".onlinemessage").hide();
		$('#btndiv').show();
		$('#onlineDetails').css('margin-top', '-520px');
		$('footer').css('margin-top', '220px');
		generateCaptcha();
	})

})

//The loader function to show animation.
function callLoad() {
	$('.modal1').show();
	$('#loader').show();
	myVar = setTimeout(showSuccess, 3000);

}

//The show success method to show the success message.
function showSuccess() {

	$('#loader').hide();
	$('.modal1').hide();
	localStorage.setItem(localStorage.getItem("loginuser")+"status","Application Submitted");
	var modal = document.getElementById('submitModal');
	var btn = document.getElementById("sbtn");
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	span.onclick = function() {
		modal.style.display = "block";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "block";
		}
	}

}

//The regulate card function to call on card input.
function regulateCard() {
	$("#obtn").css("border-color", "#1c5080");
	$("#cbtn").css("border-color", "#ce9132");
	$("#pbtn").css("border-color", "#1c5080");
	$("#gbtn").css("border-color", "#1c5080");
	$('footer').css('margin-top', '120px');
	document.getElementById('scotiainp').checked = false;
	document.getElementById('tdinp').checked = false;
	document.getElementById('rbcinp').checked = false;
	$("#onlineDetails").hide();
	generateCaptchaCard();
	$("#cardDetails").show();
	$('#btndiv').show();
}

//The regulate paypal function to paypal input.
function regulatePayPal() {
	$("#obtn").css("border-color", "#1c5080");
	$("#cbtn").css("border-color", "#1c5080");
	$("#pbtn").css("border-color", "#ce9132");
	$("#gbtn").css("border-color", "#1c5080");
}

//The regulate wallet function to wallet input.
function regulateWallet() {
	$("#obtn").css("border-color", "#1c5080");
	$("#cbtn").css("border-color", "#1c5080");
	$("#pbtn").css("border-color", "#1c5080");
	$("#gbtn").css("border-color", "#ce9132");
}

//The signout function.
function signOut() {
	location.href = 'signin.html';
	localStorage.removeItem("loginuser");
}

//The captcha generated function.
function generateCaptcha() {
	var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
			'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
			'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
			'x', 'y', 'z');
	var i;
	for (i = 0; i < 4; i++) {
		var a = alpha[Math.floor(Math.random() * alpha.length)];
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = alpha[Math.floor(Math.random() * alpha.length)];
	}
	codeCard = a + '' + b + '' + '' + c + '' + d;
	document.getElementById('captchaGen').innerHTML = codeCard;
	return false;
}

//The captcha generated function.
function generateCaptchaCard() {
	var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
			'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
			'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
			'x', 'y', 'z');
	var i;
	for (i = 0; i < 4; i++) {
		var a = alpha[Math.floor(Math.random() * alpha.length)];
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = alpha[Math.floor(Math.random() * alpha.length)];
	}
	codeCard = a + '' + b + '' + '' + c + '' + d;
	document.getElementById('captchaGenCard').innerHTML = codeCard;
	return false;
}

//The captcha check function.
function checkCaptcha(code,codeInput) {
	var captcha = removeSpaces(code);
	var captchaTest = removeSpaces(codeInput);
	if (captcha === captchaTest) {
		return true;
	} else {
		return false;

	}
}

//Card validation function
function validateCard() {
var re16digit = /^\d{16}$/;
return re16digit.test(String(document.getElementById("cardnum").value).toLowerCase());
}

function validateForm() {

	var unameMandatory = "";
	var passwordMandatory = "";
	var cardNumberMandatory = "";
	var holderNameMandatory = "";
	var cvvMandatory = "";
	var captchaMandatory = "";
	var captchaMandatory1 = "";
	var monthYearMandatory = "";
	var isFormValid = true;

	if (validateBank()) {
		if (String(document.getElementById("username").value).length == 0) {
			unameMandatory = "*User Name is Mandatory";
			isFormValid = false;
		} else {
			unameMandatory = "";
		}

		if (String(document.getElementById("password").value).length == 0) {
			passwordMandatory = "*Password is Mandatory";
			isFormValid = false;
		} else {
			passwordMandatory = "";
		}

		if (String(document.getElementById("captchainp").value).length == 0) {
			var x = document.getElementById("captchainp").value;
			captchaMandatory = "*Please enter the captcha.";
			isFormValid = false;
		} else {
			if (checkCaptcha(codeCard,document.getElementById("captchainp").value)) {
				captchaMandatory = "";
			} else {
				captchaMandatory = "*Captcha is not matching.";
				isFormValid = false;
			}
		}
	} else {
		if (String(document.getElementById("cardnum").value).length == 0) {
			cardNumberMandatory = "*Card Number is Mandatory";
			isFormValid = false;
		} else if (!validateCard()) {
			cardNumberMandatory = "*Invalid Card Number";
		} else {
			cardNumberMandatory = "";
		}

		if (String(document.getElementById("holdname").value).length == 0) {
			holderNameMandatory = "*Account Holder is Mandatory";
			isFormValid = false;
		} else {
			holderNameMandatory = "";
		}

		if (String(document.getElementById("captchainp1").value).length == 0) {
			captchaMandatory1 = "*Please enter the captcha.";
			isFormValid = false;
		} else {
			if (checkCaptcha(codeCard,document.getElementById("captchainp1").value)) {
				captchaMandatory = "";
			} else {
				captchaMandatory1 = "*Captcha is not matching.";
				isFormValid = false;
			}
		}

		if (String(document.getElementById("cvvinp").value).length == 0) {
			cvvMandatory = "*CVV is Mandatory";
			isFormValid = false;
		} else {
			cvvMandatory = "";
		}

		if ((document.getElementById('month').value === 'MM')
				|| (document.getElementById('year').value === 'YY')) {
			monthYearMandatory = "*Please provide proper card expiry.";
			isFormValid = false;
		} else {
			monthYearMandatory = "";
		}
	}

	if (isFormValid) {
		callLoad();
	}

	document.getElementById('userinvalid').innerHTML = unameMandatory;
	document.getElementById('pwdinvalid').innerHTML = passwordMandatory;
	if (captchaMandatory != "") {
	document.getElementById('captchainvalid').innerHTML = captchaMandatory;
	} else {
	document.getElementById('captchainvalid1').innerHTML = captchaMandatory1;
	}
	document.getElementById('cardinvalid').innerHTML = cardNumberMandatory;
	document.getElementById('holderinvalid').innerHTML = holderNameMandatory;
	document.getElementById('dateinvalid').innerHTML = monthYearMandatory;
	document.getElementById('cvvinvalid').innerHTML = cvvMandatory;
}

function validateBank() {
	var radioChecked = false;
	var bankRadios = [];
	bankRadios.push(document.getElementById('scotiainp'));
	bankRadios.push(document.getElementById('tdinp'));
	bankRadios.push(document.getElementById('rbcinp'));
	if (!radioChecked) {
		for (var i = 0; i < bankRadios.length; i++) {
			if (bankRadios[i].checked) {
				radioChecked = true;
				break;
			}
		}
	}
	
	$("#cbtn").click(function() {
		for (var i = 0; i < bankRadios.length; i++) {
			document.getElementById('scotiainp').checked = false;
			document.getElementById('tdinp').checked = false;
			document.getElementById('rbcinp').checked = false;
		}
		radioChecked = false;
	})
	
	if (!radioChecked ) {
		return false;
	} else {
		return true;
	}
}

function removeSpaces(x) {
	return x.split(' ').join('');
}
