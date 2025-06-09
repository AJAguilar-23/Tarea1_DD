/*6. 🧠 Combinar dos listas sin repetir elementos
Crea una función que reciba dos arreglos y devuelva un nuevo arreglo que contenga todos los
elementos sin repetir.


// Resultado esperado: ['manzana', 'pera', 'banana', 'uva', 'sandía']*/

//*Solucion
const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

function combinarListasSinRepetir(lista1, lista2){
    const listaComb = [...lista1]
    
    for(i = 0; i < lista2.length; i++){
        let contRepetidos = 0
        
        for(j = 0; j < lista1.length; j++){
            if(lista2[i] === lista1[j]){
                contRepetidos++
            }
        }
        if(contRepetidos == 0){
            listaComb.push(lista2[i])
        }
    }
    return listaComb
}


const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);