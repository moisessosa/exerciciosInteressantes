//Escreva uma função que receba 2 arrays e retorne a quantidade de 
//elementos em comum entre os dois.
//devuelve un objeto con los datos/ retorna um objeto com os dados
const joinArray=(a, b)=>{// função simples para juntar array, eu sei que existe outro jeito
    return [...a,...b];//mas eu queria separar todo o código em funções reutilizáveis
                      // ​​que são o mais genéricas possível
}
const elementosComum=(dic)=>{//conta elementos repetidos ou comuns
    let repetidos={};          // e retorna um dicionario(objeto)
    for(let key in dic){
        if(dic[key]>1) repetidos[key]=dic[key];
    }
    return repetidos;

}
const contarElementos = (arrA,arrB)=>{
    const arr = joinArray(arrA,arrB);//vamos concatenar para ficar mais facil.
    let dicionario={};//aqui vamos guardar el conteo de todos os elementos
    for(let x of arr){
        if(x in dicionario){
            dicionario[x]++;
        }else{
            dicionario[x]=1;
        }
    }
    
    return dicionario;
}

const arrNumber1=[4,5,7,3,9,10,4];
const arrNumber2= [5,10,1,2,7,7,10];
const arrayStr1=['a', 'n','b','casa'];
const arrayStr2=['mama','casa', '8','n','n']

const cantidadeElemenetos =elementosComum(contarElementos(arrNumber1,arrNumber2));
const cantidadeElemenetosString =elementosComum(contarElementos(arrayStr1,arrayStr2));

console.log(`Os Elementos dos Array [${arrNumber1}] e [${arrNumber2}] em comun e sua quantidade de repetições são:'\n `,cantidadeElemenetos);
console.log(`Os Elementos dos Array [${arrayStr1}] e [${arrayStr2}] em comun e sua quantidade de repetições são:'\n `, cantidadeElemenetosString);
