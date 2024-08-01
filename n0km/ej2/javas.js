let numero = prompt("esccribir un numero:");

function mostrarDatos(numero){
    numero = (numero/3+10)*2
    console.log(`el resultado es: ${numero}`);
    document.getElementById("mostrarDatos").textContent = `el resultado es: ${numero}`;
}

mostrarDatos(numero);