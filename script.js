// Configuración de estaciones y horarios
const schedule = [
  {
    startTime: "00:00:00",
    endTime: "04:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Hora Cero con Jesús",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "04:00:00",
    endTime: "05:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "A Solas Con Dios",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "05:56:00",
    endTime: "06:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "06:00:00",
    endTime: "06:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Programa N°2",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "06:56:00",
    endTime: "07:06:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5, 6, 0],
  },
  {
    startTime: "07:06:00",
    endTime: "07:56:00",
    station: {
      name: "Radio Unión Cristiana",
      url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
      logo: "/assets/RadioUnionCristiana.jpg"
    },
    programName: "Fortaleza Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "07:56:00",
    endTime: "08:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:00:00",
    endTime: "08:56:00",
    station:  {
      name: "Radio La Voz Celestial",
      url: "https://stream3.rcast.net/67255",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°4",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "08:56:00",
    endTime: "09:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:00:00",
    endTime: "09:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°5",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "09:56:00",
    endTime: "10:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "10:00:00",
    endTime: "10:56:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Tus Mañanas",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "10:56:00",
    endTime: "11:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "11:00:00",
    endTime: "12:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "La Voz Celestial",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "12:00:00",
    endTime: "13:00:00",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Sing to the Lord",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "13:00:00",
    endTime: "14:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Vida Noticias",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "14:00:00",
    endTime: "14:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°10",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "14:56:00",
    endTime: "15:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:00:00",
    endTime: "15:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Jehova Es Mi Pastor",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "15:56:00",
    endTime: "16:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "16:00:00",
    endTime: "17:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°12",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "17:00:00",
    endTime: "18:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Vientos De Vida",
    days: [1, 2, 3, 4, 5],
  },
  {
    startTime: "18:00:00",
    endTime: "20:00:00",
    station: {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
    programName: "Encuentro Latinoamericano",
    days: [1, 3, 5],
  },
  {
    startTime: "18:00:00",
    endTime: "20:00:00",
    station: {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
      logo: "/assets/RadioBethel.jpg"
    },
    programName: "Praise The Lord",
    days: [2, 4],
  },
  {
    startTime: "20:00:00",
    endTime: "23:59:59",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Programa Final",
    days: [1, 2, 3, 4, 5],
  },
  // Sábado
  {
    startTime: "07:06:00",
    endTime: "08:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "El Sembrador",
    days: [6, 0],
  },
  {
    startTime: "08:00:00",
    endTime: "09:00:00",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "break",
    days: [6],
  },
  {
    startTime: "09:00:00",
    endTime: "10:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°A",
    days: [6],
  },
  {
    startTime: "10:00:00",
    endTime: "11:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa B",
    days: [6],
  },
  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio La Voz Celestial",
      url: "https://stream3.rcast.net/67255",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Revolución Juvenil",
    days: [6],
  },
  {
    startTime: "13:00:00",
    endTime: "15:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
      logo: "/assets/RadioVida.jpg"
    },
    programName: "Undefined",
    days: [6],
  },
  {
    startTime: "15:00:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Programa Final",
    days: [6],
  },
  // Domingo
  {
    startTime: "08:00:00",
    endTime: "10:20:00",
    station: {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°1",
    days: [0],
  },
  {
    startTime: "10:20:00",
    endTime: "11:00:00",
    station: {
      name: "Radio Poder Celestial",
      url: "https://stream-154.zeno.fm/tynupzcnv5quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0eW51cHpjbnY1cXV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im9Qek1GWG0tVDlDZ3ZnM2lHLVdubmciLCJpYXQiOjE3NDg0ODMxOTUsImV4cCI6MTc0ODQ4MzI1NX0.j7l_EmuxplKTjo6K-uHjDVXVmKynoNzsHPvPrbPKwwM",
      logo: "/assets/RadioPoderCelestial.jpg"
    },
    programName: "Break Music",
    days: [0],
  },
  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station: {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°2",
    days: [0],
  },
  {
    startTime: "13:00:00",
    endTime: "23:59:59",
    station: {
      name: "Al Fin Radio",
      url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
      logo: "/assets/RadioAlFin.jpg"
    },
    programName: "Undefined",
    days: [0],
  }
];

const radioPlayer = document.getElementById("radioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const programTitle = document.getElementById("programTitle");
const endTimeSpan = document.getElementById("endTime");
const nextEventTitle = document.getElementById("nextEventTitle");
const nextEventDetails = document.getElementById("nextEventDetails");
const programList = document.getElementById("programList");
const currentDayIndicator = document.getElementById("currentDayIndicator");
let isPlaying = false;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
let radioStatus = "connecting"; // "connecting", "reconnecting", "playing", "disconnected"
let isReconnecting = false;
let pausedManually = false;

// Convertir hora en formato HH:mm:ss a segundos desde medianoche
function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

// Obtener la estación programada según la hora actual
function getScheduledStation() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  return schedule.find((s) => {
    const startSeconds = timeToSeconds(s.startTime);
    const endSeconds = timeToSeconds(s.endTime);
    return (
      currentSeconds >= startSeconds &&
      currentSeconds < endSeconds &&
      s.days.includes(currentDay)
    );
  });
}

// Actualizar el título y hora de finalización
function updateProgramTitle(stationName, programName, endTime) {
  if (radioStatus === "reconnecting") {
    programTitle.innerHTML = `
      <span>${stationName || "Radio Online"}</span><br>
      <span class="program-red">Reconectando...</span>
    `;
  } else if (stationName && programName) {
    programTitle.innerHTML = `
      <span>${stationName}</span><br>
      <span class="program-black">${programName}</span>
    `;
  } else if (stationName) {
    programTitle.textContent = stationName;
  } else {
    programTitle.textContent = "Radio Online";
  }
}

// Reproducir una estación
function playStation(station) {
  radioPlayer.src = station.url;
  const playPromise = radioPlayer.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
      })
      .catch(() => {
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
        isPlaying = false;
      });
  }
  updateMediaSession(station);
}

