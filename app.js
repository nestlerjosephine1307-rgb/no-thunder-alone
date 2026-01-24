// =====================
// TIMER SETUP
// =====================
let kriseTime = 300;     // 5 Minuten
let burnoutTime = 480;  // 8 Minuten

let kriseTimer = null;
let burnoutTimer = null;

  const eventMap = {
  4: `
    <b>Feld 4</b><br><br>
    Du musst einen Vortrag vor einer größeren Menge halten und wirst nervös.
    Du spürst, wie dir schlecht wird und dir die Luft weg bleibt.<br><br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (I) aus dem Vorrat und platziere sie zwischen Feld 4 und Feld 44.<br><br>

    <b>Tipps:</b><br>
    Blickkontakt üben mit vertrauter Person<br>
    2-Minuten-Power-Walk vor der Situation<br>
    Notfallanker: Hand auf Brust + 3 Atemzüge<br>
    Atemübung 4-7-11
  `,

  44: `
    <b>Feld 44</b><br><br>
    Du spürst starken Druck und hast Angst zu versagen.<br><br>

    <b>Aufbau:</b><br>
    Verbindung (I) zwischen Feld 4 und Feld 44 bleibt bestehen.<br><br>

    <b>Tipps:</b><br>
     Blickkontakt üben mit vertrauter Person<br>
    2-Minuten-Power-Walk vor der Situation<br>
    Notfallanker: Hand auf Brust + 3 Atemzüge<br>
    Atemübung 4-7-11
  ` ,
  12: `
    <b>Feld 12</b><br><br>
    Du bist auf einer Feier mit vielen Menschen. Gespräche überlappen sich, Stimmen werden lauter und du hast das Gefühl, keinen klaren Gedanken mehr fassen zu können. Dein Herz schlägt schneller und du willst einfach nur weg.<br><br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (II) aus dem Vorrat und platziere sie zwischen Feld 12 und Feld 36! <br> <br>

    <b>Tipps:</b><br>
    Kurz nach draußen gehen und kalte Luft spüren, <br> 
    eine vertraute Person im Raum suchen und Nähe herstellen, <br> 
    Geräusche benennen: 3 Dinge hören, 2 Dinge sehen, 1 Sache fühlen, <br> 
    Langsames Ausatmen (doppelt so lang wie das Einatmen)
  `,
36: `
    <b>Feld 36</b><br><br>
    Du bist auf einer Feier mit vielen Menschen. Gespräche überlappen sich, Stimmen werden lauter und du hast das Gefühl, keinen klaren Gedanken mehr fassen zu können. Dein Herz schlägt schneller und du willst einfach nur weg.<br><br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (II) aus dem Vorrat und platziere sie zwischen Feld 12 und Feld 36!<br> <br>

    <b>Tipps:</b><br>
    Kurz nach draußen gehen und kalte Luft spüren, <br> 
    eine vertraute Person im Raum suchen und Nähe herstellen, <br> 
    Geräusche benennen: 3 Dinge hören, 2 Dinge sehen, 1 Sache fühlen, <br> 
    Langsames Ausatmen (doppelt so lang wie das Einatmen)
  `,
23: `
    <b>Feld 23</b><br><br>
    Der Tag liegt vor dir, aber selbst einfache Aufgaben wirken unüberwindbar. Dein Körper fühlt sich schwer an und selbst das Aufstehen wirkt unvorstellbar. <br> <br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (III) aus dem Vorrat und platziere sie zwischen Feld 23 und Feld 28!<br> <br>

    <b>Tipps:</b><br>
    Eine Aufgabe in den kleinsten möglichen Schritt zerlegen, <br> 
    Körper aktivieren (Stretching, kurzer Spaziergang), <br> 
    Erlaubnis geben, nicht „produktiv“ sein zu müssen, <br> 
    Unterstützung annehmen statt allein kämpfen
  `,

28: `
    <b>Feld 28</b><br><br>
    Der Tag liegt vor dir, aber selbst einfache Aufgaben wirken unüberwindbar. Dein Körper fühlt sich schwer an und selbst das Aufstehen wirkt unvorstellbar. <br> <br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (III) aus dem Vorrat und platziere sie zwischen Feld 23 und Feld 28!<br> <br>

    <b>Tipps:</b><br>
    Eine Aufgabe in den kleinsten möglichen Schritt zerlegen, <br> 
    Körper aktivieren (Stretching, kurzer Spaziergang), <br> 
    Erlaubnis geben, nicht „produktiv“ sein zu müssen, <br> 
    Unterstützung annehmen statt allein kämpfen
  `,

33: `
    <b>Feld 33</b><br><br>
    Eine dir sehr nahestehende Person ist gestorben. Alles fühlt sich unwirklich an. Gedanken kommen nur stoßweise, dein Körper ist müde und gleichzeitig angespannt. Menschen sprechen mit dir, aber ihre Worte erreichen dich kaum.
    <br> <br>
    <b>Aufbau:</b><br>
    Nimm Verbindung (IV) aus dem Vorrat und platziere sie zwischen Feld 33 und Feld 61!<br> <br>

    <b>Tipps:</b><br>
    Grundbedürfnisse sichern (Trinken, Essen, Schlaf), <br> 
    Gefühle zulassen, ohne sie erklären zu müssen, <br> 
    Einen sicheren Ort aufsuchen, <br> 
    Nach professioneller Hilfe fragen
  `,

61: `
    <b>Feld 61</b><br><br>
    Eine dir sehr nahestehende Person ist gestorben. Alles fühlt sich unwirklich an. Gedanken kommen nur stoßweise, dein Körper ist müde und gleichzeitig angespannt. Menschen sprechen mit dir, aber ihre Worte erreichen dich kaum.
    <br> <br> 
    <b>Aufbau:</b><br>
    Nimm Verbindung (IV) aus dem Vorrat und platziere sie zwischen Feld 33 und Feld 61!<br> <br>
    
    <b>Tipps:</b><br>
    Grundbedürfnisse sichern (Trinken, Essen, Schlaf), <br> 
    Gefühle zulassen, ohne sie erklären zu müssen, <br> 
    Einen sicheren Ort aufsuchen, <br> 
    Nach professioneller Hilfe fragen
  `,

41: `
    <b>Feld 41</b><br><br>
    Du hast etwas gesagt oder getan, das du nicht zurücknehmen kannst. Immer wieder spielst du die Situation im Kopf durch und wünschst dir, anders reagiert zu haben. Dein Magen zieht sich zusammen.    
    <br> <br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (V) aus dem Vorrat und platziere sie zwischen Feld 41 und Feld 50!    <br> <br>

    <b>Tipps:</b><br>
   Verantwortung anerkennen ohne Selbstabwertung, <br> 
   Entschuldigung formulieren, <br> 
   mit einer dritten Person darüber sprechen
  `,

50: `
    <b>Feld 50</b><br><br>
    Du hast etwas gesagt oder getan, das du nicht zurücknehmen kannst. Immer wieder spielst du die Situation im Kopf durch und wünschst dir, anders reagiert zu haben. Dein Magen zieht sich zusammen.    
    <br> <br>

    <b>Aufbau:</b><br>
    Nimm Verbindung (V) aus dem Vorrat und platziere sie zwischen Feld 41 und Feld 50!    <br> <br>

    <b>Tipps:</b><br>
   Verantwortung anerkennen ohne Selbstabwertung, <br> 
   Entschuldigung formulieren, <br> 
   mit einer dritten Person darüber sprechen
  `
};

