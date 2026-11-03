// MediSmart – Tiếng Việt: bản dịch các thuật ngữ giải phẫu (Vietnamesische Übersetzung der Anatomie)
// Lateinische Fachbegriffe bleiben unverändert; übersetzt werden Bedeutung und Erklärung.
// Aufbau: VI_ANATOMIE[katId] = { ten: "Bereichsname", gruppen: [ [Gruppentitel, [Eintrag, …]], … ] }
// Ein Eintrag ist "Bedeutung" oder ["Bedeutung", "Erklärung"] – in derselben Reihenfolge wie in data.js.
// Hinweis: maschinell erstellte Fachübersetzung – bitte von Lehrkräften/Muttersprachlern prüfen lassen.

const VI_ANATOMIE = {};

VI_ANATOMIE.orientierung = { ten: "Định hướng trên cơ thể", gruppen: [
  ["Thuật ngữ vị trí và hướng", [
    ["phía trước", "Hướng về mặt trước của cơ thể."], ["phía sau", "Hướng về mặt sau của cơ thể."], ["về phía bụng", "Từ venter = bụng."],
    ["về phía lưng", "Từ dorsum = lưng. Ở bàn tay/bàn chân: về phía mu tay hoặc mu chân."], "phía trên", "phía dưới",
    ["về phía đầu", "Từ cranium = hộp sọ."], ["về phía cụt", "Từ cauda = đuôi."], ["về phía đường giữa", "Nằm hướng về mặt phẳng giữa."],
    ["phía bên", "Xa mặt phẳng giữa, hướng ra bên."], ["ở giữa", "Nằm đúng trên mặt phẳng giữa."],
    ["gần thân", "Hướng về thân mình hoặc về điểm gốc (ví dụ ở các chi)."], ["xa thân", "Xa thân mình hoặc xa điểm gốc."],
    "bên phải", "bên trái", "nông, ở bề mặt", "sâu, nằm sâu", "bên trong", "bên ngoài", "trung tâm",
    ["ngoại vi", "Hướng về bề mặt cơ thể hoặc về các chi."], ["về phía lòng bàn tay", "Hướng về lòng bàn tay (palma). Đồng nghĩa: volaris."],
    ["về phía gan bàn chân", "Hướng về gan bàn chân (planta)."], ["phía xương quay", "Ở cẳng tay: về phía ngón cái."],
    ["phía xương trụ", "Ở cẳng tay: về phía ngón út."], ["phía xương chày", "Ở cẳng chân: về phía ngón chân cái."],
    ["phía xương mác", "Ở cẳng chân: về phía ngoài. Đồng nghĩa: peroneus."], ["về phía đỉnh", "Hướng về đỉnh (apex) của một cơ quan."],
    "về phía đáy", ["về phía mỏ", "Trong não: về phía trán."], "về phía trán; song song với trán",
    ["theo hướng mũi tên", "Chạy từ trước ra sau (sagitta = mũi tên)."], "nằm ngang", "theo chiều dọc", "nằm ở giữa, trung gian",
    "về phía trục cơ thể", ["bên đối diện", "Ví dụ: liệt nửa người bên đối diện trong đột quỵ."], "cùng bên", "hai bên",
    ["về phía lòng bàn tay", "Đồng nghĩa với palmaris."], ["về phía mũi", "Ở mắt: hướng về mũi."], ["về phía thái dương", "Ở mắt: hướng về thái dương."],
    ["thuộc tạng", "Thuộc về các cơ quan, ví dụ Pleura visceralis."], ["thuộc thành", "Thuộc về thành cơ thể, ví dụ Pleura parietalis."]
  ]],
  ["Mặt phẳng và trục", [
    ["mặt phẳng giữa", "Chia cơ thể thành hai nửa đối xứng."], ["mặt phẳng đứng dọc", "Mọi mặt phẳng song song với mặt phẳng giữa."],
    ["mặt phẳng trán (đứng ngang)", "Song song với trán; chia cơ thể thành trước và sau. Đồng nghĩa: Planum coronale."],
    ["mặt phẳng ngang", "Chia cơ thể đứng thẳng thành phần trên và phần dưới."], ["trục dọc", "Chạy từ đầu xuống chân."],
    ["trục trước – sau", "Chạy từ trước ra sau."], ["trục ngang", "Chạy từ trái sang phải."],
    ["tư thế giải phẫu", "Đứng thẳng, nhìn về phía trước, hai tay buông thõng, lòng bàn tay hướng ra trước. Mọi thuật ngữ vị trí đều dựa trên tư thế này."]
  ]],
  ["Các cử động", [
    "gấp", "duỗi", ["dạng", "Đưa ra xa trục dọc cơ thể."], ["khép", "Đưa vào gần trục dọc cơ thể."], ["xoay", "Xoay trong và xoay ngoài."],
    ["sấp", "Lòng bàn tay hướng xuống dưới hoặc ra sau."], ["ngửa", "Lòng bàn tay hướng lên trên hoặc ra trước."],
    ["xoay vòng", "Cử động phối hợp, ví dụ quay tròn cánh tay ở khớp vai."], ["nâng lên", "Ví dụ nâng cánh tay cao hơn mặt phẳng ngang."], "hạ xuống",
    ["gấp mu bàn chân", "Nâng mu bàn chân lên (ở khớp cổ chân trên). Còn gọi: Dorsalflexion."], ["gấp gan bàn chân", "Hạ bàn chân về phía gan chân."],
    "nghiêng trong bàn chân", "nghiêng ngoài bàn chân", ["đối chiếu ngón cái", "Ngón cái đặt đối diện với các ngón dài."], "đưa ngón cái trở về",
    ["đưa ra trước", "Ví dụ đưa tay hoặc chân ra phía trước."], ["đưa ra sau", "Ví dụ đưa tay hoặc chân ra phía sau."],
    ["đẩy ra trước", "Ví dụ đưa vai hoặc hàm dưới ra trước."], "kéo về sau", ["nghiêng bên", "Ví dụ nghiêng cột sống sang một bên."],
    "xoay trong", "xoay ngoài", "xoắn"
  ]]
] };

VI_ANATOMIE.regionen = { ten: "Các vùng cơ thể", gruppen: [
  ["Đầu và cổ", [
    "đầu", "hộp sọ", "mặt", "trán", ["thái dương", "Regio temporalis."], "đỉnh đầu", "chẩm", "má", "cằm", "mũi", "tai", "mắt",
    ["miệng", "Chú ý: không nhầm với Os, Ossis = xương."], "môi", ["cổ", "Đồng nghĩa: Cervix (ví dụ cột sống cổ = Pars cervicalis)."], "gáy",
    "vùng ổ mắt", "vùng mũi", "vùng miệng", ["hõm ức", "Hõm phía trên xương ức."], "hố trên đòn"
  ]],
  ["Thân mình", [
    "thân mình", "lồng ngực", "ngực", "vú, tuyến vú", "hố nách", "bụng", ["thượng vị", "Regio epigastrica, vùng hõm thượng vị."],
    ["hạ vị", "Vùng mu phía trên khớp mu."], "rốn", ["bẹn", "Regio inguinalis."], "lưng", ["thắt lưng", "Regio lumbalis."], "chậu hông",
    ["mông", "Đồng nghĩa: Clunes, Regio glutealis."], ["tầng sinh môn", "Vùng giữa hậu môn và cơ quan sinh dục ngoài."], "bộ phận sinh dục ngoài, vùng mu",
    "vùng xương ức", ["vùng hạ sườn", "Regio hypochondriaca; bên phải có gan, bên trái có lách."], "vùng rốn", ["vùng mạn sườn", "Đồng nghĩa: Latus."],
    "vùng xương bả vai", "vùng cột sống", ["vùng xương cùng", "Vị trí hay bị loét tì đè khi nằm ngửa."], ["vùng mấu chuyển", "Vị trí hay bị loét tì đè khi nằm nghiêng."]
  ]],
  ["Các chi", [
    "chi trên, tay", "chi dưới, chân", ["vùng vai (vùng cơ delta)", "Tiếng Hy Lạp gọi vai là Omos."], "cánh tay", "khuỷu tay",
    ["hố khuỷu", "Vị trí thường dùng để lấy máu (V. mediana cubiti)."], "cẳng tay", "cổ tay", "bàn tay", "lòng bàn tay", "mu bàn tay",
    "ngón tay hoặc ngón chân", ["ngón cái", "Digitus primus."], ["ngón trỏ", "Digitus secundus."], ["ngón giữa", "Digitus tertius."],
    ["ngón áp út", "Digitus quartus."], ["ngón út", "Digitus quintus."], "hông", "đùi", "gối", "hố khoeo", "cẳng chân", "bắp chân", "mắt cá",
    "bàn chân", "cổ chân", "gót chân", "gan bàn chân", "mu bàn chân", "ngón chân cái", "các ngón chân", "vùng cổ tay"
  ]]
] };

VI_ANATOMIE.zelle = { ten: "Tế bào và mô", gruppen: [
  ["Tế bào", [
    ["tế bào", "Đơn vị sống nhỏ nhất của cơ thể. Tiếng Hy Lạp: Cytus/Kytos."], ["màng tế bào", "Lớp kép phospholipid; đồng nghĩa: Plasmalemm."], "bào tương",
    ["nhân tế bào", "Chứa thông tin di truyền (DNA). Tiếng Hy Lạp: Karyon."], ["hạch nhân", "Nơi tạo ribosom."],
    ["ty thể, „nhà máy năng lượng của tế bào“", "Tạo năng lượng (ATP) qua hô hấp tế bào."], ["ribosom", "Nơi tổng hợp protein."],
    ["lưới nội chất (ER)", "Lưới nội chất hạt (có ribosom) và lưới nội chất trơn."], ["bộ máy Golgi", "Biến đổi, phân loại và đóng gói protein."],
    ["tiêu thể (lysosom)", "Chứa các enzym tiêu hóa."], ["trung tử", "Tạo thoi phân bào khi tế bào phân chia."],
    ["nhiễm sắc thể", "Người có 46 nhiễm sắc thể (23 cặp)."], ["axit deoxyribonucleic (DNA)", "Mang thông tin di truyền."],
    ["nguyên phân", "Phân chia tạo hai tế bào con giống hệt nhau về di truyền."], ["giảm phân", "Tạo tế bào sinh dục với bộ nhiễm sắc thể đơn bội."],
    "khung xương tế bào", ["peroxisom", "Phân hủy hydro peroxit và các chất khác."],
    ["vi nhung mao", "Phần lồi hình ngón tay giúp tăng diện tích bề mặt, ví dụ ở ruột non."], ["lông chuyển", "Phần lồi di động của tế bào, ví dụ ở đường hô hấp."],
    "gen", "chết tế bào theo chương trình", ["thẩm thấu", "Nước di chuyển qua màng bán thấm."], ["nhập bào", "Đưa chất vào trong tế bào."],
    ["xuất bào", "Đưa chất ra khỏi tế bào."]
  ]],
  ["Mô", [
    ["mô", "Tập hợp các tế bào cùng loại. Tiếng Hy Lạp: Histos."], ["biểu mô, mô phủ", "Che phủ bề mặt ngoài và bề mặt trong."], "tuyến", "mô liên kết", "mô mỡ",
    ["sụn", "Sụn trong, sụn đàn hồi và sụn sợi."], "mô xương", ["mô cơ", "Cơ trơn, cơ vân và cơ tim."], "mô thần kinh", ["niêm mạc", "Viết tắt: Mucosa."],
    ["thanh mạc", "Ví dụ màng phổi, phúc mạc, màng ngoài tim."], "màng đáy", ["cân, mạc", "Lớp bao mô liên kết quanh cơ và nhóm cơ."],
    ["biểu mô vảy", "Ví dụ da, khoang miệng, thực quản."], ["biểu mô trụ", "Ví dụ niêm mạc dạ dày và ruột."],
    ["biểu mô trụ giả tầng có lông chuyển", "Lót đường hô hấp."], ["biểu mô chuyển tiếp", "Lót đường tiết niệu."],
    ["nội mô", "Lớp lót trong của mạch máu và mạch bạch huyết."], ["trung biểu mô", "Biểu mô của các thanh mạc."], "tế bào sợi (tế bào mô liên kết)",
    ["collagen", "Protein dạng sợi chịu lực kéo."], ["sụn trong", "Ví dụ sụn khớp và sụn sườn."], ["sụn đàn hồi", "Ví dụ vành tai, nắp thanh quản."],
    ["sụn sợi", "Ví dụ đĩa đệm, sụn chêm."], "tế bào sụn", "tạo cốt bào (tế bào tạo xương)", "hủy cốt bào (tế bào hủy xương)", "cốt bào (tế bào xương)",
    ["osteon, hệ Havers", "Đơn vị cấu trúc của xương lá."], "tế bào cơ, sợi cơ", ["sarcomere", "Đơn vị co rút nhỏ nhất của sợi cơ."]
  ]]
] };

