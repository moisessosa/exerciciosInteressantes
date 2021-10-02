//dibujar un arbol o triangulo de asteriscos
//Escreva uma função que recebe um inteiro positivo não nulo n < 20 e 
//imprime um triângulo isósceles formado apenas por símbolos de asterisco (“*" ) e 
//de espaço (“ ”) como a seguir (para n = 6):

const multiplicarString = function(multiplicador, char){//REPITE UN STRING CERTO NUMERO DE VEZES
    //esta funcion a usei para o excercicio 12 o da arvore
  if(multiplicador === 1 || multiplicador ===0){// adicione === 0 para poder usar no triangulo do pascal
      return char;
  }else{
      return char + multiplicarString(multiplicador-1, char);
  }

}

const arvore =(num)=>{
  const strPorNivel= 2*num-1;
  
  if (strPorNivel===1) console.log(" *");
  const mitad = Math.trunc(strPorNivel/2);
  let asterisco=1;
  for(let i = 1; i <num; i++ ){
      if( i ==1){
          console.log(multiplicarString(mitad,' '),multiplicarString(asterisco ,'*'));
      }
      asterisco+=2
      if((mitad-i)!==0){
          console.log(multiplicarString(mitad-i,' '),multiplicarString(asterisco ,'*'))
      }else{
          
         console.log('',multiplicarString(asterisco,'*'));
      }
  }
}
const num =6;//numero de niveis da arvore desejados

typeof num ==='number' && num >0 && num <20 ? arvore(num) : console.log('Valores não validos');
