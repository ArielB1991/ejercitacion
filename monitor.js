const producto= {
    nombre: "Monitor 20",
    precio: 30,
    disponible: true,
};

producto.imagen= "image.jpg";

delete producto.nombre;

console.log(producto);