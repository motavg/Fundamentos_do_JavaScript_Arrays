const alunos = ['Vinicius', 'Maria', 'Rodrigo', 'Ju']
                             //3
const mediaDosAlunos = [10,7,9,6]

//includes -> true or false
//indexOf -> 3 com nome Ju

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                 //[0][3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ju"))