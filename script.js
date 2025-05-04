// Configuración de estaciones y horarios (con segundos)
const schedule = [
  {
    startTime: "04:00:03",
    endTime: "05:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "A Solas Con Dios", // Nombre del programa
    days: [1, 2, 3, 4, 5, 6, 0], // Lunes a domingo
  },
  {
    startTime: "05:56:03",
    endTime: "06:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Nombre del programa
    days: [1, 2, 3, 4, 5, 6, 0], // Lunes a domingo
  },
  {
    startTime: "06:00:03",
    endTime: "06:56:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5, 6, 0], // Lunes a domingo
  },
  {
    startTime: "06:56:03",
    endTime: "07:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5, 6, 0], // Lunes a domingo
  },
  //lunes a viernes
 
  {
    startTime: "07:00:03",
    endTime: "07:56:00",
    station: {
      name: "Radio Unión Cristiana",
      url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
    },
    programName: "Fortaleza Noticias", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "07:56:03",
    endTime: "08:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "08:00:03",
    endTime: "08:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Programa N°1", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "08:56:03",
    endTime: "09:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "09:00:03",
    endTime: "09:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Programa N°2", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "09:56:03",
    endTime: "10:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "10:00:03",
    endTime: "10:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Programa N°3", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "10:56:03",
    endTime: "11:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "11:00:03",
    endTime: "12:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "La Voz Celestial", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "12:00:03",
    endTime: "13:00:00",
    station: {
      name: "Radio Mas Vida",
      url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "13:00:03",
    endTime: "14:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "Vida Noticias", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "14:00:03",
    endTime: "14:56:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Programa N°5", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "14:56:03",
    endTime: "15:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "15:00:03",
    endTime: "16:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Jehova Es Mi Pastor", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "16:00:03",
    endTime: "17:00:00",
    station: {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
    },
    programName: "Programa N°6", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "17:00:03",
    endTime: "18:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "Vientos De Vida", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "18:00:03",
    endTime: "19:00:00",
    station: {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
    },
    programName: "Praise the Lord", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
  {
    startTime: "19:00:03",
    endTime: "23:59:59",
    station: {
      name: "Radio Mas Vida",
      url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
    },
    programName: "Programa Final", // Asegúrate de que este campo esté presente
    days: [1, 2, 3, 4, 5], // Lunes a viernes
  },
 


  // Fin de semana (Sábado y Domingo)
  {
    startTime: "07:00:03",
    endTime: "08:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "El Sembrador", // Asegúrate de que este campo esté presente
    days: [6,0], // sabado y domimgo
  },

  // Sabado

  {
    startTime: "08:00:03",
    endTime: "14:00:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [6], // sabado y domimgo
  },
  {
    startTime: "14:00:03",
    endTime: "15:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [6], // sabado y domimgo
  },
  {
    startTime: "15:00:03",
    endTime: "23:59:59",
    station: {
      name: "Radio Mas Vida",
      url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [6], // sabado y domimgo
  },


  // Domingo
  
  {
    startTime: "08:00:03",
    endTime: "10:00:00",
    station: {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
    },
    programName: "Culto N°1", // Asegúrate de que este campo esté presente
    days: [0], // sabado y domimgo
  },
  {
    startTime: "10:00:03",
    endTime: "11:00:00",
    station: {
      name: "Radio Mas Vida",
      url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [0], // sabado y domimgo
  },
  {
    startTime: "11:00:03",
    endTime: "13:00:00",
    station: {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
    },
    programName: "Culto N°1", // Asegúrate de que este campo esté presente
    days: [0], // sabado y domimgo
  },
  {
    startTime: "13:00:03",
    endTime: "23:59:59",
    station: {
      name: "Radio Mas Vida",
      url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
    },
    programName: "", // Asegúrate de que este campo esté presente
    days: [0], // sabado y domimgo
  },






];

const stations = [
  {
    name: "Radio Mas Vida",
    url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
  },
  { name: "Radio Vida", url: "https://radio.transmite.pe/9318/stream" },
  { name: "Radio Nueva Luz", url: "https://conectperu.com/8324/stream" },
  {
    name: "Radio Bethel",
    url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
  },
  {
    name: "Radio Unión Cristiana",
    url: "https://stream-159.zeno.fm/6u0yyg3fwqruv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI2dTB5eWczZndxcnV2IiwiaG9zdCI6InN0cmVhbS0xNTkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IlVDMEJ2U3hRVDdtWFJrWFIxRWNYMnciLCJpYXQiOjE3NDU0MTU1NTQsImV4cCI6MTc0NTQxNTYxNH0.7VFx0sGr6IHh5R2HQm_7nAGNyqoiLLe0IZdbYFgO4WA",
  },
  {
    name: "Radio La Unción",
    url: "https://jml-stream.com:8010/app.aac",
  },
  {
    name: "Radio La Voz Celestial",
    url: "http://live.rcast.net:8568/;",
  },
  {
    name: "Radio DiospySuyana",
    url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
  },
  {
    name: "Radio Nueva Luz Complemento",
    url: "https://conectperu.com/8338/stream",
  },

  
];

const radioPlayer = document.getElementById("radioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const currentStationDiv = document.getElementById("currentStation");
const programTitle = document.getElementById("programTitle");
const endTimeSpan = document.getElementById("endTime");
let isManualSelection = false;
let isPlaying = false;

// Renderizar lista de estaciones
function renderStationList() {
  stationList.innerHTML = "";
  stations.forEach((station) => {
    const li = document.createElement("li");
    li.textContent = station.name;
    li.addEventListener("click", () => {
      playStation(station);
      isManualSelection = true;
      updateStationListUI(station.url);
      updateProgramTitle(station.name, null);
      updateModeIndicator(); // Actualizar el indicador de modo
    });
    stationList.appendChild(li);
  });
}

// Actualizar la UI de la lista de estaciones
function updateStationListUI(activeUrl) {
  Array.from(stationList.children).forEach((li) => {
    const station = stations.find((s) => s.name === li.textContent);
    li.classList.toggle("active", station.url === activeUrl);
  });
}

// Convertir hora en formato HH:mm:ss a segundos desde medianoche
function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

// Actualizar el título y hora de finalización
function updateProgramTitle(stationName, endTime) {
  if (stationName && endTime !== null) {
    programTitle.textContent = stationName;
  } else if (stationName) {
    programTitle.textContent = stationName;
  } else {
    programTitle.textContent = "Radio Online";
    endTimeSpan.textContent = "";
  }
}

// Reproducir una estación
function playStation(station) {
  radioPlayer.src = station.url;
  const playPromise = radioPlayer.play();
  if (playPromise !== undefined) {
    playPromise
      .catch((error) => {
        console.log("Reproducción automática bloqueada:", error);
        playPauseIcon.src =
          "https://img.icons8.com/ios-filled/50/000000/play.png";
        isPlaying = false;
      })
      .then(() => {
        playPauseIcon.src =
          "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
      });
  }
  updateStationListUI(station.url);
}

// Obtener la estación programada según la hora actual
function getScheduledStation() {
  const now = new Date();
  const currentSeconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay(); // Obtiene el día actual (0 = domingo, 1 = lunes, ..., 6 = sábado)

  return schedule.find((s) => {
    const startSeconds = timeToSeconds(s.startTime);
    const endSeconds = timeToSeconds(s.endTime);
    return (
      currentSeconds >= startSeconds &&
      currentSeconds < endSeconds &&
      s.days.includes(currentDay) // Verifica si el día actual está en la lista de días
    );
  });
}

// Verificar y actualizar la estación según el horario
function checkSchedule() {
  if (!isManualSelection) {
    const scheduled = getScheduledStation();
    if (scheduled) {
      if (radioPlayer.src !== scheduled.station.url || !isPlaying) {
        playStation(scheduled.station);
      }
      updateProgramTitle(scheduled.station.name, scheduled.endTime);
    } else {
      radioPlayer.pause();
      radioPlayer.src = "";
      updateProgramTitle(null, null);
      updateStationListUI(null);
      playPauseIcon.src =
        "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    }
  }
  updateNextEvent(); // Actualizar el próximo evento al verificar el horario
  // Resetear selección manual al inicio de un nuevo programa
  const now = new Date();
  const currentSeconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  schedule.forEach((s) => {
    if (
      currentSeconds === timeToSeconds(s.startTime) &&
      now.getMilliseconds() < 100
    ) {
      isManualSelection = false;
      updateModeIndicator(); // Actualizar el indicador de modo
    }
  });
}

// Controlar play/pausa con el botón personalizado
playPauseButton.addEventListener("click", () => {
  if (radioPlayer.paused) {
    const scheduled = getScheduledStation();
    if (scheduled && !radioPlayer.src) {
      playStation(scheduled.station);
    } else {
      radioPlayer.play().then(() => {
        playPauseIcon.src =
          "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
      });
    }
  } else {
    radioPlayer.pause();
    playPauseIcon.src =
      "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
  }
});

// Actualizar ícono cuando el audio se pausa o reproduce
radioPlayer.addEventListener("play", () => {
  playPauseIcon.src =
    "https://img.icons8.com/ios-filled/50/000000/pause.png";
  isPlaying = true;
});
radioPlayer.addEventListener("pause", () => {
  playPauseIcon.src =
    "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
});

function updateNextEvent() {
  const now = new Date();
  const currentSeconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const currentDay = now.getDay(); // Día actual (0 = domingo, 1 = lunes, ..., 6 = sábado)

  let nextEvent = null;

  // Buscar el próximo evento en el día actual y los días siguientes
  for (let i = 0; i < 7; i++) {
    const dayToCheck = (currentDay + i) % 7; // Día a verificar (circular)
    nextEvent = schedule.find((s) => {
      const startSeconds = timeToSeconds(s.startTime);
      return (
        s.days.includes(dayToCheck) &&
        (i === 0 ? startSeconds > currentSeconds : true) // Si es el día actual, solo buscar eventos futuros
      );
    });
    if (nextEvent) break; // Detener la búsqueda si se encuentra un evento
  }

  const nextEventTitle = document.getElementById("nextEventTitle");
  const nextEventDetails = document.getElementById("nextEventDetails");

  if (nextEvent) {
    nextEventTitle.textContent = "Próximo evento:";
    nextEventDetails.textContent = `${nextEvent.station.name} a las ${nextEvent.startTime}`;
  } else {
    nextEventTitle.textContent = "Próximo evento:";
    nextEventDetails.textContent = "No hay más eventos programados.";
  }
}

function updateModeIndicator() {
  const modeIndicator = document.getElementById("modeIndicator");
  modeIndicator.textContent = `Modo: ${isManualSelection ? "Manual" : "Automático"}`;
}

function renderTodaySchedule() {
  const now = new Date();
  const currentDay = now.getDay(); // Obtiene el día actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
  const currentSeconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const programList = document.getElementById("programList");

  // Filtra la programación para el día actual y elimina programas pasados
  const todaySchedule = schedule.filter((s) => {
    const endSeconds = timeToSeconds(s.endTime);
    return s.days.includes(currentDay) && endSeconds > currentSeconds;
  });

  // Limpia la lista
  programList.innerHTML = "";

  // Renderiza los programas
  todaySchedule.forEach((program) => {
    const li = document.createElement("li");
    li.classList.add("program-item"); // Agrega una clase para estilos

    // Resaltar el programa actual
    const startSeconds = timeToSeconds(program.startTime);
    const endSeconds = timeToSeconds(program.endTime);
    if (currentSeconds >= startSeconds && currentSeconds < endSeconds) {
      li.classList.add("current-program"); // Clase para resaltar
    }

    // Verificar si `programName` está definido
    const programDisplayName = program.programName
      ? `${program.station.name} - ${program.programName}`
      : program.station.name;

    li.innerHTML = `
      <span class="program-name">${programDisplayName}</span>
      <span class="program-time">${program.startTime}</span>
    `;
    programList.appendChild(li);
  });

  // Si no hay programas, muestra un mensaje
  if (todaySchedule.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay programación para hoy.";
    programList.appendChild(li);
  }
}

function updateCurrentDayIndicator() {
  const now = new Date();
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const currentDay = daysOfWeek[now.getDay()]; // Obtiene el día actual
  const currentDayIndicator = document.getElementById("currentDayIndicator");
  currentDayIndicator.textContent = `${currentDay}`;

  // Elimina o comenta esta parte si no deseas el desplazamiento automático
  /*
  const scheduleContainer = document.getElementById("scheduleContainer");
  scheduleContainer.scrollIntoView({
    behavior: "smooth", // Desplazamiento suave
    block: "start", // Alinear al inicio del contenedor
  });
  */
}

// Inicializar
renderStationList();
checkSchedule();

// Verificar el horario cada segundo para transiciones instantáneas
setInterval(() => {
  checkSchedule();
  renderTodaySchedule(); // Actualizar la programación dinámicamente
}, 1000);

// Intentar reproducción automática al cargar
window.addEventListener("load", () => {
  const scheduled = getScheduledStation();
  if (scheduled) {
    updateProgramTitle(scheduled.station.name, scheduled.endTime);
    playStation(scheduled.station); // Intentar reproducción automática
  } else {
    updateProgramTitle(null, null);
    playPauseIcon.src =
      "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
  }
  updateNextEvent(); // Actualizar el próximo evento al cargar
  renderTodaySchedule();
  updateCurrentDayIndicator();
});

document.getElementById("scrollToTopButton").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
});

document.getElementById("shuffleButton").addEventListener("click", () => {
  const stations = document.querySelectorAll("#stationList li");
  if (stations.length > 0) {
    const randomIndex = Math.floor(Math.random() * stations.length);
    const randomStation = stations[randomIndex];
    randomStation.click(); // Simula un clic en la emisora aleatoria
  }
  const modeIndicator = document.getElementById("modeIndicator");
  modeIndicator.textContent = "Modo: Aleatorio"; // Cambiar el texto al tocar shuffle
});

document.getElementById("scrollToStationsButton").addEventListener("click", () => {
  const stationList = document.getElementById("stationList");
  stationList.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.getElementById("currentDayIndicator").addEventListener("click", () => {
  const scheduleContainer = document.getElementById("scheduleContainer");
  scheduleContainer.scrollIntoView({
    behavior: "smooth", // Desplazamiento suave
    block: "start", // Alinear al inicio del contenedor
  });
});

document.getElementById("currentDayIndicator").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Detectar pérdida y reconexión de red
window.addEventListener("offline", () => {
  console.log("Conexión a la red perdida. Pausando reproducción.");
  radioPlayer.pause();
  playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
  isPlaying = false;
});

window.addEventListener("online", () => {
  console.log("Conexión a la red restablecida. Intentando reanudar reproducción.");
  if (!isManualSelection) {
    const scheduled = getScheduledStation();
    if (scheduled) {
      playStation(scheduled.station);
    }
  } else if (radioPlayer.src) {
    radioPlayer.play().then(() => {
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
    });
  }
});
