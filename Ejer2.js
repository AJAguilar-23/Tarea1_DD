/*
2. ⛓ Promesas encadenadas
Escribe una función obtenerUsuario(id) 
que simule una llamada asíncrona con setTimeout y
retorne una promesa que se resuelve con un objeto { id, nombre }. 

Encadena dos llamadas
para obtener los nombres de dos usuarios diferentes y mostrar el mensaje:
"Usuarios cargados: Juan y María"
*/
//*Respuesta

const usuarios = {
    1 : 'Juan',
    2 : 'Maria'
}
function obtenerUsuario(id){
    
    return new Promise((res, rej)=>{ 
        setTimeout(()=>{ 
            const exito = true
            if(exito)
                res({ id , nombre : usuarios[id]}) //
            else
                rej('Algo salio mal')
        }, 3000)
    })
}

obtenerUsuario(1).then(valor1 => {   
    obtenerUsuario(2).then(valor2=>{
        console.log(`Usuarios cargados: ${valor1.nombre} y ${valor2.nombre}`)
    })
})