// Actualizar la sesión de medios
function updateMediaSession(station, programName = "") {
  if ('mediaSession' in navigator && station) {
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: station.name,
      artist: programName || "Radio Online",
      album: "",
      artwork: [
        { src: station.logo || 'https://img.icons8.com/ios-filled/100/000000/radio.png', sizes: '512x512', type: 'image/png' }
      ]
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      radioPlayer.pause();
    });

    navigator.mediaSession.setActionHandler('stop', () => {
      radioPlayer.pause();
      radioPlayer.currentTime = 0;
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  }
}

// Verificar y actualizar la estación según el horario
function checkSchedule() {
  if (isReconnecting) return; // No hacer nada si está reconectando

  const scheduled = getScheduledStation();
  if (scheduled) {
    if (radioPlayer.src !== scheduled.station.url || (!isPlaying && !radioPlayer.paused)) {
      playStation(scheduled.station);
      updateMediaSession(scheduled.station, scheduled.programName);
    }
    updateProgramTitle(scheduled.station.name, scheduled.programName, scheduled.endTime);
  } else {
    radioPlayer.pause();
    radioPlayer.src = "";
    updateProgramTitle(null, null, null);
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
  }
  updateNextEvent();
  renderTodaySchedule();
}

// Actualizar el próximo evento
function updateNextEvent() {
  const now = new Date();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay();

  let nextEvent = null;
  for (let i = 0; i < 7; i++) {
    const dayToCheck = (currentDay + i) % 7;
    nextEvent = schedule.find((s) => {
      const startSeconds = timeToSeconds(s.startTime);
      return (
        s.days.includes(dayToCheck) &&
        (i === 0 ? startSeconds > currentSeconds : true)
      );
    });
    if (nextEvent) break;
  }

  nextEventTitle.textContent = "Próximo evento:";
  nextEventTitle.classList.remove("blink-red");

  if (nextEvent) {
    nextEventDetails.textContent = nextEvent.programName || "Sin nombre";
    // Si faltan menos de 2 minutos (120 segundos) para el próximo evento, parpadea en rojo
    const nextStartSeconds = timeToSeconds(nextEvent.startTime);
    let secondsToNext = nextStartSeconds - currentSeconds;
    if (secondsToNext < 0) secondsToNext += 24 * 3600; // Por si es el siguiente día
    if (secondsToNext <= 60) {
      nextEventTitle.classList.add("blink-red");
    }
  } else {
    nextEventDetails.textContent = "No hay más eventos programados.";
  }
}

// Renderizar la programación del día
function renderTodaySchedule() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Mostrar el evento actual y los futuros (ocultar los pasados)
  const todaySchedule = schedule.filter((s) => {
    const endSeconds = timeToSeconds(s.endTime);
    return s.days.includes(currentDay) && endSeconds > currentSeconds;
  });

  programList.innerHTML = "";

  todaySchedule.forEach((program) => {
    const li = document.createElement("li");
    li.classList.add("program-item");

    const startSeconds = timeToSeconds(program.startTime);
    const endSeconds = timeToSeconds(program.endTime);
    const isCurrent = currentSeconds >= startSeconds && currentSeconds < endSeconds;

    const programDisplayName = program.programName
      ? `${program.station.name} - ${program.programName}`
      : program.station.name;

    li.innerHTML = `
      <span class="program-name">${programDisplayName}</span>
      <span class="program-time">
        ${
          isCurrent
            ? `<span id="waveLoader">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
               </span>`
            : program.startTime
        }
      </span>
    `;
    programList.appendChild(li);
  });

  if (todaySchedule.length === 0) {
    const li = document.createElement("li");
    programList.appendChild(li);
  }
}

