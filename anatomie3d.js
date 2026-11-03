// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – interaktive 3D-Anatomie (Three.js, wird erst beim Öffnen einer 3D-Ansicht geladen).
// Die Modelle sind aus Grundkörpern aufgebaut (schematisch, nicht maßstabsgetreu).
// Bedienung: ziehen = drehen, zwei Finger/Mausrad = zoomen, antippen = Struktur öffnen.

import * as THREE from "./vendor/three.module.min.js";

const HL = new THREE.Color("#14b8a6");

// ---------- Bausteine ----------
function mat(farbe, opt = {}) {
  return new THREE.MeshStandardMaterial(Object.assign({ color: farbe, roughness: 0.55, metalness: 0.02 }, opt));
}
function mesh(geo, m, tok, pos, rot, scale) {
  const o = new THREE.Mesh(geo, m);
  if (pos) o.position.set(pos[0], pos[1], pos[2]);
  if (rot) o.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) o.scale.set(scale[0], scale[1], scale[2]);
  o.userData.tok = tok || "";
  return o;
}
// Zylinder zwischen zwei Punkten (für Knochen, Gefäße, Muskeln)
function stab(a, b, r, m, tok, r2) {
  const A = new THREE.Vector3(...a), Bv = new THREE.Vector3(...b), d = Bv.clone().sub(A);
  const o = new THREE.Mesh(new THREE.CylinderGeometry(r2 == null ? r : r2, r, d.length(), 14), m);
  o.position.copy(A).add(d.multiplyScalar(0.5));
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), Bv.clone().sub(A).normalize());
  o.userData.tok = tok;
  return o;
}
function rohr(punkte, r, m, tok) {
  const kurve = new THREE.CatmullRomCurve3(punkte.map(p => new THREE.Vector3(...p)));
  const o = new THREE.Mesh(new THREE.TubeGeometry(kurve, 64, r, 12, false), m);
  o.userData.tok = tok;
  return o;
}

