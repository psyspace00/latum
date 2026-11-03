// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – App-Logik
// Gliederung: 1 Symbole · 2 Sprache · 3 Daten · 4 Zustand · 5 Grafiken & 3D · 6 Navigation (iOS-Stack)
//             7 Seiten · 8 Detailblatt · 9 Suche · 10 Quiz · 11 Karteikarten · 12 Start
(function () {
  "use strict";

  // =====================================================================
  // 1 · SYMBOLE (Linien-Icons 24×24)
  const ICONS = {
    orientierung: '<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2l-1.8 3.8-3.8 1.8 1.8-3.8z"/>',
    regionen: '<circle cx="12" cy="4.5" r="2.3"/><path d="M12 8v7M7 10.5l5-1.5 5 1.5M12 15l-3 6.5M12 15l3 6.5"/>',
    zelle: '<ellipse cx="12" cy="12" rx="9" ry="7.5"/><circle cx="11" cy="11.5" r="3"/><circle cx="17" cy="14" r="1"/>',
    wortbau: '<path d="M4 18l4.5-12L13 18M5.8 13.5h5.4M15 10.5c.8-.9 1.8-1.3 3-1.3 1.8 0 2.8 1 2.8 2.8V18m0-4.2c-3.5 0-5.6.6-5.6 2.3 0 1.2 1 1.9 2.2 1.9 1.8 0 3.4-1.4 3.4-3.6"/>',
    knochen: '<path d="M8.5 8.5l7 7"/><circle cx="6.2" cy="7.6" r="2"/><circle cx="7.6" cy="6.2" r="2"/><circle cx="16.4" cy="17.8" r="2"/><circle cx="17.8" cy="16.4" r="2"/>',
    gelenke: '<path d="M8 3v5.5a4 4 0 0 0 8 0V3M8 21v-4a4 3 0 0 1 8 0v4"/>',
    muskeln: '<path d="M3 12c3-5.5 15-5.5 18 0-3 5.5-15 5.5-18 0z"/><path d="M8 9.5c1.3 1.5 1.3 3.5 0 5M12 8.8c1.5 2 1.5 4.4 0 6.4M16 9.5c1.3 1.5 1.3 3.5 0 5"/>',
    herz: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
    gefaesse: '<path d="M12 3v7M12 10l-5 4.5V21M12 10l5 4.5V21M7 14.5L4 17M17 14.5l3 2.5"/>',
    blut: '<path d="M12 3l7 3v5.5c0 4.4-3 7.8-7 9.5-4-1.7-7-5.1-7-9.5V6z"/><path d="M9.5 12l2 2 3.5-4"/>',
    atmung: '<path d="M12 3v8M12 9.5c-1.2 1-2.6 1.6-3 1.8M12 9.5c1.2 1 2.6 1.6 3 1.8"/><path d="M8.8 7.5C6 7.5 4 12.5 4 16.5c0 2 1 3.5 3 3.5s2.5-1 2.5-3V8.6zM15.2 7.5c2.8 0 4.8 5 4.8 9 0 2-1 3.5-3 3.5s-2.5-1-2.5-3V8.6z"/>',
    verdauung: '<path d="M9 3v4c0 2.2-4 3-4 8a5.5 5.5 0 0 0 10 3.2c.8-1.2 1.8-1.8 3.2-1.8 1.8 0 2.8-1.8 2.8-3.9 0-3.2-3-5.5-6.5-5.5H13V3"/>',
    harn: '<path d="M14.5 3.5c-5 0-8.5 3.8-8.5 8.5s3.5 8.5 8.5 8.5c2 0 3.2-1.8 2.2-3.6-.7-1.3-.7-2.9 0-4.2.6-1.2.6-2.7 0-3.9-.9-1.6-.2-5.3-2.2-5.3z"/>',
    geschlecht: '<circle cx="10" cy="10" r="4.8"/><path d="M13.5 6.5L19 1.8M15.4 1.8H19v3.6M10 14.8V22M6.8 18.8h6.4"/>',
    hormone: '<path d="M9 3h6M10 3v6.2l-5.3 8.9A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.9L14 9.2V3"/><path d="M7.3 15h9.4"/>',
    nerven: '<path d="M9.5 4.2A3 3 0 0 0 6.2 7a3 3 0 0 0-1.7 5 3 3 0 0 0 1.7 5 3 3 0 0 0 5.8 1V5.3a2.4 2.4 0 0 0-2.5-1.1zM14.5 4.2A3 3 0 0 1 17.8 7a3 3 0 0 1 1.7 5 3 3 0 0 1-1.7 5 3 3 0 0 1-5.8 1"/>',
    sinne: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3.2"/>',
    haut: '<path d="M3 7h18M3 12c3-2 6 2 9 0s6-2 9 0M3 17h18"/>',
    schild: '<path d="M12 3l7.5 3v5.8c0 4.3-3.1 7.6-7.5 9.2-4.4-1.6-7.5-4.9-7.5-9.2V6z"/><path d="M12 8v6M9 11h6"/>',
    gelenk: '<circle cx="12" cy="12" r="3"/><path d="M4 4l5.9 5.9M14.1 14.1L20 20M4 20l3-3"/>',
    puls: '<path d="M2.5 12.5h4l2-5 3.5 10 2.5-7 1.5 2h5.5"/>',
    apfel: '<path d="M12 7c-1.5-1.3-6.5-1.8-7.5 2.6-.8 3.6 1.5 9.9 4.6 10.9 1.2.4 2-.3 2.9-.3s1.7.7 2.9.3c3.1-1 5.4-7.3 4.6-10.9C18.5 5.2 13.5 5.7 12 7z"/><path d="M12 7c0-2 .8-3.5 2.6-4"/>',
    zyklus: '<path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6"/><path d="M17.7 3v3.6h-3.6M6.3 21v-3.6h3.6"/><path d="M9 12l2 2 4-4"/>',
    anatomie: '<circle cx="12" cy="4.5" r="2.3"/><path d="M12 8v7M7 10.5l5-1.5 5 1.5M12 15l-3 6.5M12 15l3 6.5"/>',
    quiz: '<rect x="4" y="3.5" width="16" height="17" rx="3"/><path d="M8 8.5h8M8 12.5h5M8.5 16.5l1.5 1.5 3-3"/>',
    karten: '<rect x="3.5" y="6.5" width="12" height="14" rx="2"/><path d="M8.5 3.5h10a2 2 0 0 1 2 2v12"/>',
    bild: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6" stroke-dasharray="2 2.5"/>',
    wuerfel: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>'
  };
  const icon = (id, cls) => `<span class="ico${cls ? " " + cls : ""}"><svg viewBox="0 0 24 24">${ICONS[id] || ""}</svg></span>`;

  const SEKTIONEN = [["orientierung", "regionen", "zelle", "wortbau"], ["knochen", "gelenke", "muskeln"], ["herz", "gefaesse", "blut"],
    ["atmung", "verdauung", "harn", "geschlecht"], ["hormone", "nerven", "sinne", "haut"]];

  // Hauptmenü: Körper & Anatomie, danach die Pflegebereiche
  const MENUE_BEREICHE = [["pflegeprozess", "zyklus", "orange"], ["prophylaxen", "schild", "blue"], ["kontrakturen", "gelenk", "indigo"],
    ["vitalzeichen", "puls", "red"], ["herzkreislauf", "herz", "pink"], ["ernaehrung", "apfel", "green"]];

  // =====================================================================
  // 2 · SPRACHE (Oberfläche Deutsch / Tiếng Việt – Fachbegriffe bleiben lateinisch)
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  let sprache = store.get("ui", "de") === "vi" ? "vi" : "de";      // Standard: Deutsch
  const T = () => UI_TEXTE[sprache];
  const vi = () => sprache === "vi";

  // =====================================================================
  // 3 · DATEN
  const ALLE = [], KAT = {}, BY_LAT = {}, BY_KEY = {};
  KATEGORIEN.forEach(kat => {
    KAT[kat.id] = kat;
    kat.eintraege = [];
    const vk = VI_ANATOMIE[kat.id];
    kat.vi = vk ? vk.ten : kat.de;
    kat.gruppen.forEach((gr, gi) => {
      const vg = vk && vk.gruppen[gi];
      gr.vi = vg ? vg[0] : gr.titel;
      gr.eintraege = gr.items.map((it, ii) => {
        const v = vg && vg[1][ii];
        const e = { lat: it[0], de: it[1], info: it[2] || "", vi: v ? (Array.isArray(v) ? v[0] : v) : it[1], viInfo: Array.isArray(v) ? v[1] : "",
          kat: kat, gruppe: gr, figs: [], m3d: [] };
        e.key = kat.id + "|" + e.lat;
        e.sLat = plain(e.lat); e.sDe = plain(e.de); e.sVi = plain(e.vi); e.sInfo = plain(e.info + " " + e.viInfo);
        e.pLat = phon(e.lat); e.pDe = phon(e.de);
        ALLE.push(e); kat.eintraege.push(e); BY_KEY[e.key] = e;
        (BY_LAT[e.lat] = BY_LAT[e.lat] || []).push(e);
        return e;
      });
    });
  });
  // Übersetzung und Erklärung in der aktuellen Sprache
  const tr = e => vi() ? e.vi : e.de;
  const info = e => vi() ? (e.viInfo || e.info) : e.info;
  const katName = k => vi() ? k.vi : k.de;
  const gruppenName = g => vi() ? g.vi : g.titel;

  // Grafiken (SVG-Querschnitte) und 3D-Modelle mit Begriffen verknüpfen ("_ganz" = ganze Abbildung ohne Hervorhebung)
  const FIG = {}, M3D = {}, FEHLEND = [];
  function verknuepfe(f, liste) {
    f.tok = {};
    Object.keys(f.teile).forEach(tok => {
      f.tok[tok] = f.teile[tok].map(name => {
        const c = BY_LAT[name] || [];
        const e = c.find(x => f.kats.indexOf(x.kat.id) >= 0) || c[0];
        if (!e) FEHLEND.push(f.id + ": " + name);
        else if (!e[liste].some(x => x.fig === f)) e[liste].push({ fig: f, tok: tok === "_ganz" ? null : tok });
        return e;
      }).filter(Boolean);
    });
  }
  FIGUREN.forEach(f => { FIG[f.id] = f; verknuepfe(f, "figs"); });
  MODELLE_3D.forEach(m => { M3D[m.id] = m; verknuepfe(m, "m3d"); });
  const eigeneZuerst = (e, a, b) => (a.fig.kats.indexOf(e.kat.id) >= 0 ? 0 : 1) - (b.fig.kats.indexOf(e.kat.id) >= 0 ? 0 : 1);
  ALLE.forEach(e => { e.figs.sort((a, b) => eigeneZuerst(e, a, b)); e.m3d.sort((a, b) => eigeneZuerst(e, a, b)); });
  if (FEHLEND.length) console.warn("Zuordnung ohne Begriff:", FEHLEND);
  const figTitel = f => vi() ? (FIG_TITEL_VI[f.id] || f.titel) : f.titel;
  const modellTitel = m => vi() ? (MODELL_TITEL_VI[m.id] || m.titel) : m.titel;
  const kurzTitel = t => t.split(" (")[0].replace(" 3D", "");

  // Pflegeinhalte: deutsche Fassung, vietnamesische Fassung mit gleichem Aufbau
  const BER = {}, BER_VI = {}, KAPITEL = [];
  BEREICHE_VI.forEach(b => { BER_VI[b.id] = b; });
  const abschnittText = k => k.abschnitte.map(a => a.h || a.p || a.merke || a.warn || (a.liste || []).join(" ") ||
    (a.tabelle ? a.tabelle.zeilen.map(z => z.join(" ")).join(" ") : "")).join(" ");
  BEREICHE.forEach(b => {
    BER[b.id] = b;
    b.kapitel.forEach(k => {
      k.bereich = b;
      const vb = BER_VI[b.id], vk = vb && vb.kapitel.find(x => x.id === k.id);
      k.sTitel = plain(k.titel + " " + k.kurz + (vk ? " " + vk.titel + " " + vk.kurz : ""));
      k.sText = plain(abschnittText(k) + (vk ? " " + abschnittText(vk) : ""));
      KAPITEL.push(k);
    });
  });
  // Bereich bzw. Kapitel in der aktuellen Sprache (fällt auf Deutsch zurück)
  const bereich = id => (vi() && BER_VI[id]) || BER[id];
  const kapitel = (bid, kid) => { const b = bereich(bid); return b.kapitel.find(x => x.id === kid) || BER[bid].kapitel.find(x => x.id === kid); };

  // Suchnormalisierung: Kleinbuchstaben, ohne Akzente (auch vietnamesische Diakritika, đ → d)
  function plain(s) { return String(s).toLowerCase().replace(/ß/g, "ss").replace(/đ/g, "d").normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  // Lautnahe Normalisierung: „Bizeps“ ↔ „biceps“, „Zäkum“ ↔ „Caecum“
  function phon(s) {
    return s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/ae|oe/g, "e").replace(/ph/g, "f").replace(/th/g, "t").replace(/rh/g, "r")
      .replace(/y/g, "i").replace(/[cz]/g, "k").replace(/qu/g, "kw").replace(/x/g, "ks").replace(/(.)\1/g, "$1");
  }
  window.__medismart = { ALLE, FEHLEND, KAPITEL };

  // =====================================================================
  // 4 · ZUSTAND
  const state = { favs: new Set(store.get("favs", [])), tab: "start", query: "", detail: null };
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const mischen = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const go = r => ` data-go='${JSON.stringify(r)}'`;

  // =====================================================================
  // 5 · GRAFIKEN & 3D
  let uid = 0;
  function figHtml(f, tok, opts) {
    opts = opts || {};
    const cls = ["fig", opts.interactive ? "interactive" : "", opts.small ? "small" : ""].join(" ");
    let svg = f.svg("u" + (++uid));
    if (vi()) svg = svg.replace(/>([^<>]+)<\/text>/g, (m, t) => ">" + (FIG_LABEL_VI[t] || t) + "</text>");
    return `<div class="${cls}" data-fig="${f.id}"${tok ? ` data-hl="${tok}"` : ""}><svg viewBox="${f.vb}" role="img" aria-label="${esc(figTitel(f))}">${svg}</svg></div>`;
  }
  function markiere(root) {
    root.querySelectorAll(".fig[data-hl]").forEach(el => {
      const hits = el.querySelectorAll(`[data-p~="${el.dataset.hl}"]`);
      hits.forEach(h => h.classList.add("hl"));
      el.classList.toggle("has-hl", hits.length > 0);
    });
  }

  // 3D-Ansicht: Platzhalter im HTML, Three.js wird erst bei Bedarf geladen
  const v3dHtml = (modell, tok) => `<div class="viewer3d" data-modell="${modell}"${tok ? ` data-hl="${tok}"` : ""}>` +
    `<div class="v3d-load">${T().v3dLaden}</div><div class="v3d-hint">${T().v3dHint}</div></div>`;
  let modul3d = null;
  const lade3d = () => modul3d || (modul3d = import("./anatomie3d.js"));
  function starte3d(root, sammler) {
    root.querySelectorAll(".viewer3d:not([data-aktiv])").forEach(el => {
      el.dataset.aktiv = "1";
      const m = M3D[el.dataset.modell];
      lade3d().then(mod => {
        if (!el.isConnected) return;
        const v = mod.starte(el, m.id, {
          hl: el.dataset.hl || null,
          onPick: tok => { const es = m.tok[tok] || []; if (es.length) oeffneDetail(es[0].key, { ansicht: "3d" }); }
        });
        el.querySelector(".v3d-load").remove();
        sammler.push(v);
      }).catch(err => { console.warn(err); el.querySelector(".v3d-load").textContent = T().v3dNicht; });
    });
  }
  const beende3d = liste => { while (liste.length) liste.pop().dispose(); };

  // =====================================================================
  // 6 · NAVIGATION (iOS-artiger Stapel mit Wischgeste)
  const stage = $("stage"), header = $("nav"), navTitle = $("navTitle"), backBtn = $("backBtn"), backLabel = $("backLabel");
  const stack = [];
  const EASE = "cubic-bezier(.32,.72,0,1)", DAUER = 420;

  function neueSeite(route) {
    const el = document.createElement("section");
    el.className = "page";
    stage.appendChild(el);
    const seite = { route, el, viewer: [], titel: "" };
    zeichne(seite);
    el.addEventListener("scroll", () => kopfzeile(seite), { passive: true });
    return seite;
  }
  function zeichne(seite, scrollHalten) {
    const top = seite.el.scrollTop;
    beende3d(seite.viewer);
    const r = SEITEN[seite.route.v](seite.route, seite);
    seite.titel = r.titel;
    seite.el.innerHTML = `<div class="page-inner">${r.html}</div>`;
    markiere(seite.el);
    starte3d(seite.el, seite.viewer);
    if (r.nach) r.nach(seite.el, seite);
    if (scrollHalten) seite.el.scrollTop = top;
    if (seite === aktuell()) kopfzeile(seite);
  }
  const aktuell = () => stack[stack.length - 1];

  // Zurück-Knopf mit Titel der vorigen Seite; kleiner Titel erscheint, wenn der große Titel wegscrollt
  function kopfzeile(seite) {
    if (seite !== aktuell()) return;
    const vorige = stack[stack.length - 2];
    backBtn.hidden = !vorige;
    backLabel.textContent = vorige ? (vorige.titel.length > 14 ? T().zurueck : vorige.titel) : "";
    navTitle.textContent = seite.titel;
    const gross = seite.el.querySelector(".large-title");
    const grenze = gross ? gross.offsetTop + gross.offsetHeight - 8 : 0;
    header.classList.toggle("show-title", !gross || seite.el.scrollTop > grenze);
    header.classList.toggle("scrolled", seite.el.scrollTop > 2);
  }

  function setzeLage(el, x, dim, animiert) {
    el.style.transition = animiert ? `transform ${DAUER}ms ${EASE}, filter ${DAUER}ms ${EASE}` : "none";
    el.style.transform = x ? `translate3d(${x},0,0)` : "";
    el.style.filter = dim ? "brightness(.94)" : "";
  }
  function push(route) {
    schliesseSuche(); schliesseDetail();
    const alt = aktuell(), neu = neueSeite(route);
    stack.push(neu);
    setzeLage(neu.el, "100%", false, false);
    neu.el.getBoundingClientRect();
    setzeLage(neu.el, 0, false, true);
    if (alt) setzeLage(alt.el, "-28%", true, true);
    kopfzeile(neu);
    setTimeout(() => { if (alt && stack.indexOf(alt) >= 0 && alt !== aktuell()) alt.el.classList.add("hinten"); }, DAUER);
  }
  function pop(vonPosition) {
    if (stack.length < 2) return;
    schliesseDetail();
    const alt = stack.pop(), neu = aktuell();
    neu.el.classList.remove("hinten");
    if (vonPosition == null) setzeLage(neu.el, "-28%", true, false);
    neu.el.getBoundingClientRect();
    setzeLage(neu.el, 0, false, true);
    setzeLage(alt.el, "100%", false, true);
    kopfzeile(neu);
    setTimeout(() => { beende3d(alt.viewer); alt.el.remove(); }, DAUER);
  }
  function setzeWurzel(route) {
    schliesseSuche(); schliesseDetail();
    while (stack.length) { const s = stack.pop(); beende3d(s.viewer); s.el.remove(); }
    const s = neueSeite(route);
    s.el.classList.add("einblenden");
    stack.push(s);
    kopfzeile(s);
  }
  backBtn.onclick = () => pop();

  // Wischen vom linken Rand = zurück
  (function () {
    let start = null, dx = 0, t0 = 0;
    stage.addEventListener("touchstart", e => {
      const t = e.touches[0];
      if (stack.length < 2 || t.clientX > 28 || state.query) return;
      start = t.clientX; dx = 0; t0 = Date.now();
    }, { passive: true });
    stage.addEventListener("touchmove", e => {
      if (start === null) return;
      dx = Math.max(0, e.touches[0].clientX - start);
      const w = stage.clientWidth, oben = aktuell(), unten = stack[stack.length - 2];
      unten.el.classList.remove("hinten");
      setzeLage(oben.el, dx + "px", false, false);
      setzeLage(unten.el, (-0.28 * w + dx * 0.28) + "px", dx < w * 0.9, false);
    }, { passive: true });
    stage.addEventListener("touchend", () => {
      if (start === null) return;
      const w = stage.clientWidth, schnell = dx / Math.max(1, Date.now() - t0) > 0.5;
      if (dx > w * 0.33 || (schnell && dx > 40)) pop(dx);
      else { setzeLage(aktuell().el, 0, false, true); const u = stack[stack.length - 2]; setzeLage(u.el, "-28%", true, true); setTimeout(() => u.el.classList.add("hinten"), DAUER); }
      start = null;
    });
  })();

  // Tabs
  const TAB_WURZEL = { start: { v: "home" }, lernen: { v: "lernen" }, gemerkt: { v: "gemerkt" }, info: { v: "info" } };
  document.querySelectorAll(".tabbar button").forEach(b => {
    b.onclick = () => {
      const tab = b.dataset.tab;
      if (tab === state.tab && stack.length > 1) { while (stack.length > 1) pop(); return; }
      state.tab = tab;
      document.querySelectorAll(".tabbar button").forEach(x => x.classList.toggle("active", x === b));
      setzeWurzel(TAB_WURZEL[tab]);
    };
  });

  // =====================================================================
  // 7 · SEITEN – jede Funktion liefert { titel, html, nach? }
  const gross = (t, sub) => `<h1 class="large-title">${esc(t)}</h1>` + (sub ? `<p class="lead">${sub}</p>` : "");
  const chev = '<span class="chev"></span>';

  // Anatomie-Begriff: Latein immer zuerst, darunter die Übersetzung in der gewählten Sprache
  function rowHtml(e, opts) {
    opts = opts || {};
    const hl = opts.hl ? s => highlight(s, opts.hl) : esc;
    return `<button class="row" data-key="${esc(e.key)}"><div class="row-text">` +
      `<div class="row-main lat">${hl(e.lat)}</div><div class="row-sub">${hl(tr(e))}</div>` +
      (opts.meta ? `<div class="row-meta">${esc(katName(e.kat))} · ${esc(gruppenName(e.gruppe))}</div>` : "") +
      `</div><span class="row-badges">${state.favs.has(e.key) ? '<span class="row-star">★</span>' : ""}` +
      (e.m3d.length ? '<span class="badge3d">3D</span>' : e.figs.length ? '<span class="fig-dot"></span>' : "") + `</span>${chev}</button>`;
  }
  function katRow(k) {
    return `<button class="row with-ico"${go({ v: "kat", id: k.id })}>${icon(k.id)}<div class="row-text">` +
      `<div class="row-main lat">${esc(k.lat)}</div><div class="row-sub">${esc(katName(k))}</div></div><span class="count">${k.eintraege.length}</span>${chev}</button>`;
  }
  function begriffDesTages() {
    const pool = ALLE.filter(e => e.figs.length && e.figs[0].tok);
    const d = new Date(), n = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5) + d.getFullYear() * 7;
    return pool[(n * 7919) % pool.length];
  }

  const SEITEN = {
    home() {
      const t = begriffDesTages(), tf = t.figs[0];
      let h = `<div class="home-head">${icon("schild", "brand")}<div>` + gross("MediSmart", T().appSub) + "</div></div>";
      h += `<button class="search-hero" data-action="suche"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>${esc(T().sucheHero)}</button>`;
      h += `<div class="tiles"><button class="tile tile-teal"${go({ v: "anatomie" })}>${icon("anatomie", "tile-ico")}<span class="tile-title">${T().koerperAnatomie}</span><span class="tile-sub">${T().anatomieSub}</span></button>` +
        MENUE_BEREICHE.map(([id, ic, farbe]) => `<button class="tile tile-${farbe}"${go({ v: "bereich", id })}>${icon(ic, "tile-ico")}` +
          `<span class="tile-title">${esc(bereich(id).titel)}</span><span class="tile-sub">${esc(T().menueSub[id])}</span></button>`).join("") + "</div>";
      h += `<button class="tile-wide" data-tab-go="lernen">${icon("quiz", "tile-ico")}<span><span class="tile-title">${T().pruefungstraining}</span>` +
        `<span class="tile-sub">${T().fragenMitFall(QUIZ.length)}</span></span>${chev}</button>`;
      h += `<div class="section-title">${T().begriffDesTages}</div><button class="today glass-card" data-key="${esc(t.key)}">${figHtml(tf.fig, tf.tok, { small: true })}` +
        `<div class="today-body"><div class="today-main lat">${esc(t.lat)}</div><div class="today-sub">${esc(tr(t))}</div></div></button>`;
      return { titel: "MediSmart", html: h };
    },

    anatomie() {
      let h = gross(T().koerperAnatomie, T().anatomieLead(ALLE.length.toLocaleString("de-DE"), FIGUREN.length, MODELLE_3D.length));
      h += `<div class="section-title">${T().modelle3d}</div><div class="chips">` + MODELLE_3D.map(m => `<button class="chip"${go({ v: "modell", id: m.id })}>${icon("wuerfel", "chip-ico")}${esc(kurzTitel(modellTitel(m)))}</button>`).join("") + "</div>";
      SEKTIONEN.forEach((ids, i) => { h += `<div class="section-title">${T().sektionen[i]}</div><div class="list">` + ids.filter(id => KAT[id]).map(id => katRow(KAT[id])).join("") + "</div>"; });
      return { titel: T().koerperAnatomie, html: h };
    },

    modell(r) {
      const m = M3D[r.id], titel = kurzTitel(modellTitel(m)) + " 3D";
      return { titel, html: gross(titel, T().modellLead) + `<div class="glass-card pad0">${v3dHtml(m.id, null)}</div>` +
        `<div class="section-title">${T().strukturenImModell}</div><div class="list">` +
        Object.keys(m.tok).filter(t => t !== "_ganz").map(t => m.tok[t][0]).filter(Boolean).map(e => rowHtml(e)).join("") + "</div>" };
    },

    kat(r, seite) {
      const k = KAT[r.id], figs = FIGUREN.filter(f => f.kats.indexOf(k.id) >= 0), mods = MODELLE_3D.filter(m => m.kats.indexOf(k.id) >= 0);
      seite.figIdx = seite.figIdx || 0;
      let h = `<div class="cat-head">${icon(k.id, "big")}<div><h1 class="large-title lat">${esc(k.lat)}</h1><p class="lead">${esc(katName(k))} · ${T().begriffe(k.eintraege.length)}</p></div></div>`;
      const ansichten = mods.map(m => ({ typ: "3d", m })).concat(figs.map(f => ({ typ: "fig", f })));
      if (ansichten.length) {
        const i = Math.min(seite.figIdx, ansichten.length - 1), a = ansichten[i];
        if (ansichten.length > 1) h += `<div class="chips">` + ansichten.map((x, j) => `<button class="chip${j === i ? " active" : ""}" data-figsel="${j}">${x.typ === "3d" ? "3D · " + esc(kurzTitel(modellTitel(x.m))) : esc(kurzTitel(figTitel(x.f)))}</button>`).join("") + "</div>";
        h += `<div class="glass-card pad0">` + (a.typ === "3d" ? v3dHtml(a.m.id, null) : figHtml(a.f, null, { interactive: true })) +
          `<div class="fig-caption"><b>${esc(a.typ === "3d" ? modellTitel(a.m) : figTitel(a.f))}</b><span>${T().tippeStruktur}</span></div></div>`;
      }
      if (k.gruppen.length > 1) h += `<div class="section-title">${T().themen}</div><div class="chips">` + k.gruppen.map((g, j) => `<button class="chip" data-goto="${j}">${esc(gruppenName(g))}</button>`).join("") + "</div>";
      k.gruppen.forEach((g, j) => { h += `<div class="section-title anchor" id="g-${j}">${esc(gruppenName(g))}</div><div class="list">` + g.eintraege.map(e => rowHtml(e)).join("") + "</div>"; });
      return { titel: k.lat, html: h };
    },

    bereich(r) {
      const b = bereich(r.id), ic = (MENUE_BEREICHE.find(x => x[0] === r.id) || [])[1];
      let h = `<div class="cat-head">${icon(ic, "big")}<div>${gross(b.titel)}<p class="lead">${esc(b.untertitel)}</p></div></div>`;
      h += `<div class="list">` + b.kapitel.map((k, i) => `<button class="row with-ico"${go({ v: "kapitel", b: r.id, k: k.id })}>` +
        `<span class="ico num">${i + 1}</span><div class="row-text"><div class="row-main">${esc(k.titel)}</div><div class="row-sub">${esc(k.kurz)}</div></div>${chev}</button>`).join("") + "</div>";
      const qk = r.id === "kontrakturen" ? "kontrakturen+dekubitus" : r.id;
      h += `<button class="tile-wide mt"${go({ v: "quiz", kat: qk })}>${icon("quiz", "tile-ico")}<span><span class="tile-title">${T().wissenTesten}</span><span class="tile-sub">${esc(T().pruefungsfragenZu(b.titel))}</span></span>${chev}</button>`;
      return { titel: b.titel, html: h };
    },

    kapitel(r) {
      const b = bereich(r.b), k = kapitel(r.b, r.k);
      let h = `<p class="eyebrow">${esc(b.titel)}</p>` + gross(k.titel, esc(k.kurz));
      k.abschnitte.forEach(a => {
        if (a.h) h += `<h2 class="sec-h">${esc(a.h)}</h2>`;
        else if (a.p) h += `<p class="text">${esc(a.p)}</p>`;
        else if (a.liste) h += `<ul class="glass-card liste">${a.liste.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
        else if (a.merke) h += `<div class="callout merke"><b>${T().merke}</b>${esc(a.merke)}</div>`;
        else if (a.warn) h += `<div class="callout warn"><b>${T().achtung}</b>${esc(a.warn)}</div>`;
        else if (a.tabelle) h += `<div class="glass-card table-wrap"><table><thead><tr>${a.tabelle.kopf.map(x => `<th>${esc(x)}</th>`).join("")}</tr></thead><tbody>` +
          a.tabelle.zeilen.map(z => `<tr>${z.map(x => `<td>${esc(x)}</td>`).join("")}</tr>`).join("") + "</tbody></table></div>";
        else if (a.anatomie) { const kk = KAT[a.anatomie]; h += `<button class="link-card"${go({ v: "kat", id: kk.id })}>${icon(kk.id)}<span><b>${T().anatomiePrefix}: <i>${esc(kk.lat)}</i></b><small>${esc(katName(kk))}</small></span>${chev}</button>`; }
        else if (a.modell) h += `<div class="glass-card pad0">${v3dHtml(a.modell, null)}</div>`;
        else if (a.link) { const z = kapitel(a.link.bereich, a.link.kapitel), ic = (MENUE_BEREICHE.find(x => x[0] === a.link.bereich) || [])[1]; h += `<button class="link-card"${go({ v: "kapitel", b: a.link.bereich, k: z.id })}>${icon(ic)}<span><b>${T().weiterPrefix}: ${esc(z.titel)}</b><small>${esc(z.kurz)}</small></span>${chev}</button>`; }
      });
      return { titel: k.titel, html: h };
    },

    lernen() {
      let h = gross(T().lernen, T().lernenLead);
      h += `<button class="tile-wide accent"${go({ v: "quiz", kat: "mix" })}>${icon("quiz", "tile-ico")}<span><span class="tile-title">${T().simulation}</span><span class="tile-sub">${T().simulationSub}</span></span>${chev}</button>`;
      h += `<div class="section-title">${T().fragenNachThema}</div><div class="list">` + QUIZ_KATEGORIEN.map(k => {
        const n = QUIZ.filter(q => q.kat === k.id).length + (k.id === "anatomie" ? 12 : 0);
        return `<button class="row"${go({ v: "quiz", kat: k.id })}><div class="row-text"><div class="row-main">${esc(katTitel(k.id))}</div><div class="row-sub">${T().fragen(n)}${k.id === "anatomie" ? T().teilsAuto : ""}</div></div>${chev}</button>`;
      }).join("") + "</div>";
      h += `<div class="section-title">${T().lateinLernen}</div><div class="tiles two">` +
        `<button class="tile tile-teal"${go({ v: "karten", modus: "karten" })}>${icon("karten", "tile-ico")}<span class="tile-title">${T().karteikarten}</span><span class="tile-sub">${T().karteiSub}</span></button>` +
        `<button class="tile tile-indigo"${go({ v: "karten", modus: "bild" })}>${icon("bild", "tile-ico")}<span class="tile-title">${T().bildquiz}</span><span class="tile-sub">${T().bildquizSub}</span></button></div>`;
      return { titel: T().lernen, html: h };
    },

    quiz: (r, seite) => quizSeite(r, seite),
    karten: (r, seite) => kartenSeite(r, seite),

    gemerkt() {
      const favs = ALLE.filter(e => state.favs.has(e.key));
      return { titel: T().gemerkt, html: gross(T().gemerkt, favs.length ? T().begriffe(favs.length) : "") +
        (favs.length ? `<div class="list">${favs.map(e => rowHtml(e, { meta: true })).join("")}</div>` : `<div class="empty"><div class="big">☆</div>${T().leerGemerkt}</div>`) };
    },

    info() {
      return { titel: T().tabInfo, html: gross(T().infoTitel, T().infoLead(ALLE.length.toLocaleString("de-DE"), KAPITEL.length, QUIZ.length)) +
        `<div class="glass-card prose">${T().infoHtml}</div>` };
    }
  };

  function highlight(text, q) {
    const i = plain(text).indexOf(q);
    if (i < 0 || !q) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }

  // Klicks innerhalb der Seiten
  stage.addEventListener("click", ev => {
    const t = ev.target;
    const part = t.closest(".fig.interactive [data-p]");
    if (part) {
      const fig = FIG[part.closest(".fig").dataset.fig], tok = part.dataset.p.split(" ")[0], es = fig.tok[tok] || [];
      if (es.length) oeffneDetail(es[0].key, { ansicht: "fig", fig: fig });
      return;
    }
    const g = t.closest("[data-go]");
    if (g) { push(JSON.parse(g.dataset.go)); return; }
    const tg = t.closest("[data-tab-go]");
    if (tg) { document.querySelector(`.tabbar [data-tab="${tg.dataset.tabGo}"]`).click(); return; }
    const row = t.closest("[data-key]");
    if (row) { oeffneDetail(row.dataset.key); return; }
    const fs = t.closest("[data-figsel]");
    if (fs) { const s = aktuell(); s.figIdx = +fs.dataset.figsel; zeichne(s, true); return; }
    const gt = t.closest("[data-goto]");
    if (gt) { const z = aktuell().el.querySelector("#g-" + gt.dataset.goto); if (z) aktuell().el.scrollTo({ top: z.offsetTop - 70, behavior: "smooth" }); return; }
    if (t.closest('[data-action="suche"]')) $("search").focus();
  });

  // =====================================================================
  // 8 · DETAILBLATT (Anatomie-Begriff)
  const sheet = $("sheet"), backdrop = $("sheetBackdrop"), sheetViewer = [];
  function oeffneDetail(key, opt) {
    opt = opt || {};
    const e = BY_KEY[key];
    if (!e) return;
    const liste = e.kat.eintraege, idx = liste.indexOf(e), fav = state.favs.has(e.key);
    let ansicht = opt.ansicht || (e.m3d.length ? "3d" : "fig");
    if (ansicht === "3d" && !e.m3d.length) ansicht = "fig";
    if (ansicht === "fig" && !e.figs.length) ansicht = e.m3d.length ? "3d" : null;
    const fe = opt.fig ? e.figs.find(x => x.fig === opt.fig) || e.figs[0] : e.figs[0];
    state.detail = { key, ansicht, fig: fe && fe.fig };
    beende3d(sheetViewer);
    sheet.innerHTML =
      `<div class="sheet-top"><span class="grabber"></span><span class="sheet-path">${esc(katName(e.kat) + " › " + gruppenName(e.gruppe))}</span><button class="icon-btn" data-sheet="zu" aria-label="${T().schliessen}">×</button></div>` +
      (e.m3d.length && e.figs.length ? `<div class="seg-big mx"><button data-sheet="3d" class="${ansicht === "3d" ? "active" : ""}">${T().modell3d}</button><button data-sheet="fig" class="${ansicht === "fig" ? "active" : ""}">${T().querschnitt}</button></div>` : "") +
      (ansicht === "3d" ? `<div class="sheet-media">${v3dHtml(e.m3d[0].fig.id, e.m3d[0].tok)}</div>` : ansicht === "fig" ? `<div class="sheet-media">${figHtml(fe.fig, fe.tok, {})}</div>` : "") +
      `<div class="sheet-body"><div class="lbl-small">${T().latein}</div><div class="primary lat">${esc(e.lat)}</div>` +
      `<div class="lbl-small">${T().uebersetzung}</div><div class="secondary">${esc(tr(e))}</div>` +
      (info(e) ? `<div class="info">${esc(info(e))}</div>` : "") +
      `<div class="actions"><button class="btn narrow" data-sheet="prev"${idx <= 0 ? " disabled" : ""} aria-label="‹">‹</button>` +
      `<button class="btn${fav ? " on" : ""}" data-sheet="fav">${fav ? T().gemerktBtn : T().merken}</button>` +
      ("speechSynthesis" in window ? `<button class="btn" data-sheet="sprich">${T().anhoeren}</button>` : "") +
      `<button class="btn narrow" data-sheet="next"${idx >= liste.length - 1 ? " disabled" : ""} aria-label="›">›</button></div></div>`;
    const neu = sheet.hidden;
    sheet.hidden = false; backdrop.hidden = false;
    sheet.classList.toggle("ohne-anim", !neu);
    markiere(sheet);
    starte3d(sheet, sheetViewer);
    sheet.onclick = ev => {
      const b = ev.target.closest("[data-sheet]");
      if (!b) return;
      const a = b.dataset.sheet;
      if (a === "zu") schliesseDetail();
      else if (a === "3d" || a === "fig") oeffneDetail(key, { ansicht: a, fig: state.detail.fig });
      else if (a === "prev" && idx > 0) oeffneDetail(liste[idx - 1].key);
      else if (a === "next" && idx < liste.length - 1) oeffneDetail(liste[idx + 1].key);
      else if (a === "fav") { toggleFav(key); oeffneDetail(key, { ansicht, fig: state.detail.fig }); zeichne(aktuell(), true); }
      else if (a === "sprich") vorlesen(e);
    };
  }
  function schliesseDetail() { if (sheet.hidden) return; beende3d(sheetViewer); sheet.hidden = true; backdrop.hidden = true; state.detail = null; }
  backdrop.onclick = schliesseDetail;
  (function () {      // nach unten wischen schließt das Blatt (nicht innerhalb der 3D-Ansicht)
    let y0 = null;
    sheet.addEventListener("touchstart", e => { y0 = sheet.scrollTop <= 0 && !e.target.closest(".viewer3d") ? e.touches[0].clientY : null; }, { passive: true });
    sheet.addEventListener("touchmove", e => { if (y0 !== null) { const dy = e.touches[0].clientY - y0; sheet.style.transform = dy > 0 ? `translateY(${dy}px)` : ""; } }, { passive: true });
    sheet.addEventListener("touchend", e => { if (y0 === null) return; const dy = e.changedTouches[0].clientY - y0; sheet.style.transform = ""; if (dy > 110) schliesseDetail(); y0 = null; });
  })();

  function toggleFav(key) { if (state.favs.has(key)) state.favs.delete(key); else state.favs.add(key); store.set("favs", Array.from(state.favs)); }

  // Latein hat keine iOS-Stimme – die italienische Aussprache kommt der Schulaussprache am nächsten
  function vorlesen(e) {
    const synth = window.speechSynthesis; synth.cancel();
    const stimmen = synth.getVoices();
    const sag = (text, lang) => { const u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g, "")); u.lang = lang; u.rate = 0.9; const v = stimmen.find(s => s.lang && s.lang.replace("_", "-").indexOf(lang) === 0); if (v) u.voice = v; synth.speak(u); };
    sag(e.lat, stimmen.some(s => /^it/.test(s.lang)) ? "it-IT" : "de-DE");
    sag(tr(e), vi() ? "vi-VN" : "de-DE");
  }

  // =====================================================================
  // 9 · SUCHE (oben rechts) – Anatomie-Treffer mit 3D-Bild, Querschnitt, Latein und Beschreibung
  const searchInput = $("search"), searchLayer = $("searchLayer"), suchViewer = [];
  function sucheAnatomie(query) {
    const q = plain(query.trim()), p = phon(query.trim());
    if (!q) return [];
    const treffer = [];
    ALLE.forEach(e => {
      let s = -1;
      [e.sLat, e.sDe, e.sVi].forEach(f => {
        if (f === q) s = Math.max(s, 100);
        else if (f.indexOf(q) === 0) s = Math.max(s, 80);
        else if ((" " + f).indexOf(" " + q) >= 0 || f.indexOf("(" + q) >= 0) s = Math.max(s, 60);
        else if (f.indexOf(q) >= 0) s = Math.max(s, 40);
      });
      if (s < 0 && p.length >= 3 && (e.pLat.indexOf(p) >= 0 || e.pDe.indexOf(p) >= 0)) s = 30;
      if (s < 0 && q.length >= 3 && e.sInfo.indexOf(q) >= 0) s = 10;
      if (s >= 0) treffer.push({ e, s: s + (e.m3d.length ? 2 : 0) + (e.figs.length ? 1 : 0) - Math.min(e.lat.length, 40) / 100 });
    });
    return treffer.sort((a, b) => b.s - a.s);
  }
  function suchePflege(query) {
    const q = plain(query.trim());
    if (q.length < 3) return [];
    return KAPITEL.map(k => ({ k, s: k.sTitel.indexOf(q) >= 0 ? 2 : k.sText.indexOf(q) >= 0 ? 1 : 0 })).filter(x => x.s).sort((a, b) => b.s - a.s).map(x => x.k);
  }
  function zeigeSuche() {
    beende3d(suchViewer);
    const res = sucheAnatomie(state.query), pfl = suchePflege(state.query), q = plain(state.query.trim());
    let h = "";
    const top = res[0];
    if (top && top.s >= 60 && (top.e.m3d.length || top.e.figs.length)) {
      const e = top.e, fe = e.figs[0], me = e.m3d[0];
      h += `<div class="glass-card hit"><div class="hit-media">` + (me ? v3dHtml(me.fig.id, me.tok) : figHtml(fe.fig, fe.tok, { small: true })) + "</div>" +
        (me && fe ? `<div class="hit-fig">${figHtml(fe.fig, fe.tok, { small: true })}<span>${T().anatomQuer}</span></div>` : "") +
        `<div class="hit-body"><div class="lbl-small">${T().besterTreffer} · ${esc(katName(e.kat))}</div><div class="hit-lat lat">${esc(e.lat)}</div><div class="hit-de">${esc(tr(e))}</div>` +
        (info(e) ? `<p class="hit-info">${esc(info(e))}</p>` : "") + `<button class="btn primary-btn" data-key="${esc(e.key)}">${T().detailsOeffnen}</button></div></div>`;
    }
    if (pfl.length) h += `<div class="section-title">${T().pflegewissen}</div><div class="list">` + pfl.slice(0, 8).map(k => { const vk = kapitel(k.bereich.id, k.id); return `<button class="row with-ico"${go({ v: "kapitel", b: k.bereich.id, k: k.id })}>${icon((MENUE_BEREICHE.find(x => x[0] === k.bereich.id) || [])[1])}<div class="row-text"><div class="row-main">${highlight(vk.titel, q)}</div><div class="row-sub">${esc(bereich(k.bereich.id).titel)} · ${esc(vk.kurz)}</div></div>${chev}</button>`; }).join("") + "</div>";
    if (res.length) h += `<div class="section-title">${T().anatomieTreffer(res.length)}</div><div class="list">` + res.slice(0, 80).map(t => rowHtml(t.e, { hl: q, meta: true })).join("") + "</div>";
    if (!h) h = `<div class="empty"><div class="big">⌕</div>${esc(T().keinTreffer(state.query))}</div>`;
    searchLayer.innerHTML = `<div class="page-inner">${h}</div>`;
    markiere(searchLayer);
    starte3d(searchLayer, suchViewer);
  }
  function oeffneSuche() { header.classList.add("searching"); searchLayer.hidden = false; }
  function schliesseSuche() {
    searchInput.value = ""; state.query = ""; $("searchClear").hidden = true;
    header.classList.remove("searching"); searchLayer.hidden = true; beende3d(suchViewer); searchLayer.innerHTML = "";
    searchInput.blur();
  }
  searchInput.addEventListener("focus", oeffneSuche);
  searchInput.addEventListener("input", () => { oeffneSuche(); state.query = searchInput.value; $("searchClear").hidden = !state.query; if (state.query.trim()) zeigeSuche(); else { beende3d(suchViewer); searchLayer.innerHTML = ""; } });
  searchInput.addEventListener("keydown", ev => { if (ev.key === "Enter") searchInput.blur(); if (ev.key === "Escape") schliesseSuche(); });
  $("searchClear").onclick = () => { searchInput.value = ""; state.query = ""; $("searchClear").hidden = true; searchLayer.innerHTML = ""; searchInput.focus(); };
  $("searchCancel").onclick = schliesseSuche;
  searchLayer.addEventListener("click", ev => {
    const g = ev.target.closest("[data-go]");
    if (g) { push(JSON.parse(g.dataset.go)); return; }
    const row = ev.target.closest("[data-key]");
    if (row) oeffneDetail(row.dataset.key);
  });

  // =====================================================================
  // 10 · PRÜFUNGSQUIZ
  const katTitel = id => id === "mix" ? T().simulation : id === "kontrakturen+dekubitus" ? bereich("kontrakturen").titel
    : vi() ? (QUIZ_KAT_VI[id] || id) : ((QUIZ_KATEGORIEN.find(k => k.id === id) || {}).titel || id);
  // Frage in der aktuellen Sprache (vietnamesische Texte aus QUIZ_VI, gleiche Reihenfolge)
  const QUIZ_I = QUIZ.map((q, i) => Object.assign({ nr: i }, q));
  const frageText = q => (vi() && !q.auto && QUIZ_VI[q.nr]) ? Object.assign({}, q, QUIZ_VI[q.nr]) : q;

  // Automatisch erzeugte Anatomiefragen (Latein ↔ Übersetzung, Ablenker aus demselben Bereich)
  function anatomieFragen(n) {
    return mischen(ALLE.filter(e => e.kat.id !== "wortbau" && e.de.length < 40)).slice(0, n).map((e, i) => {
      const andere = mischen(e.kat.eintraege.filter(x => x !== e && x.de !== e.de && x.lat !== e.lat)).slice(0, 3);
      const opts = mischen([e].concat(andere));
      return { kat: "anatomie", typ: "single", auto: true, umgekehrt: i % 2 === 1, e, opts, richtig: opts.indexOf(e) };
    });
  }
  // Texte einer automatisch erzeugten Frage werden beim Anzeigen in der aktuellen Sprache gebildet
  function autoText(f) {
    return { frage: f.umgekehrt ? T().autoFrageUm(tr(f.e)) : T().autoFrage(f.e.lat), optionen: f.opts.map(x => f.umgekehrt ? x.lat : tr(x)),
      erklaerung: `${f.e.lat} = ${tr(f.e)}.` + (info(f.e) ? " " + info(f.e) : ""), latOpt: f.umgekehrt };
  }
  function stelleQuiz(kat) {
    let fragen;
    if (kat === "mix") fragen = mischen(QUIZ_I).slice(0, 17).concat(anatomieFragen(3));
    else if (kat === "anatomie") fragen = QUIZ_I.filter(q => q.kat === "anatomie").concat(anatomieFragen(12));
    else { const ks = kat.split("+"); fragen = QUIZ_I.filter(q => ks.indexOf(q.kat) >= 0); }
    return mischen(fragen).map(q => Object.assign({}, q, { anzeige: mischen((q.optionen || q.opts).map((o, i) => i)) }));
  }

  function quizSeite(r, seite) {
    if (!seite.quiz) seite.quiz = { fragen: stelleQuiz(r.kat), i: 0, wahl: [], geprueft: false, ergebnis: [] };
    const Q = seite.quiz, n = Q.fragen.length;
    if (Q.i >= n) {
      const richtig = Q.ergebnis.filter(Boolean).length, pct = Math.round(richtig / n * 100), proKat = {};
      Q.fragen.forEach((f, j) => { const k = proKat[f.kat] = proKat[f.kat] || [0, 0]; k[1]++; if (Q.ergebnis[j]) k[0]++; });
      return { titel: T().ergebnis, nach: el => { el.querySelector("[data-q=neu]").onclick = () => { seite.quiz = null; zeichne(seite); }; }, html:
        gross(T().ergebnis, esc(katTitel(r.kat))) +
        `<div class="glass-card score"><div class="ring" style="--p:${pct}"><span>${pct}%</span></div><div>${T().vonRichtig(richtig, n)}<br><span class="muted">${T().lob[pct >= 80 ? 0 : pct >= 60 ? 1 : 2]}</span></div></div>` +
        `<div class="section-title">${T().nachThema}</div><div class="list">` + Object.keys(proKat).map(k => `<div class="row"><div class="row-text"><div class="row-main">${esc(katTitel(k))}</div></div><span class="count">${proKat[k][0]} / ${proKat[k][1]}</span></div>`).join("") + "</div>" +
        `<div class="actions mt"><button class="btn primary-btn" data-q="neu">${T().neueRunde}</button></div>` };
    }
    const f0 = Q.fragen[Q.i], f = f0.auto ? Object.assign({}, f0, autoText(f0)) : frageText(f0);
    const hinweis = f.typ === "multi" ? T().hinweisMulti : f.typ === "order" ? T().hinweisOrder : T().hinweisSingle;
    const opts = f.anzeige.map(oi => {
      const gewaehlt = f.typ === "order" ? Q.wahl.indexOf(oi) : Q.wahl.indexOf(oi) >= 0 ? 1 : -1;
      let cls = "opt";
      if (f.typ !== "order" && gewaehlt >= 0) cls += " sel";
      if (Q.geprueft) {
        if (f.typ === "order") cls += Q.wahl.indexOf(oi) === oi ? " ok" : " bad";
        else { const ist = f.typ === "single" ? f.richtig === oi : f.richtig.indexOf(oi) >= 0; cls += ist ? " ok" : gewaehlt >= 0 ? " bad" : ""; }
      }
      const marke = f.typ === "order" ? (gewaehlt >= 0 ? gewaehlt + 1 : "") : f.typ === "multi" ? (gewaehlt >= 0 ? "✓" : "") : "";
      const loesung = Q.geprueft && f.typ === "order" ? `<span class="opt-sol">${T().richtigNr(oi + 1)}</span>` : "";
      return `<button class="${cls}" data-opt="${oi}"${Q.geprueft ? " disabled" : ""}><span class="opt-mark ${f.typ}">${marke}</span><span class="opt-text${f.latOpt ? " lat" : ""}">${esc(f.optionen[oi])}</span>${loesung}</button>`;
    }).join("");
    const bereit = f.typ === "order" ? Q.wahl.length === f.optionen.length : Q.wahl.length > 0;
    const h = `<div class="quiz-top"><span class="pill">${esc(katTitel(f.kat))}</span><span class="muted">${T().frageVon(Q.i + 1, n)}</span></div>` +
      `<div class="progress"><div style="width:${Math.round(Q.i / n * 100)}%"></div></div>` +
      (f.fall ? `<div class="callout fall"><b>${T().fallbeispiel}</b>${esc(f.fall)}</div>` : "") +
      `<h2 class="frage">${esc(f.frage)}</h2><p class="muted small">${hinweis}</p><div class="opts">${opts}</div>` +
      (Q.geprueft ? `<div class="callout ${Q.ergebnis[Q.i] ? "ok" : "bad"}"><b>${Q.ergebnis[Q.i] ? T().richtig : T().nichtGanz}</b>${esc(f.erklaerung || "")}</div>` +
        `<div class="actions mt"><button class="btn primary-btn" data-q="weiter">${Q.i + 1 < n ? T().naechste : T().zumErgebnis}</button></div>`
        : `<div class="actions mt">${f.typ === "order" && Q.wahl.length ? `<button class="btn" data-q="reset">${T().zuruecksetzen}</button>` : ""}<button class="btn primary-btn" data-q="pruefen"${bereit ? "" : " disabled"}>${T().pruefen}</button></div>`);
    return { titel: katTitel(r.kat), html: h, nach: el => {
      el.querySelectorAll("[data-opt]").forEach(b => b.onclick = () => {
        const oi = +b.dataset.opt, w = Q.wahl;
        if (f.typ === "single") Q.wahl = [oi];
        else if (w.indexOf(oi) >= 0) w.splice(w.indexOf(oi), 1);
        else w.push(oi);
        zeichne(seite, true);
      });
      const p = el.querySelector("[data-q=pruefen]");
      if (p) p.onclick = () => {
        let ok;
        if (f.typ === "single") ok = Q.wahl[0] === f.richtig;
        else if (f.typ === "multi") ok = Q.wahl.length === f.richtig.length && f.richtig.every(x => Q.wahl.indexOf(x) >= 0);
        else ok = Q.wahl.every((oi, pos) => oi === pos);
        Q.ergebnis[Q.i] = ok; Q.geprueft = true; zeichne(seite, true);
      };
      const rs = el.querySelector("[data-q=reset]");
      if (rs) rs.onclick = () => { Q.wahl = []; zeichne(seite, true); };
      const w = el.querySelector("[data-q=weiter]");
      if (w) w.onclick = () => { Q.i++; Q.wahl = []; Q.geprueft = false; zeichne(seite); seite.el.scrollTop = 0; };
    } };
  }

  // =====================================================================
  // 11 · KARTEIKARTEN UND BILDQUIZ
  function kartenSeite(r, seite) {
    const bild = r.modus === "bild";
    if (!seite.karten) seite.karten = { auswahl: "alle", deck: null, umgekehrt: false };
    const L = seite.karten;
    const pool = a => { const p = a === "alle" ? ALLE : a === "favs" ? ALLE.filter(e => state.favs.has(e.key)) : KAT[a].eintraege; return bild ? p.filter(e => e.figs.length && e.figs[0].tok) : p; };
    const titel = bild ? T().bildquiz : T().karteikarten;
    const vorne = e => L.umgekehrt ? tr(e) : e.lat, hinten = e => L.umgekehrt ? e.lat : tr(e);
    const vCls = () => L.umgekehrt ? "" : "lat", hCls = () => L.umgekehrt ? "lat" : "";
    if (!L.deck) {
      const chip = (id, label) => `<button class="chip${L.auswahl === id ? " active" : ""}" data-ks="${id}">${esc(label)}</button>`;
      const n = pool(L.auswahl).length;
      return { titel, html: gross(titel, bild ? T().bildLead : T().kartenLead) +
        (bild ? "" : `<div class="section-title">${T().richtung}</div><div class="seg-big"><button data-kr="0" class="${L.umgekehrt ? "" : "active"}">${T().latZuTr}</button><button data-kr="1" class="${L.umgekehrt ? "active" : ""}">${T().trZuLat}</button></div>`) +
        `<div class="section-title">${T().thema}</div><div class="chips wrap">` + chip("alle", T().alleThemen) + (state.favs.size ? chip("favs", T().gemerktChip) : "") + KATEGORIEN.map(k => chip(k.id, katName(k))).join("") + "</div>" +
        `<div class="actions mt"><button class="btn primary-btn" data-ks-start${n ? "" : " disabled"}>${T().kartenStarten(n)}</button></div>`,
        nach: el => {
          el.querySelectorAll("[data-ks]").forEach(b => b.onclick = () => { L.auswahl = b.dataset.ks; zeichne(seite, true); });
          el.querySelectorAll("[data-kr]").forEach(b => b.onclick = () => { L.umgekehrt = b.dataset.kr === "1"; zeichne(seite, true); });
          const s = el.querySelector("[data-ks-start]");
          if (s) s.onclick = () => { Object.assign(L, { deck: mischen(pool(L.auswahl)), gewusst: 0, gesamt: pool(L.auswahl).length, offen: false }); zeichne(seite); };
        } };
    }
    if (!L.deck.length) return { titel, html: gross(T().geschafft, T().kartenGelernt(L.gesamt)) + `<div class="actions"><button class="btn primary-btn" data-k="neu">${T().neueRunde}</button></div>`,
      nach: el => { el.querySelector("[data-k=neu]").onclick = () => { L.deck = null; zeichne(seite); }; } };
    const e = L.deck[0], fe = e.figs[0];
    const karte = bild
      ? figHtml(fe.fig, fe.tok, {}) + `<div class="flash-body">` + (L.offen ? `<div class="q lat">${esc(e.lat)}</div><div class="a">${esc(tr(e))}</div>` : `<div class="q small">${T().wieHeisst}</div><div class="tip">${T().tippenAufdecken}</div>`) + "</div>"
      : (L.offen && fe ? figHtml(fe.fig, fe.tok, { small: true }) : "") + `<div class="flash-body"><div class="q ${vCls()}">${esc(vorne(e))}</div>` +
        (L.offen ? `<div class="a ${hCls()}">${esc(hinten(e))}</div>` + (info(e) ? `<div class="note">${esc(info(e))}</div>` : "") : `<div class="tip">${T().tippenAufdecken}</div>`) + "</div>";
    return { titel, html: `<div class="quiz-top"><span class="pill">${titel}</span><span class="muted">${T().gewusstVon(L.gewusst, L.gesamt)}</span></div>` +
      `<div class="progress"><div style="width:${Math.round(L.gewusst / L.gesamt * 100)}%"></div></div><button class="flash glass-card" data-k="dreh">${karte}</button>` +
      (L.offen ? `<div class="actions"><button class="btn no" data-k="nein">${T().nochmal}</button><button class="btn yes" data-k="ja">${T().gewusst}</button></div>` : ""),
      nach: el => {
        el.querySelector("[data-k=dreh]").onclick = () => { L.offen = !L.offen; zeichne(seite, true); };
        const ja = el.querySelector("[data-k=ja]"), nein = el.querySelector("[data-k=nein]");
        if (ja) ja.onclick = () => { L.deck.shift(); L.gewusst++; L.offen = false; zeichne(seite, true); };
        if (nein) nein.onclick = () => { const k = L.deck.shift(); L.deck.splice(Math.min(L.deck.length, 3 + Math.floor(Math.random() * 4)), 0, k); L.offen = false; zeichne(seite, true); };
      } };
  }

  // =====================================================================
  // 12 · START UND SPRACHWECHSEL
  // Feste Texte der Oberfläche (Tabs, Suche) in der aktuellen Sprache setzen
  function statischeTexte() {
    document.documentElement.lang = sprache;
    searchInput.placeholder = T().suchen;
    $("searchCancel").textContent = T().abbrechen;
    const tabs = { start: T().tabStart, lernen: T().tabLernen, gemerkt: T().tabGemerkt, info: T().tabInfo };
    document.querySelectorAll(".tabbar button").forEach(b => { b.querySelector("span").textContent = tabs[b.dataset.tab]; });
    document.querySelectorAll("#langSeg button").forEach(b => b.classList.toggle("active", b.dataset.lang === sprache));
  }
  document.querySelectorAll("#langSeg button").forEach(b => {
    b.onclick = () => {
      if (b.dataset.lang === sprache) return;
      sprache = b.dataset.lang; store.set("ui", sprache);
      statischeTexte();
      stack.forEach(s => zeichne(s, true));
      if (state.query) zeigeSuche();
      if (state.detail) oeffneDetail(state.detail.key, { ansicht: state.detail.ansicht, fig: state.detail.fig });
    };
  });
  document.addEventListener("keydown", ev => { if (ev.key === "Escape") { if (!sheet.hidden) schliesseDetail(); else if (stack.length > 1) pop(); } });

  statischeTexte();
  setzeWurzel({ v: "home" });
  document.querySelector('.tabbar [data-tab="start"]').classList.add("active");

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
