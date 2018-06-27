let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let chimic = document.querySelector('.chimic')
let containerHeight = document.querySelector('height')

let height = windowHeight
console.log(chimic)
chimic.style.height = windowHeight

let text = document.querySelector(".text ")
let defoImg = document.querySelector(".defoImg")

let text2 = document.querySelector(".text2 ")
let defoImg2 = document.querySelector(".defoImg2")

let circlePopup2 = document.querySelector(".circlePopup2")
let circlePopup = document.querySelector(".circlePopup")

circlePopup.addEventListener('click', () => {
    console.log(circlePopup)
    text.classList.add('moveDownText');
    defoImg.classList.add('moveUpImage');
    text2.classList.remove('moveDownText2');
    defoImg2.classList.remove('moveUpImage2');




})

circlePopup2.addEventListener('click', () => {
    console.log(circlePopup2)
    text.classList.remove('moveDownText');
    defoImg.classList.remove('moveUpImage');
    text2.classList.add('moveDownText2');
    defoImg2.classList.add('moveUpImage2');




})
