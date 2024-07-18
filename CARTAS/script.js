function contarCartas(card) {
    var count = 0; // Variable para iniciar desde el valor 0

    function actualizarConteo(valor) {
        // Función Para actualizar el conteo de las cartas
        if (valor >= 2 && valor <= 6) {
            count++; // Sumar 1 al conteo si el valor está entre 2 y 6
        } else if (valor === 10 || typeof valor === "string") {
            count--; // Restar 1 al conteo si el valor es 10 o una cadena (J, Q, K)
        }
    }

    if (Array.isArray(card)) { //se usa array para ingresar varios datos en una sola variable
        card.forEach(function (c) {//ejecutara los elementos del array
            actualizarConteo(c); // Actualizar el conteo para cada carta en la array
        });
    } else {
        actualizarConteo(card); // Actualizar el conteo para la carta individual
    }

    var decision = count > 0 ? "Bet" : "Hold"; // decide entre bet o hold
    return count + " " + decision; // Devolver el conteo y la decisión como una cadena
}

function handleSubmit(event) {
    event.preventDefault(); // Previene que se reinicie la pagina

    var cardInput = document.getElementById("card-input"); // Obtener el elemento de entrada de cartas, buscando la id de card-input
    var result = document.getElementById("result"); // Obtener el elemento de resultado, buscando la id de result

    var cardValue = cardInput.value.trim(); // se obtiene valor de las cartas y Trim elimina espacios en blancos
    var cards = cardValue.split(",").map(function (c) {
        return c.trim();
    }); // Dividir el valor en una matriz de cartas individuales y eliminar espacios en blanco

    var conteo = contarCartas(cards); // Contar las cartas ingresadas
    result.textContent = conteo; // Mostrar el resultado en el elemento de resultado

    cardInput.value = ""; //Elimina las cartas ingresadas anteriormente
}

var form = document.getElementById("card-form"); // Obtener el formulario
form.addEventListener("submit", handleSubmit); // Agregar un controlador de evento para el envío del formulario