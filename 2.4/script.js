// Seleccionar elementos
const title = document.querySelector("#title");
const logoImg = document.querySelector("#logo-img");
const body = document.querySelector("body");

// Función para cambiar el modo oscuro/claro
function toggleDarkMode(button) {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        button.textContent = "Cambiar al modo oscuro";
        title.textContent = "Hola, mundo (Modo claro)";
        logoImg.src = "./pingu_1.jpg";
    } else {
        body.classList.add("dark-mode");
        button.textContent = "Cambiar al modo claro";
        title.textContent = "Hola, mundo (Modo oscuro)";
        logoImg.src = "./pingu.jpeg";
    }
}

// Cambiar el texto del título después de 2 segundos
setTimeout(() => {
    title.innerText = "Título actualizado";
}, 2000);

// Agregar un evento de clic a la imagen
logoImg.addEventListener('click', function() {
    this.style.border = this.style.border ? '' : '2px solid red';
});