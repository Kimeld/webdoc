let buttonIntro = document.querySelector(".buttonIntro")
let circle = document.querySelector(".circle")
let introText = document.querySelector(".introText")


buttonIntro.addEventListener('click', () => {
    console.log(buttonIntro)
    circle.classList.add('transitionUp');
    introText.classList.add('transitionOpacity');




})
