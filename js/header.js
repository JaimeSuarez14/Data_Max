document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `<nav class="navbar navbar-expand-lg" style="background-color:rgb(5, 86, 207);">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="imagenes/logoDataMax.svg" alt="Logo" style="background-size: cover; width: 60px;"><span class="fw-bold text-white">Data Max</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="index.html"><i class="fa fa-home"></i>
                                Catálogo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="carrito.html"><i class="fa fa-shopping-cart"></i> (<span
                                    class="fw-bold">0</span>) Carrito</a>
                        </li>
                        <li class="nav-item" id="misPedidos">
                            <a class="nav-link text-white" href="mis-pedidos.html"><i class="fa fa-box"></i> Mis Pedidos</a>
                        </li>
                        <li class="nav-item ocultar d-inline-block" id="panelAdmin">
                            <a class="nav-link bg-success text-white" href="./panel/panel.html"><i class="fa-solid fa-user-tie"></i> Panel de Control</a>
                        </li>
                    </ul>
                    <form class="d-flex" id="formatoUsuario">
                        <a href="registro.html" class="btn btn-dark me-2"><i class="fas fa-user-plus"></i> Registrarse</a>
                        <a href="login.html" class="btn btn-dark"><i class="fas fa-user-lock"></i> Login</a>
                    </form>
                    <!-- Bloque solo para admin -->
                    <div class="d-flex align-items-center gap-2 ocultar me-2" id="bloqueAdmin">
                        <span class="badge bg-warning text-dark">Admin</span>
                    </div>
                    <!-- Bloque de usuario logueado -->
                    <div class="d-flex align-items-center ocultar" id="bloqueUsuario">
                        <span id="nombreUsuario" class="fw-bold text-white me-2"></span>
                        <button class="btn btn-danger btn-sm" id="cerrarSesion">Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    const footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML =`<footer class="footer mt-auto py-4 bg-dark text-white ">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5>Contáctanos</h5>
                    <p><i class="fas fa-phone me-2"></i>+51 993 007 485</p>
                    <p><i class="fas fa-envelope me-2"></i>contacto@datamax.com</p>
                    <p><i class="fas fa-map-marker-alt me-2"></i>Av. Venezuela N° 123, Lima</p>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Síguenos</h5>
                    <div class="d-flex gap-3 fs-4">
                        <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Horario de Atención</h5>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                    <p>Domingos: Cerrado</p>
                </div>
            </div>
            <hr class="my-2">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-0">&copy; 2025 Data Max. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>`
    }
});