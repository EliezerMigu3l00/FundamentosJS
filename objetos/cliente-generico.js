function cliente(nome, cpf, email, saldo){
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

const eliezer = new cliente ("Eliezer", "725.678.346.05", "eliezermiguel@email.com", 1367.89)

console.log(eliezer)