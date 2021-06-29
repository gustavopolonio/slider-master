let avatarImage = document.querySelector("#avatar-image")
let description = document.querySelector(".page-content p")
let avatarName = document.querySelector(".footer-content h2")
const profession = document.querySelector(".footer-content span")

var counter = 0

function displayScreen() {
    //avatar image
    avatarImage.src = avatar[counter].avatarImage.url

    //description
    description.innerHTML = avatar[counter].description

    //name
    avatarName.innerHTML = avatar[counter].name

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