VI_ANATOMIE.knochen = { ten: "Xương / Bộ xương", gruppen: [
  ["Đại cương", [
    ["xương", "Tiếng Hy Lạp: Osteon."], ["bộ xương", "Người trưởng thành có khoảng 206 xương."],
    ["màng xương", "Có nhiều dây thần kinh – vì vậy rất đau khi bị tổn thương."], "thân xương", "đầu xương", "hành xương (chỗ nối thân và đầu xương)",
    "sụn tiếp hợp (sụn tăng trưởng)", "ống tủy", ["tủy đỏ", "Nơi tạo máu."], ["tủy vàng", "Tủy mỡ."], ["xương đặc", "Lớp xương ngoài đặc chắc."],
    ["xương xốp", "Mạng lưới bè xương dạng bọt biển."], "chỏm (đầu) xương", "cổ xương", "thân xương", "mỏm", "lồi cầu", "mỏm trên lồi cầu", "củ",
    ["lồi củ", "Nơi bám của gân."], "lỗ", "hố", "gai", "mào", "khuyết"
  ]],
  ["Hộp sọ", [
    "hộp sọ", "sọ não", "sọ mặt", "xương trán", ["xương đỉnh", "Có đôi."], ["xương thái dương", "Có đôi; chứa tai giữa và tai trong."], "xương chẩm",
    ["xương bướm", "Có hố yên (Sella turcica) chứa tuyến yên."], "xương sàng", "xương mũi", "xương lệ", "xương gò má", "xương hàm trên",
    ["xương hàm dưới", "Xương sọ duy nhất cử động được."], "xương khẩu cái", ["xương lá mía", "Một phần của vách ngăn mũi."], "xương xoăn mũi dưới", "xương móng",
    "khớp khâu sọ", ["thóp", "Thóp trước (lớn) và thóp sau (nhỏ) ở trẻ nhũ nhi."], ["lỗ chẩm lớn", "Nơi tủy sống đi qua."], "hố yên",
    "các xoang cạnh mũi", "xoang trán", "xoang hàm", "xoang sàng", "xoang bướm", "vòm sọ", "nền sọ", "hố sọ trước", "hố sọ giữa", "hố sọ sau",
    ["khớp vành", "Giữa xương trán và hai xương đỉnh."], ["khớp dọc giữa", "Giữa hai xương đỉnh."], ["khớp lambda", "Giữa xương đỉnh và xương chẩm."],
    ["khớp vảy", "Giữa xương đỉnh và xương thái dương."], ["thóp trước (thóp lớn)", "Đóng vào khoảng năm thứ 2."], ["thóp sau (thóp nhỏ)", "Đóng trong những tháng đầu đời."],
    "mỏm chũm", "cung gò má", ["mảnh sàng", "Nơi các sợi thần kinh khứu giác đi qua."], "mỏm huyệt răng", "góc hàm dưới", "mỏm lồi cầu xương hàm dưới"
  ]],
  ["Cột sống", [
    "cột sống", ["đốt sống", "Tiếng Hy Lạp: Spondylos."], ["đốt sống cổ", "7 đốt sống cổ (C1–C7)."], "đốt sống cổ 1 (đốt đội)",
    ["đốt sống cổ 2 (đốt trục)", "Có mỏm răng (Dens axis)."], ["đốt sống cổ 7 (đốt lồi)", "Mỏm gai dễ sờ thấy."], ["đốt sống ngực", "12 đốt sống ngực (Th1–Th12)."],
    ["đốt sống thắt lưng", "5 đốt sống thắt lưng (L1–L5)."], ["xương cùng", "5 đốt sống cùng dính liền."], "xương cụt", "thân đốt sống", "cung đốt sống",
    "mỏm gai", "mỏm ngang", "mỏm khớp", "lỗ đốt sống", ["ống sống", "Chứa tủy sống."], ["lỗ gian đốt sống", "Nơi các dây thần kinh sống đi ra."],
    "đĩa đệm (đĩa gian đốt sống)", "nhân nhầy (của đĩa đệm)", "vòng sợi (của đĩa đệm)", ["đường cong ưỡn (lordose)", "Đường cong sinh lý lồi ra trước (cổ, thắt lưng)."],
    ["đường cong gù (kyphose)", "Đường cong sinh lý lồi ra sau (ngực, xương cùng)."], "mỏm răng của đốt sống cổ 2",
    ["ụ nhô", "Chỗ nhô giữa đốt sống thắt lưng 5 và xương cùng."], "ống cùng", "khe cùng (lỗ dưới ống cùng)", "cuống cung đốt sống", "mảnh cung đốt sống"
  ]],
  ["Lồng ngực", [
    "lồng ngực", "xương ức", "cán xương ức", "thân xương ức", "mỏm mũi kiếm", ["xương sườn", "12 đôi xương sườn."],
    ["xương sườn thật", "Sườn 1–7; nối trực tiếp với xương ức."], ["xương sườn giả", "Sườn 8–10; nối qua cung sườn."], ["xương sườn cụt (sườn tự do)", "Sườn 11 và 12."],
    "sụn sườn", "cung sườn", "khoang liên sườn", "hõm ức (khuyết cảnh xương ức)", ["góc ức", "Mốc sờ được: chỗ khớp của xương sườn 2."],
    "lỗ trên lồng ngực", "lỗ dưới lồng ngực"
  ]],
  ["Đai vai và chi trên", [
    "đai vai", "xương đòn", "xương bả vai", "mỏm cùng vai", "ổ chảo", "mỏm quạ", "xương cánh tay", "chỏm xương cánh tay",
    ["cổ phẫu thuật xương cánh tay", "Vị trí gãy xương thường gặp ở người cao tuổi."], ["xương quay", "Ở phía ngón cái."], ["xương trụ", "Ở phía ngón út."], "mỏm khuỷu",
    ["các xương cổ tay", "8 xương xếp thành hai hàng."], "xương thuyền (cổ tay)", "xương nguyệt", "xương tháp", "xương đậu", "xương thang", "xương thê", "xương cả",
    "xương móc", "các xương đốt bàn tay", ["các đốt ngón tay/ngón chân", "Số ít: Phalanx."], "đốt gần", "đốt giữa", "đốt xa", "gai vai",
    "củ lớn xương cánh tay", "củ bé xương cánh tay", ["rãnh gian củ", "Chứa gân đầu dài cơ nhị đầu."],
    ["mỏm trên lồi cầu trong xương cánh tay", "Nơi dây thần kinh trụ đi qua („xương nhạc sĩ“)."], ["mỏm trên lồi cầu ngoài xương cánh tay", "Đau trong bệnh „khuỷu tay quần vợt“."],
    "chỏm xương quay", "mỏm trâm xương quay", "mỏm trâm xương trụ"
  ]],
  ["Đai chậu và chi dưới", [
    "đai chậu", ["xương chậu (xương hông)", "Do xương cánh chậu, xương ngồi và xương mu dính liền."], "xương cánh chậu", "mào chậu",
    ["gai chậu trước trên", "Mốc định vị khi tiêm bắp vùng mông bên (ventrogluteal)."], "xương ngồi", "ụ ngồi", "xương mu", "khớp mu", "ổ cối",
    ["xương đùi", "Xương dài nhất cơ thể."], "chỏm xương đùi", ["cổ xương đùi", "Gãy cổ xương đùi: hậu quả thường gặp khi té ngã ở người cao tuổi."],
    "mấu chuyển lớn", "mấu chuyển bé", ["xương bánh chè", "Xương vừng lớn nhất."], "xương chày", "xương mác", "mắt cá trong", "mắt cá ngoài",
    ["các xương cổ chân", "7 xương."], "xương sên", "xương gót", "xương thuyền (cổ chân)", "xương hộp", ["các xương chêm", "3 xương chêm."],
    "các xương đốt bàn chân", "cánh xương chậu", "gai chậu sau trên", "lỗ bịt", ["đường ráp (xương đùi)", "Nơi bám của các cơ khép."],
    "lồi cầu trong xương đùi", "lồi cầu ngoài xương đùi", ["lồi củ xương chày", "Nơi bám của dây chằng bánh chè."],
    ["chỏm xương mác", "Dây thần kinh mác đi qua đây – nguy cơ bị chèn ép khi đặt tư thế!"], "vòm dọc bàn chân", "vòm ngang bàn chân"
  ]]
] };

