const alunos = ['João', 'Ana', 'Marcelo', 'Junior']
const medias = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Marcelo"))
console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("João"))
console.log(exibeNomeNota("Junior"))

// .includes é um metodo usado para verificar se algum determinado tipo de dado esta incluido na array que vc esta varrendo.
// .indexOf retorna o indice que determidado dado dentro de uma array esta.