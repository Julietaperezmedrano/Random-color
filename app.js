//SELECCIONAR LOS ELEMENTOS DEL DOM
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
        //let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[i];
    }

    return colorHex;
}

boton.addEventListener("click", function () {
    let colorAleatorio = generarColorHexAleatorio();
    //actualizar el texto
    color.textContent = colorAleatorio;
    //actualizar el fondo
    document.body.style.backgroundColor = colorAleatorio;
})