// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Tiếng Việt: nội dung điều dưỡng (Vietnamesische Übersetzung von pflege.js)
// Gleicher Aufbau wie BEREICHE (gleiche IDs, Abschnitte in derselben Reihenfolge).
// Fachbegriffe (lateinisch/international) und Skalennamen bleiben unverändert.

const BEREICHE_VI = [
  {
    id: "pflegeprozess", titel: "Quy trình điều dưỡng", untertitel: "Nhận định, vấn đề, mục tiêu, lập kế hoạch, thực hiện, lượng giá",
    kapitel: [
      { id: "ueberblick", titel: "Tổng quan", kurz: "Các mô hình giai đoạn và cơ sở pháp lý", abschnitte: [
        { h: "Quy trình điều dưỡng là gì?" },
        { p: "Quy trình điều dưỡng là một phương pháp làm việc có hệ thống và có mục tiêu. Việc chăm sóc không làm theo thói quen mà được lập kế hoạch, cá thể hóa, rõ ràng và có thể kiểm tra – cùng với người được chăm sóc." },
        { merke: "Theo Luật nghề điều dưỡng Đức (§ 4 PflBG), các nhiệm vụ sau chỉ dành cho điều dưỡng có chuyên môn: nhận định và xác định nhu cầu chăm sóc cá nhân, tổ chức, thiết kế và điều phối quy trình điều dưỡng, cũng như phân tích, lượng giá, bảo đảm và phát triển chất lượng chăm sóc." },
        { h: "Mô hình sáu giai đoạn theo Fiechter và Meier" },
        { tabelle: { kopf: ["Giai đoạn", "Nội dung", "Câu hỏi chính"], zeilen: [
          ["1. Thu thập thông tin", "Hỏi bệnh sử điều dưỡng, quan sát, nhận định", "Người bệnh thế nào, cần gì?"],
          ["2. Xác định vấn đề và nguồn lực", "Nêu vấn đề/chẩn đoán điều dưỡng và khả năng", "Người bệnh tự làm được gì, cần hỗ trợ ở đâu?"],
          ["3. Đặt mục tiêu chăm sóc", "Mục tiêu ngắn hạn và dài hạn, theo SMART", "Cần đạt được điều gì?"],
          ["4. Lập kế hoạch can thiệp", "Ai làm gì, khi nào, như thế nào, bao lâu một lần, bằng gì?", "Làm thế nào để đạt mục tiêu?"],
          ["5. Thực hiện", "Chăm sóc theo kế hoạch, ghi vào báo cáo điều dưỡng", "Đã làm gì, phát hiện điều gì?"],
          ["6. Lượng giá", "Kiểm tra mức độ đạt mục tiêu, điều chỉnh kế hoạch", "Mục tiêu đã đạt chưa?"]
        ] } },
        { p: "Mô hình bốn giai đoạn của WHO tóm tắt: Nhận định (Assessment) – Lập kế hoạch – Thực hiện – Lượng giá. Cả hai mô hình đều là một vòng tròn: lượng giá dẫn trở lại bước thu thập thông tin." },
        { h: "Các mô hình hệ thống hóa thông tin" },
        { liste: [
          "AEDL theo Monika Krohwinkel (13 hoạt động và trải nghiệm hiện sinh của cuộc sống)",
          "ATL theo Liliane Juchli (12 hoạt động sống hằng ngày)",
          "Mô hình cấu trúc với Thu thập thông tin có cấu trúc (SIS) – phổ biến trong chăm sóc dài hạn"
        ] }
      ] },
      { id: "assessment", titel: "Thu thập thông tin (Nhận định)", kurz: "Bệnh sử điều dưỡng, nguồn thông tin, công cụ nhận định", abschnitte: [
        { h: "Mục tiêu" },
        { p: "Có được bức tranh đầy đủ nhất về người bệnh: tình trạng sức khỏe, khả năng, hạn chế, thói quen, mong muốn, môi trường xã hội và tiểu sử." },
        { h: "Nguồn thông tin" },
        { liste: [
          "Chính người được chăm sóc (nguồn quan trọng nhất)",
          "Người thân, người giám hộ",
          "Quan sát và đo đạc của điều dưỡng (dấu hiệu sinh tồn, da, vận động, hành vi)",
          "Giấy ra viện, phiếu chuyển tuyến, hồ sơ trước đây",
          "Các nhóm nghề khác (vật lý trị liệu, hoạt động trị liệu, ngôn ngữ trị liệu, công tác xã hội)"
        ] },
        { tabelle: { kopf: ["Loại dữ liệu", "Ví dụ"], zeilen: [
          ["Chủ quan (lời người bệnh)", "„Tôi bị đau lưng.“"],
          ["Khách quan (quan sát, đo được)", "Huyết áp 150/90 mmHg, vùng xương cùng bị đỏ"],
          ["Hiện tại", "Khó thở hôm nay"],
          ["Tiểu sử", "Từng là nông dân, thích dậy sớm"]
        ] } },
        { h: "Công cụ nhận định (lựa chọn)" },
        { tabelle: { kopf: ["Công cụ", "Đánh giá"], zeilen: [
          ["Thang Braden", "Nguy cơ loét tì đè"],
          ["Chỉ số Barthel", "Mức độ tự lập trong sinh hoạt (0–100 điểm)"],
          ["NRS / VAS", "Cường độ đau (0–10)"],
          ["BESD", "Đau ở người sa sút trí tuệ"],
          ["MNA / NRS 2002", "Tình trạng dinh dưỡng"],
          ["Timed Up and Go, Tinetti", "Vận động và nguy cơ té ngã"],
          ["Thang điểm hôn mê Glasgow", "Ý thức"],
          ["Mini-Mental (MMST)", "Chức năng nhận thức"]
        ] } },
        { h: "AEDL theo Krohwinkel" },
        { liste: [
          "1. Giao tiếp", "2. Vận động", "3. Duy trì các chức năng sống", "4. Vệ sinh cá nhân", "5. Ăn và uống", "6. Bài tiết", "7. Mặc quần áo",
          "8. Nghỉ ngơi và ngủ", "9. Hoạt động, giải trí", "10. Cảm nhận và cư xử là nam hoặc nữ", "11. Bảo đảm môi trường an toàn",
          "12. Bảo đảm các mối quan hệ xã hội", "13. Đối mặt với những trải nghiệm hiện sinh của cuộc sống"
        ] },
        { h: "ATL theo Juchli" },
        { liste: [
          "Thức và ngủ", "Vận động", "Tắm rửa và mặc quần áo", "Ăn và uống", "Bài tiết", "Điều hòa thân nhiệt", "Thở", "Cảm thấy an toàn và cư xử an toàn",
          "Sắp xếp không gian và thời gian – hoạt động", "Giao tiếp", "Là trẻ em, phụ nữ, đàn ông", "Tìm ý nghĩa trong sinh – sống – mất"
        ] },
        { h: "Mô hình cấu trúc: SIS" },
        { p: "Thu thập thông tin có cấu trúc bắt đầu bằng câu hỏi dành cho người bệnh: „Hiện giờ điều gì khiến ông/bà bận tâm? Ông/bà cần gì? Chúng tôi có thể làm gì cho ông/bà?“ Tiếp theo là sáu lĩnh vực chủ đề và một ma trận nguy cơ." },
        { tabelle: { kopf: ["Lĩnh vực", "Nội dung"], zeilen: [
          ["1", "Khả năng nhận thức và giao tiếp"],
          ["2", "Vận động và khả năng di chuyển"],
          ["3", "Yêu cầu và gánh nặng liên quan đến bệnh"],
          ["4", "Tự chăm sóc"],
          ["5", "Cuộc sống trong các mối quan hệ xã hội"],
          ["6", "Quản lý việc nhà (ngoại trú) hoặc nơi ở (nội trú)"]
        ] } },
        { p: "Ma trận nguy cơ: loét tì đè, té ngã, tiểu không tự chủ, đau, dinh dưỡng (và nguy cơ khác) – mỗi mục ghi rõ có cần nhận định chuyên sâu hay không." }
      ] },
      { id: "probleme", titel: "Vấn đề điều dưỡng và nguồn lực", kurz: "Các loại vấn đề, PESR, chẩn đoán điều dưỡng", abschnitte: [
        { h: "Vấn đề điều dưỡng" },
        { p: "Vấn đề điều dưỡng là sự suy giảm trong một hoạt động sống, khiến người bệnh cần được điều dưỡng hỗ trợ." },
        { tabelle: { kopf: ["Loại", "Ý nghĩa", "Ví dụ"], zeilen: [
          ["Vấn đề hiện tại", "Đang tồn tại", "Không tự tắm rửa được"],
          ["Vấn đề tiềm ẩn (nguy cơ)", "Sẽ xảy ra nếu không phòng ngừa", "Nguy cơ loét tì đè khi nằm liệt giường"],
          ["Vấn đề che giấu", "Không được nói ra nhưng có thể nghi ngờ", "Lo sợ trước phẫu thuật"],
          ["Vấn đề chung", "Áp dụng cho mọi người trong tình huống này", "Nhịn ăn trước phẫu thuật"],
          ["Vấn đề cá nhân", "Chỉ riêng người bệnh này", "Rối loạn nuốt sau đột quỵ"]
        ] } },
        { h: "Nguồn lực" },
        { liste: ["Nguồn lực bên trong: khả năng và điểm mạnh của người bệnh (cử động được tay phải, có động lực)", "Nguồn lực bên ngoài: môi trường (người thân đến hằng ngày, có khung tập đi)", "Luôn ghi nhận nguồn lực – chúng quyết định người bệnh tự làm được gì (chăm sóc kích hoạt)"] },
        { h: "Cách viết: định dạng PESR" },
        { tabelle: { kopf: ["Thành phần", "Ý nghĩa", "Ví dụ"], zeilen: [
          ["P – Vấn đề", "Điều gì bị suy giảm?", "Hạn chế vận động"],
          ["E – Nguyên nhân", "Nguyên nhân", "do liệt nửa người phải sau đột quỵ"],
          ["S – Triệu chứng", "Nhận biết qua đâu?", "không tự đứng dậy được, đứng không vững"],
          ["R – Nguồn lực", "Người bệnh làm được gì?", "nửa người trái khỏe, có động lực, có khung tập đi"]
        ] } },
        { p: "Chẩn đoán điều dưỡng (ví dụ theo NANDA-I) mô tả vấn đề điều dưỡng bằng ngôn ngữ chuyên môn thống nhất, chẳng hạn „Suy giảm vận động thể chất“ hoặc „Nguy cơ loét tì đè“." }
      ] },
      { id: "ziele", titel: "Mục tiêu chăm sóc", kurz: "Viết theo SMART, mục tiêu ngắn hạn và dài hạn", abschnitte: [
        { h: "Nguyên tắc SMART" },
        { tabelle: { kopf: ["Chữ cái", "Ý nghĩa"], zeilen: [
          ["S – cụ thể", "Rõ ràng và cụ thể"],
          ["M – đo lường được", "Có thể kiểm tra (quãng đường, thời gian, chỉ số)"],
          ["A – được chấp nhận", "Thống nhất với người bệnh, đáng để họ hướng tới"],
          ["R – thực tế", "Có thể đạt được với nguồn lực hiện có"],
          ["T – có thời hạn", "Có ngày kiểm tra"]
        ] } },
        { tabelle: { kopf: ["Loại mục tiêu", "Ví dụ"], zeilen: [
          ["Mục tiêu ngắn hạn", "Ngày 12/11, ông M. đi được 10 m đến phòng tắm với khung tập đi và có người đi kèm."],
          ["Mục tiêu dài hạn", "Đến khi ra viện, ông M. tự đi được dọc hành lang khoa với khung tập đi."],
          ["Mục tiêu duy trì", "Da vùng xương cùng vẫn nguyên vẹn."]
        ] } },
        { merke: "Mục tiêu được viết từ góc độ người được chăm sóc như một trạng thái („Ông M. có thể …“) – không phải hoạt động của điều dưỡng („Điều dưỡng giúp vận động …“)." }
      ] },
      { id: "planung", titel: "Lập kế hoạch can thiệp", kurz: "Ai, làm gì, khi nào, như thế nào, bao lâu một lần, bằng gì", abschnitte: [
        { p: "Các can thiệp điều dưỡng mô tả cách đạt mục tiêu. Chúng phải cụ thể đến mức mọi điều dưỡng đều thực hiện giống nhau." },
        { tabelle: { kopf: ["Câu hỏi", "Ví dụ"], zeilen: [
          ["Ai?", "Điều dưỡng chuyên môn / hộ lý theo hướng dẫn"],
          ["Làm gì?", "Giúp di chuyển từ giường sang ghế"],
          ["Khi nào và bao lâu một lần?", "3 lần/ngày (8, 12, 17 giờ)"],
          ["Như thế nào?", "Qua bên trái khỏe, theo nguyên tắc Kinästhetik"],
          ["Bằng gì?", "Khung tập đi, giày chắc chắn"]
        ] } },
        { liste: ["Tận dụng nguồn lực (chăm sóc kích hoạt)", "Tôn trọng mong muốn và thói quen", "Tuân theo quy chuẩn điều dưỡng và tiêu chuẩn chuyên gia", "Phối hợp với y lệnh và liệu pháp của các nhóm nghề khác"] }
      ] },
      { id: "doku", titel: "Thực hiện và báo cáo điều dưỡng", kurz: "Quy tắc ghi chép kèm ví dụ", abschnitte: [
        { h: "Thực hiện" },
        { p: "Các can thiệp đã lập kế hoạch được thực hiện và ký xác nhận. Những quan sát và sai lệch được ghi vào báo cáo điều dưỡng. Ở mô hình cấu trúc, chỉ ghi những sai lệch so với kế hoạch và các sự việc đặc biệt." },
        { h: "Quy tắc ghi chép hồ sơ" },
        { liste: [
          "Ghi kịp thời, có ngày, giờ và chữ ký",
          "Khách quan, không phán xét, mang tính mô tả – không ghi nhận xét hay phỏng đoán như sự thật",
          "Rõ ràng, dễ hiểu, chỉ dùng chữ viết tắt thông dụng",
          "Không tẩy xóa được (không dùng bút chì), không dán đè hay làm mờ; chỉnh sửa phải truy vết được",
          "Chỉ ghi những gì chính mình quan sát hoặc thực hiện",
          "Hồ sơ là văn bản pháp lý và có thể được dùng làm chứng cứ trước tòa"
        ] },
        { h: "Ví dụ" },
        { tabelle: { kopf: ["Chưa tốt", "Tốt hơn"], zeilen: [
          ["„Bệnh nhân hôm nay khó tính.“", "„Lúc 8 giờ ông M. từ chối vệ sinh cá nhân, nói rằng ông quá mệt. Lúc 10 giờ đã vệ sinh cá nhân có hỗ trợ.“"],
          ["„Ăn ít.“", "„Bữa sáng: ½ lát bánh mì, 100 ml trà.“"],
          ["„Da bị đỏ.“", "„Vùng đỏ không mất khi ấn ở xương cùng, khoảng 3 × 4 cm, da còn nguyên vẹn.“"],
          ["„Bệnh nhân bị sa sút trí tuệ và hung hăng.“", "„Khi được hỗ trợ mặc áo, bà K. dùng tay đánh về phía điều dưỡng và kêu: ‚Để tôi yên!‘“"]
        ] } }
      ] },
      { id: "evaluation", titel: "Lượng giá", kurz: "Kiểm tra mức độ đạt mục tiêu và điều chỉnh kế hoạch", abschnitte: [
        { p: "Trong bước lượng giá, điều dưỡng kiểm tra xem mục tiêu chăm sóc đã đạt chưa và các can thiệp có hiệu quả không." },
        { tabelle: { kopf: ["Kết quả", "Hệ quả"], zeilen: [
          ["Đạt mục tiêu", "Đặt mục tiêu mới hoặc kết thúc can thiệp"],
          ["Đạt một phần", "Giữ nguyên hoặc điều chỉnh can thiệp, đặt lại thời hạn"],
          ["Không đạt", "Phân tích nguyên nhân: mục tiêu có thực tế không? Can thiệp có phù hợp không? Có thông tin mới không?"]
        ] } },
        { liste: ["Vào các thời điểm đã định và mỗi khi tình trạng thay đổi", "Cùng với người bệnh và người thân nếu cần", "Ghi lại kết quả – vòng quy trình bắt đầu lại"] },
        { h: "Ví dụ xuyên suốt" },
        { tabelle: { kopf: ["Giai đoạn", "Ông M., 72 tuổi, đột quỵ, liệt nửa người phải"], zeilen: [
          ["Thông tin", "Không tự đứng dậy được, nửa trái khỏe, muốn tự đi vào phòng tắm"],
          ["Vấn đề/Nguồn lực", "Hạn chế vận động do liệt nửa người phải; nguồn lực: có động lực, nửa trái khỏe"],
          ["Mục tiêu", "Ngày 12/11 đi được 10 m vào phòng tắm với khung tập đi và có người đi kèm"],
          ["Can thiệp", "Tập đi với khung 3 lần/ngày, di chuyển qua bên trái, giày chắc chắn"],
          ["Thực hiện", "Báo cáo: „12/11, 8:10: đi 10 m với khung tập đi và người đi kèm, đứng vững.“"],
          ["Lượng giá", "Đạt mục tiêu → mục tiêu mới: đi 20 m với khung tập đi, không cần người đi kèm"]
        ] } }
      ] }
    ]
  },

  {
    id: "prophylaxen", titel: "Dự phòng", untertitel: "Định nghĩa, nguy cơ, thang đánh giá và biện pháp",
    kapitel: [
      { id: "sturz", titel: "Phòng ngừa té ngã", kurz: "Tiêu chuẩn chuyên gia, yếu tố nguy cơ, Timed Up and Go", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Té ngã là sự việc một người vô ý nằm trên sàn hoặc ở một mặt phẳng thấp hơn. Phòng ngừa té ngã gồm mọi biện pháp nhằm ngăn té ngã và chấn thương do té ngã." },
        { merke: "Cơ sở là Tiêu chuẩn chuyên gia „Phòng ngừa té ngã trong điều dưỡng“ (DNQP). Mục tiêu: giảm thiểu té ngã và hậu quả – đồng thời giữ được tính tự lập và khả năng vận động tối đa." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Liên quan đến người bệnh: hạn chế vận động, sức cơ và thăng bằng kém, đi không vững",
          "Đã từng té ngã, sợ té ngã",
          "Suy giảm nhận thức (sa sút trí tuệ, mê sảng), rối loạn thị lực",
          "Tiểu không tự chủ, tiểu đêm",
          "Hạ huyết áp tư thế đứng, chóng mặt, ngất",
          "Thuốc: thuốc hướng thần, thuốc an thần, thuốc hạ huyết áp, thuốc lợi tiểu, thuốc trị đái tháo đường (hạ đường huyết), dùng nhiều thuốc",
          "Liên quan đến môi trường: vật cản dễ vấp, ánh sáng kém, sàn ướt, giày dép không phù hợp, thiếu tay vịn"
        ] },
        { h: "Nhận định" },
        { p: "Tiêu chuẩn chuyên gia không khuyến nghị một thang nguy cơ duy nhất mà khuyến nghị đánh giá có hệ thống các yếu tố nguy cơ khi nhập viện và khi có thay đổi. Các test bổ sung:" },
        { tabelle: { kopf: ["Test", "Cách làm", "Gợi ý nguy cơ"], zeilen: [
          ["Timed Up and Go (TUG)", "Đứng dậy khỏi ghế, đi 3 m, quay lại, trở về, ngồi xuống", "> 13,5 giây: nguy cơ té ngã tăng; > 20 giây: hạn chế vận động rõ"],
          ["Test Tinetti (POMA)", "Test thăng bằng và dáng đi, tối đa 28 điểm", "< 20 điểm: nguy cơ té ngã tăng"],
          ["Biên bản té ngã", "Ghi lại mọi lần té ngã và hoàn cảnh", "Té ngã nhiều lần → phân tích nguyên nhân"]
        ] } },
        { h: "Biện pháp" },
        { liste: [
          "Điều chỉnh môi trường: dọn vật cản, đèn ngủ, hạ giường thấp nhất, khóa phanh, chuông gọi trong tầm tay",
          "Giày kín, chắc chắn, đế chống trơn; không đi dép lê",
          "Kiểm tra và hướng dẫn dụng cụ hỗ trợ: khung tập đi, gậy, kính, máy trợ thính",
          "Tập sức cơ và thăng bằng cùng vật lý trị liệu",
          "Đứng dậy từ từ (ngồi trước rồi mới đứng) khi có hạ huyết áp tư thế",
          "Thường xuyên đề nghị đi vệ sinh, đặt ghế bô cạnh giường",
          "Đệm bảo vệ hông khi nguy cơ cao",
          "Đề nghị bác sĩ rà soát thuốc",
          "Thông tin và tư vấn cho người bệnh và người thân"
        ] },
        { warn: "Các biện pháp hạn chế tự do (thanh chắn giường, dây cố định) không ngăn té ngã một cách đáng tin cậy và làm tăng nguy cơ chấn thương. Chúng cần có sự đồng ý hoặc phê duyệt của tòa án." },
        { h: "Sau khi té ngã" },
        { liste: ["Bình tĩnh, không kéo người bệnh dậy ngay", "Kiểm tra ý thức, dấu hiệu sinh tồn và chấn thương (đau, biến dạng, chấn thương đầu)", "Báo bác sĩ", "Điền biên bản sự cố té ngã, phân tích nguyên nhân, điều chỉnh biện pháp"] }
      ] },
      { id: "thrombose", titel: "Phòng ngừa huyết khối", kurz: "Tam chứng Virchow, vớ y khoa, vận động, thuốc chống đông", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Huyết khối là cục máu đông (thrombus) trong mạch máu, thường ở tĩnh mạch sâu chi dưới và vùng chậu (huyết khối tĩnh mạch sâu, TVT/DVT). Biến chứng đáng sợ: thuyên tắc phổi." },
        { h: "Cơ chế: tam chứng Virchow" },
        { tabelle: { kopf: ["Yếu tố", "Ví dụ"], zeilen: [
          ["Dòng máu chậm (ứ trệ)", "Nằm liệt giường, liệt, bó bột, chuyến bay/xe đường dài, suy tim, giãn tĩnh mạch"],
          ["Tổn thương thành mạch", "Phẫu thuật, chấn thương, viêm, catheter tĩnh mạch"],
          ["Tăng đông máu", "Mất nước, ung thư, mang thai, estrogen (thuốc tránh thai), rối loạn đông máu, hút thuốc"]
        ] } },
        { h: "Các yếu tố nguy cơ khác" },
        { liste: ["Tuổi cao", "Béo phì", "Tiền sử huyết khối hoặc thuyên tắc phổi", "Phẫu thuật lớn, đặc biệt là thay khớp háng và khớp gối", "Nhiễm trùng, nhiễm khuẩn huyết"] },
        { h: "Nhận định và dấu hiệu" },
        { p: "Nguy cơ huyết khối cá nhân do bác sĩ đánh giá (ví dụ theo hướng dẫn AWMF-S3). Điều dưỡng theo dõi các dấu hiệu cảnh báo:" },
        { liste: ["Một chân sưng và chênh lệch chu vi", "Cảm giác căng, đau ở bắp chân hoặc bẹn", "Nóng, da bóng, tím tái", "Dấu hiệu gợi ý: đau bắp chân khi gấp mu bàn chân (Homans), đau gan bàn chân khi ấn (Payr) – không có giá trị chứng minh"] },
        { warn: "Đột ngột khó thở, đau ngực, nhịp tim nhanh → nghi thuyên tắc phổi: cấp cứu! Nằm yên tại giường, nâng cao phần thân trên, báo bác sĩ ngay." },
        { h: "Biện pháp" },
        { liste: [
          "Vận động sớm – biện pháp quan trọng nhất",
          "Bài tập tại giường: xoay cổ chân, gập – duỗi bàn chân (bơm cơ cẳng chân), co các ngón chân, co gối",
          "Bài tập thở: thở sâu thúc đẩy máu tĩnh mạch hồi lưu",
          "Uống đủ nước (nếu không bị hạn chế)",
          "Vớ y khoa phòng huyết khối (MTS) theo y lệnh: đo đúng kích cỡ, mang vào buổi sáng khi còn nằm, không để nếp gấp",
          "Kê chân hơi cao (khoảng 20°) – không áp dụng khi có pAVK",
          "Không bắt chéo chân, không mặc quần áo bó chặt",
          "Dự phòng bằng thuốc theo y lệnh (ví dụ heparin trọng lượng phân tử thấp tiêm dưới da)"
        ] },
        { warn: "Chống chỉ định của vớ MTS gồm: pAVK, suy tim mất bù, phù nặng, tổn thương da hoặc viêm ở chân, bệnh thần kinh có rối loạn cảm giác." }
      ] },
      { id: "dekubitusp", titel: "Phòng ngừa loét tì đè", kurz: "Tóm tắt – chi tiết trong học phần Loét tì đè", abschnitte: [
        { p: "Loét tì đè (Dekubitus) là tổn thương khu trú của da và/hoặc mô bên dưới, thường ở trên chỗ xương nhô, do áp lực hoặc áp lực kết hợp lực trượt." },
        { h: "Điểm chính" },
        { liste: [
          "Đánh giá nguy cơ khi nhập viện và khi có thay đổi (đánh giá lâm sàng, bổ sung thang Braden)",
          "Thúc đẩy vận động, kế hoạch vận động và đặt tư thế cá nhân",
          "Giảm áp: tư thế nghiêng 30°, tư thế 135°, thay đổi tư thế vi mô, nâng gót chân lên",
          "Sử dụng có mục đích dụng cụ phân tán áp lực (nệm mềm, nệm hơi luân phiên)",
          "Tránh lực trượt: đầu giường nếu có thể ≤ 30°, di chuyển không chà xát",
          "Quan sát da và làm test ấn ngón tay, giữ da khô ráo và được chăm sóc",
          "Bảo đảm dinh dưỡng và nước"
        ] },
        { merke: "Chi tiết về cơ chế, phân độ I–IV, thang Braden và chăm sóc vết thương nằm trong mục „Co rút & Loét tì đè“." },
        { link: { bereich: "kontrakturen", kapitel: "dekubitus" } }
      ] },
      { id: "pneumonie", titel: "Phòng ngừa viêm phổi", kurz: "Bài tập thở, tư thế, xử lý đờm", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Các biện pháp ngăn ngừa viêm phổi (Pneumonie). Mục tiêu: thông khí tốt mọi vùng phổi, làm loãng và khạc đờm, tránh nhiễm trùng và hít sặc." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
            "Bất động, nằm liệt giường",
            "Thở nông do đau (ví dụ sau mổ bụng/ngực)",
            "Nguy cơ hít sặc (rối loạn nuốt, rối loạn ý thức)",
            "Thở máy, đặt nội khí quản, ống thông",
            "Bệnh nền: COPD, suy tim, đái tháo đường, suy giảm miễn dịch",
            "Tuổi cao, hút thuốc, mất nước, vệ sinh răng miệng kém"
        ] },
        { h: "Nhận định" },
        { p: "Thang đánh giá hô hấp theo Bienstein (cho điểm về ý thức, tần số thở, vận động, đờm, bệnh nền…; điểm càng cao nguy cơ càng lớn). Ngoài ra theo dõi nhịp thở, đờm, nhiệt độ và độ bão hòa oxy." },
        { h: "Biện pháp" },
        { liste: [
          "Vận động sớm và thay đổi tư thế thường xuyên",
          "Bài tập thở: hít vào và thở ra sâu, thở chúm môi, thở tiếp xúc",
          "Dụng cụ tập thở (ví dụ SMI-Trainer) theo hướng dẫn",
          "Tư thế hỗ trợ hô hấp: tư thế V, A, T và I, tư thế bán nguyệt, nâng cao phần thân trên",
          "Xoa bóp kích thích hô hấp (ASE)",
          "Làm loãng đờm: uống đủ nước, khí dung theo y lệnh, rung",
          "Hướng dẫn ho khạc đúng cách (giữ vết mổ bằng tay hoặc gối)",
          "Giảm đau tốt để người bệnh có thể thở sâu",
          "Chăm sóc răng miệng, phòng ngừa hít sặc, vệ sinh tay"
        ] },
        { merke: "Tư thế V: thông khí đỉnh phổi. Tư thế A: thông khí đáy phổi. Tư thế T: thông khí các vùng phổi bên. Mỗi tư thế chỉ duy trì có giới hạn (khoảng 10–30 phút, tùy khả năng chịu đựng)." }
      ] },
      { id: "aspiration", titel: "Phòng ngừa hít sặc", kurz: "Rối loạn nuốt, tư thế, xử trí cấp cứu", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Hít sặc (Aspiration) là khi nước bọt, thức ăn, chất lỏng hoặc dịch dạ dày đi vào đường thở bên dưới dây thanh. Hậu quả có thể là viêm phổi hít hoặc ngạt thở." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Rối loạn nuốt (Dysphagie), ví dụ sau đột quỵ, bệnh Parkinson, sa sút trí tuệ, đa xơ cứng",
          "Rối loạn ý thức, dùng thuốc an thần",
          "Ống thông dạ dày, nuôi ăn qua ống, nôn, trào ngược",
          "Nằm ngửa thẳng khi ăn",
          "Mất răng, răng giả không vừa, khô miệng"
        ] },
        { h: "Nhận định" },
        { liste: [
          "Sàng lọc nuốt, ví dụ Gugging Swallowing Screen (GUSS) hoặc test uống nước – theo quy định cơ sở, có thể cần ngôn ngữ trị liệu",
          "Dấu hiệu cảnh báo khi ăn: ho, đằng hắng, giọng nói ướt („ọc ọc“), khó thở, tím tái, thức ăn đọng trong miệng",
          "Có thể hít sặc thầm lặng (không ho) – đặc biệt sau đột quỵ"
        ] },
        { h: "Biện pháp" },
        { liste: [
          "Ngồi thẳng (khoảng 90°) khi ăn và ít nhất 30 phút sau ăn",
          "Đầu hơi cúi về trước (cằm hướng về ngực) khi nuốt",
          "Không khí yên tĩnh, không làm phân tâm, không nói chuyện khi nuốt",
          "Miếng nhỏ, điều chỉnh độ đặc (làm đặc chất lỏng, thức ăn xay nhuyễn theo y lệnh)",
          "Sau ăn kiểm tra thức ăn còn đọng trong miệng, chăm sóc răng miệng",
          "Khi nuôi ăn qua ống, nâng cao phần thân trên ít nhất 30°",
          "Sẵn sàng máy hút khi nguy cơ cao"
        ] },
        { warn: "Khi hít sặc cấp: cho người bệnh cúi người về trước, khuyến khích ho, hút đờm nếu cần, gọi cấp cứu/bác sĩ. Nếu dị vật làm tắc đường thở và ngừng thở: vỗ lưng, thủ thuật Heimlich sau khi được huấn luyện." }
      ] },
      { id: "kontrakturp", titel: "Phòng ngừa co rút", kurz: "Tóm tắt – chi tiết trong học phần Co rút", abschnitte: [
        { p: "Co rút (Kontraktur) là sự hạn chế chức năng và vận động của khớp do mô mềm bị co ngắn. Khi không vận động, chúng có thể hình thành chỉ sau vài ngày đến vài tuần." },
        { h: "Điểm chính" },
        { liste: ["Duy trì và thúc đẩy vận động (Tiêu chuẩn chuyên gia „Duy trì và thúc đẩy vận động“)", "Vận động khớp chủ động hoặc thụ động mỗi ngày", "Đặt ở tư thế trung gian sinh lý, thay đổi tư thế thường xuyên", "Điều trị đau, tránh tư thế giảm đau", "Phòng bàn chân thuổng: nâng chăn lên (khung đỡ chăn)"] },
        { link: { bereich: "kontrakturen", kapitel: "kontrakturen" } }
      ] },
      { id: "intertrigo", titel: "Phòng ngừa hăm da (Intertrigo)", kurz: "Giữ các nếp gấp da khô và thoáng", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Intertrigo là tình trạng viêm da ở các nếp gấp, nơi da chạm da. Do nóng, ẩm và cọ xát, da bị ngấm nước (mủn da) và dễ bị nấm (Candida) hoặc vi khuẩn xâm nhập." },
        { h: "Vị trí thường gặp" },
        { liste: ["Dưới vú", "Nếp bụng", "Bẹn và vùng sinh dục", "Nách", "Khe mông", "Kẽ ngón chân"] },
        { h: "Yếu tố nguy cơ" },
        { liste: ["Béo phì", "Ra nhiều mồ hôi, sốt", "Tiểu không tự chủ", "Đái tháo đường", "Bất động, nằm liệt giường", "Quần áo tổng hợp, bó sát"] },
        { h: "Nhận định" },
        { p: "Kiểm tra các nếp gấp da hằng ngày: đỏ, rỉ dịch, bong vảy, ngứa, rát, có mùi." },
        { h: "Biện pháp" },
        { liste: [
          "Sau khi rửa, thấm khô nếp da kỹ nhưng nhẹ nhàng (không chà, không sấy)",
          "Tránh da chạm da: lót dải vải cotton hoặc lanh, hoặc vải chuyên dụng",
          "Sữa tắm dịu nhẹ, pH trung tính với da",
          "Không dùng phấn rôm (vón cục) và không bôi mỡ dày vào nếp gấp",
          "Quần áo cotton thoáng khí, thay tã/miếng lót kịp thời",
          "Nếu có dấu hiệu nhiễm nấm: báo bác sĩ"
        ] }
      ] },
      { id: "soor", titel: "Phòng ngừa nấm miệng và viêm tuyến mang tai", kurz: "Chăm sóc răng miệng, kích thích tiết nước bọt", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Soor là nhiễm nấm niêm mạc miệng, thường do Candida albicans: mảng trắng lau được trên nền niêm mạc đỏ. Parotitis là viêm tuyến nước bọt mang tai, thường do giảm tiết nước bọt khi không nhai." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Nhịn ăn, nuôi ăn qua ống, không nhai",
          "Khô miệng: thở bằng miệng, thở oxy, sốt, mất nước",
          "Thuốc: kháng sinh, corticoid (kể cả dạng hít), thuốc hóa trị, thuốc hướng thần",
          "Suy giảm miễn dịch, đái tháo đường, tuổi cao",
          "Chăm sóc răng miệng và răng giả không đầy đủ"
        ] },
        { h: "Nhận định" },
        { liste: [
          "Kiểm tra khoang miệng hằng ngày bằng đèn và que đè lưỡi (lưỡi, má, vòm miệng, môi)",
          "Gợi ý nấm miệng: mảng trắng lau được, cảm giác bỏng rát, rối loạn vị giác",
          "Gợi ý viêm tuyến mang tai: sưng đau trước tai, đau khi nhai, sốt",
          "Đánh giá có cấu trúc, ví dụ bằng Oral Assessment Guide (OAG)"
        ] },
        { h: "Biện pháp" },
        { liste: [
          "Chăm sóc miệng nhiều lần mỗi ngày, đánh răng ít nhất 2 lần/ngày",
          "Làm sạch răng giả sau mỗi bữa ăn, ban đêm bảo quản khô hoặc theo hướng dẫn nhà sản xuất",
          "Uống đủ nước, giữ ẩm niêm mạc miệng",
          "Kích thích nhai và tiết nước bọt: vỏ bánh mì, kẹo cao su, ngậm (nếu không có nguy cơ hít sặc)",
          "Dưỡng môi để tránh nứt nẻ",
          "Sau khi hít corticoid súc miệng hoặc ăn một chút",
          "Dung dịch chăm sóc miệng theo quy định cơ sở; khi bị nấm dùng thuốc kháng nấm theo y lệnh"
        ] },
        { merke: "Ở người bệnh không ăn qua đường miệng, chăm sóc răng miệng đặc biệt quan trọng – đồng thời cũng là phòng ngừa viêm phổi và hít sặc." }
      ] },
      { id: "obstipation", titel: "Phòng ngừa táo bón", kurz: "Thang Bristol, chất xơ, vận động", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Táo bón (Obstipation) là đi tiêu khó hoặc ít. Gợi ý theo tiêu chuẩn Rome IV: ít hơn 3 lần đi tiêu mỗi tuần, phân cứng hoặc vón cục, phải rặn nhiều, cảm giác đi chưa hết." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Ít vận động, nằm liệt giường",
          "Ăn ít chất xơ, uống ít nước",
          "Thuốc: opioid, sắt, thuốc kháng cholinergic, thuốc lợi tiểu, thuốc kháng axit chứa nhôm",
          "Nhịn đi tiêu, thiếu riêng tư, phải dùng bô dẹt",
          "Bệnh thần kinh (Parkinson, đa xơ cứng), suy giáp, trầm cảm"
        ] },
        { h: "Nhận định" },
        { tabelle: { kopf: ["Loại Bristol", "Mô tả", "Ý nghĩa"], zeilen: [
          ["1", "Từng cục cứng riêng lẻ", "Táo bón nặng"],
          ["2", "Hình xúc xích, vón cục", "Táo bón nhẹ"],
          ["3", "Hình xúc xích có vết nứt", "Bình thường"],
          ["4", "Hình xúc xích, trơn và mềm", "Bình thường (lý tưởng)"],
          ["5", "Cục mềm, bờ trơn", "Có xu hướng tiêu chảy"],
          ["6", "Sệt, bờ nham nhở", "Tiêu chảy nhẹ"],
          ["7", "Toàn nước, không có phần rắn", "Tiêu chảy"]
        ] } },
        { p: "Ngoài ra lập biểu đồ đi tiêu (số lần, lượng, độ đặc) và hỏi về thói quen đi tiêu." },
        { h: "Biện pháp" },
        { liste: [
          "Thúc đẩy vận động",
          "Uống đủ nước (khoảng 1,5–2 lít/ngày, nếu không bị hạn chế)",
          "Ăn nhiều chất xơ (khoảng 30 g/ngày): ngũ cốc nguyên hạt, rau, trái cây, hạt lanh, mận khô",
          "Giờ đi vệ sinh cố định, ví dụ sau bữa sáng (tận dụng phản xạ dạ dày – đại tràng)",
          "Bảo đảm riêng tư, dùng ghế bô thay cho bô dẹt",
          "Tư thế ngồi: kê chân lên ghế nhỏ (tư thế ngồi xổm giúp đi tiêu dễ hơn)",
          "Xoa bụng theo chiều kim đồng hồ",
          "Thuốc nhuận tràng chỉ theo y lệnh; khi dùng opioid thì dùng dự phòng"
        ] }
      ] },
      { id: "deprivation", titel: "Phòng ngừa thiếu kích thích (Deprivation)", kurz: "Kích thích, định hướng, giao tiếp xã hội", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Deprivation là tình trạng thiếu kích thích, thiếu quan tâm và thiếu giao tiếp xã hội. Hậu quả: thu mình, mất động lực, mất định hướng, ảo giác, hội chứng bệnh viện, suy giảm các khả năng." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Cách ly (ví dụ phòng đơn, cách ly do nhiễm trùng)",
          "Bất động, nằm liệt giường",
          "Suy giảm thị lực và thính lực",
          "Sa sút trí tuệ, trầm cảm, rối loạn ngôn ngữ (mất ngôn ngữ)",
          "Nằm viện hoặc ở viện dưỡng lão lâu ngày, khoa hồi sức",
          "Không có người thân, mất bạn đời"
        ] },
        { h: "Nhận định" },
        { liste: ["Quan sát hành vi, tâm trạng, định hướng và động lực", "Ghi nhận tiểu sử, thói quen và sở thích", "Kiểm tra thị lực và thính lực"] },
        { h: "Biện pháp" },
        { liste: [
          "Giao tiếp: gọi tên, nhìn vào mắt, chạm (nếu người bệnh muốn)",
          "Nhịp sinh hoạt và thói quen hằng ngày, ánh sáng ban ngày, nhịp ngày – đêm",
          "Hỗ trợ định hướng: đồng hồ, lịch, bảng tên, đồ dùng cá nhân",
          "Sử dụng dụng cụ hỗ trợ: kính, máy trợ thính, bảng giao tiếp",
          "Kích thích cơ bản (Basale Stimulation), hoạt động theo tiểu sử, âm nhạc",
          "Thúc đẩy giao tiếp với người thân và người cùng phòng, huy động tình nguyện viên",
          "Vận động, ra khỏi phòng",
          "Với người sa sút trí tuệ: Validation, giao tiếp trân trọng"
        ] }
      ] },
      { id: "zystitis", titel: "Phòng ngừa viêm bàng quang", kurz: "Lượng nước uống, vệ sinh vùng kín, vệ sinh ống thông tiểu", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Viêm bàng quang (Zystitis) là tình trạng viêm bàng quang, thường do vi khuẩn đi ngược dòng (hay gặp E. coli). Nhiễm trùng tiết niệu là một trong những nhiễm khuẩn bệnh viện thường gặp nhất – đặc biệt khi có ống thông tiểu." },
        { h: "Yếu tố nguy cơ" },
        { liste: [
          "Giới nữ (niệu đạo ngắn)",
          "Ống thông tiểu qua niệu đạo",
          "Uống ít nước, ít đi tiểu, nước tiểu tồn dư",
          "Tiểu không tự chủ, vệ sinh vùng kín không đúng cách",
          "Đái tháo đường, suy giảm miễn dịch",
          "Sau mãn kinh, mang thai, phì đại tuyến tiền liệt"
        ] },
        { h: "Nhận định" },
        { liste: ["Triệu chứng: nóng rát khi đi tiểu (Dysurie), mắc tiểu nhiều lần (Pollakisurie), đau bụng dưới", "Nước tiểu đục, hôi, có thể có máu", "Sốt và đau hông lưng → gợi ý nhiễm trùng ngược dòng (viêm bể thận)", "Que thử nước tiểu (bạch cầu, nitrit) theo y lệnh"] },
        { h: "Biện pháp" },
        { liste: [
          "Uống đủ nước (khoảng 1,5–2 lít/ngày), nếu không bị hạn chế",
          "Đi tiểu đều đặn và hết, không nhịn tiểu",
          "Vệ sinh vùng kín từ trước ra sau (về phía hậu môn)",
          "Thay tã/miếng lót kịp thời",
          "Chỉ đặt ống thông tiểu khi có chỉ định chặt chẽ, đánh giá sự cần thiết mỗi ngày",
          "Đặt ống thông vô khuẩn, không tháo rời hệ thống dẫn lưu kín",
          "Túi nước tiểu luôn thấp hơn bàng quang, không đặt trên sàn, tránh nước tiểu chảy ngược",
          "Giữ ấm (tránh lạnh vùng bụng dưới)"
        ] }
      ] }
    ]
  },
  {
    id: "kontrakturen", titel: "Co rút & Loét tì đè", untertitel: "Học phần chuyên sâu",
    kapitel: [
      { id: "kontrakturen", titel: "Co rút khớp", kurz: "Cơ chế, phân loại, nhóm nguy cơ, bài tập", abschnitte: [
        { h: "Định nghĩa" },
        { p: "Co rút (Kontraktur) là sự hạn chế chức năng và vận động của khớp do mô mềm (cơ, gân, dây chằng, bao khớp, da) bị co ngắn, teo lại hoặc dính. Có thể dẫn đến cứng khớp hoàn toàn (Ankylose)." },
        { h: "Cơ chế hình thành" },
        { liste: [
          "Thiếu vận động: cơ và mô liên kết thích nghi với tư thế nghỉ và co ngắn lại – thay đổi đầu tiên xuất hiện chỉ sau vài ngày",
          "Tư thế giảm đau khi bị đau (ví dụ gối luôn gập)",
          "Đặt tư thế sai trên giường (ví dụ kê gối dưới khoeo kéo dài, chăn đè lên bàn chân)",
          "Liệt: liệt mềm hoặc liệt co cứng (mất cân bằng trương lực cơ)",
          "Sẹo, bỏng, viêm, bệnh khớp"
        ] },
        { merke: "Co rút thường gặp nhất là co rút gấp – vì nhóm cơ gấp thường khỏe hơn và khi yếu hoặc đau, con người có xu hướng giữ tư thế gập." },
        { h: "Phân loại theo tư thế khớp" },
        { tabelle: { kopf: ["Loại", "Mô tả", "Ví dụ điển hình"], zeilen: [
          ["Co rút gấp", "Khớp không duỗi thẳng được", "Háng, gối, khuỷu, ngón tay"],
          ["Co rút duỗi", "Khớp không gập được", "Gối sau thời gian dài cố định ở tư thế duỗi"],
          ["Bàn chân thuổng (Spitzfuß)", "Bàn chân cố định ở tư thế gấp gan chân, không nâng được bàn chân", "Chăn đè, thiếu vận động, liệt dây thần kinh mác"],
          ["Co rút khép", "Chi không dạng ra được", "Vai trong liệt nửa người, háng"],
          ["Co rút dạng", "Chi không khép vào được", "Ít gặp"]
        ] } },
        { h: "Phân loại theo nguyên nhân" },
        { tabelle: { kopf: ["Tên gọi", "Nguyên nhân trong mô"], zeilen: [
          ["dermatogen", "Da (ví dụ sẹo, bỏng)"],
          ["desmogen", "Dây chằng, cân, gân"],
          ["myogen", "Cơ (co ngắn, thiếu máu cục bộ)"],
          ["neurogen", "Hệ thần kinh (liệt, co cứng)"],
          ["arthrogen", "Bản thân khớp (thoái hóa, viêm, bao khớp)"]
        ] } },
        { h: "Nhóm nguy cơ" },
        { liste: [
          "Người nằm liệt giường và bất động",
          "Bệnh thần kinh: đột quỵ, Parkinson, đa xơ cứng, liệt tủy",
          "Người sa sút trí tuệ (có xu hướng nằm tư thế bào thai)",
          "Người bệnh ở khoa hồi sức, sau phẫu thuật, bó bột hoặc nẹp",
          "Người bị đau (tư thế giảm đau) hoặc bỏng",
          "Người rất cao tuổi, người mắc bệnh thấp khớp"
        ] },
        { h: "Nhận định" },
        { liste: ["Quan sát tầm vận động khớp trong mọi hoạt động chăm sóc", "Đo tầm vận động theo phương pháp Neutral-Null (bác sĩ/vật lý trị liệu)", "Ghi nhận tư thế giảm đau, đau và trương lực cơ", "Cơ sở: Tiêu chuẩn chuyên gia „Duy trì và thúc đẩy vận động trong điều dưỡng“ (DNQP)"] },
        { h: "Bài tập vận động" },
        { tabelle: { kopf: ["Hình thức", "Cách thực hiện"], zeilen: [
          ["chủ động", "Người bệnh tự vận động – hiệu quả nhất, khuyến khích tối đa"],
          ["chủ động có trợ giúp", "Người bệnh tự vận động, điều dưỡng hỗ trợ"],
          ["thụ động", "Điều dưỡng vận động khớp khi người bệnh không thể tự làm"],
          ["có kháng trở", "Vận động chống lại lực cản – tăng sức cơ (thường do vật lý trị liệu)"]
        ] } },
        { liste: [
          "Vận động mỗi khớp theo mọi hướng sinh lý, nhiều lần mỗi ngày",
          "Chậm rãi, nhịp nhàng, không gây đau, chỉ đến giới hạn vận động",
          "Đỡ khớp ngay phía trên và phía dưới, nâng đỡ tốt chi",
          "Lồng bài tập vào sinh hoạt hằng ngày (tắm rửa, mặc quần áo, ăn uống)",
          "Áp dụng Kinästhetik, phối hợp vật lý trị liệu và hoạt động trị liệu"
        ] },
        { warn: "Không tập thụ động ở chân bị huyết khối cấp (cho đến khi bác sĩ cho phép), không tập khi gãy xương mới hoặc khớp đang viêm cấp. Khi co cứng: không cử động giật cục." },
        { h: "Biện pháp dự phòng" },
        { liste: [
          "Vận động sớm, kế hoạch vận động, thay đổi tư thế thường xuyên",
          "Đặt ở tư thế trung gian sinh lý hoặc tư thế chức năng",
          "Phòng bàn chân thuổng: khung đỡ chăn, không để chăn đè chân; tấm chặn chân chỉ dùng tùy cá nhân (có thể làm tăng co cứng)",
          "Bàn tay ở tư thế chức năng (ngón hơi gập, ví dụ cầm cuộn vải) – khi co cứng theo khuyến nghị của chuyên viên trị liệu",
          "Gối kê khoeo chỉ dùng ngắn hạn – nó thúc đẩy co rút gấp ở háng và gối",
          "Vai trong liệt nửa người: không kéo tay, đặt tay được nâng đỡ",
          "Kiểm soát đau để người bệnh có thể vận động",
          "Hướng dẫn người bệnh và người thân"
        ] }
      ] },
      { id: "dekubitus", titel: "Loét tì đè (Dekubitus)", kurz: "Áp lực × thời gian, phân độ I–IV, Braden, đặt tư thế", abschnitte: [
        { h: "Định nghĩa (NPIAP/EPUAP)" },
        { p: "Loét tì đè là tổn thương khu trú của da và/hoặc mô bên dưới, thường ở trên chỗ xương nhô, do áp lực hoặc áp lực kết hợp với lực trượt." },
        { h: "Cơ chế: áp lực × thời gian" },
        { liste: [
          "Áp lực lên mô làm ép các mao mạch (áp lực mao mạch khoảng 25–32 mmHg)",
          "Nếu áp lực tì đè kéo dài cao hơn mức này sẽ gây thiếu oxy (thiếu máu cục bộ) → tích tụ chất chuyển hóa → chết tế bào (hoại tử)",
          "Áp lực càng cao thì thời gian gây tổn thương càng ngắn – áp lực cao trong thời gian ngắn có hại như áp lực thấp trong thời gian dài",
          "Lực trượt (ví dụ trượt xuống trên giường) làm các lớp mô xê dịch và làm đứt mạch máu",
          "Yếu tố thuận lợi: ẩm ướt (tiểu không tự chủ, mồ hôi), suy dinh dưỡng, mất nước, rối loạn tuần hoàn, sốt, rối loạn cảm giác"
        ] },
        { merke: "Bên trong vết loét có thể lớn hơn phần nhìn thấy bên ngoài: các lớp mô sâu sát xương bị tổn thương trước („hiện tượng tảng băng trôi“)." },
        { h: "Vị trí dễ bị loét" },
        { tabelle: { kopf: ["Tư thế", "Vị trí nguy cơ"], zeilen: [
          ["Nằm ngửa", "Xương cùng (Os sacrum), gót chân, chẩm, xương bả vai, mỏm gai, khuỷu tay"],
          ["Nằm nghiêng", "Mấu chuyển lớn (Trochanter major), mắt cá, mặt trong/ngoài gối, tai, vai, mào chậu"],
          ["Ngồi", "Ụ ngồi (Tuber ischiadicum), xương cụt, gót chân, xương bả vai"],
          ["Dụng cụ y tế", "Dưới ống thông, gọng oxy, catheter, mặt nạ, nẹp"]
        ] } },
        { anatomie: "regionen" },
        { h: "Phân độ theo NPIAP/EPUAP" },
        { tabelle: { kopf: ["Độ", "Đặc điểm"], zeilen: [
          ["I – đỏ không mất khi ấn", "Da còn nguyên vẹn, vùng đỏ không nhạt màu khi ấn ngón tay; có thể đau, cứng, nóng"],
          ["II – mất một phần da", "Vết thương nông, đáy hồng, không có giả mạc, hoặc bọng nước còn nguyên/đã vỡ"],
          ["III – mất toàn bộ da", "Thấy mỡ dưới da, không thấy xương/gân/cơ; có thể có giả mạc, đường hầm"],
          ["IV – mất toàn bộ mô", "Lộ hoặc sờ thấy xương, gân hoặc cơ; thường có giả mạc, túi, đường hầm"],
          ["Không phân độ được", "Không rõ độ sâu vì đáy vết thương bị giả mạc hoặc vảy đen che phủ"],
          ["Nghi tổn thương mô sâu", "Da nguyên vẹn hoặc tổn thương, có vùng màu tím hoặc nâu sẫm, bọng chứa máu"]
        ] } },
        { p: "Test ấn ngón tay: ấn nhanh ngón tay lên vùng đỏ. Nếu nhạt màu (mất khi ấn) thì chưa phải loét tì đè. Nếu vẫn đỏ, tương ứng với độ I." },
        { h: "Đánh giá nguy cơ" },
        { p: "Theo Tiêu chuẩn chuyên gia „Phòng ngừa loét tì đè trong điều dưỡng“ (DNQP), điều dưỡng chuyên môn đánh giá nguy cơ khi bắt đầu chăm sóc và khi có thay đổi – trước tiên bằng sàng lọc, nếu có dấu hiệu thì đánh giá lâm sàng chi tiết. Các thang điểm có thể dùng bổ sung nhưng không thay thế con mắt chuyên môn." },
        { h: "Thang Braden" },
        { tabelle: { kopf: ["Tiêu chí", "Điểm", "Giải thích"], zeilen: [
          ["Cảm nhận giác quan", "1–4", "Khả năng cảm nhận và báo áp lực, đau"],
          ["Độ ẩm", "1–4", "Da bị ẩm thường xuyên đến mức nào (mồ hôi, nước tiểu)?"],
          ["Hoạt động", "1–4", "Nằm liệt giường, ngồi, đi ít, đi thường xuyên"],
          ["Vận động", "1–4", "Khả năng tự thay đổi tư thế"],
          ["Dinh dưỡng", "1–4", "Thói quen ăn uống"],
          ["Ma sát và lực trượt", "1–3", "Có bị trượt xuống trên giường/ghế không?"]
        ] } },
        { tabelle: { kopf: ["Tổng điểm (6–23)", "Nguy cơ"], zeilen: [
          ["19–23", "Không tăng nguy cơ"],
          ["15–18", "Nguy cơ thấp (ở người rất cao tuổi cần lưu ý)"],
          ["13–14", "Nguy cơ trung bình"],
          ["10–12", "Nguy cơ cao"],
          ["≤ 9", "Nguy cơ rất cao"]
        ] } },
        { merke: "Với thang Braden: điểm càng thấp, nguy cơ càng cao. Các thang khác: thang Norton, thang Waterlow." },
        { h: "Giảm áp lực và thúc đẩy vận động" },
        { liste: [
          "Thúc đẩy và duy trì khả năng tự vận động – biện pháp quan trọng nhất",
          "Kế hoạch vận động và đặt tư thế cá nhân: khoảng thời gian tùy tình trạng da và nguy cơ, không cứng nhắc 2 giờ một lần",
          "Tư thế nghiêng 30°: người bệnh xoay nghiêng khoảng 30°, lưng được đỡ bằng gối – xương cùng và mấu chuyển không bị tì đè",
          "Tư thế 135°: gần nằm sấp, giảm áp cho xương cùng và lưng",
          "Thay đổi tư thế vi mô: thay đổi nhỏ (ví dụ dịch nhẹ gối dưới vai hoặc chậu) – quan trọng khi đau, trong chăm sóc giảm nhẹ và ban đêm",
          "Nâng gót chân: kê cẳng chân lên gối để gót chân lơ lửng",
          "Giới hạn thời gian ngồi, thường xuyên dịch chuyển trọng lượng",
          "Dụng cụ phân tán áp lực theo mức nguy cơ: nệm mềm, hệ thống nệm hơi luân phiên"
        ] },
        { h: "Lực trượt và da" },
        { liste: [
          "Đầu giường nếu có thể không quá 30° (tránh trượt xuống), đỡ nhẹ dưới gối",
          "Di chuyển và đổi tư thế không kéo lê: nâng lên, tấm trượt, Kinästhetik",
          "Kiểm tra da hằng ngày, giữ khô, chăm sóc với sản phẩm pH trung tính",
          "Xử lý tiểu không tự chủ, không lót nhiều lớp không thấm khí",
          "Đủ protein, năng lượng và nước"
        ] },
        { warn: "Không còn được khuyến cáo: xoa bóp vùng da đỏ, chườm đá và sấy nóng, da lông cừu, băng bông, vòng đệm ngồi (vòng làm tăng áp lực ở mép vòng)." },
        { h: "Nguyên tắc chăm sóc vết thương" },
        { liste: [
          "Giảm áp lực cho vết thương là điều kiện tiên quyết để lành",
          "Chẩn đoán và kế hoạch điều trị của bác sĩ; Tiêu chuẩn chuyên gia „Chăm sóc người có vết thương mạn tính“",
          "Ghi chép vết thương: vị trí, độ, kích thước (dài × rộng × sâu), đáy vết thương, dịch tiết, bờ vết thương, mùi, đau, chụp ảnh",
          "Thao tác vô khuẩn (kỹ thuật không chạm), thay băng đúng vệ sinh",
          "Làm sạch/rửa vết thương theo y lệnh (ví dụ dung dịch rửa vô khuẩn, thuốc sát khuẩn)",
          "Điều trị ẩm phù hợp từng giai đoạn với băng gạc hiện đại",
          "Cắt lọc hoại tử và giả mạc do bác sĩ hoặc chuyên gia vết thương thực hiện",
          "Giảm đau trước khi thay băng, tối ưu dinh dưỡng",
          "Không dùng thuốc nhuộm màu, không dùng chất làm khô"
        ] },
        { tabelle: { kopf: ["Giai đoạn lành vết thương", "Đặc điểm"], zeilen: [
          ["Giai đoạn xuất tiết (làm sạch)", "Viêm, dịch tiết, phân hủy mô chết (khoảng ngày 1–4)"],
          ["Giai đoạn tạo mô hạt", "Mô mới màu đỏ, dạng hạt lấp đầy vết thương"],
          ["Giai đoạn biểu mô hóa", "Vết thương khép lại từ bờ, hình thành sẹo"]
        ] } }
      ] }
    ]
  },

  {
    id: "vitalzeichen", titel: "Dấu hiệu sinh tồn", untertitel: "Đo, giá trị bình thường, bất thường, biện pháp",
    kapitel: [
      { id: "puls", titel: "Mạch", kurz: "Vị trí đo, giá trị bình thường, tính chất", abschnitte: [
        { h: "Cách đo" },
        { liste: [
          "Vị trí: A. radialis (chuẩn), A. carotis (cấp cứu, không bao giờ bắt cả hai bên cùng lúc), A. femoralis, A. brachialis, A. dorsalis pedis, A. tibialis posterior",
          "Bắt bằng ngón trỏ, ngón giữa và ngón áp út – không dùng ngón cái (mạch của chính mình)",
          "Đếm 15 giây × 4; nếu không đều thì đếm đủ 60 giây",
          "Đo khi nghỉ, khoảng 5 phút sau khi gắng sức"
        ] },
        { anatomie: "gefaesse" },
        { h: "Giá trị bình thường (khi nghỉ)" },
        { tabelle: { kopf: ["Tuổi", "Lần/phút"], zeilen: [
          ["Trẻ sơ sinh", "khoảng 120–160"],
          ["Trẻ nhũ nhi", "khoảng 100–140"],
          ["Trẻ nhỏ", "khoảng 90–130"],
          ["Trẻ đi học", "khoảng 75–115"],
          ["Người lớn", "khoảng 60–80 (đến 100 vẫn bình thường)"]
        ] } },
        { h: "Tính chất mạch" },
        { tabelle: { kopf: ["Tính chất", "Bình thường", "Bất thường"], zeilen: [
          ["Tần số", "60–100/phút", "Nhịp nhanh > 100/phút, nhịp chậm < 60/phút"],
          ["Nhịp", "đều", "Loạn nhịp, ngoại tâm thu, loạn nhịp hoàn toàn trong rung nhĩ"],
          ["Độ mạnh", "bắt rõ", "yếu, nhỏ như sợi chỉ (sốc), cứng/căng (tăng huyết áp)"]
        ] } },
        { p: "Mạch hụt (Pulsdefizit): hiệu số giữa tần số tim (nghe ở tim) và mạch bắt được ở ngoại vi – điển hình trong rung nhĩ. Hai điều dưỡng đo cùng một lúc." },
        { h: "Biện pháp khi bất thường" },
        { liste: ["Đo lại, đo thêm các dấu hiệu sinh tồn khác (huyết áp, SpO₂, nhịp thở, ý thức)", "Hỏi triệu chứng kèm theo: chóng mặt, đau ngực, khó thở", "Báo bác sĩ, làm điện tâm đồ theo y lệnh", "Ghi vào phiếu theo dõi"] }
      ] },
      { id: "blutdruck", titel: "Huyết áp", kurz: "Đo theo Riva-Rocci, giá trị bình thường, nguồn sai số", abschnitte: [
        { h: "Cách đo" },
        { liste: [
          "Đo gián tiếp theo Riva-Rocci (RR) bằng băng quấn và ống nghe trên A. brachialis",
          "Người bệnh ngồi hoặc nằm nghỉ ít nhất 3–5 phút, cánh tay ngang tim",
          "Băng quấn đặt trên nếp khuỷu khoảng 2–3 cm, chọn bề rộng phù hợp",
          "Bơm cao hơn mức mất mạch quay khoảng 30 mmHg, xả từ từ (2–3 mmHg/giây)",
          "Huyết áp tâm thu: tiếng đầu tiên nghe được (tiếng Korotkow); huyết áp tâm trương: khi tiếng mất"
        ] },
        { warn: "Không đo ở tay có cầu nối động – tĩnh mạch (lọc máu), sau phẫu thuật vú có nạo hạch, tay đang truyền dịch, tay bị liệt hoặc bị thương." },
        { h: "Phân loại (người lớn, đo tại phòng khám, ESC/ESH)" },
        { tabelle: { kopf: ["Phân loại", "Tâm thu (mmHg)", "Tâm trương (mmHg)"], zeilen: [
          ["Tối ưu", "< 120", "< 80"],
          ["Bình thường", "120–129", "80–84"],
          ["Bình thường cao", "130–139", "85–89"],
          ["Tăng huyết áp độ 1", "140–159", "90–99"],
          ["Tăng huyết áp độ 2", "160–179", "100–109"],
          ["Tăng huyết áp độ 3", "≥ 180", "≥ 110"]
        ] } },
        { p: "Hạ huyết áp: thường tâm thu dưới 100 mmHg (ở nữ dưới khoảng 100/60). Hạ huyết áp tư thế đứng: tâm thu giảm ≥ 20 mmHg hoặc tâm trương giảm ≥ 10 mmHg trong vòng 3 phút sau khi đứng dậy (nghiệm pháp Schellong)." },
        { h: "Nguồn sai số" },
        { tabelle: { kopf: ["Sai sót", "Ảnh hưởng"], zeilen: [
          ["Băng quấn quá hẹp / quá lỏng", "Trị số quá cao"],
          ["Băng quấn quá rộng", "Trị số quá thấp"],
          ["Cánh tay thấp hơn tim", "Trị số quá cao"],
          ["Xả hơi quá nhanh", "Đọc tâm thu thấp hơn, tâm trương cao hơn thực tế"],
          ["Đo sau gắng sức, khi nói chuyện, khi lạnh", "Trị số quá cao"]
        ] } },
        { h: "Biện pháp" },
        { liste: ["Cơn tăng huyết áp (ví dụ > 180/120 kèm triệu chứng): nâng cao thân trên, nghỉ ngơi, đo lại, báo bác sĩ ngay", "Hạ huyết áp kèm chóng mặt: nằm thẳng, nâng chân (tư thế chống sốc theo y lệnh), vận động từ từ", "Theo dõi sát và ghi chép"] }
      ] },
      { id: "temperatur", titel: "Thân nhiệt", kurz: "Vị trí đo, sốt, các giai đoạn sốt", abschnitte: [
        { h: "Vị trí đo và giá trị bình thường" },
        { tabelle: { kopf: ["Vị trí đo", "Giá trị bình thường (khoảng)", "Lưu ý"], zeilen: [
          ["Hậu môn", "36,5–37,5 °C", "Gần nhất với thân nhiệt trung tâm"],
          ["Tai (màng nhĩ)", "36,3–37,5 °C", "Kéo thẳng ống tai, không đo khi viêm tai/ráy tai"],
          ["Miệng (dưới lưỡi)", "thấp hơn hậu môn khoảng 0,3–0,5 °C", "Ngậm miệng 5 phút, không đo ngay sau ăn uống"],
          ["Nách", "thấp hơn hậu môn khoảng 0,5 °C", "Kém chính xác hơn, nách phải khô"],
          ["Trán (hồng ngoại)", "tham khảo", "Dễ sai số"]
        ] } },
        { h: "Phân loại" },
        { tabelle: { kopf: ["Tên gọi", "Nhiệt độ (hậu môn)"], zeilen: [
          ["Thân nhiệt thấp", "< 36,0 °C"],
          ["Hạ thân nhiệt", "< 35,0 °C"],
          ["Bình thường", "36,0–37,5 °C"],
          ["Sốt nhẹ", "37,5–38,0 °C"],
          ["Sốt", "> 38,0 °C"],
          ["Sốt cao", "> 39,0 °C"],
          ["Sốt rất cao (Hyperpyrexie)", "> 41,0 °C (đe dọa tính mạng)"]
        ] } },
        { h: "Các giai đoạn sốt và chăm sóc" },
        { tabelle: { kopf: ["Giai đoạn", "Dấu hiệu", "Chăm sóc"], zeilen: [
          ["Sốt tăng", "Lạnh, rét run, da lạnh và tái", "Giữ ấm (chăn, đồ uống ấm), không làm mát"],
          ["Sốt đỉnh", "Da nóng đỏ, khát, nhịp tim nhanh, có thể lú lẫn", "Chăn mỏng, bù nước, chăm sóc miệng, làm mát khi tay chân ấm"],
          ["Sốt giảm", "Vã mồ hôi, gánh nặng tuần hoàn (giảm từ từ hoặc đột ngột)", "Thay quần áo, theo dõi huyết áp/mạch, chú ý nguy cơ trụy mạch"]
        ] } },
        { warn: "Chườm mát bắp chân chỉ khi tay chân ấm và theo y lệnh – không làm khi sốt đang tăng, khi rét run hoặc tuần hoàn không ổn định." },
        { merke: "Mỗi 1 °C thân nhiệt tăng, nhu cầu dịch tăng khoảng 500 ml/ngày và nhịp tim tăng khoảng 8–10 lần/phút." }
      ] },
      { id: "atmung", titel: "Hô hấp", kurz: "Tần số, kiểu thở, độ bão hòa oxy", abschnitte: [
        { h: "Quan sát" },
        { liste: ["Đếm kín đáo (theo cử động lồng ngực), 30–60 giây", "Tần số, độ sâu, nhịp, tiếng thở, mùi hơi thở", "Màu da (tím tái), co kéo cơ hô hấp phụ, tư thế", "Độ bão hòa oxy bằng máy đo SpO₂"] },
        { anatomie: "atmung" },
        { h: "Giá trị bình thường" },
        { tabelle: { kopf: ["Tuổi", "Nhịp thở/phút"], zeilen: [
          ["Trẻ sơ sinh", "khoảng 40–60"],
          ["Trẻ nhũ nhi", "khoảng 30–40"],
          ["Trẻ nhỏ", "khoảng 20–30"],
          ["Trẻ đi học", "khoảng 16–25"],
          ["Người lớn", "khoảng 12–18 (đến 20)"]
        ] } },
        { p: "Độ bão hòa oxy (SpO₂) bình thường khoảng 95–99 %. Với người bệnh COPD, theo y lệnh thường đặt mục tiêu thấp hơn (khoảng 88–92 %)." },
        { h: "Các kiểu thở bệnh lý" },
        { tabelle: { kopf: ["Kiểu thở", "Đặc điểm", "Gặp trong"], zeilen: [
          ["Thở Kussmaul", "Sâu, đều, nhanh", "Nhiễm toan chuyển hóa (hôn mê đái tháo đường)"],
          ["Thở Cheyne-Stokes", "Độ sâu tăng dần rồi giảm dần, có quãng ngừng", "Suy tim nặng, tổn thương não, giai đoạn hấp hối"],
          ["Thở Biot", "Nhịp thở sâu đều, ngừng đột ngột", "Chấn thương não, tăng áp lực nội sọ"],
          ["Thở ngáp cá", "Từng nhịp thở ngáp rời rạc", "Ngay trước ngừng thở – hồi sinh tim phổi!"],
          ["Khó thở khi nằm (Orthopnoe)", "Chỉ chịu được khi ngồi, co kéo cơ hô hấp phụ", "Suy tim trái, hen, phù phổi"]
        ] } },
        { h: "Biện pháp khi khó thở" },
        { liste: ["Nâng cao thân trên, tì tay (tư thế người đánh xe), mở cửa sổ", "Nới lỏng quần áo chật, trấn an", "Hướng dẫn thở chúm môi", "Thở oxy chỉ theo y lệnh", "Theo dõi dấu hiệu sinh tồn, báo bác sĩ"] }
      ] },
      { id: "bewusstsein", titel: "Ý thức", kurz: "Các mức độ ý thức, thang Glasgow, đồng tử", abschnitte: [
        { h: "Rối loạn ý thức về lượng" },
        { tabelle: { kopf: ["Mức độ", "Mô tả"], zeilen: [
          ["Tỉnh táo", "Định hướng tốt, phản ứng phù hợp"],
          ["Lơ mơ nhẹ", "Chậm chạp, hơi hạn chế"],
          ["Ngủ gà (Somnolenz)", "Buồn ngủ nhưng gọi thì tỉnh"],
          ["Lơ mơ sâu (Sopor)", "Chỉ tỉnh thoáng qua khi kích thích mạnh (đau)"],
          ["Hôn mê (Koma)", "Không đánh thức được, không phản ứng có chủ đích với đau"]
        ] } },
        { h: "Thang điểm hôn mê Glasgow (GCS)" },
        { tabelle: { kopf: ["Lĩnh vực", "Đáp ứng", "Điểm"], zeilen: [
          ["Mở mắt", "tự nhiên / khi gọi / khi đau / không", "4 / 3 / 2 / 1"],
          ["Đáp ứng lời nói", "định hướng / lú lẫn / từ ngữ rời rạc / âm thanh / không", "5 / 4 / 3 / 2 / 1"],
          ["Đáp ứng vận động", "làm theo lệnh / gạt đúng chỗ đau / gạt không đúng / gấp bất thường / duỗi bất thường / không", "6 / 5 / 4 / 3 / 2 / 1"]
        ] } },
        { merke: "GCS 15 = hoàn toàn tỉnh táo, 3 = hôn mê sâu nhất. Từ GCS ≤ 8 các phản xạ bảo vệ bị đe dọa: bảo đảm đường thở (tư thế nằm nghiêng an toàn, bác sĩ có thể đặt nội khí quản)." },
        { h: "Rối loạn ý thức về chất" },
        { liste: ["Lú lẫn, mất định hướng (thời gian, không gian, hoàn cảnh, bản thân)", "Mê sảng (Delir): cấp tính, dao động, rối loạn chú ý – thường gặp ở người cao tuổi, sau mổ, khi nhiễm trùng", "Ảo giác, hoang tưởng"] },
        { h: "Kiểm tra đồng tử" },
        { liste: ["Kích thước, hình dạng, cân đối hai bên, phản xạ ánh sáng (trực tiếp và đồng cảm)", "Một bên đồng tử giãn, mất phản xạ ánh sáng: gợi ý tăng áp lực nội sọ – cấp cứu!", "Đồng tử co nhỏ như đầu kim: ví dụ ngộ độc opioid"] },
        { h: "Hệ thống cảnh báo sớm NEWS2" },
        { p: "National Early Warning Score cho 0–3 điểm cho tần số thở, SpO₂, thở oxy, huyết áp tâm thu, mạch, ý thức và nhiệt độ. Tổng điểm càng cao, càng cần bác sĩ đánh giá khẩn." },
        { tabelle: { kopf: ["Thông số", "0 điểm", "3 điểm"], zeilen: [
          ["Tần số thở", "12–20/phút", "≤ 8 hoặc ≥ 25/phút"],
          ["SpO₂ (thang 1)", "≥ 96 %", "≤ 91 %"],
          ["Huyết áp tâm thu", "111–219 mmHg", "≤ 90 hoặc ≥ 220 mmHg"],
          ["Mạch", "51–90/phút", "≤ 40 hoặc ≥ 131/phút"],
          ["Ý thức", "tỉnh (A)", "mới lú lẫn, chỉ đáp ứng khi gọi/đau, không đáp ứng"],
          ["Nhiệt độ", "36,1–38,0 °C", "≤ 35,0 °C"]
        ] } },
        { merke: "NEWS2 từ 5 điểm (hoặc 3 điểm ở một thông số): cần bác sĩ đánh giá khẩn. Từ 7 điểm: đội cấp cứu." }
      ] }
    ]
  },

  {
    id: "herzkreislauf", titel: "Tim mạch & Tim phổi", untertitel: "Giải phẫu, sinh lý, bệnh lý",
    kapitel: [
      { id: "anatomie_hk", titel: "Tổng quan giải phẫu", kurz: "Tim, mạch máu, phổi – có mô hình 3D", abschnitte: [
        { modell: "herz3d" },
        { h: "Tim (Cor)" },
        { liste: [
          "Cơ quan rỗng bằng cơ, to bằng nắm tay, khoảng 300 g, nằm trong trung thất sau xương ức, mỏm tim ở phía dưới bên trái",
          "Các lớp thành tim: Endocardium – Myocardium – Epicardium, bao quanh là Pericardium (màng ngoài tim)",
          "Bốn buồng: tâm nhĩ phải và trái, tâm thất phải và trái",
          "Van nhĩ – thất (van ba lá, van hai lá) giữa tâm nhĩ và tâm thất; van tổ chim (van động mạch phổi, van động mạch chủ) ở đường ra",
          "Được nuôi bởi các động mạch vành (Aa. coronariae)"
        ] },
        { anatomie: "herz" },
        { h: "Các vòng tuần hoàn" },
        { tabelle: { kopf: ["Vòng tuần hoàn", "Đường đi của máu"], zeilen: [
          ["Tuần hoàn phổi (vòng nhỏ)", "Tâm thất phải → Truncus pulmonalis → phổi (trao đổi khí) → tĩnh mạch phổi → tâm nhĩ trái"],
          ["Tuần hoàn cơ thể (vòng lớn)", "Tâm thất trái → Aorta → các cơ quan → tĩnh mạch chủ → tâm nhĩ phải"]
        ] } },
        { merke: "Động mạch dẫn máu ra khỏi tim, tĩnh mạch dẫn máu về tim – bất kể lượng oxy. Vì vậy động mạch phổi dẫn máu nghèo oxy." },
        { anatomie: "gefaesse" },
        { h: "Phổi và đường hô hấp" },
        { liste: ["Đường hô hấp trên: mũi (Nasus), hầu (Pharynx), thanh quản (Larynx)", "Đường hô hấp dưới: khí quản (Trachea), phế quản, tiểu phế quản, phế nang (Alveoli)", "Phổi phải 3 thùy, phổi trái 2 thùy", "Trao đổi khí ở khoảng 300 triệu phế nang (diện tích khoảng 100 m²)"] },
        { anatomie: "atmung" }
      ] },
      { id: "physiologie", titel: "Sinh lý", kurz: "Chu chuyển tim, cung lượng tim, điều hòa huyết áp", abschnitte: [
        { h: "Chu chuyển tim" },
        { liste: ["Tâm thu (Systole): giai đoạn căng (tất cả van đóng) và giai đoạn tống máu (van tổ chim mở)", "Tâm trương (Diastole): giai đoạn giãn và giai đoạn đổ đầy (van nhĩ – thất mở)", "Dẫn truyền: nút xoang (60–80/phút) → tâm nhĩ → nút nhĩ – thất → bó His → nhánh Tawara → sợi Purkinje"] },
        { h: "Cung lượng tim" },
        { p: "Cung lượng tim (HZV) = thể tích nhát bóp × tần số tim. Khi nghỉ khoảng 70 ml × 70/phút ≈ 5 lít/phút. Khi gắng sức có thể trên 20 lít/phút." },
        { h: "Điều hòa huyết áp" },
        { tabelle: { kopf: ["Cơ chế", "Tác dụng", "Thời gian"], zeilen: [
          ["Thụ thể áp lực (cung động mạch chủ, xoang cảnh)", "Báo thay đổi áp lực về trung tâm tuần hoàn; điều chỉnh qua giao cảm/phó giao cảm", "Vài giây"],
          ["Hệ renin – angiotensin – aldosteron (RAAS)", "Co mạch, giữ natri và nước → huyết áp tăng", "Vài phút đến vài giờ"],
          ["ADH (vasopressin)", "Tái hấp thu nước ở thận", "Vài giờ"],
          ["ANP từ tâm nhĩ", "Thải natri và nước → huyết áp giảm", "Vài giờ"]
        ] } },
        { h: "Hô hấp và trao đổi khí" },
        { liste: ["Hít vào là chủ động (cơ hoành, cơ liên sườn ngoài), thở ra khi nghỉ là thụ động", "Trao đổi khí bằng khuếch tán qua màng phế nang – mao mạch", "Hô hấp được thúc đẩy chủ yếu bởi nồng độ CO₂ trong máu (trung tâm hô hấp ở Medulla oblongata)", "Oxy được vận chuyển gắn với hemoglobin"] }
      ] },
      { id: "erkrankungen_herz", titel: "Bệnh tim", kurz: "Tăng huyết áp, bệnh mạch vành, nhồi máu cơ tim, suy tim, rung nhĩ", abschnitte: [
        { h: "Tăng huyết áp động mạch (Hypertonie)" },
        { liste: ["Huyết áp tăng kéo dài ≥ 140/90 mmHg; phần lớn là nguyên phát", "Hậu quả: nhồi máu cơ tim, đột quỵ, suy tim, suy thận", "Chăm sóc: đo huyết áp đều đặn, uống thuốc đúng, tư vấn ăn nhạt, vận động, giảm cân, bỏ thuốc lá"] },
        { h: "Bệnh mạch vành (KHK) và đau thắt ngực (Angina pectoris)" },
        { liste: ["Hẹp động mạch vành do xơ vữa → cơ tim thiếu oxy", "Đau thắt ngực: tức ngực, đè ép, lan ra tay trái, cổ, hàm, thượng vị – đỡ khi nghỉ hoặc dùng nitro", "Chăm sóc: điều chỉnh mức gắng sức, xịt nitro theo y lệnh (đo huyết áp trước!), giảm yếu tố nguy cơ"] },
        { h: "Nhồi máu cơ tim (Myokardinfarkt)" },
        { liste: ["Tắc một động mạch vành → hoại tử cơ tim", "Dấu hiệu: đau ngực kéo dài > 20 phút, không đỡ với nitro, cảm giác sắp chết, vã mồ hôi lạnh, buồn nôn, khó thở", "Ở phụ nữ, người cao tuổi và người đái tháo đường thường không điển hình (đau thượng vị, buồn nôn, mệt mỏi)"] },
        { warn: "Nghi nhồi máu cơ tim: gọi cấp cứu/đội cấp cứu, nâng cao thân trên, cho nghỉ ngơi, không để người bệnh một mình, theo dõi dấu hiệu sinh tồn, chỉ thở oxy khi SpO₂ < 90 % theo y lệnh, không tiêm bắp, chuẩn bị máy khử rung." },
        { h: "Suy tim (Herzinsuffizienz)" },
        { tabelle: { kopf: ["Thể", "Dấu hiệu điển hình"], zeilen: [
          ["Suy tim trái", "Ứ máu ở phổi: khó thở, khó thở khi nằm, ho về đêm, ran ẩm, phù phổi"],
          ["Suy tim phải", "Ứ máu ở tuần hoàn cơ thể: phù chân, tĩnh mạch cổ nổi, tăng cân, tiểu đêm, gan ứ máu"]
        ] } },
        { tabelle: { kopf: ["Độ NYHA", "Triệu chứng"], zeilen: [
          ["I", "Không triệu chứng khi gắng sức thông thường"],
          ["II", "Triệu chứng khi gắng sức nhiều"],
          ["III", "Triệu chứng khi gắng sức nhẹ"],
          ["IV", "Triệu chứng cả khi nghỉ"]
        ] } },
        { liste: ["Chăm sóc: nâng cao thân trên, có thể tư thế giường tim (chân thấp)", "Cân hằng ngày (buổi sáng, lúc đói, cùng một cân) – báo khi tăng > 1 kg/ngày hoặc > 2 kg trong 3 ngày", "Cân bằng dịch, hạn chế lượng nước uống theo y lệnh", "Theo dõi phù, nhịp thở và khả năng gắng sức, chăm sóc da và phòng loét tì đè"] },
        { h: "Rung nhĩ (Vorhofflimmern)" },
        { liste: ["Rối loạn nhịp tim thường gặp nhất: mạch không đều, thường nhanh (loạn nhịp hoàn toàn), mạch hụt", "Nguy cơ: hình thành huyết khối trong tâm nhĩ trái → đột quỵ", "Điều trị: kiểm soát tần số hoặc nhịp, thuốc chống đông (theo dõi dấu hiệu chảy máu)"] }
      ] },
      { id: "erkrankungen_gefaesse", titel: "Bệnh mạch máu và bệnh phổi", kurz: "pAVK, huyết khối tĩnh mạch sâu, thuyên tắc phổi, COPD, hen, viêm phổi", abschnitte: [
        { h: "Bệnh động mạch ngoại biên tắc nghẽn (pAVK)" },
        { tabelle: { kopf: ["Giai đoạn (Fontaine)", "Triệu chứng"], zeilen: [
          ["I", "Không triệu chứng"],
          ["II", "Đau khi gắng sức (đau cách hồi, Claudicatio intermittens); IIa > 200 m, IIb < 200 m quãng đường đi"],
          ["III", "Đau khi nghỉ"],
          ["IV", "Hoại tử, hoại thư"]
        ] } },
        { liste: ["Chăm sóc: để chân thấp, giữ ấm (không dùng túi chườm nóng – nguy cơ bỏng), tập đi theo y lệnh, chăm sóc bàn chân cẩn thận", "Không mang vớ áp lực, không kê cao chân"] },
        { h: "Huyết khối tĩnh mạch sâu và thuyên tắc phổi" },
        { liste: ["TVT: một chân sưng, đau, nóng, tím", "Thuyên tắc phổi: đột ngột khó thở, đau ngực, nhịp tim nhanh, lo sợ, ho, có thể sốc – cấp cứu", "Chăm sóc: gọi cấp cứu, nâng cao thân trên, nghỉ ngơi, không cho đứng dậy, theo dõi dấu hiệu sinh tồn, thở oxy theo y lệnh"] },
        { link: { bereich: "prophylaxen", kapitel: "thrombose" } },
        { h: "COPD" },
        { liste: ["Bệnh phổi tắc nghẽn mạn tính, chủ yếu do hút thuốc", "Triệu chứng chính AHA: khạc đờm (Auswurf), ho (Husten), khó thở (Atemnot)", "Chăm sóc: thở chúm môi, tư thế người đánh xe, tư thế dễ thở, hướng dẫn khí dung, bỏ thuốc lá", "Thở oxy chỉ theo y lệnh và với độ bão hòa mục tiêu (thường 88–92 %)"] },
        { h: "Hen phế quản (Asthma bronchiale)" },
        { liste: ["Khó thở thành cơn do phế quản co hẹp (viêm, tăng tiết nhầy, co thắt phế quản)", "Dấu hiệu: thì thở ra kéo dài, khò khè, rít", "Chăm sóc trong cơn: trấn an, ngồi thẳng, thở chúm môi, dùng thuốc xịt cấp cứu theo kế hoạch, báo bác sĩ"] },
        { h: "Viêm phổi (Pneumonie)" },
        { liste: ["Viêm nhu mô phổi, thường do vi khuẩn", "Dấu hiệu: sốt, ho, khạc đờm, khó thở, đau ngực khi thở; ở người cao tuổi đôi khi chỉ có lú lẫn", "Chăm sóc: dấu hiệu sinh tồn, hỗ trợ hô hấp, bù nước, xử lý đờm, kiểm soát sốt"] },
        { link: { bereich: "prophylaxen", kapitel: "pneumonie" } }
      ] }
    ]
  },

  {
    id: "ernaehrung", titel: "Dinh dưỡng", untertitel: "Chất dinh dưỡng, rối loạn nuốt, chế độ ăn, PEG, cân bằng dịch",
    kapitel: [
      { id: "naehrstoffe", titel: "Dinh dưỡng học", kurz: "Chất đa lượng và vi lượng, nhu cầu năng lượng và nước", abschnitte: [
        { h: "Chất dinh dưỡng đa lượng" },
        { tabelle: { kopf: ["Chất dinh dưỡng", "Năng lượng", "Vai trò / Ví dụ"], zeilen: [
          ["Carbohydrat", "khoảng 4 kcal (17 kJ) mỗi g", "Nguồn năng lượng chính; ngũ cốc nguyên hạt, khoai tây, trái cây; chất xơ giúp tiêu hóa"],
          ["Chất béo", "khoảng 9 kcal (37 kJ) mỗi g", "Dự trữ năng lượng, màng tế bào, vận chuyển vitamin tan trong dầu"],
          ["Protein (chất đạm)", "khoảng 4 kcal (17 kJ) mỗi g", "Vật liệu xây dựng cơ, enzym, kháng thể; giúp lành vết thương"],
          ["Rượu", "khoảng 7 kcal mỗi g", "Không phải chất dinh dưỡng nhưng cung cấp năng lượng"]
        ] } },
        { h: "Chất dinh dưỡng vi lượng" },
        { liste: ["Vitamin tan trong dầu: A, D, E, K (cách nhớ tiếng Đức „EDeKA“)", "Vitamin tan trong nước: nhóm B, C", "Chất khoáng: ví dụ natri, kali, canxi, magie", "Nguyên tố vi lượng: ví dụ sắt, iốt, kẽm, flo"] },
        { h: "Nhu cầu (người lớn, tham khảo)" },
        { liste: ["Năng lượng: chuyển hóa cơ bản khoảng 1 kcal mỗi kg cân nặng mỗi giờ; tổng nhu cầu tùy mức hoạt động", "Protein: khoảng 0,8 g/kg/ngày, ở người cao tuổi và người bệnh khoảng 1,0–1,2 g/kg/ngày", "Nước: khoảng 30–35 ml/kg/ngày (khoảng 1,5–2 lít nước uống), trừ khi bác sĩ hạn chế"] },
        { h: "Đánh giá tình trạng dinh dưỡng" },
        { tabelle: { kopf: ["BMI (kg/m²)", "Phân loại (WHO)"], zeilen: [
          ["< 18,5", "Thiếu cân"],
          ["18,5–24,9", "Bình thường"],
          ["25,0–29,9", "Tiền béo phì (thừa cân)"],
          ["≥ 30", "Béo phì"]
        ] } },
        { p: "BMI = cân nặng (kg) ÷ chiều cao² (m²). Ở người cao tuổi, BMI dưới khoảng 20 đã là dấu hiệu suy dinh dưỡng. Công cụ sàng lọc: MNA (Mini Nutritional Assessment), NRS 2002, MUST. Cơ sở: Tiêu chuẩn chuyên gia „Quản lý dinh dưỡng để bảo đảm và thúc đẩy ăn uống qua đường miệng trong điều dưỡng“." },
        { merke: "Dấu hiệu cảnh báo suy dinh dưỡng: sụt cân ngoài ý muốn (> 5 % trong 3 tháng), bỏ thừa thức ăn, khó nhai và khó nuốt, chán ăn, quần áo rộng ra." }
      ] },
      { id: "dysphagie", titel: "Rối loạn nuốt (Dysphagie)", kurz: "Nhận biết rối loạn nuốt và hỗ trợ ăn an toàn", abschnitte: [
        { h: "Định nghĩa và nguyên nhân" },
        { p: "Dysphagie là rối loạn quá trình nuốt. Nguyên nhân thường gặp: đột quỵ, Parkinson, sa sút trí tuệ, đa xơ cứng, ALS, khối u vùng đầu – cổ, tuổi cao (Presbyphagie)." },
        { h: "Dấu hiệu" },
        { liste: ["Ho hoặc đằng hắng trong hoặc sau khi ăn", "Giọng nói ướt, „ọc ọc“", "Thức ăn đọng ở má, nước bọt chảy ra ngoài", "Ăn rất lâu, từ chối ăn", "Viêm phổi tái phát, sốt không rõ nguyên nhân, sụt cân"] },
        { h: "Biện pháp khi ăn" },
        { liste: [
          "Ngồi thẳng (khoảng 90°), đầu hơi cúi về trước",
          "Môi trường yên tĩnh, đủ thời gian, người bệnh hoàn toàn tỉnh táo",
          "Miếng và ngụm nhỏ, chỉ tiếp tục khi đã nuốt hết",
          "Điều chỉnh độ đặc theo khuyến nghị của ngôn ngữ trị liệu (ví dụ theo các mức IDDSI), làm đặc đồ uống",
          "Tránh thức ăn hỗn hợp độ đặc (ví dụ súp có cái)",
          "Sau ăn ngồi thẳng 30 phút, kiểm tra khoang miệng, chăm sóc răng miệng",
          "Phối hợp ngôn ngữ trị liệu (chẩn đoán nuốt, tập nuốt)"
        ] },
        { link: { bereich: "prophylaxen", kapitel: "aspiration" } }
      ] },
      { id: "kostformen", titel: "Các chế độ ăn", kurz: "Từ ăn thường đến nhịn ăn", abschnitte: [
        { tabelle: { kopf: ["Chế độ ăn", "Đặc điểm / Chỉ định"], zeilen: [
          ["Ăn thường", "Ăn cân đối, không hạn chế"],
          ["Ăn nhẹ", "Không có món khó tiêu, gây đầy hơi, chiên rán hoặc quá nhiều mỡ; khi có vấn đề dạ dày – ruột"],
          ["Chế độ ăn đái tháo đường", "Cân đối, nhiều chất xơ; lượng carbohydrat phù hợp với điều trị"],
          ["Chế độ ăn ít muối", "Ít muối ăn; khi tăng huyết áp, suy tim, phù"],
          ["Chế độ ăn điều chỉnh đạm", "Lượng protein phù hợp; ví dụ khi suy thận"],
          ["Chế độ ăn ít purin", "Ít nội tạng, thịt, rượu; khi bị gút"],
          ["Chế độ ăn không gluten", "Không lúa mì, lúa mạch đen, lúa mạch; khi bị bệnh celiac"],
          ["Thức ăn xay/nghiền nhuyễn", "Khi khó nhai, khó nuốt; trình bày hấp dẫn"],
          ["Thức ăn lỏng / dinh dưỡng uống", "Khi khó nuốt hoặc nhu cầu tăng, ví dụ sữa dinh dưỡng năng lượng cao"],
          ["Nhịn ăn („nhịn đói“)", "Trước phẫu thuật/thăm dò theo y lệnh; chăm sóc răng miệng đặc biệt quan trọng"]
        ] } },
        { merke: "Chế độ ăn do bác sĩ chỉ định. Tôn trọng mong muốn, thói quen, tôn giáo và văn hóa (ví dụ không ăn thịt lợn, ăn chay)." }
      ] },
      { id: "sonde", titel: "Nuôi ăn qua ống (PEG)", kurz: "Các loại ống, kiểm tra vị trí, cách cho ăn, chăm sóc", abschnitte: [
        { h: "Các loại ống" },
        { tabelle: { kopf: ["Ống", "Vị trí", "Chỉ định"], zeilen: [
          ["Ống thông mũi – dạ dày", "Qua mũi vào dạ dày", "Ngắn hạn (vài tuần)"],
          ["PEG", "Mở thông dạ dày qua da bằng nội soi: qua thành bụng vào dạ dày", "Dài hạn (> 2–4 tuần)"],
          ["PEJ / ống hỗng tràng", "Ở hỗng tràng (Jejunum)", "Khi rối loạn làm rỗng dạ dày, nguy cơ hít sặc"]
        ] } },
        { h: "Trước khi cho ăn" },
        { liste: ["Nâng cao thân trên ít nhất 30° (tốt hơn 30–45°) – trong khi cho ăn và khoảng 30–60 phút sau", "Kiểm tra vị trí ống: vạch đánh dấu/độ dài ở chỗ ra, với ống mũi – dạ dày theo quy định cơ sở (ví dụ đo pH dịch hút)", "Thức ăn ở nhiệt độ phòng, kiểm tra hạn dùng, chai đã mở dùng tối đa theo hướng dẫn nhà sản xuất (thường 24 giờ trong tủ lạnh)"] },
        { h: "Cách cho ăn" },
        { tabelle: { kopf: ["Phương pháp", "Mô tả"], zeilen: [
          ["Bơm từng liều (bolus)", "Từng phần bằng bơm tiêm (chỉ với ống dạ dày), chậm"],
          ["Nhỏ giọt theo trọng lực", "Qua bộ dây truyền có khóa con lăn"],
          ["Bơm dinh dưỡng", "Liên tục, liều chính xác – luôn dùng với ống hỗng tràng"]
        ] } },
        { liste: ["Trước và sau mỗi lần cho ăn và trước/sau khi cho thuốc, bơm rửa với khoảng 20–50 ml nước (tránh tắc ống)", "Cho từng loại thuốc riêng, chỉ khi phù hợp với ống (không nghiền viên giải phóng chậm, không nghiền viên bao tan trong ruột) – hỏi dược sĩ", "Bắt đầu chậm, theo dõi dung nạp (buồn nôn, đầy bụng, tiêu chảy)"] },
        { h: "Chăm sóc PEG" },
        { liste: [
          "Thay băng vô khuẩn: tuần đầu mỗi ngày, sau khi lành khoảng 2–3 lần/tuần hoặc theo quy định cơ sở",
          "Quan sát chỗ đặt ống: đỏ, sưng, dịch tiết, đau, mùi",
          "Tấm chặn ngoài không quá chặt – sau khi lành (thường từ khoảng ngày 7–10) xoay chuyển ống theo y lệnh: nới ra, đẩy vào, xoay, kéo lại (phòng hội chứng Buried Bumper)",
          "Chăm sóc răng miệng nhiều lần mỗi ngày dù không ăn qua miệng"
        ] },
        { warn: "Biến chứng: hít sặc, tiêu chảy (cho quá nhanh, quá lạnh, nhiễm khuẩn), tắc ống, tuột ống, nhiễm trùng chỗ đặt ống, hội chứng Buried Bumper (tấm chặn trong lún vào thành dạ dày)." }
      ] },
      { id: "bilanz", titel: "Cân bằng dịch", kurz: "Tính lượng vào – ra, nhận biết mất nước", abschnitte: [
        { h: "Nguyên tắc" },
        { p: "Khi tính cân bằng dịch, toàn bộ lượng dịch vào được so sánh với toàn bộ lượng dịch ra trong một khoảng thời gian xác định (thường 24 giờ). Cân bằng = vào − ra." },
        { tabelle: { kopf: ["Dịch vào", "Dịch ra"], zeilen: [
          ["Đồ uống", "Nước tiểu (khoảng 1,5 lít/ngày)"],
          ["Nước trong thức ăn đặc (khoảng 700–900 ml)", "Phân (khoảng 100–200 ml)"],
          ["Nước oxy hóa từ chuyển hóa (khoảng 300 ml)", "Mất nước không nhận biết qua da và phổi (khoảng 800–900 ml)"],
          ["Dịch truyền, thức ăn qua ống, dịch rửa", "Chất nôn, dẫn lưu, ống thông dạ dày, dịch vết thương, mồ hôi"]
        ] } },
        { merke: "Cân bằng dương: vào nhiều hơn ra (nguy cơ: phù, quá tải tim). Cân bằng âm: ra nhiều hơn vào (nguy cơ: mất nước). Mỗi 1 °C sốt mất thêm khoảng 500 ml dịch." },
        { h: "Cách thực hiện" },
        { liste: ["Đo chính xác mọi lượng vào và ra, ghi ngay (phiếu cân bằng dịch)", "Khoảng thời gian cố định, ví dụ 6 giờ – 6 giờ", "Cân thêm hằng ngày", "Cùng người bệnh và người thân ghi chép (phiếu theo dõi uống nước)"] },
        { h: "Dấu hiệu mất nước (Exsikkose)" },
        { liste: ["Niêm mạc khô, lưỡi khô nứt, khát (ở người cao tuổi cảm giác khát thường giảm!)", "Nếp véo da mất chậm (giảm độ căng da)", "Nước tiểu cô đặc, sẫm màu, ít", "Nhịp tim nhanh, huyết áp thấp, chóng mặt", "Lú lẫn, mệt mỏi, sốt (sốt do khát), táo bón"] },
        { h: "Biện pháp" },
        { liste: ["Kế hoạch uống nước, đồ uống yêu thích, để đồ uống trong tầm nhìn và tầm tay", "Thường xuyên nhắc uống, dụng cụ hỗ trợ uống", "Thực phẩm nhiều nước (súp, trái cây, sữa chua)", "Khi cần truyền dịch hoặc truyền dưới da theo y lệnh"] }
      ] }
    ]
  },
  {
    id: "ausscheidung", titel: "Stoma & Ống thông tiểu lưu", untertitel: "Ống thông bàng quang và đường ra nhân tạo của ruột và nước tiểu",
    kapitel: [
      { id: "dk_grundlagen", titel: "Ống thông tiểu lưu (DK): cơ bản", kurz: "Chỉ định, đường đặt, chất liệu, Charrière", abschnitte: [
        { h: "Ống thông tiểu lưu là gì?" },
        { p: "Ống thông tiểu lưu (DK) là ống nằm trong bàng quang trong thời gian dài và dẫn nước tiểu vào một hệ thống dẫn lưu kín. Một bóng chèn được bơm đầy để giữ ống trong bàng quang. Ngược lại, ống thông một lần được rút ngay sau khi làm rỗng bàng quang." },
        { merke: "Mọi ống thông đều có nguy cơ nhiễm trùng. Vì vậy, chỉ đặt khi có chỉ định rõ ràng, kiểm tra sự cần thiết mỗi ngày và rút sớm nhất có thể." },
        { h: "Các chỉ định có thể có" },
        { liste: [
          "Bí tiểu cấp hoặc tắc nghẽn đường ra, ví dụ do phì đại tuyến tiền liệt",
          "Theo dõi chính xác lượng nước tiểu ở người bệnh nặng (cân bằng dịch)",
          "Phẫu thuật kéo dài hoặc phẫu thuật đường tiết niệu",
          "Bảo vệ vết thương vùng kín và mông khi tiểu không tự chủ, ví dụ loét tì đè độ III/IV",
          "Chăm sóc giảm nhẹ khi mọi cử động đều gây đau nhiều"
        ] },
        { warn: "Chỉ riêng tiểu không tự chủ hoặc việc giảm khối lượng công việc chăm sóc không phải là chỉ định đặt ống thông tiểu lưu." },
        { h: "So sánh các đường đặt" },
        { tabelle: { kopf: ["", "Qua niệu đạo", "Trên xương mu"], zeilen: [
          ["Đường đi", "Qua niệu đạo (Urethra)", "Qua thành bụng phía trên khớp mu (Symphyse)"],
          ["Người đặt", "Điều dưỡng hoặc bác sĩ theo y lệnh", "Thủ thuật của bác sĩ (chọc dò)"],
          ["Ưu điểm", "Đặt đơn giản và nhanh", "Bảo vệ niệu đạo, có thể kiểm tra khả năng tự đi tiểu"],
          ["Nhược điểm", "Tổn thương niệu đạo, hẹp niệu đạo, vi khuẩn dễ đi ngược lên", "Nguy cơ của thủ thuật như chảy máu hoặc tổn thương ruột, cần chăm sóc vị trí đặt"]
        ] } },
        { h: "Chất liệu và kích cỡ" },
        { tabelle: { kopf: ["Đặc điểm", "Ý nghĩa"], zeilen: [
          ["Charrière (Ch)", "Đường kính ngoài: 1 Ch = 1/3 mm. Nhỏ nhất có thể, lớn vừa đủ theo nhu cầu"],
          ["Cỡ thường dùng", "Nữ thường 12–14 Ch, nam thường 14–16 Ch"],
          ["Silicon", "Dung nạp tốt, phù hợp để lưu lâu hơn"],
          ["Latex", "Chỉ lưu ngắn ngày, cần hỏi tiền sử dị ứng"],
          ["Đầu Nélaton", "Dạng chuẩn, thẳng và bo tròn"],
          ["Đầu Tiemann", "Đầu cong, dùng cho nam giới khó đặt, ví dụ do phì đại tuyến tiền liệt"]
        ] } },
        { anatomie: "harn" },
        { link: { bereich: "prophylaxen", kapitel: "zystitis" } }
      ] },
      { id: "dk_legen", titel: "Đặt ống thông tiểu lưu", kurz: "Từng bước vô khuẩn, ở nữ và nam", abschnitte: [
        { h: "Chuẩn bị" },
        { liste: [
          "Kiểm tra y lệnh và chỉ định, hỏi tiền sử dị ứng (latex, thuốc sát khuẩn, gel)",
          "Thông báo cho người bệnh, xin đồng ý, bảo vệ sự riêng tư",
          "Tư thế nằm ngửa, vệ sinh vùng kín, sát khuẩn tay",
          "Chuẩn bị bộ dụng cụ vô khuẩn, ống thông phù hợp, hệ thống dẫn lưu kín, gel bôi trơn, thuốc sát khuẩn niêm mạc và dung dịch bơm bóng",
          "An toàn nhất là làm hai người: một người thao tác vô khuẩn, một người đưa dụng cụ"
        ] },
        { merke: "Đặt ống thông là thủ thuật vô khuẩn: dùng găng vô khuẩn, dụng cụ vô khuẩn và tuân thủ thời gian tác dụng của thuốc sát khuẩn theo nhà sản xuất." },
        { h: "Các bước thực hiện" },
        { tabelle: { kopf: ["Bước", "Nữ", "Nam"], zeilen: [
          ["Sát khuẩn", "Vạch môi âm hộ, lau từ khớp mu về phía hậu môn, mỗi gạc chỉ dùng một lần", "Kéo bao quy đầu ra sau, lau quy đầu theo vòng tròn từ lỗ niệu đạo ra ngoài"],
          ["Bôi trơn", "Bôi gel lên đầu ống hoặc vào niệu đạo", "Bơm gel vô khuẩn vào niệu đạo, chờ đủ thời gian tác dụng"],
          ["Đưa ống vào", "Đẩy nhẹ, không dùng lực, đến khi nước tiểu chảy ra", "Kéo thẳng dương vật lên trên, khi có lực cản thì hạ xuống, đẩy tiếp đến khi nước tiểu chảy ra"],
          ["Đoạn an toàn", "Đẩy thêm vài centimet", "Đẩy đến gần chỗ chia nhánh của ống"],
          ["Kết thúc", "Bơm bóng, kéo lại đến khi có lực cản, cố định", "Bơm bóng, kéo lại, nhất định phải kéo bao quy đầu trở lại"]
        ] } },
        { h: "Bơm bóng" },
        { liste: [
          "Chỉ bơm bóng khi nước tiểu chảy ra: khi đó bóng nằm trong bàng quang",
          "Dùng Aqua destillata vô khuẩn hoặc dung dịch glycerin 8–10 %, lượng theo nhà sản xuất (thường 5–10 ml)",
          "Không dùng NaCl: có thể kết tinh và làm tắc kênh bơm bóng",
          "Không dùng không khí: bóng sẽ nổi lên và nhanh xẹp"
        ] },
        { warn: "Đau khi bơm bóng gợi ý ống nằm sai vị trí trong niệu đạo: dừng ngay, rút dịch ra, báo bác sĩ." },
        { h: "Tình huống khó" },
        { liste: [
          "Ống vào âm đạo: ống được coi là không còn vô khuẩn. Dùng ống vô khuẩn mới",
          "Có lực cản: tuyệt đối không dùng lực, nếu không có thể tạo đường sai (Via falsa)",
          "Máu ở niệu đạo hoặc đau nhiều: dừng lại, báo bác sĩ",
          "Lượng nước tiểu lớn khi bí tiểu: theo dõi tuần hoàn, có thể chảy máu do giảm áp đột ngột. Tuân theo y lệnh và quy định của cơ sở"
        ] },
        { warn: "Nếu bao quy đầu vẫn bị kéo ra sau, có thể xảy ra Paraphimose: quy đầu sưng đau và giảm tưới máu. Đây là tình trạng cấp cứu." },
        { h: "Ghi chép" },
        { p: "Ngày giờ, chỉ định, loại và cỡ ống, số lô, lượng và loại dung dịch bơm bóng, lượng và tính chất nước tiểu, điều bất thường, chữ ký." }
      ] },
      { id: "dk_pflege", titel: "Chăm sóc ống thông và biến chứng", kurz: "Phòng nhiễm trùng, nhận biết vấn đề, rút ống", abschnitte: [
        { h: "Chăm sóc khi đang đặt ống" },
        { liste: [
          "Sát khuẩn tay trước và sau mỗi lần tiếp xúc, đeo găng khi có thể tiếp xúc nước tiểu",
          "Vệ sinh vùng kín hằng ngày bằng nước và dung dịch rửa dịu nhẹ, lau ống theo hướng ra xa niệu đạo",
          "Không dùng thuốc sát khuẩn thường quy cho lỗ niệu đạo",
          "Cố định ống không để căng kéo: ở nữ tại đùi, ở nam theo quy định của cơ sở",
          "Luôn để túi thấp hơn bàng quang, không gập dây, không đặt túi xuống sàn",
          "Xả túi kịp thời qua van, sát khuẩn trước và sau, mỗi người có dụng cụ chứa riêng",
          "Khuyến khích uống đủ nước nếu không có hạn chế",
          "Ghi chép hằng ngày: lượng nước tiểu, màu, độ đục, sự cần thiết của ống"
        ] },
        { merke: "Hệ thống dẫn lưu phải luôn kín. Lấy mẫu nước tiểu tại vị trí lấy mẫu của hệ thống sau khi sát khuẩn, không bao giờ lấy từ túi." },
        { h: "Thay ống thông" },
        { p: "Việc thay ống tùy theo chất liệu, hướng dẫn của nhà sản xuất và nhu cầu, ví dụ khi tắc, đóng cặn hoặc nhiễm trùng. Nói chung không thay thường quy theo khoảng thời gian cố định. Cũng không khuyến cáo rửa bàng quang thường quy." },
        { h: "Biến chứng" },
        { tabelle: { kopf: ["Vấn đề", "Dấu hiệu", "Biện pháp"], zeilen: [
          ["Nhiễm trùng tiết niệu", "Nước tiểu đục, hôi, sốt, đau hông lưng, lú lẫn", "Đo dấu hiệu sinh tồn, báo bác sĩ, lấy mẫu theo y lệnh"],
          ["Tắc ống", "Không có nước tiểu trong túi, đau bụng dưới, bàng quang căng", "Kiểm tra dây, báo bác sĩ, thay hoặc rửa theo y lệnh"],
          ["Co thắt bàng quang", "Đau quặn, nước tiểu rò ra cạnh ống", "Kiểm tra vị trí và dòng chảy, báo bác sĩ"],
          ["Tổn thương niệu đạo", "Chảy máu, đau, về sau hẹp niệu đạo (Striktur)", "Cố định không căng kéo, xem lại chỉ định, báo bác sĩ"],
          ["Bóng không xẹp", "Không rút được dịch ra", "Không kéo ống, báo bác sĩ"]
        ] } },
        { warn: "Sốt, rét run, tụt huyết áp hoặc mới xuất hiện lú lẫn có thể là dấu hiệu Urosepsis: báo bác sĩ ngay." },
        { h: "Ống thông trên xương mu: điểm riêng" },
        { liste: [
          "Đến khi lành, thay băng vô khuẩn theo y lệnh",
          "Sau đó kiểm tra vị trí đặt hằng ngày: đỏ, dịch tiết, đau",
          "Cố định ống không căng kéo, kiểm tra vị trí",
          "Chỉ xả qua hệ thống kín, không tháo rời"
        ] },
        { h: "Rút ống thông" },
        { liste: [
          "Kiểm tra y lệnh, thông báo cho người bệnh, đeo găng, lót tấm thấm",
          "Rút hết dịch trong bóng qua van và so sánh lượng với hồ sơ",
          "Rút ống từ từ, không có lực cản, tốt nhất khi người bệnh thở ra",
          "Sau đó vệ sinh vùng kín, khuyến khích uống nước, theo dõi lần tiểu đầu tiên và lượng nước tiểu",
          "Khi bí tiểu hoặc khó chịu, báo bác sĩ và kiểm tra nước tiểu tồn dư nếu cần"
        ] }
      ] },
      { id: "stoma_grundlagen", titel: "Stoma: cơ bản", kurz: "Colostoma, Ileostoma, Urostoma và sự khác biệt", abschnitte: [
        { h: "Stoma là gì?" },
        { p: "Stoma là lỗ mở của một tạng rỗng ra ngoài cơ thể, được tạo bằng phẫu thuật. Trong điều dưỡng, quan trọng nhất là đường ra nhân tạo của ruột (Enterostoma) và của nước tiểu (Urostoma). Stoma có thể tạm thời hoặc vĩnh viễn." },
        { h: "Nguyên nhân thường gặp" },
        { liste: ["Ung thư ruột hoặc bàng quang", "Bệnh viêm ruột mạn tính như Morbus Crohn và Colitis ulcerosa", "Viêm túi thừa, tắc ruột (Ileus), thủng ruột", "Bảo vệ miệng nối ruột sau phẫu thuật", "Chấn thương"] },
        { h: "So sánh các loại stoma" },
        { tabelle: { kopf: ["", "Colostoma", "Ileostoma", "Urostoma"], zeilen: [
          ["Đường ra", "Ruột già", "Ruột non", "Dẫn lưu nước tiểu, ví dụ Ileum-Conduit"],
          ["Vị trí thường gặp", "Thường ở dưới bên trái", "Thường ở dưới bên phải", "Thường ở dưới bên phải"],
          ["Chất thải", "Sệt đến thành khuôn", "Lỏng đến sệt, rất thường xuyên", "Nước tiểu, liên tục"],
          ["Da", "Nguy cơ thấp hơn", "Nguy cơ cao do men tiêu hóa", "Nguy cơ do ẩm liên tục"],
          ["Túi", "Túi kín có màng lọc", "Túi xả được", "Túi Urostoma có chống trào ngược và van xả"]
        ] } },
        { h: "Cách phân loại khác" },
        { liste: [
          "Một nòng (endständig): đưa một đầu ruột ra ngoài, thường vĩnh viễn",
          "Hai nòng (doppelläufig): đưa một quai ruột có hai lỗ ra ngoài, thường tạm thời",
          "Vị trí trên ruột già ảnh hưởng đến chất thải: stoma càng ở đoạn sau thì phân càng đặc"
        ] },
        { h: "Stoma khỏe mạnh trông như thế nào" },
        { liste: ["Hồng đến đỏ tươi và ẩm, giống niêm mạc miệng", "Cao hơn mặt da một chút, Ileostoma nhô rõ hơn", "Chảy máu nhẹ khi làm sạch thường vô hại", "Không có cảm giác đau vì niêm mạc không có dây thần kinh cảm giác đau"] },
        { warn: "Stoma đỏ sẫm, xanh hoặc đen: có thể là rối loạn tưới máu (Nekrose). Báo bác sĩ ngay." },
        { h: "Trước phẫu thuật" },
        { p: "Chuyên gia chăm sóc stoma tư vấn và đánh dấu vị trí khi nằm, ngồi và đứng. Người bệnh phải nhìn thấy và với tới stoma dễ dàng; stoma không nên nằm ở nếp da, sẹo hoặc cạp quần." },
        { anatomie: "verdauung" }
      ] },
      { id: "stoma_versorgung", titel: "Chăm sóc stoma", kurz: "Hệ thống, thay dụng cụ, bảo vệ da", abschnitte: [
        { h: "Hệ thống dụng cụ" },
        { tabelle: { kopf: ["Hệ thống", "Cấu tạo", "Thời gian thay tham khảo"], zeilen: [
          ["Một mảnh", "Đế bảo vệ da và túi gắn liền", "Thường mỗi ngày hoặc khi cần"],
          ["Hai mảnh", "Đế ở trên da, túi được gắn vào", "Đế khoảng 2–3 ngày, túi khi cần"]
        ] } },
        { p: "Khoảng thời gian phụ thuộc vào sản phẩm, da và chất thải. Dụng cụ bị rò phải được thay ngay. Xả hoặc thay túi trước khi túi đầy khoảng một phần ba đến một nửa." },
        { h: "Thay dụng cụ từng bước" },
        { liste: [
          "Chuẩn bị dụng cụ mới, thước đo, kéo, gạc, nước, túi rác",
          "Mời người bệnh cùng tham gia, sát khuẩn tay, đeo găng, bảo vệ giường và quần áo",
          "Gỡ đế cũ nhẹ nhàng từ trên xuống dưới, đồng thời giữ da",
          "Lấy phân, làm sạch stoma từ ngoài vào trong bằng nước và lau khô da",
          "Quan sát stoma và da: màu, kích thước, đỏ, tổn thương",
          "Đo stoma và cắt lỗ đế cho vừa (lớn hơn stoma khoảng 1–2 mm)",
          "Dán đế phẳng từ dưới lên trên và dùng tay ấm giữ vài phút",
          "Gắn túi, kiểm tra độ chắc và ghi chép"
        ] },
        { merke: "Da quanh stoma phải sạch, khô và không có dầu, nếu không đế sẽ không dính. Lỗ quá lớn làm chất thải tiếp xúc với da." },
        { h: "Bảo vệ da" },
        { liste: [
          "Chỉ dùng nước hoặc chất làm sạch trung tính không chứa dầu, khi cần dùng dung dịch gỡ băng dính",
          "Không dùng xăng, cồn, dầu hoặc kem béo",
          "Cẩn thận loại bỏ lông xung quanh",
          "Bù chỗ không phẳng và nếp da bằng keo stoma hoặc vòng bảo vệ da",
          "Khi da đỏ hoặc tổn thương, mời chuyên gia chăm sóc stoma tham gia"
        ] },
        { h: "Điểm đặc biệt" },
        { liste: [
          "Ileostoma: bảo vệ da đặc biệt kỹ vì dịch ruột non chứa men tiêu hóa mạnh",
          "Urostoma: nước tiểu vẫn chảy khi thay, nên chuẩn bị vật liệu thấm hút. Ban đêm nối với túi lớn hơn",
          "Irrigation: thụt rửa ruột qua Colostoma ở đoạn Sigma hoặc Descendens, chỉ khi bác sĩ đồng ý và có hướng dẫn"
        ] }
      ] },
      { id: "stoma_alltag", titel: "Stoma: biến chứng và sinh hoạt", kurz: "Nhận biết vấn đề, dinh dưỡng, tâm lý, hướng dẫn", abschnitte: [
        { h: "Biến chứng" },
        { tabelle: { kopf: ["Biến chứng", "Ý nghĩa", "Cần làm gì?"], zeilen: [
          ["Nekrose", "Stoma sẫm đến đen, rối loạn tưới máu", "Báo bác sĩ ngay"],
          ["Retraktion", "Stoma tụt xuống dưới mặt da", "Bác sĩ và chuyên gia stoma, điều chỉnh dụng cụ"],
          ["Prolaps", "Ruột lộ ra nhiều qua stoma", "Báo bác sĩ, báo ngay nếu đổi màu"],
          ["Parastomale Hernie", "Thoát vị cạnh stoma, có khối phồng", "Tránh mang nặng, đai bụng và bác sĩ"],
          ["Stenose", "Lỗ stoma hẹp, khó thải", "Báo bác sĩ"],
          ["Viêm da", "Đỏ và rỉ dịch do dụng cụ bị rò", "Kiểm tra dụng cụ và lỗ cắt, chuyên gia stoma"],
          ["Nhiễm nấm", "Đỏ kèm các nốt nhỏ vệ tinh, ngứa", "Báo bác sĩ, điều trị theo y lệnh"]
        ] } },
        { warn: "Không có chất thải, đau quặn bụng, nôn và bụng chướng có thể là dấu hiệu tắc ruột: báo bác sĩ ngay." },
        { h: "Dinh dưỡng" },
        { liste: [
          "Thường không cần chế độ ăn đặc biệt: thử từng món mới và nhai kỹ",
          "Gây đầy hơi: bắp cải, đậu, hành, đồ uống có ga",
          "Gây mùi: trứng, cá, hành, tỏi, một số loại phô mai",
          "Giảm mùi: sữa chua, nam việt quất, mùi tây, rau bina",
          "Gây táo: gạo, chuối, bánh mì trắng. Nhuận tràng: trái cây sống, rượu, cà phê"
        ] },
        { h: "Điểm riêng theo loại stoma" },
        { liste: [
          "Ileostoma: uống nhiều nước và bổ sung điện giải, sớm nhận biết mất nước",
          "Ileostoma: thức ăn nhiều xơ như măng tây, nấm, các loại hạt hoặc cam quýt có thể gây tắc stoma",
          "Ileostoma: thuốc phóng thích chậm có thể không được hấp thu đủ. Cần hỏi bác sĩ hoặc dược sĩ",
          "Urostoma: uống nhiều nước, theo dõi nước tiểu đục và có mùi"
        ] },
        { h: "Hỗ trợ tâm lý xã hội" },
        { p: "Stoma làm thay đổi hình ảnh cơ thể và có thể gây xấu hổ, ghê sợ, lo lắng về mùi, về đời sống vợ chồng và tình dục. Hãy tôn trọng những cảm xúc này, giữ sự riêng tư và chú ý nét mặt của chính bạn khi thay dụng cụ." },
        { h: "Hướng dẫn và sinh hoạt" },
        { liste: [
          "Khuyến khích tự chăm sóc từng bước: trước hết quan sát, sau đó phụ giúp, rồi tự làm",
          "Mời người thân tham gia nếu người bệnh muốn, sớm sắp xếp chuyên gia stoma và dụng cụ",
          "Giới thiệu nhóm tự lực, ví dụ Deutsche ILCO",
          "Thường vẫn có thể tắm, đi du lịch và chơi thể thao. Tránh mang vác nặng",
          "Luôn mang theo bộ dụng cụ dự phòng"
        ] },
        { merke: "Chữ viết tắt „AP“ (Anus praeter) vẫn thường dùng trong thực tế. Thuật ngữ chính xác hơn là Colostoma và Ileostoma." }
      ] }
    ]
  }
];
