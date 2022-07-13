//variables

const main = document.querySelector("body");
const carrito = document.querySelector("#carrito");
const btnCard = document.querySelectorAll(".btn");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const imgCarrito =document.querySelector('#img-carrito')


//carrito array

    let carritoCompras =[];

// eventListener para escuchar cuando el usuario haga click

    main.addEventListener("click", (e) =>{

//preguntando si el usuario esta haciendo click en el elemento con la clase "btn"

        if(e.target.classList.contains("btn")){

        const productosSeleccionados = e.target.parentElement.parentElement.parentElement;

        leerDatos(productosSeleccionados);

    }
    
});

// local storage y uso operador or

document.addEventListener('DOMContentLoaded', () => {
    carritoCompras = JSON.parse( localStorage.getItem('carrito') ) || []  ;
    // console.log(articulosCarrito);
    carritoHtml();
});


// leer contenido html al que se le dio click y extraer info

function leerDatos(productosSeleccionados){

        //creamos un objeto con la info de cursos

        const nuestrosProductos = {
            imagen: productosSeleccionados.querySelector('img').src,
            nombre:productosSeleccionados.querySelector('.titulo-cards').textContent,
            precio:productosSeleccionados.querySelector('.precio span').textContent,
            id: productosSeleccionados.querySelector(".btn").getAttribute("data-id"),
            cantidad: 1
    } 
        //revisar si un elemento ya existe en el carrito con .some para aumentar cantidad

        const existe = carritoCompras.some(productosSeleccionados => productosSeleccionados.id === nuestrosProductos.id)
        
                if(existe){

                //acutalizamos cantidad del producto

                    const productos = carritoCompras.map( productosSeleccionados => {

                        if(productosSeleccionados.id === nuestrosProductos.id){

                            productosSeleccionados.cantidad++;
                            return productosSeleccionados; //este retorna el objeto actualizado

                        }else{
                            return productosSeleccionados; //este retorna los objetos no duplicados
                        }
                    })
                        carritoCompras = [...productos];
                        }else{
                            //agregando elementos al carrito con el sprite operator...
                            carritoCompras = [...carritoCompras, nuestrosProductos];
                        }
                        carritoHtml();
}

// FUNCION eliminando 

function eliminar(e){

    if(e.target.classList.contains('borrar-curso')){

        const productosId = e.target.getAttribute('data-id');

        //eliminando del arreglo con filter

        carritoCompras = carritoCompras.filter(p => p.id !== productosId);

    }
    carritoHtml();
}

        //vaciar todo el carrito 
        vaciarCarrito.addEventListener('click',() => {

        carritoCompras = [];
        limpiarHtml();

});


    // Mostrar carritos de compra en el HTML
    function carritoHtml(){

limpiarHtml()

    // accedemos a los articulos del carrito de compras a traves de un forEach

    carritoCompras.forEach(producto=>{

        const acumuladorr = document.createElement('tr');

            acumuladorr.innerHTML= `<td><img src="${producto.imagen}" width=80></td>
                                            <td>${producto.nombre} </td>
                                            <td>${producto.precio} </td>
                                            <td>${producto.cantidad} </td>
                                            <td>
                                            <a href="#" class="borrar-curso" data-id="${producto.id}">X</a>
                                            </td>`;

    //agregando los articulos al tbody
    contenedorCarrito.appendChild(acumuladorr);})

    // afregar el carrito de compras al storage

    sincronizarStorage();
}   
    function sincronizarStorage(){

        localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}

        //eliminar productos del tbody PARA QUE NO SE multiplique
        
    function limpiarHtml(){

            while(contenedorCarrito.firstChild){
                contenedorCarrito.removeChild(contenedorCarrito.firstChild);}
            }

carrito.addEventListener('click',eliminar);


// sliders
