const nomes = ["Marcos", "Julia", "Mario", "Juliana"]
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((nomes,indice)=>notas[indice]< 5)
console.log(`Reprovados: ${reprovados}`)