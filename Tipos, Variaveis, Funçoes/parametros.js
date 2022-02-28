// Variaveis da função soma
let num1 = 2;
let num2 = 3;

// Variaveis da função nomeIdade
let nome = "Eliezer";
let idade = 21;

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(num1, num2))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade} de idade`;
}

console.log(nomeIdade(nome, idade))

function mutiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}


console.log(mutiplica(soma(16, 45), soma(19, 8)))

