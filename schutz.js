// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Kopierschutz der Oberfläche
// Erschwert das Kopieren von Inhalten in der App. Eingabefelder (Suche) bleiben normal nutzbar.
// Hinweis: Das ist eine Hürde für normale Nutzung, kein vollständiger Schutz des Quellcodes.
(function () {
  "use strict";
  const inEingabe = t => !!(t && t.closest && t.closest("input, textarea"));

  ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach(art => {
    document.addEventListener(art, ev => { if (!inEingabe(ev.target)) ev.preventDefault(); });
  });

  // Tastenkürzel: Kopieren, Ausschneiden, Alles markieren, Speichern, Quelltext, Drucken
  document.addEventListener("keydown", ev => {
    if ((ev.ctrlKey || ev.metaKey) && "cxasup".indexOf(ev.key.toLowerCase()) >= 0 && !inEingabe(ev.target)) ev.preventDefault();
  });

  console.info("MediSmart © 2026 Maximilian Riehn. Alle Rechte vorbehalten. Kopieren und Weitergeben nur mit schriftlicher Genehmigung.");
})();
