const notas = [10, 6]

notas.push(7)
notas.push(8)
// Obs: A propiedade .push serve para adicionar um valor a sua array, é importante deixar claro que esse valor sempre sera adicionado no final da sua array.

let medias = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(medias);