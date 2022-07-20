const cliente = {
    nome: "Eliezer",
    idade: 21,
    email: "eliezermiguel@email.com", 
    cpf: "722.348.651-02",
    fone: ["+55 87 99678-2365", "+55 87 99943-7626", "+55 87 99645-3822"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "Filha",
    idade: 12,
    dataDeNascimento: "01/10/2010"
}

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)