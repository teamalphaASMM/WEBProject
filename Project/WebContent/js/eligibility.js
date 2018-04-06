 $( function() {
    $( "#datepicker" ).datepicker();
  } );
  
  /*function checkDate()
  {
	      var inputDate = new Date(document.getElementById("datepicker").value);
        var endDate = new Date();
	
	  alert(inputDatedate.toString());
	  
	     var e = document.getElementById("province");
        var optionSelIndex = e.options[e.selectedIndex].value;
        var optionSelectedText = e.options[e.selectedIndex].text;
        if (optionSelIndex == "selProvince") {
            alert("Please select a Course");
        }
        else {
            alert("Success !! You have selected Course : " + optionSelectedText); ;
        }
  }*/
  
  
 function validateForm() {
    var province = document.forms["eligibilitycheck"]["province"];
	     
    if (province.value == "selProvince") {
        alert("Please select a province");
        return false;
    }
	
	var speakingScore=document.forms["eligibilitycheck"]["speaking"];
	      
    if (speakingScore.value == "selSpeaking") {
        alert("Please select a speaking score");
        return false;
    }
	
	
	var writingScore=document.forms["eligibilitycheck"]["writing"];
	      
    if (writingScore.value == "selWriting") {
        alert("Please select a writing score");
        return false;
    }
	
	var readingScore=document.forms["eligibilitycheck"]["reading"];
	      
    if (readingScore.value == "selReading") {
        alert("Please select a reading score");
        return false;
    }
	
	var listeningScore=document.forms["eligibilitycheck"]["listening"];
	      
    if (listeningScore.value == "selListening") {
        alert("Please select a listening score");
        return false;
    }
	
		var selectSkilled=document.forms["eligibilitycheck"]["skilledCanada"];
	      
    if (selectSkilled.value == "selSkilled") {
        alert("Please select number of years of skilled experience you have in Canada");
        return false;
    }
	
	
		var selectTotal=document.forms["eligibilitycheck"]["totalSkilled"];
	      
    if (selectTotal.value == "selTotal") {
        alert("Please select total number of years of skilled experience you have ");
        return false;
    }
	
	var selectJob=document.forms["eligibilitycheck"]["jobOffer"];
	      
    if (selectJob.value == "selJob") {
        alert("Please select if you have a valid job offer or not ");
        return false;
    }
	
		var selectLegal=document.forms["eligibilitycheck"]["legal"];
	      
    if (selectLegal.value == "selLegal") {
        alert("Please select if you are legally allowed to work in Canada or not ");
        return false;
    }
	
	
}