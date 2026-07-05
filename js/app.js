/* ==========================================================================
   RUTINAGYM — app.js
   Una sola fuente de datos (RUTINA) + funciones que dibujan cada página.

   VIDEOS: el botón "Ver video" siempre abre YouTube en una pestaña nueva.
   Si el campo "video" tiene un ID de YouTube, abre ese video directo.
   Si lo dejas en null, abre una búsqueda de YouTube con el nombre del
   ejercicio (así siempre hay algo útil que ver, sin arriesgar un enlace
   roto o desactualizado). Para fijar un video específico, copia el ID
   que va después de "v=" en la URL del video, por ejemplo:
   video: "dQw4w9WgXcQ"

   FOTOS: cada tarjeta busca automáticamente img/diaN/nombre-del-ejercicio.jpg
   (ver img/README.md). Si no existe, se muestra un ícono de cámara.
   ========================================================================== */

const RUTINA = {
  1: {
    titulo: "Cuádriceps + Glúteos",
    color: "#ff6b5b",
    icon: "bi-lightning-charge-fill",
    tags: ["Cuádriceps", "Glúteos", "Abdomen", "Cardio"],
    calentamiento: {
      duracion: "10 minutos",
      items: [
        { nombre: "Movilidad de cadera", series: "2-3 minutos", video: null },
        { nombre: "Sentadillas sin peso", series: "15 reps, aguantando de 3 a 5 segundos abajo", video: null },
        { nombre: "Puentes de glúteo", series: "15 reps", video: null }
      ]
    },
    ejercicios: [
      { nombre: "Hip Thrust en máquina", series: "4x10-12", nota: "Primer ejercicio porque queremos priorizar glúteos. Hacer en maquina o con barra libre.", video: null },
      { nombre: "Sentadilla en Smith", series: "4x8-10", nota: "Profundidad cómoda. Controlar la bajada.", video: null },
      { nombre: "Prensa 45°", series: "3x10-12", nota: "Pies ligeramente altos para involucrar glúteo.", video: null },
      { nombre: "Sentadilla Perfecta", series: "3x12", nota: "Ritmo controlado.", video: null },
      { nombre: "Bulgarian Split Squat con mancuernas", series: "3x10 por pierna", nota: "La tensión debe sentirse en los glúteos.", video: null },
      { nombre: "Elevaciones de pantorrilla",nota:"En máquina o con mancuernas", series: "4x15-20", video: null }
    ],
    abdomen: [
      { nombre: "Crunch en suelo", series: "3x15", video: null },
      { nombre: "Plancha", series: "3x40 segundos", video: null }
    ],
    cardio: "10-15 minutos"
  },
  2: {
    titulo: "Tren superior",
    color: "#3fc1c9",
    icon: "bi-arrow-up-circle-fill",
    tags: ["Espalda", "Pecho", "Hombros", "Brazos", "Abdomen"],
    calentamiento: {
      duracion: "5 minutos",
      items: [
        { nombre: "Movilidad de hombros en polea", series: "5 minutos", video: null }
      ]
    },
    ejercicios: [
      { nombre: "Remo con barra Z agarre prono (palmas hacia abajo)", series: "4x10", grupo: "Espalda", video: null,nota:"Agarre prono para involucrar más la espalda. No olvidar la contracción de la espalda en el punto más alto." },
      { nombre: "Remo sentado en polea agarre neutro", series: "4x10", grupo: "Espalda", video: null },
      { nombre: "Remo con mancuerna", series: "3x12", grupo: "Espalda", video: null },
      { nombre: "Press plano con barra o mancuerna", series: "3x10", grupo: "Pecho", video: null, nota:"Si se hace con barra, el agarre al mismo ancho de los hombros. Si se hace con mancuernas, bajar hasta que los codos queden a 90°." },
      { nombre: "Press inclinado con mancuernas", series: "3x12", grupo: "Pecho", video: null },
      { nombre: "Press militar con mancuernas", series: "3x10", grupo: "Hombros", video: null },
      { nombre: "Elevaciones laterales", series: "3x15", grupo: "Hombros", video: null },
      { nombre: "Curl en predicador", series: "3x12", grupo: "Bíceps", video: null, nota:"Con mancuernas o barra Z. Evitar balanceo del cuerpo." },
      { nombre: "Extensión en polea", series: "3x12", grupo: "Tríceps", video: null, nota:"Evitar balanceo del cuerpo. Mantener codos pegados al torso SIEMPRE." },
      { nombre: "Extensión sobre cabeza con cuerda", series: "3x12", grupo: "Tríceps", video: null, nota:"Estirar el brazo completamente en la contracción." }
    ],
    abdomen: [
      { nombre: "Elevaciones de piernas", series: "3x15", video: null },
      { nombre: "Crunch bicicleta", series: "3x20", video: null },
      { nombre: "Plancha lateral", series: "3x30 segundos por lado",nota: "Torso siempre recto", video: null }
    ],
    cardio: "15 minutos"
  },
  3: {
    titulo: "Glúteos + Femorales",
    color: "#f2a93b",
    icon: "bi-fire",
    tags: ["Glúteos", "Femorales", "Abdomen", "Cardio"],
    calentamiento: {
      duracion: "igual que el Día 1",
      items: [
        { nombre: "Movilidad de cadera", series: "2-3 minutos", video: null },
        { nombre: "Sentadillas sin peso", series: "15 reps, aguantando de 3 a 5 segundos abajo", video: null },
        { nombre: "Puentes de glúteo", series: "15 reps", video: null }
      ]
    },
    ejercicios: [
      { nombre: "Hip Thrust Máquina", series: "5x8-10", nota: "Más pesado que el lunes.", video: null },
      { nombre: "Peso muerto rumano con barra", series: "4x10", nota: "Cuidar la espalda baja, el enfoque se debe sentir en los glúteos.", video: null },
      { nombre: "Prensa Hack", series: "4x10", nota: "Pies altos y abiertos.", video: null },
      { nombre: "Pull Through en polea", series: "3x15", nota: "Ejercicio aislante, o sea solo se trabaja el glúteo.", video: null },
      { nombre: "Patada de glúteo en polea", series: "3x10-15 por pierna", nota: "Pesado", video: null },
      { nombre: "Abducción en máquina", series: "4x10-15", nota: "Quemar el glúteo al final, lo más pesado posible.", video: null },
      { nombre: "Pantorrillas sobre step o disco", series: "4x15-20 POR PIERNA", nota: "Bajar lentamente y todo lo que se pueda, con una mano en el apoyo y la otra con la mancuerna, la mancuerna va en la misma mano del pie que se trabaja", video: null }
    ],
    abdomen: [
      { nombre: "Crunch en suelo", series: "3x15", video: null },
      { nombre: "Plancha", series: "3x45 segundos", video: null }
    ],
    cardio: "10-15 minutos"
  },
  4: {
    titulo: "Superior + Glúteo",
    color: "#d65db1",
    icon: "bi-shuffle",
    tags: ["Espalda", "Hombros", "Glúteos", "Postura"],
    intro: "Queremos mantener el trabajo de arriba pero darle un estímulo extra al glúteo.",
    calentamiento: {
      duracion: "5-10 minutos",
      items: [
        { nombre: "Movilidad de hombros en polea", series: "3-4 minutos", video: null },
        { nombre: "Movilidad de cadera", series: "3-4 minutos", video: null }
      ]
    },
    ejercicios: [
      { nombre: "Remo con barra Z agarre prono (palmas hacia abajo)", series: "3x12", video: null },
      { nombre: "Remo sentado en polea agarre neutro", series: "3x12", video: null },
      { nombre: "Press inclinado con mancuernas",nota:"Mas pesado que el dia 2", series: "3x10", video: null },
      { nombre: "Elevaciones laterales", series: "3x15", video: null },
      { nombre: "Face Pull con cuerda", series: "3x15", nota: "Muy importante para la postura.", video: null },
      { nombre: "Hip Thrust ligero", series: "3x15", nota: "Solo para aumentar volumen semanal.", video: null },
      { nombre: "Zancadas caminando con mancuernas", series: "3x12 por pierna", video: null },
      { nombre: "Patada de glúteo polea", series: "3x15", video: null }
    ],
    abdomen: [
      { nombre: "Elevaciones de piernas", series: "3x15", video: null },
      { nombre: "Crunch en suelo", series: "3x15", video: null },
      { nombre: "Plancha", series: "3x1 minuto", video: null }
    ],
    cardio: "15-20 minutos"
  }
};

