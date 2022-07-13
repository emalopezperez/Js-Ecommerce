
// Variables
const btnEnviar= document.querySelector('#enviar');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const telefono= document.querySelector('#telefono');
const mensajeError = document.querySelector('.mensajeError');
const formularioEnviar = document.querySelector('#enviar-mail');

// enventListeners

eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);

    nombre.addEventListener('blur',validarFormulario);
    correo.addEventListener('blur',validarFormulario);
    telefono.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);


}

// Funciones

function iniciarApp(){

    btnEnviar.disabled =true;
    btnEnviar.classList.add('error');

}

// Validacion de formulario

function validarFormulario(e){

    if(e.target.value.length > 0){

        e.target.style.borderBottomColor ='green';
        btnEnviar.classList.remove('error');
        
        
    }else{
        e.target.style.borderBottomColor = '#F08080'

        mostrarMensajeError();
    }

    //validar email

    if(e.target.type ==='email'){

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(re.test(e.target.value)){

            e.target.style.borderBottomColor ='green';
            btnEnviar.classList.remove('error');
            
        }else{
            e.target.style.borderBottomColor ='#F08080';
            mostrarMensajeError();
        }
    }

    if(correo.value !== '' && mensaje.value !== '' && nombre.value !== "" && telefono.value !== ""){

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('error');
        
    
    }else{

        btnEnviar.disabled = true;
        btnEnviar.classList.add('error');
        btnEnviar.addEventListener('click',enviarEmail);
    }
}

// Funcion mensaje error

function mostrarMensajeError(){

    Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios!',
        icon: 'success',
    });

}


//enviar email

function enviarEmail(){

    Swal.fire({
        title: 'Registrado!',
        text: 'En breve nos comunicaremos con usted!',
        icon: 'success',
        confirmButtonText: 'Ok'
        
    });

}
