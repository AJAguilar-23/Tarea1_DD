/*
1.  Agrupar elementos por propiedad
Dado un arreglo de objetos, agrúpelos por el valor de una propiedad específica.*/
const datos = [
{ categoria: 'fruta', nombre: 'manzana' },
{ categoria: 'verdura', nombre: 'zanahoria' },
{ categoria: 'fruta', nombre: 'banana' },
{ categoria: 'verdura', nombre: 'lechuga' }
];

//* Solucion 
function agruparPorPropiedad(datos,cat){
    let mapita ={}
    let i=0
    
    //ciclo
    while(i<datos.length){

        mapita[datos[i][cat]] ??= [];// crea un arreglo si no existe
    
        //console.log(i, datos[i], mapita[datos[i][cat]])

        mapita[datos[i][cat]].push(datos[i])
        i++
    }
    //?retornamos un mapa con arreglos de las categorias
    return mapita
}

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);



