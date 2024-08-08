            var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents= document.getElementsByClassName("tab-contents");


            function opentab(tabname){
                for(tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
                }



 ///.....Img-rows------slideShow

 function showSlides(slideshowClass, delay) {
    let slides = document.getElementsByClassName(slideshowClass);
    let slideIndex = 0;

    function displaySlides() {
        for (let slide of slides) {
            slide.style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(displaySlides, 3000); // Change image every 3 seconds
    }

    setTimeout(displaySlides, delay);
}

window.onload = function() {
    // Start each slideshow with a delay
    setTimeout(() => showSlides("mySlidesAnkara", 0), 5000);
    setTimeout(() => showSlides("mySlidesAsoOke", 0), 5000);
    setTimeout(() => showSlides("mySlidesGown", 0), 5000);
    setTimeout(() => showSlides("mySlidesbuBu", 0), 5000);
};






 
