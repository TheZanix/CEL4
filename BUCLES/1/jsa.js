
function numerosCrecientes() {
  let numero = 0;
  let array = [];
  while (numero <= 100) {
    array.push(numero);
    numero += 5;
  }
  document.getElementById("resultado").innerHTML = "<p>Números crecientes de 5 en 5:</p> <br><h2>" + array + "</h2>";
}