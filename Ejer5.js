/*5. 🔁 Eliminar duplicados por propiedad
Escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una
propiedad específica.

// Resultado esperado: [{ id: 1, nombre: 'A' }, { id: 2, nombre: 'B' }]*/
//* Solucion

const elementos = [
{ id: 1, nombre: 'A' },
{ id: 2, nombre: 'B' },
{ id: 1, nombre: 'A' }
];
function eliminarDuplicados(elementos, propiedad){
    for(i=0; i < elementos.length; i++){
        for(j=i+1 ; j < elementos.length; j++){

            //console.log(elementos[j].nombre)
            if(elementos[i][propiedad] === elementos[j][propiedad]){

                //console.log("elimina" ,elementos[j])
                elementos.splice(j,1) 
                j--
            }
        }
    }
    return elementos
}



const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);