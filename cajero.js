Cuenta={
    saldo:500,
    numero:1133,
    tipo: "cuenta corriente",
    titular:"Alberto"
}

let minimo=0;

const retirarDinero= () =>{
let saldoTotal= this.Cuenta.saldo;
let montoRetiro= 800;
total= saldoTotal-montoRetiro;

if(saldoTotal<montoRetiro){
    console.log ("Excede el monto, puede retirar $" + saldoTotal);
}
else (montoRetiro <= minimo)
    console.log("Monto invalido")
};
