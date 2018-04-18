function validateForm() {
    var username = document.forms["loginform"]["username"];
	     
    if (username.value == "") {
        alert("Please enter a username");
        return false;
    }
	
	var password = document.forms["loginform"]["password"];
	     
    if (password.value == "") {
        alert("Please enter a password");
        return false;
    }
	
	
}