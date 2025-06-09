/*7. 📦 Contar cuántas veces aparece cada elemento
Crea una función que reciba un arreglo de palabras y retorne un objeto donde las claves sean las
palabras y los valores la cantidad de veces que aparecen.

// Resultado esperado: { hola: 3, adiós: 1, gracias: 2 }*/

//* Solucion

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola',
'gracias'];

function contarPalabras(palabras){
    const conteo = {}
    
    for (const palabra of palabras) {
        if (conteo[palabra]) {
            conteo[palabra] += 1; // si ya existe suma 1
        } else {
            conteo[palabra] = 1; // si no existe, crea con 1
        }
    }
    return conteo;
}



const resultado = contarPalabras(palabras);
console.log(resultado);