const nomes = ['vini', 'isa', 'maria', 'ana', 'daniel',
'caio', 'rodrigo', 'gustavo', 'renato', 'vivian', 'carla', 'mota']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)

console.log(sala1.length)
console.log(sala2.length)