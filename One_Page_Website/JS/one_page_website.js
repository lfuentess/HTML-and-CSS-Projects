function show_display(ind){
  document.getElementById("thumbnails").style.display = "none";
  document.getElementById("videocars").style.display="none"  ;
  document.getElementById("contact").style.display="none"  ;
  if (ind==0) document.getElementById("thumbnails").style.display = "block";
  if (ind==1) document.getElementById("videocars").style.display = "block";
  if (ind==2) document.getElementById("contact").style.display = "block";

}
show_display();
  

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

var slideIndex =1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
