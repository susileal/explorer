// default export
export default function Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop}) {

  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function set(){
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function reset(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  
  }

  function getMinutes () {
    let newMinutes = prompt('Quantos minutos você que adicionar?')
    if (!newMinutes) {
      timer.resetTimer()
      return false
    }

    return newMinutes
    
  }

  
  return {
    reset,
    play,
    pause,
    set,
    getMinutes
  }
  }