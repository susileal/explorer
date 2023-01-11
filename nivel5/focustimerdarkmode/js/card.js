import Sound from "./sounds.js"

const sound = Sound ()

export default function Card ({
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  volForest,
  volRain,
  volCoffeeShop,
  volFirePlace
}) {

  function forest (){

    if (!buttonForest.classList.contains("active")){
      buttonForest.classList.add('active') 
      buttonRain.classList.remove('active')
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.remove('active')

      volForest.classList.add('activeInput')
      volRain.classList.remove('activeInput')
      volCoffeeShop.classList.remove('activeInput')
      volFirePlace.classList.remove('activeInput')

      sound.buttonAudioForest.play()
      sound.buttonAudioRain.pause()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonForest.classList.remove('active')
      volForest.classList.remove('activeInput') 
      sound.buttonAudioForest.pause()
    }

  }


  function rain() {
    if (!buttonRain.classList.contains("active")){
      buttonForest.classList.remove('active')  
      buttonRain.classList.add('active')
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.remove('active')

      volRain.classList.add('activeInput')
      volForest.classList.remove('activeInput')
      volCoffeeShop.classList.remove('activeInput')
      volFirePlace.classList.remove('activeInput')

      sound.buttonAudioForest.pause()
      sound.buttonAudioRain.play()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonRain.classList.remove('active')
      volRain.classList.remove('activeInput')
      sound.buttonAudioRain.pause()
    }
  }

  
  
  function coffeeshop() {

    if (!buttonCoffeeshop.classList.contains("active")){
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active') 
      buttonCoffeeshop.classList.add('active')
      buttonFireplace.classList.remove('active')

      volCoffeeShop.classList.add('activeInput')
      volRain.classList.remove('activeInput')
      volForest.classList.remove('activeInput')
      volFirePlace.classList.remove('activeInput')
 
      sound.buttonAudioRain.pause()
      sound.buttonAudioForest.pause()
      sound.buttonAudioCoffeeshop.play()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonCoffeeshop.classList.remove('active')
      volCoffeeShop.classList.remove('activeInput')
      sound.buttonAudioCoffeeshop.pause()
    }
    
  }

  function fireplace() {
    if (!buttonFireplace.classList.contains("active")){
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active') 
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.add('active')

      volFirePlace.classList.add('activeInput')
      volRain.classList.remove('activeInput')
      volForest.classList.remove('activeInput')
      volCoffeeShop.classList.remove('activeInput')
 
      sound.buttonAudioRain.pause()
      sound.buttonAudioForest.pause()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.play()

    } else {
      buttonFireplace.classList.remove('active')
      volFirePlace.classList.remove('activeInput')
      sound.buttonAudioFireplace.pause()
    }

  }

  function updateVolumeForest(volume){
    sound.buttonAudioForest.volume = volume
  }

  function updateVolumeRain(volume){
    sound.buttonAudioRain.volume = volume
  }

  function updateVolumeFireplace(volume){
    sound.buttonAudioFireplace.volume = volume
  }

  function updateVolumeCoffeeshop(volume){
    sound.buttonAudioCoffeeshop.volume = volume
  }

  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    updateVolumeForest,
    updateVolumeRain,
    updateVolumeFireplace,
    updateVolumeCoffeeshop
  }
}
