document.addEventListener('DOMContentLoaded', (event) => {
    // Añadir el event listener al contenedor padre
    document.body.addEventListener('click', function(e) {
        // Comprobar si el elemento clickeado es un botón
        if (e.target.tagName === 'BUTTON') {
            // Quitar el foco del botón
            e.target.blur();
        }
    });
});