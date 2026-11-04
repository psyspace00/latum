// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Oberflächentexte Deutsch / Tiếng Việt
// Medizinische Fachbegriffe (Latein/international) werden nicht übersetzt.

const UI_TEXTE = {
  de: {
    appSub: "Anatomie und Pflegewissen für deine Ausbildung",
    suchen: "Suchen", sucheHero: "Körperteil oder Thema suchen – z. B. „Auge“", abbrechen: "Abbrechen", zurueck: "Zurück",
    tabStart: "Start", tabLernen: "Lernen", tabTest: "Test-Vorbereitung", tabGemerkt: "Gemerkt", tabInfo: "Info",
    testLead: "Kleine Tests wie in der Schule: Die Lösung erscheint erst nach dem Abgeben.",
    zeitlimit: "Mit Zeitlimit", zeitlimitSub: "1 Minute pro Frage",
    kurztests: "Kurztests", gesamttest: "Gesamttest", gesamttestSub: n => `${n} gemischte Fragen`, gemischterTest: "Gemischter Test", testFragen: n => n === 1 ? "1 Frage" : `${n} Fragen`, zuletzt: p => `Zuletzt ${p} %`,
    zusammenstellen: "Test zusammenstellen", themenWaehlen: "Wähle ein oder mehrere Themen, dazu die Anzahl der Fragen.", anzahl: "Anzahl der Fragen", testStarten: "Test starten",
    meineTests: "Meine Tests", meineTestsLead: "Schreibe eigene Fragen, z. B. zu dem, was in deinem Schultest drankommt. Sie bleiben nur auf diesem Gerät gespeichert.", neuerTest: "Eigenen Test erstellen",
    testAbgeben: "Test abgeben", testWeiter: "Weiter", testOffen: n => `${n} Frage(n) sind noch unbeantwortet. Trotzdem abgeben?`,
    testNochmal: "Test wiederholen", falschBeantwortet: n => `Noch einmal ansehen (${n})`, alleRichtig: "Alle Fragen richtig beantwortet!", richtigWaere: "Richtig:",
    edNeu: "Neuer Test", edBearbeiten: "Test bearbeiten", edName: "Name des Tests", edNamePlatz: "z. B. Klausur Harnwege", edFrage: n => `Frage ${n}`, edFragePlatz: "Frage eingeben", edAntwort: n => `Antwort ${n}`,
    edHinweis: "Tippe auf den Kreis der richtigen Antwort. Mindestens 2 Antworten ausfüllen.", edFrageNeu: "+ Frage hinzufügen", edFrageWeg: "Entfernen", edSpeichern: "Speichern", edLoeschen: "Test löschen", edLoeschenFrage: "Diesen Test wirklich löschen?",
    edFehlerName: "Bitte gib dem Test einen Namen.", edFehlerFrage: n => `Frage ${n}: Bitte Frage, mindestens 2 Antworten und die richtige Antwort ausfüllen.`,
    versionText: v => `Version ${v}`, wasIstNeu: "Was ist neu?", updateNeu: "Das ist neu", alleKlar: "Alles klar",
    pruefungstraining: "Prüfungstraining", fragenMitFall: n => `${n} Fragen mit Fallbeispielen`, begriffDesTages: "Begriff des Tages",
    koerperAnatomie: "Körper & Anatomie", anatomieSub: "Latein · 3D · Querschnitte",
    menueSub: { pflegeprozess: "AEDL, SIS, Pflegeplanung", prophylaxen: "11 Prophylaxen komplett", kontrakturen: "Vertiefung", vitalzeichen: "Puls, RR, Temp., Atmung, GCS",
      herzkreislauf: "Anatomie · Physiologie · Krankheiten", ernaehrung: "Dysphagie · PEG · Bilanz", ausscheidung: "DK legen · Stomaversorgung" },
    anatomieLead: (a, b, c) => `${a} Fachbegriffe · ${b} Querschnitte · ${c} 3D-Modelle`, modelle3d: "3D-Modelle",
    sektionen: ["Grundlagen", "Bewegungsapparat", "Herz, Kreislauf und Abwehr", "Organsysteme", "Steuerung und Sinne"],
    modellLead: "Schematisches Modell – ziehen zum Drehen, zwei Finger zum Zoomen, antippen zum Öffnen.", strukturenImModell: "Strukturen im Modell",
    begriffe: n => `${n} Begriffe`, themen: "Themen", tippeStruktur: "Tippe auf eine Struktur",
    wissenTesten: "Wissen testen", pruefungsfragenZu: t => `Prüfungsfragen zu „${t}“`, merke: "Merke", achtung: "Achtung", anatomiePrefix: "Anatomie", weiterPrefix: "Weiter",
    lernen: "Lernen", lernenLead: "Prüfungstraining nach Themen, Karteikarten und Bildquiz", simulation: "Prüfungssimulation", simulationSub: "20 gemischte Fragen aus allen Bereichen",
    fragenNachThema: "Prüfungsfragen nach Thema", fragen: n => `${n} Fragen`, teilsAuto: " (teils automatisch erzeugt)",
    lateinLernen: "Latein lernen", karteikarten: "Karteikarten", karteiSub: "Latein ↔ Deutsch", bildquiz: "Bildquiz", bildquizSub: "Leuchtende Struktur benennen",
    gemerkt: "Gemerkt", leerGemerkt: "Noch nichts gemerkt.<br>Öffne einen Begriff und tippe auf „Merken“.",
    latein: "Latein", uebersetzung: "Deutsch", merken: "☆ Merken", gemerktBtn: "★ Gemerkt", anhoeren: "🔊 Anhören", schliessen: "Schließen",
    modell3d: "3D-Modell", querschnitt: "Querschnitt", v3dLaden: "3D-Modell wird geladen …", v3dHint: "Ziehen = drehen · Tippen = Struktur öffnen",
    v3dNicht: "3D wird auf diesem Gerät nicht unterstützt.",
    besterTreffer: "Bester Treffer", detailsOeffnen: "Details öffnen", anatomQuer: "Anatomischer Querschnitt", pflegewissen: "Pflegewissen",
    anatomieTreffer: n => `Anatomie · ${n} Treffer`, keinTreffer: q => `Kein Treffer für „${q}“.`,
    ergebnis: "Ergebnis", vonRichtig: (r, n) => `<b>${r} von ${n}</b> richtig`,
    lob: ["Sehr gut – prüfungsreif!", "Gut – wiederhole die markierten Themen.", "Weiter üben – lies die Kapitel noch einmal."],
    nachThema: "Nach Thema", neueRunde: "Neue Runde", hinweisMulti: "Mehrere Antworten können richtig sein.",
    hinweisOrder: "Tippe die Antworten in der richtigen Reihenfolge an.", hinweisSingle: "Wähle eine Antwort.", frageVon: (i, n) => `Frage ${i} von ${n}`,
    fallbeispiel: "Fallbeispiel", richtig: "Richtig!", nichtGanz: "Nicht ganz.", naechste: "Nächste Frage", zumErgebnis: "Zum Ergebnis",
    zuruecksetzen: "Zurücksetzen", pruefen: "Antwort prüfen", richtigNr: n => `richtig: ${n}.`,
    autoFrage: lat => `Was bedeutet „${lat}“?`, autoFrageUm: tr => `Wie lautet die lateinische Bezeichnung für „${tr}“?`,
    bildLead: "Eine Struktur leuchtet in der Grafik – wie heißt sie?", kartenLead: "Begriff lesen, Antwort überlegen, Karte umdrehen.",
    richtung: "Abfragerichtung", latZuTr: "Latein → Deutsch", trZuLat: "Deutsch → Latein", thema: "Thema", alleThemen: "Alle Themen", gemerktChip: "★ Gemerkt",
    kartenStarten: n => `${n} Karten starten`, geschafft: "Geschafft!", kartenGelernt: n => `${n} Karten gelernt.`, gewusstVon: (a, b) => `${a} von ${b} gewusst`,
    wieHeisst: "Wie heißt die leuchtende Struktur?", tippenAufdecken: "Tippen zum Aufdecken", nochmal: "✗ Nochmal", gewusst: "✓ Gewusst",
    infoTitel: "Über MediSmart", infoLead: (a, b, c) => `${a} Begriffe · ${b} Pflegekapitel · ${c} Prüfungsfragen`,
    infoHtml: "<h3>Wofür?</h3><p>Lern-App für Medizin und die generalistische Pflegeausbildung: anatomische Fachbegriffe in Latein mit Übersetzung, Pflegeprozess, Prophylaxen, Vitalzeichen, Herz-Kreislauf, Ernährung und Prüfungstraining.</p>" +
      "<h3>Bedienung</h3><ul><li><b>DE / VI</b> oben rechts: Sprache der Oberfläche und Erklärungen (Deutsch oder Tiếng Việt). Lateinische Fachbegriffe bleiben immer erhalten.</li><li><b>Suche</b> oben rechts: Körperteile oder Themen auf Deutsch, Vietnamesisch oder Latein.</li>" +
      "<li><b>Zurück</b>: Pfeil oben links oder vom linken Bildschirmrand nach rechts wischen.</li><li><b>3D</b>: ziehen zum Drehen, zwei Finger zum Zoomen, antippen zum Öffnen.</li><li><b>Detailblatt</b>: nach unten wischen zum Schließen.</li></ul>" +
      "<h3>Grundlagen und Quellen</h3><p>Lateinische Bezeichnungen nach der <i>Terminologia Anatomica</i>. Pflegeinhalte orientiert an den Expertenstandards des DNQP, NPIAP/EPUAP (Dekubitus), ESC/ESH (Blutdruck), NEWS2 und dem Aufbau gängiger Pflegelehrbücher (z. B. „Pflege Heute“). Texte, Grafiken und 3D-Modelle sind eigenständig erstellte, vereinfachte Lernhilfen. Die vietnamesische Übersetzung wurde maschinell erstellt und sollte fachlich gegengelesen werden.</p>" +
      "<h3>Hinweis</h3><p>MediSmart ersetzt weder Lehrbuch noch Unterricht, ärztliche Anordnungen oder Hausstandards. Normwerte und Maßnahmen dienen der Orientierung.</p>" +
      "<h3>Urheberrecht</h3><p>© 2026 Maximilian Riehn. Alle Rechte vorbehalten. MediSmart ist geistiges Eigentum von Maximilian Riehn. Kopieren, Weitergeben oder Veröffentlichen von Inhalten nur mit schriftlicher Genehmigung.</p>"
  },
  vi: {
    appSub: "Giải phẫu và kiến thức điều dưỡng cho việc học của bạn",
    suchen: "Tìm kiếm", sucheHero: "Tìm bộ phận cơ thể hoặc chủ đề – ví dụ „Mắt“", abbrechen: "Hủy", zurueck: "Quay lại",
    tabStart: "Trang chủ", tabLernen: "Học", tabTest: "Ôn kiểm tra", tabGemerkt: "Đã lưu", tabInfo: "Thông tin",
    testLead: "Bài kiểm tra ngắn như ở trường: đáp án chỉ hiện sau khi nộp bài.",
    zeitlimit: "Giới hạn thời gian", zeitlimitSub: "1 phút mỗi câu",
    kurztests: "Bài kiểm tra ngắn", gesamttest: "Kiểm tra tổng hợp", gesamttestSub: n => `${n} câu hỏi hỗn hợp`, gemischterTest: "Bài kiểm tra hỗn hợp", testFragen: n => `${n} câu hỏi`, zuletzt: p => `Lần trước ${p} %`,
    zusammenstellen: "Tự chọn bài kiểm tra", themenWaehlen: "Chọn một hoặc nhiều chủ đề và số câu hỏi.", anzahl: "Số câu hỏi", testStarten: "Bắt đầu",
    meineTests: "Bài kiểm tra của tôi", meineTestsLead: "Tự viết câu hỏi, ví dụ về nội dung sẽ có trong bài kiểm tra ở trường. Câu hỏi chỉ được lưu trên thiết bị này.", neuerTest: "Tạo bài kiểm tra",
    testAbgeben: "Nộp bài", testWeiter: "Tiếp", testOffen: n => `Còn ${n} câu chưa trả lời. Vẫn nộp bài?`,
    testNochmal: "Làm lại", falschBeantwortet: n => `Xem lại (${n})`, alleRichtig: "Bạn đã trả lời đúng tất cả!", richtigWaere: "Đáp án đúng:",
    edNeu: "Bài kiểm tra mới", edBearbeiten: "Sửa bài kiểm tra", edName: "Tên bài kiểm tra", edNamePlatz: "ví dụ Kiểm tra đường tiết niệu", edFrage: n => `Câu ${n}`, edFragePlatz: "Nhập câu hỏi", edAntwort: n => `Đáp án ${n}`,
    edHinweis: "Chạm vào vòng tròn của đáp án đúng. Điền ít nhất 2 đáp án.", edFrageNeu: "+ Thêm câu hỏi", edFrageWeg: "Xóa", edSpeichern: "Lưu", edLoeschen: "Xóa bài kiểm tra", edLoeschenFrage: "Bạn có chắc muốn xóa bài kiểm tra này?",
    edFehlerName: "Vui lòng đặt tên cho bài kiểm tra.", edFehlerFrage: n => `Câu ${n}: Vui lòng điền câu hỏi, ít nhất 2 đáp án và đáp án đúng.`,
    versionText: v => `Phiên bản ${v}`, wasIstNeu: "Có gì mới?", updateNeu: "Có gì mới", alleKlar: "Đã hiểu",
    pruefungstraining: "Luyện thi", fragenMitFall: n => `${n} câu hỏi kèm tình huống`, begriffDesTages: "Thuật ngữ của ngày",
    koerperAnatomie: "Cơ thể & Giải phẫu", anatomieSub: "Latinh · 3D · Mặt cắt",
    menueSub: { pflegeprozess: "AEDL, SIS, lập kế hoạch chăm sóc", prophylaxen: "Đầy đủ 11 biện pháp dự phòng", kontrakturen: "Chuyên sâu", vitalzeichen: "Mạch, HA, nhiệt độ, nhịp thở, GCS",
      herzkreislauf: "Giải phẫu · Sinh lý · Bệnh học", ernaehrung: "Nuốt khó · PEG · Cân bằng dịch", ausscheidung: "Đặt ống thông · Chăm sóc stoma" },
    anatomieLead: (a, b, c) => `${a} thuật ngữ · ${b} mặt cắt · ${c} mô hình 3D`, modelle3d: "Mô hình 3D",
    sektionen: ["Cơ sở", "Hệ vận động", "Tim, tuần hoàn và miễn dịch", "Các hệ cơ quan", "Điều khiển và giác quan"],
    modellLead: "Mô hình sơ đồ – kéo để xoay, hai ngón để phóng to, chạm để mở.", strukturenImModell: "Các cấu trúc trong mô hình",
    begriffe: n => `${n} thuật ngữ`, themen: "Chủ đề", tippeStruktur: "Chạm vào một cấu trúc",
    wissenTesten: "Kiểm tra kiến thức", pruefungsfragenZu: t => `Câu hỏi thi về „${t}“`, merke: "Ghi nhớ", achtung: "Chú ý", anatomiePrefix: "Giải phẫu", weiterPrefix: "Tiếp",
    lernen: "Học", lernenLead: "Luyện thi theo chủ đề, thẻ ghi nhớ và đố hình", simulation: "Thi thử", simulationSub: "20 câu hỏi hỗn hợp từ mọi lĩnh vực",
    fragenNachThema: "Câu hỏi thi theo chủ đề", fragen: n => `${n} câu hỏi`, teilsAuto: " (một phần được tạo tự động)",
    lateinLernen: "Học tiếng Latinh", karteikarten: "Thẻ ghi nhớ", karteiSub: "Latinh ↔ Tiếng Việt", bildquiz: "Đố hình", bildquizSub: "Gọi tên cấu trúc phát sáng",
    gemerkt: "Đã lưu", leerGemerkt: "Chưa lưu mục nào.<br>Mở một thuật ngữ và chạm „Lưu“.",
    latein: "Latinh", uebersetzung: "Tiếng Việt", merken: "☆ Lưu", gemerktBtn: "★ Đã lưu", anhoeren: "🔊 Nghe", schliessen: "Đóng",
    modell3d: "Mô hình 3D", querschnitt: "Mặt cắt", v3dLaden: "Đang tải mô hình 3D …", v3dHint: "Kéo = xoay · Chạm = mở cấu trúc",
    v3dNicht: "Thiết bị này không hỗ trợ 3D.",
    besterTreffer: "Kết quả phù hợp nhất", detailsOeffnen: "Mở chi tiết", anatomQuer: "Mặt cắt giải phẫu", pflegewissen: "Kiến thức điều dưỡng",
    anatomieTreffer: n => `Giải phẫu · ${n} kết quả`, keinTreffer: q => `Không tìm thấy „${q}“.`,
    ergebnis: "Kết quả", vonRichtig: (r, n) => `Đúng <b>${r}/${n}</b> câu`,
    lob: ["Rất tốt – sẵn sàng đi thi!", "Tốt – hãy ôn lại các chủ đề còn yếu.", "Hãy luyện tập thêm – đọc lại các chương."],
    nachThema: "Theo chủ đề", neueRunde: "Lượt mới", hinweisMulti: "Có thể có nhiều đáp án đúng.",
    hinweisOrder: "Chạm vào các đáp án theo đúng thứ tự.", hinweisSingle: "Chọn một đáp án.", frageVon: (i, n) => `Câu ${i}/${n}`,
    fallbeispiel: "Tình huống", richtig: "Chính xác!", nichtGanz: "Chưa đúng.", naechste: "Câu tiếp theo", zumErgebnis: "Xem kết quả",
    zuruecksetzen: "Làm lại", pruefen: "Kiểm tra đáp án", richtigNr: n => `đúng: ${n}.`,
    autoFrage: lat => `„${lat}“ nghĩa là gì?`, autoFrageUm: tr => `Tên Latinh của „${tr}“ là gì?`,
    bildLead: "Một cấu trúc phát sáng trong hình – tên của nó là gì?", kartenLead: "Đọc thuật ngữ, nghĩ câu trả lời, lật thẻ.",
    richtung: "Chiều hỏi", latZuTr: "Latinh → Tiếng Việt", trZuLat: "Tiếng Việt → Latinh", thema: "Chủ đề", alleThemen: "Tất cả chủ đề", gemerktChip: "★ Đã lưu",
    kartenStarten: n => `Bắt đầu ${n} thẻ`, geschafft: "Hoàn thành!", kartenGelernt: n => `Đã học ${n} thẻ.`, gewusstVon: (a, b) => `Đã thuộc ${a}/${b}`,
    wieHeisst: "Cấu trúc phát sáng tên là gì?", tippenAufdecken: "Chạm để lật thẻ", nochmal: "✗ Học lại", gewusst: "✓ Đã thuộc",
    infoTitel: "Giới thiệu MediSmart", infoLead: (a, b, c) => `${a} thuật ngữ · ${b} chương điều dưỡng · ${c} câu hỏi thi`,
    infoHtml: "<h3>Dùng để làm gì?</h3><p>Ứng dụng học tập cho ngành y và chương trình đào tạo điều dưỡng tổng quát: thuật ngữ giải phẫu tiếng Latinh kèm bản dịch, quy trình điều dưỡng, các biện pháp dự phòng, dấu hiệu sinh tồn, tim mạch, dinh dưỡng và luyện thi.</p>" +
      "<h3>Cách sử dụng</h3><ul><li><b>DE / VI</b> ở góc trên bên phải: ngôn ngữ giao diện và phần giải thích (tiếng Đức hoặc tiếng Việt). Thuật ngữ y khoa tiếng Latinh luôn được giữ nguyên.</li><li><b>Tìm kiếm</b> ở góc trên bên phải: bộ phận cơ thể hoặc chủ đề bằng tiếng Việt, tiếng Đức hoặc tiếng Latinh.</li>" +
      "<li><b>Quay lại</b>: mũi tên ở góc trên bên trái hoặc vuốt từ mép trái màn hình sang phải.</li><li><b>3D</b>: kéo để xoay, hai ngón để phóng to, chạm để mở.</li><li><b>Bảng chi tiết</b>: vuốt xuống để đóng.</li></ul>" +
      "<h3>Cơ sở và nguồn tham khảo</h3><p>Tên Latinh theo <i>Terminologia Anatomica</i>. Nội dung điều dưỡng dựa trên các tiêu chuẩn chuyên gia của DNQP (Đức), NPIAP/EPUAP (loét tì đè), ESC/ESH (huyết áp), NEWS2 và cấu trúc của các giáo trình điều dưỡng thông dụng (ví dụ „Pflege Heute“). Văn bản, hình minh họa và mô hình 3D là tài liệu học tập đơn giản hóa, được biên soạn độc lập. Bản dịch tiếng Việt được tạo bằng máy và nên được chuyên gia đọc lại.</p>" +
      "<h3>Lưu ý</h3><p>MediSmart không thay thế giáo trình, bài giảng, y lệnh của bác sĩ hay quy định của cơ sở. Các giá trị bình thường và biện pháp chỉ mang tính tham khảo. Nội dung chuyên môn dựa trên hệ thống y tế Đức.</p>" +
      "<h3>Bản quyền</h3><p>© 2026 Maximilian Riehn. Bảo lưu mọi quyền. MediSmart là tài sản trí tuệ của Maximilian Riehn. Chỉ được sao chép, chia sẻ hoặc công bố nội dung khi có sự đồng ý bằng văn bản.</p>"
  }
};

