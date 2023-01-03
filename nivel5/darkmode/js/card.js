

export default function Card ({
  buttonForest,
  buttonForest2,
  buttonRain,
  buttonRain2,
  buttonCoffeeshop,
  buttonCoffeeshop2,
  buttonFireplace,
  buttonFireplace2
}) {

  function forest (){
    buttonForest.classList.add('hide')
    buttonForest2.classList.remove('hide')
    buttonRain2.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonCoffeeshop.classList.remove('hide')
    buttonCoffeeshop2.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace2.classList.add('hide')
   

  }

  function forest2 (){
    buttonForest.classList.remove('hide')
    buttonForest2.classList.add('hide')
  }

  function rain() {
    buttonRain.classList.add('hide')
    buttonRain2.classList.remove('hide')
    buttonForest.classList.remove('hide')
    buttonForest2.classList.add('hide')
    buttonCoffeeshop.classList.remove('hide')
    buttonCoffeeshop2.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace2.classList.add('hide')
    console.log("flor")
  }


  function rain2() {
    buttonRain.classList.remove('hide')
    buttonRain2.classList.add('hide')
    console.log("teste")
  }

  
  
  function coffeeshop() {
    buttonCoffeeshop.classList.add('hide')
    buttonCoffeeshop2.classList.remove('hide')
    buttonForest.classList.remove('hide')
    buttonForest2.classList.add('hide')
    buttonRain2.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace2.classList.add('hide')

    
  }

  function coffeeshop2() {
    buttonCoffeeshop.classList.remove('hide')
    buttonCoffeeshop2.classList.add('hide')

   
  }

  function fireplace() {
    buttonFireplace.classList.add('hide')
    buttonFireplace2.classList.remove('hide')
    buttonForest.classList.remove('hide')
    buttonForest2.classList.add('hide')
    buttonRain2.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonCoffeeshop.classList.remove('hide')
    buttonCoffeeshop2.classList.add('hide')

    console.log("teste")

  }

  function fireplace2() {
    buttonFireplace.classList.remove('hide')
    buttonFireplace2.classList.add('hide')
  }

  return {
    forest,
    forest2,
    rain,
    rain2,
    coffeeshop,
    coffeeshop2,
    fireplace,
    fireplace2
  }

  }