let slideButton = document.querySelector(".slideButton")
let circle = document.querySelector(".circle")
let introText = document.querySelector(".introText")


slideButton.addEventListener('click', () => {
    console.log(slideButton)
    circle.classList.add('transitionUp');
    introText.classList.add('transitionOpacity');




})
