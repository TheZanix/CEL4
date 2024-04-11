function sumade1a10() {
  let contador = 1;
  let suma = 0;
  let cadenaSuma = "";
  while (contador <= 10) {
    suma += contador;
    if (contador !== 10) {
      cadenaSuma += contador + "+";
    } else {
      cadenaSuma += contador;
    }
    contador++;
  }
  document.getElementById("resultado").innerHTML = "<p>La suma del 1 al 10 es:</p> <br><h2>" + cadenaSuma + " = " + suma + "</h2>";
}