var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")


headOne.addEventListener('mouseover', function () {
    headOne.textContent = "mouse currently over"
    headOne.style.color = 'red'
})

headOne.addEventListener('mouseout', function () {
  headOne.textContent = "HOVER OVER ME"
  headOne.style.color = 'black'
})


headTwo.addEventListener('click',function() {
      headTwo.textContent = "I'm clicked"
      headTwo.style.color = "yellow"
})

headThree.addEventListener('dblclick', function () {
  headThree.style.color = "green"
})
