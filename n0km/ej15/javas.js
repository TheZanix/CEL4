let n = parseInt(prompt("Indicar cantidad de múltiplos de 3 a sumar: "));

function sumarMultiplos3(limite) {
    let suma = 0;

    for (let i = 0; i < limite; i++) {
        let multiplo3 = (i + 1) * 3;
        suma += multiplo3;
    }

    return suma;
}

console.log(`Resultado de la suma de los primeros ${n} múltiplos de 3 es: ${sumarMultiplos3(n)}`);