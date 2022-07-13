const notas = [10, 6.5, 7, 8.5]

let somaDasNotas = 0

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(`A média do aluno é ${media}`)