// Actualizar el indicador del día actual
function updateCurrentDayIndicator() {
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  currentDayIndicator.textContent = daysOfWeek[new Date().getDay()];
}

// Manejar el botón de reproducir/pausar
playPauseButton.addEventListener("click", () => {
     if (radioPlayer.paused) {
       pausedManually = false;
       const scheduled = getScheduledStation();
       if (scheduled && !radioPlayer.src) {
         playStation(scheduled.station);
       } else {
         radioPlayer.play().then(() => {
           playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
           isPlaying = true;
         });
       }
     } else {
       pausedManually = true;
       radioPlayer.pause();
       playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
       isPlaying = false;
     }
   });

// Actualizar ícono cuando el audio se pausa o reproduce
radioPlayer.addEventListener("play", () => {
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
  isPlaying = true;
});
radioPlayer.addEventListener("pause", () => {
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
});

// Al iniciar la radio
radioStatus = "connecting";
updateProgramTitle();

// Cuando la radio se reproduce correctamente
radioPlayer.addEventListener("playing", () => {
  radioStatus = "playing";
  reconnectAttempts = 0;
  const scheduled = getScheduledStation();
  updateProgramTitle(scheduled?.station?.name, scheduled?.programName);
});

// Si hay error o no se puede conectar
radioPlayer.addEventListener("error", () => {
  radioStatus = "disconnected";
  const scheduled = getScheduledStation();
  updateProgramTitle(scheduled?.station?.name, scheduled?.programName);
});
radioPlayer.addEventListener("stalled", () => {
  radioStatus = "disconnected";
  const scheduled = getScheduledStation();
  updateProgramTitle(scheduled?.station?.name, scheduled?.programName);
});

// Reconexión automática si el stream se corta
radioPlayer.addEventListener("error", tryReconnect);
radioPlayer.addEventListener("stalled", tryReconnect);

function tryReconnect() {
  const scheduled = getScheduledStation();
  if (!scheduled || !scheduled.station || !scheduled.station.url) return;

  if (isReconnecting) return; // Evita múltiples reconexiones
  isReconnecting = true;

  radioStatus = "reconnecting";
  updateProgramTitle(scheduled.station.name, scheduled.programName);

  setTimeout(() => {
    radioPlayer.src = scheduled.station.url + "?t=" + Date.now();
    radioPlayer.load();
    radioPlayer.play().then(() => {
      radioStatus = "playing";
      isReconnecting = false;
      updateProgramTitle(scheduled.station.name, scheduled.programName);
    }).catch(() => {
      tryReconnect();
    });
  }, 3000);
}

// Detectar pérdida y reconexión de red
window.addEventListener("offline", () => {
     pausedManually = false;
     console.log("Conexión a la red perdida. Pausando reproducción.");
  radioPlayer.pause();
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
});

window.addEventListener("online", () => {
     if (!pausedManually) {
       tryReconnect();
     }
   });

// Manejar clics y teclado en currentDayIndicator
currentDayIndicator.addEventListener("click", () => {
  const scheduleContainer = document.getElementById("scheduleContainer");
  scheduleContainer.scrollIntoView({ behavior: "smooth", block: "start" });
});

currentDayIndicator.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Ocultar preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}

// Inicialización
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const preloaderMsg = document.getElementById("preloaderMsg");
  const preloaderStart = document.getElementById("preloaderStart");
  const scheduled = getScheduledStation();

  document.getElementById("modeIndicator").textContent = "Modo: Automático";
  updateCurrentDayIndicator();
  checkSchedule();

  function iniciarRadio() {
    if (scheduled) {
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        hidePreloader();
        updateProgramTitle(scheduled.station.name, scheduled.programName, scheduled.endTime);
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station, scheduled.programName);
      }).catch(() => {
        hidePreloader();
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
        isPlaying = false;
      });
    } else {
      updateProgramTitle(null, null, null);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
      hidePreloader();
    }
  }

  if (scheduled) {
    radioPlayer.src = scheduled.station.url;
    radioPlayer.play().then(() => {
      hidePreloader();
      updateProgramTitle(scheduled.station.name, scheduled.programName, scheduled.endTime);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
      updateMediaSession(scheduled.station, scheduled.programName);
    }).catch(() => {
      preloaderMsg.textContent = "La reproducción automática ha sido bloqueada por el navegador. Haz clic en 'Iniciar' para comenzar.";
      preloaderStart.style.display = "inline-block";
      preloaderStart.onclick = iniciarRadio;
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  } else {
    updateProgramTitle(null, null, null);
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
    hidePreloader();
  }
});

// Verificar el horario cada segundo
setInterval(() => {
  checkSchedule();
  updateCurrentDayIndicator(); // <-- Agrega esto aquí
}, 1000);
