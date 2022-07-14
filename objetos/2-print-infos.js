const cliente = {
    nome: "Eliezer",
    idade: 21,
    email: "eliezermiguel@email.com", 
    cpf: "256.348.651-20",
}

console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos, e seu email é ${cliente.email}`)
// O metodo substring ele serve para restringir oq vc quer mostrar de sua array de caracteres ou string 
console.log(cliente.cpf.substring(0, 3))


const aluno = {
    nome: "Joao Marcelo",
    matricula: "21376594",
    idade: 15, 
    turma: "1 ano C",
}

//console.log(aluno.matricula)