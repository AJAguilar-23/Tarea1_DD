/*3. 🧮 Calcular promedio ponderado
Dado un arreglo de objetos con valores y pesos, calcula el promedio ponderado.
const notas = [
{ valor: 90, peso: 0.5 },
{ valor: 80, peso: 0.3 },
{ valor: 70, peso: 0.2 }
];
const resultado = promedioPonderado(notas);
console.log(resultado);
// Resultado esperado: 83
*/

const notas = [
{ valor: 90, peso: 0.5 },
{ valor: 80, peso: 0.3 },
{ valor: 70, peso: 0.2 }
];
//*Solucion

function promedioPonderado(){
    let sumatoria =0
    for(let i=0; i<notas.length ; i++){
        sumatoria = sumatoria + (notas[i].valor * notas[i].peso)
    }
    return sumatoria
}
const resultado = promedioPonderado(notas);
console.log(resultado);