//Function untuk SliderImage Pertama
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides-1");
    var dots = document.getElementsByClassName("dot-1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 2000); // gambar berubah setiap 2 detik
}

//Function untuk SliderImage Kedua
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides-2");
    var dots = document.getElementsByClassName("dot-2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 2000); // gambar berubah setiap 2 detik
}

//Function untuk SliderImage Ketiga
var slideIndex3 = 0;
showSlides3();
function showSlides3() {
    var i;
    var slides = document.getElementsByClassName("mySlides-3");
    var dots = document.getElementsByClassName("dot-3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active";
    setTimeout(showSlides3, 2000); // gambar berubah setiap 2 detik
}

//Function untuk SliderImage Keempat
var slideIndex4 = 0;
showSlides4();
function showSlides4() {
    var i;
    var slides = document.getElementsByClassName("mySlides-4");
    var dots = document.getElementsByClassName("dot-4");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) {slideIndex4 = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";  
    dots[slideIndex4-1].className += " active";
    setTimeout(showSlides4, 2000); // gambar berubah setiap 2 detik
}