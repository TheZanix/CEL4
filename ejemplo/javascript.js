function identificarMayorEdad()
{
    let resultado ="";
    let edad = prompt("Porfavor ingrese su edad");

    if(edad >= 18){
        console.log("Prueba");
        resultado = `es mayor de edad - tiene : <h2>${edad}</h2>`
    }else{
        resultado = `es menor de edad - tiene : <h2>${edad}</h2>`
}
document.getElementById("lista").innerHTML = resultado;

}