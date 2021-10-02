//contar el numero de palabra en una frase
const normalize = (cadena) => cadena.toLowerCase().replace(/[,.!?;:]/g,'');
//ou .replace(/[,.!?;:]/g,'')

let text ="Hola que; tal,    ??? bienvenidos a e7strellas. hola Si les esta gustando este video, suscribete  y dale like y activa la campanita para ver los nuevos videos que vaya subiendo!";
text = normalize(text);
function wordRepitations(cadena){
    let dict ={};
    separatedWords = cadena.split(" ");
    console.log(separatedWords);
    for(let word of separatedWords){
        if(word in dict){
            ++dict[word];
        }else{
            dict[word] = 1;
        }
    }
    return dict;
}
console.log(wordRepitations(text));
//es el fin, é o fim