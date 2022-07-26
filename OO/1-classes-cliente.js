class Cliente {
    constructor (nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor 
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const eliezer = new Cliente ("Eliezer", "eliezermiguel@email.com", "405.593.695-23", 250)

eliezer.exibirSaldo()
console.log(eliezer)