const krisen = [
  "Finanznot - Jeder Spieler verliert einen Erfahrungspunkt, jeder der keinen Erfahrungspunkt hat,  muss seine Figur 3 Felder zurückziehen. Funktioniert dies nicht weil kein Plättchen mehr ausliegt, verfällt der Spieler in Burnout und das spiel ist vorbei.",
  "Schlafmangel - Das Smartphone liegt nachts neben dir. Benachrichtigungen, Gedanken, Licht. Jeder Spieler muss seine Figur 3 Felder zurückziehen. Funktioniert dies nicht weil kein Plättchen mehr ausliegt, verfällt der Spieler in Burnout und das spiel ist vorbei.",
  "Push-Benachrichtigung um 3:17 Uhr - Du wolltest schlafen. Jetzt bist du wach. Der Startspieler zieht 4 Felder zurück. Funktioniert dies nicht weil kein Plättchen mehr ausliegt, verfällt der Spieler in Burnout und das spiel ist vorbei.",
  "Langfristige Arbeitslosigkeit - Bewerbungen blieben erfolglos.Der Spieler muss sein Fähigkeits-Plättchen umdrehen und kann es eine Runde lang nicht verwenden. (Beim zweiten Zug wieder zurück drehen und verwendbar machen)",
  "Wohnungsverlust - Du musst gehen. Schnell. Der Spieler, der Aktuell an der Reihe ist muss seine Figur 3 Felder zurück ziehen. Funktioniert dies nicht weil kein Plättchen mehr ausliegt, verfällt der Spieler in Burnout und das spiel ist vorbei."
];

