//sem usar sort method
/*Escreva uma função que receba um array de números e retorne o array com seus elementos 
em ordem crescente.

OBS: Não é permitido usar nenhuma função pronta para fazer isso.

*/

function ordenarArrayDeNumeros(arrayNumbers){
    
    
    let tamanhoArray = arrayNumbers.length;
  
    for(let i=0; i < tamanhoArray; i++){
      
        for(let j=0; j < tamanhoArray; j++){
      
            if(j+1 !== tamanhoArray){
      
                if(arrayNumbers[j] > arrayNumbers[j+1]){
      
                    let temporal = arrayNumbers[j+1];
      
                    arrayNumbers[j+1] = arrayNumbers[j];
      
                    arrayNumbers[j] = temporal;

                }
        
            }  
     
        }
    }
    
    return arrayNumbers;
}
const arrayNumbers = [4, 30, 7, 5, 9, 7, 2,-1, 4, 1, 3, 2,12];
console.log(ordenarArrayDeNumeros(arrayNumbers));