let number1 =  Number(prompt ("Digite o primeiro número:"))
let number2 = Number(prompt ("Digite o segundo número:"))

let sum = number1+number2;
let subtraction = number1-number2;
let multiplication = number1*number2;
let division = number1/number2;
let restDivision = number1%number2;

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão dos dois números é: ${restDivision}`)

if(sum%2 == 0) {
 alert(`A soma dos dois números é par: ${sum}`) 
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`) 
}

if( number1 == number2) {
  alert(`Os dois números são iguais. Os números digitados foram: ${number1}, ${number2}`) 
 } else {
  alert(`Os dois números são diferentes. Os números digitados foram: ${number1}, ${number2}`)
 }