const notas = [10, 6.5, 7, 8.5]

let somaDasNotas = 0

// forEach do ingles "Para cada" serve como o nome ja deixa bem explicito, execulta o laço para cada um do valores declarados no parametro

notas.forEach(nota => {
    somaDasNotas += nota 
})

let media = somaDasNotas/notas.length

 console.log(media)