const STORAGE_KEY = "rutinagym_progress";

/* ---------- utilidades ---------------------------------------------------- */
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
function toggleId(id) {
  const p = getProgress();
  p[id] = !p[id];
  saveProgress(p);
  return p[id];
}

function youtubeSearchUrl(nombre) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(nombre + " ejercicio técnica");
}
function youtubeWatchUrl(videoId) {
  return "https://www.youtube.com/watch?v=" + videoId;
}

function countDayTotal(dia) {
  const d = RUTINA[dia];
  return d.calentamiento.items.length + d.ejercicios.length + d.abdomen.length + 1;
}
function countDayDone(dia, progress) {
  let n = 0;
  Object.keys(progress).forEach(k => {
    if (progress[k] && k.startsWith(`d${dia}-`)) n++;
  });
  return n;
}

/* ==========================================================================
   Render: página de un día
   ========================================================================== */
function initDayPage(dia) {
  const data = RUTINA[dia];
  document.body.classList.add(`day-${dia}`);

  renderCalentamiento(dia, data);
  renderEjercicios(dia, data);
  renderAbdomen(dia, data);
  renderCardio(dia, data);

  updateSessionProgress(dia);

  const resetBtn = document.getElementById("reset-day");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const p = getProgress();
      Object.keys(p).forEach(k => { if (k.startsWith(`d${dia}-`)) delete p[k]; });
      saveProgress(p);
      document.querySelectorAll(".check-toggle").forEach(btn => setToggleState(btn, false));
      document.querySelectorAll(".exercise-card").forEach(el => el.classList.remove("is-done"));
      updateSessionProgress(dia);
    });
  }

  observeReveals();
}

