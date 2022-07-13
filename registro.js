

//variables
const input = document.querySelector('.inputCorreo');
const btn =document.querySelector('.button');
const btnApi= document.querySelector(".btnApi")

const baseDatosCorreo = []

// libreria btn correo electronico

eventListeners()
function eventListeners(){

    input.addEventListener('blur', validarFormulario);
}

console.log(baseDatosCorreo)

function validarFormulario(e){

    const resultado = e.target.value.indexOf('@');

    if(resultado > 3){
        
        Swal.fire({
            title: 'Registrado!',
            text: 'En breve nos comunicaremos con usted!',
            icon: 'success',
            confirmButtonText: 'Ok'
            
        });
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'Datos sin llenar!',
            icon: 'Volver a intentar',
        })
    e.target.style.borderBottomColor ='red'
    e.target.classList.add('error');}

}

// vaciar btn 

vaciarCarrito.addEventListener('click',() =>{
        Swal.fire({
            title: 'Se vacio el carrito!',
            text: 'Lo esperamos pronto!',
            icon: 'Volver a intentar',
        })
})



