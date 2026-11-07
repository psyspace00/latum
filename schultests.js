// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Schultests im Tab „Test-Vorbereitung“
// Jeder Schultest hat eigene Lernkarten (Frage vorne, Antwort hinten) auf Deutsch und Vietnamesisch.
// Die Testfragen stehen in quiz.js mit test: "<id>" (Übersetzung in vi_quiz.js an gleicher Stelle).
// Neue Schultests unten anhängen, die Nummer zählt weiter.

const SCHULTESTS = [
  {
    id: "ernaehrung1", nr: 1,
    titel: { de: "Ernährung", vi: "Dinh dưỡng" },
    themen: {
      de: ["Die DGE: was sie ist, warum sie gegründet wurde, ihre Ziele und Aufgaben", "Nährstoffe: besondere Herausforderungen bei älteren Menschen und warum", "Trinken im Alter und allgemein: wie viel, warum, Symptome, Mangel, Prävention", "Demenz: wie die Ernährung den Verlauf beeinflussen kann"],
      vi: ["DGE: là gì, vì sao được thành lập, mục tiêu và nhiệm vụ", "Chất dinh dưỡng: thách thức đặc biệt ở người cao tuổi và lý do", "Uống nước ở tuổi già và nói chung: bao nhiêu, vì sao, triệu chứng, thiếu nước, phòng ngừa", "Sa sút trí tuệ: dinh dưỡng ảnh hưởng đến diễn tiến như thế nào"]
    },
    kapitel: [["ernaehrung", "dge"], ["ernaehrung", "alter"], ["ernaehrung", "trinken"], ["ernaehrung", "demenz_ernaehrung"], ["ernaehrung", "naehrstoffe"]],
    karten: [
      // DGE
      { de: ["Was ist die DGE?", "Die Deutsche Gesellschaft für Ernährung e. V. ist die wissenschaftliche Fachgesellschaft für Ernährung in Deutschland: ein eingetragener Verein mit Sitz in Bonn und einem unabhängigen wissenschaftlichen Präsidium."],
        vi: ["DGE là gì?", "Hội Dinh dưỡng Đức (DGE e. V.) là hội chuyên môn khoa học về dinh dưỡng tại Đức: một hội đã đăng ký, trụ sở tại Bonn, có ban chủ tịch khoa học độc lập."] },
      { de: ["Wann und wo wurde die DGE gegründet?", "Am 4. November 1953 in Bad Neuenahr – als Zusammenschluss mehrerer Vereinigungen, die sich mit Ernährung und der Versorgung der Bevölkerung beschäftigt hatten."],
        vi: ["DGE được thành lập khi nào và ở đâu?", "Ngày 4/11/1953 tại Bad Neuenahr – do nhiều hội làm việc về dinh dưỡng và lương thực cho dân chúng hợp nhất lại."] },
      { de: ["Warum wurde die DGE gegründet?", "Nach den Hunger- und Mangeljahren von Krieg und Nachkriegszeit sollte eine gemeinsame, unabhängige Stelle die Ernährungsforschung bündeln und daraus verlässliche Empfehlungen für die Gesundheit der Bevölkerung machen."],
        vi: ["Vì sao DGE được thành lập?", "Sau những năm đói kém của chiến tranh và hậu chiến, cần một cơ quan chung, độc lập để gom nghiên cứu dinh dưỡng và đưa ra khuyến nghị đáng tin cậy cho sức khỏe người dân."] },
      { de: ["Was ist das Ziel der DGE?", "Auf Grundlage der Forschung gültige Ernährungsempfehlungen für Deutschland erarbeiten, zielgruppengerecht weitergeben und so die Gesundheit der Bevölkerung langfristig und nachhaltig fördern und erhalten."],
        vi: ["Mục tiêu của DGE là gì?", "Dựa trên nghiên cứu, xây dựng khuyến nghị dinh dưỡng cho nước Đức, truyền đạt phù hợp từng nhóm và nhờ đó thúc đẩy, duy trì sức khỏe người dân lâu dài và bền vững."] },
      { de: ["Nach welchen Grundsätzen arbeitet die DGE?", "Wissenschaftlich fundiert, neutral, unabhängig und transparent – mit ganzheitlichem, nachhaltigem Blick. Leitidee: „Wissenschaft und Praxis“ verbinden."],
        vi: ["DGE làm việc theo nguyên tắc nào?", "Có cơ sở khoa học, trung lập, độc lập và minh bạch – với cái nhìn toàn diện, bền vững. Phương châm: kết nối „khoa học và thực hành“."] },
      { de: ["Nenne die Aufgaben der DGE.", "1. Empfehlungen und Referenzwerte für die Nährstoffzufuhr erarbeiten (auch Ernährungsbericht)\n2. Ergebnisse bekannt machen (Broschüren, Internet, Veranstaltungen)\n3. Angebote für Ernährungsbildung und -beratung\n4. Qualität sichern: Qualitätsstandards und Zertifizierung, z. B. „Fit im Alter“\n5. Fortbildung für Multiplikatoren\n6. Forschungsbedarf erkennen und fördern"],
        vi: ["Hãy kể các nhiệm vụ của DGE.", "1. Xây dựng khuyến nghị và giá trị tham chiếu chất dinh dưỡng (cả báo cáo dinh dưỡng)\n2. Công bố kết quả (tài liệu, internet, sự kiện)\n3. Giáo dục và tư vấn dinh dưỡng\n4. Bảo đảm chất lượng: tiêu chuẩn và chứng nhận, ví dụ „Fit im Alter“\n5. Đào tạo người truyền đạt kiến thức\n6. Phát hiện và thúc đẩy nhu cầu nghiên cứu"] },
      { de: ["Für wen arbeitet die DGE?", "Wissenschaft, Multiplikatoren (z. B. Pflege, Lehrkräfte, Ernährungsberatung), Politik und Verwaltung, Verbände und Unternehmen, Gemeinschaftsverpflegung, Medien und darüber alle Verbraucher."],
        vi: ["DGE làm việc cho ai?", "Giới khoa học, người truyền đạt kiến thức (ví dụ điều dưỡng, giáo viên, tư vấn dinh dưỡng), chính trị và hành chính, hiệp hội và doanh nghiệp, suất ăn tập thể, báo chí và qua đó mọi người tiêu dùng."] },
      { de: ["Wie ist der DGE-Ernährungskreis aufgebaut?", "7 Lebensmittelgruppen. In der Mitte die Getränke (größte Gruppe). Pflanzliche Lebensmittel mehr als ¾, tierische knapp ¼. Je größer das Segment, desto mehr davon."],
        vi: ["Vòng tròn dinh dưỡng DGE gồm những gì?", "7 nhóm thực phẩm. Ở giữa là đồ uống (nhóm lớn nhất). Thực phẩm thực vật hơn ¾, động vật gần ¼. Phần càng lớn thì càng nên ăn nhiều."] },
      // Nährstoffe im Alter
      { de: ["Was ist die zentrale Veränderung der Ernährung im Alter?", "Der Energiebedarf sinkt (weniger Muskeln, weniger Bewegung), der Nährstoffbedarf bleibt gleich oder steigt. Deshalb: weniger Kalorien, aber besonders nährstoffreich essen."],
        vi: ["Thay đổi cốt lõi về dinh dưỡng ở tuổi già là gì?", "Nhu cầu năng lượng giảm (ít cơ, ít vận động), nhu cầu chất dinh dưỡng giữ nguyên hoặc tăng. Vì vậy: ít calo hơn nhưng đặc biệt giàu chất dinh dưỡng."] },
      { de: ["Welche Nährstoffe sind im Alter besonders kritisch?", "Vitamin D, Calcium, Vitamin B12, Folat, Eisen, Eiweiß, Ballaststoffe und Wasser – oft auch Vitamin E, Vitamin C und Magnesium."],
        vi: ["Những chất dinh dưỡng nào đặc biệt cần chú ý ở tuổi già?", "Vitamin D, canxi, vitamin B12, folat, sắt, protein, chất xơ và nước – thường kể thêm vitamin E, vitamin C và magie."] },
      { de: ["Vitamin D im Alter: warum kritisch?", "Die Haut bildet im Alter weniger Vitamin D, viele sind selten draußen. Vitamin D bringt Calcium in die Knochen. Mangel → Osteoporose, Stürze, Knochenbrüche. Oft Präparat 20 µg (800 IE) am Tag."],
        vi: ["Vitamin D ở tuổi già: vì sao cần chú ý?", "Da tạo ít vitamin D hơn, nhiều người ít ra ngoài. Vitamin D đưa canxi vào xương. Thiếu → loãng xương, ngã, gãy xương. Thường dùng viên 20 µg (800 IE) mỗi ngày."] },
      { de: ["Calcium im Alter: warum wichtig?", "Baustein von Knochen und Zähnen, wichtig für Nerven, Muskeln und Blutgerinnung. Zu wenig → Osteoporose. Quellen: Milchprodukte, grünes Gemüse, Sesam, calciumreiches Mineralwasser."],
        vi: ["Canxi ở tuổi già: vì sao quan trọng?", "Thành phần của xương và răng, quan trọng cho thần kinh, cơ và đông máu. Thiếu → loãng xương. Nguồn: chế phẩm sữa, rau xanh, mè, nước khoáng giàu canxi."] },
      { de: ["Vitamin B12 im Alter: warum kritisch?", "Weniger Magensäure und Intrinsic Factor (Magenschleimhaut) und manche Medikamente verschlechtern die Aufnahme. Mangel → Blutarmut, Nervenstörungen, Verwirrtheit. Wert ärztlich prüfen lassen."],
        vi: ["Vitamin B12 ở tuổi già: vì sao cần chú ý?", "Ít acid dạ dày và yếu tố nội (niêm mạc dạ dày) cùng một số thuốc làm hấp thu kém. Thiếu → thiếu máu, rối loạn thần kinh, lú lẫn. Nên nhờ bác sĩ kiểm tra."] },
      { de: ["Folat und Eisen im Alter", "Folat: für Zellteilung und Blutbildung, Mangel z. B. durch Medikamente oder Alkohol → Blutarmut.\nEisen: für den Sauerstofftransport, Aufnahme bei Magen-Darm-Erkrankungen gestört; mit Vitamin C besser aufgenommen."],
        vi: ["Folat và sắt ở tuổi già", "Folat: cho phân chia tế bào và tạo máu, thiếu do thuốc hoặc rượu → thiếu máu.\nSắt: vận chuyển oxy, hấp thu kém khi bệnh dạ dày – ruột; ăn kèm vitamin C hấp thu tốt hơn."] },
      { de: ["Eiweiß im Alter: wie viel und warum?", "Ca. 1 g pro kg Körpergewicht am Tag (Erwachsene 0,8 g). Erhält Muskeln, Abwehr und Wundheilung. Zu wenig → Sarkopenie, Gebrechlichkeit, Stürze. Auf alle Mahlzeiten verteilen."],
        vi: ["Protein ở tuổi già: bao nhiêu và vì sao?", "Khoảng 1 g mỗi kg cân nặng mỗi ngày (người lớn 0,8 g). Giữ cơ, sức đề kháng và lành vết thương. Thiếu → teo cơ, suy yếu, ngã. Chia đều vào các bữa."] },
      { de: ["Ballaststoffe im Alter: warum wichtig?", "Der Darm wird träger. Ballaststoffe beugen Verstopfung, Hämorrhoiden, Divertikeln und Darmkrebs vor und senken Cholesterin und Blutzucker. Nur mit genug Flüssigkeit!"],
        vi: ["Chất xơ ở tuổi già: vì sao quan trọng?", "Ruột hoạt động chậm hơn. Chất xơ phòng táo bón, trĩ, túi thừa và ung thư ruột, giảm cholesterol và đường huyết. Chỉ hiệu quả khi uống đủ nước!"] },
      { de: ["Was bedeutet biologische Wertigkeit? Nenne Kombinationen.", "Wie gut der Körper Nahrungseiweiß in eigenes Eiweiß umbaut. Kombinationen erhöhen sie: Getreide + Hülsenfrüchte, Getreide + Milchprodukt, Kartoffeln + Milchprodukt, Kartoffeln + Ei."],
        vi: ["Giá trị sinh học là gì? Kể các cách kết hợp.", "Mức độ cơ thể chuyển protein thức ăn thành protein của mình. Kết hợp làm tăng giá trị: ngũ cốc + đậu, ngũ cốc + sữa, khoai tây + sữa, khoai tây + trứng."] },
      { de: ["Sarkopenie und Frailty", "Sarkopenie: altersbedingter Verlust von Muskelmasse und -kraft (über 30 % zwischen 30 und 80 Jahren).\nFrailty: Gebrechlichkeit, Diagnose bei mindestens 3 von 5 Zeichen: Gewichtsverlust, Erschöpfung, schwache Handkraft, langsamer Gang, wenig Aktivität."],
        vi: ["Sarkopenie và Frailty", "Sarkopenie: mất khối cơ và sức cơ do tuổi (hơn 30 % từ 30 đến 80 tuổi).\nFrailty: suy yếu, chẩn đoán khi có ít nhất 3 trong 5 dấu hiệu: sụt cân, kiệt sức, lực tay yếu, đi chậm, ít vận động."] },
      { de: ["Woran erkennst du eine Mangelernährung im Pflegealltag?", "Teller nicht leer, Mahlzeiten oder Getränke abgelehnt, trockene Haut und Schleimhäute, kein Appetit, Ringe, Gürtel und Kleidung sitzen locker, Beschwerden an Zähnen oder beim Schlucken."],
        vi: ["Nhận biết suy dinh dưỡng trong chăm sóc hằng ngày thế nào?", "Không ăn hết đĩa, từ chối bữa ăn hoặc đồ uống, da và niêm mạc khô, chán ăn, nhẫn, thắt lưng và quần áo rộng ra, đau răng hoặc khó nuốt."] },
      { de: ["Stufenplan zur Behandlung einer Mangelernährung", "1. Orale Ernährung (angepasst, angereichert)\n2. Plus Trinknahrung oder Nährstoffkonzentrate\n3. Enterale Ernährung (Sonde)\n4. Parenterale Ernährung (Vene)"],
        vi: ["Các bậc điều trị suy dinh dưỡng", "1. Ăn qua miệng (điều chỉnh, làm giàu)\n2. Thêm sữa dinh dưỡng hoặc chất cô đặc\n3. Nuôi qua đường tiêu hóa (ống)\n4. Nuôi qua tĩnh mạch"] },
      // Trinken
      { de: ["Wie viel sollten ältere Menschen trinken?", "Mindestens 1,3 Liter, besser 1,5 Liter über Getränke am Tag (DGE allgemein: rund 1,5 l). Gesamtwasser ab 65 ca. 2,25 l, also etwa 30 ml pro kg Körpergewicht. Mehr bei Hitze, Fieber, Durchfall, Erbrechen, Unruhe."],
        vi: ["Người cao tuổi nên uống bao nhiêu?", "Ít nhất 1,3 lít, tốt hơn 1,5 lít qua đồ uống mỗi ngày (DGE nói chung: khoảng 1,5 lít). Tổng lượng nước từ 65 tuổi khoảng 2,25 lít, tức khoảng 30 ml mỗi kg. Nhiều hơn khi nóng, sốt, tiêu chảy, nôn, bồn chồn."] },
      { de: ["Warum muss man trinken? (Aufgaben des Wassers)", "Bestandteil aller Zellen und Körperflüssigkeiten, Transport- und Lösungsmittel für Nährstoffe und Abbauprodukte, Reaktionspartner im Stoffwechsel, hält die Körpertemperatur konstant, lässt den Speisebrei im Darm quellen."],
        vi: ["Vì sao phải uống? (vai trò của nước)", "Thành phần của mọi tế bào và dịch cơ thể, dung môi vận chuyển chất dinh dưỡng và chất thải, tham gia phản ứng chuyển hóa, giữ thân nhiệt ổn định, làm thức ăn trong ruột nở ra."] },
      { de: ["Wie viel Wasser besteht der Körper – und wie lange überlebt man ohne?", "Erwachsene 50–60 % Wasser, im Alter nur 40–50 %. Ohne Wasser 2–4 Tage, ohne feste Nahrung 30 Tage und länger. Durst entsteht erst bei ca. 0,5 % Wasserverlust des Körpergewichts."],
        vi: ["Cơ thể có bao nhiêu nước – và sống được bao lâu nếu không có nước?", "Người lớn 50–60 % là nước, khi già chỉ 40–50 %. Không nước 2–4 ngày, không thức ăn đặc 30 ngày trở lên. Cảm giác khát chỉ xuất hiện khi mất khoảng 0,5 % cân nặng là nước."] },
      { de: ["Warum trinken ältere Menschen zu wenig?", "Weniger Durstgefühl, Angst vor dem Toilettengang (Inkontinenz, Prostata), Schluckstörungen, Vergesslichkeit oder Demenz, fehlende Hilfe, Erziehung „Beim Essen wird nicht getrunken“."],
        vi: ["Vì sao người cao tuổi uống quá ít?", "Ít khát, sợ đi vệ sinh (tiểu không tự chủ, tuyến tiền liệt), rối loạn nuốt, hay quên hoặc sa sút trí tuệ, thiếu hỗ trợ, thói quen „khi ăn thì không uống“."] },
      { de: ["Warum verlieren ältere Menschen mehr Flüssigkeit?", "Die Nieren konzentrieren den Harn schlechter (mehr Urin), Schwitzen bei Hitze, Heizungsluft, Fieber oder Bewegungsdrang, Durchfall und Erbrechen, Diuretika und Abführmittel."],
        vi: ["Vì sao người cao tuổi mất nhiều nước hơn?", "Thận cô đặc nước tiểu kém (tiểu nhiều hơn), đổ mồ hôi khi nóng, không khí sưởi, sốt hoặc đi lại liên tục, tiêu chảy và nôn, thuốc lợi tiểu và nhuận tràng."] },
      { de: ["Symptome eines Flüssigkeitsmangels", "Früh: trockene Haut und Schleimhäute, rissige Lippen, Müdigkeit, Kopfschmerzen, Schwindel, dunkler Urin, Verstopfung, bei Älteren plötzliche Verwirrtheit.\nSpäter: Herzrasen, Fieber, Krämpfe, Harnwegsinfekt, Delir, Kreislauf- und Nierenversagen."],
        vi: ["Triệu chứng thiếu nước", "Sớm: da và niêm mạc khô, môi nứt, mệt, đau đầu, chóng mặt, nước tiểu sẫm, táo bón, người già đột ngột lú lẫn.\nMuộn: tim nhanh, sốt, chuột rút, nhiễm trùng tiết niệu, mê sảng, suy tuần hoàn và suy thận."] },
      { de: ["Prävention: Wie förderst du das Trinken?", "Getränk zu jeder Mahlzeit, Gläser sofort nachfüllen, Getränke sichtbar und erreichbar, Lieblingsgetränke, farbige Gläser, Trinkrituale, Trinksprüche und gemeinsam trinken, Trink-Oasen, Trinkhilfen, Trinkprotokoll – aber kein Zwang."],
        vi: ["Phòng ngừa: khuyến khích uống thế nào?", "Mỗi bữa có đồ uống, rót thêm ngay, để đồ uống dễ thấy dễ lấy, đồ uống yêu thích, ly có màu, thói quen uống, câu chúc và cùng uống, điểm uống nước, dụng cụ hỗ trợ, phiếu theo dõi – nhưng không ép."] },
      { de: ["Welche Getränke sind geeignet?", "Wasser und ungesüßte Kräuter- oder Früchtetees; Saftschorle 3 Teile Wasser : 1 Teil Saft; Kaffee und Tee zählen in Maßen (bis 4 Tassen). Milch ist ein Lebensmittel, kein Getränk. Zucker- und alkoholhaltige Getränke meiden."],
        vi: ["Đồ uống nào phù hợp?", "Nước lọc và trà thảo mộc, trà trái cây không đường; nước ép pha 3 phần nước : 1 phần nước ép; cà phê và trà được tính khi vừa phải (đến 4 tách). Sữa là thực phẩm, không phải đồ uống. Tránh đồ uống có đường và có cồn."] },
      { de: ["Wann darf nicht einfach mehr getrunken werden?", "Bei Herzinsuffizienz und bestimmten Nieren- oder Lebererkrankungen kann die Trinkmenge ärztlich begrenzt sein. Dann wird bilanziert und alle Flüssigkeiten zählen."],
        vi: ["Khi nào không được tự ý uống nhiều hơn?", "Khi suy tim và một số bệnh thận hoặc gan, bác sĩ có thể hạn chế lượng nước. Khi đó phải tính cân bằng dịch và mọi chất lỏng đều được tính."] },
      // Demenz
      { de: ["Kann Ernährung eine Demenz aufhalten?", "Heilen oder sicher aufhalten nicht. Aber: genug trinken (verhindert Delir), Mangelernährung vermeiden, bei Bedarf anreichern, Vitamin B12, Folat und D prüfen lassen, herz- und gefäßfreundlich essen, gemeinsam essen. So wird eine zusätzliche Verschlechterung verhindert."],
        vi: ["Dinh dưỡng có ngăn được sa sút trí tuệ không?", "Không chữa khỏi hay chắc chắn ngăn được. Nhưng: uống đủ (tránh mê sảng), tránh suy dinh dưỡng, làm giàu năng lượng khi cần, kiểm tra vitamin B12, folat và D, ăn tốt cho tim mạch, ăn cùng nhau. Nhờ vậy tránh được tình trạng xấu thêm."] },
      { de: ["Warum ist Trinken bei Demenz besonders wichtig?", "Das Trinken wird vergessen und Durst nicht gespürt. Flüssigkeitsmangel löst akute Verwirrtheit aus und verstärkt die Demenz. Richtwert ca. 1,3 l am Tag, immer wieder aktiv anbieten."],
        vi: ["Vì sao uống nước đặc biệt quan trọng khi sa sút trí tuệ?", "Người bệnh quên uống và không thấy khát. Thiếu nước gây lú lẫn cấp và làm bệnh nặng hơn. Định hướng khoảng 1,3 lít mỗi ngày, chủ động mời nhiều lần."] },
      { de: ["Der Teufelskreis von Demenz und Ernährung", "Demenz → weniger Essen und Trinken → Gewichtsverlust, Nährstoffmangel, Austrocknung → Sarkopenie, Gebrechlichkeit und schlechtere geistige Leistung → noch weniger Essen."],
        vi: ["Vòng luẩn quẩn giữa sa sút trí tuệ và dinh dưỡng", "Sa sút trí tuệ → ăn uống ít → sụt cân, thiếu chất, mất nước → teo cơ, suy yếu và trí tuệ kém hơn → càng ăn ít hơn."] },
      { de: ["Wie verändert Demenz das Essverhalten?", "Essen und Trinken vergessen oder ständig essen, Hunger und Durst nicht spüren, Vorliebe für Süßes, Besteck nicht erkennen, Unruhe mit bis zu doppeltem Energiebedarf, Misstrauen, Überforderung, später Schluckstörungen."],
        vi: ["Sa sút trí tuệ thay đổi hành vi ăn uống thế nào?", "Quên ăn uống hoặc ăn mãi, không thấy đói khát, thích đồ ngọt, không nhận ra dao nĩa, bồn chồn với nhu cầu năng lượng gấp đôi, nghi ngờ, quá tải, muộn hơn rối loạn nuốt."] },
      { de: ["Fingerfood: Regeln und Vorteile", "1–2 Bissen groß, gut greifbar, nicht krümelig, nicht klebrig, leicht zu kauen und zu schlucken. Fördert Selbstständigkeit, regt die Sinne an, stärkt das Selbstwertgefühl. Auch als „Eat by walking“ und an Essstationen."],
        vi: ["Fingerfood: quy tắc và lợi ích", "Cỡ 1–2 miếng cắn, dễ cầm, không vụn, không dính, dễ nhai và nuốt. Giúp tự lập, kích thích giác quan, tăng lòng tự trọng. Dùng cả khi „Eat by walking“ và ở điểm ăn."] },
      { de: ["Ein gutes Essumfeld bei Demenz", "Ruhe (TV aus), feste Plätze und Rituale, Kontraste bei Teller und Tisch, Speisen einzeln servieren, gemeinsam essen, einbeziehen (Tisch decken), so wenig Hilfe wie möglich und so viel wie nötig, Essverhalten nicht kommentieren."],
        vi: ["Môi trường ăn tốt khi sa sút trí tuệ", "Yên tĩnh (tắt TV), chỗ ngồi và nghi thức cố định, tương phản đĩa và bàn, dọn từng món, ăn cùng nhau, cho tham gia (dọn bàn), giúp càng ít càng tốt và nhiều như cần thiết, không nhận xét cách ăn."] },
      { de: ["Was gehört in eine Essbiografie?", "Herkunft und regionale Gerichte, Lieblings- und Trostessen aus der Kindheit, Hungerzeiten, Mahlzeitenrhythmus, Getränke, Beruf, Allergien und Abneigungen, Religion und Kultur, Essen allein oder in Gesellschaft. Wird laufend aktualisiert."],
        vi: ["Tiểu sử ăn uống gồm những gì?", "Quê quán và món vùng miền, món yêu thích và món an ủi thời thơ ấu, thời kỳ đói khổ, nhịp bữa ăn, đồ uống, nghề nghiệp, dị ứng và món không thích, tôn giáo và văn hóa, ăn một mình hay có người. Cập nhật liên tục."] }
    ]
  }
];