VI_ANATOMIE.gelenke = { ten: "Khớp và dây chằng", gruppen: [
  ["Đại cương", [
    ["khớp", "Tiếng Hy Lạp: Arthron."], ["khớp thật (khớp động)", "Có khe khớp."], ["khớp bất động", "Không có khe khớp (ví dụ khớp sụn hoặc dính xương)."],
    "bao khớp", "ổ khớp", ["màng hoạt dịch", "Lớp trong của bao khớp, tiết ra hoạt dịch."], "hoạt dịch", "sụn khớp", ["dây chằng", "Viết tắt: Lig., số nhiều Ligg."],
    ["sụn chêm", "Đĩa sụn hình bán nguyệt."], "đĩa khớp", "túi hoạt dịch", ["lớp xơ của bao khớp", "Lớp ngoài, chắc của bao khớp."], "sụn viền",
    ["khớp sợi (dây chằng)", "Ví dụ giữa xương chày và xương mác."], ["khớp sụn", "Ví dụ sụn tiếp hợp."], ["dính xương", "Ví dụ xương cùng."],
    ["khớp bán động (sụn sợi)", "Ví dụ khớp mu."], ["màng gian cốt", "Ví dụ giữa xương trụ và xương quay."]
  ]],
  ["Các loại khớp", [
    ["khớp chỏm cầu", "Ví dụ khớp vai và khớp háng; 3 bậc tự do."], ["khớp bản lề", "Ví dụ khớp gian đốt giữa ngón tay; 1 bậc tự do."],
    ["khớp trụ (khớp xoay)", "Ví dụ khớp giữa đốt đội và đốt trục."], ["khớp yên", "Ví dụ khớp yên ngón cái."], ["khớp elip", "Ví dụ khớp cổ tay gần."],
    ["khớp phẳng", "Ví dụ khớp mỏm khớp đốt sống."], ["khớp hai lồi cầu (bản lề xoay)", "Ví dụ khớp gối."]
  ]],
  ["Các khớp quan trọng", [
    "khớp thái dương – hàm", "khớp đội – chẩm (khớp đầu trên)", "khớp đội – trục (khớp đầu dưới)", ["khớp vai", "Khớp cử động linh hoạt nhất cơ thể."],
    "khớp cùng vai – đòn", "khớp khuỷu", "khớp quay – cổ tay (khớp cổ tay gần)", "khớp yên ngón cái", "khớp cùng – chậu", "khớp háng",
    ["khớp gối", "Khớp lớn nhất cơ thể."], "khớp cổ chân trên (khớp sên – cẳng chân)", "khớp cổ chân dưới (khớp dưới sên)", "khớp ức – đòn",
    "các khớp mỏm khớp đốt sống (khớp diện)", "khớp cánh tay – trụ", "khớp cánh tay – quay", "khớp quay – trụ trên", "khớp quay – trụ dưới",
    "khớp giữa các xương cổ tay (khớp cổ tay xa)", "các khớp bàn – ngón tay", "các khớp gian đốt ngón tay", "khớp đùi – bánh chè", "các khớp bàn – ngón chân"
  ]],
  ["Các dây chằng quan trọng", [
    "dây chằng chéo trước", "dây chằng chéo sau", "dây chằng bên chày (bên trong gối)", "dây chằng bên mác (bên ngoài gối)", "sụn chêm trong", "sụn chêm ngoài",
    "dây chằng bánh chè", "dây chằng bẹn", "dây chằng dọc trước (cột sống)", "dây chằng dọc sau (cột sống)", ["dây chằng vàng", "Nối các cung đốt sống."],
    ["dây chằng sên – mác trước", "Hay bị tổn thương khi lật cổ chân."], "sụn viền ổ chảo", "sụn viền ổ cối", "dây chằng chỏm đùi",
    ["dây chằng chậu – đùi", "Dây chằng khỏe nhất cơ thể."], "dây chằng delta (bên trong cổ chân)", ["dây chằng ngang đốt đội", "Giữ mỏm răng đốt trục đúng vị trí."],
    "túi hoạt dịch dưới mỏm cùng vai", "túi hoạt dịch trước xương bánh chè", "khối mỡ dưới bánh chè (thể mỡ Hoffa)",
    ["mạc giữ gân gấp", "Tạo thành mái của ống cổ tay."], ["ống cổ tay", "Dây thần kinh giữa đi qua đây."]
  ]]
] };

VI_ANATOMIE.muskeln = { ten: "Hệ cơ", gruppen: [
  ["Đại cương", [
    ["cơ", "Viết tắt: M., số nhiều Mm. Tiếng Hy Lạp: Mys/Myo-."], "gân", "nguyên ủy (của cơ)", "bám tận (của cơ)", "bụng cơ", "bao hoạt dịch gân", "cân gân",
    "cơ thắt", ["cơ chủ vận", "Cơ thực hiện một cử động."], ["cơ đối vận", "Cơ đối kháng của một cơ."], ["cơ vân", "Điều khiển theo ý muốn (cơ xương)."],
    ["cơ trơn", "Không theo ý muốn, ví dụ ở ruột và mạch máu."], "trương lực cơ", "co cơ", ["co đẳng trường", "Lực căng tăng, chiều dài không đổi."],
    ["co đẳng trương", "Chiều dài thay đổi, lực căng không đổi."], ["teo cơ", "Ví dụ do ít vận động."], ["phì đại", "Tăng kích thước do tế bào to ra."],
    ["co rút (cứng khớp)", "Hạn chế vận động lâu dài – phòng ngừa là nhiệm vụ của điều dưỡng."]
  ]],
  ["Đầu và cổ", [
    "cơ cắn", "cơ thái dương", ["cơ vòng mắt", "Nhắm mắt."], "cơ vòng miệng", "cơ mút (cơ thổi kèn)", "cơ chẩm – trán",
    ["cơ ức – đòn – chũm", "Xoay đầu về phía đối diện."], "cơ bám da cổ", ["các cơ bậc thang", "Cơ hô hấp phụ."], "cơ chân bướm trong", "cơ chân bướm ngoài",
    ["các cơ biểu cảm (cơ bám da mặt)", "Do dây thần kinh mặt chi phối."], "cơ gò má lớn (cơ cười)", "cơ cau mày", "cơ hai bụng", "các cơ trên móng",
    "các cơ dưới móng", "cơ gối đầu"
  ]],
  ["Thân mình", [
    "cơ thang", "cơ lưng rộng", ["cơ dựng sống", "Hệ cơ lưng sâu."], "các cơ trám", "cơ ngực lớn", "cơ ngực bé", "cơ răng trước",
    ["các cơ liên sườn", "Cơ liên sườn ngoài: hít vào; cơ liên sườn trong: thở ra."], ["cơ hoành", "Cơ hô hấp quan trọng nhất. Do dây thần kinh hoành chi phối."],
    "cơ thẳng bụng", "cơ chéo bụng ngoài", "cơ chéo bụng trong", "cơ ngang bụng", ["cơ thắt lưng – chậu", "Cơ gấp háng mạnh nhất."],
    ["cơ nâng hậu môn", "Phần chính của sàn chậu."], "sàn chậu (hoành chậu)", "cơ nâng vai", "cơ vuông thắt lưng", "cơ thắt lưng lớn", "cơ chậu",
    ["đường trắng giữa", "Đường giữa bằng gân của thành bụng."], "bao cơ thẳng bụng", ["ống bẹn", "Điểm yếu của thành bụng – nơi xảy ra thoát vị bẹn."], "vòng rốn"
  ]],
  ["Chi trên", [
    ["cơ delta", "Vị trí có thể tiêm bắp (thể tích nhỏ)."], ["cơ trên gai", "Thuộc chóp xoay vai."], ["cơ dưới gai", "Thuộc chóp xoay vai."],
    ["cơ tròn bé", "Thuộc chóp xoay vai."], ["cơ dưới vai", "Thuộc chóp xoay vai."], "cơ tròn lớn", ["cơ nhị đầu cánh tay", "Gấp khuỷu và ngửa cẳng tay."],
    ["cơ tam đầu cánh tay", "Duỗi khuỷu."], "cơ cánh tay", "cơ cánh tay – quay", "các cơ gấp cẳng tay", "các cơ duỗi cẳng tay", "ô mô ngón cái", "ô mô ngón út",
    "cơ quạ – cánh tay", "cơ sấp tròn", "cơ ngửa", "cơ gấp cổ tay quay", "cơ gấp cổ tay trụ", "cơ gấp các ngón nông", "cơ gấp các ngón sâu", "cơ duỗi các ngón",
    "cơ duỗi cổ tay quay dài", "cơ dạng ngón cái ngắn", "cơ đối ngón cái", "các cơ gian cốt", "các cơ giun"
  ]],
  ["Chi dưới", [
    "cơ mông lớn", ["cơ mông nhỡ", "Cơ đích của tiêm bắp vùng mông bên (ventrogluteal)."], "cơ mông bé", ["cơ tứ đầu đùi", "Duỗi khớp gối."], "cơ thẳng đùi",
    ["cơ rộng ngoài", "Vị trí có thể tiêm bắp."], "cơ rộng trong", ["cơ may", "Cơ dài nhất cơ thể."], "các cơ khép đùi",
    ["nhóm cơ ụ ngồi – cẳng chân", "Gấp gối: cơ nhị đầu đùi, cơ bán gân, cơ bán màng."], "cơ nhị đầu đùi", ["cơ tam đầu cẳng chân", "Gồm cơ bụng chân và cơ dép."],
    "cơ bụng chân", "cơ dép", ["gân gót (gân Achilles)", "Gân khỏe nhất cơ thể."], ["cơ chày trước", "Nâng bàn chân (gấp mu)."], "cơ căng mạc đùi",
    "dải chậu – chày", "cơ hình lê", "cơ thon", "cơ lược", "cơ khép dài", "cơ khép lớn", "cơ bán gân", "cơ bán màng", "cơ rộng giữa",
    ["chân ngỗng", "Chỗ bám chung của cơ may, cơ thon và cơ bán gân."], "cơ khoeo", ["cơ mác dài", "Đồng nghĩa: M. peroneus longus."], "cơ mác ngắn",
    "cơ chày sau", "cơ duỗi ngón chân cái dài", "cơ duỗi các ngón chân dài", "cơ gấp ngón chân cái dài", "cân gan chân"
  ]]
] };

VI_ANATOMIE.herz = { ten: "Tim", gruppen: [
  ["Cấu tạo", [
    ["tim", "Cơ quan rỗng bằng cơ nằm trong trung thất, to bằng nắm tay (khoảng 300 g). Có 4 buồng (2 tâm nhĩ, 2 tâm thất) và 4 van; khi nghỉ bơm khoảng 5 lít máu mỗi phút qua vòng tuần hoàn phổi và vòng tuần hoàn cơ thể. Các lớp thành tim: nội tâm mạc, cơ tim, thượng tâm mạc. Tiếng Hy Lạp: Kardia."],
    "màng ngoài tim", ["thượng tâm mạc", "Lá trong của màng ngoài tim."], "cơ tim (lớp cơ tim)", "nội tâm mạc", "tâm nhĩ phải", "tâm nhĩ trái",
    ["tâm thất phải", "Bơm máu vào vòng tuần hoàn phổi."], ["tâm thất trái", "Bơm máu vào vòng tuần hoàn cơ thể."], "tiểu nhĩ", "vách liên nhĩ", "vách liên thất",
    "mỏm tim", "đáy tim", "màng ngoài tim sợi", ["màng ngoài tim thanh mạc", "Lá tạng (thượng tâm mạc) và lá thành."],
    ["khoang màng ngoài tim", "Chứa một ít dịch giúp tim trượt dễ dàng."], "các bè cơ", "nón động mạch (đường ra thất phải)",
    ["hố bầu dục", "Di tích của lỗ bầu dục thời bào thai ở vách liên nhĩ."], "rãnh vành", "rãnh liên thất trước",
    ["mỏm tim đập", "Sờ thấy ở khoang liên sườn 5 bên trái, trên đường giữa đòn."], "tế bào cơ tim"
  ]],
  ["Van tim", [
    ["van ba lá", "Van nhĩ – thất giữa tâm nhĩ phải và tâm thất phải."], ["van hai lá", "Van nhĩ – thất giữa tâm nhĩ trái và tâm thất trái; đồng nghĩa: Valva bicuspidalis."],
    ["van động mạch phổi", "Van tổ chim."], ["van động mạch chủ", "Van tổ chim."], "các thừng gân", "các cơ nhú", ["các van nhĩ – thất", "Van ba lá và van hai lá."],
    ["các van tổ chim (van bán nguyệt)", "Van động mạch chủ và van động mạch phổi."], "lỗ nhĩ – thất phải", "lỗ nhĩ – thất trái",
    ["khung xương tim", "Mặt phẳng van bằng mô liên kết; ngăn cách về điện giữa tâm nhĩ và tâm thất."]
  ]],
  ["Tạo nhịp và dẫn truyền", [
    ["nút xoang", "Nút tạo nhịp chính, khoảng 60–80 lần/phút."], ["nút nhĩ – thất (nút AV)", "Nút tạo nhịp thứ hai, khoảng 40–50 lần/phút."], "bó His",
    ["các nhánh Tawara", "Nhánh phải và nhánh trái của bó His."], "các sợi Purkinje", ["tâm thu", "Giai đoạn căng và giai đoạn tống máu."],
    ["tâm trương", "Giai đoạn giãn và giai đoạn đổ đầy."], ["tần số tim", "Người lớn khi nghỉ khoảng 60–80 lần/phút."], ["nhịp tim nhanh", "Tần số tim trên 100 lần/phút."],
    ["nhịp tim chậm", "Tần số tim dưới 60 lần/phút."], "loạn nhịp tim"
  ]],
  ["Mạch vành", [
    "động mạch vành phải (RCA)", "động mạch vành trái (LCA)", "nhánh liên thất trước (LAD)", "nhánh mũ (RCX)", ["xoang vành", "Thu nhận máu tĩnh mạch của tim."],
    "nhánh liên thất sau", "nhánh bờ", "tĩnh mạch tim lớn", "các tĩnh mạch tim"
  ]],
  ["Tuần hoàn thai nhi", [
    ["lỗ bầu dục", "Đường thông giữa hai tâm nhĩ ở thai nhi."], ["ống động mạch (ống Botalli)", "Đường thông giữa thân động mạch phổi và động mạch chủ ở thai nhi."],
    "dây chằng động mạch (di tích của ống động mạch)", ["ống tĩnh mạch (Arantius)", "Ở thai nhi, giúp máu đi tắt qua gan."],
    ["tĩnh mạch rốn", "Đưa máu giàu oxy từ nhau thai đến thai nhi."], ["các động mạch rốn", "Đưa máu nghèo oxy về nhau thai."]
  ]]
] };

