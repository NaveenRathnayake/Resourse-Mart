function openForm() {  //open chat-box
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {  //close chat-box
  document.getElementById("myForm").style.display = "none";
}

function myFunctionCategory() {    //open category dropdown list
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  
  for (i = 0; i < a.length; i++) 
  {
    txtValue = a[i].textContent || a[i].innerText;
	
    if (txtValue.toUpperCase().indexOf(filter) > -1) 
		{
			a[i].style.display = "";
		} 
	else
		{
			a[i].style.display = "none";
		}
  }
}


function myFunctionCity() {       //open city dropdown list
  document.getElementById("myDropdowncity").classList.toggle("show");
}

function filterFunctionCity() {
  var input, filter, ul, li, a, y;
  
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdowncity");
  a = div.getElementsByTagName("a");
  
  for (y = 0; y < a.length; y++) 
  {
    txtValue = a[y].textContent || a[y].innerText;
	
    if (txtValue.toUpperCase().indexOf(filter) > -1) 
		{
		  a[y].style.display = "";
		} 
	else 
		{
		  a[y].style.display = "none";
		}
  }
}


















