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
    sliderImages.querySelector(`.pic__sl.active`)?.classList.remove('active')
    sliderImages.querySelector(`.pic__sl.n${nextNumber}`).classList.add('active')

    if (options.dots) {
        let dotsWrapper = document.querySelectorAll(".nav-slider__item");
        dotsWrapper.querySelector(".nav-item.active").classList.remove("active");
        dotsWrapper.querySelector(`<div className="n1">num</div>`).classList.add("active");
        
    }
    
    console.log(nextNumber)
}
  
function initDots() { 
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = ".nav-slider__item";
    images.forEach((images, index) => {
        let dot = document.createElement("div");
        dot.className = `nav-item n${index}
        ${index? "" : "active"}`;
            dot.dataset.index = index;
            dot.addEventListener("click",function() {
                moveSlider(this.dataset.index);
            });
            dotsWrapper.appendChild(dot); 
    });
    sliderWrapper.appendChild(dotsWrapper);
}
