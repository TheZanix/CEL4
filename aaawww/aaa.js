function encontrarMayorYMenor(array) {
    if (array.length === 0) {
        return { mayor, menor }; 
    }

    let mayor = array[0];
    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    return { mayor: mayor, menor: menor };
}

let resultado = encontrarMayorYMenor([3, 5, 7, 2, 200, 33, 100, 3, 400]);
alert("mayor: " + resultado.mayor + "\nmenor: " + resultado.menor);