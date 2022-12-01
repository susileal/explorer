// EcmaScript - ES6 Modules

// default import
import Controls from "./controls.js"

// named import
import Timer from "./timer.js"

import Card from "./card.js"


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const buttonForest = document.querySelector('.forest')
const buttonForest2 = document.querySelector('.forest2')
const buttonRain = document.querySelector('.rain')
const buttonRain2 = document.querySelector('.rain2')
const buttonCoffeeshop = document.querySelector('.coffeeshop')
const buttonCoffeeshop2 = document.querySelector('.coffeeshop2')
const buttonFireplace = document.querySelector('.fireplace')
const buttonFireplace2 = document.querySelector('.fireplace2')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


// é necessário passar as dependências para a "fábrica"
const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const card = Card ({
  buttonForest,
  buttonForest2,
  buttonRain,
  buttonRain2,
  buttonCoffeeshop,
  buttonCoffeeshop2,
  buttonFireplace,
  buttonFireplace2
}) 

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()

})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
})

buttonSet.addEventListener('click', function() {
  controls.set()
})

buttonIncrease.addEventListener('click', function() {
 timer.increase()
})

buttonDecrease.addEventListener('click', function() {
  timer.decrease()
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonForest.addEventListener('click', function() {
  card.forest()
})

buttonForest2.addEventListener('click', function() {
  card.forest2()
})

buttonRain.addEventListener('click', function() {
  card.rain()
})

buttonRain2.addEventListener('click', function() {
  card.rain2()
})

buttonCoffeeshop.addEventListener('click', function() {
  card.coffeeshop()
})

buttonCoffeeshop2.addEventListener('click', function() {
  card.coffeeshop2()
})

buttonFireplace.addEventListener('click', function() {
  card.fireplace()
})

buttonFireplace2.addEventListener('click', function() {
  card.fireplace2()
})









