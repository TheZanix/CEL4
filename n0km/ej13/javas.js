let n = parseInt(prompt("Indicar cantidad de números impares a sumar: "));

function sumarImpares(limite) {
    let suma = 0;

    for (let i = 0; i < limite; i++) {
        let impar = i * 2 + 1; 
        suma += impar; 
    }

    return suma;
}

console.log(`Resultado de la suma de los primeros ${n} números impares es: ${sumarImpares(n)}`);