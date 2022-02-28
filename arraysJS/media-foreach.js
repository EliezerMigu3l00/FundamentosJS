const notas = [10, 6.5, 7, 8.5]

let somaDasNotas = 0

notas.forEach(nota => {
    somaDasNotas += nota 
})

let media = somaDasNotas/notas.length

 console.log(media)