const img = [
    {
    url: "./images/slider1.jpg",
    link: "Rostov-on-Don, Admiral"
},
{
    url: './images/slider2.jpg',
    link: "Sochi Thieves"
},
{
     url: "./images/slider3.jpg",
     link: "Rostov-on-Don Patriotic" 
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
        initlink(images);

}

    function initImages(images) {
        images.forEach((image, index) => {
        document.querySelector('.images-list').innerHTML +=
        `<img class="pic__sl picture-slider__adm image n${index} ${index === 0 ? `active` : ``}" src="${image.url}"alt="Rostov-on-Don">`
        });
    }

function initArrows(images) {
    let lastindex = images.length - 1;
    sliderArrows.forEach(arrow => {
        arrow.addEventListener("click", function() {
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
    sliderImages.querySelector(`.pic__sl.active`)?.classList.remove('active');
    sliderImages.querySelector(`.pic__sl.n${nextNumber}`).classList.add('active');

    if (options.dots) {
        let dotsWrapper = document.querySelector(".dots");
        dotsWrapper.querySelector(".dots-navigation__slider-circle.active")?.classList.remove("active");
        dotsWrapper.querySelector(`.dots-navigation__slider-circle.n${nextNumber}`).classList.add("active");
    }
   if (options.link) {
    let linkWrapper = document.querySelector('.nav-link');
    linkWrapper.querySelector('.nav-item__link.active')?.classList.remove("active");
    linkWrapper.querySelector(`.nav-item__link.n${nextNumber}`).classList.add("active");
   }
    console.log(nextNumber)
}
  
function initDots(images) { 
    images.forEach((image, index) => {
        let dot = `<div class="dots-navigation__slider-circle n${index} ${index === 0 ?`active` : ``}" data-index="${index}"></div>`;
        dots.innerHTML += dot
    });

    const dotsList = document.querySelectorAll('.dots-navigation__slider-circle')
    dotsList.forEach((dot, index) => {
        dot.addEventListener( "click", function() {
            moveSlider(this.dataset.index);
        });
    })
}
 
// function moveSlider(nextNumber) {
//     sliderImages.querySelector(`.dots-navigation__slider-circle.active`)?.classList.remove(`active`)
//     sliderImages.querySelector(`.dots-navigation__slider-circle .n${nextNumber} `).classList.add(`active`)
// }

 function initlink(images) {
    images.forEach((image, index) => {
        let links = `<div class="nav-item nav-item__link n${index} ${index === 0 ? `active` : ``}" data-index="${index}">${image.link}</div>`
        link.innerHTML += links
    });
    const linkList = document.querySelectorAll('.nav-item__link')
    linkList.forEach((link, index) => {
        link.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        });
    })
 }
 

//  ну и логично при переключении картинок надо удалять класс active
//  у старых активных элементов и добавлять новым его(касается точки и навигации)