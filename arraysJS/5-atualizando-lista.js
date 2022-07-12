const listaDeChamadas = ['João', 'Juliana', 'Ana', 'Caio', 'Lara']

// A funcao splice serve tanto para retirar um dado da array como tambem adiconar mais dados nela, a dierenca dela para as outras que ja vimos é que com ela voce consegue adicionar ou excluir esse dado no indice que vc quiser e para isso ela requer 3 paramentros 
// Primeiro: indice de inicio 
// Segundo: indice onde vai finalizar
// Terceiro: um novo dado que irar oculpar os lugares removidos 

listaDeChamadas.splice(1,2,`Rodrigo`)

console.log(`Lista de chamada atualizada: ${listaDeChamadas}`)