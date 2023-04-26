const img = [
    {
    url: "./images/slider1.jpg"
},
{
    url: './images/slider2.jpg'
},
{
     url: "./images/slider3.jpg" 
}

];

initSlider(img)

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
        // initDots();
    }

    if (options.autoplay) {
        // initAutopley();
    }

    function initImages() {
        images.forEach((image, index) => {
        document.querySelector('.images-list').innerHTML +=
        `<img class="pic__sl picture-slider__adm image n${index}" src="${image.url}"alt="Rostov-on-Don">`
        });
    }
}

function initArrows() {
    let lastindex = images.length - 1;
    sliderArrows.querySelector(".slider-arrows").forEach(arrow => {
        arrow.querySelector("click", function() {
            let interiorNumber = +sliderImages.querySelector(".active").detaset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
                nextNumber = interiorNumber === 0? lastindex : interiorNumber - 1;
            } else {
                nextNumber = interiorNumber === lastindex? 0 : interiorNumber + 1;

            }
            moveSlider(nextNumber);
        });
    });
}