VI_ANATOMIE.gefaesse = { ten: "Mạch máu và tuần hoàn", gruppen: [
  ["Đại cương", [
    ["động mạch", "Dẫn máu đi ra khỏi tim. Viết tắt: A., số nhiều Aa."], ["tĩnh mạch", "Dẫn máu về tim. Viết tắt: V., số nhiều Vv. Tiếng Hy Lạp: Phlebs."],
    "tiểu động mạch", "tiểu tĩnh mạch", ["mao mạch", "Nơi trao đổi chất."], "lớp áo trong của thành mạch", ["lớp áo giữa của thành mạch", "Lớp cơ."],
    ["lớp áo ngoài của thành mạch", "Đồng nghĩa: Adventitia."], "van tĩnh mạch", "nối mạch (tiếp nối)", "vòng tuần hoàn máu", "mạch (mạch đập)",
    "mạch máu nuôi thành mạch", "vòng tuần hoàn phổi (vòng nhỏ)", "vòng tuần hoàn cơ thể (vòng lớn)",
    ["hệ tĩnh mạch cửa", "Máu từ dạ dày, ruột và lách đi qua gan trước."],
    ["góc tĩnh mạch", "Nơi hợp lưu của tĩnh mạch cảnh trong và tĩnh mạch dưới đòn; bạch huyết đổ vào đây."]
  ]],
  ["Động mạch", [
    "động mạch chủ", "động mạch chủ lên", "cung động mạch chủ", "động mạch chủ ngực", "động mạch chủ bụng", "thân động mạch cánh tay – đầu",
    ["động mạch cảnh chung", "Bắt mạch ở cổ."], ["động mạch cảnh trong", "Cấp máu cho não."], "động mạch cảnh ngoài", "động mạch đốt sống",
    "vòng động mạch não (đa giác Willis)", "động mạch thái dương nông", "động mạch dưới đòn", "động mạch nách", ["động mạch cánh tay", "Được nghe khi đo huyết áp."],
    ["động mạch quay", "Vị trí bắt mạch thông thường."], "động mạch trụ", "thân động mạch phổi", ["các động mạch phổi", "Dẫn máu nghèo oxy!"], "thân tạng",
    "động mạch mạc treo tràng trên", "động mạch mạc treo tràng dưới", "động mạch thận", "động mạch chậu chung", "động mạch chậu ngoài", "động mạch chậu trong",
    ["động mạch đùi", "Bắt mạch ở bẹn."], "động mạch khoeo", "động mạch chày trước", ["động mạch chày sau", "Bắt mạch ở sau mắt cá trong."],
    ["động mạch mu chân", "Bắt mạch ở mu bàn chân."], ["động mạch chủ xuống", "Gồm động mạch chủ ngực và động mạch chủ bụng."],
    ["động mạch mặt", "Bắt mạch ở bờ xương hàm dưới."], "động mạch ngực trong", "các động mạch liên sườn sau", "động mạch gan chung", "động mạch vị trái",
    ["động mạch lách", "Đồng nghĩa: A. lienalis."], "cung động mạch gan tay nông", "các động mạch ngón tay", "động mạch đùi sâu", "động mạch mác",
    ["động mạch nền", "Hình thành từ hai động mạch đốt sống."], "động mạch não trước", ["động mạch não giữa", "Hay bị tổn thương nhất trong đột quỵ."],
    "động mạch não sau", "động mạch mắt"
  ]],
  ["Tĩnh mạch", [
    "tĩnh mạch chủ trên", "tĩnh mạch chủ dưới", ["các tĩnh mạch phổi", "Dẫn máu giàu oxy!"], ["tĩnh mạch cảnh trong", "Đường đặt catheter tĩnh mạch trung tâm (CVC)."],
    "tĩnh mạch cảnh ngoài", ["tĩnh mạch dưới đòn", "Đường đặt catheter tĩnh mạch trung tâm (CVC)."], "tĩnh mạch đầu (ở cánh tay)", "tĩnh mạch nền",
    ["tĩnh mạch giữa khuỷu", "Vị trí lấy máu thường gặp nhất."], ["tĩnh mạch cửa", "Đưa máu giàu chất dinh dưỡng từ ruột về gan."], "các tĩnh mạch gan",
    "tĩnh mạch thận", "tĩnh mạch đùi", "tĩnh mạch hiển lớn", "tĩnh mạch hiển bé", "các xoang tĩnh mạch màng cứng", "tĩnh mạch cánh tay – đầu", "tĩnh mạch nách",
    ["mạng tĩnh mạch mu tay", "Vị trí thường đặt kim luồn tĩnh mạch ngoại vi."], "tĩnh mạch đơn", "tĩnh mạch mạc treo tràng trên", "tĩnh mạch lách",
    "tĩnh mạch chậu chung", "tĩnh mạch khoeo", "các tĩnh mạch chày", ["các tĩnh mạch xuyên", "Nối tĩnh mạch nông và tĩnh mạch sâu ở chân."], "đám rối tĩnh mạch"
  ]]
] };

VI_ANATOMIE.blut = { ten: "Máu, bạch huyết và miễn dịch", gruppen: [
  ["Máu", [
    ["máu", "Tiếng Hy Lạp: Haima (Häm-, Häma-)."], ["huyết tương", "Phần lỏng của máu, chứa các yếu tố đông máu."], ["huyết thanh", "Huyết tương không có yếu tố đông máu."],
    ["hồng cầu", "Vận chuyển oxy."], "huyết sắc tố (hemoglobin)", ["bạch cầu", "Có chức năng bảo vệ cơ thể."], "bạch cầu đa nhân trung tính",
    ["bạch cầu ưa axit (ưa eosin)", "Tăng khi dị ứng và nhiễm giun."], "bạch cầu ưa bazơ", ["tế bào lympho", "Lympho B và T: miễn dịch đặc hiệu."], "bạch cầu mono",
    "đại thực bào", ["tiểu cầu", "Cầm máu."], "sự tạo máu", "cầm máu", "đông máu", ["fibrinogen", "Được chuyển thành fibrin."], ["fibrin", "Chất sợi của cục máu đông."],
    ["thrombin", "Chuyển fibrinogen thành fibrin."], ["hematocrit", "Tỉ lệ tế bào máu trong thể tích máu."],
    ["albumin", "Protein huyết tương quan trọng nhất; giữ nước trong lòng mạch."], "globulin", ["sắt", "Thành phần cấu tạo hemoglobin."], ["hồng cầu lưới", "Hồng cầu non."],
    "bạch cầu hạt", ["tế bào lympho B", "Tạo kháng thể thông qua tương bào."], ["tế bào lympho T", "Miễn dịch tế bào."], ["tương bào", "Tế bào sản xuất kháng thể."],
    ["mẫu tiểu cầu", "Tế bào khổng lồ trong tủy xương; tạo tiểu cầu."],
    ["huyết khối (cục máu đông)", "Bám cố định trong lòng mạch – phòng ngừa huyết khối là nhiệm vụ của điều dưỡng."],
    ["cục tắc mạch (embolus)", "Cục bị cuốn trôi theo dòng máu, ví dụ trong thuyên tắc phổi."]
  ]],
  ["Cơ quan bạch huyết", [
    "bạch huyết, dịch kẽ", "mạch bạch huyết", ["hạch bạch huyết", "Đồng nghĩa: Lymphonodus, Nodus lymphaticus."],
    ["ống ngực", "Mạch bạch huyết lớn nhất; đổ vào góc tĩnh mạch trái."], "ống bạch huyết phải", ["lách", "Đồng nghĩa: Lien."],
    ["tuyến ức", "Nơi biệt hóa tế bào lympho T."], "amidan khẩu cái", "amidan hầu (VA)", "amidan lưỡi", ["vòng bạch huyết hầu", "Vòng Waldeyer."],
    ["bể dưỡng chấp", "Điểm khởi đầu của ống ngực."], "hạch bạch huyết cổ", "hạch bạch huyết nách", "hạch bạch huyết bẹn", ["mảng Peyer", "Mô bạch huyết ở hồi tràng."],
    ["tủy đỏ (lách)", "Phân hủy hồng cầu già."], ["tủy trắng (lách)", "Mô bạch huyết."]
  ]],
  ["Hệ miễn dịch", [
    "hệ miễn dịch", ["kháng nguyên", "Chất gây ra phản ứng miễn dịch."], ["kháng thể", "Đồng nghĩa: globulin miễn dịch (Ig)."],
    ["globulin miễn dịch", "Các lớp: IgG, IgA, IgM, IgE, IgD."],
    ["viêm", "Đuôi từ: -itis. Dấu hiệu: Rubor (đỏ), Calor (nóng), Dolor (đau), Tumor (sưng), Functio laesa (mất chức năng)."], "miễn dịch, khả năng đề kháng",
    ["thực bào", "Tế bào ăn nuốt và tiêu hóa mầm bệnh."], "hệ bổ thể", ["histamin", "Trung gian của phản ứng dị ứng."], "dị ứng", "tiêm chủng", "mủ", "sốt"
  ]]
] };

