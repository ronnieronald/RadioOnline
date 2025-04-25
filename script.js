 // Configuración de estaciones y horarios (con segundos)
 const schedule = [
    {
  startTime: "04:00:03",
  endTime: "05:56:00",
  station: {
    name: "Radio Vida",
    url: "https://radio.transmite.pe/9318/stream",
  },
},
{
  startTime: "05:56:03",
  endTime: "06:00:00",
  station: {
    name: "Radio La Unción",
    url: "https://jml-stream.com:8010/app.aac",
  },
},
{
  startTime: "06:00:03",
  endTime: "06:56:00",
  station: {
    name: "Radio Vida",
    url: "https://radio.transmite.pe/9318/stream",
  },
},
{
  startTime: "06:56:03",
  endTime: "07:00:00",
  station: {
    name: "Radio La Unción",
    url: "https://jml-stream.com:8010/app.aac",
  },
},
{
  startTime: "07:00:03",
  endTime: "07:10:00",
  station: {
    name: "Radio Vida",
    url: "https://radio.transmite.pe/9318/stream",
  },
},
{
  startTime: "07:10:03",
  endTime: "07:56:00",
  station: {
    name: "Radio Unión Cristiana",
    url: "https://stream-159.zeno.fm/6u0yyg3fwqruv",
  },
},
{
  startTime: "07:56:03",
  endTime: "08:00:00",
  station: {
    name: "Radio La Unción",
    url: "https://jml-stream.com:8010/app.aac",
  },
},
{
  startTime: "08:00:03",
  endTime: "12:00:00",
  station: {
    name: "Radio Nueva Luz",
    url: "https://conectperu.com/8324/stream",
  },
},
{
  startTime: "12:00:03",
  endTime: "13:00:00",
  station: {
    name: "Radio Mas Vida",
    url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
  },
},
{
  startTime: "13:00:03",
  endTime: "14:00:00",
  station: {
    name: "Radio Vida",
    url: "https://radio.transmite.pe/9318/stream",
  },
},
{
  startTime: "14:00:03",
  endTime: "15:00:00",
  station: {
    name: "Radio La Unción",
    url: "https://jml-stream.com:8010/app.aac",
  },
},
{
  startTime: "15:00:03",
  endTime: "16:00:00",
  station: {
    name: "Radio Mas Vida",
    url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
  },
},
{
  startTime: "16:00:03",
  endTime: "17:00:00",
  station: {
    name: "Radio Nueva Luz",
    url: "https://conectperu.com/8324/stream",
  },
},
{
    startTime: "17:00:03",
    endTime: "18:00:00",
    station: {
      name: "Radio Vida",
      url: "https://conectperu.com/8324/stream",
    },
  },
{
  startTime: "18:00:03",
  endTime: "19:00:00",
  station: {
    name: "Radio Bethel",
    url: "https://alfa.betheltv.tv/radiobethel/1/icecast.audio",
  },
     },




{
  startTime: "19:00:03",
  endTime: "23:59:59",
  station: {
    name: "Radio Mas Vida",
    url: "https://masvida.radionline.com.es/listen/m%C3%A1s_vida_rock_and_pop/radio.mp3",
  },
     },

     {
        startTime: "00:00:03",
        endTime: "04:00:00",
        station: {
          name: "Radio La Unción",
          url: "https://jml-stream.com:8010/app.aac",
        },
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
    ];

    const radioPlayer = document.getElementById("radioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const playPauseIcon = document.getElementById("playPauseIcon");
    const currentStationDiv = document.getElementById("currentStation");
    const stationList = document.getElementById("stationList");
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
        programTitle.textContent = "Radio Programada";
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
      return schedule.find((s) => {
        const startSeconds = timeToSeconds(s.startTime);
        const endSeconds = timeToSeconds(s.endTime);
        return currentSeconds >= startSeconds && currentSeconds < endSeconds;
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

      // Encontrar el próximo evento
      const nextEvent = schedule.find((s) => {
        const startSeconds = timeToSeconds(s.startTime);
        return startSeconds > currentSeconds;
      });

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

    // Inicializar
    renderStationList();
    checkSchedule();

    // Verificar el horario cada segundo para transiciones instantáneas
    setInterval(checkSchedule, 1000);

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
    });

    document.getElementById("scrollToTopButton").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Desplazamiento suave
      });
    });