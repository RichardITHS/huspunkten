
//Show Navbar
//targeting toggle-botton and the first array (0)
const toggleButton = document.getElementsByClassName('toggle-button')[0]
//targeting navbar-links and the first array (0)
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//Listen on click on toggle button then activate the navbarlinks list
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}   