VI_ANATOMIE.atmung = { ten: "Hệ hô hấp", gruppen: [
  ["Đường hô hấp trên", [
    ["mũi", "Tiếng Hy Lạp: Rhis (Rhino-)."], "khoang mũi", "vách ngăn mũi", "các xoăn mũi", "lỗ mũi sau", "hầu (họng)", ["tỵ hầu (họng mũi)", "Pars nasalis pharyngis."],
    ["khẩu hầu (họng miệng)", "Pars oralis pharyngis."], ["thanh hầu (hạ họng)", "Pars laryngea pharyngis."], "thanh quản",
    ["nắp thanh môn", "Đóng lối vào thanh quản khi nuốt."], ["sụn giáp", "Tạo thành „trái cổ (yết hầu)“."], "sụn nhẫn", "các sụn phễu", "nếp thanh âm (dây thanh)",
    "thanh môn", "tiền đình mũi", "các lỗ mũi", "các ngách mũi", "nếp tiền đình (dây thanh giả)", "dây chằng thanh âm", "khoang thanh quản", "lối vào thanh quản"
  ]],
  ["Đường hô hấp dưới và phổi", [
    "khí quản", "chỗ chia đôi khí quản", ["phế quản chính", "Phế quản phải dốc hơn – dị vật thường rơi vào bên phải."], "các phế quản thùy", "các phế quản phân thùy",
    "tiểu phế quản", "tiểu phế quản hô hấp", ["phế nang", "Nơi trao đổi khí."], ["chất hoạt diện (surfactant)", "Làm giảm sức căng bề mặt trong phế nang."],
    ["phổi", "Cơ quan đôi trao đổi khí trong lồng ngực, được màng phổi bao bọc. Bên phải 3 thùy, bên trái 2 thùy; khoảng 300 triệu phế nang với diện tích trao đổi khoảng 100 m². Tiếng Hy Lạp: Pneumon."],
    "thùy trên", ["thùy giữa", "Chỉ có ở phổi phải."], "thùy dưới", "đỉnh phổi", "rốn phổi", "màng phổi", "lá tạng màng phổi", "lá thành màng phổi", "khoang màng phổi",
    "trung thất", ["các sụn khí quản", "Hình móng ngựa, hở ở phía sau."], "thành màng phía sau khí quản", ["cựa khí quản (carina)", "Gờ tại chỗ chia đôi khí quản."],
    "phế quản chính phải", "phế quản chính trái", ["các phân thùy phổi", "Bên phải 10, bên trái 9–10."], "ống phế nang", "túi phế nang",
    ["tế bào phế nang type I", "Tạo thành vách mỏng để trao đổi khí."], ["tế bào phế nang type II", "Sản xuất surfactant."], "rãnh liên thùy chéo",
    ["rãnh liên thùy ngang", "Chỉ có ở phổi phải."], "lưỡi phổi trái", "đáy phổi", "màng phổi trung thất", "màng phổi hoành",
    ["ngách sườn – hoành", "Nơi dịch tràn màng phổi tích tụ đầu tiên."]
  ]],
  ["Quá trình hô hấp", [
    "hô hấp, sự thở", "hít vào", "thở ra", "thông khí phổi", ["khuếch tán", "Trao đổi khí giữa phế nang và máu."],
    ["tần số thở", "Người lớn khi nghỉ khoảng 12–18 lần/phút."], ["thể tích khí lưu thông", "Khoảng 500 ml khi nghỉ."],
    ["dung tích sống", "Thể tích tối đa có thể hít vào và thở ra."], "thở bình thường khi nghỉ", "khó thở", "khó thở nặng, chỉ chịu được khi ngồi", "thở nhanh",
    "thở chậm", "ngừng thở", ["tăng thông khí", "Thở tăng mức làm giảm CO₂."], ["tím tái", "Dấu hiệu thiếu oxy."]
  ]]
] };

VI_ANATOMIE.verdauung = { ten: "Hệ tiêu hóa", gruppen: [
  ["Khoang miệng", [
    ["khoang miệng", "Tiếng Hy Lạp: Stoma."], ["môi", "Tiếng Hy Lạp: Cheilos."], "khẩu cái cứng", "khẩu cái mềm (màn hầu)", "lưỡi gà", ["lưỡi", "Tiếng Hy Lạp: Glossa."],
    ["răng", "Tiếng Hy Lạp: Odous (Odont-). Người lớn: 32 răng."], "răng cửa", "răng nanh", "răng tiền hàm", "răng hàm (răng cối)", "men răng", "ngà răng", "tủy răng",
    "lợi (nướu)", "tuyến nước bọt mang tai", "tuyến nước bọt dưới hàm", "tuyến nước bọt dưới lưỡi", "nước bọt", "tiền đình miệng", "hãm lưỡi (thắng lưỡi)", "lưng lưỡi",
    "gốc lưỡi", "eo họng", "cung khẩu cái – lưỡi (cung trước)", "cung khẩu cái – hầu (cung sau)", ["răng sữa", "20 răng."], ["răng vĩnh viễn", "32 răng."],
    "thân răng", "cổ răng", "chân răng", "xê măng răng", "mô nha chu", "huyệt răng", ["ống tuyến mang tai", "Đổ ra đối diện răng hàm trên thứ hai."]
  ]],
  ["Thực quản và dạ dày", [
    ["thực quản", "Dài khoảng 25 cm."], ["dạ dày", "Đồng nghĩa: Ventriculus."], "tâm vị", "đáy vị", "thân vị", "hang môn vị", "môn vị", "bờ cong lớn", "bờ cong nhỏ",
    "các nếp niêm mạc dạ dày", "dưỡng trấp (thức ăn đã nhào trộn)", ["lỗ thực quản của cơ hoành", "Vị trí thoát vị khe hoành."], "lỗ tâm vị",
    "lớp cơ (của thành cơ quan)", "lớp dưới niêm mạc", ["tế bào thành (tế bào viền)", "Tiết axit clohydric và yếu tố nội."], ["tế bào chính", "Tiết pepsinogen."],
    "axit clohydric (axit dạ dày)", ["pepsin", "Enzym phân giải protein."], ["đám rối cơ ruột (Auerbach)", "Điều khiển nhu động ruột."], "đám rối dưới niêm mạc (Meissner)"
  ]],
  ["Ruột", [
    ["ruột", "Tiếng Hy Lạp: Enteron."], "ruột non", "tá tràng", ["nhú tá lớn", "Nơi đổ của ống mật và ống tụy (nhú Vater)."], "hỗng tràng", "hồi tràng", "nhung mao ruột",
    "ruột già", "van hồi – manh tràng (van Bauhin)", "manh tràng", ["ruột thừa", "Dân gian thường gọi nhầm là „manh tràng“."], "đại tràng", "đại tràng lên",
    "góc đại tràng phải (góc gan)", "đại tràng ngang", "góc đại tràng trái (góc lách)", "đại tràng xuống", "đại tràng sigma", ["trực tràng", "Tiếng Hy Lạp: Proktos."],
    "ống hậu môn", "hậu môn", ["cơ thắt hậu môn trong", "Không theo ý muốn."], ["cơ thắt hậu môn ngoài", "Theo ý muốn."],
    ["nhu động", "Các cơn co cơ dạng sóng để đẩy thức ăn đi."], "phân", "các nếp vòng (nếp Kerckring)", "góc tá – hỗng tràng", "các dải cơ dọc đại tràng",
    "các bướu đại tràng", "bóng trực tràng", ["đám rối trĩ (thể hang trực tràng)", "Thể hang giúp đóng kín hậu môn."], "cơ mu – trực tràng"
  ]],
  ["Gan, mật, tụy", [
    ["gan", "Tuyến lớn nhất của cơ thể."], "thùy gan phải", "thùy gan trái", "cửa gan", "tế bào gan", ["túi mật", "Đồng nghĩa: Vesica fellea. Tiếng Hy Lạp: Cholecystis."],
    ["mật", "Đồng nghĩa: Fel. Tiếng Hy Lạp: Chole."], "ống gan chung", "ống túi mật", "ống mật chủ", "tụy", "đầu tụy", "thân tụy", "đuôi tụy", ["ống tụy", "Ống Wirsung."],
    "thùy đuôi", "thùy vuông", "dây chằng liềm", ["dây chằng tròn gan", "Di tích của tĩnh mạch rốn."], "tiểu thùy gan", "các xoang mạch gan", "tế bào Kupffer",
    "các tiểu quản mật", "bóng gan – tụy (bóng Vater)", "cơ thắt Oddi", "ống tụy phụ", ["phần ngoại tiết của tụy", "Tiết các enzym tiêu hóa."],
    ["amylase", "Phân giải carbohydrat."], ["lipase", "Phân giải chất béo."], ["trypsin", "Phân giải protein."]
  ]],
  ["Phúc mạc", [
    "phúc mạc", "phúc mạc thành", "phúc mạc tạng", "khoang phúc mạc", ["khoang sau phúc mạc", "Khoang phía sau phúc mạc (ví dụ thận)."], "mạc treo ruột non",
    "mạc nối lớn", "mạc nối nhỏ", "túi mạc nối", "mạc treo đại tràng", ["túi cùng Douglas (trực tràng – tử cung)", "Điểm thấp nhất của ổ bụng ở nữ."],
    "túi cùng trực tràng – bàng quang", ["các cơ quan trong phúc mạc", "Được phúc mạc bao phủ hoàn toàn, ví dụ dạ dày."],
    ["các cơ quan sau phúc mạc", "Nằm sau phúc mạc, ví dụ thận."]
  ]],
  ["Quá trình tiêu hóa", [
    "nhai", "nuốt", "tiêu hóa", "hấp thu (chất dinh dưỡng)", "đại tiện", ["nôn", "Đồng nghĩa: Emesis."], "buồn nôn", "táo bón", "tiêu chảy", "đầy hơi, chướng bụng",
    ["rối loạn nuốt (nuốt khó)", "Nguy cơ hít sặc – cần chú ý khi hỗ trợ ăn uống."], "ợ hơi", "nấc cụt"
  ]]
] };

VI_ANATOMIE.harn = { ten: "Thận và đường tiết niệu", gruppen: [
  ["Thận", [
    ["thận", "Cơ quan đôi hình hạt đậu nằm sau phúc mạc. Lọc khoảng 180 lít nước tiểu đầu mỗi ngày, điều hòa cân bằng nước, điện giải, toan – kiềm và huyết áp (renin), đồng thời sản xuất erythropoietin. Tiếng Hy Lạp: Nephros."],
    "bao xơ thận", "vỏ thận", "tủy thận", "các tháp thận", "các đài thận", ["bể thận", "Tiếng Hy Lạp: Pyelon."], "rốn thận",
    ["nephron (đơn vị thận)", "Đơn vị chức năng của thận; khoảng 1 triệu ở mỗi thận."], "tiểu thể thận", ["cầu thận", "Tạo nước tiểu đầu (khoảng 180 lít/ngày)."],
    "bao Bowman", "ống lượn gần", "quai Henle", "ống lượn xa", "ống góp", ["bộ máy cận cầu thận", "Tiết renin."], "bao mỡ thận", "mạc thận", "các cột thận",
    "các nhú thận", "xoang thận", "cực trên thận", "cực dưới thận", "tiểu động mạch đến", "tiểu động mạch đi",
    ["tế bào có chân (podocyte)", "Tế bào phủ mao mạch cầu thận."], "lọc cầu thận", ["nước tiểu đầu", "Khoảng 180 lít mỗi ngày."],
    ["tái hấp thu ở ống thận", "Khoảng 99 % nước tiểu đầu được tái hấp thu."]
  ]],
  ["Đường dẫn niệu", [
    ["nước tiểu", "Tiếng Hy Lạp: Uron."], "niệu quản", ["bàng quang", "Tiếng Hy Lạp: Kystis (Zyst-)."], "cơ bức niệu (cơ co bóp bàng quang)", "tam giác bàng quang",
    ["niệu đạo", "Nữ khoảng 4 cm, nam khoảng 20 cm."], "cơ thắt niệu đạo", "sự đi tiểu", "lỗ niệu quản", "lỗ niệu đạo trong", "lỗ niệu đạo ngoài", "cổ bàng quang",
    "đỉnh bàng quang", "đáy bàng quang", ["cơ thắt niệu đạo trong", "Không theo ý muốn."]
  ]],
  ["Bài tiết nước tiểu – thuật ngữ", [
    ["bài niệu", "Bình thường khoảng 1,5 lít mỗi ngày."], ["đa niệu", "Trên khoảng 2,5–3 lít nước tiểu mỗi ngày."], ["thiểu niệu", "Dưới 500 ml nước tiểu mỗi ngày."],
    ["vô niệu", "Dưới 100 ml nước tiểu mỗi ngày."], ["tiểu đêm", "Đi tiểu nhiều vào ban đêm."], ["tiểu nhiều lần", "Đi tiểu thường xuyên, mỗi lần ít."],
    ["tiểu khó, tiểu buốt", "Đi tiểu khó và đau."], ["tiểu máu", "Có máu trong nước tiểu."], ["protein niệu", "Có protein trong nước tiểu."], "bí tiểu", "tiểu không tự chủ"
  ]]
] };

