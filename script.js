// Definir los precios de los productos
const preciosProductos = {
    1: 2.5,  // Aguacate Hass
    2: 10.0, // Quinoa blanca, rojo y negra
    3: 7.0,  // Chía integral
    4: 1.5,  // Barra de granola integral
    5: 3.0,  // Semillas de girasol
    6: 4.0   // Avena integral
};

// Tarifa de domicilio
const tarifaDomicilio = 10.0;

// Referencias a los elementos del DOM
const selectProducto = document.getElementById("inputGroupSelect01");
const inputCantidad = document.getElementById("cantidad");
const spanPrecio = document.getElementById("precio");
const radioDomicilio = document.getElementById("gridRadios1");
const radioRecojo = document.getElementById("gridRadios2");
const btnPedir = document.querySelector("button[type='submit']");

// Función para actualizar el precio
function actualizarPrecio() {
    const idProducto = selectProducto.value;
    const cantidad = parseInt(inputCantidad.value) || 0;

    let precioTotal = 0;

    if (idProducto && preciosProductos[idProducto]) {
        precioTotal = preciosProductos[idProducto] * cantidad;

        // Agregar tarifa de domicilio si está seleccionada
        if (radioDomicilio.checked) {
            precioTotal += tarifaDomicilio;
        }
    }

    spanPrecio.textContent = precioTotal.toFixed(2); // Mostrar con dos decimales
}

// Función para manejar el evento de clic en el botón de pedido
function realizarPedido(event) {
    event.preventDefault(); // Evitar la recarga de la página

    // Mostrar notificación al usuario
    alert("¡Pedido realizado! Hemos enviado una notificación a su correo para continuar con la compra.");
}

// Event Listeners
selectProducto.addEventListener("change", actualizarPrecio);
inputCantidad.addEventListener("input", actualizarPrecio);
radioDomicilio.addEventListener("change", actualizarPrecio);
radioRecojo.addEventListener("change", actualizarPrecio);
btnPedir.addEventListener("click", realizarPedido);

// Referencias a los elementos del DOM
const formContacto = document.querySelector("#contactos form");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const textareaMensaje = document.getElementById("mensaje");

// Función para manejar el envío del formulario
formContacto.addEventListener("submit", function (event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Mostrar mensaje de notificación
    alert("Tu mensaje se ha enviado correctamente. Pronto te responderemos. ¡Gracias por contactarnos!");

    // Limpiar el formulario
    formContacto.reset();
});
