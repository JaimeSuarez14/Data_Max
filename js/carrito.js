import { productos } from '../data.js';

// Elementos del DOM
const tbody = document.querySelector('tbody');

const totalCompra = document.querySelector('.totalCompra');

// Función para formatear precio con separador de miles
function formatearPrecio(precio) {
  return precio.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Función para obtener el carrito desde localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agrupar productos y contar cantidades
function agruparCarrito(carrito) {
    const conteo = {};
    carrito.forEach(id => {
        conteo[id] = (conteo[id] || 0) + 1;
    });
    return conteo;
}

// Renderizar el carrito en la tabla
function renderizarCarrito() {
    const carrito = obtenerCarrito();
    const conteo = agruparCarrito(carrito);
    let total = 0;
    tbody.innerHTML = '';

    Object.entries(conteo).forEach(([id, cantidad]) => {
        const producto = productos.find(p => p.id === id);
        if (!producto) return;
        const importe = producto.precio * cantidad;
        total += importe;
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50px" height="60px" /></td>
      <td>${producto.nombre}</td>
      <td>${formatearPrecio(producto.precio)}</td>
      <td>
        <a href="#" title="Eliminar" class="btn btn-success btn-sm agregar-producto" data-id="${producto.id}"><i class="fa-solid fa-plus"></i></a>
        <span class="mx-2 fw-bold"> ${cantidad} </span>
        <a href="#" title="Eliminar" class="btn btn-warning btn-sm disminuir-producto" data-id="${producto.id}"><i class="fa fa-minus"></i></a>
      </td>
      <td>${formatearPrecio(importe)}</td>
      <td><a href="#" title="Eliminar" class="btn btn-danger btn-sm eliminar-producto" data-id="${producto.id}"><i class="fa fa-trash-alt"></i></a></td>
    `;
        tbody.appendChild(tr);
    });
   
    totalCompra.textContent = ` S/. ${formatearPrecio(total)}`;
}

// Evento para eliminar producto
tbody.addEventListener('click', function (e) {
    if (e.target.closest('.eliminar-producto')) {
        e.preventDefault();
        const id = e.target.closest('.eliminar-producto').dataset.id;
        let carrito = obtenerCarrito();
        // Elimina todas las unidades de ese producto
        carrito = carrito.filter(pid => pid !== id);
        guardarCarrito(carrito);
        renderizarCarrito();
    }
});

// Inicializar
renderizarCarrito();

// Evento para agregar más productos
tbody.addEventListener('click', function (e) {
    if (e.target.closest('.agregar-producto')) {
        e.preventDefault();
        const id = e.target.closest('.agregar-producto').dataset.id;
        let carrito = obtenerCarrito();
        carrito.push(id); // Agrega una unidad más
        guardarCarrito(carrito);
        renderizarCarrito();
    }
});

// Evento para disminuir producto
tbody.addEventListener('click', function (e) {
    if (e.target.closest('.disminuir-producto')) {
        e.preventDefault();
        const id = e.target.closest('.disminuir-producto').dataset.id;
        let carrito = obtenerCarrito();
        const index = carrito.indexOf(id);
        if (index !== -1) {
            carrito.splice(index, 1); // Elimina solo una unidad
        }
        guardarCarrito(carrito);
        renderizarCarrito();
    }
});