VI_ANATOMIE.geschlecht = { ten: "Cơ quan sinh dục", gruppen: [
  ["Cơ quan sinh dục nam", [
    ["tinh hoàn", "Tiếng Hy Lạp: Orchis."], "bìu", "mào tinh hoàn", "ống dẫn tinh", "thừng tinh", ["túi tinh", "Đồng nghĩa: Vesicula seminalis."], "tuyến tiền liệt",
    "tuyến hành niệu đạo (tuyến Cowper)", ["dương vật", "Tiếng Hy Lạp: Phallos."], "quy đầu", "bao quy đầu", "thể hang dương vật", "tinh dịch", "tinh trùng",
    "lớp áo trắng tinh hoàn", "các ống sinh tinh", ["tế bào kẽ Leydig", "Tiết testosteron."], ["tế bào Sertoli", "Nâng đỡ và nuôi dưỡng tinh trùng."], "ống phóng tinh",
    "thể xốp dương vật", "hãm bao quy đầu", "sự sinh tinh", "tinh hoàn di chuyển xuống bìu"
  ]],
  ["Cơ quan sinh dục nữ", [
    ["buồng trứng", "Tiếng Hy Lạp: Oophoron."], "nang trứng", "thể vàng", "trứng (noãn)", ["vòi tử cung (vòi trứng)", "Tiếng Hy Lạp: Salpinx."], "tua vòi",
    ["tử cung", "Tiếng Hy Lạp: Metra, Hystera."], "đáy tử cung", "thân tử cung", "cổ tử cung", "phần âm đạo của cổ tử cung", "niêm mạc tử cung", "cơ tử cung",
    "thanh mạc tử cung", ["âm đạo", "Tiếng Hy Lạp: Kolpos."], "âm hộ", "môi lớn", "môi bé", "âm vật", "tiền đình âm đạo", "màng trinh", "gò mu", "tuyến vú", "núm vú",
    "quầng vú", "phễu vòi tử cung", ["bóng vòi tử cung", "Nơi xảy ra thụ tinh."], "eo vòi tử cung", "buồng tử cung", "eo tử cung", "ống cổ tử cung",
    "lỗ ngoài cổ tử cung", "dây chằng rộng", "dây chằng tròn", "dây chằng riêng buồng trứng", "vòm âm đạo", "tuyến Bartholin", "các ống dẫn sữa", "các thùy tuyến vú"
  ]],
  ["Chu kỳ, mang thai, sinh đẻ", [
    ["kinh nguyệt", "Đồng nghĩa: Menses."], "rụng trứng", "thụ thai", "thai kỳ", ["phôi", "Đến hết tuần phát triển thứ 8."], ["thai nhi", "Từ tuần phát triển thứ 9."],
    "nhau thai", "dây rốn", "màng ối", "nước ối", "sinh đẻ", "tiết sữa, thời kỳ cho con bú", "kỳ kinh đầu tiên", ["mãn kinh", "Kỳ kinh nguyệt cuối cùng."],
    "thời kỳ mãn kinh", "sự tạo trứng", "hợp tử (trứng đã thụ tinh)", "phôi nang", "sự làm tổ", "màng đệm", "màng rụng", "thời kỳ hậu sản", "sản dịch", "sữa non",
    ["phân su", "Phân đầu tiên của trẻ sơ sinh."], ["sinh non", "Trước khi đủ 37 tuần thai."]
  ]]
] };

VI_ANATOMIE.hormone = { ten: "Hệ nội tiết", gruppen: [
  ["Các tuyến nội tiết", [
    ["vùng dưới đồi", "Trung tâm điều khiển cấp cao của hệ nội tiết."], "tuyến yên", "thùy trước tuyến yên", "thùy sau tuyến yên", ["tuyến tùng", "Tiết melatonin."],
    "tuyến giáp", "eo tuyến giáp", ["tuyến cận giáp", "Thường có 4 tuyến."], "tuyến thượng thận", "vỏ thượng thận", "tủy thượng thận",
    ["đảo Langerhans", "Phần nội tiết của tụy."], "cuống tuyến yên", ["các nang tuyến giáp", "Dự trữ hormon tuyến giáp trong chất keo."],
    ["tế bào C (tế bào cận nang)", "Tiết calcitonin."], ["lớp cầu (vỏ thượng thận)", "Tiết aldosteron (mineralocorticoid)."],
    ["lớp bó (vỏ thượng thận)", "Tiết cortisol (glucocorticoid)."], ["lớp lưới (vỏ thượng thận)", "Tiết androgen."]
  ]],
  ["Hormon", [
    ["insulin", "Làm giảm đường huyết; do tế bào B của tụy tiết ra."], ["glucagon", "Làm tăng đường huyết; do tế bào A của tụy tiết ra."], ["thyroxin (T4)", "Hormon tuyến giáp."],
    ["triiodothyronin (T3)", "Hormon tuyến giáp có tác dụng mạnh nhất."], ["calcitonin", "Làm giảm nồng độ canxi máu."], ["parathormon", "Làm tăng nồng độ canxi máu."],
    ["cortisol", "Hormon stress của vỏ thượng thận."], ["aldosteron", "Điều hòa cân bằng natri và nước."], ["adrenalin", "Đồng nghĩa: epinephrin. Do tủy thượng thận tiết ra."],
    ["noradrenalin", "Đồng nghĩa: norepinephrin."], "hormon tăng trưởng (GH)", "hormon hướng vỏ thượng thận (ACTH)", "hormon kích thích tuyến giáp (TSH)",
    "hormon kích thích nang trứng (FSH)", "hormon tạo hoàng thể (LH)", ["prolactin", "Kích thích tiết sữa."], ["oxytocin", "Gây co tử cung khi chuyển dạ và tống sữa."],
    ["hormon chống bài niệu (ADH)", "Tăng tái hấp thu nước ở thận."], ["melatonin", "Điều hòa nhịp thức – ngủ."], "estrogen", ["progesteron", "Hormon thể vàng."],
    "testosteron", ["erythropoietin (EPO)", "Do thận tiết ra; kích thích tạo hồng cầu."], ["renin", "Thuộc hệ renin – angiotensin – aldosteron (RAAS)."],
    ["hormon (nội tiết tố)", "Chất truyền tin tác dụng qua đường máu."], ["thụ thể", "Vị trí gắn hormon trên tế bào đích."], "hormon giải phóng TSH (TRH)",
    "hormon giải phóng ACTH (CRH)", "hormon giải phóng gonadotropin (GnRH)", ["somatostatin", "Ức chế hormon tăng trưởng và insulin."],
    ["calcitriol", "Dạng hoạt động của vitamin D; làm tăng canxi máu."], ["angiotensin II", "Gây co mạch, làm tăng huyết áp."],
    ["peptid lợi niệu nhĩ (ANP)", "Do tâm nhĩ tiết ra; làm giảm huyết áp và thể tích máu."], ["gastrin", "Kích thích tiết axit dạ dày."],
    ["secretin", "Kích thích tụy tiết bicarbonat."], ["cholecystokinin (CCK)", "Kích thích túi mật co bóp."], ["leptin", "Hormon gây no do mô mỡ tiết ra."],
    ["glucocorticoid", "Ví dụ cortisol."], ["mineralocorticoid", "Ví dụ aldosteron."], "androgen (hormon sinh dục nam)", ["catecholamin", "Adrenalin, noradrenalin, dopamin."]
  ]]
] };

