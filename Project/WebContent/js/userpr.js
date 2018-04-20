window.onload = function validate(){
	   
		    var loginuser = localStorage.getItem("loginuser");
		    var f1name = localStorage.getItem(loginuser+"fname");
			   
			     if(f1name == "" || f1name == null){
		            document.getElementById('fname').value = "Amal";
		        } else {
		        	document.getElementById("fname").value = f1name;
		        }
				 var l1name = localStorage.getItem(loginuser+"lname");
			   
			     if(l1name == "" || l1name == null){
		            document.getElementById('lname').value = "Mathew";
		        } else {
		        	document.getElementById("lname").value = localStorage.getItem(loginuser+"lname");
		        }
				 var age1 = localStorage.getItem(loginuser+"contact");
			   
			     if(age1 == "" || age1 == null){
		            document.getElementById('contact').value = "416-123-1000";
		        } else {
		        	document.getElementById("contact").value = localStorage.getItem(loginuser+"contact");
		        }
				 var rec1 = localStorage.getItem(loginuser+"email1");
			   
			     if(rec1 == "" || rec1 == null){
		            document.getElementById('email1').value = "abcd@gmail.com";
		        } else {
		        	document.getElementById("email1").value = localStorage.getItem(loginuser+"email1");
		        }
				 var rsp1 = localStorage.getItem(loginuser+"status");
			   
			     if(rsp1 == "" || rsp1 == null){
		            document.getElementById('appstatus').value = "Submitted";
		        } else {
		        	document.getElementById("appstatus").value = localStorage.getItem(loginuser+"status");
		        }
			     
			     var x = localStorage.getItem(loginuser+"appno");
				   
			     if(x == "" || x == null){
		            document.getElementById('appno').value = "123123123";
		        } else {
		        	document.getElementById("appno").value = localStorage.getItem(loginuser+"appno");
		        }
			     
				 var pass1 =localStorage.getItem(loginuser+"crano");
			   
			     if(pass1 == "" || pass1 == null){
		            document.getElementById('crano').value = "213123123";
		        } else {
		        	document.getElementById("crano").value = localStorage.getItem(loginuser+"crano");
		        }
		}