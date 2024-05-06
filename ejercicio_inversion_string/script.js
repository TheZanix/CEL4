function traerTablas() {
    let num = parseInt(document.getElementById("inputText").value);
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        let li = document.createElement("li");
        li.textContent = num + " x " + i + " = " + resultado;
        lista.appendChild(li);
    }
}