const $test = document.querySelectorAll(".test")
const $help = document.querySelectorAll(".help")
const $close = document.querySelectorAll(".close")
const $description = document.querySelectorAll(".description")
const $person1 = document.querySelectorAll(".person1")

/* clic help */

for (let i=0; i<$help.length; i++)
{
  $help[i].addEventListener('click', () =>
  {
    for (let j=0; j<$test.length; j++)
    {
      $test[j].style.visibility="hidden"
      $help[j].style.visibility="hidden"
    }
  })
}

/* clic close */ 

for (let i=0; i<$close.length; i++)
{
  $close[i].addEventListener('click', () =>
  {
    for (let j=0; j<$test.length; j++)
    {
      $test[j].style.visibility="visible"
      $help[j].style.visibility="visible"
    }
  })
}


let person1 = document.querySelector('.person1')
let person2 = document.querySelector('.person2')
let person3 = document.querySelector('.person3')
let person4 = document.querySelector('.person4')
let person5 = document.querySelector('.person5')
let person6 = document.querySelector('.person6')
let text1 = document.querySelector('.text1')


person1.addEventListener('click', () => {
    console.log(person1)
    text1.innerHTML = "“Manger sain, c’est toujours synonyme de privation et de frustration. Mais on se rend vite compte que l’on ne s’est jamais autant amusé avec la nourriture ! Je mange varié et je découvre de nouvelles saveurs. Bref, on s’éclate nous, les healthy vegan !” _ Gala";
    text1.classList.remove('opacity');

})

person2.addEventListener('click', () => {
    console.log(person2)
    text1.innerHTML = "Être healthy c’est être et vivre en équilibre, ça passe évidemment par une bonne alimentation et de l’activité physique mais pas que, il faut surtout se faire plaisir et s’autoriser à prendre du temps pour soi. _ Clio Pajczer";
    text1.classList.remove('opacity');
})

person3.addEventListener('click', () => {
    console.log(person3)
    text1.innerHTML = "Être healthy, c’est avant tout être bien dans son corps, dans sa tête et dans son assiette. C’est se faire du bien en mangeant sainement et en faisant du sport. _ Juliette";
    text1.classList.remove('opacity');
})

person4.addEventListener('click', () => {
    console.log(person4)
    text1.innerHTML = "Oui, je pense que nous avons suffisamment de recul pour estimer l’impact de la malbouffe sur notre santé, notre moral et l’écologie. Et il y a, d’après moi, une prise de conscience générale en faveur du bien-être et du respect de la Terre. _ Angèle";
    text1.classList.remove('opacity');
})

person5.addEventListener('click', () => {
    console.log(person4)
    text1.innerHTML = "Le premier pas à faire pour manger plus sainement : c’est d’acheter et de consommer de la « vraie » nourriture. Autrement dit, privilégiez au maximum les produits frais, sous leur forme naturelle. _ Pierre";
    text1.classList.remove('opacity');
})

person6.addEventListener('click', () => {
    console.log(person4)
    text1.innerHTML = "Cuisiner healthy, c’est judicieusement choisir des ingrédients tous riches en « super-nutriments » pour apporter au corps tout ce dont il a besoin afin qu’il soit boosté et revitalisé. _ Tristan";
    text1.classList.remove('opacity');
})

