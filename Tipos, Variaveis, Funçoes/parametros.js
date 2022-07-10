// Variaveis da função soma
let num1 = 2;
let num2 = 3;

// Variaveis da função nomeIdade
let nome = "Eliezer";
let idade = 21;

// Variaveis do meu teste
let idadeCliente =  32
let nomeCliente = "José"

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 450))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade} de idade`;
}

console.log(nomeIdade("Eliezer", 21))

// O uso do = e a declaracao de um numero apos ele serve para evitar erros em seu codigo levando em consideração que existe a possibilidade de nao ser declarado os parametros necessarios para que essa funcao seja execultada corretamente

function mutiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}


console.log(mutiplica(soma(16, 45), soma(19, 8)))

// Função de teste

function cliente(nome, idade){
    return `Óla, ${nomeCliente} seja bem vindo ao nosso sistema, vi que voce tem ${idadeCliente} anos e é um prazer atende-lo`
}

console.log(cliente(nomeCliente, idadeCliente))
