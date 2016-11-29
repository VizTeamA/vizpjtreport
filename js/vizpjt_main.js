// JavaScript Document

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

//include html within another html
w3IncludeHTML();

//to show and hide

function myFunction(para) {
	
    document.getElementById('myDIV-1').style.display ='none';
    document.getElementById('myDIV-2').style.display ='none';
    document.getElementById('myDIV-3').style.display ='none';
    document.getElementById('myDIV-4').style.display ='none';   
 
    document.getElementById('myDIV-5').style.display ='none';
    document.getElementById('myDIV-6').style.display ='none';
    document.getElementById('myDIV-7A').style.display ='none';
    document.getElementById('myDIV-7B').style.display ='none';
    document.getElementById('myDIV-8').style.display ='none';
    document.getElementById('myDIV-9').style.display ='none';
    document.getElementById('myDIV-10').style.display ='none';
                            
    document.getElementById(para).style.display ='block';
    control.log(para);
}
