import { usuarios } from "../data.js";

// Esperar a que el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("formulariologin");
  const container = document.querySelector('.card-body');
  const titulo = container.querySelector('h5');

  // Crear alerta de Bootstrap (inicialmente oculta)
  let alerta = document.createElement('div');
  alerta.className = 'alert alert-danger d-none';
  alerta.role = 'alert';
  alerta.textContent = 'Usuario o contraseña incorrectos.';
  container.insertBefore(alerta, titulo);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = form.login.value.trim();
    const password = form.password.value;
    const usuario = usuarios.find(u => u.username === username && u.contrasena === password);
    if (usuario) {
      // Login exitoso
      guardarUsuario(usuario);
      window.location.href = 'index.html';
    } else {
      // Mostrar alerta
      alerta.classList.remove('d-none');
      // Limpiar campos
      form.password.value = '';
      form.login.focus();
    }
  });
});

function guardarUsuario(usuario) {
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
  }