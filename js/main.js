
// Swiper js section Start here

var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    autoplay:true,
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




var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

// Range Slider 2 End here
// Manipulate SwiperJs Start here
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Manipulate SwiperJs End here

