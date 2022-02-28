const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renam', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice(0, alunos.length/2)
const sala2 = alunos.slice(alunos.length/2)

console.log(`Todos os alunos da sala 1 são: ${sala1}`)
console.log(`Todos os alunos da sala  são: ${sala2}`)