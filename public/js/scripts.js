const mostradorProductos = document.querySelector('#mostrador');

const carrito = document.querySelector('#carrito');
const agregarCarrito = document.querySelector('#agregarCarrito');

const btnbuscador = document.querySelector('#btnBuscador');
const buscador = document.querySelector('#buscador');

const categoriaDestilado = document.querySelector('#destilados');
const categoriaCerveza = document.querySelector('#cervezas');
const categoriaBebidas = document.querySelector('#bebidas');
const categoriaSnack = document.querySelector('#snacks');

const url = 'https://bsale-backend-2021.herokuapp.com/api/products';

addEventListeners();

function addEventListeners(){
    document.addEventListener('DOMContentLoaded',traerProductos);

    buscador.addEventListener('keypress',enterFiltrar);
    btnBuscador.addEventListener('click',btnFiltrar);

    categoriaDestilado.addEventListener('click',destilados);
    categoriaCerveza.addEventListener('click',cervezas);
    categoriaBebidas.addEventListener('click',bebidas);
    categoriaSnack.addEventListener('click',snacks);
}

//fetch [GEt]
function traerProductos(){
    fetch(`${url}`)
    .then(res => res.json())
    .then(data => displayProducto(data)) 
}
function traerProductosFiltrador(e){
    e.preventDefault();
    
    const textoBuscador = buscador.value;
    
    fetch(`${url}/${textoBuscador}`)
    .then(res => res.json())
    .then(data => displayProducto(data, 2)) 
}

function traerProductosPorCategoria(e,categoria,triggerEliminar){
    e.preventDefault();
    
    fetch(`${url}/category/${categoria}`)
    .then(res => res.json())
    .then(data => displayProducto(data, triggerEliminar)) 
}

//eventos
function enterFiltrar(e){
    if(e.key == 'Enter'){
        traerProductosFiltrador(e);
    }
}

function btnFiltrar(e){
    traerProductosFiltrador(e);
}

// eventos--categorias

function destilados(e){
    traerProductosPorCategoria(e,2,2);
    traerProductosPorCategoria(e,3,1);
    traerProductosPorCategoria(e,7,1);
}
function cervezas(e){
    traerProductosPorCategoria(e,6,2);
}
function bebidas(e){
    traerProductosPorCategoria(e,4,2);
    traerProductosPorCategoria(e,1,1);
}
function snacks(e){
    traerProductosPorCategoria(e,5,2);
}

//Display de productos
function displayProducto(producto, filtrado = 1){  
    if(filtrado > 1){
        eliminarHTML()
    }
    if(producto.length !== 0){
        producto.forEach(product =>{
            const divCol = document.createElement('div');
            const card = document.createElement("div");
            const cardBody = document.createElement("div");
            const cardFooter = document.createElement("div");
            
            const linkImagen = document.createElement("a");
            const imagen = document.createElement("img");
            
            const nombreProducto = document.createElement("h6");
            const precioProducto = document.createElement("h5");
            
            const linkAgregarCarrito = document.createElement("a");
            const agregarCarrito = document.createElement("img");
            
            //Se agregan clases
            divCol.classList.add('col-lg-4','col-md-6','mb-4','mt-5')
            card.classList.add('card','shadow-sm','h-100');
            
            imagen.classList.add('shadow-sm','card-img-top');
            
            cardBody.classList.add('card-body','shadow-sm');
            nombreProducto.classList.add('card-title','text-center','mt-3');
            precioProducto.classList.add('text-center')
            //Se agrega atributos
            cardFooter.classList.add('mx-auto','my-2');
            linkAgregarCarrito.setAttribute('href','#!')
            agregarCarrito.setAttribute('src','/img/outline_add_shopping_cart_black_24dp.png');
            //Control productos sin imagen
            if(product.image <= 1){
                console.log(product);
                imagen.setAttribute('src','/img/no-imagen.jpg');
            }else{
                imagen.setAttribute('src',`${product.image}`);
            }
            imagen.style.width = "14.6rem";
            imagen.style.height = "14rem";
            
            nombreProducto.textContent = `${product.name}`;
            nombreProducto.textContent = `${product.name}`;
            if(product.discount > 0){
                const descuento = parseInt(product.discount)*0.01*parseInt(product.price);
                const precioReal =  String(parseInt(product.price)-descuento);
                
                precioProducto.textContent = `$ ${precioReal} `;
            }else{
                precioProducto.textContent = `$ ${product.price}`;
            }
            
            mostradorProductos.appendChild(divCol);
            divCol.appendChild(card);
            card.appendChild(linkImagen);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);
            linkImagen.appendChild(imagen);
            cardBody.appendChild(nombreProducto)
            cardBody.appendChild(precioProducto)
            cardFooter.appendChild(linkAgregarCarrito);
            linkAgregarCarrito.appendChild(agregarCarrito);
        });
    }else{
        const mensajesError = document.createElement("p");
        mensajesError.classList.add('mt-3','text-left','col-lg-9','text-info')
        mensajesError.textContent = 'Sin resultados...';
        mostradorProductos.appendChild(mensajesError);
    }
}
    
function eliminarHTML(){
    while(mostradorProductos.firstChild){
        mostradorProductos.removeChild(mostradorProductos.firstChild);
    }
}