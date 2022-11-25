const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonIncrease = document.querySelector('.buttonincrease')
const buttonDecrease = document.querySelector('.buttondecrease')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function cauntdow(){

   /* 1. setTimeout - será adcionado um tempo, depois de um tempo ele irá 
  executar uma função de callback 
  2. Primeiro vem a função, depois o tempo que será executado a função
  */
  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    if (minutes <= 0){
      buttonStop.classList.add('hide')
      buttonSet.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      return
    }

    if( seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0") /*padStart(2, "0") - preenchimento, nesse exemplo serão usados dois espaços e o primeiro será uma string "0"*/
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    cauntdow()
  }, 1000) 

}

// callback - chamar afunção de volta
buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')

  cauntdow()
  
})

buttonPause.addEventListener('click', function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')

})

buttonStop.addEventListener('click', function() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  
})

buttonSet.addEventListener('click', function() {
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos você que adicionar?')
  minutesDisplay.textContent = String(minutes).padStart(2, "0") /* textContent altera o conteúdo*/
})