// ---------- Modelle ----------
const BAU = {
  // Augapfel, oben aufgeschnitten (Horizontalschnitt): Blick von oben in das Auge
  auge3d(g, schnitt) {
    const clip = [schnitt];
    const ds = { side: THREE.DoubleSide, clippingPlanes: clip };
    g.add(mesh(new THREE.SphereGeometry(1, 64, 40), mat("#f7f3ea", ds), "sclera"));
    g.add(mesh(new THREE.SphereGeometry(0.965, 64, 40), mat("#8e3b3b", ds), "choroidea"));
    g.add(mesh(new THREE.SphereGeometry(0.94, 64, 40), mat("#f0a07f", ds), "retina"));
    g.add(mesh(new THREE.SphereGeometry(0.92, 48, 32), mat("#dceef8", Object.assign({ transparent: true, opacity: 0.35, depthWrite: false }, ds)), "vitreum"));
    const cornea = new THREE.SphereGeometry(0.55, 48, 24, 0, Math.PI * 2, 0, 0.75); cornea.rotateX(Math.PI / 2);
    g.add(mesh(cornea, mat("#cfeaf7", Object.assign({ transparent: true, opacity: 0.45, depthWrite: false }, ds)), "cornea", [0, 0, 0.525]));
    g.add(mesh(new THREE.RingGeometry(0.13, 0.37, 64), mat("#4f8584", ds), "iris", [0, 0, 0.86]));
    g.add(mesh(new THREE.CircleGeometry(0.13, 48), mat("#151515", ds), "pupilla", [0, 0, 0.855]));
    g.add(mesh(new THREE.SphereGeometry(0.3, 48, 32), mat("#e6f1fa", Object.assign({ transparent: true, opacity: 0.85 }, ds)), "lens", [0, 0, 0.7], null, [1, 1, 0.5]));
    g.add(mesh(new THREE.TorusGeometry(0.38, 0.045, 14, 64), mat("#9a5b4b", ds), "ziliar", [0, 0, 0.78]));
    g.add(mesh(new THREE.SphereGeometry(0.07, 20, 16), mat("#e9c42f", ds), "macula", [0.12, 0, -0.93]));
    g.add(stab([-0.18, 0, -0.95], [-0.25, 0, -2.0], 0.14, mat("#f2cc4d", ds), "opticus"));
    const muskel = mat("#d9705f", ds);
    g.add(stab([1.0, 0, 0.35], [0.7, 0, -2.0], 0.07, muskel, "rectus_lat", 0.12));
    g.add(stab([-1.0, 0, 0.35], [-0.75, 0, -2.0], 0.07, muskel, "rectus_med", 0.12));
    g.add(stab([0, -1.0, 0.35], [0, -0.75, -2.0], 0.07, muskel, "rectus_inf", 0.12));
    g.rotation.set(0, -0.5, 0);
  },

  // Herz von vorne, schematisch
  herz3d(g) {
    const myo = c => mat(c, { roughness: 0.45 });
    g.add(mesh(new THREE.SphereGeometry(1, 48, 32), myo("#c4544b"), "lv", [0.32, -0.3, -0.05], [0, 0, -0.35], [0.72, 1.12, 0.72]));
    g.add(mesh(new THREE.SphereGeometry(1, 48, 32), myo("#b7655f"), "rv", [-0.28, -0.22, 0.25], [0, 0, 0.25], [0.68, 0.95, 0.58]));
    g.add(mesh(new THREE.SphereGeometry(0.46, 40, 28), myo("#c96a5e"), "la", [0.45, 0.62, -0.32]));
    g.add(mesh(new THREE.SphereGeometry(0.5, 40, 28), myo("#9a6f9c"), "ra", [-0.6, 0.5, 0.0]));
    g.add(mesh(new THREE.SphereGeometry(0.09, 16, 12), myo("#c4544b"), "apex", [0.42, -1.42, 0.1]));
    g.add(rohr([[0.1, 0.25, 0.05], [0.08, 1.2, 0.05], [0.35, 1.68, -0.15], [0.78, 1.5, -0.42], [0.86, 0.9, -0.55], [0.82, -0.6, -0.65]], 0.17, mat("#d64541"), "aorta"));
    const blau = mat("#3f6fc6");
    g.add(rohr([[-0.12, 0.2, 0.5], [-0.02, 0.92, 0.42], [0.28, 1.18, 0.22]], 0.15, blau, "truncus"));
    g.add(rohr([[0.28, 1.18, 0.22], [0.65, 1.2, 0.05], [1.1, 1.1, -0.1]], 0.1, blau, "truncus"));
    g.add(rohr([[0.28, 1.18, 0.22], [-0.2, 1.22, -0.12], [-0.85, 1.12, -0.25]], 0.1, blau, "truncus"));
    g.add(stab([-0.62, 0.85, 0], [-0.62, 1.95, 0], 0.15, blau, "vcs"));
    g.add(stab([-0.55, 0.15, -0.1], [-0.55, -1.0, -0.1], 0.16, blau, "vci"));
    const rot = mat("#e05a50");
    g.add(stab([0.8, 0.72, -0.4], [1.35, 0.78, -0.45], 0.07, rot, "vvpulm"));
    g.add(stab([0.8, 0.5, -0.4], [1.35, 0.48, -0.45], 0.07, rot, "vvpulm"));
    const kranz = mat("#ff5a4e", { emissive: "#400", roughness: 0.4 });
    g.add(rohr([[0.12, 0.35, 0.55], [0.08, -0.35, 0.68], [0.12, -1.0, 0.5], [0.35, -1.38, 0.22]], 0.035, kranz, "riva"));
    g.add(rohr([[-0.05, 0.3, 0.45], [-0.55, 0.05, 0.55], [-0.85, -0.45, 0.25], [-0.6, -0.9, 0.05]], 0.035, kranz, "rca"));
    g.rotation.set(0.1, -0.35, 0);
  },

  // Zelle, vorne aufgeschnitten
  zelle3d(g, schnitt) {
    const clip = [schnitt], ds = { side: THREE.DoubleSide, clippingPlanes: clip };
    g.add(mesh(new THREE.SphereGeometry(1.25, 64, 40), mat("#e6a3ad", Object.assign({ transparent: true, opacity: 0.55 }, ds)), "membrana"));
    g.add(mesh(new THREE.SphereGeometry(1.2, 48, 32), mat("#fbe7dc", Object.assign({ transparent: true, opacity: 0.35, depthWrite: false }, ds)), "cytoplasma"));
    g.add(mesh(new THREE.SphereGeometry(0.45, 48, 32), mat("#b89ad8", ds), "nucleus", [-0.05, 0.05, 0]));
    g.add(mesh(new THREE.SphereGeometry(0.16, 24, 16), mat("#6d4a9b"), "nucleolus", [0.05, 0.12, -0.05]));
    const mito = mat("#f0956b");
    [[0.7, 0.3, -0.2, 0.6], [-0.6, -0.55, 0.2, -0.4], [0.35, -0.75, -0.3, 1.2], [-0.75, 0.45, -0.3, 2.0]].forEach(p =>
      g.add(mesh(new THREE.CapsuleGeometry(0.09, 0.3, 8, 16), mito, "mito", [p[0], p[1], p[2]], [p[3], 0.4, 0.8])));
    const er = mat("#7fa8d6");
    [0.62, 0.72, 0.82].forEach((r, i) => g.add(mesh(new THREE.TorusGeometry(r, 0.025, 8, 64, Math.PI * 0.9), er, "er", [-0.05, 0.05, 0], [0.3 * i, 0.5, 2.2])));
    const golgi = mat("#e3a64f");
    for (let i = 0; i < 4; i++) g.add(mesh(new THREE.TorusGeometry(0.28 - i * 0.03, 0.025, 8, 32, Math.PI * 0.7), golgi, "golgi", [0.55 + i * 0.05, -0.25 - i * 0.05, 0.1], [0, 0.3, -0.6]));
    const lyso = mat("#8cc77a");
    [[-0.3, -0.8, -0.2], [0.85, -0.2, -0.3], [-0.85, 0, -0.4]].forEach(p => g.add(mesh(new THREE.SphereGeometry(0.08, 16, 12), lyso, "lyso", p)));
    const ribo = mat("#2f4f86");
    for (let i = 0; i < 40; i++) {
      const a = i * 2.39996, r = 0.55 + (i % 5) * 0.1, y = ((i * 37) % 100) / 100 - 0.5;
      g.add(mesh(new THREE.SphereGeometry(0.025, 8, 6), ribo, "ribosom", [Math.cos(a) * r, y * 1.4, Math.sin(a) * r * 0.8 - 0.1]));
    }
    const zentriol = mat("#666");
    g.add(stab([0.3, 0.6, -0.2], [0.3, 0.78, -0.2], 0.04, zentriol, "zentriol"));
    g.add(stab([0.25, 0.68, -0.2], [0.43, 0.68, -0.2], 0.04, zentriol, "zentriol"));
    g.rotation.set(0.25, 0.4, 0);
  },

  // Skelett von vorne (vereinfacht)
  skelett3d(g) {
    const k = mat("#efe4c8", { roughness: 0.7 });
    g.add(mesh(new THREE.SphereGeometry(0.21, 32, 24), k, "cranium", [0, 1.5, 0], null, [1, 1.12, 1.08]));
    g.add(mesh(new THREE.SphereGeometry(0.14, 24, 16), k, "mandibula", [0, 1.31, 0.06], null, [1, 0.5, 0.9]));
    // Wirbelsäule mit S-Form (Seitenansicht: Lordosen nach vorne, Kyphosen nach hinten)
    const z = y => y > 1.05 ? 0.03 : y > 0.45 ? -0.05 * Math.sin(Math.PI * (1.05 - y) / 0.6) : 0.04 * Math.sin(Math.PI * (0.45 - y) / 0.3);
    let y = 1.24;
    [[7, 0.028, 0.032, "hws"], [12, 0.048, 0.04, "bws"], [5, 0.058, 0.05, "lws"]].forEach(([n, h, r, t]) => {
      for (let i = 0; i < n; i++) { g.add(mesh(new THREE.CylinderGeometry(r, r, h * 0.8, 16), k, t, [0, y, z(y) - 0.08])); y -= h; }
    });
    g.add(mesh(new THREE.ConeGeometry(0.1, 0.22, 16), k, "sacrum", [0, 0.02, -0.1], [Math.PI, 0, 0]));
    // Rippen: Bögen von der Wirbelsäule um den Brustkorb nach vorne
    for (let i = 0; i < 12; i++) {
      const yy = 1.02 - i * 0.05, w = 0.6 + Math.sin(Math.PI * Math.min(i, 9) / 11) * 0.42, frei = i >= 10;
      const pts = [];
      for (let a = 0.35 + (frei ? 0.9 : 0); a <= Math.PI * 2 - 0.35 - (frei ? 0.9 : 0); a += 0.2) pts.push([0.26 * w * Math.sin(a), yy - 0.07 * (1 + Math.cos(a)) / 2, 0.19 * w * Math.cos(a) - 0.04]);
      g.add(rohr(pts, 0.011, k, "costa"));
    }
    g.add(mesh(new THREE.BoxGeometry(0.06, 0.4, 0.03), k, "sternum", [0, 0.83, 0.16]));
    [-1, 1].forEach(s => {
      g.add(rohr([[s * 0.04, 1.08, 0.15], [s * 0.18, 1.1, 0.1], [s * 0.33, 1.12, 0.0]], 0.014, k, "clavicula"));
      const sc = new THREE.Shape(); sc.moveTo(0, 0); sc.lineTo(s * 0.17, 0.02); sc.lineTo(s * 0.05, -0.26); sc.closePath();
      g.add(mesh(new THREE.ShapeGeometry(sc), mat("#e8dcbc", { side: THREE.DoubleSide }), "scapula", [s * 0.16, 1.07, -0.17]));
      g.add(mesh(new THREE.SphereGeometry(0.055, 16, 12), k, "humerus", [s * 0.36, 1.07, 0]));
      g.add(stab([s * 0.37, 1.05, 0], [s * 0.42, 0.5, 0], 0.033, k, "humerus"));
      g.add(stab([s * 0.45, 0.48, 0.01], [s * 0.5, -0.05, 0.03], 0.02, k, "radius"));
      g.add(stab([s * 0.41, 0.48, -0.01], [s * 0.45, -0.05, 0.0], 0.02, k, "ulna"));
      g.add(mesh(new THREE.BoxGeometry(0.08, 0.05, 0.03), k, "carpus", [s * 0.48, -0.09, 0.02]));
      for (let f = 0; f < 5; f++) g.add(stab([s * (0.45 + f * 0.016), -0.12, 0.02], [s * (0.43 + f * 0.025), -0.3 + (f === 4 ? 0.08 : 0), 0.03], 0.008, k, "metacarpi"));
      // Becken und Bein
      g.add(mesh(new THREE.SphereGeometry(1, 24, 16), k, "os_coxae", [s * 0.13, 0.04, -0.02], [0.2, s * 0.5, s * 0.35], [0.15, 0.12, 0.06]));
      g.add(stab([s * 0.04, -0.09, 0.07], [s * 0.1, -0.06, 0.04], 0.02, k, "os_coxae"));
      g.add(mesh(new THREE.SphereGeometry(0.045, 16, 12), k, "femur", [s * 0.12, -0.04, 0.01]));
      g.add(stab([s * 0.12, -0.04, 0.01], [s * 0.18, -0.08, 0], 0.025, k, "femur"));
      g.add(mesh(new THREE.SphereGeometry(0.035, 12, 10), k, "femur", [s * 0.2, -0.07, 0]));
      g.add(stab([s * 0.18, -0.08, 0], [s * 0.12, -0.86, 0], 0.036, k, "femur"));
      g.add(mesh(new THREE.SphereGeometry(0.04, 16, 12), k, "patella", [s * 0.12, -0.9, 0.05], null, [1, 1.2, 0.5]));
      g.add(stab([s * 0.11, -0.93, 0], [s * 0.115, -1.6, 0], 0.032, k, "tibia"));
      g.add(stab([s * 0.165, -0.95, -0.01], [s * 0.165, -1.58, -0.01], 0.014, k, "fibula"));
      g.add(mesh(new THREE.BoxGeometry(0.08, 0.06, 0.1), k, "tarsus", [s * 0.13, -1.66, 0.0]));
      g.add(mesh(new THREE.BoxGeometry(0.09, 0.03, 0.14), k, "metatarsi", [s * 0.135, -1.68, 0.12]));
    });
  }
};

