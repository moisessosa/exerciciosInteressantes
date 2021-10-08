//Mi forma de generar los resultados
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

   //Otra forma super compacta
   function trianguloPascal(n) {
    resultado=[[1], [1, 1]];
    for (let l=3; l<=n; l++) {
        resultado.push(
            [...Array(l)].map((el, i, a) =>
                i==0 || i==a.length-1 ? 1 : resultado[l-2][i-1]+resultado[l-2][i]
            )
        );
    }
    return resultado;
}