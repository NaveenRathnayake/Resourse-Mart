/*function validateNname() {
 	var fname = document.forms["bookingForm"]["fname"].value;
 	
 	if (fname == "") {
    	alert("Name must be filled out!");
    	return false;
  	}
}
*/
	
/*	
function validateEmail() {
	
	var email = document.forms["bookingForm"]["email"].value;
	
	if (email == "[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$"){	/*[1]*/
		/*return true;
	}
	else { 
		alert("Use the correct format for the email!");
		return false;
	}	
}
/*
function validateContNo()
{
	var telNo = (document.getElementById("contNo").value;
	
	if (/^[0-9]{10}$/.test(telNo)) {
		return true;
	}
	else {
		alert("Use the correct format for the Contact Number");
		return false;
	}
}
*/

	/*
	else if (document.getElementById("contNo").value != "([0-9]{10})"){
		alert("Use the correct format for the Contact Number");
		return false;
	}

	else if (document.getElementById("zip").pattern != "[0-9]{5}"){
		alert("Use the correct format for zip!");
		return false;
	}		
	
	else if (document.getElementById("cname").value == "") {
		alert("Name on card must be filled out!");
		return false;
	}
	
	else if (document.getElementById("ccnum").patten != "[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}") {
		alert("Use the correct format for card number!");
		return false;
	}
	
	else if (document.getElementById("expdate").pattern != "(?:0[1-9]|1[0-2])/[0-9]{2}") {
		alert("Use the correct format for expiration date!");
		return false;
	}

	else if (document.getElementById("cvv").pattern != "[0-9]{3}"){
		alert("Use the correct format for cvv!");
		return false;
	}	
}*/

function validateForm(){
	validateNname();
	validateEmail();
}


/*
	References:
			[1] - http://zparacha.com/validate-email-address-using-javascript-regular-expression
			
			other:
				https://www.w3schools.com/js/DEFAULT.asp
				
				
*/