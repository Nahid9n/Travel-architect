
// Swiper js section Start here

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Swiper js Slider End here

// Range Slider Start here

var slider = document.getElementById("myRange");
var output = document.getElementById("demo1");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};

// Range Slider End here

// Range Slider 2 Start here

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

// Range Slider 2 End here
