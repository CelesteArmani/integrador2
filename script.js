
const valorTicket= 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

const cantidad = document.getElementById ('cantidad');

const categoria= document.getElementById
('categoria');

const botonResumen = document.getElementById ('resumen');

const botonBorrar = document.getElementById ('borrar');

const total = document.getElementById ('total');

const nombre = document.getElementById ('nombre');

const apellido = document.getElementById ('apellido');

const correo = document.getElementById ('correo');


function totalPagar(){

    let totalValor = (cantidad.value) * valorTicket;
    if (categoria.value == 1){
        totalValor = totalValor - (totalValor*descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor*descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor*descuentoJunior);
    }

    else{
        totalValor = totalValor
    }

    total.innerHTML = `Total a pagar: $${totalValor}`;
}



botonResumen.addEventListener('click',totalPagar);

botonBorrar.addEventListener('click', ()=>{
    total.innerHTML = `Total a pagar: `
});
    



