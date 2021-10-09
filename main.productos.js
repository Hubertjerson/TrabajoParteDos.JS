
// LLAMANDO PRODUCTO
const contenedorProductos = document.getElementById('contenedorProductos')
const contenedorCarrito = document.getElementById('carritoContenedor')
// LLAMANDO CARRITO
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []

// MOSTRANDO PRODUCTOS EN HTML
const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Categoria: ${producto.categoria}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `

        contenedorProductos.appendChild(div)

    })

}

mostrarProductos(stockProductos)

// AGRANDO PRODUCTOS AL CARRITO :3

const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find((prod) => prod.id === itemId)

        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }


    console.log(carrito)
    actualizarCarrito()

}


// ACTUALIZANDO EL CARRITO AL AGREGAR PRODUCTOS O ELIMINAR

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)

}



// ELIMINAR PRODUCTO

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }

    actualizarCarrito()
}

// BUSQUEDA POR CATEGORIA

const selectFiltro = document.getElementById('categoria')



const filtrar = () => {
    let valorFiltroTalles = selectFiltro.value

    let arrayFiltrado = []

    if (valorFiltroTalles == 'all') {
        arrayFiltrado = stockProductos
    } else {
        arrayFiltrado = stockProductos.filter(el => el.categoria == selectFiltro.value)
    }
    mostrarProductos(arrayFiltrado)
}

selectFiltro.addEventListener('change', () => {
    filtrar()
})

// PAGINACION DE PRODUCTOS AUN SEGUIMOS TRABAJANDO


