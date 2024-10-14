let entrada = '', operando1 = null, operacion = '';
const pantalla = document.getElementById('display');
const historialDiv = document.getElementById('historial');

function presionar(num) {
    entrada += num;
    pantalla.innerText = entrada || '0';
}

function establecerOperacion(op) {
    if (entrada) {
        operando1 = parseFloat(entrada);
        operacion = op;
        entrada = '';
    }
}

function calcular() {
    if (operando1 !== null && entrada) {
        const valorEntrada = parseFloat(entrada);
        let resultado;

        switch (operacion) {
            case '+':
                resultado = operando1 + valorEntrada;
                break;
            case '-':
                resultado = operando1 - valorEntrada;
                break;
            case '*':
                resultado = operando1 * valorEntrada;
                break;
            case '/':
                resultado = operando1 / valorEntrada;
                break;
            default:
                resultado = 0;
        }

        pantalla.innerText = resultado.toFixed(1);
        agregarAlHistorial(`${operando1} ${operacion} ${valorEntrada} = ${resultado.toFixed(1)}`);
        entrada = '';
        operando1 = null;
        operacion = '';
    }
}

function limpiar() {
    entrada = '';
    operando1 = null;
    operacion = '';
    pantalla.innerText = '0';
}

function agregarAlHistorial(entry) {
    const nuevoEntry = document.createElement('div');
    nuevoEntry.textContent = entry;
    historialDiv.appendChild(nuevoEntry);
}

document.addEventListener('DOMContentLoaded', () => {
    const botonesNumeros = document.querySelectorAll('.num');
    const botonesOperaciones = document.querySelectorAll('.op');
    const botonIgual = document.getElementById('equals');
    const botonLimpiar = document.getElementById('clear');

    botonesNumeros.forEach(btn => {
        btn.addEventListener('click', () => presionar(btn.innerText));
    });

    botonesOperaciones.forEach(btn => {
        btn.addEventListener('click', () => establecerOperacion(btn.innerText));
    });

    botonIgual.addEventListener('click', calcular);
    botonLimpiar.addEventListener('click', limpiar);
});