/*10. 🔍 Verificar si todos los elementos cumplen una condición
Crea una función que reciba una lista de edades y verifique si todos los elementos son mayores de
edad (18 años o más).*/

// Resultado esperado: false
//*Solucion


const edades = [19, 25, 32, 17];

function verificarMayoresDeEdad(edades) {
  return edades.every(edad => edad >= 18);
}

const resultado = verificarMayoresDeEdad(edades);
console.log(resultado);