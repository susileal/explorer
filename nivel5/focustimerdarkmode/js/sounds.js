export default function () {
 
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const buttonAudioForest = new Audio("./audios/forest.wav")
  const buttonAudioRain = new Audio ("./audios/rain.wav")
  const buttonAudioCoffeeshop =  new Audio ("./audios/coffeeshop.wav")
  const buttonAudioFireplace = new Audio ("./audios/fireplace.wav")

  
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