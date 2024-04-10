function compararMayorMenor(){
    let resultado = "";
    num1 = parseInt(prompt("Ingrese el primer numero: "));
    num2 = parseInt(prompt("Ingrese el segundo numero: "));

if(num1 > num2){
    resultado = `èl ${num1} es mayor que ${num2}`
} else if(num2 > num1){
    resultado = `el ${num2} es mayor que ${num1}`
}  else if (num1 == num2){
    resultado = `el $(num2) es igual que $(num1)`
}  else {
    resultado = "El valor ingresado es incorrecto";
}
document.getElementById("resultado").innerHTML = resultado;
} 