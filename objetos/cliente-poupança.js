function cliente(nome, cpf, email, saldo){
    this.nome = nome 
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

function ClientePoupanca (nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup 
} 

const eli = new ClientePoupanca ("Eli", "456.765.873.02", "elinaoesdras@gmail.com", 100, 1367.45)

console.log(eli)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

eli.depositarPoup(1345.65)

console.log(eli)