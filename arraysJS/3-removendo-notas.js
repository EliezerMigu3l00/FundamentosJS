const notas = [10, 7, 8, 5, 10]

notas.pop()
// Obs: Esse metodo ele permite que possamos excluir um dado de nossa array, mas é importante deixar claro que assim como no exemplo da aula anterior (.push()) esse metodo por regra sempre vai tirar o ultimo elemento da array, ou seja vai excluir sempre o ultimo indice  

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(media)
