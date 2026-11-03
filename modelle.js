// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Verzeichnis der 3D-Modelle (ohne Three.js, damit die App sofort weiß,
// welche Begriffe eine 3D-Ansicht haben). Die Modelle selbst baut anatomie3d.js.
// "teile": Kürzel der 3D-Bauteile → lateinische Begriffe aus data.js.
// "_ganz": Begriffe, bei denen das ganze Modell gezeigt wird (ohne Hervorhebung).

const MODELLE_3D = [
  {
    id: "auge3d", kats: ["sinne"], titel: "Augapfel 3D (aufgeschnitten)",
    teile: {
      _ganz: ["Oculus", "Bulbus oculi"],
      sclera: ["Sclera", "Tunica fibrosa bulbi"], cornea: ["Cornea", "Limbus corneae"], choroidea: ["Choroidea", "Tunica vasculosa bulbi"],
      retina: ["Retina", "Tunica interna bulbi", "Pars optica retinae"], vitreum: ["Corpus vitreum", "Camera vitrea bulbi"],
      iris: ["Iris", "M. sphincter pupillae", "M. dilatator pupillae"], pupilla: ["Pupilla"], lens: ["Lens crystallina", "Capsula lentis", "Nucleus lentis", "Cortex lentis"],
      ziliar: ["Corpus ciliare", "M. ciliaris", "Zonula ciliaris"], opticus: ["N. opticus (II)", "Discus nervi optici"], macula: ["Macula lutea", "Fovea centralis"],
      rectus_lat: ["M. rectus lateralis", "Mm. bulbi"], rectus_med: ["M. rectus medialis"], rectus_inf: ["M. rectus inferior"]
    }
  },
  {
    id: "herz3d", kats: ["herz"], titel: "Herz 3D",
    teile: {
      _ganz: ["Cor", "Myocardium"],
      lv: ["Ventriculus sinister"], rv: ["Ventriculus dexter"], la: ["Atrium sinistrum"], ra: ["Atrium dextrum"],
      aorta: ["Aorta", "Aorta ascendens", "Arcus aortae"], truncus: ["Truncus pulmonalis", "Aa. pulmonales"], vcs: ["V. cava superior"], vci: ["V. cava inferior"],
      vvpulm: ["Vv. pulmonales"], riva: ["Ramus interventricularis anterior", "A. coronaria sinistra"], rca: ["A. coronaria dextra"], apex: ["Apex cordis", "Ictus cordis"]
    }
  },
  {
    id: "zelle3d", kats: ["zelle"], titel: "Zelle 3D (aufgeschnitten)",
    teile: {
      _ganz: ["Cellula"],
      membrana: ["Membrana cellularis"], cytoplasma: ["Cytoplasma"], nucleus: ["Nucleus"], nucleolus: ["Nucleolus"], mito: ["Mitochondrium"],
      er: ["Reticulum endoplasmaticum"], golgi: ["Apparatus Golgii"], lyso: ["Lysosoma"], ribosom: ["Ribosoma"], zentriol: ["Centriolum"]
    }
  },
  {
    id: "skelett3d", kats: ["knochen"], titel: "Skelett 3D",
    teile: {
      _ganz: ["Skeleton", "Os, Ossis (Pl. Ossa)"],
      cranium: ["Cranium"], mandibula: ["Mandibula"], hws: ["Vertebrae cervicales"], bws: ["Vertebrae thoracicae"], lws: ["Vertebrae lumbales", "Columna vertebralis"],
      sacrum: ["Os sacrum"], costa: ["Costa (Pl. Costae)", "Thorax"], sternum: ["Sternum"], clavicula: ["Clavicula"], scapula: ["Scapula"], humerus: ["Humerus"],
      radius: ["Radius"], ulna: ["Ulna"], carpus: ["Ossa carpi"], metacarpi: ["Ossa metacarpi", "Phalanges"], os_coxae: ["Os coxae", "Os ilium", "Cingulum pelvicum"],
      femur: ["Femur"], patella: ["Patella"], tibia: ["Tibia"], fibula: ["Fibula"], tarsus: ["Ossa tarsi", "Calcaneus", "Talus"], metatarsi: ["Ossa metatarsi"]
    }
  }
];
