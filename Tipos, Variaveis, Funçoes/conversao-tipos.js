// Conversao implicita

const num = 456;
const tex = "456"

console.log(num == tex)

// Conversao explicita
// Consiste em fazer a conversao dos tipos antes de serem tratado ou usados, e para isso temos a forma de converter number em strings e tbm ao contrario. 
// Number() => trasnforma a string em number
// String() => transforma numbers em strings Obs: Caso tente converter uma string que contenha letras junto aos numeros ou que contenha apenas letras essa conversao vai te retornar um NaN (Not a Number)

console.log(num + Number(tex)) 
