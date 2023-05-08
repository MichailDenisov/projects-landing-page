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
const dots = document.querySelector(".dots");
const link = document.querySelector(".nav-link"); 

let interiorNumber = 0;

initSlider(img)

function initSlider(images, options) {
if (!images || !images.length) return;    

    options = options || {
        link: true,
        dots: true,
        titles: false,
        autopley: false,
        autoplayInterval: 3000
    }    

    initImages(images);
    initArrows(images);

    if (options.dots) {
        initDots(images);
    }

    if (options.autoplay) {
        initAutopley();
    }
     
    if (options.link)
        initList(images);

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

    
    console.log(nextNumber)
}
  
function initDots(images) { 
    images.forEach((images, index) => {
        let dot = `<div class="dots-navigation__slider-circle n${index === 0 ?`active` : ``}" data-index="${index}"></div>`;
        dots.innerHTML += dot
    });

    const dotsList = document.querySelectorAll('.dots-navigation__slider-circle')
    dotsList.forEach((dot, index) => {
        dot.addEventListener( "click", function() {
            moveSlider(this.dataset.index);
        });
    })
    // sliderWrapper.appendChild(dotsWrapper);
}

 function initlink (images) {
    images.forEach((images, index) => {
        let link = `<div class="nav-item__link n${index} ${index === 0 ? `active` : ``}" data-index="${index}"></div>`;
        link.innerHTML += link
    });
    const linkList = document.querySelectorAll('.nav-item__link')
    linkList.forEach((link, index) => {
        link.addEventListener("click", function(){
            moveSlider(this.dataset.index);
        })
    })
 }
