const nomes = ['Vinicius', 'Jon', 'Maria', 'Ju']
const notas = [10,4.5,9,6]

const reprovados = nomes.filter( (aluno, indice) => notas [indice] < 5)
console.log(`reprovados: ${reprovados}`)