const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicios', 'Renan', 'Renata', 'Daisy', 'Camilo']

// A funcao slice neessita receber alguns parametros para que seja execultada de maneira correta em nossos codigos
// EX:            comeco da array / ate onde ela tem que ir  
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2) 

console.log(`Todos os alunos da sala 1 ${sala1}`)
console.log(`todos os alunos da sala 2 ${sala2}`)

