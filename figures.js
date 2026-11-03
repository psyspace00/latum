// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// Mein medizinisches Latum – schematische Abbildungen (SVG)
// Jede Struktur trägt in data-p ein oder mehrere Kürzel (das erste bestimmt, was beim Antippen geöffnet wird).
// "teile" ordnet die Kürzel den lateinischen Begriffen aus data.js zu.

const FIGUREN = (function () {
  "use strict";

  // ---------- Zeichenhilfen ----------
  const r = n => Math.round(n * 10) / 10;
  const pts = a => a.map(p => r(p[0]) + "," + r(p[1])).join(" ");
  const dp = t => (t ? ` data-p="${t}"` : "");
  const poly = (t, c, a, x = "") => `<polygon${dp(t)} class="${c}" points="${pts(a)}"${x}/>`;
  const path = (t, c, d, x = "") => `<path${dp(t)} class="${c}" d="${d}"${x}/>`;
  const ell = (t, c, cx, cy, rx, ry, x = "") => `<ellipse${dp(t)} class="${c}" cx="${r(cx)}" cy="${r(cy)}" rx="${rx}" ry="${ry}"${x}/>`;
  const circ = (t, c, cx, cy, rr, x = "") => `<circle${dp(t)} class="${c}" cx="${r(cx)}" cy="${r(cy)}" r="${rr}"${x}/>`;
  const rect = (t, c, x, y, w, h, x2 = "") => `<rect${dp(t)} class="${c}" x="${x}" y="${y}" width="${w}" height="${h}"${x2}/>`;
  const ln = (t, c, d, w, x = "") => `<path${dp(t)} class="ln ${c}" d="${d}" stroke-width="${w}"${x}/>`;
  const lnp = (t, c, a, w, x = "") => ln(t, c, "M" + a.map(p => r(p[0]) + "," + r(p[1])).join(" L"), w, x);
  const B = f => f(-1) + f(1);
  const deco = s => `<g class="deco">${s}</g>`;

  // Catmull-Rom → Bézier (glatte Umrisse)
  function smooth(p, closed = true) {
    const n = p.length, g = i => closed ? p[(i + n) % n] : p[Math.max(0, Math.min(n - 1, i))];
    let d = `M${r(p[0][0])},${r(p[0][1])}`;
    for (let i = 0; i < (closed ? n : n - 1); i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      d += `C${r(p1[0] + (p2[0] - p0[0]) / 6)},${r(p1[1] + (p2[1] - p0[1]) / 6)} ${r(p2[0] - (p3[0] - p1[0]) / 6)},${r(p2[1] - (p3[1] - p1[1]) / 6)} ${r(p2[0])},${r(p2[1])}`;
    }
    return d + (closed ? "Z" : "");
  }

  // Körpersilhouette (Vorderansicht), rechte Hälfte relativ zur Mittellinie
  const BODY = [[10,64],[12,80],[40,87],[54,98],[60,140],[64,190],[70,240],[73,280],[78,298],[72,316],[62,312],[60,282],[54,240],[48,195],[42,150],[38,124],[36,160],[33,200],[42,250],[44,300],[37,380],[38,420],[27,478],[34,498],[10,500],[12,478],[12,420],[11,380],[5,300]];
  function bodyPath(cx) {
    const R = BODY.map(p => [cx + p[0], p[1]]), L = BODY.slice().reverse().map(p => [cx - p[0], p[1]]);
    return smooth(R.concat([[cx, 272]], L));
  }
  const koerper = (cx, c = "f-skin", t = "") => path(t, c, bodyPath(cx)) + ell(t, c, cx, 38, 22, 28);
  const clipBody = (id, cx) => `<clipPath id="${id}"><path d="${bodyPath(cx)}"/><ellipse cx="${cx}" cy="38" rx="22" ry="28"/></clipPath>`;
  // beidseitige Formen in Mittellinien-Koordinaten [dx, y]
  const bpoly = (t, c, a, cx) => B(s => poly(t, c, a.map(p => [cx + s * p[0], p[1]])));
  const blnp = (t, c, a, w, cx, x = "") => B(s => lnp(t, c, a.map(p => [cx + s * p[0], p[1]]), w, x));
  const bell = (t, c, dx, y, rx, ry, cx) => B(s => ell(t, c, cx + s * dx, y, rx, ry));
  const bcirc = (t, c, dx, y, rr, cx) => B(s => circ(t, c, cx + s * dx, y, rr));
  // einseitig mit Vorzeichen (negativ = rechte Körperseite des Patienten = links im Bild)
  const at = (a, cx) => a.map(p => [cx + p[0], p[1]]);

  function pfeil(t, x1, y1, x2, y2, c = "k-accent") {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const p1 = [x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)], p2 = [x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)];
    return `<g${dp(t)} class="arrow">` + lnp("", c, [[x1, y1], [x2, y2]], 2.5) + poly("", "f-accent", [[x2, y2], p1, p2]) + "</g>";
  }
  const txt = (t, x, y, s, anchor = "middle") => `<text${dp(t)} class="lbl" x="${x}" y="${y}" text-anchor="${anchor}">${s}</text>`;

  const F = [];

  // =====================================================================
  // ORIENTIERUNG
  F.push({
    id: "richtungen", kats: ["orientierung"], titel: "Richtungen und Ebenen", vb: "0 0 360 520",
    svg: u => {
      const c = 150;
      let o = koerper(c, "f-skinl");
      o += ln("planum_medianum medianus", "k-dash", `M${c},0 L${c},520`, 2, ' stroke-dasharray="6 5"');
      o += ln("planum_sagittale", "k-dash", `M${c - 26},0 L${c - 26},520`, 1.6, ' stroke-dasharray="3 4"');
      o += ln("planum_transversale", "k-dash", `M10,226 L300,226`, 1.6, ' stroke-dasharray="3 4"');
      o += pfeil("cranialis", 300, 250, 300, 40) + txt("cranialis", 300, 30, "cranialis");
      o += pfeil("caudalis", 300, 270, 300, 480) + txt("caudalis", 300, 500, "caudalis");
      o += pfeil("medialis", 20, 160, 105, 160) + txt("medialis", 20, 150, "medialis", "start");
      o += pfeil("lateralis", 192, 160, 268, 160) + txt("lateralis", 262, 150, "lateralis", "end");
      o += pfeil("proximalis", 230, 268, 214, 118) + txt("proximalis", 238, 108, "proximalis", "start");
      o += pfeil("distalis", 240, 140, 252, 300) + txt("distalis", 256, 316, "distalis");
      o += txt("dexter", 60, 512, "dexter") + txt("sinister", 240, 512, "sinister");
      return o;
    },
    teile: {
      planum_medianum: ["Planum medianum", "medianus"], planum_sagittale: ["Planum sagittale"], planum_transversale: ["Planum transversale"],
      cranialis: ["cranialis", "superior"], caudalis: ["caudalis", "inferior"], medialis: ["medialis"], lateralis: ["lateralis"],
      proximalis: ["proximalis"], distalis: ["distalis"], dexter: ["dexter"], sinister: ["sinister"]
    }
  });

  // =====================================================================
  // KÖRPERREGIONEN
  F.push({
    id: "regionen", kats: ["regionen"], titel: "Körperregionen (vorne / hinten)", vb: "0 0 400 520",
    svg: u => {
      const v = 105, h = 295;
      const R = (t, cx, a) => poly(t, "f-reg", at(a, cx));
      const BR = (t, cx, a) => bpoly(t, "f-reg", a, cx);
      let o = `<defs>${clipBody("cv" + u, v)}${clipBody("ch" + u, h)}</defs>`;
      o += koerper(v, "f-skin") + koerper(h, "f-skin");
      // Vorderseite
      let f = "";
      f += ell("caput", "f-reg", v, 38, 22, 28) + ell("facies", "f-reg", v, 44, 16, 19) + ell("frons", "f-reg", v, 25, 13, 5);
      f += bell("tempora", "f-reg", 17, 30, 3.5, 6, v) + bell("oculus", "f-reg", 7.5, 37, 4, 2.4, v) + bell("bucca", "f-reg", 11, 49, 4, 5, v);
      f += poly("nasus", "f-reg", at([[0, 37], [4, 48], [-4, 48]], v)) + ell("mund", "f-reg", v, 55, 6, 2.4) + ell("mentum", "f-reg", v, 62, 6, 3);
      f += bell("auris", "f-reg", 22, 40, 3, 7, v);
      f += R("collum", v, [[-12, 64], [12, 64], [12, 86], [-12, 86]]);
      f += R("thorax pectus", v, [[-38, 86], [38, 86], [37, 160], [-37, 160]]);
      f += ell("fossa_jug", "f-reg", v, 89, 4, 3) + bell("fossa_supracl", "f-reg", 22, 90, 9, 3, v);
      f += R("sternalis", v, [[-5, 92], [5, 92], [5, 150], [-5, 150]]);
      f += bell("mamma", "f-reg", 18, 132, 9, 8, v) + bell("axilla", "f-reg", 40, 124, 4, 7, v);
      f += bell("deltoidea", "f-reg", 50, 106, 9, 15, v);
      f += R("abdomen", v, [[-37, 160], [37, 160], [40, 252], [-40, 252]]);
      f += R("epigastrium", v, [[-16, 160], [16, 160], [15, 195], [-15, 195]]) + BR("hypochondrium", v, [[16, 160], [37, 160], [35, 195], [15, 195]]);
      f += BR("lateralis_r", v, [[18, 196], [36, 196], [38, 228], [18, 228]]) + R("umbilicalis", v, [[-15, 196], [15, 196], [15, 228], [-15, 228]]);
      f += circ("umbilicus", "f-reg", v, 212, 3.5);
      f += R("hypogastrium", v, [[-15, 228], [15, 228], [13, 256], [-13, 256]]) + BR("inguen", v, [[17, 236], [39, 244], [30, 266], [13, 260]]);
      f += R("pudendum", v, [[-9, 258], [9, 258], [0, 276]]) + bell("coxa", "f-reg", 41, 254, 5, 11, v);
      f += BR("brachium", v, [[40, 110], [82, 110], [82, 186], [40, 186]]) + BR("fossa_cubitalis cubitus", v, [[40, 186], [84, 186], [84, 202], [40, 202]]);
      f += BR("antebrachium", v, [[44, 202], [92, 202], [92, 276], [44, 276]]) + BR("carpus", v, [[50, 276], [92, 276], [92, 287], [50, 287]]);
      f += BR("palma manus", v, [[50, 287], [92, 287], [92, 322], [50, 322]]);
      f += BR("femur_reg", v, [[2, 270], [50, 262], [50, 366], [2, 366]]) + BR("genu", v, [[2, 366], [50, 366], [50, 394], [2, 394]]);
      f += BR("crus", v, [[2, 394], [50, 394], [50, 472], [2, 472]]) + bcirc("malleolus", "f-reg", 27, 478, 3, v) + bcirc("malleolus", "f-reg", 12, 478, 3, v);
      f += BR("pes dorsum_pedis", v, [[2, 483], [50, 483], [50, 505], [2, 505]]) + bell("hallux", "f-reg", 12, 500, 3, 2.5, v);
      o += `<g clip-path="url(#cv${u})">${f}</g>`;
      // Rückseite
      let b = "";
      b += ell("occiput", "f-reg", h, 40, 20, 22) + ell("vertex", "f-reg", h, 15, 12, 5) + bell("auris", "f-reg", 22, 40, 3, 7, h);
      b += R("nucha", h, [[-12, 64], [12, 64], [12, 86], [-12, 86]]);
      b += R("dorsum vertebralis_r", h, [[-38, 86], [38, 86], [34, 200], [-34, 200]]) + R("vertebralis_r", h, [[-5, 88], [5, 88], [5, 236], [-5, 236]]);
      b += BR("scapularis", h, [[10, 96], [34, 96], [30, 140], [14, 136]]) + bell("deltoidea", "f-reg", 50, 106, 9, 15, h);
      b += R("lumbus", h, [[-34, 200], [34, 200], [40, 238], [-40, 238]]) + R("sacralis", h, [[-11, 236], [11, 236], [0, 264]]);
      b += BR("nates", h, [[1, 240], [42, 248], [45, 292], [1, 294]]) + bcirc("trochanterica", "f-reg", 43, 268, 5, h);
      b += BR("brachium", h, [[40, 110], [82, 110], [82, 186], [40, 186]]) + BR("cubitus", h, [[40, 186], [84, 186], [84, 202], [40, 202]]);
      b += BR("antebrachium", h, [[44, 202], [92, 202], [92, 276], [44, 276]]) + BR("dorsum_manus", h, [[50, 287], [92, 287], [92, 322], [50, 322]]);
      b += BR("femur_reg", h, [[2, 294], [50, 292], [50, 366], [2, 366]]) + BR("fossa_poplitea", h, [[2, 366], [50, 366], [50, 392], [2, 392]]);
      b += BR("sura", h, [[2, 392], [50, 392], [50, 462], [2, 462]]) + BR("crus", h, [[2, 462], [50, 462], [50, 488], [2, 488]]);
      b += bell("calx", "f-reg", 20, 500, 9, 5, h);
      o += `<g clip-path="url(#ch${u})">${b}</g>`;
      o += deco(txt("", v, 516, "vorne") + txt("", h, 516, "hinten"));
      return o;
    },
    teile: {
      caput: ["Caput"], facies: ["Facies"], frons: ["Frons"], tempora: ["Tempora"], oculus: ["Oculus"], bucca: ["Bucca"], nasus: ["Nasus"],
      mund: ["Os, Oris", "Regio oralis"], mentum: ["Mentum"], auris: ["Auris"], collum: ["Collum"], thorax: ["Thorax", "Pectus"],
      fossa_jug: ["Fossa jugularis"], fossa_supracl: ["Fossa supraclavicularis"], sternalis: ["Regio sternalis"], mamma: ["Mamma"], axilla: ["Axilla"],
      deltoidea: ["Regio deltoidea"], abdomen: ["Abdomen"], epigastrium: ["Epigastrium"], hypochondrium: ["Hypochondrium"], lateralis_r: ["Regio lateralis"],
      umbilicalis: ["Regio umbilicalis"], umbilicus: ["Umbilicus"], hypogastrium: ["Hypogastrium"], inguen: ["Inguen"], pudendum: ["Pudendum"], coxa: ["Coxa"],
      brachium: ["Brachium", "Membrum superius"], fossa_cubitalis: ["Fossa cubitalis"], cubitus: ["Cubitus"], antebrachium: ["Antebrachium"], carpus: ["Carpus", "Regio carpalis"],
      palma: ["Palma manus"], manus: ["Manus"], femur_reg: ["Femur (Regio femoris)", "Membrum inferius"], genu: ["Genu"], crus: ["Crus"], malleolus: ["Malleolus"],
      pes: ["Pes", "Tarsus"], dorsum_pedis: ["Dorsum pedis"], hallux: ["Hallux"], occiput: ["Occiput"], vertex: ["Vertex"], nucha: ["Nucha"],
      dorsum: ["Dorsum", "Truncus"], vertebralis_r: ["Regio vertebralis"], scapularis: ["Regio scapularis"], lumbus: ["Lumbus"], sacralis: ["Regio sacralis"],
      nates: ["Nates"], trochanterica: ["Regio trochanterica"], dorsum_manus: ["Dorsum manus"], fossa_poplitea: ["Fossa poplitea"], sura: ["Sura"], calx: ["Calx"]
    }
  });

  // =====================================================================
  // ZELLE
  F.push({
    id: "zelle", kats: ["zelle"], titel: "Zelle", vb: "0 0 360 260",
    svg: () => {
      let o = ell("membrana cytoplasma", "f-cyto", 180, 130, 166, 116) + ell("membrana", "f-none k-membrane", 180, 130, 166, 116, ' stroke-width="4"');
      // raues ER
      for (let i = 0; i < 4; i++) {
        const y = 62 + i * 10;
        o += ln("rer er", "k-er", `M${70 + i * 6},${y + 40} Q${92 + i * 4},${y - 4} ${128 + i * 2},${y - 14}`, 3.5);
        for (let k = 0; k < 4; k++) o += circ("ribosom", "f-ribo", 82 + i * 6 + k * 11, y + 22 - k * 9, 1.8);
      }
      // glattes ER
      o += ln("ser er", "k-er", "M60,170 C80,150 100,190 120,168 C135,152 150,186 160,176", 4);
      o += ln("ser er", "k-er", "M68,186 C88,170 104,204 124,186", 4);
      // Zellkern
      o += circ("nucleus", "f-nucleus", 178, 120, 48) + circ("nucleus", "f-none k-nucleus", 178, 120, 48, ' stroke-width="3" stroke-dasharray="10 3"');
      o += circ("nucleolus", "f-nucleolus", 190, 110, 14);
      o += deco(circ("", "f-chrom", 160, 100, 3) + circ("", "f-chrom", 165, 140, 2.5) + circ("", "f-chrom", 205, 135, 2.5) + circ("", "f-chrom", 150, 125, 2));
      o += circ("chromosom", "spot", 160, 100, 7);
      // Golgi
      for (let i = 0; i < 4; i++) o += ln("golgi", "k-golgi", `M${244 + i * 6},${150 + i * 3} Q${270 + i * 6},${168 + i * 4} ${296 + i * 4},${150 + i * 6}`, 3.5);
      // Mitochondrien
      [[96, 210, -20], [270, 70, 25], [232, 220, 5]].forEach(m => {
        o += `<g data-p="mito" transform="rotate(${m[2]} ${m[0]} ${m[1]})">` + ell("", "f-mito", m[0], m[1], 26, 12) +
          ln("", "k-cristae", `M${m[0] - 18},${m[1] + 6} L${m[0] - 14},${m[1] - 6} L${m[0] - 6},${m[1] + 6} L${m[0] + 2},${m[1] - 6} L${m[0] + 10},${m[1] + 6} L${m[0] + 16},${m[1] - 6}`, 1.6) + "</g>";
      });
      o += circ("lyso", "f-lyso", 312, 120, 11) + circ("lyso", "f-lyso", 140, 218, 9);
      o += circ("vesikel", "f-vesicle", 320, 170, 6) + circ("vesikel", "f-vesicle", 300, 196, 5);
      o += circ("peroxisom", "f-perox", 70, 120, 8);
      o += rect("zentriol", "f-centriole", 236, 92, 14, 5) + rect("zentriol", "f-centriole", 254, 86, 5, 14);
      // Mikrovilli oben
      for (let i = 0; i < 9; i++) { const x = 140 + i * 10; o += ln("mikrovilli", "k-membrane", `M${x},${20 - Math.abs(4 - i) * 0.8 + 4} L${x},${4 + Math.abs(4 - i) * 0.8}`, 3); }
      return o;
    },
    teile: {
      membrana: ["Membrana cellularis", "Cellula"], cytoplasma: ["Cytoplasma"], nucleus: ["Nucleus"], nucleolus: ["Nucleolus"], chromosom: ["Chromosoma", "Acidum desoxyribonucleinicum"],
      rer: ["Reticulum endoplasmaticum"], er: ["Reticulum endoplasmaticum"], ser: ["Reticulum endoplasmaticum"], ribosom: ["Ribosoma"], golgi: ["Apparatus Golgii"],
      mito: ["Mitochondrium"], lyso: ["Lysosoma"], vesikel: ["Exocytosis", "Endocytosis"], peroxisom: ["Peroxisoma"], zentriol: ["Centriolum"], mikrovilli: ["Microvilli"]
    }
  });

  // =====================================================================
  // SKELETT
  F.push({
    id: "skelett", kats: ["knochen"], titel: "Skelett (Vorderansicht)", vb: "0 0 300 604",
    svg: () => {
      const c = 150, X = (s, d) => c + s * d;
      let o = "";
      o += ln("hws columna", "k-bone", "M150,104 L150,136", 9, ' stroke-dasharray="3.6 1.2"');
      o += ln("bws columna", "k-bone", "M150,136 L150,236", 11, ' stroke-dasharray="6.6 1.6"');
      o += ln("lws columna", "k-bone", "M150,236 L150,288", 14, ' stroke-dasharray="8.6 1.8"');
      o += poly("sacrum", "f-bone", [[136, 288], [164, 288], [150, 326]]) + ln("coccygis", "k-bone", "M150,328 L150,338", 4);
      o += B(s => poly("scapula", "f-bonel", [[X(s, 52), 112], [X(s, 28), 118], [X(s, 38), 176]]));
      for (let i = 0; i < 12; i++) {
        const y = 124 + i * 9, ex = i < 4 ? 32 + i * 6 : (i < 8 ? 50 : 50 - (i - 7) * 3), sx = i < 10 ? 13 : 26;
        const t = i < 7 ? "costa costae_verae thorax" : i < 10 ? "costa costae_spuriae thorax" : "costa costae_fluct thorax";
        o += B(s => ln(t, "k-bone", `M${X(s, sx)},${y} C${X(s, sx + 22)},${y - 8} ${X(s, ex)},${y - 6} ${X(s, ex)},${y + 10}`, 3.4));
        if (i < 10) o += B(s => ln("rippenknorpel", "k-cart", `M${X(s, 6)},${y} L${X(s, 13)},${y}`, 3));
      }
      o += B(s => ln("arcus_costalis", "k-cart", `M${X(s, 5)},212 Q${X(s, 22)},226 ${X(s, 44)},232`, 3));
      o += poly("manubrium sternum", "f-bone", [[142, 118], [158, 118], [156, 136], [144, 136]]);
      o += poly("corpus_sterni sternum", "f-bone", [[144, 137], [156, 137], [155, 200], [145, 200]]);
      o += poly("xiphoid sternum", "f-bone", [[146, 201], [154, 201], [150, 214]]);
      o += circ("angulus_sterni", "spot", 150, 136.5, 4);
      // Schädel
      o += ell("cranium", "f-bone", 150, 52, 34, 40);
      o += deco(ell("", "f-dark", 137, 50, 8, 7) + ell("", "f-dark", 163, 50, 8, 7) + poly("", "f-dark", [[150, 58], [146, 70], [154, 70]]));
      o += path("mandibula", "f-bone", "M122,70 Q126,102 150,106 Q174,102 178,70 L170,76 Q150,94 130,76 Z");
      o += deco(rect("", "f-white", 138, 77, 24, 5));
      // Arme
      o += B(s => ln("clavicula", "k-bone", `M${X(s, 4)},116 Q${X(s, 25)},106 ${X(s, 50)},112`, 6));
      o += B(s => ln("humerus", "k-bone", `M${X(s, 54)},124 L${X(s, 68)},214`, 9) + circ("caput_humeri humerus", "f-bone", X(s, 53), 121, 8));
      o += B(s => circ("epicondylus humerus", "spot", X(s, 69), 214, 6));
      o += B(s => ln("radius", "k-bone", `M${X(s, 72)},220 L${X(s, 88)},300`, 5) + ln("ulna", "k-bone", `M${X(s, 64)},220 L${X(s, 76)},302`, 5));
      o += B(s => ell("carpus", "f-bone", X(s, 82), 311, 10, 7));
      o += B(s => {
        let h = "";
        for (let k = 0; k < 5; k++) {
          const a = k === 0 ? [90, 316] : [88 - (k - 1) * 5, 318], e = k === 0 ? [102, 334] : [96 - (k - 1) * 7, 346], f = k === 0 ? [108, 350] : [e[0] - (k - 1) * 1.5 + 1, 370];
          h += ln("metacarpi", "k-bone", `M${X(s, a[0])},${a[1]} L${X(s, e[0])},${e[1]}`, 3) + ln("phalanges", "k-bone", `M${X(s, e[0])},${e[1] + 2} L${X(s, f[0])},${f[1]}`, 2.6);
        }
        return h;
      });
      // Becken
      o += B(s => path("ilium os_coxae", "f-bone", `M${X(s, 10)},288 Q${X(s, 38)},272 ${X(s, 52)},286 Q${X(s, 54)},316 ${X(s, 30)},330 L${X(s, 14)},314 Z`));
      o += B(s => ln("crista_iliaca", "k-bonedk", `M${X(s, 10)},288 Q${X(s, 38)},272 ${X(s, 52)},286`, 2.5));
      o += B(s => circ("sias", "spot", X(s, 50), 294, 3.5));
      o += B(s => path("pubis os_coxae", "f-bone", `M${X(s, 22)},336 Q${X(s, 10)},346 ${X(s, 3)},344 L${X(s, 3)},334 Q${X(s, 12)},334 ${X(s, 18)},328 Z`));
      o += B(s => path("ischii os_coxae", "f-bone", `M${X(s, 32)},332 Q${X(s, 38)},356 ${X(s, 22)},360 Q${X(s, 16)},352 ${X(s, 20)},340 Z`));
      o += B(s => circ("tuber_isch", "spot", X(s, 28), 357, 3.5) + ell("foramen_obt", "f-darkl", X(s, 19), 344, 4, 5));
      o += rect("symphysis", "f-cart", 147, 333, 6, 12);
      // Beine
      o += B(s => circ("acetabulum", "f-dark", X(s, 32), 328, 8.5));
      o += B(s => ln("collum_femoris femur", "k-bone", `M${X(s, 32)},328 L${X(s, 44)},342`, 7) + ln("femur", "k-bone", `M${X(s, 44)},342 L${X(s, 32)},452`, 10));
      o += B(s => ell("trochanter femur", "f-bone", X(s, 48), 342, 6, 7) + circ("caput_femoris femur", "f-bone", X(s, 32), 328, 6.5));
      o += B(s => ell("condylus_fem femur", "f-bone", X(s, 38), 456, 7, 6) + ell("condylus_fem femur", "f-bone", X(s, 24), 456, 7, 6));
      o += B(s => ell("patella", "f-bonel", X(s, 31), 458, 6, 8));
      o += B(s => poly("tibia", "f-bone", [[X(s, 40), 466], [X(s, 16), 466], [X(s, 18), 474], [X(s, 38), 474]]) + ln("tibia", "k-bone", `M${X(s, 27)},472 L${X(s, 24)},555`, 9));
      o += B(s => circ("tuberositas_tib tibia", "spot", X(s, 28), 482, 4));
      o += B(s => ln("fibula", "k-bone", `M${X(s, 42)},478 L${X(s, 40)},552`, 4) + circ("caput_fib fibula", "f-bone", X(s, 42), 475, 3.6));
      o += B(s => circ("mall_med", "f-bone", X(s, 20), 557, 4) + circ("mall_lat", "f-bone", X(s, 41), 556, 4));
      o += B(s => ell("tarsus", "f-bone", X(s, 29), 566, 12, 6));
      o += B(s => {
        let h = "";
        for (let k = 0; k < 5; k++) {
          const a = [38 - k * 4.5, 571], e = [44 - k * 7, 590];
          h += ln("metatarsi", "k-bone", `M${X(s, a[0])},${a[1]} L${X(s, e[0])},${e[1]}`, k === 4 ? 3.6 : 2.8) + ln("phalanges", "k-bone", `M${X(s, e[0])},${e[1] + 2} L${X(s, e[0] - 0.5)},${598}`, k === 4 ? 3.4 : 2.4);
        }
        return h;
      });
      return o;
    },
    teile: {
      columna: ["Columna vertebralis"], hws: ["Vertebrae cervicales"], bws: ["Vertebrae thoracicae"], lws: ["Vertebrae lumbales"], sacrum: ["Os sacrum"], coccygis: ["Os coccygis"],
      scapula: ["Scapula"], costa: ["Costa (Pl. Costae)"], costae_verae: ["Costae verae"], costae_spuriae: ["Costae spuriae"], costae_fluct: ["Costae fluctuantes"],
      thorax: ["Thorax", "Apertura thoracis superior", "Apertura thoracis inferior"], rippenknorpel: ["Cartilago costalis"], arcus_costalis: ["Arcus costalis"],
      sternum: ["Sternum"], manubrium: ["Manubrium sterni", "Incisura jugularis"], corpus_sterni: ["Corpus sterni"], xiphoid: ["Processus xiphoideus"], angulus_sterni: ["Angulus sterni"],
      cranium: ["Cranium", "Neurocranium", "Calvaria"], mandibula: ["Mandibula"], clavicula: ["Clavicula", "Cingulum pectorale"], humerus: ["Humerus"], caput_humeri: ["Caput humeri"],
      epicondylus: ["Epicondylus medialis humeri", "Epicondylus lateralis humeri", "Epicondylus"], radius: ["Radius"], ulna: ["Ulna"], carpus: ["Ossa carpi"],
      metacarpi: ["Ossa metacarpi"], phalanges: ["Phalanges"], os_coxae: ["Os coxae", "Cingulum pelvicum"], ilium: ["Os ilium", "Ala ossis ilii"], crista_iliaca: ["Crista iliaca"],
      sias: ["Spina iliaca anterior superior"], pubis: ["Os pubis"], ischii: ["Os ischii"], tuber_isch: ["Tuber ischiadicum"], foramen_obt: ["Foramen obturatum"],
      symphysis: ["Symphysis pubica"], acetabulum: ["Acetabulum"], femur: ["Femur"], collum_femoris: ["Collum femoris"], trochanter: ["Trochanter major"],
      caput_femoris: ["Caput femoris"], condylus_fem: ["Condylus medialis femoris", "Condylus lateralis femoris"], patella: ["Patella"], tibia: ["Tibia"],
      tuberositas_tib: ["Tuberositas tibiae"], fibula: ["Fibula"], caput_fib: ["Caput fibulae"], mall_med: ["Malleolus medialis"], mall_lat: ["Malleolus lateralis"],
      tarsus: ["Ossa tarsi", "Talus", "Calcaneus", "Os naviculare", "Os cuboideum", "Ossa cuneiformia"], metatarsi: ["Ossa metatarsi"]
    }
  });

  // SCHÄDEL
  F.push({
    id: "schaedel", kats: ["knochen"], titel: "Schädel (Seitenansicht)", vb: "0 0 360 300",
    svg: () => {
      let o = "";
      o += path("frontale", "f-bone", "M70,150 Q52,70 150,42 L165,45 L160,120 L120,130 L95,150 Z");
      o += path("parietale", "f-bonel", "M165,45 Q240,36 282,90 L250,140 L200,130 L160,120 Z");
      o += path("occipitale", "f-bone", "M282,90 Q318,140 296,200 L260,200 L250,140 Z");
      o += path("temporale", "f-bone2", "M160,120 L200,130 L250,140 L260,200 L230,206 Q200,200 185,176 L170,150 Z");
      o += path("sphenoidale", "f-bone3", "M120,130 L160,120 L170,150 L150,166 L125,156 Z");
      o += path("zygomaticum", "f-bone2", "M95,165 L125,156 L150,166 L186,176 L182,184 L150,180 L125,182 L100,192 Z");
      o += path("arcus_zyg", "spot", "M150,166 L186,176 L182,184 L150,180 Z");
      o += path("nasale", "f-bone3", "M70,150 L82,152 L74,178 L64,172 Z");
      o += path("maxilla", "f-bone", "M64,172 L74,178 L100,192 L125,182 L132,206 L122,226 L75,226 Q60,206 64,172 Z");
      o += ell("orbita", "f-dark", 98, 150, 18, 15) + ell("lacrimale", "f-bone3", 84, 153, 4, 6) + ell("ethmoidale", "f-bone2", 91, 145, 4, 5);
      o += rect("dentes", "f-tooth", 76, 226, 50, 9) + rect("dentes", "f-tooth", 78, 237, 46, 8);
      o += path("mandibula", "f-bone", "M76,246 L126,246 L140,226 L166,192 L180,196 L174,216 L162,262 Q122,278 86,270 Q70,258 76,246 Z");
      o += circ("angulus_mand", "spot", 160, 260, 7) + circ("proc_condyl", "spot", 175, 194, 6);
      o += ell("meatus", "f-dark", 216, 176, 6, 7) + path("mastoideus", "f-bone2", "M232,198 Q244,222 236,232 Q226,222 226,204 Z");
      o += ln("sutura sutura_cor", "k-suture", "M165,45 L160,120", 2) + ln("sutura sutura_lambd", "k-suture", "M282,90 L250,140", 2) + ln("sutura sutura_squam", "k-suture", "M160,120 L250,140", 2);
      o += path("hyoideum", "f-bone", "M128,290 Q146,282 160,290 L158,294 Q146,288 130,294 Z");
      return o;
    },
    teile: {
      frontale: ["Os frontale"], parietale: ["Os parietale"], occipitale: ["Os occipitale"], temporale: ["Os temporale"], sphenoidale: ["Os sphenoidale"],
      zygomaticum: ["Os zygomaticum"], arcus_zyg: ["Arcus zygomaticus"], nasale: ["Os nasale"], maxilla: ["Maxilla", "Processus alveolaris"], orbita: ["Orbita"],
      lacrimale: ["Os lacrimale"], ethmoidale: ["Os ethmoidale"], dentes: ["Dens (Pl. Dentes)"], mandibula: ["Mandibula"], angulus_mand: ["Angulus mandibulae"],
      proc_condyl: ["Processus condylaris", "Articulatio temporomandibularis"], meatus: ["Meatus acusticus externus"], mastoideus: ["Processus mastoideus"],
      sutura: ["Sutura"], sutura_cor: ["Sutura coronalis"], sutura_lambd: ["Sutura lambdoidea"], sutura_squam: ["Sutura squamosa"], hyoideum: ["Os hyoideum"]
    }
  });

  // WIRBELSÄULE
  F.push({
    id: "wirbelsaeule", kats: ["knochen"], titel: "Wirbelsäule (Seitenansicht, vorne links)", vb: "0 0 220 430",
    svg: () => {
      const xc = y => y < 112 ? 110 - 14 * Math.sin(Math.PI * (y - 18) / 94) : y < 262 ? 110 + 18 * Math.sin(Math.PI * (y - 112) / 150) : 110 - 16 * Math.sin(Math.PI * (y - 262) / 82);
      let o = "", y = 20;
      const seg = [];
      for (let i = 0; i < 7; i++) seg.push({ h: 10, w: 24, t: (i === 0 ? "atlas " : i === 1 ? "axis " : i === 6 ? "prominens " : "") + "hws corpus_v lordose" });
      for (let i = 0; i < 12; i++) seg.push({ h: 10.5, w: 30, t: "bws corpus_v kyphose" });
      for (let i = 0; i < 5; i++) seg.push({ h: 14, w: 38, t: "lws corpus_v lordose" });
      seg.forEach((s, i) => {
        const x = xc(y + s.h / 2);
        o += rect(s.t, "f-bone", r(x - s.w / 2), r(y), s.w, s.h, ' rx="2"');
        o += poly("spinosus", "f-bonel", [[x + s.w / 2, y + 2], [x + s.w / 2 + 16 + (s.w > 30 ? 4 : 0), y + s.h * 0.6 + (i > 6 && i < 19 ? 6 : 0)], [x + s.w / 2, y + s.h - 2]]);
        y += s.h;
        if (i < seg.length - 1) { const xd = xc(y + 1.5); o += rect("discus", "f-cart", r(xd - s.w / 2 + 2), r(y), s.w - 4, 3, ' rx="1"'); y += 3; }
      });
      const ys = y + 3, xs = xc(ys);
      o += path("sacrum kyphose", "f-bone", `M${r(xs - 22)},${r(ys)} L${r(xs + 18)},${r(ys)} Q${r(xs + 34)},${r(ys + 40)} ${r(xs + 18)},${r(ys + 70)} L${r(xs + 6)},${r(ys + 72)} Q${r(xs + 10)},${r(ys + 30)} ${r(xs - 22)},${r(ys)} Z`);
      o += circ("promontorium", "spot", xs - 20, ys, 5);
      o += ln("coccygis", "k-bone", `M${r(xs + 12)},${r(ys + 74)} Q${r(xs + 10)},${r(ys + 86)} ${r(xs + 2)},${r(ys + 92)}`, 5);
      o += ln("canalis_v", "k-canal", (() => { let d = "M"; for (let yy = 20; yy < ys; yy += 8) d += `${r(xc(yy) + 13 + (yy > 262 ? 4 : 0))},${yy} L`; return d.slice(0, -2); })(), 3, ' stroke-dasharray="2 3"');
      return o;
    },
    teile: {
      hws: ["Vertebrae cervicales"], atlas: ["Atlas"], axis: ["Axis", "Dens axis"], prominens: ["Vertebra prominens"], bws: ["Vertebrae thoracicae"], lws: ["Vertebrae lumbales"],
      corpus_v: ["Corpus vertebrae", "Vertebra"], spinosus: ["Processus spinosus"], discus: ["Discus intervertebralis", "Nucleus pulposus", "Anulus fibrosus"],
      lordose: ["Lordosis"], kyphose: ["Kyphosis"], sacrum: ["Os sacrum"], promontorium: ["Promontorium"], coccygis: ["Os coccygis"], canalis_v: ["Canalis vertebralis", "Foramen vertebrale"]
    }
  });

  // =====================================================================
  // GELENKE
  F.push({
    id: "gelenk", kats: ["gelenke"], titel: "Aufbau eines echten Gelenks", vb: "0 0 300 260",
    svg: () => {
      let o = "";
      o += ell("cavitas synovia", "f-fluid", 150, 152, 58, 30);
      o += path("os", "f-bone", "M110,10 H190 V110 Q190,140 150,140 Q110,140 110,110 Z");
      o += path("os", "f-bone", "M110,250 H190 V172 Q150,154 110,172 Z");
      o += path("knorpel", "f-cart", "M110,108 Q110,140 150,140 Q190,140 190,108 L184,108 Q184,133 150,133 Q116,133 116,108 Z");
      o += path("knorpel", "f-cart", "M110,166 Q150,148 190,166 L190,174 Q150,157 110,174 Z");
      o += B(s => poly("discus_a", "f-cart2", s < 0 ? [[106, 150], [126, 148], [106, 162]] : [[194, 150], [174, 148], [194, 162]]));
      o += B(s => ln("membrana_syn", "k-synovial", s < 0 ? "M100,96 Q90,152 100,188" : "M200,96 Q210,152 200,188", 3));
      o += B(s => ln("kapsel", "k-capsule", s < 0 ? "M94,90 Q82,152 94,194" : "M206,90 Q218,152 206,194", 6));
      o += B(s => ln("band", "k-lig", s < 0 ? "M84,80 L84,206" : "M216,80 L216,206", 5));
      o += ell("bursa", "f-fluid2", 236, 120, 9, 16);
      o += deco(txt("", 150, 70, "Knochen") + txt("", 150, 222, "Knochen"));
      return o;
    },
    teile: {
      cavitas: ["Cavitas articularis", "Articulatio", "Diarthrosis"], synovia: ["Synovia"], os: ["Os, Ossis (Pl. Ossa)"], knorpel: ["Cartilago articularis"],
      discus_a: ["Discus articularis", "Meniscus"], membrana_syn: ["Membrana synovialis"], kapsel: ["Capsula articularis", "Membrana fibrosa"], band: ["Ligamentum"], bursa: ["Bursa synovialis"]
    }
  });

  F.push({
    id: "knie", kats: ["gelenke"], titel: "Kniegelenk (linkes Knie, von vorne)", vb: "0 0 300 300",
    svg: () => {
      let o = "";
      o += path("femur_k", "f-bone", "M100,0 H200 V90 Q212,140 186,150 Q165,152 156,134 L144,134 Q135,152 114,150 Q88,140 100,90 Z");
      o += path("knorpel_k", "f-cart", "M92,120 Q96,150 114,152 Q136,152 144,136 L146,140 Q136,158 114,158 Q92,156 88,124 Z");
      o += path("knorpel_k", "f-cart", "M208,120 Q204,150 186,152 Q164,152 156,136 L154,140 Q164,158 186,158 Q208,156 212,124 Z");
      o += path("tibia_k", "f-bone", "M92,176 Q150,164 208,176 L204,196 Q176,206 176,300 H124 Q124,206 96,196 Z");
      o += path("fibula_k", "f-bone", "M214,204 Q230,198 228,214 L222,300 H212 L210,214 Z");
      o += path("men_med meniscus", "f-cart2", "M96,166 Q122,158 138,164 L136,172 Q120,168 100,176 Z");
      o += path("men_lat meniscus", "f-cart2", "M204,166 Q178,158 162,164 L164,172 Q180,168 200,176 Z");
      o += ln("vkb", "k-lig", "M142,172 L160,128", 7) + ln("hkb", "k-lig2", "M160,178 L140,130", 7);
      o += ln("innenband", "k-lig", "M90,104 L94,218", 7) + ln("aussenband", "k-lig", "M210,108 L220,206", 5);
      o += ell("patella_k", "f-bonel", 150, 86, 28, 32, ' fill-opacity=".35" stroke-dasharray="4 3"');
      o += path("lig_patellae", "f-lig", "M136,116 L164,116 L160,214 L140,214 Z", ' fill-opacity=".3" stroke-dasharray="4 3"');
      return o;
    },
    teile: {
      femur_k: ["Femur", "Condylus medialis femoris", "Condylus lateralis femoris"], knorpel_k: ["Cartilago articularis"], tibia_k: ["Tibia"], fibula_k: ["Fibula", "Caput fibulae"],
      meniscus: ["Meniscus"], men_med: ["Meniscus medialis"], men_lat: ["Meniscus lateralis"], vkb: ["Ligamentum cruciatum anterius"], hkb: ["Ligamentum cruciatum posterius"],
      innenband: ["Ligamentum collaterale tibiale"], aussenband: ["Ligamentum collaterale fibulare"], patella_k: ["Patella", "Articulatio femoropatellaris"],
      lig_patellae: ["Ligamentum patellae"]
    }
  });

  // =====================================================================
  // MUSKULATUR
  F.push({
    id: "muskeln", kats: ["muskeln"], titel: "Muskulatur (vorne / hinten)", vb: "0 0 420 520",
    svg: () => {
      const v = 110, h = 310;
      const M = (t, a, cx) => bpoly(t, "f-muscle", a, cx);
      let o = koerper(v, "f-skin") + koerper(h, "f-skin");
      // vorne
      o += M("temporalis", [[13, 18], [22, 26], [21, 38], [14, 34]], v) + M("masseter", [[14, 42], [20, 44], [18, 58], [12, 55]], v);
      o += bell("orbicularis_oc", "f-muscle2", 8.5, 35, 6, 4.5, v) + ell("orbicularis_or", "f-muscle2", v, 54, 8, 4);
      o += M("scm", [[14, 54], [19, 58], [7, 88], [2, 86]], v) + M("trapezius", [[12, 72], [40, 87], [30, 91], [12, 84]], v);
      o += M("deltoideus", [[40, 87], [56, 97], [62, 130], [52, 140], [44, 112], [36, 96]], v);
      o += M("pectoralis", [[3, 92], [38, 94], [48, 112], [40, 128], [20, 134], [3, 130]], v);
      o += M("serratus", [[31, 136], [38, 132], [36, 170], [29, 162]], v);
      o += M("biceps", [[48, 132], [59, 132], [63, 184], [53, 188]], v);
      o += M("flexores", [[51, 194], [65, 194], [71, 252], [62, 268], [56, 240]], v);
      o += M("thenar", [[64, 288], [72, 286], [76, 300], [66, 302]], v);
      o += M("rectus_abd", [[2, 136], [17, 136], [15, 242], [2, 246]], v);
      o += deco(B(s => [160, 182, 206].map(y => lnp("", "k-white", [[v + s * 2, y], [v + s * 16, y]], 1)).join("")) + lnp("", "k-white", [[v, 136], [v, 246]], 1.5));
      o += lnp("linea_alba", "k-tendon", [[v, 136], [v, 246]], 3);
      o += M("obliquus", [[19, 140], [35, 140], [33, 200], [39, 236], [18, 232]], v);
      o += M("iliopsoas", [[12, 244], [22, 240], [25, 264], [15, 264]], v);
      o += M("rectus_fem quadriceps", [[20, 272], [32, 272], [30, 360], [23, 360]], v);
      o += M("vastus_lat quadriceps", [[34, 278], [43, 300], [36, 366], [31, 360]], v);
      o += M("vastus_med quadriceps", [[10, 322], [20, 330], [21, 372], [14, 374]], v);
      o += M("sartorius", [[38, 254], [44, 260], [14, 384], [8, 378]], v);
      o += M("adduktoren", [[2, 274], [14, 270], [12, 330], [5, 322]], v);
      o += M("tib_ant", [[22, 394], [32, 394], [28, 470], [22, 470]], v);
      o += bpoly("lig_pat", "f-tendon", [[14, 376], [24, 376], [23, 392], [15, 392]], v);
      // hinten
      o += M("trapezius", [[0, 62], [14, 76], [48, 92], [0, 182]], h);
      o += M("deltoideus", [[40, 87], [56, 97], [62, 130], [52, 140], [44, 112], [36, 96]], h);
      o += M("supraspinatus rotatoren", [[16, 92], [36, 95], [34, 100], [18, 101]], h);
      o += M("infraspinatus rotatoren", [[18, 108], [40, 104], [38, 126], [20, 130]], h);
      o += M("teres_maj", [[36, 128], [46, 124], [48, 136], [38, 140]], h);
      o += M("latissimus", [[2, 172], [36, 134], [46, 140], [36, 200], [4, 232]], h);
      o += M("triceps", [[48, 128], [60, 130], [63, 186], [51, 188]], h);
      o += M("extensores", [[51, 194], [65, 194], [71, 252], [62, 268], [56, 240]], h);
      o += M("erector", [[2, 186], [11, 186], [12, 248], [2, 250]], h);
      o += M("gluteus_med", [[20, 226], [40, 226], [44, 258], [34, 244]], h);
      o += M("gluteus_max", [[2, 242], [36, 238], [46, 272], [36, 298], [4, 294]], h);
      o += M("ischiocrurale semitend", [[12, 302], [27, 302], [26, 370], [16, 370]], h);
      o += M("biceps_fem ischiocrurale", [[28, 302], [41, 302], [36, 368], [28, 368]], h);
      o += M("gastrocnemius triceps_surae", [[13, 386], [37, 386], [35, 430], [25, 440], [14, 428]], h);
      o += M("soleus triceps_surae", [[16, 432], [34, 432], [30, 462], [20, 462]], h);
      o += bpoly("achilles", "f-tendon", [[22, 462], [28, 462], [27, 488], [23, 488]], h);
      o += deco(txt("", v, 516, "vorne") + txt("", h, 516, "hinten"));
      return o;
    },
    teile: {
      temporalis: ["M. temporalis"], masseter: ["M. masseter"], orbicularis_oc: ["M. orbicularis oculi"], orbicularis_or: ["M. orbicularis oris"],
      scm: ["M. sternocleidomastoideus"], trapezius: ["M. trapezius"], deltoideus: ["M. deltoideus"], pectoralis: ["M. pectoralis major"], serratus: ["M. serratus anterior"],
      biceps: ["M. biceps brachii"], flexores: ["Mm. flexores antebrachii", "M. flexor carpi radialis", "M. flexor carpi ulnaris", "M. flexor digitorum superficialis"],
      thenar: ["Thenar", "M. abductor pollicis brevis", "M. opponens pollicis"], rectus_abd: ["M. rectus abdominis"], linea_alba: ["Linea alba"],
      obliquus: ["M. obliquus externus abdominis"], iliopsoas: ["M. iliopsoas"], quadriceps: ["M. quadriceps femoris"], rectus_fem: ["M. rectus femoris"],
      vastus_lat: ["M. vastus lateralis"], vastus_med: ["M. vastus medialis"], sartorius: ["M. sartorius"], adduktoren: ["Mm. adductores", "M. adductor longus", "M. gracilis"],
      tib_ant: ["M. tibialis anterior"], lig_pat: ["Ligamentum patellae"], rotatoren: ["M. supraspinatus"], supraspinatus: ["M. supraspinatus"],
      infraspinatus: ["M. infraspinatus"], teres_maj: ["M. teres major"], latissimus: ["M. latissimus dorsi"], triceps: ["M. triceps brachii"],
      extensores: ["Mm. extensores antebrachii", "M. extensor digitorum"], erector: ["M. erector spinae"], gluteus_med: ["M. gluteus medius"], gluteus_max: ["M. gluteus maximus"],
      ischiocrurale: ["Mm. ischiocrurales"], semitend: ["M. semitendinosus", "M. semimembranosus"], biceps_fem: ["M. biceps femoris"], triceps_surae: ["M. triceps surae"],
      gastrocnemius: ["M. gastrocnemius"], soleus: ["M. soleus"], achilles: ["Tendo calcaneus"]
    }
  });

  // =====================================================================
  // HERZ
  F.push({
    id: "herz", kats: ["herz", "gefaesse"], titel: "Herz (Längsschnitt von vorne)", vb: "0 0 400 330",
    svg: () => {
      let o = "";
      o += ln("aa_pulm", "k-vein", "M238,92 L118,100", 10);
      o += rect("vci", "f-vein", 112, 186, 28, 80);
      o += rect("vcs", "f-vein", 128, 16, 28, 108);
      o += rect("vv_pulm", "f-art", 288, 120, 46, 10) + rect("vv_pulm", "f-art", 288, 142, 46, 10);
      o += ln("truncus_bc", "k-art", "M226,44 L222,8", 8) + ln("carotis", "k-art", "M246,38 L246,6", 7) + ln("subclavia", "k-art", "M266,42 L274,8", 7);
      o += rect("aorta_desc aorta", "f-art", 274, 74, 18, 44);
      o += path("arcus aorta", "f-art", "M206,74 Q206,36 246,36 Q290,36 292,74 L274,74 Q272,54 246,54 Q224,54 224,74 Z");
      o += rect("aorta_asc aorta", "f-art", 206, 74, 18, 96);
      o += path("myo", "f-myo", "M84,112 Q60,170 104,206 Q150,290 236,306 Q330,236 296,104 Q250,90 200,106 Q140,100 84,112 Z");
      o += path("la", "f-artl", "M204,114 Q250,100 288,114 L288,164 L202,170 Z");
      o += path("ra", "f-veinl", "M92,120 Q72,165 112,198 L178,186 L176,126 Q134,110 92,120 Z");
      o += ell("auricula", "f-veinl", 98, 114, 14, 9, ' transform="rotate(-20 98 114)"');
      o += path("rv", "f-veinl", "M114,204 L180,190 L190,182 L226,286 Q156,276 114,204 Z");
      o += path("lv", "f-artl", "M204,178 L288,170 Q308,232 240,292 Z");
      o += poly("septum_iv myo", "f-myo2", [[188, 182], [203, 176], [240, 292], [226, 288]]);
      o += poly("septum_ia", "f-myo2", [[178, 126], [203, 116], [202, 168], [180, 184]]);
      o += circ("papillar", "f-myo2", 150, 248, 6) + circ("papillar", "f-myo2", 262, 244, 7);
      o += ln("chordae", "k-chord", "M140,198 L148,244 M160,194 L152,244 M232,170 L258,240 M262,168 L264,238", 1.2);
      o += ln("trikuspidal segelklappe", "k-valve", "M116,202 L178,188", 4.5) + ln("mitral segelklappe", "k-valve", "M206,172 L288,166", 4.5);
      o += poly("truncus_pulm", "f-vein", [[160, 186], [186, 182], [252, 98], [236, 84]]);
      o += ln("aa_pulm", "k-vein", "M244,90 L330,92", 10);
      o += ell("pulmonalklappe taschenklappe", "f-valve", 176, 180, 9, 3.2, ' transform="rotate(-50 176 180)"');
      o += ell("aortenklappe taschenklappe", "f-valve", 215, 170, 9, 3.2);
      o += ln("rca koronar", "k-art", "M206,150 Q150,186 112,214", 3) + ln("lca koronar", "k-art", "M224,150 L238,160", 3);
      o += ln("riva koronar", "k-art", "M238,160 Q244,226 234,294", 2.5) + ln("rcx koronar", "k-art", "M238,160 Q270,160 294,176", 2.5);
      o += ell("sinusknoten", "f-node", 158, 128, 6, 4) + ell("avknoten", "f-node", 182, 182, 5, 3.5);
      o += ln("his", "k-cond", "M184,186 L196,206", 3) + ln("tawara", "k-cond", "M198,206 L234,282 M194,206 L222,280", 2);
      o += ln("purkinje", "k-cond", "M228,286 L176,262 M232,288 L286,222 M224,284 L150,230", 1.4);
      o += circ("apex", "spot", 236, 300, 6);
      o += path("perikard", "ln k-peri", "M74,104 Q48,172 98,214 Q148,302 238,316 Q344,240 304,96 Q250,80 200,98 Q140,90 74,104 Z", ' stroke-width="2" stroke-dasharray="5 4"');
      return o;
    },
    teile: {
      myo: ["Myocardium", "Cor"], la: ["Atrium sinistrum"], ra: ["Atrium dextrum"], rv: ["Ventriculus dexter", "Conus arteriosus", "Trabeculae carneae"],
      lv: ["Ventriculus sinister", "Trabeculae carneae"], auricula: ["Auricula"], septum_iv: ["Septum interventriculare"], septum_ia: ["Septum interatriale", "Fossa ovalis"],
      papillar: ["Mm. papillares"], chordae: ["Chordae tendineae"], trikuspidal: ["Valva tricuspidalis", "Ostium atrioventriculare dextrum"],
      mitral: ["Valva mitralis", "Ostium atrioventriculare sinistrum"], segelklappe: ["Valvae cuspidales"], taschenklappe: ["Valvae semilunares"],
      pulmonalklappe: ["Valva trunci pulmonalis"], aortenklappe: ["Valva aortae"], truncus_pulm: ["Truncus pulmonalis"], aa_pulm: ["Aa. pulmonales"],
      vv_pulm: ["Vv. pulmonales"], vcs: ["V. cava superior"], vci: ["V. cava inferior"], aorta: ["Aorta"], aorta_asc: ["Aorta ascendens"], arcus: ["Arcus aortae"],
      aorta_desc: ["Aorta thoracica"], truncus_bc: ["Truncus brachiocephalicus"], carotis: ["A. carotis communis"], subclavia: ["A. subclavia"],
      koronar: ["A. coronaria dextra"], rca: ["A. coronaria dextra"], lca: ["A. coronaria sinistra"], riva: ["Ramus interventricularis anterior"], rcx: ["Ramus circumflexus"],
      sinusknoten: ["Nodus sinuatrialis"], avknoten: ["Nodus atrioventricularis"], his: ["Fasciculus atrioventricularis"], tawara: ["Crus dextrum et sinistrum"],
      purkinje: ["Rami subendocardiales"], apex: ["Apex cordis", "Ictus cordis"], perikard: ["Pericardium", "Pericardium fibrosum", "Cavitas pericardiaca"]
    }
  });

  // =====================================================================
  // GEFÄSSE
  F.push({
    id: "arterien", kats: ["gefaesse"], titel: "Wichtige Arterien", vb: "0 0 300 520",
    svg: () => {
      const c = 150, A = (t, a, w) => lnp(t, "k-art", at(a, c), w), BA = (t, a, w) => blnp(t, "k-art", a, w, c);
      let o = koerper(c, "f-skinl") + deco(ell("", "f-heartl", c - 4, 148, 15, 12));
      o += A("aorta_asc aorta", [[-3, 146], [-3, 120]], 5) + ln("arcus aorta", "k-art", `M${c - 3},120 Q${c + 2},104 ${c + 8},118`, 5);
      o += A("aorta_thor aorta", [[8, 118], [6, 200]], 5) + A("aorta_abd aorta", [[6, 200], [3, 248]], 5);
      o += A("truncus_bc", [[-1, 112], [-8, 104]], 4) + A("carotis_c", [[-8, 104], [-10, 66]], 3) + A("carotis_c", [[3, 108], [10, 66]], 3);
      o += BA("carotis_i", [[10, 66], [11, 40]], 2.5) + BA("carotis_e", [[10, 66], [16, 52]], 2) + BA("temporalis", [[16, 52], [19, 26]], 1.5);
      o += BA("facialis", [[15, 56], [12, 60], [8, 54]], 1.3) + BA("vertebralis", [[18, 100], [8, 60]], 1.5);
      o += ell("willis", "ln k-art", c, 34, 8, 5, ' stroke-width="1.5"') + A("basilaris", [[0, 46], [0, 39]], 1.6) + BA("cerebri_m", [[7, 33], [15, 28]], 1.3);
      o += A("subclavia", [[-8, 104], [-38, 98]], 3) + A("subclavia", [[6, 110], [38, 98]], 3);
      o += BA("axillaris", [[38, 98], [46, 118]], 3) + BA("brachialis", [[46, 118], [54, 190]], 2.5);
      o += BA("radialis", [[54, 190], [70, 282]], 2) + BA("ulnaris", [[54, 190], [60, 284]], 2);
      o += B(s => ln("arcus_palm", "k-art", `M${c + s * 70},${286} Q${c + s * 67},${298} ${c + s * 60},${288}`, 1.5));
      o += B(s => [0, 1, 2, 3].map(k => lnp("digitales", "k-art", [[c + s * (62 + k * 3), 296], [c + s * (60 + k * 5), 314]], 1)).join(""));
      o += BA("thoracica_int", [[12, 104], [10, 190]], 1.2);
      o += B(s => [0, 1, 2, 3, 4, 5].map(k => lnp("intercostales", "k-art", [[c + s * 8, 130 + k * 12], [c + s * 34, 136 + k * 12]], 1)).join(""));
      o += A("coeliacus", [[6, 186], [-2, 180]], 2.5) + A("hepatica", [[-2, 180], [-18, 176]], 1.5) + A("splenica", [[-2, 180], [24, 184]], 1.5) + A("gastrica", [[-2, 180], [6, 170]], 1.2);
      o += ln("mes_sup", "k-art", `M${c + 5},196 Q${c - 2},214 ${c - 6},236`, 2) + ln("mes_inf", "k-art", `M${c + 4},236 Q${c + 12},244 ${c + 14},256`, 1.5);
      o += A("renalis", [[5, 206], [-22, 206]], 2.5) + A("renalis", [[5, 206], [22, 206]], 2.5);
      o += BA("iliaca_c", [[3, 248], [16, 262]], 3.5) + BA("iliaca_e", [[16, 262], [24, 282]], 3) + BA("iliaca_i", [[16, 262], [10, 284]], 2);
      o += BA("femoralis", [[24, 282], [25, 368]], 3) + BA("profunda", [[24, 296], [34, 350]], 2) + BA("poplitea", [[25, 368], [24, 396]], 2.5);
      o += BA("tib_ant", [[24, 396], [30, 478]], 2) + BA("dors_pedis", [[30, 478], [26, 500]], 1.6) + BA("tib_post", [[22, 398], [16, 480]], 2) + BA("fibularis_a", [[24, 404], [26, 470]], 1.4);
      return o;
    },
    teile: {
      aorta: ["Aorta"], aorta_asc: ["Aorta ascendens"], arcus: ["Arcus aortae"], aorta_thor: ["Aorta thoracica", "Aorta descendens"], aorta_abd: ["Aorta abdominalis"],
      truncus_bc: ["Truncus brachiocephalicus"], carotis_c: ["A. carotis communis"], carotis_i: ["A. carotis interna"], carotis_e: ["A. carotis externa"],
      temporalis: ["A. temporalis superficialis"], facialis: ["A. facialis"], vertebralis: ["A. vertebralis"], willis: ["Circulus arteriosus cerebri"], basilaris: ["A. basilaris"],
      cerebri_m: ["A. cerebri media", "A. cerebri anterior", "A. cerebri posterior"], subclavia: ["A. subclavia"], axillaris: ["A. axillaris"], brachialis: ["A. brachialis"],
      radialis: ["A. radialis"], ulnaris: ["A. ulnaris"], arcus_palm: ["Arcus palmaris superficialis"], digitales: ["Aa. digitales palmares"], thoracica_int: ["A. thoracica interna"],
      intercostales: ["Aa. intercostales posteriores"], coeliacus: ["Truncus coeliacus"], hepatica: ["A. hepatica communis"], splenica: ["A. splenica"], gastrica: ["A. gastrica sinistra"],
      mes_sup: ["A. mesenterica superior"], mes_inf: ["A. mesenterica inferior"], renalis: ["A. renalis"], iliaca_c: ["A. iliaca communis"], iliaca_e: ["A. iliaca externa"],
      iliaca_i: ["A. iliaca interna"], femoralis: ["A. femoralis"], profunda: ["A. profunda femoris"], poplitea: ["A. poplitea"], tib_ant: ["A. tibialis anterior"],
      dors_pedis: ["A. dorsalis pedis"], tib_post: ["A. tibialis posterior"], fibularis_a: ["A. fibularis"]
    }
  });

  F.push({
    id: "venen", kats: ["gefaesse"], titel: "Wichtige Venen", vb: "0 0 300 520",
    svg: () => {
      const c = 150, V = (t, a, w, k = "k-vein") => lnp(t, k, at(a, c), w), BV = (t, a, w, k = "k-vein") => blnp(t, k, a, w, c);
      let o = koerper(c, "f-skinl") + deco(ell("", "f-heartl", c - 4, 148, 15, 12) + ell("", "f-liverl", c - 18, 172, 20, 11));
      o += V("vcs", [[-6, 96], [-6, 140]], 5) + V("brachioceph_v", [[-6, 96], [-12, 90]], 4) + ln("brachioceph_v", "k-vein", `M${c - 6},96 Q${c + 4},92 ${c + 12},90`, 4);
      o += BV("jug_i", [[11, 50], [12, 90]], 3) + BV("jug_e", [[18, 52], [20, 92]], 1.8) + BV("subclavia_v", [[12, 90], [40, 98]], 3) + BV("axillaris_v", [[40, 98], [48, 120]], 3);
      o += B(s => ln("cephalica", "k-vein", `M${c + s * 40},98 Q${c + s * 60},120 ${c + s * 64},190 L${c + s * 72},282`, 2));
      o += BV("basilica", [[48, 120], [52, 190], [60, 282]], 2) + BV("mediana", [[64, 196], [52, 186]], 2);
      o += B(s => ln("rete_manus", "k-vein", `M${c + s * 62},${290} L${c + s * 66},${298} L${c + s * 70},${290} L${c + s * 74},${300} M${c + s * 66},${298} L${c + s * 68},${310}`, 1.2));
      o += V("azygos", [[-1, 236], [0, 130], [-6, 118]], 1.5);
      o += V("vci", [[-4, 150], [-4, 250]], 5) + V("hepaticae", [[-4, 170], [-14, 162]], 2);
      o += ln("portae", "k-portal", `M${c + 2},226 Q${c - 6},196 ${c - 16},180`, 3.5) + V("mes_sup_v", [[2, 226], [2, 250]], 2, "k-portal") + V("splenica_v", [[-8, 200], [22, 192]], 2, "k-portal");
      o += V("renalis_v", [[-4, 208], [-22, 208]], 2.5) + V("renalis_v", [[-4, 208], [22, 208]], 2.5);
      o += V("iliaca_v", [[-4, 250], [-16, 264]], 3.5) + V("iliaca_v", [[-4, 250], [16, 264]], 3.5);
      o += BV("femoralis_v", [[16, 264], [22, 284], [23, 368]], 3) + BV("poplitea_v", [[23, 368], [22, 396]], 2.5) + BV("tibiales_v", [[22, 396], [18, 478]], 1.5);
      o += B(s => ln("saphena_m", "k-vein", `M${c + s * 18},272 Q${c + s * 10},320 ${c + s * 12},380 L${c + s * 14},478 L${c + s * 18},496`, 2));
      o += BV("saphena_p", [[26, 394], [27, 478]], 1.5, "k-vein k-dashed");
      o += BV("perforantes", [[12, 330], [21, 332]], 1.4) + BV("perforantes", [[13, 432], [20, 434]], 1.4);
      o += bcirc("angulus", "spot", 12, 90, 4, c);
      return o;
    },
    teile: {
      vcs: ["V. cava superior"], brachioceph_v: ["V. brachiocephalica"], jug_i: ["V. jugularis interna"], jug_e: ["V. jugularis externa"], subclavia_v: ["V. subclavia"],
      axillaris_v: ["V. axillaris"], cephalica: ["V. cephalica"], basilica: ["V. basilica"], mediana: ["V. mediana cubiti"], rete_manus: ["Rete venosum dorsale manus"],
      azygos: ["V. azygos"], vci: ["V. cava inferior"], hepaticae: ["Vv. hepaticae"], portae: ["V. portae hepatis", "Systema portale hepaticum"], mes_sup_v: ["V. mesenterica superior"],
      splenica_v: ["V. splenica"], renalis_v: ["V. renalis"], iliaca_v: ["V. iliaca communis"], femoralis_v: ["V. femoralis"], poplitea_v: ["V. poplitea"], tibiales_v: ["Vv. tibiales"],
      saphena_m: ["V. saphena magna"], saphena_p: ["V. saphena parva"], perforantes: ["Vv. perforantes"], angulus: ["Angulus venosus"]
    }
  });

  F.push({
    id: "gefaesswand", kats: ["gefaesse"], titel: "Wandaufbau von Arterie und Vene", vb: "0 0 360 200",
    svg: () => {
      let o = "";
      o += circ("adventitia", "f-advent", 95, 100, 70) + circ("media", "f-media", 95, 100, 56) + circ("intima", "f-intima", 95, 100, 38) + circ("lumen", "f-artl", 95, 100, 34);
      o += path("adventitia", "f-advent", "M210,60 Q270,30 330,60 Q352,100 330,140 Q270,170 210,140 Q190,100 210,60 Z");
      o += path("media", "f-media", "M218,70 Q270,46 322,70 Q340,100 322,130 Q270,154 218,130 Q202,100 218,70 Z");
      o += path("intima", "f-intima", "M224,78 Q270,58 316,78 Q330,100 316,122 Q270,142 224,122 Q212,100 224,78 Z");
      o += path("lumen_v", "f-veinl", "M228,82 Q270,64 312,82 Q324,100 312,118 Q270,136 228,118 Q218,100 228,82 Z");
      o += path("klappe", "f-valve", "M246,84 Q262,100 252,116 L248,116 Q256,100 242,86 Z") + path("klappe", "f-valve", "M294,84 Q278,100 288,116 L292,116 Q284,100 298,86 Z");
      o += deco(txt("", 95, 192, "Arterie") + txt("", 270, 192, "Vene"));
      return o;
    },
    teile: { adventitia: ["Tunica externa"], media: ["Tunica media"], intima: ["Tunica intima", "Endothelium"], lumen: ["Arteria"], lumen_v: ["Vena"], klappe: ["Valvula venosa"] }
  });

  // =====================================================================
  // BLUT & LYMPHE
  F.push({
    id: "blutzellen", kats: ["blut"], titel: "Blutzellen", vb: "0 0 360 210",
    svg: () => {
      let o = "";
      [[40, 50], [80, 34], [64, 88], [110, 70]].forEach(p => { o += circ("ery", "f-ery", p[0], p[1], 19) + circ("ery", "f-ery2", p[0], p[1], 8); });
      o += circ("neutro leuko", "f-leuko", 180, 56, 27) + path("neutro leuko", "f-leukon", "M164,50 q6,-14 14,-4 q8,-12 14,2 q10,4 2,14 q-6,8 -14,2 q-10,8 -16,-4 z");
      o += circ("eos leuko", "f-leuko", 268, 56, 27) + ell("eos leuko", "f-leukon", 258, 52, 8, 10) + ell("eos leuko", "f-leukon", 278, 52, 8, 10);
      [[256, 70], [266, 74], [280, 68], [272, 36], [252, 36], [286, 44], [262, 62]].forEach(p => { o += circ("eos leuko", "f-eosg", p[0], p[1], 3); });
      o += circ("baso leuko", "f-leuko", 50, 160, 25) + path("baso leuko", "f-leukon", "M40,150 q10,-10 20,0 q6,10 -4,18 q-12,4 -16,-18 z");
      [[38, 166], [56, 146], [62, 170], [46, 176], [30, 156]].forEach(p => { o += circ("baso leuko", "f-basog", p[0], p[1], 3.5); });
      o += circ("lympho leuko", "f-leuko", 130, 160, 20) + circ("lympho leuko", "f-leukon", 132, 160, 16);
      o += circ("mono leuko", "f-leuko", 214, 156, 32) + path("mono leuko", "f-leukon", "M196,144 q20,-14 36,0 q8,12 -2,22 q-8,-10 -20,-4 q-14,6 -14,-18 z");
      [[290, 140], [312, 156], [296, 172], [324, 134]].forEach(p => { o += ell("thrombo", "f-thrombo", p[0], p[1], 6, 4); });
      return o;
    },
    teile: {
      ery: ["Erythrocytus", "Haemoglobinum"], leuko: ["Leucocytus", "Granulocytus"], neutro: ["Granulocytus neutrophilus"], eos: ["Granulocytus eosinophilus"],
      baso: ["Granulocytus basophilus"], lympho: ["Lymphocytus", "Lymphocytus B", "Lymphocytus T"], mono: ["Monocytus", "Macrophagus"], thrombo: ["Thrombocytus"]
    }
  });

  F.push({
    id: "lymphsystem", kats: ["blut"], titel: "Lymphatisches System", vb: "0 0 300 520",
    svg: () => {
      const c = 150, L = (dx, y) => circ("", "f-lymph", c + dx, y, 2.8);
      let o = koerper(c, "f-skinl");
      o += blnp("vas_lymph", "k-lymph", [[52, 130], [62, 280]], 1.2, c) + blnp("vas_lymph", "k-lymph", [[24, 270], [20, 480]], 1.2, c) + blnp("vas_lymph", "k-lymph", [[14, 84], [36, 120]], 1.2, c);
      o += B(s => `<g data-p="ln_cerv ln">${L(s * 12, 70) + L(s * 14, 78) + L(s * 10, 86)}</g>`);
      o += B(s => `<g data-p="ln_ax ln">${L(s * 38, 118) + L(s * 35, 126) + L(s * 41, 132)}</g>`);
      o += B(s => `<g data-p="ln_ing ln">${L(s * 20, 256) + L(s * 26, 262) + L(s * 16, 264)}</g>`);
      o += `<g data-p="ln">${L(0, 220) + L(6, 228) + L(-6, 226)}</g>`;
      o += bcirc("tons_pal", "f-lymph", 5, 58, 2.5, c);
      o += ell("thymus", "f-thymus", c, 112, 9, 14) + ell("splen", "f-spleen", c + 26, 190, 7, 12);
      o += ln("d_thor", "k-lymphduct", `M${c + 2},222 L${c + 3},150 Q${c + 4},110 ${c + 12},90`, 2.5) + ell("cisterna", "f-lymph", c + 2, 228, 4, 6);
      o += lnp("d_lymph_d", "k-lymphduct", [[c - 5, 98], [c - 12, 90]], 2.2) + bcirc("angulus", "spot", 12, 90, 4, c);
      o += `<g data-p="peyer">${circ("", "f-lymph2", c - 10, 238, 3) + circ("", "f-lymph2", c - 4, 244, 3)}</g>`;
      return o;
    },
    teile: {
      vas_lymph: ["Vas lymphaticum", "Lympha"], ln: ["Nodus lymphoideus"], ln_cerv: ["Nodi lymphoidei cervicales"], ln_ax: ["Nodi lymphoidei axillares"],
      ln_ing: ["Nodi lymphoidei inguinales"], tons_pal: ["Tonsilla palatina", "Anulus lymphoideus pharyngis"], thymus: ["Thymus"], splen: ["Splen", "Pulpa rubra", "Pulpa alba"],
      d_thor: ["Ductus thoracicus"], cisterna: ["Cisterna chyli"], d_lymph_d: ["Ductus lymphaticus dexter"], angulus: ["Angulus venosus"], peyer: ["Folliculi lymphoidei aggregati"]
    }
  });

  // =====================================================================
  // ATMUNG
  F.push({
    id: "kopf_sagittal", kats: ["atmung", "verdauung"], titel: "Kopf und Hals (Medianschnitt)", vb: "0 0 320 340",
    svg: () => {
      let o = "";
      o += path("", "f-skin deco", "M150,12 Q60,14 48,90 L44,110 Q40,118 34,128 L28,140 Q30,148 40,150 L38,162 Q36,172 46,176 L44,188 Q48,202 64,206 Q70,214 72,230 L80,250 L84,340 H215 L222,250 Q290,210 292,120 Q285,25 150,12 Z");
      o += path("", "f-brainl deco", "M70,95 Q80,25 160,22 Q275,30 280,120 Q270,150 230,150 L180,120 Q120,104 70,95 Z");
      o += deco([0, 1, 2, 3, 4, 5, 6, 7].map(i => rect("", "f-bonel", 204, 140 + i * 25, 26, 20, ' rx="3"')).join(""));
      o += ell("sinus_front", "f-air", 78, 80, 12, 10) + ell("sinus_sphen", "f-air", 166, 106, 12, 10);
      o += path("cavitas_nasi", "f-air", "M48,112 L150,100 L156,148 L54,152 Q44,140 48,112 Z");
      o += ln("conchae", "k-mucosa", "M100,112 Q130,104 148,114 M96,127 Q128,120 150,130 M92,142 Q126,136 152,145", 5);
      o += circ("vest_nasi", "spot", 46, 140, 7);
      o += path("cavitas_oris", "f-airdk", "M56,160 L134,156 Q150,160 156,180 L150,202 L64,206 Q48,190 56,160 Z");
      o += ln("palatum_d", "k-bone", "M54,154 L130,150", 6) + ln("palatum_m", "k-mucosa", "M130,151 Q150,153 160,170", 6) + ell("uvula", "f-mucosa", 161, 175, 3, 6);
      o += path("lingua", "f-tongue", "M62,200 Q76,170 120,166 Q150,168 160,190 L168,224 Q150,232 130,226 Q90,218 62,200 Z");
      o += ell("labia", "f-lip", 46, 168, 6, 7) + ell("labia", "f-lip", 48, 194, 6, 7);
      o += rect("dens", "f-tooth", 54, 157, 6, 10) + rect("dens", "f-tooth", 55, 190, 6, 9);
      o += path("", "f-bonel deco", "M60,206 Q70,234 122,238 L130,228 Q90,224 62,206 Z") + ell("hyoid", "f-bone", 128, 246, 6, 3);
      o += ell("subling", "f-gland", 92, 214, 10, 5) + ell("submand", "f-gland", 104, 236, 13, 7);
      o += poly("nasopharynx pharynx", "f-air", [[158, 98], [190, 98], [190, 150], [158, 150]]);
      o += poly("oropharynx pharynx", "f-air", [[158, 150], [190, 150], [191, 212], [166, 212]]);
      o += poly("laryngopharynx pharynx", "f-air", [[166, 212], [191, 212], [192, 262], [170, 262]]);
      o += ell("tons_phar", "f-lymph", 182, 104, 8, 5) + ell("tons_pal", "f-lymph", 162, 186, 5, 8) + ell("tons_ling", "f-lymph", 152, 207, 6, 4);
      o += circ("tuba", "f-darkl", 174, 124, 4);
      o += path("epiglottis", "f-cart", "M160,216 Q156,198 168,192 L172,212 Z");
      o += path("larynx", "f-cart2", "M128,226 L160,222 L164,286 L134,286 Z");
      o += ln("plicae_vest", "k-mucosa", "M136,244 L162,242", 3) + ln("plicae_voc glottis", "k-white", "M136,256 L162,254", 4);
      o += poly("thyroid_c", "f-cart", [[120, 232], [130, 228], [134, 270], [122, 266]]) + poly("cricoid_c", "f-cart", [[128, 272], [140, 272], [142, 290], [130, 290]]);
      o += poly("aryt", "f-cart", [[156, 252], [164, 246], [163, 258]]);
      o += rect("trachea", "f-cart2", 134, 290, 26, 50) + deco([0, 1, 2, 3, 4, 5].map(i => lnp("", "k-cart", [[134, 296 + i * 8], [160, 296 + i * 8]], 2)).join(""));
      o += rect("oesophagus", "f-gut", 170, 262, 20, 28) + rect("oesophagus", "f-gut", 164, 290, 22, 50);
      o += ell("thyroid", "f-gland", 132, 304, 8, 13);
      return o;
    },
    teile: {
      sinus_front: ["Sinus frontalis"], sinus_sphen: ["Sinus sphenoidalis"], cavitas_nasi: ["Cavitas nasi", "Meatus nasi"], conchae: ["Conchae nasales"], vest_nasi: ["Vestibulum nasi", "Nares"],
      cavitas_oris: ["Cavitas oris", "Vestibulum oris"], palatum_d: ["Palatum durum"], palatum_m: ["Palatum molle"], uvula: ["Uvula"], lingua: ["Lingua", "Dorsum linguae", "Radix linguae"],
      labia: ["Labia oris"], dens: ["Dens (Pl. Dentes)"], hyoid: ["Os hyoideum"], subling: ["Glandula sublingualis"], submand: ["Glandula submandibularis"],
      pharynx: ["Pharynx"], nasopharynx: ["Nasopharynx"], oropharynx: ["Oropharynx", "Isthmus faucium"], laryngopharynx: ["Laryngopharynx"], tons_phar: ["Tonsilla pharyngealis"],
      tons_pal: ["Tonsilla palatina"], tons_ling: ["Tonsilla lingualis"], tuba: ["Tuba auditiva"], epiglottis: ["Epiglottis"], larynx: ["Larynx", "Cavitas laryngis", "Aditus laryngis"],
      plicae_vest: ["Plicae vestibulares"], plicae_voc: ["Plicae vocales", "Ligamentum vocale"], glottis: ["Glottis"], thyroid_c: ["Cartilago thyroidea"], cricoid_c: ["Cartilago cricoidea"],
      aryt: ["Cartilagines arytenoideae"], trachea: ["Trachea"], oesophagus: ["Oesophagus"], thyroid: ["Glandula thyroidea"]
    }
  });

  F.push({
    id: "lunge", kats: ["atmung"], titel: "Atemwege und Lunge", vb: "0 0 360 340",
    svg: u => {
      const RL = "M156,44 Q120,46 88,100 Q56,170 60,250 Q62,290 86,296 Q120,282 164,292 Q172,250 168,170 Q166,90 156,44 Z";
      const LL = "M204,44 Q240,46 272,100 Q304,170 300,250 Q298,290 274,296 Q240,282 196,292 Q206,250 214,220 Q196,200 200,170 Q194,90 204,44 Z";
      let o = `<defs><clipPath id="rl${u}"><path d="${RL}"/></clipPath><clipPath id="ll${u}"><path d="${LL}"/></clipPath></defs>`;
      o += poly("mediastinum", "f-medi", [[168, 124], [196, 124], [214, 220], [200, 292], [164, 292]]);
      o += path("pleura_par pleura", "ln k-pleura", "M156,36 Q114,38 80,96 Q46,170 52,256 Q54,302 86,306 Q120,292 168,302 Q180,250 176,170 Q174,88 162,36 Z", ' stroke-width="2" stroke-dasharray="5 4"');
      o += path("pleura_par pleura", "ln k-pleura", "M198,36 Q246,38 280,96 Q314,170 308,256 Q306,302 274,306 Q240,292 192,302 Q180,250 184,170 Q186,88 198,36 Z", ' stroke-width="2" stroke-dasharray="5 4"');
      o += `<g clip-path="url(#rl${u})">` + poly("lobus_sup pulmo", "f-lung", [[40, 30], [180, 30], [180, 152], [60, 174]]) +
        poly("lobus_med pulmo", "f-lung2", [[100, 166], [180, 152], [180, 300], [150, 300]]) + poly("lobus_inf pulmo", "f-lung3", [[40, 175], [100, 166], [150, 300], [40, 300]]) + "</g>";
      o += `<g clip-path="url(#ll${u})">` + poly("lobus_sup pulmo", "f-lung", [[180, 30], [330, 30], [330, 140], [205, 265], [180, 265]]) +
        poly("lobus_inf pulmo", "f-lung3", [[330, 140], [330, 310], [180, 310], [180, 265], [205, 265]]) + "</g>";
      o += ln("fissura_h", "k-fissure", "M60,174 L168,152", 2) + ln("fissura_o", "k-fissure", "M76,170 L100,166 L152,292 M298,142 L206,264", 2);
      o += path("pleura_visc pleura", "ln k-pleura2", RL, ' stroke-width="2"') + path("pleura_visc pleura", "ln k-pleura2", LL, ' stroke-width="2"');
      o += circ("lingula", "spot", 216, 238, 9);
      o += path("larynx", "f-cart", "M168,6 L192,6 L190,34 L170,34 Z");
      o += rect("trachea", "f-cart2", 171, 34, 18, 86) + deco([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => lnp("", "k-cart", [[171, 40 + i * 7.5], [189, 40 + i * 7.5]], 1.5)).join(""));
      o += ln("bronchus_r bronchus_h", "k-bronch", "M180,118 L150,156", 11) + ln("bronchus_l bronchus_h", "k-bronch", "M180,118 L216,150", 10);
      o += ln("lappenbr", "k-bronch", "M150,156 L128,110 M150,156 L142,192 M150,156 L118,214 M216,150 L240,110 M216,150 L242,214", 6);
      o += ln("segmentbr", "k-bronch", "M128,110 L116,84 M128,110 L108,118 M142,192 L156,226 M118,214 L96,236 M118,214 L118,252 M240,110 L252,82 M240,110 L264,124 M242,214 L264,238 M242,214 L238,256", 3.4);
      o += ln("bronchiolus", "k-bronch", "M116,84 L110,70 M108,118 L94,124 M96,236 L84,248 M118,252 L114,268 M252,82 L258,68 M264,124 L280,130 M264,238 L280,250 M238,256 L242,272", 1.6);
      o += circ("carina", "f-cart", 180, 119, 3.5) + circ("hilum", "spot", 156, 154, 9) + circ("hilum", "spot", 212, 152, 9);
      o += circ("apex_pulm", "spot", 150, 54, 9) + circ("apex_pulm", "spot", 210, 54, 9) + circ("basis_pulm", "spot", 110, 286, 10) + circ("basis_pulm", "spot", 250, 286, 10);
      o += circ("recessus", "spot", 62, 300, 7) + circ("recessus", "spot", 298, 300, 7);
      o += path("zwerchfell", "f-muscle", "M40,308 Q100,262 168,300 Q180,308 192,300 Q260,262 320,308 L320,320 Q260,276 192,312 Q180,320 168,312 Q100,276 40,320 Z");
      o += circ("", "f-inset deco", 312, 52, 42);
      o += ln("bronchiolus", "k-bronch", "M276,24 L300,48", 3.5);
      [[300, 56, 9], [314, 46, 9], [325, 60, 9], [313, 72, 9], [298, 72, 8]].forEach(p => { o += circ("alveole", "f-alv", p[0], p[1], p[2]); });
      o += ln("kapillare", "k-art", "M290,84 Q312,92 334,74", 1.6) + ln("kapillare", "k-vein", "M288,40 Q300,32 312,34", 1.6);
      return o;
    },
    teile: {
      mediastinum: ["Mediastinum"], pleura: ["Pleura"], pleura_par: ["Pleura parietalis", "Cavitas pleuralis"], pleura_visc: ["Pleura visceralis"], pulmo: ["Pulmo"],
      lobus_sup: ["Lobus superior"], lobus_med: ["Lobus medius"], lobus_inf: ["Lobus inferior"], fissura_h: ["Fissura horizontalis"], fissura_o: ["Fissura obliqua"],
      lingula: ["Lingula pulmonis sinistri"], larynx: ["Larynx"], trachea: ["Trachea", "Cartilagines tracheales"], bronchus_h: ["Bronchus principalis"],
      bronchus_r: ["Bronchus principalis dexter"], bronchus_l: ["Bronchus principalis sinister"], lappenbr: ["Bronchi lobares"], segmentbr: ["Bronchi segmentales", "Segmenta bronchopulmonalia"],
      bronchiolus: ["Bronchiolus", "Bronchioli respiratorii"], carina: ["Bifurcatio tracheae", "Carina tracheae"], hilum: ["Hilum pulmonis"], apex_pulm: ["Apex pulmonis"],
      basis_pulm: ["Basis pulmonis"], recessus: ["Recessus costodiaphragmaticus"], zwerchfell: ["Diaphragma"], alveole: ["Alveolus pulmonis", "Sacculus alveolaris", "Surfactant", "Diffusio"],
      kapillare: ["Vas capillare"]
    }
  });

  // =====================================================================
  // VERDAUUNG
  F.push({
    id: "verdauung", kats: ["verdauung"], titel: "Bauchorgane (Vorderansicht)", vb: "0 0 320 440",
    svg: () => {
      let o = path("", "f-skinl deco", "M40,0 L280,0 L290,300 Q300,400 260,440 H60 Q20,400 30,300 Z");
      o += path("peritoneum", "ln k-peri", "M48,108 Q40,300 80,412 Q160,426 250,412 Q292,300 284,104", ' stroke-width="2" stroke-dasharray="5 4"');
      o += ln("oesophagus", "k-gut", "M168,0 L170,110 Q172,128 186,134", 11);
      // Dickdarmrahmen zuerst, damit Zwölffingerdarm und Dünndarm darüber sichtbar bleiben
      o += ln("colon_asc colon", "k-colon", "M100,350 L100,250", 22) + ln("colon_trans colon", "k-colon", "M104,244 Q176,282 256,242", 20);
      o += ln("colon_desc colon", "k-colon", "M260,246 L260,340", 20) + ln("sigmoid colon", "k-colon", "M260,340 Q262,384 216,376 Q188,372 186,392", 18);
      o += circ("flex_d", "spot", 100, 244, 12) + circ("flex_s", "spot", 259, 240, 12);
      o += ln("rectum", "k-colon", "M186,392 L184,420", 18) + ln("analkanal", "k-colon2", "M184,420 L184,429", 12) + ell("anus", "f-dark", 184, 432, 6, 3.5);
      o += ell("caecum colon", "f-colon", 100, 360, 15, 16) + ln("appendix", "k-colon", "M94,374 Q86,392 96,404", 5);
      o += path("gaster", "f-stomach", "M184,128 Q214,106 246,126 Q272,160 252,196 Q232,222 196,218 Q184,216 176,222 L166,210 Q188,198 206,186 Q222,170 212,152 Q200,140 186,146 Z");
      o += path("fundus gaster", "f-stomach2", "M196,124 Q218,106 244,124 L232,138 Q214,126 200,134 Z");
      o += path("antrum gaster", "f-stomach2", "M196,218 Q184,216 176,222 L166,210 Q188,198 206,186 L214,198 Z");
      o += ln("curv_maj", "spotln", "M246,126 Q272,160 252,196 Q232,222 196,218", 4) + ln("curv_min", "spotln", "M186,146 Q200,140 212,152 Q222,170 206,186", 4);
      o += circ("cardia", "spot", 186, 136, 7) + ell("pylorus", "f-muscle", 170, 214, 6, 5);
      o += path("pancreas", "f-pancreas", "M162,226 Q200,210 252,200 Q262,206 252,214 Q210,226 178,238 Z") + ell("caput_pan pancreas", "f-pancreas", 166, 234, 10, 10);
      o += ln("d_pan", "k-duct", "M174,234 L250,208", 1.5);
      o += ln("duodenum", "k-gut", "M170,218 Q148,226 148,248 Q150,268 178,270 Q198,268 206,256", 12) + circ("papilla", "f-dark", 157, 238, 3.2);
      o += ell("splen", "f-spleen", 274, 150, 13, 24, ' transform="rotate(20 274 150)"');
      o += ln("jejunum duenndarm", "k-small", "M206,256 C240,256 242,280 210,282 C176,284 176,304 210,306", 10);
      o += ln("ileum duenndarm", "k-small", "M210,306 C244,308 240,332 206,332 C168,332 150,346 116,352", 10);
      o += circ("bauhin", "f-muscle", 114, 352, 4);
      o += path("hepar lobus_d", "f-liver", "M54,112 Q100,88 152,96 L144,164 Q100,180 64,170 Q44,142 54,112 Z");
      o += path("hepar lobus_s", "f-liver2", "M152,96 Q186,96 214,108 Q206,126 182,138 L144,164 Z");
      o += circ("porta", "spot", 140, 150, 7);
      o += ell("vesica_bil", "f-gall", 118, 172, 9, 15, ' transform="rotate(-25 118 172)"');
      o += ln("d_hep", "k-gall", "M140,150 L138,170", 3) + ln("d_cyst", "k-gall", "M124,162 L138,172", 3) + ln("choledochus", "k-gall", "M138,172 L158,234", 3.5);
      return o;
    },
    teile: {
      peritoneum: ["Peritoneum", "Cavitas peritonealis"], oesophagus: ["Oesophagus"], gaster: ["Gaster"], fundus: ["Fundus gastricus"], antrum: ["Antrum pyloricum"],
      curv_maj: ["Curvatura major"], curv_min: ["Curvatura minor"], cardia: ["Cardia", "Ostium cardiacum"], pylorus: ["Pylorus"], pancreas: ["Pancreas", "Corpus pancreatis", "Cauda pancreatis"],
      caput_pan: ["Caput pancreatis"], d_pan: ["Ductus pancreaticus"], duodenum: ["Duodenum"], papilla: ["Papilla duodeni major", "Ampulla hepatopancreatica"],
      splen: ["Splen"], colon: ["Colon", "Intestinum crassum"], colon_asc: ["Colon ascendens"], colon_trans: ["Colon transversum"], colon_desc: ["Colon descendens"],
      sigmoid: ["Colon sigmoideum"], flex_d: ["Flexura coli dextra"], flex_s: ["Flexura coli sinistra"], rectum: ["Rectum", "Ampulla recti"], analkanal: ["Canalis analis"],
      anus: ["Anus"], caecum: ["Caecum"], appendix: ["Appendix vermiformis"], duenndarm: ["Intestinum tenue"], jejunum: ["Jejunum"], ileum: ["Ileum"], bauhin: ["Valva ileocaecalis"],
      hepar: ["Hepar"], lobus_d: ["Lobus hepatis dexter"], lobus_s: ["Lobus hepatis sinister"], porta: ["Porta hepatis"], vesica_bil: ["Vesica biliaris"],
      d_hep: ["Ductus hepaticus communis"], d_cyst: ["Ductus cysticus"], choledochus: ["Ductus choledochus"]
    }
  });

  F.push({
    id: "zahn", kats: ["verdauung"], titel: "Zahn (Längsschnitt)", vb: "0 0 200 300",
    svg: () => {
      let o = rect("alveolus_dent", "f-bonel", 0, 150, 200, 150);
      o += path("periodont", "f-perio", "M56,118 L66,276 L134,276 L144,118 Z");
      o += path("enamel corona", "f-enamel", "M55,40 Q100,10 145,40 L148,120 L52,120 Z");
      o += path("dentin", "f-dentin", "M62,50 Q100,26 138,50 L140,120 L130,270 L112,272 L105,160 L95,160 L88,272 L70,270 L60,120 Z");
      o += path("cementum", "ln k-cement", "M60,122 L70,270 L88,272 M112,272 L130,270 L140,122", ' stroke-width="3"');
      o += path("pulpa", "f-pulp", "M80,70 Q100,58 120,70 L120,140 L117,255 L112,255 L104,150 L96,150 L88,255 L83,255 L80,140 Z");
      o += path("gingiva", "f-gum", "M10,128 Q52,118 62,148 L64,190 L10,190 Z") + path("gingiva", "f-gum", "M190,128 Q148,118 138,148 L136,190 L190,190 Z");
      o += rect("collum_dent", "spot", 56, 118, 88, 18) + poly("radix_dent", "spot", [[60, 150], [140, 150], [130, 272], [70, 272]]);
      return o;
    },
    teile: {
      alveolus_dent: ["Alveolus dentalis", "Processus alveolaris"], periodont: ["Periodontium"], enamel: ["Enamelum"], corona: ["Corona dentis"], dentin: ["Dentinum", "Dens (Pl. Dentes)"],
      cementum: ["Cementum"], pulpa: ["Pulpa dentis"], gingiva: ["Gingiva"], collum_dent: ["Collum dentis"], radix_dent: ["Radix dentis"]
    }
  });

  // =====================================================================
  // NIERE & HARNWEGE
  F.push({
    id: "harnsystem", kats: ["harn"], titel: "Harnorgane (Übersicht)", vb: "0 0 300 340",
    svg: () => {
      let o = deco(lnp("", "k-art", [[156, 20], [156, 240]], 8) + lnp("", "k-vein", [[140, 20], [140, 240]], 9));
      o += ell("ren", "f-kidney", 88, 106, 28, 44) + ell("ren", "f-kidney", 212, 92, 28, 44);
      o += poly("nebenniere", "f-gland", [[72, 68], [92, 54], [108, 70]]) + poly("nebenniere", "f-gland", [[196, 54], [214, 40], [232, 56]]);
      o += lnp("a_ren", "k-art", [[156, 104], [112, 106]], 4) + lnp("a_ren", "k-art", [[156, 92], [188, 92]], 4);
      o += ln("ureter", "k-urine", "M108,116 Q120,200 132,262", 5) + ln("ureter", "k-urine", "M192,100 Q182,200 168,262", 5);
      o += ell("vesica", "f-bladder", 150, 272, 40, 30) + ell("detrusor", "ln k-muscle", 150, 272, 40, 30, ' stroke-width="5"');
      o += poly("trigonum", "f-trigon", [[132, 264], [168, 264], [150, 292]]) + circ("ostium_ur", "f-dark", 132, 264, 3) + circ("ostium_ur", "f-dark", 168, 264, 3);
      o += rect("urethra", "f-bladder", 146, 302, 8, 34) + rect("sphincter_u", "f-muscle", 143, 307, 14, 8) + circ("collum_v", "spot", 150, 300, 6) + circ("ostium_ue", "f-dark", 150, 336, 3);
      o += circ("apex_v", "spot", 150, 244, 6);
      return o;
    },
    teile: {
      ren: ["Ren"], nebenniere: ["Glandula suprarenalis"], a_ren: ["A. renalis"], ureter: ["Ureter"], vesica: ["Vesica urinaria", "Fundus vesicae"], detrusor: ["M. detrusor vesicae"],
      trigonum: ["Trigonum vesicae"], ostium_ur: ["Ostium ureteris"], urethra: ["Urethra"], sphincter_u: ["M. sphincter urethrae", "M. sphincter urethrae internus"],
      collum_v: ["Collum vesicae", "Ostium urethrae internum"], ostium_ue: ["Ostium urethrae externum"], apex_v: ["Apex vesicae"]
    }
  });

  F.push({
    id: "niere", kats: ["harn"], titel: "Niere (Längsschnitt)", vb: "0 0 300 340",
    svg: () => {
      const K = "M150,30 Q60,20 50,150 Q55,290 150,300 Q195,300 200,240 Q175,215 175,165 Q175,115 200,90 Q195,30 150,30 Z";
      let o = path("fettkapsel", "f-fat", K, ' transform="translate(178 165) scale(1.1) translate(-178 -165)"');
      o += path("cortex_r", "f-cortex", K);
      const c = [178, 165];
      for (let a = 125; a <= 235; a += 22) {
        const P = (d, aa) => [c[0] + d * Math.cos(aa * Math.PI / 180), c[1] + d * Math.sin(aa * Math.PI / 180)];
        o += poly("pyramide medulla_r", "f-medulla", [P(102, a - 10), P(102, a + 10), P(44, a)]);
        const k = P(36, a);
        o += circ("calices", "f-urine", k[0], k[1], 7) + circ("papillae", "spot", P(44, a)[0], P(44, a)[1], 3.5);
      }
      o += path("pelvis_r", "f-urine", "M150,128 Q176,118 192,150 Q198,165 192,182 Q176,212 150,204 Q140,190 150,165 Q140,140 150,128 Z");
      o += ln("ureter", "k-urine", "M186,196 Q204,236 208,330", 9);
      o += ln("a_ren", "k-art", "M290,146 L194,152", 8) + ln("v_ren", "k-vein", "M290,176 L194,172", 9);
      o += path("capsula_r", "ln k-capsule", K, ' stroke-width="3"');
      o += circ("hilum_r", "spot", 196, 162, 11) + circ("polus_s", "spot", 130, 36, 10) + circ("polus_i", "spot", 136, 294, 10);
      return o;
    },
    teile: {
      fettkapsel: ["Capsula adiposa"], cortex_r: ["Cortex renalis", "Columnae renales"], pyramide: ["Pyramides renales"], medulla_r: ["Medulla renalis"], calices: ["Calices renales"],
      papillae: ["Papillae renales"], pelvis_r: ["Pelvis renalis", "Sinus renalis"], ureter: ["Ureter"], a_ren: ["A. renalis"], v_ren: ["V. renalis"], capsula_r: ["Capsula fibrosa", "Ren"],
      hilum_r: ["Hilum renale"], polus_s: ["Polus superior renis"], polus_i: ["Polus inferior renis"]
    }
  });

  F.push({
    id: "nephron", kats: ["harn"], titel: "Nephron (Schema)", vb: "0 0 320 300",
    svg: () => {
      let o = deco(rect("", "f-cortexl", 0, 0, 320, 130) + rect("", "f-medullal", 0, 130, 320, 170) + txt("", 300, 20, "Rinde", "end") + txt("", 300, 150, "Mark", "end"));
      o += circ("bowman nk", "f-bowman", 60, 60, 24);
      o += `<g data-p="glomerulus nk">` + circ("", "f-artl", 60, 60, 16) + ln("", "k-art", "M50,52 q6,-8 12,0 q6,8 0,14 q-8,4 -12,-4 q-2,-6 6,-6", 2) + "</g>";
      o += ln("afferens", "k-art", "M18,28 L46,48", 4) + ln("efferens", "k-art", "M46,72 L18,94", 3) + circ("jga", "f-node", 42, 60, 5);
      o += ln("prox", "k-tubule", "M84,60 C100,40 110,80 124,60 C138,40 146,80 150,92 L150,120", 7);
      o += ln("henle", "k-henle", "M150,120 L150,250 Q162,272 174,250 L174,110", 6);
      o += ln("distal", "k-tubule", "M174,110 C180,80 200,96 206,70 C212,46 230,70 240,60 Q250,56 260,60", 7);
      o += ln("sammelrohr", "k-collect", "M260,20 L260,292", 9);
      return o;
    },
    teile: {
      nk: ["Corpusculum renale", "Nephron"], bowman: ["Capsula glomeruli"], glomerulus: ["Glomerulus", "Filtratio glomerularis", "Urina primaria", "Podocytus"],
      afferens: ["Arteriola glomerularis afferens"], efferens: ["Arteriola glomerularis efferens"], jga: ["Apparatus juxtaglomerularis"], prox: ["Tubulus proximalis", "Resorptio tubularis"],
      henle: ["Ansa nephroni"], distal: ["Tubulus distalis"], sammelrohr: ["Tubulus colligens"]
    }
  });

  // =====================================================================
  // GESCHLECHTSORGANE
  F.push({
    id: "weiblich", kats: ["geschlecht"], titel: "Innere weibliche Geschlechtsorgane", vb: "0 0 360 280",
    svg: () => {
      const U = "M138,62 Q180,38 222,62 Q236,112 202,160 L198,196 L162,196 L158,160 Q124,112 138,62 Z";
      let o = "";
      o += path("lig_latum", "f-ligl", "M140,80 L58,112 L58,176 L160,176 Z") + path("lig_latum", "f-ligl", "M220,80 L302,112 L302,176 L200,176 Z");
      o += path("uterus myometrium", "f-uterus", U) + path("endometrium cavum_u", "f-mucosa", "M152,74 Q180,70 208,74 L184,148 L176,148 Z");
      o += path("fundus_u", "spot", "M138,62 Q180,38 222,62 L224,74 Q180,60 136,74 Z") + poly("corpus_u", "spot", [[136, 76], [224, 76], [206, 150], [154, 150]]);
      o += poly("cervix", "spot", [[156, 152], [204, 152], [198, 198], [162, 198]]) + ln("isthmus_u", "spotln", "M156,152 L204,152", 5);
      o += ln("canalis_c", "k-mucosa", "M180,148 L180,196", 3) + path("perimetrium", "ln k-peri", U, ' stroke-width="3"');
      o += path("vagina", "f-vagina", "M160,200 L200,200 L206,270 L154,270 Z") + ell("portio", "f-mucosa", 180, 198, 16, 5) + circ("ostium_u", "f-dark", 180, 199, 2.5);
      o += circ("fornix_v", "spot", 163, 204, 5) + circ("fornix_v", "spot", 197, 204, 5);
      o += ln("tuba", "k-tube", "M142,70 Q100,46 70,68 Q52,84 58,102", 6) + ln("tuba", "k-tube", "M218,70 Q260,46 290,68 Q308,84 302,102", 6);
      o += ln("ampulla", "spotln", "M104,52 Q82,54 70,68", 10) + ln("ampulla", "spotln", "M256,52 Q278,54 290,68", 10);
      o += ln("isthmus_t", "spotln", "M142,70 L116,56", 9) + ln("isthmus_t", "spotln", "M218,70 L244,56", 9);
      o += circ("infund", "spot", 60, 100, 8) + circ("infund", "spot", 300, 100, 8);
      o += ln("fimbriae", "k-tube", "M58,102 L44,108 M58,102 L48,116 M58,102 L58,118 M58,102 L68,114 M302,102 L316,108 M302,102 L312,116 M302,102 L302,118 M302,102 L292,114", 2);
      o += ell("ovar", "f-ovary", 88, 128, 20, 12, ' transform="rotate(-15 88 128)"') + ell("ovar", "f-ovary", 272, 128, 20, 12, ' transform="rotate(15 272 128)"');
      o += circ("follikel", "f-fluid", 266, 126, 4.5) + circ("follikel", "f-fluid", 279, 131, 3.2) + circ("luteum", "f-luteum", 92, 128, 5.5);
      o += circ("ovum", "f-white", 96, 58, 3);
      o += ln("lig_ov", "k-lig", "M106,122 L142,92", 3) + ln("lig_ov", "k-lig", "M254,122 L218,92", 3);
      o += ln("lig_teres", "k-lig k-dashed", "M146,92 L96,210", 2) + ln("lig_teres", "k-lig k-dashed", "M214,92 L264,210", 2);
      return o;
    },
    teile: {
      lig_latum: ["Ligamentum latum uteri"], uterus: ["Uterus"], myometrium: ["Myometrium"], endometrium: ["Endometrium"], cavum_u: ["Cavitas uteri"], fundus_u: ["Fundus uteri"],
      corpus_u: ["Corpus uteri"], cervix: ["Cervix uteri"], isthmus_u: ["Isthmus uteri"], canalis_c: ["Canalis cervicis uteri"], perimetrium: ["Perimetrium"], vagina: ["Vagina"],
      portio: ["Portio vaginalis cervicis"], ostium_u: ["Ostium uteri"], fornix_v: ["Fornix vaginae"], tuba: ["Tuba uterina"], ampulla: ["Ampulla tubae uterinae"],
      isthmus_t: ["Isthmus tubae uterinae"], infund: ["Infundibulum tubae uterinae"], fimbriae: ["Fimbriae tubae"], ovar: ["Ovarium"], follikel: ["Folliculus ovaricus"],
      luteum: ["Corpus luteum"], ovum: ["Ovum", "Ovulatio"], lig_ov: ["Ligamentum ovarii proprium"], lig_teres: ["Ligamentum teres uteri"]
    }
  });

  F.push({
    id: "maennlich", kats: ["geschlecht"], titel: "Männliche Geschlechtsorgane (Seitenansicht)", vb: "0 0 320 300",
    svg: () => {
      let o = deco(rect("", "f-gutl", 240, 40, 30, 250, ' rx="14"') + ell("", "f-bonel", 104, 112, 10, 24));
      o += ell("scrotum", "f-skin", 120, 254, 32, 36, ' fill-opacity=".55"');
      o += ln("funiculus", "k-funic", "M126,222 L112,170", 9);
      o += ell("vesica", "f-bladder", 162, 70, 46, 38);
      o += ell("vesicula", "f-gland", 208, 108, 20, 8, ' transform="rotate(-35 208 108)"');
      o += ell("prostata", "f-gland2", 162, 126, 22, 16) + circ("cowper", "f-gland", 150, 154, 4);
      o += path("penis", "f-skin", "M136,166 L42,164 Q30,166 30,178 Q30,192 42,194 L136,192 Z");
      o += path("cavernosum", "f-cav", "M132,168 L46,167 L46,178 L132,179 Z") + path("spongiosum", "f-spong", "M132,181 L46,180 L46,190 L132,189 Z");
      o += ell("glans", "f-glans", 37, 179, 12, 13) + ln("praeputium", "k-skin", "M52,163 Q30,158 24,170", 3) + circ("frenulum", "spot", 34, 192, 4);
      o += ln("urethra_m", "k-urine", "M162,108 L162,142 Q162,172 134,185 L26,182", 3.5);
      o += ell("testis", "f-testis", 118, 252, 18, 24) + ell("albuginea", "ln k-capsule", 118, 252, 18, 24, ' stroke-width="2.5"');
      o += ln("tubuli", "spotln", "M108,240 q6,-6 10,0 q4,6 10,0 M108,256 q6,-6 10,0 q4,6 10,0", 2);
      o += path("epididymis", "f-epi", "M132,228 Q154,252 134,278 Q144,252 126,232 Z");
      o += ln("deferens", "k-duct", "M126,236 Q96,200 110,150 Q122,98 188,92 Q216,96 206,116", 3.5) + ln("ejac", "k-duct", "M198,118 L168,130", 2.5);
      return o;
    },
    teile: {
      scrotum: ["Scrotum"], funiculus: ["Funiculus spermaticus"], vesica: ["Vesica urinaria"], vesicula: ["Glandula vesiculosa"], prostata: ["Prostata"], cowper: ["Glandulae bulbourethrales"],
      penis: ["Penis"], cavernosum: ["Corpus cavernosum penis"], spongiosum: ["Corpus spongiosum penis"], glans: ["Glans penis"], praeputium: ["Praeputium"], frenulum: ["Frenulum praeputii"],
      urethra_m: ["Urethra"], testis: ["Testis", "Cellulae interstitiales"], albuginea: ["Tunica albuginea testis"], tubuli: ["Tubuli seminiferi", "Spermatogenesis", "Cellulae sustentaculares"],
      epididymis: ["Epididymis"], deferens: ["Ductus deferens"], ejac: ["Ductus ejaculatorius"]
    }
  });

  // =====================================================================
  // HORMONSYSTEM
  F.push({
    id: "hormondruesen", kats: ["hormone"], titel: "Hormondrüsen (Übersicht)", vb: "0 0 300 520",
    svg: () => {
      const c = 150;
      let o = koerper(c, "f-skinl") + deco(ell("", "f-brainl", c, 32, 17, 17) + bell("", "f-kidneyl", 22, 206, 8, 14, c));
      o += circ("hypothal", "f-gland", c + 1, 37, 3.5) + circ("hypophyse", "f-gland2", c + 2, 45, 3.2) + circ("pinealis", "f-gland3", c + 9, 33, 2.6);
      o += bell("thyroid", "f-gland", 6, 78, 5, 8, c) + rect("isthmus thyroid", "f-gland", c - 5, 78, 10, 4) + bcirc("parathyr", "f-gland2", 8.5, 73, 1.8, c) + bcirc("parathyr", "f-gland2", 8.5, 84, 1.8, c);
      o += ell("thymus", "f-thymus", c, 112, 9, 15);
      o += bpoly("nebenniere", "f-gland", [[15, 194], [22, 184], [30, 194]], c);
      o += path("langerhans", "f-pancreas", `M${c - 8},210 Q${c + 8},200 ${c + 24},196 Q${c + 28},200 ${c + 24},204 Q${c + 8},210 ${c - 4},216 Z`);
      o += bell("ovar", "f-ovary", 18, 262, 5, 3, c) + bell("testis", "f-testis", 6, 288, 4, 6, c);
      return o;
    },
    teile: {
      hypothal: ["Hypothalamus"], hypophyse: ["Hypophysis", "Adenohypophysis", "Neurohypophysis"], pinealis: ["Glandula pinealis"], thyroid: ["Glandula thyroidea"],
      isthmus: ["Isthmus glandulae thyroideae"], parathyr: ["Glandulae parathyroideae"], thymus: ["Thymus"], nebenniere: ["Glandula suprarenalis"],
      langerhans: ["Insulae pancreaticae"], ovar: ["Ovarium"], testis: ["Testis"]
    }
  });

  F.push({
    id: "nebenniere", kats: ["hormone"], titel: "Nebenniere und Schilddrüse (Feinbau)", vb: "0 0 360 200",
    svg: () => {
      let o = "";
      o += path("nnr", "f-gland", "M30,170 Q20,60 100,30 Q180,60 170,170 Z");
      o += path("zona_g nnr", "f-gland", "M38,162 Q30,68 100,40 Q170,68 162,162 L150,162 Q154,80 100,54 Q46,80 50,162 Z");
      o += path("zona_f nnr", "f-gland2", "M50,162 Q46,80 100,54 Q154,80 150,162 L138,162 Q140,96 100,74 Q60,96 62,162 Z");
      o += path("zona_r nnr", "f-gland3", "M62,162 Q60,96 100,74 Q140,96 138,162 L124,162 Q124,112 100,98 Q76,112 76,162 Z");
      o += path("nnm", "f-medullagl", "M76,162 Q76,112 100,98 Q124,112 124,162 Z");
      [[230, 60], [270, 50], [310, 70], [250, 110], [292, 112], [330, 120], [230, 154], [276, 156], [320, 166]].forEach(p => {
        o += circ("follikel_t", "f-gland", p[0], p[1], 20) + circ("kolloid", "f-colloid", p[0], p[1], 13);
      });
      o += circ("c_zellen", "f-gland2", 262, 84, 4) + circ("c_zellen", "f-gland2", 300, 140, 4) + circ("c_zellen", "f-gland2", 236, 108, 4);
      o += deco(txt("", 100, 194, "Nebenniere") + txt("", 276, 194, "Schilddrüse"));
      return o;
    },
    teile: {
      nnr: ["Cortex glandulae suprarenalis"], zona_g: ["Zona glomerulosa", "Aldosteronum"], zona_f: ["Zona fasciculata", "Cortisolum"], zona_r: ["Zona reticularis", "Androgena"],
      nnm: ["Medulla glandulae suprarenalis", "Adrenalinum", "Noradrenalinum"], follikel_t: ["Folliculi glandulae thyroideae", "Thyroxinum", "Triiodothyroninum"],
      kolloid: ["Folliculi glandulae thyroideae"], c_zellen: ["Cellulae parafolliculares", "Calcitoninum"]
    }
  });

  // =====================================================================
  // NERVENSYSTEM
  const HIRN = "M70,170 Q48,64 160,40 Q240,22 312,74 Q358,120 340,176 Q332,200 300,204 L250,206 Q205,218 160,214 Q108,216 84,196 Q66,184 70,170 Z";
  F.push({
    id: "gehirn", kats: ["nerven"], titel: "Gehirn (Seitenansicht links)", vb: "0 0 400 300",
    svg: () => {
      let o = "";
      o += path("frontal cerebrum", "f-lobe1", "M70,170 Q48,64 160,40 Q178,36 192,36 L166,154 L108,166 Q86,174 76,182 Z");
      o += path("parietal cerebrum", "f-lobe2", "M192,36 Q258,30 306,70 L282,150 L262,134 L166,154 Z");
      o += path("occipital cerebrum", "f-lobe3", "M306,70 Q358,120 340,176 Q332,200 300,204 L282,150 Z");
      o += path("temporal cerebrum", "f-lobe4", "M76,182 Q86,174 108,166 L166,154 L262,134 L282,150 L300,204 L250,206 Q205,218 160,214 Q108,216 84,196 Z");
      o += deco(ln("", "k-gyrus", "M90,120 Q110,100 130,120 M100,80 Q130,60 150,80 M210,60 Q240,50 260,80 M220,110 Q250,90 270,120 M120,190 Q160,176 200,190 M300,110 Q320,130 316,160", 2));
      o += poly("praecentralis", "f-motor", [[178, 37], [192, 36], [166, 154], [153, 156]]) + poly("postcentralis", "f-sens", [[192, 36], [206, 37], [180, 152], [166, 154]]);
      o += ln("sulcus_c", "k-sulcus", "M192,36 L166,154", 2.5) + ln("sulcus_l", "k-sulcus", "M108,166 L262,134", 2.5);
      o += ell("broca", "f-area", 126, 152, 15, 9) + ell("wernicke", "f-area", 262, 154, 16, 10) + ell("visuell", "f-area2", 334, 150, 9, 18);
      o += path("cerebellum", "f-cereb", "M252,206 Q258,252 300,252 Q346,248 342,200 Q334,196 302,206 Z") + deco(ln("", "k-gyrus", "M266,220 Q300,230 334,214 M270,234 Q300,244 330,230", 1.5));
      o += path("pons hirnstamm", "f-stem", "M220,208 L252,208 Q262,226 254,240 L226,240 Q214,224 220,208 Z") + path("medulla_obl hirnstamm", "f-stem2", "M226,240 L254,240 L248,288 L232,288 Z");
      o += rect("rm", "f-stem2", 233, 288, 14, 12);
      return o;
    },
    teile: {
      cerebrum: ["Cerebrum", "Cortex cerebri", "Hemisphaerium cerebri", "Encephalon"], frontal: ["Lobus frontalis"], parietal: ["Lobus parietalis"], occipital: ["Lobus occipitalis"],
      temporal: ["Lobus temporalis"], praecentralis: ["Gyrus praecentralis"], postcentralis: ["Gyrus postcentralis"], sulcus_c: ["Sulcus centralis", "Sulcus"],
      sulcus_l: ["Sulcus lateralis", "Lobus insularis"], broca: ["Area Broca"], wernicke: ["Area Wernicke"], visuell: ["Area striata"], cerebellum: ["Cerebellum"],
      hirnstamm: ["Truncus encephali"], pons: ["Pons"], medulla_obl: ["Medulla oblongata"], rm: ["Medulla spinalis"]
    }
  });

  F.push({
    id: "gehirn_median", kats: ["nerven", "hormone"], titel: "Gehirn (Medianschnitt)", vb: "0 0 400 300",
    svg: () => {
      let o = path("cerebrum_m", "f-lobe1", HIRN);
      o += deco(ln("", "k-gyrus", "M110,100 Q200,40 290,100", 2));
      o += ln("cinguli", "spotln", "M112,112 Q200,58 288,108", 8);
      o += path("callosum", "f-white2", "M118,118 Q200,70 276,112 Q286,126 270,130 Q200,96 134,128 Q114,132 118,118 Z");
      o += ln("fornix", "k-white", "M150,138 Q200,112 252,134", 4);
      o += ell("thalamus dien", "f-thal", 204, 150, 30, 16) + ell("v3 ventrikel", "f-fluid", 186, 170, 12, 5);
      o += ell("hypothal dien", "f-gland", 166, 176, 16, 10) + circ("mamillare", "f-gland2", 184, 187, 4);
      o += ell("chiasma", "f-nervel", 146, 184, 9, 4) + ln("hypophyse", "k-gland", "M160,184 L158,196", 3) + ell("hypophyse", "f-gland2", 158, 203, 9, 7);
      o += ell("pinealis", "f-gland3", 250, 148, 7, 5);
      o += poly("mesen hirnstamm", "f-stem", [[212, 168], [250, 160], [252, 188], [220, 194]]) + ln("aquaeduct ventrikel", "k-fluid", "M238,166 L246,196", 2.5);
      o += path("pons hirnstamm", "f-stem", "M218,194 L254,188 Q266,208 256,226 L224,226 Q210,210 218,194 Z");
      o += path("medulla_obl hirnstamm", "f-stem2", "M224,226 L256,226 L250,268 L232,268 Z") + path("rm", "f-stem2", "M232,268 L250,268 L248,300 L234,300 Z");
      o += path("v4 ventrikel", "f-fluid", "M256,200 L276,212 L256,226 Z");
      o += path("cerebellum", "f-cereb", "M262,204 Q262,250 306,252 Q348,246 342,202 Q322,186 290,192 Z") + deco(ln("", "k-white", "M282,216 L320,206 M300,212 L310,232 M300,212 L332,226", 2));
      o += circ("plexus_ch", "f-art", 266, 212, 2.5);
      return o;
    },
    teile: {
      cerebrum_m: ["Cerebrum"], cinguli: ["Gyrus cinguli", "Systema limbicum"], callosum: ["Corpus callosum"], fornix: ["Fornix"], dien: ["Diencephalon"], thalamus: ["Thalamus"],
      ventrikel: ["Ventriculi cerebri"], v3: ["Ventriculus tertius"], hypothal: ["Hypothalamus"], mamillare: ["Corpus mamillare"], chiasma: ["Chiasma opticum"],
      hypophyse: ["Hypophysis", "Infundibulum hypophysis"], pinealis: ["Glandula pinealis", "Epithalamus"], hirnstamm: ["Truncus encephali"], mesen: ["Mesencephalon", "Tectum mesencephali", "Substantia nigra"],
      aquaeduct: ["Aqueductus mesencephali"], pons: ["Pons"], medulla_obl: ["Medulla oblongata", "Formatio reticularis"], rm: ["Medulla spinalis"], v4: ["Ventriculus quartus"],
      cerebellum: ["Cerebellum", "Vermis cerebelli"], plexus_ch: ["Plexus choroideus"]
    }
  });

  F.push({
    id: "rueckenmark", kats: ["nerven"], titel: "Rückenmark (Querschnitt)", vb: "0 0 360 250",
    svg: () => {
      let o = "";
      o += ell("dura", "f-dura", 180, 124, 92, 76) + ell("sas liquor", "f-fluid", 180, 124, 84, 68) + ell("arachnoidea", "ln k-arach", 180, 124, 84, 68, ' stroke-width="1.5" stroke-dasharray="3 3"');
      o += ell("alba", "f-white2", 180, 124, 70, 55) + ell("pia", "ln k-pia", 180, 124, 70, 55, ' stroke-width="2"');
      o += poly("hinterstrang", "spot", [[168, 70], [192, 70], [184, 108], [176, 108]]) + bell("seitenstrang", "spot", 50, 120, 12, 22, 180);
      o += ell("pyramidenbahn", "spot", 128, 112, 9, 11) + ell("spinothal", "spot", 136, 152, 9, 9) + poly("vorderstrang", "spot", [[168, 176], [192, 176], [186, 140], [174, 140]]);
      o += rect("grisea", "f-grey", 166, 114, 28, 14);
      o += B(s => ell("hinterhorn grisea", "f-grey", 180 + s * 26, 92, 7, 24, ` transform="rotate(${s * 25} ${180 + s * 26} 92)"`));
      o += B(s => ell("vorderhorn grisea", "f-grey", 180 + s * 30, 148, 16, 20, ` transform="rotate(${-s * 20} ${180 + s * 30} 148)"`));
      o += bcirc("seitenhorn", "spot", 44, 124, 6, 180);
      o += circ("zentralkanal", "f-fluid", 180, 121, 3) + ln("fissura", "k-dark", "M180,179 L180,160", 2);
      o += B(s => ln("radix_post", "k-nerve", `M${180 + s * 40},76 Q${180 + s * 70},60 ${180 + s * 100},62`, 4));
      o += B(s => ell("spinalganglion", "f-nerve", 180 + s * 110, 64, 13, 9));
      o += B(s => ln("radix_ant", "k-nerve", `M${180 + s * 44},166 Q${180 + s * 80},160 ${180 + s * 112},150`, 4));
      o += B(s => ln("spinalnerv", "k-nerve", `M${180 + s * 122},70 Q${180 + s * 136},100 ${180 + s * 124},150 M${180 + s * 130},110 L${180 + s * 172},112`, 6));
      return o;
    },
    teile: {
      dura: ["Dura mater", "Meninges", "Spatium epidurale"], sas: ["Spatium subarachnoideum"], liquor: ["Liquor cerebrospinalis"], arachnoidea: ["Arachnoidea mater"],
      alba: ["Substantia alba"], pia: ["Pia mater"], hinterstrang: ["Funiculus posterior"], seitenstrang: ["Funiculus lateralis"], pyramidenbahn: ["Tractus corticospinalis"],
      spinothal: ["Tractus spinothalamicus"], vorderstrang: ["Funiculus anterior"], grisea: ["Substantia grisea", "Medulla spinalis"], hinterhorn: ["Cornu posterius"],
      vorderhorn: ["Cornu anterius"], seitenhorn: ["Cornu laterale"], zentralkanal: ["Canalis centralis"], fissura: ["Fissura mediana anterior"], radix_post: ["Radix posterior"],
      spinalganglion: ["Ganglion spinale"], radix_ant: ["Radix anterior"], spinalnerv: ["Nervi spinales", "Nervus"]
    }
  });

  F.push({
    id: "nerven_periph", kats: ["nerven"], titel: "Zentrales und peripheres Nervensystem", vb: "0 0 300 520",
    svg: () => {
      const c = 150, N = (t, a, w) => blnp(t, "k-nerve", a, w, c);
      let o = koerper(c, "f-skinl");
      o += ell("encephalon zns", "f-brain", c, 34, 16, 18) + lnp("rm zns", "k-nerve", [[c, 56], [c, 240]], 4);
      o += N("cauda", [[0, 240], [4, 276]], 1.4) + N("cauda", [[0, 240], [1.5, 280]], 1.2);
      o += N("trigeminus", [[11, 36], [16, 30]], 1.2) + N("trigeminus", [[11, 36], [14, 44]], 1.2) + N("facialis", [[18, 44], [12, 52]], 1.2);
      o += N("vagus", [[8, 58], [10, 180], [5, 230]], 1.4);
      o += B(s => `<g data-p="grenzstrang">` + lnp("", "k-nerve k-dashed", [[c + s * 7, 84], [c + s * 7, 250]], 1.2) + [0, 1, 2, 3, 4, 5, 6].map(i => circ("", "f-nerve", c + s * 7, 100 + i * 22, 1.8)).join("") + "</g>");
      o += N("pl_cerv", [[3, 70], [15, 78]], 1.6) + N("phrenicus", [[5, 76], [12, 176]], 1.4);
      o += N("pl_brach", [[3, 92], [40, 108]], 2) + N("pl_brach", [[3, 100], [40, 110]], 2) + N("pl_brach", [[3, 108], [40, 112]], 2);
      o += N("axillaris", [[40, 108], [52, 114]], 1.5) + N("musculocut", [[42, 112], [56, 178]], 1.4);
      o += N("radialis", [[40, 110], [57, 150], [63, 190], [71, 250], [74, 282]], 2) + N("medianus", [[44, 113], [52, 190], [63, 280], [65, 302]], 2);
      o += N("ulnaris", [[42, 116], [46, 190], [58, 282], [60, 306]], 2);
      o += B(s => [0, 1, 2, 3, 4, 5].map(k => lnp("intercostales", "k-nerve", [[c + s * 2, 128 + k * 12], [c + s * 34, 134 + k * 12]], 1)).join(""));
      o += N("pl_lumb", [[2, 220], [14, 240]], 1.8) + N("femoralis", [[14, 240], [22, 268], [26, 332]], 2) + N("saphenus", [[24, 330], [12, 380], [14, 472]], 1.2);
      o += N("obturatorius", [[10, 250], [6, 320]], 1.2) + N("pl_sacr", [[2, 252], [12, 266]], 2);
      o += N("ischiadicus", [[12, 266], [20, 300], [22, 368]], 3) + N("tibialis_n", [[22, 368], [20, 420], [16, 478], [20, 498]], 2);
      o += N("fibularis", [[22, 368], [34, 394]], 2) + N("fibularis_prof", [[34, 394], [28, 480]], 1.4) + N("fibularis_sup", [[34, 394], [35, 470]], 1.4);
      o += bcirc("caput_fib_n", "spot", 34, 394, 5, c);
      return o;
    },
    teile: {
      encephalon: ["Encephalon"], zns: ["Systema nervosum centrale"], rm: ["Medulla spinalis"], cauda: ["Cauda equina"], trigeminus: ["N. trigeminus (V)"], facialis: ["N. facialis (VII)"],
      vagus: ["N. vagus (X)", "Pars parasympathica"], grenzstrang: ["Truncus sympathicus", "Pars sympathica"], pl_cerv: ["Plexus cervicalis"], phrenicus: ["N. phrenicus"],
      pl_brach: ["Plexus brachialis"], axillaris: ["N. axillaris"], musculocut: ["N. musculocutaneus"], radialis: ["N. radialis"], medianus: ["N. medianus"], ulnaris: ["N. ulnaris"],
      intercostales: ["Nn. intercostales"], pl_lumb: ["Plexus lumbalis"], femoralis: ["N. femoralis"], saphenus: ["N. saphenus"], obturatorius: ["N. obturatorius"],
      pl_sacr: ["Plexus sacralis"], ischiadicus: ["N. ischiadicus"], tibialis_n: ["N. tibialis"], fibularis: ["N. fibularis communis"], fibularis_prof: ["N. fibularis profundus"],
      fibularis_sup: ["N. fibularis superficialis"], caput_fib_n: ["N. fibularis communis"]
    }
  });

  F.push({
    id: "neuron", kats: ["nerven"], titel: "Nervenzelle (Neuron)", vb: "0 0 380 180",
    svg: () => {
      let o = "";
      o += ln("dendrit", "k-neuron", "M60,90 L20,50 M60,90 L14,96 M60,90 L26,140 M40,70 L30,40 M38,118 L18,124", 3);
      o += circ("neuron soma", "f-neuron", 64, 90, 22) + circ("nucleus_n", "f-nucleus", 64, 90, 8);
      o += ln("axon", "k-neuron", "M86,90 L330,90", 3);
      [0, 1, 2, 3].forEach(i => { o += rect("myelin", "f-myelin", 104 + i * 54, 82, 44, 16, ' rx="8"'); o += circ("neurolemm", "f-schwann", 126 + i * 54, 80, 3.5); });
      [0, 1, 2].forEach(i => { o += circ("ranvier", "spot", 151 + i * 54, 90, 5); });
      o += ln("synapse_end", "k-neuron", "M330,90 L350,70 M330,90 L352,92 M330,90 L348,114", 2.5);
      o += circ("synapse", "f-synapse", 352, 70, 6) + circ("synapse", "f-synapse", 354, 92, 6) + circ("synapse", "f-synapse", 350, 114, 6);
      return o;
    },
    teile: {
      dendrit: ["Dendritum"], neuron: ["Neuron"], soma: ["Neuron"], nucleus_n: ["Nucleus"], axon: ["Axon", "Potentiale actionis"], myelin: ["Vagina myelini"], neurolemm: ["Neurolemmocytus"],
      ranvier: ["Nodus Ranvieri"], synapse_end: ["Synapsis"], synapse: ["Synapsis", "Neurotransmitter", "Acetylcholinum"]
    }
  });

  // =====================================================================
  // SINNESORGANE
  F.push({
    id: "auge", kats: ["sinne"], titel: "Augapfel (Horizontalschnitt, rechtes Auge von oben)", vb: "0 0 400 260",
    svg: () => {
      let o = "";
      o += path("rectus_lat mm_bulbi", "f-muscle", "M150,40 Q250,20 392,50 L392,64 Q260,38 175,46 Z");
      o += path("rectus_med mm_bulbi", "f-muscle", "M150,220 Q250,240 392,210 L392,196 Q260,222 175,214 Z");
      o += path("opticus", "f-nerve", "M284,142 L392,138 L392,172 L281,168 Z") + ln("a_centralis", "k-art", "M392,156 L282,156", 2.2);
      o += path("vitreum", "f-vitreous", "M129,69 A86,86 0 1,1 129,191 Q150,160 151,130 Q150,100 129,69 Z");
      o += path("sclera fibrosa", "f-sclera", "M108.1,72.6 A100,100 0 1,1 108.1,187.4 L112.2,184.5 A95,95 0 1,0 112.2,75.5 Z");
      o += path("choroidea uvea", "f-choroid", "M112.2,75.5 A95,95 0 1,1 112.2,184.5 L115.5,182.2 A91,91 0 1,0 115.5,77.8 Z");
      o += path("retina interna", "f-retina", "M125.7,65.7 A91,91 0 1,1 125.7,194.3 L129.2,190.8 A86,86 0 1,0 129.2,69.2 Z");
      o += ell("macula", "f-macula", 277, 124, 3, 9) + circ("fovea", "f-dark", 278.5, 124, 1.6);
      o += rect("papille", "f-disc", 274, 145, 9, 22) + ln("lamina_crib", "k-white", "M283,146 L283,166", 1.6);
      o += path("vk kammerwasser", "f-aqueous", "M112,76 Q72,130 112,184 L114,148 Q118,130 114,112 Z");
      o += path("hk kammerwasser", "f-aqueous", "M119,92 L124,96 Q127,112 126,130 Q127,148 124,164 L119,168 L119,148 L119,112 Z");
      o += path("cornea fibrosa", "f-cornea", "M108,73 Q60,130 108,187 L112,184 Q72,130 112,76 Z");
      o += path("ziliar uvea", "f-ciliary", "M113,77 L128,68 L130,78 L121,92 L117,82 Z") + path("ziliar uvea", "f-ciliary", "M113,183 L128,192 L130,182 L121,168 L117,178 Z");
      o += ln("zonula", "k-zonula", "M122,90 L133,102 M126,86 L137,100 M128,84 L141,101 M122,170 L133,158 M126,174 L137,160 M128,176 L141,159", 1);
      o += ell("lens", "f-lens", 137, 130, 13, 31) + ell("capsula_l", "ln k-capsl", 137, 130, 13.5, 31.5, ' stroke-width="1.6"') + ell("nucleus_l", "spot", 137, 130, 6, 15);
      o += path("iris uvea", "f-iris", "M111,80 L117,80 L119,112 L115,112 Z") + path("iris uvea", "f-iris", "M111,180 L117,180 L119,148 L115,148 Z");
      o += rect("pupilla", "f-pupil", 114, 112, 6, 36);
      o += circ("schlemm", "f-vein", 110, 79, 2) + circ("schlemm", "f-vein", 110, 181, 2) + circ("kammerwinkel", "spot", 114, 85, 3.2) + circ("kammerwinkel", "spot", 114, 175, 3.2);
      o += circ("ora", "spot", 127, 67, 3.5) + circ("ora", "spot", 127, 193, 3.5);
      o += ln("conjunctiva", "k-conj", "M108,73 A100,100 0 0,1 140,44 M108,187 A100,100 0 0,0 140,216", 2.4);
      o += deco(txt("", 30, 26, "vorne", "start") + txt("", 392, 252, "Sehnerv →", "end") + txt("", 392, 26, "lateral", "end") + txt("", 160, 252, "medial (Nase)", "end"));
      return o;
    },
    teile: {
      _ganz: ["Oculus", "Bulbus oculi"], mm_bulbi: ["Mm. bulbi"], rectus_lat: ["M. rectus lateralis"], rectus_med: ["M. rectus medialis"], opticus: ["N. opticus (II)"], a_centralis: ["A. centralis retinae", "V. centralis retinae"],
      vitreum: ["Corpus vitreum", "Camera vitrea bulbi"], fibrosa: ["Tunica fibrosa bulbi"], sclera: ["Sclera"], uvea: ["Tunica vasculosa bulbi"], choroidea: ["Choroidea"],
      interna: ["Tunica interna bulbi"], retina: ["Retina", "Pars optica retinae", "Stratum pigmentosum retinae", "Bacilli", "Coni"], macula: ["Macula lutea"], fovea: ["Fovea centralis"],
      papille: ["Discus nervi optici"], lamina_crib: ["Lamina cribrosa sclerae"], kammerwasser: ["Humor aquosus"], vk: ["Camera anterior bulbi"], hk: ["Camera posterior bulbi"],
      cornea: ["Cornea"], ziliar: ["Corpus ciliare", "M. ciliaris", "Accommodatio"], zonula: ["Zonula ciliaris"], lens: ["Lens crystallina", "Cortex lentis"], capsula_l: ["Capsula lentis"],
      nucleus_l: ["Nucleus lentis"], iris: ["Iris", "M. sphincter pupillae", "M. dilatator pupillae"], pupilla: ["Pupilla"], schlemm: ["Sinus venosus sclerae"],
      kammerwinkel: ["Angulus iridocornealis", "Limbus corneae"], ora: ["Ora serrata"], conjunctiva: ["Tunica conjunctiva"]
    }
  });

  F.push({
    id: "auge_vorn", kats: ["sinne"], titel: "Auge, Lider und Tränenapparat (von vorne)", vb: "0 0 400 260",
    svg: () => {
      let o = path("sklera_v", "f-sclera", "M70,140 Q200,62 330,140 Q200,206 70,140 Z");
      o += circ("iris_v", "f-iris", 205, 136, 40) + circ("pupilla_v", "f-pupil", 205, 136, 15) + circ("limbus", "ln k-limbus", 205, 136, 41, ' stroke-width="2"');
      o += ell("caruncula", "f-mucosa", 80, 140, 7, 5);
      o += path("palpebra lid_o", "f-skin", "M50,138 Q200,10 350,138 L330,140 Q200,62 70,140 Z");
      o += path("palpebra lid_u", "f-skin", "M50,142 L70,140 Q200,206 330,140 L350,142 Q200,240 50,142 Z");
      o += path("tarsus_lid", "f-tarsus", "M112,112 Q200,72 288,112 Q200,96 112,112 Z");
      for (let i = 0; i < 6; i++) { const x = 140 + i * 24, y = 104 - Math.sin(Math.PI * (x - 112) / 176) * 8; o += lnp("meibom", "k-gland", [[x, y + 6], [x, y - 2]], 2); }
      let cil = "";
      for (let t = 0.12; t <= 0.88; t += 0.04) {
        const x = (1 - t) ** 2 * 70 + 2 * t * (1 - t) * 200 + t * t * 330, y = (1 - t) ** 2 * 140 + 2 * t * (1 - t) * 62 + t * t * 140;
        cil += `M${r(x)},${r(y)} l${r((x - 200) * 0.06)},-11 `;
      }
      o += ln("cilia", "k-dark", cil, 1.6);
      o += ln("supercilium", "k-brow", "M70,50 Q200,0 330,48", 10);
      o += circ("puncta", "f-dark", 88, 132, 2) + circ("puncta", "f-dark", 88, 149, 2);
      o += ln("canaliculi", "k-fluid", "M88,132 L60,134 M88,149 L60,146", 3) + ell("saccus", "f-fluid", 52, 140, 8, 16) + ln("nasolacr", "k-fluid", "M52,156 L58,250", 6);
      o += ell("gl_lacr", "f-gland", 314, 84, 34, 14, ' transform="rotate(22 314 84)"') + ln("gl_lacr", "k-gland", "M300,96 L294,118 M312,100 L306,122", 1.4);
      o += path("rima", "spotln ln", "M70,140 Q200,62 330,140 Q200,206 70,140", ' stroke-width="3"');
      return o;
    },
    teile: {
      sklera_v: ["Sclera", "Tunica conjunctiva"], iris_v: ["Iris"], pupilla_v: ["Pupilla"], limbus: ["Limbus corneae", "Cornea"], caruncula: ["Caruncula lacrimalis"], palpebra: ["Palpebra"],
      lid_o: ["Palpebra", "M. levator palpebrae superioris"], lid_u: ["Palpebra"], tarsus_lid: ["Tarsus palpebrae"], meibom: ["Glandulae tarsales"], cilia: ["Cilia"], supercilium: ["Supercilium"],
      puncta: ["Punctum lacrimale"], canaliculi: ["Canaliculus lacrimalis"], saccus: ["Saccus lacrimalis"], nasolacr: ["Ductus nasolacrimalis"], gl_lacr: ["Glandula lacrimalis", "Lacrima"],
      rima: ["Rima palpebrarum"]
    }
  });

  F.push({
    id: "ohr", kats: ["sinne"], titel: "Ohr (Frontalschnitt)", vb: "0 0 400 260",
    svg: () => {
      let o = path("os_temp", "f-bonel", "M66,30 H392 V250 H66 Z");
      o += ell("antrum", "f-air", 200, 62, 20, 14) + `<g data-p="cell_mast">` + [[160, 44], [232, 42], [250, 60], [176, 70]].map(p => circ("", "f-air", p[0], p[1], 6)).join("") + "</g>";
      o += path("auricula helix", "f-skin", "M70,70 Q20,60 18,120 Q20,170 50,190 Q66,196 70,180 L70,150 Q50,140 52,120 Q54,100 70,96 Z");
      o += ln("helix", "spotln", "M70,70 Q20,60 18,120 Q20,160 40,184", 5) + ell("concha", "spot", 60, 120, 8, 14) + circ("tragus", "spot", 70, 132, 5);
      o += ell("lobulus", "f-skin", 52, 188, 14, 12);
      o += path("meatus", "f-air", "M68,112 Q120,106 168,116 L168,142 Q120,136 68,140 Z") + circ("cerumen", "f-cerumen", 96, 124, 2.6) + circ("cerumen", "f-cerumen", 106, 131, 2.2);
      o += ell("trommelfell", "f-tympan", 171, 129, 3.5, 17);
      o += path("pauke", "f-air", "M175,92 H225 V170 H175 Z");
      o += ln("tensor", "k-muscle", "M186,98 L186,86 L234,86", 3) + ln("stapedius", "k-muscle", "M215,140 L232,165", 3);
      o += ln("malleus", "k-ossicle", "M174,140 L184,108", 4) + circ("malleus", "f-ossicle", 186, 103, 6.5);
      o += circ("incus", "f-ossicle", 199, 102, 6) + ln("incus", "k-ossicle", "M201,106 L205,128", 3.5);
      o += ln("stapes", "k-ossicle", "M205,129 L216,121 L224,121 M205,129 L216,137 L224,137", 3) + rect("stapes", "f-ossicle", 223, 118, 3, 22);
      o += circ("fen_ov", "spot", 226, 129, 5) + circ("fen_rot", "f-darkl", 224, 158, 4);
      o += path("tuba", "f-air", "M200,170 L222,170 L290,248 L268,252 Z");
      o += ell("vestibulum lab", "f-endo", 246, 124, 18, 14) + ell("utriculus", "f-macula2", 242, 118, 6, 4) + ell("sacculus", "f-macula2", 250, 132, 5, 4);
      o += ln("bogengaenge lab", "k-endo", "M238,112 C224,60 290,58 266,108 M256,112 C290,70 320,110 268,124 M232,120 C200,104 214,70 244,90", 6);
      o += ln("cochlea lab", "k-endo", "M268,156 a24,24 0 1,1 48,4 a19,19 0 1,1 -38,-2 a13,13 0 1,1 26,2 a7,7 0 1,1 -14,0", 6);
      o += circ("corti", "spot", 300, 146, 4);
      o += ln("n8", "k-nerve", "M262,128 Q330,118 392,106 M300,152 L330,122", 7);
      o += deco(txt("", 40, 246, "außen", "start") + txt("", 330, 246, "innen", "end"));
      return o;
    },
    teile: {
      _ganz: ["Auris"], os_temp: ["Os temporale"], antrum: ["Antrum mastoideum"], cell_mast: ["Cellulae mastoideae"], auricula: ["Auricula", "Auris externa"], helix: ["Helix"], concha: ["Concha auriculae"],
      tragus: ["Tragus"], lobulus: ["Lobulus auriculae"], meatus: ["Meatus acusticus externus"], cerumen: ["Cerumen"], trommelfell: ["Membrana tympanica"],
      pauke: ["Cavitas tympani", "Auris media"], tensor: ["M. tensor tympani"], stapedius: ["M. stapedius"], malleus: ["Malleus", "Ossicula auditus"], incus: ["Incus"], stapes: ["Stapes"],
      fen_ov: ["Fenestra vestibuli"], fen_rot: ["Fenestra cochleae"], tuba: ["Tuba auditiva"], lab: ["Labyrinthus", "Auris interna", "Endolympha", "Perilympha"],
      vestibulum: ["Vestibulum", "Organum vestibulare"], utriculus: ["Utriculus"], sacculus: ["Sacculus"], bogengaenge: ["Canales semicirculares"],
      cochlea: ["Cochlea", "Ductus cochlearis", "Scala vestibuli", "Scala tympani"], corti: ["Organum spirale", "Cellulae ciliatae"], n8: ["N. vestibulocochlearis (VIII)", "Ganglion spirale cochleae"]
    }
  });

  F.push({
    id: "zunge", kats: ["sinne", "verdauung"], titel: "Zunge (Aufsicht)", vb: "0 0 300 300",
    svg: () => {
      let o = path("zunge", "f-tongue", "M60,40 Q150,10 240,40 Q262,150 220,240 Q150,300 80,240 Q38,150 60,40 Z");
      o += ln("sulcus_t", "k-dark", "M100,96 L150,120 L200,96", 2);
      [[110, 84], [130, 94], [150, 102], [170, 94], [190, 84], [150, 120]].forEach(p => { o += circ("vallatae", "f-vallate", p[0], p[1], 7) + circ("vallatae", "ln k-vallate", p[0], p[1], 10, ' stroke-width="1.4"'); });
      [[150, 50], [124, 40], [178, 40]].forEach(p => { o += ell("tons_ling_z", "f-lymph", p[0], p[1], 9, 6); });
      for (let i = 0; i < 4; i++) { o += ln("foliatae", "k-foliate", `M${70 + i * 2},${140 + i * 10} l12,0 M${230 - i * 2},${140 + i * 10} l-12,0`, 2.4); }
      [[110, 170], [150, 190], [190, 170], [130, 220], [170, 224], [150, 252], [100, 140], [200, 140]].forEach(p => { o += circ("fungiformes", "f-fungi", p[0], p[1], 4); });
      o += circ("filiformes", "spot", 150, 160, 16) + circ("knospe", "spot", 130, 94, 5);
      return o;
    },
    teile: {
      zunge: ["Lingua"], sulcus_t: ["Radix linguae"], vallatae: ["Papillae vallatae", "Caliculus gustatorius"], tons_ling_z: ["Tonsilla lingualis"], foliatae: ["Papillae foliatae"],
      fungiformes: ["Papillae fungiformes", "Papillae linguales"], filiformes: ["Papillae filiformes", "Dorsum linguae"], knospe: ["Caliculus gustatorius", "Gustus"]
    }
  });

  // =====================================================================
  // HAUT
  F.push({
    id: "haut", kats: ["haut"], titel: "Haut (Querschnitt)", vb: "0 0 360 290",
    svg: () => {
      let wave = "M0,58"; for (let x = 0; x < 360; x += 20) wave += ` Q${x + 10},${x % 40 === 0 ? 70 : 52} ${x + 20},58`;
      let o = rect("subcutis", "f-fat", 0, 170, 360, 120);
      [[30, 200], [80, 230], [140, 210], [200, 250], [260, 205], [320, 240], [50, 265], [170, 275], [300, 280]].forEach(p => { o += circ("subcutis", "f-fat2", p[0], p[1], 20); });
      o += rect("dermis", "f-dermis", 0, 58, 360, 112);
      o += ln("gefaesse_h", "k-art", "M0,150 Q90,140 180,152 T360,148 M40,150 Q44,110 52,74 M220,150 Q226,110 232,76", 2) + ln("gefaesse_h", "k-vein", "M0,160 Q90,150 180,162 T360,158 M60,160 Q62,116 70,76", 2);
      o += path("epidermis", "f-epiderm", wave + " L360,30 L0,30 Z");
      o += rect("corneum", "f-corneum", 0, 24, 360, 8);
      o += path("basale", "ln k-basale", wave, ' stroke-width="2.5"');
      o += circ("melanozyt", "f-melano", 92, 60, 3.5) + circ("melanozyt", "f-melano", 214, 62, 3.5);
      o += ln("haarschaft", "k-hair", "M118,0 L126,190", 4);
      o += path("follikel", "f-follicle", "M118,58 L134,58 L138,186 L114,186 Z", ' fill-opacity=".55"') + ell("bulbus_pili", "f-bulb", 126, 192, 11, 12) + circ("papilla_pili", "f-papilla", 126, 198, 4);
      o += ell("sebacea", "f-sebum", 148, 110, 11, 14) + ln("arrector", "k-muscle", "M134,150 L176,66", 4);
      o += ln("sudorifera", "k-sweat", "M252,200 C268,176 238,170 252,150 C262,130 246,110 254,84 L258,30", 3);
      o += `<g data-p="sudorifera">` + [[244, 206], [256, 212], [262, 200], [248, 196]].map(p => circ("", "f-sweat", p[0], p[1], 6)).join("") + "</g>";
      o += ell("meissner", "f-receptor", 60, 70, 6, 9);
      o += `<g data-p="pacini">` + [14, 10, 6].map((rr, i) => ell("", i % 2 ? "f-receptor2" : "f-receptor", 312, 214, rr, rr * 1.5)).join("") + "</g>";
      o += ln("freie", "k-nerve", "M196,150 L198,90 L190,56 M198,90 L206,54", 1.8) + ln("nerv_h", "k-nerve", "M150,160 L312,196 M60,82 L80,160", 2);
      o += circ("merkel", "f-receptor2", 300, 60, 3.5);
      return o;
    },
    teile: {
      subcutis: ["Tela subcutanea", "Textus adiposus"], dermis: ["Dermis", "Stratum reticulare", "Collagenum"], epidermis: ["Epidermis", "Keratinocytus", "Stratum spinosum", "Stratum granulosum"],
      corneum: ["Stratum corneum", "Keratinum"], basale: ["Stratum basale", "Papillae dermis"], melanozyt: ["Melanocytus", "Melaninum"], haarschaft: ["Pilus", "Scapus pili"],
      follikel: ["Folliculus pili", "Radix pili"], bulbus_pili: ["Bulbus pili"], papilla_pili: ["Papilla pili"], sebacea: ["Glandula sebacea"], arrector: ["M. arrector pili"],
      sudorifera: ["Glandula sudorifera"], meissner: ["Corpusculum tactile"], pacini: ["Corpusculum lamellosum"], freie: ["Terminatio nervi libera", "Nociceptor"],
      merkel: ["Cellula Merkel"], gefaesse_h: ["Vas capillare"], nerv_h: ["Nervus"], cutis: ["Cutis"]
    }
  });

  return F;
})();