function setToggleState(btn, checked) {
  btn.classList.toggle("checked", checked);
  btn.setAttribute("aria-pressed", checked ? "true" : "false");
  const icon = btn.querySelector(".bi");
  if (icon) icon.className = "bi " + (checked ? "bi-check-circle-fill" : "bi-circle");
}

function makeToggle(id, onChange) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "check-toggle";
  btn.dataset.id = id;
  btn.setAttribute("aria-label", "Marcar como completado");
  btn.innerHTML = '<i class="bi bi-circle"></i>';
  const progress = getProgress();
  setToggleState(btn, !!progress[id]);
  btn.addEventListener("click", () => {
    const checked = toggleId(id);
    setToggleState(btn, checked);
    if (onChange) onChange(checked);
  });
  return btn;
}

/* ---- tarjeta reutilizable: sirve para calentamiento, ejercicios y abdomen -- */
function buildExerciseCard(dia, prefix, i, ex) {
  const id = `d${dia}-${prefix}-${i}`;
  const slug = slugify(ex.nombre);
  const imgPath = `../img/dia${dia}/${slug}.jpg`;

  const card = document.createElement("div");
  card.className = "exercise-card reveal";
  if (getProgress()[id]) card.classList.add("is-done");

  const top = document.createElement("div");
  top.className = "ex-top";

  const num = document.createElement("div");
  num.className = "ex-num font-mono";
  num.textContent = String(i + 1).padStart(2, "0");

  const thumb = document.createElement("div");
  thumb.className = "ex-thumb";
  thumb.innerHTML = '<i class="bi bi-image"></i>';
  const testImg = new Image();
  testImg.onload = () => { thumb.innerHTML = ""; const im = document.createElement("img"); im.src = imgPath; im.alt = ex.nombre; thumb.appendChild(im); };
  testImg.src = imgPath;

  const body = document.createElement("div");
  body.style.flex = "1";
  const nameRow = document.createElement("div");
  nameRow.className = "d-flex justify-content-between align-items-start gap-2";
  const name = document.createElement("p");
  name.className = "ex-name";
  name.textContent = ex.nombre;
  const toggle = makeToggle(id, (checked) => {
    card.classList.toggle("is-done", checked);
    updateSessionProgress(dia);
  });
  nameRow.appendChild(name);
  nameRow.appendChild(toggle);

  const series = document.createElement("span");
  series.className = "ex-series font-mono";
  series.textContent = ex.series;

  body.appendChild(nameRow);
  body.appendChild(series);

  top.appendChild(num);
  top.appendChild(thumb);
  top.appendChild(body);
  card.appendChild(top);

  if (ex.nota) {
    const note = document.createElement("p");
    note.className = "ex-note";
    note.textContent = ex.nota;
    card.appendChild(note);
  }

  const actions = document.createElement("div");
  actions.className = "ex-actions";

  const imgBtn = document.createElement("button");
  imgBtn.type = "button";
  imgBtn.className = "ex-btn";
  imgBtn.innerHTML = '<i class="bi bi-camera"></i> Ver foto';
  imgBtn.addEventListener("click", () => openImageModal(ex.nombre, imgPath));

  actions.appendChild(imgBtn);
  card.appendChild(actions);

  return card;
}

function renderCalentamiento(dia, data) {
  const wrap = document.getElementById("calentamiento-list");
  if (!wrap) return;
  const durEl = document.getElementById("calentamiento-duracion");
  if (durEl) durEl.textContent = data.calentamiento.duracion;

  data.calentamiento.items.forEach((ex, i) => {
    wrap.appendChild(buildExerciseCard(dia, "cal", i, ex));
  });
}

