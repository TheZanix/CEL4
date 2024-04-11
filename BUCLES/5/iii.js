function encontrarNP() {
  let n = parseInt(prompt("Ingrese el valor de N:"));
  let array = [];
  for (let i = 1; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  document.getElementById("resultado").innerHTML = "<p>Los primeros " + n + " números pares son:</p> <br><h2>" + array + "</h2>";
}