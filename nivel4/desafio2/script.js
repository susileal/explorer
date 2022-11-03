
let students = [
  {
    name: "Artur",
    testOne: 7.0,
    testTwo: 6.0,
  },
  {
    name: "Davi",
    testOne: 7.5,
    testTwo: 9.0,
  },
  {
    name: "Julia",
    testOne: 8.0,
    testTwo: 7.0,

  },
  {
    name: "Susana",
    testOne: 8.0,
    testTwo: 6.5,

  }
]


function calculationAverage (testOne,testTwo){
  average = (testOne+testTwo)/2
  return average
}

function studentAverage(student) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${calculationAverage(student.testOne, student.testTwo)}
    `
  }
  
  function studentApproved(student){
  if(calculationAverage(student.testOne, student.testTwo) >= 7.0){
    return `Parabéns ${student.name}! Você foi aprovado no concurso!`
  }else{
    return `Não foi dessa vez, ${student.name}! Tente Novamente! `
  }
}

for (let student of students) {
  let messageAverage = studentAverage(student) + studentApproved(student)
  alert(messageAverage)
 
}


  




