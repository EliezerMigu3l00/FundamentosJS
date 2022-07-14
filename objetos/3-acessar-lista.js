const cliente = {
    nome: "Eliezer",
    idade: 21,
    email: "eliezermiguel@email.com", 
    cpf: "25634865120",
}

const chaves = ["nome", "idade", "email", "cpf"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))
