/*myJavaScript.js*/
/*Browser should be refreshed after resizing, to work following functions*/


window.onload = function() {

	var w = window.innerWidth;						//get the inner width of the window
	var x = document.getElementById("hdrLinks"); 	//get the elements with id = "hdrLinks"
	var i = document.getElementById("icn");			//get the elements with id = "icn"
	  
	//check the inner width of the window and display the navigation bar  
	if(window.innerWidth < 800){
		x.style.display = "none";
		i.style.visibility = "visible";
	}	
	else {
		i.style.visibility = "hidden";		
	}

}

//change the navigation bar with the icon
function myFunction() {
	var x = document.getElementById("hdrLinks");	//get the elements with id = "hdrLinks"
	
	if (x.style.display === "block") {
		x.style.display = "none";
		x.style.visibility = "hidden";
	} 
	else {
		x.style.display = "block";
		x.style.visibility = "visible";
		x.style.backgroundColor = "rgba(0,0,0,0.5)";
		
	}
}
