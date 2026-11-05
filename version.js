// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Versionen und Änderungen für das Update-Pop-up
// Bei jedem Update OBEN einen neuen Eintrag ergänzen: kurz, gegliedert, auf Deutsch und Vietnamesisch.
// Das Pop-up erscheint pro Version genau einmal. Wer Versionen übersprungen hat, sieht alle neuen Einträge.

// Empfänger des Feedback-Formulars (öffnet die Mail-App der Schülerinnen und Schüler)
const FEEDBACK_ADRESSE = "maximilian-wandt@gmx.de";

const APP_VERSIONEN = [
  {
    nummer: "1.01",
    de: [
      { titel: "Neu", punkte: [
        "Hauptthema ist jetzt die Pflegeausbildung, hoch-medizinische Inhalte blendet der Schalter „Medizin-Vertiefung“ ein",
        "Diagnosen: 32 häufige Krankheitsbilder mit Zeichen, Pflege und Warnhinweisen",
        "Biografiearbeit mit 4 Kapiteln und Prüfungsfragen",
        "Dehydratations- und Mangelernährungsprophylaxe (jetzt 13 Prophylaxen)",
        "Suche bündelt große Themen, z. B. „Hypertonie“",
        "Tab „Installieren“ für iPhone und Android",
        "Feedback direkt an die Lehrkraft"
      ] },
      { titel: "Geändert", punkte: [
        "Die fertigen Tests sind jetzt unter „Lernen“, im Tab „Test-Vorbereitung“ bleiben eigene Tests",
        "Hypertonie und Hypotonie fachlich überarbeitet"
      ] }
    ],
    vi: [
      { titel: "Mới", punkte: [
        "Chủ đề chính nay là đào tạo điều dưỡng, nội dung y khoa chuyên sâu được bật bằng công tắc „Y khoa chuyên sâu“",
        "Chẩn đoán: 32 bệnh thường gặp với dấu hiệu, chăm sóc và cảnh báo",
        "Biografiearbeit với 4 chương và câu hỏi thi",
        "Phòng ngừa mất nước và suy dinh dưỡng (nay có 13 biện pháp dự phòng)",
        "Tìm kiếm gom các chủ đề lớn, ví dụ „Hypertonie“",
        "Thẻ „Cài đặt“ cho iPhone và Android",
        "Gửi góp ý trực tiếp cho giáo viên"
      ] },
      { titel: "Thay đổi", punkte: [
        "Các bài kiểm tra có sẵn nay nằm ở „Học“, thẻ „Ôn kiểm tra“ giữ bài tự soạn",
        "Đã rà soát lại chuyên môn về tăng và hạ huyết áp"
      ] }
    ]
  },
  {
    nummer: "1.0",
    de: [
      { titel: "Neu", punkte: [
        "Tab „Test-Vorbereitung“: Kurztests, eigene Themenmischung und selbst geschriebene Tests",
        "Bereich „Stoma & Dauerkatheter“ mit 6 Kapiteln und 15 Prüfungsfragen"
      ] },
      { titel: "Verbessert", punkte: [
        "Dieses Fenster zeigt nach jedem Update, was sich geändert hat",
        "Die Suche findet jetzt auch Abkürzungen wie „DK“"
      ] }
    ],
    vi: [
      { titel: "Mới", punkte: [
        "Thẻ „Ôn kiểm tra“: bài kiểm tra ngắn, tự chọn chủ đề và tự soạn bài kiểm tra",
        "Mục „Stoma & Ống thông tiểu lưu“ với 6 chương và 15 câu hỏi thi"
      ] },
      { titel: "Cải thiện", punkte: [
        "Cửa sổ này cho biết những thay đổi sau mỗi lần cập nhật",
        "Tìm kiếm nay cũng nhận các chữ viết tắt như „DK“"
      ] }
    ]
  }
];