VI_ANATOMIE.nerven = { ten: "Hệ thần kinh", gruppen: [
  ["Đại cương", [
    ["hệ thần kinh trung ương", "Não và tủy sống."], "hệ thần kinh ngoại biên", "hệ thần kinh thực vật (tự chủ)",
    ["hệ giao cảm", "„Chiến đấu hoặc bỏ chạy“ – tăng hoạt động."], ["hệ phó giao cảm", "„Nghỉ ngơi và tiêu hóa“ – phục hồi, tiêu hóa."], "tế bào thần kinh (neuron)",
    ["sợi nhánh", "Nhánh nhận kích thích."], ["sợi trục", "Nhánh dẫn truyền kích thích."], "bao myelin", ["synap", "Nơi tiếp xúc để truyền xung thần kinh."],
    ["chất dẫn truyền thần kinh", "Ví dụ acetylcholin, dopamin, serotonin."], "tế bào thần kinh đệm", ["chất xám", "Thân tế bào thần kinh."], ["chất trắng", "Sợi thần kinh."],
    ["dây thần kinh", "Viết tắt: N., số nhiều Nn. Tiếng Hy Lạp: Neuron."], "hạch thần kinh", "đám rối thần kinh", ["eo Ranvier", "Cho phép dẫn truyền nhảy cóc nhanh."],
    ["tế bào Schwann", "Tạo bao myelin ở hệ thần kinh ngoại biên."], ["tế bào hình sao", "Tế bào đệm; một phần của hàng rào máu – não."],
    ["tế bào ít nhánh", "Tạo bao myelin ở hệ thần kinh trung ương."], ["vi bào đệm", "Tế bào thực bào của hệ thần kinh trung ương."],
    ["điện thế hoạt động", "Sự kích thích điện của tế bào thần kinh."], ["acetylcholin", "Chất dẫn truyền ở bản vận động và hệ phó giao cảm."],
    ["dopamin", "Thiếu hụt trong bệnh Parkinson."], "serotonin", ["GABA", "Chất dẫn truyền ức chế quan trọng nhất."], ["glutamat", "Chất dẫn truyền kích thích quan trọng nhất."],
    ["chuỗi hạch giao cảm", "Chuỗi các hạch giao cảm dọc hai bên cột sống."], "đám rối tạng (đám rối dương)", ["hướng tâm", "Về phía hệ thần kinh trung ương (cảm giác)."],
    ["ly tâm", "Rời khỏi hệ thần kinh trung ương (vận động)."]
  ]],
  ["Não bộ", [
    ["não bộ", "Phần của hệ thần kinh trung ương trong hộp sọ: đại não, gian não, thân não (trung não, cầu não, hành não) và tiểu não, được bao bọc bởi màng não và dịch não tủy."],
    ["đại não", "Đồng nghĩa: Telencephalon (đoan não)."], "bán cầu đại não", "vỏ đại não", "hồi não", "rãnh não", "thùy trán", "thùy đỉnh", "thùy thái dương",
    ["thùy chẩm", "Trung tâm thị giác."], "thùy đảo", ["hồi trước trung tâm", "Vỏ vận động sơ cấp."], ["hồi sau trung tâm", "Vỏ cảm giác sơ cấp."],
    "vùng Broca (trung tâm vận động ngôn ngữ)", "vùng Wernicke (trung tâm hiểu ngôn ngữ)", ["thể chai", "Nối hai bán cầu đại não."], "các nhân nền",
    ["hệ viền", "Cảm xúc, trí nhớ, động lực."], ["hồi hải mã", "Quan trọng cho trí nhớ."], "thể hạnh nhân", "gian não", ["đồi thị", "„Cửa ngõ của ý thức“."],
    "thân não", "trung não", ["chất đen", "Tạo dopamin; bị tổn thương trong bệnh Parkinson."], "cầu não", ["hành não", "Trung tâm hô hấp và tuần hoàn."],
    ["cấu tạo lưới", "Điều khiển sự thức tỉnh và ý thức."], ["tiểu não", "Phối hợp vận động và thăng bằng."], "thùy nhộng tiểu não", "khe dọc đại não",
    ["rãnh trung tâm", "Ngăn cách thùy trán và thùy đỉnh."], ["rãnh bên", "Rãnh Sylvius; ngăn cách thùy thái dương."], ["hồi đai", "Thuộc hệ viền."],
    ["bao trong", "Chỗ hẹp của bó tháp – hay bị tổn thương trong đột quỵ."], "nhân đuôi", "nhân bèo sẫm", "nhân cầu nhạt", "vòm não (fornix)", "thể vú",
    ["trên đồi", "Có tuyến tùng."], ["mái trung não", "Có củ não sinh tư."], "cuống đại não", "nhân đỏ"
  ]],
  ["Màng não và dịch não tủy", [
    "màng não", "màng cứng", "màng nhện", "màng mềm", ["khoang dưới nhện", "Chứa dịch não tủy."], ["khoang ngoài màng cứng", "Vị trí gây tê ngoài màng cứng."],
    "dịch não tủy", "các não thất", ["đám rối mạch mạc", "Tiết dịch não tủy."], "não thất bên", "não thất ba", "não thất bốn",
    ["cống não (cống Sylvius)", "Nối não thất ba và não thất bốn."], ["hạt màng nhện", "Tái hấp thu dịch não tủy vào máu."], "khoang dưới màng cứng",
    "bể tiểu não – hành não"
  ]],
  ["Tủy sống", [
    ["tủy sống", "Tiếng Hy Lạp: Myelon."], ["sừng trước", "Tế bào thần kinh vận động."], ["sừng sau", "Tế bào thần kinh cảm giác."], ["rễ trước", "Vận động."],
    ["rễ sau", "Cảm giác."], "hạch gai (hạch rễ sau)", ["các dây thần kinh sống", "31 đôi."], ["nón tủy", "Điểm tận cùng của tủy sống, ngang mức L1/L2."],
    "chùm đuôi ngựa", ["khoanh da (dermatome)", "Vùng da do một dây thần kinh sống chi phối."], "cung phản xạ", "ống trung tâm",
    ["sừng bên", "Tế bào thần kinh thực vật (tủy ngực và thắt lưng)."], "thừng trước", "thừng bên", ["thừng sau", "Dẫn truyền cảm giác sâu và xúc giác tinh tế."],
    ["bó tháp (bó vỏ – gai)", "Vận động theo ý muốn; phần lớn bắt chéo ở hành não."], ["bó gai – đồi thị", "Cảm giác đau và nhiệt độ."], "khe giữa trước",
    ["phình cổ", "Nơi xuất phát đám rối cánh tay."], ["phình thắt lưng – cùng", "Nơi xuất phát các dây thần kinh chi dưới."]
  ]],
  ["Dây thần kinh sọ", [
    "dây thần kinh khứu giác", "dây thần kinh thị giác", ["dây thần kinh vận nhãn chung", "Cũng làm co đồng tử."], "dây thần kinh ròng rọc",
    ["dây thần kinh sinh ba", "Cảm giác vùng mặt và các cơ nhai."], "dây thần kinh vận nhãn ngoài", ["dây thần kinh mặt", "Các cơ biểu cảm."],
    "dây thần kinh tiền đình – ốc tai", "dây thần kinh lưỡi – hầu", ["dây thần kinh lang thang (phế vị)", "Dây thần kinh chính của hệ phó giao cảm."],
    "dây thần kinh phụ", ["dây thần kinh hạ thiệt", "Vận động lưỡi."]
  ]],
  ["Dây thần kinh ngoại biên", [
    "đám rối cổ", "dây thần kinh hoành", "đám rối cánh tay", "dây thần kinh nách", ["dây thần kinh quay", "Tổn thương: bàn tay rủ."],
    ["dây thần kinh trụ", "„Xương nhạc sĩ“; tổn thương: bàn tay vuốt."], ["dây thần kinh giữa", "Bị chèn ép trong hội chứng ống cổ tay."], "đám rối thắt lưng",
    "dây thần kinh đùi", "đám rối cùng", ["dây thần kinh ngồi", "Dây thần kinh lớn nhất cơ thể; dễ bị tổn thương khi tiêm bắp."], "dây thần kinh chày",
    ["dây thần kinh mác chung", "Đồng nghĩa: N. peroneus. Tổn thương (ví dụ do chèn ép khi đặt tư thế): bàn chân rủ."], "dây thần kinh mác sâu",
    "dây thần kinh mác nông", "dây thần kinh cơ bì", "các dây thần kinh liên sườn", "dây thần kinh bịt", "dây thần kinh thẹn", "dây thần kinh mông trên",
    "dây thần kinh mông dưới", "dây thần kinh bì đùi ngoài", ["dây thần kinh hiển", "Nhánh cảm giác tận của dây thần kinh đùi."], "dây thần kinh bắp chân",
    "các dây thần kinh gan chân"
  ]]
] };

VI_ANATOMIE.sinne = { ten: "Các giác quan", gruppen: [
  ["Mắt", [
    ["mắt", "Cơ quan thị giác: nhãn cầu (Bulbus oculi) gồm ba lớp – lớp ngoài (củng mạc, giác mạc), lớp giữa (màng mạch, thể mi, mống mắt) và lớp trong (võng mạc) – cùng thủy tinh thể, dịch kính và thủy dịch. Ngoài ra có các bộ phận bảo vệ và phụ: mi mắt, kết mạc, bộ lệ, các cơ vận nhãn. Tiếng Hy Lạp: Ophthalmos."],
    "nhãn cầu", "ổ mắt", ["mi mắt", "Tiếng Hy Lạp: Blepharon."], "lông mi", "lông mày", "kết mạc", "tuyến lệ", "ống lệ – mũi", "củng mạc",
    ["giác mạc", "Tiếng Hy Lạp: Keras (Kerato-)."], "màng mạch (hắc mạc)", ["thể mi", "Điều tiết; tiết thủy dịch."], "mống mắt", "đồng tử (con ngươi)",
    ["thủy tinh thể", "Theo Terminologia Anatomica gọi tắt là „Lens“. Tiếng Hy Lạp: Phakos. Hai mặt lồi, đàn hồi – giúp mắt điều tiết."],
    "dịch kính", "tiền phòng", "thủy dịch", "võng mạc", ["hoàng điểm", "Nơi nhìn rõ nhất."], "hố trung tâm", "điểm mù, gai thị", ["tế bào que", "Nhìn sáng – tối."],
    ["tế bào nón", "Nhìn màu."], "giao thoa thị giác", ["các cơ vận nhãn ngoài", "6 cơ ở mỗi mắt."], ["lớp xơ của nhãn cầu", "Củng mạc và giác mạc."],
    ["lớp mạch của nhãn cầu (màng bồ đào)", "Màng mạch, thể mi và mống mắt."], ["lớp trong của nhãn cầu", "Võng mạc."], "rìa giác mạc",
    ["ống Schlemm", "Đường thoát thủy dịch."], ["góc tiền phòng", "Đường thoát thủy dịch; quan trọng trong bệnh glôcôm."], "hậu phòng", "buồng dịch kính",
    ["cơ thể mi", "Co → thủy tinh thể phồng lên → nhìn gần (điều tiết)."], "dây treo thủy tinh thể (sợi Zinn)", "bao thủy tinh thể", "vỏ thủy tinh thể",
    ["nhân thủy tinh thể", "Đục khi về già: đục thủy tinh thể (cườm khô)."], ["cơ co đồng tử", "Do hệ phó giao cảm chi phối."], ["cơ giãn đồng tử", "Do hệ giao cảm chi phối."],
    ["bờ răng cưa (ora serrata)", "Ranh giới giữa phần võng mạc thị giác và phần võng mạc mù."], "phần thị giác của võng mạc", "lớp biểu mô sắc tố võng mạc",
    ["mảnh sàng củng mạc", "Nơi các sợi thần kinh thị giác đi qua."], "động mạch trung tâm võng mạc", "tĩnh mạch trung tâm võng mạc", "dải thị giác",
    ["thể gối ngoài", "Trạm chuyển tiếp của đường thị giác."], "tia thị giác", ["vỏ thị giác sơ cấp", "Ở thùy chẩm."], "cơ thẳng trên", "cơ thẳng dưới",
    "cơ thẳng trong", ["cơ thẳng ngoài", "Do dây thần kinh vận nhãn ngoài chi phối."], ["cơ chéo trên", "Do dây thần kinh ròng rọc chi phối."], "cơ chéo dưới",
    "cơ nâng mi trên", ["sụn mi", "Tấm mô liên kết của mi mắt."], ["tuyến Meibomius", "Tuyến bã trong mi mắt; tạo lớp mỡ của nước mắt."], "khe mi", "cục lệ",
    "điểm lệ", "tiểu quản lệ", "túi lệ", "nước mắt", ["sự điều tiết", "Thay đổi khúc xạ của thủy tinh thể theo khoảng cách."], "thị lực"
  ]],
  ["Tai", [
    ["tai", "Cơ quan thính giác và thăng bằng: tai ngoài (vành tai, ống tai), tai giữa (màng nhĩ, hòm nhĩ, chuỗi xương con, vòi nhĩ) và tai trong (ốc tai là cơ quan thính giác; tiền đình và các ống bán khuyên là cơ quan thăng bằng). Tiếng Hy Lạp: Ous (Oto-)."],
    "tai ngoài", "vành tai", "dái tai", "ống tai ngoài", "ráy tai", "màng nhĩ", "tai giữa", "hòm nhĩ", "chuỗi xương con", "xương búa", "xương đe",
    ["xương bàn đạp", "Xương nhỏ nhất cơ thể."], ["vòi nhĩ (vòi Eustache)", "Cân bằng áp suất giữa tai giữa và họng."], "tai trong", "mê đạo", "ốc tai",
    ["cơ quan Corti", "Cơ quan thính giác thực sự."], "cơ quan thăng bằng (tiền đình)", ["các ống bán khuyên", "Cảm nhận gia tốc quay."], "tiền đình (tai trong)",
    "gờ luân", "gờ đối luân", "bình tai", "xoăn tai", ["cửa sổ bầu dục", "Nơi đế xương bàn đạp nằm."], "cửa sổ tròn",
    ["cơ bàn đạp", "Cơ vân nhỏ nhất; bảo vệ tai khỏi tiếng ồn."], "cơ căng màng nhĩ", "sào bào", "các tế bào chũm", "ngoại dịch", "nội dịch", "ống ốc tai",
    "thang tiền đình", "thang nhĩ", ["soan nang", "Cảm nhận gia tốc thẳng (theo chiều ngang)."], ["cầu nang", "Cảm nhận gia tốc thẳng (theo chiều dọc)."],
    "tế bào lông (tế bào cảm giác)", "hạch xoắn ốc tai"
  ]],
  ["Khứu giác và vị giác", [
    "vùng khứu giác của niêm mạc mũi", "hành khứu", "gai lưỡi", "nụ vị giác", "cơ quan vị giác", "tế bào khứu giác", "dải khứu giác",
    ["gai đài", "Xếp hình chữ V trước gốc lưỡi."], "gai nấm", ["gai lá", "Ở bờ bên của lưỡi."], ["gai chỉ", "Cảm giác xúc giác, không có nụ vị giác."],
    ["vị giác", "Ngọt, chua, mặn, đắng, umami."], "khứu giác"
  ]],
  ["Cảm giác sâu", [
    ["cảm giác bản thể (cảm giác sâu)", "Nhận biết vị trí và cử động của cơ thể."], ["thoi cơ", "Đo độ căng giãn của cơ."], ["cơ quan gân Golgi", "Đo sức căng của gân."],
    "thụ thể đau", "thụ thể cơ học"
  ]]
] };

