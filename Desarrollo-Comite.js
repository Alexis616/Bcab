document.getElementById('formulario_acta').addEventListener('submit', function(event) {
    event.preventDefault();

    function procesarFormulario() {
        var informacion = document.getElementById('datos').value;
        console.log(informacion);
    }

    procesarFormulario();
});
