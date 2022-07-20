const cliente = {
    nome: "Eliezer",
    idade: 21,
    email: "eliezermiguel@email.com", 
    cpf: "722.348.651-02",
    fone: ["+55 87 99678-2365", "+55 87 99943-7626", "+55 87 99645-3822"],
    dependentes: [
        {
            nome:"Sara",
            parentesco: "Filha",
            idade: 11,
            dataDeNascimento: "01/10/2010"},
        
        {
            nome:"Sara",
            parentesco: "Filha",
            idade: 11,
            dataDeNascimento: "01/10/2010",
        }
    ],
    saldo:1000,
    depositar:function(valor){
        this.saldo += valor
    }
}

cliente.depositar(156.98)

let relatorio = "";

// Metodo for in é um metodo do JavaScript para objetos.

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function"){
        continue
    } else {
        relatorio += `2
         ${info} : ${cliente[info]}`
    }
}

console.log(relatorio)