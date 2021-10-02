
const multiplicarString = function(multiplicador, char){//REPITE UN STRING CERTO NUMERO DE VEZES
    //esta funcion a usei para o excercicio 12 o da arvore
  if(multiplicador === 1 || multiplicador ===0){// adicione === 0 para poder usar no triangulo do pascal
      return char;
  }else{
      return char + multiplicarString(multiplicador-1, char);
  }

}