// Expressões de funções sao realmente necessarias?? Descobriremos nas proximsas cenas dessa nossa historia com o JavaScript 

//Expressao de funcao ou funcao anonima sempre tem que ser declarada antes de ser chamada no seu codigo pois diferente de uma declaracao comum de funcao o JavaScript nao vai ler essa funcao primeiro e depois executar 

const soma = function(num1, num2) {return num1 * num2} 

console.log(soma(45, 2))