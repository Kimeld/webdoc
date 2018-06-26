const $test = document.querySelectorAll(".test")
const $help = document.querySelectorAll(".help")
const $close = document.querySelectorAll(".close")

for (let i=0; i<$help.length; i++)
{
  $help[i].addEventListener('click', () =>
  {
    for (let j=0; j<$test.length; j++)
    {
      $test[j].style.visibility="hidden"
    }
  })
}

for (let i=0; i<$close.length; i++)
{
  $close[i].addEventListener('click', () =>
  {
    for (let j=0; j<$test.length; j++)
    {
      $test[j].style.visibility="visible"
    }
  })
}

