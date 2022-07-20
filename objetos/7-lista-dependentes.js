const cliente = {
    nome: "Eliezer",
    idade: 21,
    email: "eliezermiguel@email.com", 
    cpf: "722.348.651-02",
    fone: ["+55 87 99678-2365", "+55 87 99943-7626", "+55 87 99645-3822"]
}
// O objeto permite que faça a ultilizacao de estruturas de dados dentro dele como a array onde dentro do objeto voce pode usar toda a funcionalidade de uma array dentro do objeto
cliente.dependentes = [{
    nome:"Sara",
    parentesco: "Filha",
    idade: 11,
    dataDeNascimento: "01/10/2010"
}]

cliente.dependentes.nome = "Sara Silva"

cliente.dependentes.push({
    nome: "Bernardo",
    parentesco: "Filho",
    idade: 8, 
    dataDeNascimento: "12/07/2013"
})

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataDeNascimento === "12/07/2013")

//console.log(cliente)
console.log(`Lista de dependentes que irão receber presentes de dias das criaças do cliente ${cliente.nome}: ${filhoMaisNovo[0].nome}`)
