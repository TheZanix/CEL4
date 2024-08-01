let nombre = prompt("esccribir un nombre:");
let apellido = prompt("escribir apellido: ");
let edad = prompt ("escribe tu edad");

function mostrarDatos(nombre, apellido, edad){
    console.log(`El nombre completo es: ${nombre} ${apellido}`);
    console.log(`la edad es: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);