// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ella sabía que él sabía", time: 0.1 },
  { text: "Que algún día pasaría", time: 2 },
  { text: "Que vendría a buscarla", time: 4 },
  { text: "Con sus flores amarillas", time: 7 },
  { text: "No te apures, no detengas", time: 12 },
  { text: "El instante del encuentro", time: 14 },
  { text: "Está dicho que es un hecho", time: 16 },
  { text: "No la pierdas, no hay derecho", time: 18 },
  { text: "No te olvides", time: 20 },
  { text: "que la vida", time: 22 },
  { text: "Casi nunca", time: 23 },
  { text: "está dormida", time: 25 },
  { text: "En ese bar tan desierto ", time: 47 },
  { text: "nos esperaba el encuentro", time: 49 },
  { text: "Ella llegó en limusina", time: 54 },
  { text: "amarilla por supuesto", time: 57 },
  { text: "Él se acercó de repente", time: 62 },
  { text: "la miró tan de frente", time: 65 },
  { text: "Toda una vida soñada", time: 70 },
  { text: "y no pudo decir nada", time: 72 },
  { text: "Ella sabía que él sabía", time: 77 },
  { text: "Que algún día pasaría", time: 79 },
  { text: "Que vendría a buscarla", time: 81 },
  { text: "Con sus flores amarillas", time: 84 },
  { text: "No te apures, no detengas", time: 89 },
  { text: "El instante del encuentro", time: 91 },
  { text: "Está dicho que es un hecho", time: 93 },
  { text: "No la pierdas, no hay derecho", time: 95 },
  { text: "No te olvides", time: 97 },
  { text: "que la vida", time: 99 },
  { text: "Casi nunca", time: 101 },
  { text: "está dormida", time: 103 },
];

// Función para animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime; // Tiempo actual del audio
  var currentLine = lyricsData.find(line => currentTime >= line.time && currentTime < line.time + 2); // Mostrar cada línea durante 4 segundos

  if (currentLine) {
    // Calcular opacidad para un efecto de fade-in
    var timeSinceStart = currentTime - currentLine.time;
    var fadeInDuration = 0.5; // Duración del fade-in en segundos
    var opacity = Math.min(1, timeSinceStart / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablecer la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualizar las letras cada 100 ms para más precisión
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
