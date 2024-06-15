const palabras = [
  { desordenadas: "recilarc", ordenadas: "reciclar", descripcion: "Proceso de convertir materiales usados en nuevos productos para reducir el desperdicio." },
  { desordenadas: "dreve", ordenadas: "verde", descripcion: "Relacionado con prácticas y tecnologías que minimizan el impacto ambiental." },
  { desordenadas: "orroha", ordenadas: "ahorro", descripcion: "Uso eficiente de recursos para evitar el desperdicio y reducir costos." },
  { desordenadas: "natarulaze", ordenadas: "naturaleza", descripcion: "Conjunto de seres vivos y su entorno que deben ser protegidos y preservados" },
  { desordenadas: "coe", ordenadas: "eco", descripcion: "Prefijo que denota prácticas y productos que son respetuosos con el medio ambiente.." }
];

let flag = 0;
let intentos = 0;
const maxIntentos = 4;

function mostrarProximaPalabra() {
  if (flag < palabras.length) {
      document.getElementById('palabraDesordenada').textContent = palabras[flag].desordenadas;
      document.getElementById('resultado').textContent = '';
      document.getElementById('descripcion').textContent = '';
      document.getElementById('palabraIngresada').value = '';
      intentos = 0;
      document.getElementById('palabraIngresada').style.display = 'block';
      document.getElementById('enviarPalabra').style.display = 'block';
  } else {
      document.getElementById('palabraDesordenada').textContent = "¡Has completado todas las palabras!";
      document.getElementById('palabraIngresada').style.display = 'none';
      document.getElementById('enviarPalabra').style.display = 'none';
      document.getElementById('felicitaciones').style.display = 'block';
  }
}

document.getElementById('comenzarJuego').addEventListener('click', () => {
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('pantallaJuego').style.display = 'block';
  mostrarProximaPalabra();
});

document.getElementById('enviarPalabra').addEventListener('click', () => {
  const palabraIngresada = document.getElementById("palabraIngresada").value.toLowerCase();
  if (palabraIngresada === palabras[flag].ordenadas) {
      document.getElementById('resultado').textContent = "¡Correcto!";
      document.getElementById('resultado').style.color = "green"; // Opcional: Cambia el color de texto
      document.getElementById('descripcion').textContent = palabras[flag].descripcion;  
      flag++;
      setTimeout(mostrarProximaPalabra, 1500);
  } else {
      intentos++;
      if (intentos < maxIntentos) {
          document.getElementById('resultado').textContent = `Incorrecto, intenta de nuevo. Intentos restantes: ${maxIntentos - intentos}`;
          document.getElementById('resultado').style.color = "red"; // Opcional: Cambia el color de texto
      } else {
          document.getElementById('resultado').textContent = "Lo siento, has alcanzado el número máximo de intentos.";
          document.getElementById('resultado').style.color = "red"; // Opcional: Cambia el color de texto
          document.getElementById('palabraIngresada').style.display = 'none';
          document.getElementById('enviarPalabra').style.display = 'none';
      }
  }
});



document.getElementById('reiniciarJuego').addEventListener('click', () => {
  flag = 0;
  intentos = 0;
  document.getElementById('bienvenida').style.display = 'block';
  document.getElementById('pantallaJuego').style.display = 'none';
  document.getElementById('palabraIngresada').style.display = 'block';
  document.getElementById('enviarPalabra').style.display = 'block';
  document.getElementById('felicitaciones').style.display = 'none';
  mostrarProximaPalabra();
});

document.getElementById('reiniciarJuegoBienvenida').addEventListener('click', () => {
  flag = 0;
  intentos = 0;
  document.getElementById('bienvenida').style.display = 'block';
  document.getElementById('pantallaJuego').style.display = 'none';
  document.getElementById('palabraIngresada').style.display = 'block';
  document.getElementById('enviarPalabra').style.display = 'block';
  document.getElementById('felicitaciones').style.display = 'none';
  mostrarProximaPalabra();
});
