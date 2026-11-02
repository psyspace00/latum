(function () {
  "use strict";

  // ---------- Symbole (Linien-Icons, 24×24) ----------
  const ICONS = {
    orientierung: '<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2l-1.8 3.8-3.8 1.8 1.8-3.8z"/>',
    regionen: '<circle cx="12" cy="4.5" r="2.3"/><path d="M12 8v7M7 10.5l5-1.5 5 1.5M12 15l-3 6.5M12 15l3 6.5"/>',
    zelle: '<ellipse cx="12" cy="12" rx="9" ry="7.5"/><circle cx="11" cy="11.5" r="3"/><circle cx="17" cy="14" r="1"/><circle cx="6.5" cy="14.5" r=".8"/>',
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
    haut: '<path d="M3 7h18M3 12c3-2 6 2 9 0s6-2 9 0M3 17h18"/>'
  };
  const icon = (id, big) => `<span class="ico${big ? " big" : ""}"><svg viewBox="0 0 24 24">${ICONS[id] || ""}</svg></span>`;

  const SEKTIONEN = [
    { titel: "Grundlagen", ids: ["orientierung", "regionen", "zelle", "wortbau"] },
    { titel: "Bewegungsapparat", ids: ["knochen", "gelenke", "muskeln"] },
    { titel: "Herz, Kreislauf und Abwehr", ids: ["herz", "gefaesse", "blut"] },
    { titel: "Organsysteme", ids: ["atmung", "verdauung", "harn", "geschlecht"] },
    { titel: "Steuerung und Sinne", ids: ["hormone", "nerven", "sinne", "haut"] }
  ];

  // ---------- Daten aufbereiten ----------
  const ALLE = [], KAT = {}, BY_LAT = {}, BY_KEY = {};
  KATEGORIEN.forEach(function (kat) {
    KAT[kat.id] = kat;
    kat.eintraege = [];
    kat.gruppen.forEach(function (gr) {
      gr.eintraege = gr.items.map(function (it) {
        const e = { lat: it[0], de: it[1], info: it[2] || "", kat: kat, gruppe: gr.titel, figs: [] };
        e.key = kat.id + "|" + e.lat;
        e.sLat = plain(e.lat); e.sDe = plain(e.de); e.sInfo = plain(e.info);
        e.pLat = phon(e.lat); e.pDe = phon(e.de);
        ALLE.push(e); kat.eintraege.push(e); BY_KEY[e.key] = e;
        (BY_LAT[e.lat] = BY_LAT[e.lat] || []).push(e);
        return e;
      });
    });
  });

  // Grafiken mit Begriffen verknüpfen
  const FIG = {}, FEHLEND = [];
  FIGUREN.forEach(function (f) {
    FIG[f.id] = f;
    f.tok = {};
    Object.keys(f.teile).forEach(function (tok) {
      f.tok[tok] = f.teile[tok].map(function (name) {
        const c = BY_LAT[name] || [];
        const e = c.find(x => f.kats.indexOf(x.kat.id) >= 0) || c[0];
        if (!e) FEHLEND.push(f.id + ": " + name);
        else if (!e.figs.some(x => x.fig === f)) e.figs.push({ fig: f, tok: tok });
        return e;
      }).filter(Boolean);
    });
  });
  ALLE.forEach(e => e.figs.sort((a, b) => (a.fig.kats.indexOf(e.kat.id) >= 0 ? 0 : 1) - (b.fig.kats.indexOf(e.kat.id) >= 0 ? 0 : 1)));
  if (FEHLEND.length) console.warn("Grafik-Zuordnung ohne Begriff:", FEHLEND);
  window.__latum = { ALLE: ALLE, FEHLEND: FEHLEND };

  function plain(s) {
    return s.toLowerCase().replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  // Lautnahe Normalisierung, damit z. B. „Bizeps“ ↔ „biceps“ oder „Zäkum“ ↔ „Caecum“ gefunden werden
  function phon(s) {
    return s.toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/ae|oe/g, "e").replace(/ph/g, "f").replace(/th/g, "t").replace(/rh/g, "r")
      .replace(/y/g, "i").replace(/[cz]/g, "k").replace(/qu/g, "kw").replace(/x/g, "ks")
      .replace(/(.)\1/g, "$1");
  }

  // ---------- Zustand ----------
  const store = {
    get: function (k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const state = {
    lang: store.get("lang", "lat"),          // Standard: Latein
    favs: new Set(store.get("favs", [])),
    tab: "koerper",
    katId: null,
    figIdx: {},
    query: "",
    lern: { auswahl: "alle", modus: "karten" },
    detail: null
  };

  const $ = id => document.getElementById(id);
  const main = $("main"), searchInput = $("search"), topbar = $("topbar");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const prim = e => state.lang === "lat" ? e.lat : e.de;
  const sec = e => state.lang === "lat" ? e.de : e.lat;
  const pc = () => state.lang === "lat" ? "lat" : "";
  const sc = () => state.lang === "lat" ? "" : "lat";

  // ---------- Grafiken ----------
  let uid = 0;
  function figHtml(f, tok, opts) {
    opts = opts || {};
    const cls = ["fig", opts.interactive ? "interactive" : "", opts.small ? "small" : ""].join(" ");
    return `<div class="${cls}" data-fig="${f.id}"${tok ? ` data-hl="${tok}"` : ""}><svg viewBox="${f.vb}" role="img" aria-label="${esc(f.titel)}">${f.svg("u" + (++uid))}</svg></div>`;
  }
  function markiere(root) {
    root.querySelectorAll(".fig[data-hl]").forEach(function (el) {
      const t = el.dataset.hl;
      const hits = el.querySelectorAll(`[data-p~="${t}"]`);
      hits.forEach(h => h.classList.add("hl"));
      el.classList.toggle("has-hl", hits.length > 0);
    });
  }

  // ---------- Darstellung ----------
  function render() {
    document.querySelectorAll("#langSeg button").forEach(b => b.classList.toggle("active", b.dataset.lang === state.lang));
    document.querySelectorAll(".tabbar button").forEach(b => b.classList.toggle("active", b.dataset.tab === state.tab));
    $("backBtn").hidden = !(state.tab === "koerper" && state.katId && !state.query);

    if (state.query) renderSuche();
    else if (state.tab === "koerper") state.katId ? renderKategorie() : renderStart();
    else if (state.tab === "lernen") renderLernen();
    else if (state.tab === "favoriten") renderFavoriten();
    else renderInfo();
    markiere(main);
  }

  function katRow(k) {
    return `<button class="row with-ico" data-kat="${k.id}">${icon(k.id)}<div class="row-text">` +
      `<div class="row-main ${pc()}">${esc(prim(k))}</div><div class="row-sub ${sc()}">${esc(sec(k))}</div></div>` +
      `<span class="count">${k.eintraege.length}</span><span class="chev"></span></button>`;
  }

  function begriffDesTages() {
    const mitBild = ALLE.filter(e => e.figs.length);
    const d = new Date(), n = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5) + d.getFullYear() * 7;
    return mitBild[(n * 7919) % mitBild.length];
  }

  function renderStart() {
    $("title").textContent = "Latum";
    const t = begriffDesTages(), tf = t.figs[0];
    let h = `<div class="hero"><h2>Mein medizinisches Latum</h2><p>${ALLE.length.toLocaleString("de-DE")} Fachbegriffe · ${FIGUREN.length} Grafiken</p></div>`;
    h += `<button class="today" data-key="${esc(t.key)}">${figHtml(tf.fig, tf.tok, { small: true })}` +
      `<div class="today-body"><div class="today-label">Begriff des Tages</div><div class="today-main ${pc()}">${esc(prim(t))}</div>` +
      `<div class="today-sub ${sc()}">${esc(sec(t))}</div></div></button>`;
    SEKTIONEN.forEach(s => {
      h += `<div class="section-title">${s.titel}</div><div class="list">` + s.ids.filter(id => KAT[id]).map(id => katRow(KAT[id])).join("") + "</div>";
    });
    main.innerHTML = h;
  }

  function rowHtml(e, opts) {
    opts = opts || {};
    const hl = opts.hl ? s => highlight(s, opts.hl) : esc;
    return `<button class="row" data-key="${esc(e.key)}"><div class="row-text">` +
      `<div class="row-main ${pc()}">${hl(prim(e))}</div><div class="row-sub ${sc()}">${hl(sec(e))}</div>` +
      (opts.meta ? `<div class="row-meta">${esc(e.kat.de)} · ${esc(e.gruppe)}</div>` : "") +
      `</div><span class="row-badges">${state.favs.has(e.key) ? '<span class="row-star">★</span>' : ""}` +
      `${e.figs.length ? '<span class="fig-dot" title="mit Grafik"></span>' : ""}</span><span class="chev"></span></button>`;
  }

  function renderKategorie() {
    const k = KAT[state.katId], figs = FIGUREN.filter(f => f.kats.indexOf(k.id) >= 0);
    $("title").textContent = prim(k);
    let h = `<div class="cat-head">${icon(k.id, true)}<div><h2 class="${pc()}">${esc(prim(k))}</h2><p class="${sc()}">${esc(sec(k))} · ${k.eintraege.length} Begriffe</p></div></div>`;
    if (figs.length) {
      const i = Math.min(state.figIdx[k.id] || 0, figs.length - 1), f = figs[i];
      if (figs.length > 1) h += `<div class="chips">` + figs.map((x, j) => `<button class="chip${j === i ? " active" : ""}" data-figsel="${j}">${esc(x.titel.split(" (")[0])}</button>`).join("") + "</div>";
      h += `<div class="fig-card">${figHtml(f, null, { interactive: true })}<div class="fig-caption"><span><b>${esc(f.titel)}</b></span><span>Tippe auf eine Struktur</span></div></div>`;
    }
    if (k.gruppen.length > 1) {
      h += `<div class="section-title">Themen</div><div class="chips">` + k.gruppen.map((g, j) => `<button class="chip" data-goto="${j}">${esc(g.titel)}</button>`).join("") + "</div>";
    }
    k.gruppen.forEach((g, j) => {
      h += `<div class="section-title group-anchor" id="g-${j}">${esc(g.titel)}</div><div class="list">` + g.eintraege.map(e => rowHtml(e)).join("") + "</div>";
    });
    main.innerHTML = h;
  }

  function highlight(text, q) {
    const i = plain(text).indexOf(q);
    if (i < 0 || !q) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }

  function suche(query) {
    const q = plain(query.trim()), p = phon(query.trim());
    if (!q) return [];
    const treffer = [];
    ALLE.forEach(function (e) {
      let score = -1;
      [e.sLat, e.sDe].forEach(function (f) {
        if (f === q) score = Math.max(score, 100);
        else if (f.indexOf(q) === 0) score = Math.max(score, 80);
        else if ((" " + f).indexOf(" " + q) >= 0 || f.indexOf("(" + q) >= 0) score = Math.max(score, 60);
        else if (f.indexOf(q) >= 0) score = Math.max(score, 40);
      });
      if (score < 0 && p.length >= 3 && (e.pLat.indexOf(p) >= 0 || e.pDe.indexOf(p) >= 0)) score = 30;
      if (score < 0 && q.length >= 3 && e.sInfo.indexOf(q) >= 0) score = 10;
      if (score >= 0) treffer.push({ e: e, s: score + (e.figs.length ? 1 : 0) - Math.min(prim(e).length, 40) / 100 });
    });
    treffer.sort((a, b) => b.s - a.s);
    return treffer.map(t => t.e);
  }

  function renderSuche() {
    $("title").textContent = "Suche";
    const res = suche(state.query), q = plain(state.query.trim());
    if (!res.length) {
      main.innerHTML = `<div class="empty"><div class="big">⌕</div>Kein Treffer für „${esc(state.query)}“.<br>Versuche den lateinischen oder deutschen Begriff.</div>`;
      return;
    }
    main.innerHTML = `<p class="hint">${res.length} Treffer</p><div class="list">` +
      res.slice(0, 150).map(e => rowHtml(e, { hl: q, meta: true })).join("") + "</div>";
  }

  function renderFavoriten() {
    $("title").textContent = "Gemerkt";
    const favs = ALLE.filter(e => state.favs.has(e.key));
    if (!favs.length) {
      main.innerHTML = '<div class="empty"><div class="big">☆</div>Noch nichts gemerkt.<br>Öffne einen Begriff und tippe auf „Merken“.</div>';
      return;
    }
    main.innerHTML = `<div class="hero"><h2>Gemerkt</h2><p>${favs.length} Begriffe – auch im Tab „Lernen“ abfragbar.</p></div><div class="list">` +
      favs.map(e => rowHtml(e, { meta: true })).join("") + "</div>";
  }

  // ---------- Detailansicht ----------
  function oeffneDetail(key, figWahl) {
    const e = BY_KEY[key];
    if (!e) return;
    const fi = figWahl != null ? figWahl : 0, fe = e.figs[fi];
    const liste = e.kat.eintraege, idx = liste.indexOf(e);
    const fav = state.favs.has(e.key), latFirst = state.lang === "lat";
    state.detail = e.key;
    const blk = (lbl, t, isLat, big) => `<div class="lbl-small">${lbl}</div><div class="${big ? "primary" : "secondary"}${isLat ? " lat" : ""}">${esc(t)}</div>`;
    $("sheet").innerHTML =
      `<div class="sheet-top"><span class="grabber"></span><span class="sheet-path">${esc(e.kat.de + " › " + e.gruppe)}</span><button class="icon-btn" id="closeBtn" aria-label="Schließen">×</button></div>` +
      (fe ? figHtml(fe.fig, fe.tok, {}) : "") +
      (e.figs.length > 1 ? `<div class="fig-switch">` + e.figs.map((x, j) => `<button class="chip${j === fi ? " active" : ""}" data-figalt="${j}">${esc(x.fig.titel.split(" (")[0])}</button>`).join("") + "</div>" : "") +
      `<div class="sheet-body">` +
      (latFirst ? blk("Latein", e.lat, true, true) + blk("Deutsch", e.de, false, false) : blk("Deutsch", e.de, false, true) + blk("Latein", e.lat, true, false)) +
      (e.info ? `<div class="info">${esc(e.info)}</div>` : "") +
      `<div class="actions">` +
      `<button class="btn narrow" id="prevBtn" aria-label="Vorheriger Begriff"${idx <= 0 ? " disabled" : ""}>‹</button>` +
      `<button class="btn${fav ? " on" : ""}" id="favBtn">${fav ? "★ Gemerkt" : "☆ Merken"}</button>` +
      ("speechSynthesis" in window ? `<button class="btn" id="speakBtn">🔊 Anhören</button>` : "") +
      `<button class="btn narrow" id="nextBtn" aria-label="Nächster Begriff"${idx >= liste.length - 1 ? " disabled" : ""}>›</button>` +
      `</div></div>`;
    const sheet = $("sheet");
    const neu = sheet.hidden;
    sheet.hidden = false; $("sheetBackdrop").hidden = false;
    if (!neu) sheet.style.animation = "none";
    else sheet.style.animation = "";
    markiere(sheet);
    $("closeBtn").onclick = schliesseDetail;
    $("favBtn").onclick = () => { toggleFav(e.key); oeffneDetail(e.key, fi); render(); };
    $("prevBtn").onclick = () => idx > 0 && oeffneDetail(liste[idx - 1].key);
    $("nextBtn").onclick = () => idx < liste.length - 1 && oeffneDetail(liste[idx + 1].key);
    if ($("speakBtn")) $("speakBtn").onclick = () => vorlesen(e);
    sheet.querySelectorAll("[data-figalt]").forEach(b => { b.onclick = () => oeffneDetail(e.key, +b.dataset.figalt); });
  }
  function schliesseDetail() { $("sheet").hidden = true; $("sheetBackdrop").hidden = true; state.detail = null; }
  $("sheetBackdrop").onclick = schliesseDetail;

  // Nach unten wischen schließt das Detailblatt
  (function () {
    const sheet = $("sheet");
    let y0 = null;
    sheet.addEventListener("touchstart", ev => { y0 = sheet.scrollTop <= 0 ? ev.touches[0].clientY : null; }, { passive: true });
    sheet.addEventListener("touchmove", ev => {
      if (y0 === null) return;
      const dy = ev.touches[0].clientY - y0;
      sheet.style.transform = dy > 0 ? `translateY(${dy}px)` : "";
    }, { passive: true });
    sheet.addEventListener("touchend", ev => {
      if (y0 === null) return;
      const dy = ev.changedTouches[0].clientY - y0;
      sheet.style.transform = "";
      if (dy > 110) schliesseDetail();
      y0 = null;
    });
  })();

  function toggleFav(key) {
    if (state.favs.has(key)) state.favs.delete(key); else state.favs.add(key);
    store.set("favs", Array.from(state.favs));
  }

  // Latein hat keine eigene iOS-Stimme – die italienische Aussprache kommt der Schulaussprache am nächsten.
  function vorlesen(e) {
    const synth = window.speechSynthesis;
    synth.cancel();
    const stimmen = synth.getVoices();
    const sag = function (text, lang) {
      const u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g, ""));
      u.lang = lang; u.rate = 0.9;
      const v = stimmen.find(s => s.lang && s.lang.replace("_", "-").indexOf(lang) === 0);
      if (v) u.voice = v;
      synth.speak(u);
    };
    const latLang = stimmen.some(s => /^it/.test(s.lang)) ? "it-IT" : "de-DE";
    if (state.lang === "lat") { sag(e.lat, latLang); sag(e.de, "de-DE"); }
    else { sag(e.de, "de-DE"); sag(e.lat, latLang); }
  }

  // ---------- Lernen ----------
  function renderLernen() {
    $("title").textContent = "Lernen";
    const L = state.lern;
    if (L.deck) return renderKarte();
    const chip = (id, label) => `<button class="chip${L.auswahl === id ? " active" : ""}" data-lernsel="${id}">${esc(label)}</button>`;
    let h = `<div class="hero"><h2>Lernen</h2><p>Abfrage ${state.lang === "lat" ? "Latein → Deutsch" : "Deutsch → Latein"} (umschaltbar oben über LA/DE).</p></div>`;
    h += `<div class="seg-big"><button data-modus="karten" class="${L.modus === "karten" ? "active" : ""}">Karteikarten</button>` +
      `<button data-modus="bild" class="${L.modus === "bild" ? "active" : ""}">Bildquiz</button></div>`;
    h += `<p class="hint" style="margin-top:10px">${L.modus === "bild" ? "Eine Struktur leuchtet in der Grafik – wie heißt sie?" : "Begriff lesen, Antwort überlegen, Karte umdrehen."}</p>`;
    h += `<div class="section-title">Themen</div><div class="chips wrap">` + chip("alle", "Alle Themen") +
      (state.favs.size ? chip("favs", "★ Gemerkt (" + state.favs.size + ")") : "") +
      KATEGORIEN.map(k => chip(k.id, k.de)).join("") + "</div>";
    const n = pool(L.auswahl, L.modus).length;
    h += `<div class="actions" style="margin-top:20px"><button class="btn primary-btn" id="startLern"${n ? "" : " disabled"}>${n ? n + " Karten starten" : "Keine Karten in dieser Auswahl"}</button></div>`;
    main.innerHTML = h;
    if ($("startLern")) $("startLern").onclick = starteLernen;
  }

  function pool(auswahl, modus) {
    let p = ALLE;
    if (auswahl === "favs") p = ALLE.filter(e => state.favs.has(e.key));
    else if (auswahl !== "alle") p = KAT[auswahl].eintraege;
    if (modus === "bild") p = p.filter(e => e.figs.length);
    return p;
  }

  function starteLernen() {
    const L = state.lern, deck = pool(L.auswahl, L.modus).slice();
    for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
    Object.assign(L, { deck: deck, gesamt: deck.length, gewusst: 0, versuche: 0, offen: false });
    render();
  }
  function beendeLernen() { const L = state.lern; state.lern = { auswahl: L.auswahl, modus: L.modus }; render(); }

  function renderKarte() {
    const L = state.lern;
    if (!L.deck.length) {
      main.innerHTML = `<div class="flash"><div class="flash-body"><div class="q">Geschafft!</div><div class="note">${L.gesamt} Begriffe in ${L.versuche} Versuchen.</div></div></div>` +
        `<div class="actions"><button class="btn" id="lernMenu">Zurück</button><button class="btn primary-btn" id="lernNeu">Nochmal</button></div>`;
      $("lernMenu").onclick = beendeLernen;
      $("lernNeu").onclick = starteLernen;
      return;
    }
    const e = L.deck[0], fe = e.figs[0], bild = L.modus === "bild";
    const pct = Math.round(L.gewusst / L.gesamt * 100);
    let karte = "";
    if (bild) {
      karte = figHtml(fe.fig, fe.tok, {}) + `<div class="flash-body">` +
        (L.offen ? `<div class="q ${pc()}">${esc(prim(e))}</div><div class="a ${sc()}">${esc(sec(e))}</div>` + (e.info ? `<div class="note">${esc(e.info)}</div>` : "")
          : `<div class="q small">Wie heißt die leuchtende Struktur?</div><div class="tip">Tippen zum Aufdecken</div>`) + "</div>";
    } else {
      karte = (L.offen && fe ? figHtml(fe.fig, fe.tok, { small: true }) : "") + `<div class="flash-body"><div class="q ${pc()}">${esc(prim(e))}</div>` +
        (L.offen ? `<div class="a ${sc()}">${esc(sec(e))}</div>` + (e.info ? `<div class="note">${esc(e.info)}</div>` : "") : `<div class="tip">Tippen zum Aufdecken</div>`) + "</div>";
    }
    main.innerHTML = `<div class="progress"><div style="width:${pct}%"></div></div>` +
      `<div class="progress-label"><span>${L.gewusst} von ${L.gesamt} gewusst</span><button id="lernEnde" style="color:var(--accent)">Beenden</button></div>` +
      `<button class="flash" id="karte">${karte}</button>` +
      (L.offen ? '<div class="actions"><button class="btn no" id="nein">✗ Nochmal</button><button class="btn yes" id="ja">✓ Gewusst</button></div>' : "");
    $("karte").onclick = () => { L.offen = !L.offen; render(); };
    $("lernEnde").onclick = beendeLernen;
    if (L.offen) {
      $("ja").onclick = () => { L.deck.shift(); L.gewusst++; L.versuche++; L.offen = false; render(); };
      $("nein").onclick = () => {
        const k = L.deck.shift(); L.versuche++;
        L.deck.splice(Math.min(L.deck.length, 3 + Math.floor(Math.random() * 4)), 0, k);
        L.offen = false; render();
      };
    }
  }

  // ---------- Info ----------
  function renderInfo() {
    $("title").textContent = "Info";
    main.innerHTML = `<div class="hero"><h2>Über die App</h2><p>${ALLE.length.toLocaleString("de-DE")} Begriffe · ${FIGUREN.length} Grafiken · offline nutzbar</p></div><div class="prose">` +
      "<h3>Mein medizinisches Latum</h3>" +
      "<p>Nachschlagewerk und Lernhilfe für anatomische Fachbegriffe in Latein und Deutsch – für Medizinstudium sowie Pflege- und Krankenpflegeausbildung.</p>" +
      "<h3>So funktioniert’s</h3><ul>" +
      "<li><b>Suche</b> (oben rechts): lateinisch oder deutsch, auch ungefähr – z. B. „bizeps“, „Schienbein“, „cor“.</li>" +
      "<li><b>LA / DE</b>: Latein (Standard) oder Deutsch zuerst anzeigen.</li>" +
      "<li><b>Grafiken</b>: In jedem Themenbereich auf eine Struktur tippen. In der Detailansicht leuchtet der Begriff in der Grafik auf. Ein grüner Punkt in der Liste zeigt: Zu diesem Begriff gibt es eine Grafik.</li>" +
      "<li><b>Merken</b>: Begriffe sammeln und gezielt lernen.</li>" +
      "<li><b>Lernen</b>: Karteikarten oder Bildquiz – nicht gewusste Karten kommen wieder.</li></ul>" +
      "<h3>Grundlagen</h3>" +
      "<p>Die lateinischen Bezeichnungen folgen der internationalen anatomischen Nomenklatur (<i>Terminologia Anatomica</i>), teils mit gebräuchlichen klinischen Bezeichnungen. " +
      "Die Gliederung nach Organsystemen entspricht dem Aufbau gängiger Lehrbücher der Pflegeausbildung (z. B. „Pflege Heute“, Elsevier). " +
      "Texte und Grafiken sind eigenständig erstellt; die Grafiken sind vereinfachte Schemata, keine maßstabsgetreuen Abbildungen.</p>" +
      "<h3>Hinweis</h3>" +
      "<p>Diese App ist eine Lernhilfe und ersetzt weder Lehrbuch noch Unterricht. Im Zweifel gilt das Lehrbuch deiner Schule bzw. Hochschule. " +
      "Klinische Hinweise (z. B. Injektionsorte, Normwerte) dienen nur der Orientierung.</p></div>";
  }

  // ---------- Ereignisse ----------
  document.addEventListener("click", function (ev) {
    const t = ev.target;
    // Antippen einer Struktur in einer interaktiven Grafik
    const part = t.closest(".fig.interactive [data-p]");
    if (part) {
      const fig = FIG[part.closest(".fig").dataset.fig], tok = part.dataset.p.split(" ")[0], es = fig.tok[tok] || [];
      if (es.length) {
        const e = es[0], fi = e.figs.findIndex(x => x.fig === fig);
        part.classList.add("tapped"); part.closest(".fig").classList.add("tap");
        oeffneDetail(e.key, fi < 0 ? 0 : fi);
      }
      return;
    }
    if (!main.contains(t)) return;
    const kat = t.closest("[data-kat]");
    if (kat) { state.katId = kat.dataset.kat; render(); window.scrollTo(0, 0); return; }
    const row = t.closest("[data-key]");
    if (row) { oeffneDetail(row.dataset.key); return; }
    const fs = t.closest("[data-figsel]");
    if (fs) { state.figIdx[state.katId] = +fs.dataset.figsel; render(); return; }
    const go = t.closest("[data-goto]");
    if (go) { const g = $("g-" + go.dataset.goto); if (g) g.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    const sel = t.closest("[data-lernsel]");
    if (sel) { state.lern.auswahl = sel.dataset.lernsel; render(); return; }
    const mo = t.closest("[data-modus]");
    if (mo) { state.lern.modus = mo.dataset.modus; render(); }
  });

  document.querySelectorAll("#langSeg button").forEach(b => {
    b.onclick = () => {
      state.lang = b.dataset.lang; store.set("lang", state.lang); render();
      if (state.detail) oeffneDetail(state.detail);
    };
  });

  document.querySelectorAll(".tabbar button").forEach(b => {
    b.onclick = () => {
      if (state.tab === b.dataset.tab && b.dataset.tab === "koerper") state.katId = null;
      state.tab = b.dataset.tab;
      leereSuche(); schliesseDetail();
      render(); window.scrollTo(0, 0);
    };
  });

  $("backBtn").onclick = () => { state.katId = null; render(); window.scrollTo(0, 0); };

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    $("searchClear").hidden = !state.query;
    render();
  });
  searchInput.addEventListener("focus", () => topbar.classList.add("searching"));
  searchInput.addEventListener("blur", () => { if (!state.query) topbar.classList.remove("searching"); });
  searchInput.addEventListener("keydown", ev => { if (ev.key === "Enter") searchInput.blur(); if (ev.key === "Escape") { leereSuche(); render(); searchInput.blur(); } });
  $("searchClear").onclick = () => { leereSuche(); render(); };
  function leereSuche() {
    searchInput.value = ""; state.query = "";
    $("searchClear").hidden = true; topbar.classList.remove("searching");
  }

  document.addEventListener("keydown", ev => { if (ev.key === "Escape") schliesseDetail(); });
  window.addEventListener("scroll", () => topbar.classList.toggle("scrolled", window.scrollY > 4), { passive: true });

  render();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
