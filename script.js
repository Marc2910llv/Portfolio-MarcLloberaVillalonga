document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento al botón de cambio a español
    document.getElementById("spanish").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        cambiarIdioma("spanish");
    });

    // Agregar evento al botón de cambio a inglés
    document.getElementById("english").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        cambiarIdioma("english");
    });

    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
        var elementosSpanish = document.getElementsByClassName("spanish");
        var elementosEnglish = document.getElementsByClassName("english");

        // Ocultar elementos en el idioma actual y mostrar elementos en el nuevo idioma
        if (idioma === "spanish") {
            for (var i = 0; i < elementosSpanish.length; i++) {
                elementosSpanish[i].style.display = "inline";
            }
            for (var j = 0; j < elementosEnglish.length; j++) {
                elementosEnglish[j].style.display = "none";
            }
        } else if (idioma === "english") {
            for (var k = 0; k < elementosSpanish.length; k++) {
                elementosSpanish[k].style.display = "none";
            }
            for (var l = 0; l < elementosEnglish.length; l++) {
                elementosEnglish[l].style.display = "inline";
            }
        }
    }
});
