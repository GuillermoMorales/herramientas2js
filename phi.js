var activities = [
    {
        acciones : ["Work","Play","Run"],
        accidente : true
    },
    {   acciones : ["Jump","Scream","Play"],
        accidente : true
    },
    {   acciones : ["Cry","Scream","Run"],
        accidente : true
    },
    {   acciones : ["Smash","Pull","Run"],
        accidente : false
    }    
];
function coeficientePhi(palabra,collectionObj){
    var miArray = [0,0,0,0];
    /**
     * Asignando valores dependiendo la precencia de la palabra dada
     * con el valor booleano de la segunda propiedad de los objetos
     */
    for (let i = 0; i<collectionObj.length; i++){
        
        if(collectionObj[i].acciones.includes(palabra)){

            if(collectionObj[i].accidente)  miArray[0] += 1;
            else miArray[1]+= 1;
        }
        else{
            if(collectionObj[i].accidente) miArray[2]+=1;
            else miArray[3]+= 1;
        }
    }
    
    return miArray;
}

/**
 * Calculando con los valores obtenidos en el arreglo
 * */  
let arregloFinal = coeficientePhi("Pull",activities); 
// console.log(arregloFinal);
/*let resultado = Math.sqrt(

    (Math.pow((arregloFinal[0] * arregloFinal[3]) - (arregloFinal[1] * arregloFinal[2]),2))
    /(   (arregloFinal[1] + arregloFinal[0])*(arregloFinal[2] + arregloFinal[3])  )
);*/

let resultado = ((arregloFinal[0] * arregloFinal[3]) - (arregloFinal[1] * arregloFinal[2]) )
/
(Math.sqrt((arregloFinal[0] + arregloFinal[2]) (arregloFinal[1] + arregloFinal[3]) * (arregloFinal[0]+ arregloFinal[1] ) (arregloFinal[2] + arregloFinal[3])) );
console.log(resultado);