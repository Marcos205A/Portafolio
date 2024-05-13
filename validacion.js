//Haz tú validación en javascript acá

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var formacion = document.querySelector(".formacion");
        var formacionPosition = formacion.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (formacionPosition < screenPosition) {
            formacion.classList.add("visible");
        } else {
            formacion.classList.remove("visible");
        }
    });
});