// Titel der Querschnitt-Grafiken und 3D-Modelle auf Vietnamesisch
const FIG_TITEL_VI = {
  richtungen: "Hướng và mặt phẳng", regionen: "Các vùng cơ thể (trước / sau)", zelle: "Tế bào", skelett: "Bộ xương (nhìn trước)", schaedel: "Hộp sọ (nhìn bên)",
  wirbelsaeule: "Cột sống (nhìn bên)", gelenk: "Cấu tạo khớp thật", knie: "Khớp gối (gối trái, nhìn trước)", muskeln: "Hệ cơ (trước / sau)",
  herz: "Tim (cắt dọc, nhìn trước)", arterien: "Các động mạch quan trọng", venen: "Các tĩnh mạch quan trọng", gefaesswand: "Thành động mạch và tĩnh mạch",
  blutzellen: "Tế bào máu", lymphsystem: "Hệ bạch huyết", kopf_sagittal: "Đầu và cổ (cắt dọc giữa)", lunge: "Đường hô hấp và phổi",
  verdauung: "Các cơ quan ổ bụng (nhìn trước)", zahn: "Răng (cắt dọc)", harnsystem: "Hệ tiết niệu (tổng quan)", niere: "Thận (cắt dọc)", nephron: "Nephron (sơ đồ)",
  weiblich: "Cơ quan sinh dục nữ bên trong", maennlich: "Cơ quan sinh dục nam (nhìn bên)", hormondruesen: "Các tuyến nội tiết (tổng quan)",
  nebenniere: "Tuyến thượng thận và tuyến giáp (vi thể)", gehirn: "Não (nhìn bên trái)", gehirn_median: "Não (cắt dọc giữa)", rueckenmark: "Tủy sống (cắt ngang)",
  nerven_periph: "Hệ thần kinh trung ương và ngoại biên", neuron: "Tế bào thần kinh (neuron)", auge: "Nhãn cầu (cắt ngang, mắt phải nhìn từ trên)",
  auge_vorn: "Mắt, mi mắt và bộ lệ (nhìn trước)", ohr: "Tai (cắt đứng ngang)", zunge: "Lưỡi (nhìn từ trên)", haut: "Da (cắt ngang)"
};
const MODELL_TITEL_VI = { auge3d: "Nhãn cầu 3D (cắt mở)", herz3d: "Tim 3D", zelle3d: "Tế bào 3D (cắt mở)", skelett3d: "Bộ xương 3D" };
// Beschriftungen innerhalb der Grafiken
const FIG_LABEL_VI = { "vorne": "trước", "hinten": "sau", "Knochen": "Xương", "Arterie": "Động mạch", "Vene": "Tĩnh mạch", "Rinde": "Vỏ", "Mark": "Tủy",
  "außen": "ngoài", "innen": "trong", "lateral": "bên ngoài", "medial (Nase)": "bên trong (mũi)", "Sehnerv →": "Thần kinh thị →", "Nebenniere": "Tuyến thượng thận", "Schilddrüse": "Tuyến giáp" };
const QUIZ_KAT_VI = { pflegeprozess: "Quy trình điều dưỡng", prophylaxen: "Dự phòng", kontrakturen: "Co rút", dekubitus: "Loét tì đè", vitalzeichen: "Dấu hiệu sinh tồn",
  herzkreislauf: "Tim mạch & Phổi", ernaehrung: "Dinh dưỡng", ausscheidung: "Stoma & Ống thông tiểu lưu", anatomie: "Giải phẫu & Latinh" };
