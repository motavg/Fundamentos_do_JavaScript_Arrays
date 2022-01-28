const salaJS = [10,7,9,6,5,6.5,4] 
const salaJava = [10,5,7,9,5] 
const salaPython = [10,3,5,9,6] 

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum,0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)