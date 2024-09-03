let n1 = parseInt(prompt("Ingresa el primer número"));
let n2 = parseInt(prompt("Ingresa el segundo número"));
let operar = prompt("Ingrese sumar, restar, multiplicar o dividir");

function operator(a, b, oper) {
    if (oper == "sumar") {
        return a + b;
    } else if (oper == "restar") {
        return a - b;
    } else if (oper == "multiplicar") {
        return a * b;
    } else if (oper == "dividir") {
        return a / b;
    } else {
        return "Operación no válida";
    }
}

let resultado = operator(n1, n2, operar);
console.log(`El resultado de ${n1} y ${n2} es :  ${resultado}`);