// ---------- Betrachter ----------
// starte(container, modellId, { hl: Kürzel oder null, onPick(kürzel) }) → { setHl(tok), dispose() }
export function starte(container, id, opt = {}) {
  const w = container.clientWidth || 320, h = container.clientHeight || 320;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  renderer.localClippingEnabled = true;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight("#ffffff", "#8a8070", 1.1));
  const sonne = new THREE.DirectionalLight("#ffffff", 1.6); sonne.position.set(2, 3, 4); scene.add(sonne);
  const fill = new THREE.DirectionalLight("#cfe6ff", 0.5); fill.position.set(-3, -1, -2); scene.add(fill);

  // Schnittebenen liegen fest im Raum: beim Drehen des Modells entsteht immer ein frischer Schnitt
  const g = new THREE.Group();
  const schnitt = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);         // Auge: obere Hälfte entfernt (Horizontalschnitt)
  const schnittZ = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.25);     // Zelle: vordere Kappe entfernt
  BAU[id](g, id === "zelle3d" ? schnittZ : schnitt);
  scene.add(g);
  // Blick von schräg oben, damit man in aufgeschnittene Modelle hineinsieht
  const hoehe = { auge3d: 0.75, zelle3d: 0.3 }[id] || 0.12;

  // Kamera an Modellgröße anpassen
  const box = new THREE.Box3().setFromObject(g), kugel = box.getBoundingSphere(new THREE.Sphere());
  const camera = new THREE.PerspectiveCamera(35, w / h, 0.01, 100);
  let dist = kugel.radius / Math.sin(THREE.MathUtils.degToRad(17.5)) * 1.02;
  const ziel = kugel.center.clone();

  // Hervorhebung: leuchtendes Pulsieren der gewählten Struktur
  let hl = opt.hl || null;
  const teile = [];
  g.traverse(o => { if (o.isMesh) { teile.push(o); o.userData.basis = o.material.emissive ? o.material.emissive.clone() : null; } });
  // Jedes Mesh bekommt ein eigenes Material, damit nur die markierte Struktur leuchtet
  // (clone() kopiert Schnittebenen – deshalb die gemeinsame Ebene danach wieder zuweisen)
  teile.forEach(o => { const ebenen = o.material.clippingPlanes; o.material = o.material.clone(); o.material.clippingPlanes = ebenen; });

  function setHl(tok) {
    hl = tok;
    teile.forEach(o => {
      const an = hl && o.userData.tok === hl;
      o.material.transparent = o.material.transparent || !!hl;
      if (o.userData.opBasis == null) o.userData.opBasis = o.material.opacity;
      o.material.opacity = hl && !an ? Math.min(o.userData.opBasis, 0.35) : o.userData.opBasis;
      o.material.depthWrite = !hl || an ? o.userData.opBasis >= 0.99 : false;
      if (!an && o.userData.basis) o.material.emissive.copy(o.userData.basis);
    });
  }
  setHl(hl);

  // Drehen, Zoomen, Antippen
  let ziehen = null, bewegt = 0, pinch = null;
  const zeiger = new Map();
  const el = renderer.domElement;
  el.style.touchAction = "none";
  el.addEventListener("pointerdown", e => { zeiger.set(e.pointerId, [e.clientX, e.clientY]); ziehen = [e.clientX, e.clientY]; bewegt = 0; el.setPointerCapture(e.pointerId); });
  el.addEventListener("pointermove", e => {
    if (!zeiger.has(e.pointerId)) return;
    const alt = zeiger.get(e.pointerId);
    zeiger.set(e.pointerId, [e.clientX, e.clientY]);
    if (zeiger.size === 2) {
      const [p1, p2] = [...zeiger.values()], d = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
      if (pinch) dist = THREE.MathUtils.clamp(dist * pinch / d, kugel.radius * 1.2, kugel.radius * 8);
      pinch = d; bewegt += 10;
      return;
    }
    const dx = e.clientX - alt[0], dy = e.clientY - alt[1];
    bewegt += Math.abs(dx) + Math.abs(dy);
    g.rotation.y += dx * 0.01;
    g.rotation.x = THREE.MathUtils.clamp(g.rotation.x + dy * 0.01, -1.4, 1.4);
  });
  const ende = e => {
    zeiger.delete(e.pointerId);
    pinch = null;
    if (ziehen && bewegt < 6 && opt.onPick) {
      const r = el.getBoundingClientRect(), maus = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      const ray = new THREE.Raycaster(); ray.setFromCamera(maus, camera);
      const treffer = ray.intersectObjects(teile, false).filter(t => {
        const pl = t.object.material.clippingPlanes;
        return !pl || pl.every(p => p.distanceToPoint(t.point) >= 0);
      });
      if (treffer.length) opt.onPick(treffer[0].object.userData.tok);
    }
    if (!zeiger.size) ziehen = null;
  };
  el.addEventListener("pointerup", ende);
  el.addEventListener("pointercancel", ende);
  el.addEventListener("wheel", e => { e.preventDefault(); dist = THREE.MathUtils.clamp(dist * (1 + e.deltaY * 0.001), kugel.radius * 1.2, kugel.radius * 8); }, { passive: false });

  let lauf = true, t0 = performance.now(), auto = !opt.hl;
  el.addEventListener("pointerdown", () => { auto = false; }, { once: true });
  function frame(t) {
    if (!lauf) return;
    if (auto) g.rotation.y += 0.004;
    camera.position.set(ziel.x, ziel.y + Math.sin(hoehe) * dist, ziel.z + Math.cos(hoehe) * dist);
    camera.lookAt(ziel);
    const puls = 0.55 + 0.45 * Math.sin((t - t0) / 260);
    if (hl) teile.forEach(o => { if (o.userData.tok === hl && o.material.emissive) o.material.emissive.copy(HL).multiplyScalar(puls); });
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  const beobachter = new ResizeObserver(() => {
    const W = container.clientWidth, H = container.clientHeight;
    if (W && H) { renderer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix(); }
  });
  beobachter.observe(container);

  return {
    setHl,
    dispose() {
      lauf = false; beobachter.disconnect();
      teile.forEach(o => { o.geometry.dispose(); o.material.dispose(); });
      renderer.dispose(); el.remove();
    }
  };
}
