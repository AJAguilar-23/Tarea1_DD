/*8. 🎯 Filtrar objetos por múltiples condiciones
Crea una función que reciba una lista de productos y devuelva solo los productos que sean de
cierta categoría y que tengan stock disponible.*/

// Resultado esperado: [{ nombre: 'Camisa', categoria: 'ropa', stock: 10}]
//*Solucion

const productos = [
{ nombre: 'Camisa', categoria: 'ropa', stock: 10 },
{ nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
{ nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

function filtrarDisponibles(productos, categoria){
    return productos.filter(producto => 
    producto.categoria === categoria && producto.stock > 0
  );

}

const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);