let avatarImage = document.querySelector("#avatar-image")
let description = document.querySelector(".page-content p")
const name = document.querySelector(".footer-content h2")
const profession = document.querySelector(".footer-content span")

var counter = 0

function displayScreen() {
    //avatar image
    avatarImage.src = avatar[counter].avatarImage.url

    //description
    description.innerHTML = avatar[counter].description

    //name
    name.innerHTML = avatar[counter].name

    //profession
    profession.innerHTML = avatar[counter].profession
}

function sliderNext() {
    counter += 1
    if (counter < avatar.length) {
        displayScreen()
    } else {
        counter = 0
        displayScreen()
    }
}

function sliderPrevious() {
    counter -= 1
    if (counter < 0) {
        counter = avatar.length - 1
        displayScreen()
    } else {
        displayScreen()
    }
}



















// const next = document.querySelector("#next-button")
// const back = document.querySelector("#back-button")
// const slides = document.querySelectorAll(".slider-contents")

// var index = 0;

// function display(index) {
//     slides.forEach(slide => {
//         slide.style.display = "none";
//     })
//     slides[index].style.display = "block";
// }
// display(index);

// next.addEventListener("click", nextSlide)

// function nextSlide() {
//     index++;
//     if (index > slides.length - 1) {
//         index = 0;
//     }
//     display(index);
// }

// back.addEventListener("click", prevSlide)

// function prevSlide() {
//     index--;
//     if (index < 0) {
//         index = slides.length - 1
//     }
//     display(index);
// }