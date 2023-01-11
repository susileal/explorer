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
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  volForest,
  volRain,
  volCoffeeShop,
  volFirePlace,
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
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  volForest,
  volRain,
  volCoffeeShop,
  volFirePlace
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
})

buttonRain.addEventListener('click', function() {
  card.rain()
})

buttonCoffeeshop.addEventListener('click', function() {
  card.coffeeshop()
})

buttonFireplace.addEventListener('click', function() {
  card.fireplace()  
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

volForest.addEventListener("input", function () {
  card.updateVolumeForest(volForest.value)
});

volRain.addEventListener("input", function () {
  card.updateVolumeRain(volRain.value);
});

volCoffeeShop.addEventListener("input", function () {
  card.updateVolumeCoffeeshop(volCoffeeShop.value);
  
});

volFirePlace.addEventListener("input", function () {
  card.updateVolumeFireplace(volFirePlace.value);
  
});









