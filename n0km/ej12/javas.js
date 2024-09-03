let n = parseInt(prompt("Indicar cantidad de números pares a sumar: "));

function sumarPares(limite) {
    let suma = 0;

    for (let i = 0; i < limite; i++) {
        let par = i * 2;
        suma += par;
    }

    return suma;
}

console.log(`Resultado de la suma de los primeros ${n} números pares es: ${sumarPares(n)}`);