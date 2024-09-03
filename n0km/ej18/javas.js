function palabrasLargas(frase) {
    let palabras = frase.split(" ");
    let palabraMasLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    console.log(`La palabra más larga es "${palabraMasLarga}" con una longitud de ${palabraMasLarga.length}`);
    alert(palabras.join(";"));
}

let input = prompt("Ingrese una frase:");
palabrasLargas(input);