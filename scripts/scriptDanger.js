let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let chimic = document.querySelector('.chimic')
let containerHeight = document.querySelector('height')

let height = windowHeight
console.log(chimic)
chimic.style.height = windowHeight
//1 sur 4
let text = document.querySelector(".text ")
let defoImg = document.querySelector(".defoImg")

let text2 = document.querySelector(".text2 ")
let defoImg2 = document.querySelector(".defoImg2")

let circlePopup4 = document.querySelector(".circlePopup4")
let circlePopup3 = document.querySelector(".circlePopup3")
let circlePopup2 = document.querySelector(".circlePopup2")
let circlePopup = document.querySelector(".circlePopup")

circlePopup.addEventListener('click', () => {
    console.log(circlePopup)
    text.classList.add('moveDownText');
    defoImg.classList.add('moveUpImage');
    text2.classList.remove('moveDownText2');
    defoImg2.classList.remove('moveUpImage2');

    circlePopup.classList.add('opacityButton');
    circlePopup2.classList.remove('opacityButton');



})

circlePopup2.addEventListener('click', () => {
    console.log(circlePopup2)
    text.classList.remove('moveDownText');
    defoImg.classList.remove('moveUpImage');
    text2.classList.add('moveDownText2');
    defoImg2.classList.add('moveUpImage2');
    circlePopup2.classList.add('opacityButton');
    circlePopup.classList.remove('opacityButton');



})
//2 sur 4

let text3 = document.querySelector(".text3 ")
let defoImg3 = document.querySelector(".defoImg3")

let text4 = document.querySelector(".text4 ")
let defoImg4 = document.querySelector(".defoImg4")


circlePopup3.addEventListener('click', () => {
    console.log(circlePopup)
    text3.classList.add('moveDownText');
    defoImg3.classList.add('moveUpImage');
    text4.classList.remove('moveDownText2');
    defoImg4.classList.remove('moveUpImage2');
    circlePopup3.classList.add('opacityButton');
    circlePopup4.classList.remove('opacityButton');




})

circlePopup4.addEventListener('click', () => {
    console.log(circlePopup2)
    text3.classList.remove('moveDownText');
    defoImg3.classList.remove('moveUpImage');
    text4.classList.add('moveDownText2');
    defoImg4.classList.add('moveUpImage2');
    circlePopup4.classList.add('opacityButton');
    circlePopup3.classList.remove('opacityButton');


})
