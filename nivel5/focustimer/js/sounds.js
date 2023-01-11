export default function () {
 
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const buttonAudioForest = new Audio("./audios/forest.mp3")
  const buttonAudioRain = new Audio ("./audios/rain.mp3")
  const buttonAudioCoffeeshop =  new Audio ("./audios/coffeeshop.mp3")
  const buttonAudioFireplace = new Audio ("./audios/fireplace.mp3")


  
  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    buttonAudioForest,
    buttonAudioRain,
    buttonAudioCoffeeshop,
    buttonAudioFireplace
  }
}