const persona={
    nombre:"Pedro",
    edad: 22,
    direccion:"Real 123",
    contacto: {
        tel: 113344,
        email: "addaa@gmail.com"
    }
    
};
nombre=this.persona.nombre;
edad= this.persona.edad;
function hablar(){
console.log("Hola, soy "+ this.nombre + "y tengo "+ this.edad+ " años")
};