// =====================
// AUDIO SETUP
// =====================
let currentAudio = null;

function playAudio(src) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(src);
  currentAudio.play().catch(() => {});
}

// Feld -> Audio-Nummer (Pärchen teilen sich eine Nummer)
const fieldToAudio = {
  4: 1, 44: 1,
  12: 2, 36: 2,
  23: 3, 28: 3,
  33: 4, 61: 4,
  41: 5, 50: 5
};

function playEventAudio(field) {
  const audioNumber = fieldToAudio[field];
  if (!audioNumber) return;

  // WICHTIG: dein Audio-Ordner muss im Projekt "audio/" heißen
  // und Dateien müssen heißen: verbindung_1.mp3, verbindung_2.mp3, ...
  playAudio(`audio/verbindung_${audioNumber}.mp3`);
}

function stopAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
  currentAudio.currentTime = 0;
}

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id !== 'event') stopAudio(); // 🔇 Audio stoppen beim Screenwechsel

  if (id === 'counter') startTimers();
}


function startTimers() {
  clearInterval(kriseTimer);
  clearInterval(burnoutTimer);

  kriseTimer = setInterval(() => {
    kriseTime--;
    update('krise', kriseTime);
    if (kriseTime <= 0) triggerKrise();
  }, 1000);

  burnoutTimer = setInterval(() => {
    burnoutTime--;
    update('burnout', burnoutTime);
    if (burnoutTime <= 0) triggerBurnout();
  }, 1000);
}

function update(id, time) {
  const m = Math.floor(time / 60);
  const s = time % 60;
  document.getElementById(id).innerText = `${m}:${s.toString().padStart(2,'0')}`;
}

function checkField() {
  const val = Number(document.getElementById('fieldInput').value);

  if (eventMap[val]) {
    document.getElementById('eventContent').innerHTML = eventMap[val];
    playEventAudio(val); // 🔊 spielt die passende MP3
    goTo('event');
  }
}


function triggerKrise() {
  clearInterval(kriseTimer);

  document.getElementById('kriseContent').innerText =
    krisen[Math.floor(Math.random() * krisen.length)];

  goTo('kriseScreen');

  // 🔁 Krise-Timer RESET auf 5 Minuten
  kriseTime = 300;
}

function triggerBurnout() {
  clearInterval(burnoutTimer);

  goTo('burnoutScreen');

  // 🔁 Burnout-Timer RESET auf 8 Minuten
  burnoutTime = 480;
}
