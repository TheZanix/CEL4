
function Puntuacion(){
    let puntuacion = parseInt(prompt("Ingrese su puntuación"));
    let resultado = "";
    
    if(puntuacion >= 90){
        resultado = "Excelente";
    }
else if(puntuacion >=70 && puntuacion <=89 ){
resultado = `Buen trabajo`;
    } else if(puntuacion < 70 && puntuacion >=50) {
    resultado = `Necesitas Mejorar`;
} else {
        resultado = `reprobado`;
    }
    document.getElementById('resultado').innerHTML = resultado;
}
