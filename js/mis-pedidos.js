// Función para formatear precio con separador de miles
function formatearPrecio(precio) {
  return Number(precio).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Formatear todos los precios en la tabla de pedidos
function formatearPreciosTabla() {
  // Formatear precios en la tabla principal
  const preciosCeldas = document.querySelectorAll('table td:nth-child(3)');
  preciosCeldas.forEach(celda => {
    if (!isNaN(celda.textContent)) {
      celda.textContent = formatearPrecio(celda.textContent);
    }
  });

  // Formatear precios en los modales de detalles
  const modales = document.querySelectorAll('.modal');
  modales.forEach(modal => {
    const preciosModal = modal.querySelectorAll('td:nth-child(3), td:nth-child(5)');
    preciosModal.forEach(celda => {
      if (!isNaN(celda.textContent)) {
        celda.textContent = formatearPrecio(celda.textContent);
      }
    });
  });
}

// Ejecutar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', formatearPreciosTabla);