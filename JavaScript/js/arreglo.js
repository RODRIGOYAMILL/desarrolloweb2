/*
let carrito=["leche",1,
"carne",2,
"papa",3,
"fideos",1];

console.log("Item: "+carrito[0]);
console.log("Cantidad: "+carrito[1]);
console.log("Item: "+carrito[2]);
console.log("Cantidad: "+carrito[3]);
console.log("Item: "+carrito[4]);
console.log("Cantidad: "+carrito[5]);
console.log("Item: "+carrito[6]);
console.log("Cantidad: "+carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);
//COMO SE ADICIONA UN NUEVO ITEM Y CANTIDAD
carrito.push("manzana", 4);
console.log(carrito);
*/
/*
let item = { nombre: "Leche", cantidad: 1 };
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);

let carrito = [
  { nombre: 'Leche', cantidad: 1 },
  { nombre: 'Carne', cantidad: 2 },
  { nombre: 'Fideo', cantidad: 1 },
  { nombre: 'Papa', cantidad: 3 }
];


console.log("IMPRESION COMPLETA");
console.log(carrito)

let nuevoItem = { nombre: 'Manzanas', cantidad: 4 };
carrito.push(nuevoItem);

console.log("IMPRESION COMPLETA (ACTUALIZADA)");
console.log(carrito)*/

//adicionar item del precio y el total  
let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'Carne',cantidad:2,precio:15},
             {nombre: 'fideo',cantidad:1,precio:10},
             {nombre: 'papa',cantidad:3,precio:6}];

             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               console.log("------------------------");
             });

item={nombre: 'pilfrut',cantidad:5,precio:1.5};
carrito.push(item);
const precioTotal = item.cantidad * item.precio;
             
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);
console.log("------------------------");
console.log(carrito);


