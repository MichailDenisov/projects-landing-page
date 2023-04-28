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

const sliderWrapper = document.querySelector(".picture-slider");
const sliderImages = sliderWrapper.querySelector(".pic__sl");
const sliderArrows = sliderWrapper.querySelectorAll(".slider__arrow");

let interiorNumber = 0;

initSlider(img)

function initSlider(images, options) {
if (!images || !images.length) return;    

    options = options || {
        dots: false,
        titles: false,
        autopley: false,
        autoplayInterval: 3000
    }    

    initImages(images);
    initArrows(images);

    if (options.dots) {
        initDots();
    }

    if (options.autoplay) {
        initAutopley();
    }

}

    function initImages(images) {
        images.forEach((image, index) => {
        document.querySelector('.images-list').innerHTML +=
        `<img class="pic__sl picture-slider__adm image n${index}" src="${image.url}"alt="Rostov-on-Don">`
        });
    }

function initArrows(images) {
    let lastindex = images.length - 1;
    sliderArrows.forEach(arrow => {
        arrow.addEventListener("click", function() {
            // let interiorNumber = +sliderImages.querySelector(".active").detaset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
                nextNumber = interiorNumber === 0? lastindex : interiorNumber - 1;
            } else {
                nextNumber = interiorNumber === lastindex? 0 : interiorNumber + 1;

            }
            interiorNumber = nextNumber
            moveSlider(nextNumber);
        });
    });
}

function moveSlider(nextNumber){
    console.log(nextNumber)
}
