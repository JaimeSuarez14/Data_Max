export function obtenerUsuarioSession() {
    return JSON.parse(localStorage.getItem('usuarioLogueado')) || null;
}

document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogueado = obtenerUsuarioSession();
    const formatoUsuario = document.getElementById('formatoUsuario');
    const bloqueUsuario = document.getElementById('bloqueUsuario');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const cerrarSesion = document.getElementById('cerrarSesion');
    const bloqueAdmin = document.getElementById('bloqueAdmin');
    const panelAdmin = document.getElementById('panelAdmin');

    if(usuarioLogueado != null){
        formatoUsuario.classList.add('ocultar');
        bloqueUsuario.classList.remove('ocultar');
        nombreUsuario.textContent = usuarioLogueado.username;
        // Mostrar bloque admin si el rol es admin
        if(usuarioLogueado.rol === 'admin'){
            bloqueAdmin.classList.remove('ocultar');
            panelAdmin.classList.remove('ocultar');
        } else {
            bloqueAdmin.classList.add('ocultar');
        }
    } else {
        bloqueUsuario.classList.add('ocultar');
        bloqueAdmin.classList.add('ocultar');
    }

    // Evento cerrar sesión
    if(cerrarSesion){
        cerrarSesion.addEventListener('click', function(){
            localStorage.removeItem('usuarioLogueado');
            location.reload();
        });
    }
});