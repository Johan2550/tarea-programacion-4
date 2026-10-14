document.addEventListener("DOMContentLoaded", function () {

    const btnContacto = document.getElementById("btn-contacto");
    const opcionesContacto = document.getElementById("opciones-contacto");

    btnContacto.addEventListener("click", function () {
        opcionesContacto.classList.toggle("activo");

        if (opcionesContacto.classList.contains("activo")) {
            btnContacto.textContent = "❌ Cerrar contacto";
        } else {
            btnContacto.textContent = "📬 Formas de Contacto";
        }
    });

});