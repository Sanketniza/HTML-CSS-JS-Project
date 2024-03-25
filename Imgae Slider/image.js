/*
 const slides = document.querySelectorAll(".slide")
 let counter = 0;
//  let index = 0 ;

//  slides.forEach((slide ,index) => {
//      slide.style.left = `$(index * 100)%`  // todo: due to it image can move from right to left
//    //  slide.style.button = `$(index * 100)%`  // todo: due to it image can move from top to button
//  })

 slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

 const goNext = () => {
     counter--;
    //  alert()
     slideImage()         // todo: call to slideImage function
 }   
const goPrev = () => {
    counter++;
    // alert()
    slideImage()           // todo: call to slideImage function
}



 const slideImage = () => {
    slides.forEach( (slide) => {
        slide.style.transform = `translateX(-$(counter * 100)%)`
    })
 } */


 const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}