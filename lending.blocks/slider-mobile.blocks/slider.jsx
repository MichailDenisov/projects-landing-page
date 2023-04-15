const img = [
    {
    url: "images\slider1.jpg"
},
{
    url: "images\slider2.jpg"
},
{
     url: "images\slider2.jpg" 
}

];

function initSlider(images, options) {
if (!images || !images.length) return;

    options = options || {
        dots: false,
        titles: false,
        autopley: false,
        autoplayInterval: 3000
    }

    const sliderWrapper = document.querySelector(".picture-slider");
    const sliderImages = sliderWrapper.querySelector(".pic__sl");
    const sliderArrows = sliderWrapper.querySelector(".slider-arrows");

    initImages();
    initArrows();
    if (options.dots) {
        initDots();
    }

    if (options.autoplay) {
        initAutopley();
    }

    function initImages() {
        images.forEach((image, index) => {
            let imageElement =
    document.createElement("div");
            imageElement.className = `image n${index}
            ${index? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style
        })
    }
}