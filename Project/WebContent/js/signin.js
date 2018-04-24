
window.onload = function() {
	
	var user = localStorage.getItem("loginuser");
	var submit = localStorage.getItem(user+"status");
	/*if (localStorage.getItem("loginuser") != null) {
		if (submit === "formsubmit") {
			location.href = "upload.html";
		} else {
			location.href = "prprofilepage.html";
		}
	}*/
		
	}
function validate() {
	 	var loginuser = document.getElementById('lusername').value;
	 	var uname = localStorage.getItem(loginuser+"uname");
	 	var loginpwd = document.getElementById('lpwd').value; 
		var pwd = localStorage.getItem(uname+"pwd");
		if (loginuser === uname) {
			if (loginpwd === pwd) {
				localStorage.removeItem("loginuser");
				localStorage.setItem("loginuser",loginuser);
				location.href='prprofilepage.html';
			} else {
				document.getElementById('pwdinvalid').innerHTML = "*Incorrect Password.";
			}
		} else {
			document.getElementById('unameinvalid').innerHTML = "*No such user exists.";
		}
		//var fname = localStorage.getItem(document.getElementById('username').value+"fname");
    		
    }