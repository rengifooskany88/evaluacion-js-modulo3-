document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombreInput");
    const botonSaludar = document.getElementById("saludarBtn");
    const parrafoSaludo = document.getElementById("saludoResultado");
    const parrafoInfo = document.getElementById("infoCaracteres");

    function procesarSaludo() {
        const nombre = inputNombre.value.trim();

        if (nombre === "") {
            parrafoSaludo.textContent = "Por favor, ingresa tu nombre.";
            parrafoInfo.textContent = "El campo de texto está vacío.";
        } else {
            parrafoSaludo.textContent = `¡Hola, ${nombre}! Bienvenido a TecnoServicios Machine. ¿En qué podemos ayudarte hoy con tu máquina de coser?`;
            
            const cantidadCaracteres = nombre.length;
            parrafoInfo.textContent = `Tu nombre tiene ${cantidadCaracteres} caracteres.`;
        }
    }

    botonSaludar.addEventListener("click", procesarSaludo);

    inputNombre.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            procesarSaludo();
        }
    });
});