/*4. 🎭 Copiar y modificar objetos
Crea una función que reciba un objeto persona y retorne una copia modificada con un nuevo
nombre y la edad aumentada en 1 año, sin modificar el objeto original.

// Resultado esperado: { nombre: 'Carlos', edad: 31 }*/

//* Solucion
function modificarPersona(persona, nombre){

    personaCopia = {...persona}
    personaCopia["nombre"] = nombre
    personaCopia.edad = personaCopia.edad+1
    return personaCopia
}

const persona = {
    nombre: 'Luis', edad: 30
}

const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona);
//console.log(persona);