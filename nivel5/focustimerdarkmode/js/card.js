import Sound from "./sounds.js"

const sound = Sound ()

export default function Card ({
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  inputVolume
}) {

  function forest (){

    if (!buttonForest.classList.contains("active")){
      buttonForest.classList.add('active')  
      inputVolume.classList.add('active')
      buttonRain.classList.remove('active')
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.remove('active')

      sound.buttonAudioForest.play()
      sound.buttonAudioRain.pause()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonForest.classList.remove('active')
      sound.buttonAudioForest.pause()
    }

  }


  function rain() {
    if (!buttonRain.classList.contains("active")){
      buttonForest.classList.remove('active')  
      buttonRain.classList.add('active')
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.remove('active')

      sound.buttonAudioForest.pause()
      sound.buttonAudioRain.play()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonRain.classList.remove('active')
      sound.buttonAudioRain.pause()
    }
  }

  
  
  function coffeeshop() {

    if (!buttonCoffeeshop.classList.contains("active")){
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active') 
      buttonCoffeeshop.classList.add('active')
      buttonFireplace.classList.remove('active')
 
      sound.buttonAudioRain.pause()
      sound.buttonAudioForest.pause()
      sound.buttonAudioCoffeeshop.play()
      sound.buttonAudioFireplace.pause()

    } else {
      buttonCoffeeshop.classList.remove('active')
      sound.buttonAudioCoffeeshop.pause()
    }
    
  }

  function fireplace() {
    if (!buttonFireplace.classList.contains("active")){
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active') 
      buttonCoffeeshop.classList.remove('active')
      buttonFireplace.classList.add('active')
 
      sound.buttonAudioRain.pause()
      sound.buttonAudioForest.pause()
      sound.buttonAudioCoffeeshop.pause()
      sound.buttonAudioFireplace.play()

    } else {
      buttonFireplace.classList.remove('active')
      sound.buttonAudioFireplace.pause()
    }

  }

  return {
    forest,
    rain,
    coffeeshop,
    fireplace
  }
}