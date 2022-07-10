 function apresentar(nome){
     return `Meu nome é ${nome}`;
 }


// Arrow fuction é declarada sempre em uma linha apenas de codigo assim facilitando a forma de escrever o codigo

//                     paramrtro     declaracao
 const apresentarArrow = nome => `Meu nome é ${nome}`;
 
 //Obs: caso a receba mais de um parametro eles devem ser declarados dentro de parenteses
 const soma = (num1, num2) => num1 + num2;

 // Caso a intrucao for grande será necessario as {}

 const somaNumerosPequenos = (num1, num2) => {
     if(num1 > 10|| num2 > 10) {
         return "Somente numeros de 1 a 9";
     } else {
         return num1 + num2; 
     }
 }

 console.log(somaNumerosPequenos(1,8))