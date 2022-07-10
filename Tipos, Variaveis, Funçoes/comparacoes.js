// comparação implicita
// Quando fazemos a ultilizacao do comparador logico == estamos comparando apenas os dados declarados nao levando em consideracao o tipo como por exemplo:

const numero1 = 5;
const texto1 = "5";

console.log(numero1 == texto1);
// O valor retornado sera true

// Já qundo ultilizamos o comparador logico === estamos comparando nao so os dados declarados, mas tambem a comparaçao vai se estender para o tipo do dado, ou seja tipo number ou string.

const numero2 = 5;
const texto2 = "5";

console.log(numero2 === texto2);
// Ja aqui o valor sera false
// Obs: As boas praticas o comparador logico "===" vai ser ultilizado
