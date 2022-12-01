// name export

// factory - uma função que retorna um objeto
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){

    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)


      if (minutes <= 0){
        resetControls()
        return
      }

      if( seconds <= 0) {
        seconds = 10
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000) 

  }

  // função para atualizar os minutos
  function updateMinutes (newMinutes){
    minutes =  newMinutes
  }

  // função para o pause funcionar

  function hold () {
    clearTimeout(timerTimeOut) // espera que dentro dele tenha um ID numérico, diz para o JS para tudo
  }

  function increase () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent) + 5
  
    updateDisplay(String(minutes), seconds)
  }

  function decrease () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent) - 5

    if(minutes < 0){
      minutes = 0
    }
    updateDisplay(String(minutes), seconds)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    increase,
    decrease
  }

}