const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonIncrease = document.querySelector('.buttonincrease')
const buttonDecrease = document.querySelector('.buttondecrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

/* refatoração utilizando funções*/
function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
 
}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")

}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdow(){

  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)


    if (minutes <= 0){
      resetControls()
      return
    }

    if( seconds <= 0) {
      seconds = 10
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdow()
  }, 1000) 

}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')

  countdow()
  
})

buttonPause.addEventListener('click', function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut) // espera que dentro dele tenha um ID numérico, diz para o JS para tudo

})

buttonStop.addEventListener('click', function() {
  resetControls()
  resetTimer()
})

buttonSet.addEventListener('click', function() {
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt('Quantos minutos você que adicionar?')
  if (!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})








