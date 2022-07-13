const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota >= 10 ? nota : ++nota)

console.log(notasAtualizadas)

// Obs: ideal para quando necessitamos adicionar valores a nossa array