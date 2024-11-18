let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

// Auto change slides every 3 seconds
setInterval(() => {
    plusSlides(1);
}, 3000); // Change image every 3 seconds
