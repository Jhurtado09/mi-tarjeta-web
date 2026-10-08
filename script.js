const boton = document.getElementById('btnSaludar');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.innerText = "🚀 ¡Felicidades! Has conectado con éxito HTML, CSS y JavaScript.";
    mensaje.className = "visible";
});