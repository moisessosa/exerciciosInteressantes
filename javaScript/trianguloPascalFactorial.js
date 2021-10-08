//Funcion que sirve para imprimir un numero de string repetidos, ej: (5,"*") retora "*****"

const multiplicarString = function(multiplicador, char){
   
  if(multiplicador === 1 || multiplicador ===0){
      return char;
  }else{
      return char + multiplicarString(multiplicador-1, char);
  }

}

const factorial=(n)=>{
   
    return n<0?"No valido": n==1|| n==0 ? 1 : n*factorial(n-1);

     /* es lo mismo que
     if(n<0){
        return "No Valido";
     }else if(n==1 || n==0){
        return 1
    }else{
        return n*factotial(n-1)
    }*/
}
//crea una matriz triangular vacia
const crearMatriz=(lineas)=>{
    const matriz = [];
    for(let i=0; i <=lineas-1; i++){
        matriz.push([]);
        for(let j=0; j<=i;j++){
            matriz[i].push([]);
        }
        
    }
    return matriz;
}

const crearTriangulo=(lineas,trianguloVacio=crearMatriz,f=factorial)=>{
 //las funciones necesarias son pasadas por default, haciendo que solo el numero de lineas
 //o niveles del triangulo sean necesarios    
    const trianguloPascal = trianguloVacio(lineas);
        
    for(let fila=0; fila<lineas;fila++){
        for(let col = 0; col <=fila; col++){
            trianguloPascal[fila][col]= f(fila)/(f(col)*f(fila-col));
        }
    }

return trianguloPascal;
};
const niveles= Number(prompt('Cuantos Niveles quiere en el triangulo de pascal'))//eliminar para correr en node
const miTrianguloDePascal =crearTriangulo(niveles);/**/
//console.log(miTrianguloDePascal)
let text="";
// para mostarlo en la consola
miTrianguloDePascal.forEach((linea,i, arr)=>{

    console.log(multiplicarString(arr.length-i,' ') , ...linea)
    //esto es para mostarlo en una web
    text+=`${multiplicarString(arr.length-i,' ') + [...linea]}`+'<br>'
});
//para mostarrlo en una web
//elimine esta parte para correrlo en node

document.getElementById('triangulo').innerHTML= text;  

