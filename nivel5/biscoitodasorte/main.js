import { phrases } from "./phrases.js"


const screen1 = document.querySelector(".screen1")
const button1 = document.querySelector(".screen1 button")

const screen2 = document.querySelector(".screen2")
const button2 = document.querySelector(".screen2 button")

const phrase = document.querySelector(".phrase")




button1.addEventListener('click', function() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
  
    const index = Math.floor(Math.random() * phrases.length)
    const phraseSelected = phrases[index]
    phrase.textContent = phraseSelected
})


button2.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  phrase.textContent = ""
})


  






