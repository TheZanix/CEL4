
function encontrarNumeroMayor() {
  let numeros = [];
  for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("Ingresa el número " + i + ":"));
    numeros.push(numero);
  }
  let numeroMayor = Math.max(...numeros);
  document.getElementById("resultado").innerHTML = "<p>El número mayor es:</p> <br><h2>" + numeroMayor + "</h2>";
}