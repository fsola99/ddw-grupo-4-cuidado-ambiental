const palabras = [
    { palabra: "RECICLAR", pista: "Proceso mediante el cual los materiales desechados se convierten en nuevos productos para evitar el desperdicio y proteger el medio ambiente." },
    { palabra: "ENERGIA", pista: "Es la capacidad de realizar un trabajo y viene en formas renovables y no renovables." },
    { palabra: "NATURALEZA", pista: "Conjunto de cosas que existen en el mundo o que se producen o modifican sin intervención del ser humano." },
    { palabra: "CONTAMINACION", pista: "Introducción de sustancias u otros elementos en un medio, causando un efecto negativo." },
    { palabra: "SOSTENIBLE", pista: "Algo que se puede mantener durante mucho tiempo sin agotar los recursos o causar daño al medio ambiente." },
    { palabra: "ECOLOGIA", pista: "Ciencia que estudia las relaciones entre los organismos y su entorno." },
    { palabra: "RESIDUOS", pista: "Materiales desechados o sobrantes que pueden ser reutilizados o reciclados." },
    { palabra: "BIODIVERSIDAD", pista: "Variedad de vida en el planeta, incluyendo la diversidad de especies, ecosistemas y genética." }
];

let selected;
let selectedpalabra;
let letraUsada;
let palabraUsada;
let intentos;

function iniciarJuego() {
    selected = palabras[Math.floor(Math.random() * palabras.length)];
    selectedpalabra = selected.palabra;
    letraUsada = [];
    palabraUsada = [];
    intentos = 6;

    document.getElementById("pista").innerHTML ="<b>Pista</b>: "+ selected.pista;
    document.getElementById("palabra").innerHTML = "_ ".repeat(selectedpalabra.length);
    document.getElementById("palabraUsada").innerHTML = "Letras usadas: ";
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("mensaje").classList.remove("ganar", "perder");
}

function adivinar() {
    if(intentos != 0){
        
        let adivinarLetra = document.getElementById("adivinarLetra").value.toUpperCase();
        document.getElementById("adivinarLetra").value = "";

        if (adivinarLetra.length !== 1 || palabraUsada.includes(adivinarLetra)) {
            return;
        }

        palabraUsada.push(adivinarLetra);
        document.getElementById("palabraUsada").innerHTML = "<b>Letras usadas</b>: " + palabraUsada.join(", ");

        if (selectedpalabra.includes(adivinarLetra)) {
            letraUsada.push(adivinarLetra);
            document.getElementById("palabra").classList.add("fadeIn");
            setTimeout(() => {
                document.getElementById("palabra").classList.remove("fadeIn");
            }, 1000);
        } else {
            intentos--;
            document.getElementById("palabra").classList.add("mostrar");
            setTimeout(() => {
                document.getElementById("palabra").classList.remove("mostrar");
            }, 500);
        }

        actualizar();
        estadoJuego();
    
    }
}

function actualizar() {
    let displaypalabra = selectedpalabra.split("").map(letter => (letraUsada.includes(letter) ? letter : "_")).join(" ");
    document.getElementById("palabra").innerHTML = displaypalabra;
}

function estadoJuego() {
    if (selectedpalabra.split("").every(letter => letraUsada.includes(letter))) {
        document.getElementById("mensaje").innerHTML = "¡Felicidades! Has ganado.";
        document.getElementById("mensaje").classList.add("ganar");
        document.getElementById("btnAdivinar").classList.add("ocultarBtn");
        document.getElementById("btnRendirme").classList.add("ocultarBtn");
    } else if (intentos === 0) {
        document.getElementById("mensaje").innerHTML = `Perdiste. La palabra era ${selectedpalabra}.`;
        document.getElementById("btnAdivinar").classList.add("ocultarBtn");
        document.getElementById("btnRendirme").classList.add("ocultarBtn");
        document.getElementById("mensaje").classList.add("perder");
    } else {
        document.getElementById("mensaje").innerHTML = `Te quedan ${intentos} intentos.`;
    }
}

function rendirme() {
    document.getElementById("mensaje").innerHTML = `Te rendiste. La palabra era ${selectedpalabra}.`;
    document.getElementById("mensaje").classList.add("perder");
    document.getElementById("btnAdivinar").classList.add("ocultarBtn");
    document.getElementById("btnRendirme").classList.add("ocultarBtn");


}

function proxima() {
    iniciarJuego();
    document.getElementById("btnAdivinar").classList.remove("ocultarBtn");
    document.getElementById("btnRendirme").classList.remove("ocultarBtn");
}

//validacion al momento de ingresar una letra/numero, y por una regular expresion se valida que sea solo letras
function validarInput(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

// Inicia el juego cuando se renderiza el dom de la web
iniciarJuego();


//esta escuchando si se presiona el boton enter, para ejecutar la funcion de adivinanza
const inputElement = document.getElementById("adivinarLetra");
inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adivinar();
    }
});