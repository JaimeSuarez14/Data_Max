
import { productos } from '../data.js';

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('catalogo-productos');
    const carritoContador = document.querySelector('.fa-shopping-cart')?.parentElement.querySelector('span.fw-bold');

    // Función para formatear precios
    function formatearPrecio(precio) {
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(precio);
    }

    // Función para obtener el carrito desde localStorage
    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    // Función para guardar el carrito en localStorage
    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para actualizar el contador en el navbar
    function actualizarContadorCarrito() {
        if (carritoContador) {
            const carrito = obtenerCarrito();
            carritoContador.textContent = carrito.length;
        }
    }

    // Inicializar contador al cargar la página
    actualizarContadorCarrito();

    if (contenedor) {
        productos.forEach((producto, idx) => {
            const col = document.createElement('div');
            col.className = 'col-sm-6 col-md-4 col-lg-3 mt-1 p-3';
            col.innerHTML = `
                <form action="#" method="get">
                    <div class="card p-3 shadow p-3 mb-5 bg-body-tertiary rounded" style="height: 19rem;">
                        <img src="${producto.imagen}" class="card-img-top producto-img" alt="${producto.nombre}" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#modalProducto${idx}">
                        <div class="card-body">
                            <p class="fw-bold">${producto.nombre}</p>
                            <input type="hidden" name="accion" value="agregar">
                            <input type="hidden" name="id" value="${producto.id}">
                            <div class="d-flex justify-content-between align-items-center">
                                <button type="submit" class="btn btn-sm btn-primary agregar-carrito"><i class="fa fa-shopping-cart"></i> Agregar al carrito</button>
                                <small class="fw-bold">S/ ${formatearPrecio(producto.precio)}</small>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- Modal -->
                <div class="modal fade" id="modalProducto${idx}" tabindex="-1" aria-labelledby="modalProducto${idx}Label" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalProducto${idx}Label">${producto.nombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="${producto.imagen}" class="producto-img modal-img-grande mb-3" alt="${producto.nombre}">
                                <p class="fw-bold">Precio: S/ ${formatearPrecio(producto.precio)}</p>
                                <p>${producto.descripcion}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.appendChild(col);

            // Agregar evento para el botón "Agregar al carrito"
            const form = col.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let carrito = obtenerCarrito();
                carrito.push(producto.id);
                guardarCarrito(carrito);
                actualizarContadorCarrito();
            });
        });
    }
});