VI_ANATOMIE.haut = { ten: "Da và các phần phụ của da", gruppen: [
  ["Các lớp da", [
    "lớp bao phủ cơ thể", ["da", "Cơ quan lớn nhất của cơ thể (khoảng 1,8 m²): thượng bì, trung bì và hạ bì. Bảo vệ, điều hòa nhiệt, cơ quan cảm giác, tạo vitamin D. Tiếng Hy Lạp: Derma."],
    "thượng bì (biểu bì)", "lớp sừng", ["lớp đáy", "Nơi tế bào mới được tạo ra."], "tế bào hắc tố", "sắc tố melanin", ["trung bì (chân bì)", "Đồng nghĩa: Corium."],
    ["hạ bì (mô dưới da)", "Vị trí tiêm dưới da."], ["lớp sáng", "Chỉ có ở da dày (lòng bàn tay, gan bàn chân)."], "lớp hạt", "lớp gai", "tế bào sừng (keratinocyte)",
    "keratin (chất sừng)", ["tế bào Langerhans", "Tế bào miễn dịch của thượng bì."], ["tế bào Merkel", "Thụ thể áp lực."], "lớp nhú của trung bì",
    ["lớp lưới của trung bì", "Chắc bền nhờ sợi collagen."], "nhú bì", "sợi đàn hồi"
  ]],
  ["Các phần phụ của da", [
    ["lông, tóc", "Tiếng Hy Lạp: Thrix (Trich-)."], "tóc", "nang lông", ["cơ dựng lông", "Gây ra hiện tượng „nổi da gà“."], "tuyến bã", "tuyến mồ hôi",
    ["móng", "Tiếng Hy Lạp: Onyx."], "liềm móng", "biểu bì móng", "hành lông", "nhú lông", "chân lông", "thân lông", "lông tơ",
    ["tuyến mồ hôi apocrin (tuyến mùi)", "Ví dụ ở nách và vùng sinh dục."], "mầm móng", "bản móng", "giường móng", "nếp móng"
  ]],
  ["Các thụ thể của da", [
    ["tiểu thể Meissner", "Cảm giác chạm."], ["tiểu thể Vater-Pacini", "Cảm giác rung."], ["đầu tận thần kinh tự do", "Cảm giác đau và nhiệt độ."], "thụ thể nhiệt",
    ["tiểu thể Ruffini", "Cảm giác căng giãn."]
  ]],
  ["Tổn thương cơ bản của da", [
    ["dát", "Thay đổi màu sắc, ngang mặt da."], "sẩn", "nốt (cục)", "mụn nước", "bọng nước", "mụn mủ", "sẩn phù (mày đay)", "vảy da", "vảy tiết",
    ["trợt", "Tổn thương nông."], "vết trầy xước", "loét", "vết nứt (nẻ)", "sẹo"
  ]],
  ["Dấu hiệu da trong điều dưỡng", [
    ["loét tì đè", "Do áp lực kéo dài; phòng ngừa bằng vận động và đặt tư thế."], "ban đỏ", "phù nề", "vàng da", "xanh xao", "ngứa", "phát ban", "tụ máu (bầm tím)",
    "chấm xuất huyết", "hăm da (ở nếp gấp da)", ["độ căng của da", "Giảm ví dụ khi thiếu nước."]
  ]]
] };

VI_ANATOMIE.wortbau = { ten: "Thành phần từ và thuật ngữ y khoa", gruppen: [
  ["Tiền tố", [
    ["không, thiếu", "Ví dụ: Anurie (vô niệu), Apnoe (ngừng thở)."], ["ra xa, rời", "Ví dụ: Abduktion (dạng)."], ["về phía, đến", "Ví dụ: Adduktion (khép)."],
    ["trước", "Ví dụ: pränatal (trước sinh)."], ["sau", "Ví dụ: postoperativ (sau mổ)."], ["chống lại", "Ví dụ: Antibiotikum (kháng sinh)."],
    ["chậm", "Ví dụ: Bradykardie (nhịp tim chậm)."], ["nhanh", "Ví dụ: Tachypnoe (thở nhanh)."], ["rối loạn, khó", "Ví dụ: Dysphagie (nuốt khó)."],
    ["bên trong", "Ví dụ: intravenös (trong tĩnh mạch)."], ["bên ngoài, ra ngoài", "Ví dụ: Exspiration (thở ra)."], ["trên, bên trên", "Ví dụ: Epidermis (thượng bì)."],
    ["quá mức, tăng", "Ví dụ: Hypertonie (tăng huyết áp)."], ["dưới, giảm", "Ví dụ: Hypoglykämie (hạ đường huyết)."], ["giữa", "Ví dụ: interkostal (liên sườn)."],
    ["xung quanh", "Ví dụ: Perikard (màng ngoài tim)."], ["bên cạnh", "Ví dụ: paravertebral (cạnh cột sống)."], ["nhiều", "Ví dụ: Polyurie (đa niệu)."],
    ["ít", "Ví dụ: Oligurie (thiểu niệu)."], ["dưới", "Ví dụ: subkutan (dưới da)."], ["trên, phía trên", "Ví dụ: supraklavikulär (trên xương đòn)."],
    ["xuyên qua", "Ví dụ: transurethral (qua niệu đạo)."], ["phía sau, trở lại", "Ví dụ: retroperitoneal (sau phúc mạc)."],
    ["một nửa", "Ví dụ: Hemiplegie (liệt nửa người)."], ["mới", "Ví dụ: Neonatologie (sơ sinh học)."], ["giả", "Ví dụ: Pseudokrupp (croup giả)."]
  ]],
  ["Gốc từ chỉ cơ quan", [
    ["tim", "Ví dụ: Kardiologie (tim mạch học)."], ["gan", "Ví dụ: Hepatitis (viêm gan)."], ["thận", "Ví dụ: Nephrologie (thận học)."],
    ["phổi", "Ví dụ: Pneumonie (viêm phổi)."], ["dạ dày", "Ví dụ: Gastritis (viêm dạ dày)."], ["ruột", "Ví dụ: Enteritis (viêm ruột)."],
    ["đại tràng", "Ví dụ: Koloskopie (nội soi đại tràng)."], ["xương", "Ví dụ: Osteoporose (loãng xương)."], ["khớp", "Ví dụ: Arthrose (thoái hóa khớp)."],
    ["cơ", "Ví dụ: Myalgie (đau cơ)."], ["thần kinh", "Ví dụ: Neuralgie (đau dây thần kinh)."], ["não", "Ví dụ: Enzephalitis (viêm não)."],
    ["da", "Ví dụ: Dermatologie (da liễu học)."], ["tĩnh mạch", "Ví dụ: Phlebitis (viêm tĩnh mạch)."], ["mạch máu", "Ví dụ: Angiographie (chụp mạch)."],
    ["máu", "Ví dụ: Hämatom (khối máu tụ)."], ["bàng quang, túi", "Ví dụ: Zystitis (viêm bàng quang)."], ["tử cung", "Ví dụ: Hysterektomie (cắt tử cung)."],
    ["vú", "Ví dụ: Mammographie (chụp X-quang tuyến vú)."], ["mắt", "Ví dụ: Ophthalmologie (nhãn khoa)."], ["tai", "Ví dụ: Otitis (viêm tai)."],
    ["mũi", "Ví dụ: Rhinitis (viêm mũi)."], ["miệng", "Ví dụ: Stomatitis (viêm miệng)."], ["lưỡi", "Ví dụ: Glossitis (viêm lưỡi)."],
    ["mật", "Ví dụ: Cholezystitis (viêm túi mật)."], ["thanh quản", "Ví dụ: Laryngitis (viêm thanh quản)."], ["đốt sống", "Ví dụ: Spondylitis (viêm đốt sống)."],
    ["đầu", "Ví dụ: Zephalgie (đau đầu)."], ["cục máu đông", "Ví dụ: Thrombose (huyết khối)."], ["mỡ", "Ví dụ: Lipom (u mỡ)."]
  ]],
  ["Hậu tố", [
    ["viêm", "Ví dụ: Appendizitis (viêm ruột thừa)."], ["bệnh không do viêm (thoái hóa)", "Ví dụ: Arthrose (thoái hóa khớp)."], ["khối u", "Ví dụ: Lipom (u mỡ)."],
    ["đau", "Ví dụ: Neuralgie (đau dây thần kinh)."], ["phẫu thuật cắt bỏ", "Ví dụ: Appendektomie (cắt ruột thừa)."], ["rạch, mở", "Ví dụ: Laparotomie (mở bụng)."],
    ["mở thông (lỗ nhân tạo)", "Ví dụ: Kolostomie (hậu môn nhân tạo)."], ["nội soi", "Ví dụ: Gastroskopie (nội soi dạ dày)."], ["chụp, ghi hình", "Ví dụ: Sonographie (siêu âm)."],
    ["bản ghi, hình ảnh", "Ví dụ: Elektrokardiogramm (điện tâm đồ, EKG)."], ["môn học", "Ví dụ: Kardiologie (tim mạch học)."], ["bệnh", "Ví dụ: Neuropathie (bệnh thần kinh)."],
    ["trong máu", "Ví dụ: Anämie (thiếu máu), Hyperkaliämie (tăng kali máu)."], ["trong nước tiểu", "Ví dụ: Hämaturie (tiểu máu)."], ["thiếu, giảm", "Ví dụ: Thrombopenie (giảm tiểu cầu)."],
    ["tăng số lượng tế bào", "Ví dụ: Leukozytose (tăng bạch cầu)."], ["liệt hoàn toàn", "Ví dụ: Hemiplegie (liệt nửa người)."],
    ["liệt không hoàn toàn", "Ví dụ: Hemiparese (yếu nửa người)."], ["chảy, tiết", "Ví dụ: Diarrhö (tiêu chảy)."], ["chảy máu", "Ví dụ: Hämorrhagie (xuất huyết)."],
    ["ngừng, ứ trệ", "Ví dụ: Hämostase (cầm máu)."], ["phẫu thuật tạo hình", "Ví dụ: Arthroplastik (tạo hình khớp)."], ["làm tan", "Ví dụ: Thrombolyse (tiêu huyết khối)."],
    ["giãn", "Ví dụ: Bronchiektasie (giãn phế quản)."], ["xơ cứng", "Ví dụ: Arteriosklerose (xơ cứng động mạch)."], ["dinh dưỡng, phát triển", "Ví dụ: Atrophie (teo)."]
  ]],
  ["Thuật ngữ chung", [
    "cấp tính", "mạn tính", "lành tính", "ác tính", "bẩm sinh", "nguyên phát", "thứ phát", "khu trú", "lan tỏa, toàn thân", "vô căn (không rõ nguyên nhân)",
    "đường uống (p. o.)", "tiêm tĩnh mạch (i. v.)", "tiêm bắp (i. m.)", "tiêm dưới da (s. c.)", ["đau", "Một trong năm dấu hiệu viêm."], ["đỏ", "Dấu hiệu viêm."],
    ["nóng", "Dấu hiệu viêm."], ["sưng", "Dấu hiệu viêm; cũng có nghĩa: khối u."], ["mất chức năng", "Dấu hiệu viêm."], "tình trạng", "tiền sử bệnh", "chẩn đoán",
    "tiên lượng", "điều trị", "dự phòng", "triệu chứng", "hội chứng", ["tái phát", "Tiếng Latinh recidivus = quay trở lại."]
  ]]
] };
