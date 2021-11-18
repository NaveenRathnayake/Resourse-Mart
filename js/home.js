/*<!--https://www.w3schools.com/tags/tag_label.asp-->*/
var slideIndex = 1;
slideshow(slideIndex);

function plusSlides(n) {
  slideshow(slideIndex += n);
  

}

function currentSlide(n) {
  slideshow(slideIndex = n);
}

function slideshow(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    var init=document.getElementsByClassName("initial");
  init[0].style.display="none";
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}