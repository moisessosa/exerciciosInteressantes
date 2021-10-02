/*Enunciado
O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais. 
Ele é representado por linhas e colunas iniciando a contagem a partir do zero. 
Os números nos lados do triângulo são sempre 1, e cada número do interior do triângulo é a soma 
dos dois números acima dele.

Implemente uma função que imprime o Triângulo de Pascal, dado um número de linhas.

Comente cada linha do seu código explicando a implementação.
*/
const multiplicarString = function(multiplicador, char){//REPITE UN STRING CERTO NUMERO DE VEZES
    //esta funcion a usei para o excercicio 12 o da arvore
  if(multiplicador === 1 || multiplicador ===0){// adicione === 0 para poder usar no triangulo do pascal
      return char;
  }else{
      return char + multiplicarString(multiplicador-1, char);
  }

}
//trigangulo de pascal
console.log('trigangulo de pascal');


const gerarTrianguloDePascal = function(linhas){// cria os dados do triangulo
  triangulo= {// OS três primeiros niveis são gerados manualmente
      l1:[1],
      l2:[1,1],
      l3:[1,2,1]
  };
  for(let i=4; i<= linhas; i++){// um loop for para gerar da linha 4 en diante
      let j =i-1;
      let k = 0;// valor dos indices da linha nova
      triangulo['l'+i] =[1];//primer valor sempre va ser 1
      while(k < j){//crea uma propiedade(linha)nova e adiccionamos el novo valor
                  // que é o resultado de sumar os numeros da linha superior de dois em dois
          triangulo['l'+i].push(triangulo['l'+(i-1)][k] + triangulo['l'+(i-1)][k+1]);
          k++
      }
      triangulo['l'+i][i-1] =1;//ultimo valor sempre va ser 1
  }
  return triangulo;

}
//criamos e mostramos o triangulo
function imprimirTriangulo(linhas){
  const valoresTrianguloDePascal = gerarTrianguloDePascal(linhas);// guardamos o triangulo em una variavel
  for(let key in valoresTrianguloDePascal){// isto imprime o triangulo em jeito de arvore
  console.log(multiplicarString(linhas,' ') , ...valoresTrianguloDePascal[key]); //super util destruturação
  //Eu imprimo alguns espaços para dar a aparência de uma pirâmide, mas o padrão do navegador atrapalha
  
  linhas-=1;
  }
}
const linhas=10; // numero de linhas que deseja no triangulo, podria não usar assim e pasar direito um numero na funcion mas gosto de este jeito.
imprimirTriangulo(linhas);  