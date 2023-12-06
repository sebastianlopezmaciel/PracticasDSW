
document.addEventListener("DOMContentLoaded", function () {
    var pestanas = document.querySelectorAll("#pestanas li a");
    var secciones = document.querySelectorAll("section");

    pestanas.forEach(function (pestana) {
        pestana.addEventListener("click", function (e) {
            e.preventDefault();

            var target = this.getAttribute("href").substring(1);

            secciones.forEach(function (seccion) {
                seccion.style.display = "none";
            });

            document.getElementById(target).style.display = "block";
        });
    });

    // Mostrar la primera pestaña al cargar la página
    pestanas[0].click();
});


function mostrarTalla() {
    var camisaSelect = document.getElementById("camisa");
    var tallaDiv = document.getElementById("tallaDiv");

    if (camisaSelect.value === "si") {
        tallaDiv.style.display = "block";
    } else {
        tallaDiv.style.display = "none";
        document.getElementById("talla").value = "NINGUNA";
    }
}
//validaciones
function validarFormulario() {
    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");
    var edadInput = document.getElementById("edad");

    var nombre = nombreInput.value.trim().toUpperCase();
    var apellido = apellidoInput.value.trim().toUpperCase();
    var edad = parseInt(edadInput.value);

    if (nombre === "" || apellido === "" || isNaN(edad) || edad < 18 || edad > 60) {
        alert("Por favor, complete todos los campos correctamente,Los nombres inician con mayusculas .");
        return false;
    }

    alert("Formulario capturado con éxito.");
    //volver al inicio
    window.location.href = "#inicio";
    return false;
}
