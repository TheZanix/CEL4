let n = parseInt(prompt("Indicar cantidad de numeros a ingresar: "));

function sumarPares(limite) {
    let suma = 0;
    let array = [];

    for (let i = 0; i < limite; i++) {
        let input = parseInt(prompt(`Ingrese el ${i+1}º número: `));
        array.push(input);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }

    return suma;
}

console.log(`Resultado de la suma de los números pares es: ${sumarPares(n)}`);
