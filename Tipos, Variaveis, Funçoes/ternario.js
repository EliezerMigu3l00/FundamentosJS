const idadeMinima = 18; 
const idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("Cliente pode beber cerveja a vontade!!");
 } else {
    console.log("Cliente não pode beber cerveja, vai beber suco!");
}

// Operadoes ternarios
// Consiste em uma verificacao levando em consideracao a condiçao onde temos o retorno true ou false para um teste logico
//                   teste logico            true       false 
 console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");