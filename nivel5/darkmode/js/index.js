// EcmaScript - ES6 Modules

// default import
import Controls from "./controls.js"

// named import
import Timer from "./timer.js"

import Card from "./card.js"

import Sound from "./sounds.js"

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonForest2,
  buttonRain,
  buttonRain2,
  buttonCoffeeshop,
  buttonCoffeeshop2,
  buttonFireplace,
  buttonFireplace2,
  buttonSun,
  buttonMoon,
  mainPage,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

// é necessário passar as dependências para a "fábrica"
const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer ({
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

const sound = Sound ()


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()

})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSet.addEventListener('click', function() {
  controls.set()
  sound.pressButton()
})

buttonIncrease.addEventListener('click', function() {
 timer.increase()
 sound.pressButton()
})

buttonDecrease.addEventListener('click', function() {
  timer.decrease()
  sound.pressButton()
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
  sound.buttonAudioForest.play()
  sound.buttonAudioRain.pause()
  sound.buttonAudioCoffeeshop.pause()
  sound.buttonAudioFireplace.pause()
})

buttonForest2.addEventListener('click', function() {
  card.forest2()
  sound.buttonAudioForest.pause()
})

buttonRain.addEventListener('click', function() {
  card.rain()
  sound.buttonAudioRain.play()
  sound.buttonAudioForest.pause()
  sound.buttonAudioCoffeeshop.pause()
  sound.buttonAudioFireplace.pause()
})

buttonCoffeeshop.addEventListener('click', function() {
  card.coffeeshop()
  sound.buttonAudioCoffeeshop.play()
  sound.buttonAudioForest.pause()
  sound.buttonAudioRain.pause()
  sound.buttonAudioFireplace.pause()
})

buttonCoffeeshop2.addEventListener('click', function() {
  card.coffeeshop2()
  sound.buttonAudioCoffeeshop.pause()
})

buttonFireplace.addEventListener('click', function() {
  card.fireplace()
  sound.buttonAudioFireplace.play()
  sound.buttonAudioForest.pause()
  sound.buttonAudioRain.pause()
  sound.buttonAudioCoffeeshop.pause()
  
})

buttonFireplace2.addEventListener('click', function() {
  card.fireplace2()
  sound.buttonAudioFireplace.pause()
})

buttonSun.addEventListener('click', function() {
  mainPage.classList.add('darkmode')
  mainPage.classList.remove('lightmode')
  buttonSun.classList.add('hide')
  buttonMoon.classList.remove('hide')
})

buttonMoon.addEventListener('click', function() {
  mainPage.classList.add('lightmode')
  mainPage.classList.remove('darkmode')
  buttonSun.classList.remove('hide')
  buttonMoon.classList.add('hide')
})







