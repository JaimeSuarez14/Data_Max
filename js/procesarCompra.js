document.addEventListener('DOMContentLoaded', () => {
    const metodoPago = document.getElementById('metodoPago');
    const formTarjeta = document.getElementById('formTarjeta');
    const formYape = document.getElementById('formYape');
    const confirmarPago = document.getElementById('confirmarPago');
    const numeroTarjeta = document.getElementById('numeroTarjeta');
    const fechaVencimiento = document.getElementById('fechaVencimiento');
    const cvv = document.getElementById('cvv');
    const nombreTarjeta = document.getElementById('nombreTarjeta');

    // Función para formatear el número de tarjeta mientras se escribe
    numeroTarjeta?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });

    // Función para formatear la fecha de vencimiento mientras se escribe (MM/YY)
    fechaVencimiento?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // Función para permitir solo números en el CVV
    cvv?.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Cambiar formulario según método de pago seleccionado
    metodoPago?.addEventListener('change', () => {
        const metodo = metodoPago.value;
        formTarjeta.classList.add('d-none');
        formYape.classList.add('d-none');

        if (metodo === 'credito' || metodo === 'debito') {
            formTarjeta.classList.remove('d-none');
        } else if (metodo === 'yape') {
            formYape.classList.remove('d-none');
        }
    });

    // Procesar el pago
    confirmarPago?.addEventListener('click', () => {
        const metodo = metodoPago.value;
        let validacion = true;
        let mensaje = '';

        if (!metodo) {
            validacion = false;
            mensaje = 'Por favor seleccione un método de pago';
        } else if (metodo === 'credito' || metodo === 'debito') {
            // Validar campos de tarjeta
            if (!numeroTarjeta.value || numeroTarjeta.value.length !== 16) {
                validacion = false;
                mensaje = 'Número de tarjeta inválido';
            } else if (!fechaVencimiento.value || fechaVencimiento.value.length !== 5) {
                validacion = false;
                mensaje = 'Fecha de vencimiento inválida';
            } else if (!cvv.value || cvv.value.length !== 3) {
                validacion = false;
                mensaje = 'CVV inválido';
            } else if (!nombreTarjeta.value) {
                validacion = false;
                mensaje = 'Ingrese el nombre que aparece en la tarjeta';
            }
        }

        if (!validacion) {
            alert(mensaje);
            return;
        }

        // Simular procesamiento de pago
        const modalPago = document.getElementById('modalPago');
        const modal = bootstrap.Modal.getInstance(modalPago);
        
        // Mostrar mensaje de procesamiento
        confirmarPago.disabled = true;
        confirmarPago.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Procesando...';

        setTimeout(() => {
            // Simular éxito del pago
            alert('¡Pago procesado con éxito!');
            
            // Limpiar carrito
            localStorage.removeItem('carrito');
            
            // Cerrar modal y redireccionar
            modal.hide();
            window.location.href = 'index.html';
        }, 2000);
    });
});