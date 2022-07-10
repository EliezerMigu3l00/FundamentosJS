// A funçao tem dois momentos.
// Prieiro momento é a declaracao e ela é composta pela paralavra reservada "function"  seguida pelo nome que sera designado para essa funcao, logo apos entre paranteses "()" podemos declarar um ou mais parametros e entre chaver "{}" o bloco de codigo que essa funcao executara 

function imprimirTexto(texto){
    console.log(texto)
}

// Logo apos a declaracao vem a segunda parte que consiste em chamar a funcao passando ou nao parametros.

imprimirTexto("Hello word!")

// Essa chamada pode ser feita mais de uma vez podendo tambem ultilizar parametros dierentes para a mesma funcao

imprimirTexto("Estou usando a mesma função 2 vezes com dados diferentes")

// Caso seja declarada uma funcao e voce espera que um resultado seja retornado ira ser necessario o uso do return que irar permitir a execucao da sua funcao e que o dado seja retornado para voce e assim sendo ultilizado ou ate msm visualizado
//Obs: return deve ser a ultima linha dentro de uma funcao, caso contrario tudo que vim apos nao sera retornado.
// Ex:

function soma(){
    return 2 + 2;
}

console.log(soma())

// Tambem podemos ultilizar funcoes para chamar outras funcoes.

imprimirTexto(soma())

