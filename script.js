// Configuración de estaciones y horarios


//✨Lunes✨Martes✨Miércoles✨Jueves✨Viernes✨


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
    endTime: "07:05:00",
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
    endTime: "08:03:00",
    station: {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break Music",
    days: [1, 2, 3, 4, 5],
  },




  {
    startTime: "08:03:00",
    endTime: "08:56:00",
    station:  {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Programa N°4",
    days: [1, 2, 3, 4, 5],
  },




  {
    startTime: "08:56:00",
    endTime: "09:00:00",
    station:{
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
    station:  {
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
    station:  {
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
    station:   {
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
    station:  {
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
    station:   {
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
    station:  {
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
    station:   {
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
    station:  {
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
    station:   {
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
    station:  {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
       logo: "/assets/RadioVida.jpg"
    },
    programName: "Vientos De Vida",
    days: [1, 2, 3, 4, 5],
  },




  {
    startTime: "18:00:00",
    endTime: "19:00:00",
    station: {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
       logo: "/assets/RadioVida.jpg"
    },
    programName: "Encuentro Latinoamericano",
    days: [1, 3],
  },




  {
    startTime: "18:00:00",
    endTime: "19:00:00",
    station:   {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
      logo: "/assets/RadioBethel.jpg"
    },
    programName: "Praise The Lord",
    days: [2, 4, 5],
  },




  {
    startTime: "19:00:00",
    endTime: "23:59:59",
    station:  {
    name: "Al Fin Radio",
    url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
    logo: "/assets/RadioAlFin.jpg"
  },
    programName: "Programa Final",
    days: [1, 2, 3, 4, 5],
  },






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  //Fin de Semana - ✨Sabado✨





  {
    startTime: "07:00:00",
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
    endTime: "14:00:00",
    station:  {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
    programName: "Break con Dios",
    days: [6],
  },




  {
    startTime: "14:00:00",
    endTime: "15:00:00",
    station:  {
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
    station:   {
    name: "Al Fin Radio",
    url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
    logo: "/assets/RadioAlFin.jpg"
  },
    programName: "Programa Final",
    days: [6],
  },





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  //Fin de Semana - ✨Domingo✨




  {
    startTime: "08:00:00",
    endTime: "10:30:00",
    station:  {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
    programName: "Culto N°1",
    days: [0],
  },




  {
    startTime: "10:30:00",
    endTime: "11:00:00",
    station:  {
    name: "Al Fin Radio",
    url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
    logo: "/assets/RadioAlFin.jpg"
  },
    programName: "Break Music",
    days: [0],
  },




  {
    startTime: "11:00:00",
    endTime: "13:00:00",
    station:  {
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
    station:  {
    name: "Al Fin Radio",
    url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
    logo: "/assets/RadioAlFin.jpg"
  },
    programName: "Undefined",
    days: [0],
  }




];


const stations = [

  {
      name: "Radio Vida",
      url: "https://radio.transmite.pe/9318/stream",
       logo: "/assets/RadioVida.jpg"
    },
  {
      name: "Radio Nueva Luz",
      url: "https://conectperu.com/8324/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
 {
      name: "Radio Bethel",
      url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
      logo: "/assets/RadioBethel.jpg"
    },
  {
      name: "Radio Unión Cristiana",
      url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
      logo: "/assets/RadioUnionCristiana.jpg"
    },
  {
      name: "Radio La Unción",
      url: "https://jml-stream.com:8010/app.aac",
      logo: "/assets/RadioLaUncion.jpg"
    },
  {
      name: "Radio DiospySuyana",
      url: "https://cast2.my-control-panel.com/proxy/diospis1/stream",
      logo: "/assets/RadioDiospysuyana.jpg"
    },
 {
      name: "Radio Nueva Luz Complemento",
      url: "https://conectperu.com/8338/stream",
      logo: "/assets/RadioNuevaLuz.jpg"
    },
   {
    name: "Al Fin Radio",
    url: "https://stream-176.zeno.fm/bwxzzkkuhchvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJid3h6emtrdWhjaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InhzeU1NX3g4UXN5UTc1S3Y3aHpnaFEiLCJpYXQiOjE3NDY0MTU4NTksImV4cCI6MTc0NjQxNTkxOX0.J89a5kpQ0yYFvIYQ6kawcdU__Tz44n0j3sqPLHV4gVI",
    logo: "/assets/RadioAlFin.jpg"
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
      updateProgramTitle(station.name, null, "", false);
      updateModeIndicator(); // Actualizar el indicador de modo
      updateMediaSession(station); // <-- Añade esto
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
  updateMediaSession(station); // Actualizar la sesión de medios
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
      if (radioPlayer.src !== scheduled.station.url || (!isPlaying && !radioPlayer.paused)) {
        playStation(scheduled.station);
        updateMediaSession(scheduled.station); // <-- Añade esto
      }
      updateProgramTitle(
        scheduled.station.name,
        scheduled.endTime,
        scheduled.programName,
        true // Mostrar nombre del programa
      );
      // Ejemplo en modo automático:
      updateMediaSession(scheduled.station, scheduled.programName);
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
  // Eliminar el mensaje si existe
  const userMessage = document.getElementById("userMessage");
  if (userMessage) {
    userMessage.remove();
  }

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
radioPlayer.addEventListener("error", tryReconnect);
radioPlayer.addEventListener("stalled", tryReconnect); // opcional, por si el buffer se queda vacío
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
  const programTitle = document.getElementById("programTitle");

 
  // Insertar el mensaje debajo del título del programa
  programTitle.insertAdjacentElement("afterend", userMessage);

  if (scheduled) {
    radioPlayer.src = scheduled.station.url;
    radioPlayer.play().then(() => {
      updateProgramTitle(scheduled.station.name, scheduled.endTime);
      playPauseIcon.src =
        "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
      userMessage.remove(); // Eliminar el mensaje si la reproducción automática funciona
      updateMediaSession(scheduled.station); // <-- Añade esto
    }).catch(() => {
      console.log("Reproducción automática bloqueada.");
    });
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
  const stationsList = document.querySelectorAll("#stationList li");
  if (stationsList.length > 1) { // Debe haber al menos 2 estaciones para evitar bucle infinito
    let randomIndex;
    let randomStation;
    let currentSrc = radioPlayer.src;

    // Buscar una estación diferente a la actual
    do {
      randomIndex = Math.floor(Math.random() * stationsList.length);
      randomStation = stations[randomIndex];
    } while (randomStation.url === currentSrc.replace(/^https?:\/\//, "") && stationsList.length > 1);

    // Buscar el elemento <li> correspondiente y hacer click
    const li = Array.from(stationsList).find(li => li.textContent === randomStation.name);
    if (li) li.click();

    // Actualizar el modo en el indicador
    const modeIndicator = document.getElementById("modeIndicator");
    modeIndicator.textContent = "Modo: Aleatorio";
  }
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










function updateMediaSession(station, programName = "") {
  if ('mediaSession' in navigator && station) {
    const pageTitle = document.title || "Radio Online";
    let artistText = "";

    // Solo mostrar "Radio Online" en modo manual
    if (isManualSelection) {
      artistText = "Radio Online";
    } else if (programName && programName.trim() !== "") {
      artistText = programName;
    } else {
      artistText = "";
    }

    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: station.name,
      artist: artistText,
      album: "",
      artwork: [
        { src: station.logo || 'https://img.icons8.com/ios-filled/100/000000/radio.png', sizes: '512x512', type: 'image/png' }
      ]
    });
    // Botón pausa
    navigator.mediaSession.setActionHandler('pause', () => {
      radioPlayer.pause();
    });
    // Botón detener
    navigator.mediaSession.setActionHandler('stop', () => {
      radioPlayer.pause();
      radioPlayer.currentTime = 0;
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  }
}










function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}











// Control del preloader y mensaje de bloqueo
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const preloaderMsg = document.getElementById("preloaderMsg");
  const preloaderOk = document.getElementById("preloaderOk");
  const scheduled = getScheduledStation();

  if (scheduled) {
    radioPlayer.src = scheduled.station.url;
    radioPlayer.play().then(() => {
      // Reproducción automática exitosa
      hidePreloader();
      updateProgramTitle(scheduled.station.name, scheduled.endTime);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
      updateMediaSession(scheduled.station);
    }).catch(() => {
      // Bloqueo de reproducción automática
      preloaderMsg.textContent = "La reproducción automática fue bloqueada. Por favor, haga clic en el botón de Play/Pause para iniciar la reproducción.";
      preloaderOk.style.display = "inline-block";
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  } else {
    updateProgramTitle(null, null);
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
    hidePreloader();
  }

  // Botón OK para cerrar el preloader manualmente
  preloaderOk.addEventListener("click", hidePreloader);
});











// Ocultar preloader cuando el audio comience a reproducirse (por si el usuario da play manual)
radioPlayer.addEventListener("play", hidePreloader);











// También ocultar si el usuario selecciona una estación manualmente
stationList.addEventListener("click", hidePreloader);










window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const preloaderMsg = document.getElementById("preloaderMsg");
  const preloaderStart = document.getElementById("preloaderStart");
  const scheduled = getScheduledStation();

  function iniciarRadio() {
    if (scheduled) {
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        hidePreloader();
        updateProgramTitle(scheduled.station.name, scheduled.endTime);
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station);
      }).catch(() => {
        // Si aún falla, solo oculta el preloader
        hidePreloader();
      });
    } else {
      updateProgramTitle(null, null);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
      hidePreloader();
    }
  }

  if (scheduled) {
    radioPlayer.src = scheduled.station.url;
    radioPlayer.play().then(() => {
      // Reproducción automática exitosa
      hidePreloader();
      updateProgramTitle(scheduled.station.name, scheduled.endTime);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
      updateMediaSession(scheduled.station);
    }).catch(() => {
      // Bloqueo de reproducción automática
      preloaderMsg.textContent = "La reproducción automática ha sido bloqueada por el navegador. Por favor, haz clic en el botón Iniciar para comenzar la reproducción.";
      preloaderStart.style.display = "inline-block";
      preloaderStart.onclick = iniciarRadio;
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  } else {
    updateProgramTitle(null, null);
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
    hidePreloader();
  }
});











// Ocultar preloader cuando el audio comience a reproducirse (por si el usuario da play manual)
radioPlayer.addEventListener("play", hidePreloader);






// También ocultar si el usuario selecciona una estación manualmente
stationList.addEventListener("click", hidePreloader);






function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}






// --- INICIALIZACIÓN ÚNICA Y CONTROL DE PRELOADER ---
window.addEventListener("load", () => {
  renderStationList();
  checkSchedule();
  updateNextEvent();
  renderTodaySchedule();
  updateCurrentDayIndicator();

  const preloader = document.getElementById("preloader");
  const preloaderMsg = document.getElementById("preloaderMsg");
  const preloaderStart = document.getElementById("preloaderStart");
  const scheduled = getScheduledStation();

  function hidePreloaderAndUpdate() {
    hidePreloader();
    updateNextEvent();
    renderTodaySchedule();
    updateCurrentDayIndicator();
  }

  function iniciarRadio() {
    if (scheduled) {
      radioPlayer.src = scheduled.station.url;
      radioPlayer.play().then(() => {
        hidePreloaderAndUpdate();
        updateProgramTitle(scheduled.station.name, scheduled.endTime);
        playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
        isPlaying = true;
        updateMediaSession(scheduled.station);
      }).catch(() => {
        hidePreloaderAndUpdate();
      });
    } else {
      updateProgramTitle(null, null);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
      hidePreloaderAndUpdate();
    }
  }

  if (scheduled) {
    radioPlayer.src = scheduled.station.url;
    radioPlayer.play().then(() => {
      hidePreloaderAndUpdate();
      updateProgramTitle(scheduled.station.name, scheduled.endTime);
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/pause.png";
      isPlaying = true;
      updateMediaSession(scheduled.station);
    }).catch(() => {
      preloaderMsg.textContent = "La reproducción automática ha sido bloqueada por el navegador. Por favor, haz clic en el botón Iniciar para comenzar la reproducción.";
      preloaderStart.style.display = "inline-block";
      preloaderStart.onclick = iniciarRadio;
      playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
      isPlaying = false;
    });
  } else {
    updateProgramTitle(null, null);
    playPauseIcon.src = "https://img.icons8.com/ios-filled/50/000000/play.png";
    isPlaying = false;
    hidePreloaderAndUpdate();
  }
});
















// Ocultar preloader cuando el audio comience a reproducirse (por si el usuario da play manual)
radioPlayer.addEventListener("play", hidePreloader);






// También ocultar si el usuario selecciona una estación manualmente
stationList.addEventListener("click", hidePreloader);






function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
}







function tryReconnect() {
  const scheduled = getScheduledStation();
  if (!scheduled || !scheduled.station || !scheduled.station.url) return;

  console.warn("Desconexión detectada. Intentando reconectar...");
  setTimeout(() => {
    if (radioPlayer.paused || radioPlayer.readyState < 3) {
      console.log("Reconectando a " + scheduled.station.name);
      radioPlayer.src = scheduled.station.url + "?t=" + Date.now(); // Forzar recarga
      radioPlayer.load();
      radioPlayer.play().catch((e) => {
        console.warn("Error al reproducir tras reconexión:", e);
      });
    }
  }, 1000); // Esperar 1 segundo antes de intentar reconexión
}
//😁👍
//////////////////////////////////////////////////////////////////////////////////////////////////////////
