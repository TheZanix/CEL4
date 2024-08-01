let num1 = prompt("esccribir un numero:");
let num2 = prompt("esccribir un numero:");

function evaluarCreciente(a, b) {
if (a < b) {
    console.log("en orden creciente");
} else if (a > b) {
    console.log("en orden decreciente");
} else {
    console.log("son iguales");
}
}

evaluarCreciente(num1, num2);