function renderEjercicios(dia, data) {
  const wrap = document.getElementById("ejercicios-list");
  if (!wrap) return;
  let lastGrupo = null;
  data.ejercicios.forEach((ex, i) => {
    if (ex.grupo && ex.grupo !== lastGrupo) {
      const label = document.createElement("div");
      label.className = "group-label reveal";
      label.textContent = ex.grupo;
      wrap.appendChild(label);
      lastGrupo = ex.grupo;
    }
    wrap.appendChild(buildExerciseCard(dia, "ex", i, ex));
  });
}

function renderAbdomen(dia, data) {
  const wrap = document.getElementById("abdomen-list");
  if (!wrap) return;
  data.abdomen.forEach((ex, i) => wrap.appendChild(buildExerciseCard(dia, "ab", i, ex)));
}

function renderCardio(dia, data) {
  const wrap = document.getElementById("cardio-box");
  if (!wrap) return;
  const id = `d${dia}-cardio`;
  wrap.innerHTML = "";
  const left = document.createElement("div");
  left.innerHTML = `<div class="label">Cardio</div><div class="value">${data.cardio}</div>`;
  const toggle = makeToggle(id, () => updateSessionProgress(dia));
  wrap.appendChild(left);
  wrap.appendChild(toggle);
}

function updateSessionProgress(dia) {
  const total = countDayTotal(dia);
  const done = countDayDone(dia, getProgress());
  const fill = document.getElementById("progress-fill");
  const meta = document.getElementById("progress-meta");
  if (fill) fill.style.width = `${total ? (done / total) * 100 : 0}%`;
  if (meta) meta.textContent = `${done} / ${total} completados`;
}

/* ==========================================================================
   Modal de foto
   ========================================================================== */
function openImageModal(nombre, imgPath) {
  const modalEl = document.getElementById("mediaModal");
  const title = document.getElementById("mediaModalLabel");
  const body = document.getElementById("mediaModalBody");
  title.textContent = nombre;
  body.innerHTML = "";

  const slot = document.createElement("div");
  slot.className = "image-slot";
  slot.style.aspectRatio = "16/10";
  slot.innerHTML = '<i class="bi bi-image"></i><span>Todavía no hay foto para este ejercicio</span>';
  const testImg = new Image();
  testImg.onload = () => { slot.innerHTML = ""; const im = document.createElement("img"); im.src = imgPath; im.alt = nombre; slot.appendChild(im); };
  testImg.src = imgPath;

  body.appendChild(slot);
  new bootstrap.Modal(modalEl).show();
}

/* ==========================================================================
   Página de inicio: anillo semanal
   ========================================================================== */
function initIndexPage() {
  renderWeeklyRing();
}

function renderWeeklyRing() {
  const ring = document.getElementById("weekly-ring");
  const countEl = document.getElementById("ring-count");
  const legend = document.getElementById("ring-legend");
  if (!ring) return;

  const dias = [1, 2, 3, 4];
  const progress = getProgress();
  const totals = {};
  let totalAll = 0;
  dias.forEach(d => { totals[d] = countDayTotal(d); totalAll += totals[d]; });

  let doneAll = 0;
  let cursor = 0;
  const stops = [];
  if (legend) legend.innerHTML = "";

  dias.forEach(d => {
    const total = totals[d];
    const done = countDayDone(d, progress);
    doneAll += done;
    const share = total / totalAll * 100;
    const doneShare = total ? (done / total) * share : 0;
    const color = RUTINA[d].color;

    if (doneShare > 0) stops.push(`${color} ${cursor}% ${cursor + doneShare}%`);
    stops.push(`${hexToRgba(color, 0.16)} ${cursor + doneShare}% ${cursor + share}%`);
    cursor += share;

    if (legend) {
      const item = document.createElement("div");
      item.className = "legend-item";
      item.innerHTML = `<span class="dot" style="background:${color}"></span> Día ${d} — ${done}/${total}`;
      legend.appendChild(item);
    }
  });

  ring.style.background = `conic-gradient(${stops.join(",")})`;
  if (countEl) countEl.textContent = `${doneAll}/${totalAll}`;
}

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ==========================================================================
   Comportamiento global: navbar, scroll reveal, botón volver arriba
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-rutina");
  const toTop = document.querySelector(".to-top");

  const onScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("is-scrolled", y > 12);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-rutina .nav-link").forEach(link => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === path) link.classList.add("active");
  });

  observeReveals();
});

function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("is-visible"), idx * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}