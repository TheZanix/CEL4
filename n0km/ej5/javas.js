let n = parseInt(prompt("Ingrese un número"));

function numerosNaturales(numero) {
    let array = [];
    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        array.push(i);
        suma += i;
    }

    console.log(`Los números naturales son: ${array.join("+")}`);
    return suma;
}

console.log(numerosNaturales(n));