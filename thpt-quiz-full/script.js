const DATA = {
  toan: {
    title: "📐 Toán học",
    desc: "Đại số, Giải tích, Hình học — chọn đáp án rồi bấm Nộp bài để chấm điểm.",
    bank: [
      { q: "Đạo hàm của hàm số y = x³ − 2x² + 5 là:", a: ["y' = 3x² − 4x", "y' = 3x² − 2x + 5", "y' = x² − 4x", "y' = 3x² − 4x + 5"], c: 0, e: "Áp dụng (xⁿ)' = n·xⁿ⁻¹: (x³)'=3x², (−2x²)'=−4x, (5)'=0." },
      { q: "Nghiệm của phương trình 2ˣ = 16 là:", a: ["x = 2", "x = 3", "x = 4", "x = 8"], c: 2, e: "16 = 2⁴ nên x = 4." },
      { q: "Giá trị của log₂(32) bằng:", a: ["3", "4", "5", "6"], c: 2, e: "32 = 2⁵ nên log₂32 = 5." },
      { q: "Cho cấp số cộng có u₁ = 3, d = 4. Số hạng u₅ bằng:", a: ["15", "19", "23", "18"], c: 1, e: "uₙ = u₁ + (n−1)d → u₅ = 3 + 4×4 = 19." },
      { q: "Diện tích hình tròn bán kính r = 3 là:", a: ["6π", "9π", "12π", "3π"], c: 1, e: "S = πr² = π×9 = 9π." },
      { q: "Giới hạn của (2n+1)/(n+2) khi n→∞ bằng:", a: ["1", "2", "1/2", "+∞"], c: 1, e: "Chia tử mẫu cho n: (2+1/n)/(1+2/n) → 2." },
      { q: "Thể tích khối lập phương cạnh a = 2 là:", a: ["4", "6", "8", "12"], c: 2, e: "V = a³ = 2³ = 8." },
      { q: "Phương trình x² − 5x + 6 = 0 có nghiệm:", a: ["x = 1, x = 6", "x = 2, x = 3", "x = −2, x = −3", "Vô nghiệm"], c: 1, e: "Δ = 25−24 = 1 → x = (5±1)/2 = 2 hoặc 3." },
      { q: "Hai vectơ vuông góc thì tích vô hướng và cosin của góc giữa chúng bằng:", a: ["1", "0", "−1", "1/2"], c: 1, e: "Vuông góc → tích vô hướng = 0 → cos = 0." },
      { q: "Nguyên hàm của f(x) = 2x là:", a: ["x² + C", "x²", "2 + C", "2x² + C"], c: 0, e: "∫2x dx = x² + C." },
      { q: "Hàm số y = x³ − 3x + 2 đồng biến trên khoảng nào?", a: ["(−1; 1)", "(−∞; −1) và (1; +∞)", "(0; +∞)", "(−∞; 0)"], c: 1, e: "y' = 3x² − 3 > 0 ⇔ x² > 1 ⇔ x < −1 hoặc x > 1." },
      { q: "Tích phân ∫₀¹ 3x² dx bằng:", a: ["1", "3", "1/3", "0"], c: 0, e: "Nguyên hàm là x³ → [x³]₀¹ = 1." },
      { q: "Diện tích hình phẳng giới hạn bởi y = x², trục Ox, x = 0, x = 1 là:", a: ["1/3", "1", "1/2", "2"], c: 0, e: "S = ∫₀¹ x² dx = [x³/3]₀¹ = 1/3." },
      { q: "Trong Oxyz, khoảng cách từ M(1; 2; 3) đến mặt phẳng (Oxy) bằng:", a: ["1", "2", "3", "√14"], c: 2, e: "Khoảng cách bằng |z_M| = 3." },
      { q: "Gieo một con súc sắc cân đối, xác suất xuất hiện mặt 6 chấm là:", a: ["1/6", "1/2", "1/3", "5/6"], c: 0, e: "1 kết quả thuận lợi trên 6 kết quả đồng khả năng." },
      { q: "Số cách chọn 2 học sinh từ 10 học sinh là:", a: ["20", "45", "90", "100"], c: 1, e: "C(10,2) = 10×9/2 = 45." },
      { q: "Thể tích khối chóp S.ABCD có đáy hình vuông cạnh a, SA ⊥ đáy, SA = a là:", a: ["a³", "a³/3", "a³/2", "2a³/3"], c: 1, e: "V = (1/3)·a²·a = a³/3." },
      { q: "Nghiệm của phương trình log₂(x − 1) = 3 là:", a: ["x = 7", "x = 8", "x = 9", "x = 10"], c: 2, e: "x − 1 = 2³ = 8 → x = 9." },
      { q: "Giá trị lớn nhất của hàm số y = −x² + 4x − 3 là:", a: ["1", "2", "3", "4"], c: 0, e: "Parabol đỉnh x = 2 → y = −4 + 8 − 3 = 1." },
      { q: "Cấp số nhân có u₁ = 2, q = 3. Số hạng u₃ bằng:", a: ["6", "12", "18", "24"], c: 2, e: "u₃ = u₁·q² = 2×9 = 18." },
      { q: "Tập xác định của hàm số y = √(x − 2) là:", a: ["x > 2", "x ≥ 2", "x < 2", "x ≠ 2"], c: 1, e: "Biểu thức dưới căn không âm: x − 2 ≥ 0." },
      { q: "Đạo hàm của y = sin x là:", a: ["cos x", "−cos x", "sin x", "−sin x"], c: 0, e: "(sin x)' = cos x." },
      { q: "Nghiệm của phương trình 3ˣ = 27 là:", a: ["x = 2", "x = 3", "x = 9", "x = 27"], c: 1, e: "27 = 3³ nên x = 3." },
      { q: "Giá trị của log₃(27) bằng:", a: ["2", "3", "9", "27"], c: 1, e: "27 = 3³ nên log₃27 = 3." },
      { q: "Số chỉnh hợp chập 2 của 5 phần tử A(5,2) bằng:", a: ["10", "20", "30", "60"], c: 1, e: "A(5,2) = 5×4 = 20." },
      { q: "Diện tích tam giác vuông có hai cạnh góc vuông 3 và 4 là:", a: ["6", "7", "12", "5"], c: 0, e: "S = ½×3×4 = 6." },
      { q: "Chu vi đường tròn bán kính r = 2 là:", a: ["2π", "4π", "4", "π"], c: 1, e: "C = 2πr = 4π." },
      { q: "Trung điểm của M(1; 3) và N(5; 7) là:", a: ["(3; 5)", "(2; 2)", "(6; 10)", "(3; 4)"], c: 0, e: "((1+5)/2; (3+7)/2) = (3; 5)." },
      { q: "Tổng 3 số hạng đầu của cấp số cộng u₁ = 1, d = 2 là:", a: ["6", "9", "12", "15"], c: 1, e: "1 + 3 + 5 = 9." },
      { q: "Hệ số góc của đường thẳng y = 2x + 1 là:", a: ["1", "2", "3", "1/2"], c: 1, e: "y = ax + b có hệ số góc a = 2." },
      { q: "Tập nghiệm của |x| = 3 là:", a: ["{3}", "{−3}", "{−3; 3}", "∅"], c: 2, e: "|x| = 3 ⇔ x = ±3." },
      { q: "Giá trị của 5! là:", a: ["20", "60", "120", "720"], c: 2, e: "5! = 5×4×3×2×1 = 120." },
      { q: "Số tập con của {a; b; c} là:", a: ["3", "6", "8", "9"], c: 2, e: "2³ = 8 tập con." },
      { q: "Mệnh đề nào đúng?", a: ["∀x∈R: x² > 0", "∀x∈R: x² ≥ 0", "∃x∈R: x² < 0", "∀x∈R: x > 0"], c: 1, e: "x² ≥ 0 với mọi x (bằng 0 khi x = 0)." },
      { q: "Cho f(x) = x² − 4, f(1) bằng:", a: ["−3", "−2", "0", "5"], c: 0, e: "1 − 4 = −3." },
      { q: "Phương trình |2x| = 6 có nghiệm:", a: ["x = 3", "x = −3", "x = ±3", "Vô nghiệm"], c: 2, e: "|x| = 3 ⇔ x = ±3." },
      { q: "Rút gọn a⁵/a² (a ≠ 0):", a: ["a³", "a⁷", "a²", "a¹⁰"], c: 0, e: "a⁵⁻² = a³." },
      { q: "Điều kiện xác định của √(2 − x) là:", a: ["x ≤ 2", "x < 2", "x ≥ 2", "x > 2"], c: 0, e: "2 − x ≥ 0 ⇔ x ≤ 2." },
      { q: "Khai triển (x − 2)² bằng:", a: ["x² − 4x + 4", "x² + 4", "x² − 4", "x² + 4x + 4"], c: 0, e: "Hằng đẳng thức bình phương hiệu." },
      { q: "Nghiệm của 5x − 2 = 3x + 6 là:", a: ["4", "2", "8", "−4"], c: 0, e: "2x = 8 → x = 4." },
      { q: "Nghiệm của x² = 16 là:", a: ["4", "−4", "±4", "8"], c: 2, e: "x = ±4." },
      { q: "Tập nghiệm của (x − 1)(x + 2) = 0 là:", a: ["{1}", "{−2}", "{1; −2}", "∅"], c: 2, e: "x = 1 hoặc x = −2." },
      { q: "Phương trình nào tương đương với x = 2?", a: ["x + 1 = 3", "2x = 3", "x − 1 = 3", "x² = 4"], c: 0, e: "Chỉ x + 1 = 3 có tập nghiệm {2}." },
      { q: "Tập nghiệm của 2x − 6 ≥ 0 là:", a: ["[3; +∞)", "(3; +∞)", "(−∞; 3]", "R"], c: 0, e: "x ≥ 3." },
      { q: "Nghiệm của 4ˣ = 64 là:", a: ["3", "4", "16", "8"], c: 0, e: "64 = 4³ nên x = 3." },
      { q: "Hệ số góc của y = −3x + 2 là:", a: ["2", "−3", "3", "−2"], c: 1, e: "y = ax + b có a = −3." },
      { q: "Giao điểm của y = 2x + 1 với trục Ox là:", a: ["(0; 1)", "(−1/2; 0)", "(1/2; 0)", "(0; −1)"], c: 1, e: "y = 0 → x = −1/2." },
      { q: "Đường thẳng đi qua (0; 0) và (1; 1) là:", a: ["y = x", "y = 1", "y = x + 1", "x = 1"], c: 0, e: "Hệ số góc bằng 1, qua gốc tọa độ." },
      { q: "Hai đường thẳng y = 2x + 1 và y = 2x − 3:", a: ["cắt nhau", "song song", "trùng nhau", "vuông góc"], c: 1, e: "Cùng hệ số góc 2, khác tung độ gốc." },
      { q: "Đỉnh của parabol y = x² − 2x + 1 là:", a: ["(1; 0)", "(0; 1)", "(−1; 0)", "(1; 1)"], c: 0, e: "y = (x−1)² → đỉnh (1; 0)." },
      { q: "Đồ thị y = x² − 4x + 3 cắt trục Oy tại:", a: ["(0; 3)", "(0; 0)", "(3; 0)", "(0; −3)"], c: 0, e: "x = 0 → y = 3." },
      { q: "Nghiệm của x² − 9 = 0 là:", a: ["x = 3", "x = −3", "x = ±3", "Vô nghiệm"], c: 2, e: "x² = 9 → x = ±3." },
      { q: "Biệt thức Δ của x² + 2x + 1 = 0 là:", a: ["0", "4", "−4", "8"], c: 0, e: "Δ = 4 − 4 = 0 (nghiệm kép)." },
      { q: "Tổng hai nghiệm của x² − 7x + 12 = 0 là:", a: ["5", "7", "12", "−7"], c: 1, e: "Viète: S = 7." },
      { q: "Tích hai nghiệm của x² − 7x + 12 = 0 là:", a: ["7", "12", "−12", "5"], c: 1, e: "Viète: P = 12." },
      { q: "Nghiệm của √(x) = 4 là:", a: ["2", "4", "8", "16"], c: 3, e: "x = 4² = 16." },
      { q: "Đạo hàm của y = x⁴ là:", a: ["4x³", "x³", "4x", "3x³"], c: 0, e: "(x⁴)' = 4x³." },
      { q: "Đạo hàm của y = cos x là:", a: ["sin x", "−sin x", "cos x", "−cos x"], c: 1, e: "(cos x)' = −sin x." },
      { q: "Nguyên hàm của f(x) = 3 là:", a: ["3x + C", "3 + C", "x³ + C", "3x² + C"], c: 0, e: "∫3 dx = 3x + C." },
      { q: "Tích phân ∫₀² 1 dx bằng:", a: ["0", "1", "2", "4"], c: 2, e: "[x]₀² = 2." },
      { q: "Cho cấp số cộng u₁ = 5, d = −2. Số hạng u₃ là:", a: ["1", "3", "−1", "9"], c: 0, e: "5, 3, 1 → u₃ = 1." },
      { q: "Cho f(x) = 2x + 1, f(2) bằng:", a: ["3", "4", "5", "6"], c: 2, e: "2×2 + 1 = 5." },
      { q: "Cho f(x) = x², f(−3) bằng:", a: ["−9", "9", "6", "−6"], c: 1, e: "(−3)² = 9." },
      { q: "Đồ thị đường thẳng y = 3 đi qua điểm nào?", a: ["(3; 2)", "(2; 3)", "(0; 0)", "(3; 0)"], c: 1, e: "Mọi điểm có tung độ 3." },
      { q: "Hàm số nào đồng biến trên R?", a: ["y = −x", "y = 3x − 1", "y = −2x + 5", "y = 5"], c: 1, e: "Hệ số a = 3 > 0." },
      { q: "sin30° bằng:", a: ["1/2", "√3/2", "√2/2", "1"], c: 0, e: "Giá trị lượng giác góc đặc biệt." },
      { q: "cos60° bằng:", a: ["1/2", "√3/2", "√2/2", "1"], c: 0, e: "cos60° = sin30° = 1/2." },
      { q: "tan45° bằng:", a: ["0", "1", "√3", "Không xác định"], c: 1, e: "tan45° = sin/cos = 1." },
      { q: "sin²x + cos²x bằng:", a: ["0", "1", "2", "2sinxcosx"], c: 1, e: "Hệ thức lượng giác cơ bản." },
      { q: "Chu kì của hàm số y = sin x là:", a: ["π", "2π", "π/2", "4π"], c: 1, e: "Hàm sin tuần hoàn chu kỳ 2π." },
      { q: "Giá trị lớn nhất của sin x là:", a: ["0", "1", "−1", "2"], c: 1, e: "−1 ≤ sin x ≤ 1." },
      { q: "Cho hình chóp có V = 12, diện tích đáy 6. Chiều cao là:", a: ["2", "4", "6", "3"], c: 2, e: "h = 3V/S = 6." },
      { q: "Diện tích mặt cầu bán kính 3 là:", a: ["12π", "36π", "108π", "9π"], c: 1, e: "S = 4πr² = 36π." },
      { q: "Thể tích khối cầu bán kính 3 là:", a: ["36π", "12π", "108π", "27π"], c: 0, e: "V = 4/3πr³ = 36π." },
      { q: "Trong Oxyz, điểm nào thuộc trục Oz?", a: ["(1; 0; 0)", "(0; 2; 0)", "(0; 0; 5)", "(1; 1; 1)"], c: 2, e: "Điểm trên Oz có x = y = 0." },
      { q: "Vectơ nào cùng phương với u = (1; 2)?", a: ["(2; 4)", "(2; 1)", "(−1; 2)", "(1; −2)"], c: 0, e: "(2; 4) = 2·(1; 2)." },
      { q: "Cosin của góc giữa hai trục Ox và Oy bằng:", a: ["1", "0", "−1", "1/2"], c: 1, e: "Hai trục vuông góc." },
      { q: "Phương trình mặt cầu tâm O bán kính 2 là:", a: ["x² + y² + z² = 4", "x² + y² + z² = 2", "x + y + z = 2", "x² + y² + z² = 8"], c: 0, e: "R² = 4." },
      { q: "Khoảng cách từ O đến M(0; 0; 5) là:", a: ["0", "5", "25", "1"], c: 1, e: "OM = |z| = 5." },
      { q: "Thể tích hình trụ r = 2, h = 5 là:", a: ["10π", "20π", "40π", "4π"], c: 1, e: "π×4×5 = 20π." },
      { q: "Diện tích xung quanh hình nón r = 3, l = 5 là:", a: ["15π", "30π", "9π", "25π"], c: 0, e: "S = π·r·l = 15π." },
      { q: "Trung điểm của A(1; 2; 3) và B(3; 4; 5) là:", a: ["(2; 3; 4)", "(1; 1; 1)", "(4; 6; 8)", "(2; 2; 2)"], c: 0, e: "((1+3)/2; (2+4)/2; (3+5)/2)." },
      { q: "Số hoán vị của 3 phần tử là:", a: ["3", "6", "9", "27"], c: 1, e: "P(3) = 3! = 6." },
      { q: "Tung đồng xu 2 lần, xác suất 2 mặt ngửa là:", a: ["1/2", "1/4", "1/3", "3/4"], c: 1, e: "1/2 × 1/2 = 1/4." },
      { q: "Trung bình cộng của 3, 5, 7 là:", a: ["4", "5", "6", "15"], c: 1, e: "(3+5+7)/3 = 5." },
      { q: "Mốt của dãy 1, 2, 2, 3 là:", a: ["1", "2", "3", "Không có"], c: 1, e: "2 xuất hiện nhiều nhất." },
      { q: "Gửi 100 triệu lãi suất đơn 6%/năm, sau 1 năm nhận:", a: ["100 triệu", "106 triệu", "160 triệu", "6 triệu"], c: 1, e: "100×(1 + 0,06) = 106 triệu." },
      { q: "Dân số tăng 2%/năm, sau 2 năm gấp:", a: ["1,02 lần", "1,0404 lần", "1,04 lần", "1,2 lần"], c: 1, e: "1,02² = 1,0404." },
      { q: "Cho dãy (uₙ) với uₙ = 2n + 1. Số hạng u₄ là:", a: ["7", "9", "11", "6"], c: 1, e: "2×4 + 1 = 9." },
      { q: "Dãy nào là cấp số cộng?", a: ["1; 3; 5; 7", "1; 2; 4; 8", "1; 4; 9; 16", "2; 4; 8; 16"], c: 0, e: "Hiệu không đổi d = 2." },
      { q: "Dãy nào là cấp số nhân?", a: ["2; 4; 6; 8", "3; 6; 12; 24", "1; 4; 9; 16", "2; 5; 8; 11"], c: 1, e: "Tỉ số không đổi q = 2." },
      { q: "Điểm nào thuộc đồ thị y = x²?", a: ["(2; 3)", "(2; 4)", "(−2; −4)", "(1; 3)"], c: 1, e: "2² = 4." },
      { q: "Giá trị của 2⁰ + 3¹ là:", a: ["1", "2", "4", "5"], c: 2, e: "1 + 3 = 4." },
      { q: "(−1)¹⁰⁰ bằng:", a: ["−1", "1", "100", "−100"], c: 1, e: "Số mũ chẵn → 1." },
      { q: "Tập xác định của y = 1/(x − 1) là:", a: ["R", "R\\{1}", "(1; +∞)", "[1; +∞)"], c: 1, e: "Mẫu khác 0: x ≠ 1." },
      { q: "Hàm số y = x² đồng biến trên:", a: ["(−∞; 0)", "(0; +∞)", "R", "∅"], c: 1, e: "Parabol đi lên khi x > 0." },
      { q: "Giá trị nhỏ nhất của y = x² + 1 là:", a: ["0", "1", "2", "−1"], c: 1, e: "x² ≥ 0 → y ≥ 1, tại x = 0." },
      { q: "Khoảng cách giữa A(0; 0) và B(3; 4) là:", a: ["5", "7", "25", "1"], c: 0, e: "√(9+16) = 5." },
      { q: "Độ dài vectơ u = (2; −1) là:", a: ["√3", "√5", "5", "3"], c: 1, e: "√(4+1) = √5." },
      { q: "Điểm nào thuộc trục Oy?", a: ["(4; 0)", "(−4; 0)", "(0; −4)", "(4; −4)"], c: 2, e: "Điểm trên Oy có hoành độ 0." }
    ]
  },
  ly: {
    title: "⚡ Vật Lý",
    desc: "Cơ học, Điện, Dao động & Sóng — nắm công thức là ăn điểm.",
    bank: [
      { q: "Đơn vị của lực trong hệ SI là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"], c: 2, e: "Lực đo bằng Newton (N). Joule là công/năng lượng." },
      { q: "Vật rơi tự do từ độ cao h, vận tốc khi chạm đất (bỏ qua cản):", a: ["v = gh", "v = √(2gh)", "v = 2gh", "v = h/t"], c: 1, e: "Bảo toàn cơ năng: mgh = ½mv² → v = √(2gh)." },
      { q: "Định luật Ohm cho đoạn mạch: I = ?", a: ["U·R", "U/R", "R/U", "U²/R"], c: 1, e: "I = U/R: cường độ tỉ lệ thuận với hiệu điện thế." },
      { q: "Chu kì con lắc đơn (biên độ nhỏ): T = ?", a: ["2π√(g/l)", "2π√(l/g)", "2π√(m/k)", "π√(l/g)"], c: 1, e: "T = 2π√(l/g), chỉ phụ thuộc chiều dài và g." },
      { q: "Sóng cơ KHÔNG truyền được trong môi trường nào?", a: ["Rắn", "Lỏng", "Khí", "Chân không"], c: 3, e: "Sóng cơ cần môi trường vật chất → không truyền trong chân không." },
      { q: "Công suất điện P = ?", a: ["U·I", "U/I", "I²·R²", "U²·I"], c: 0, e: "P = U·I = I²R = U²/R." },
      { q: "Tán sắc ánh sáng chứng tỏ:", a: ["Ánh sáng là sóng ngang", "Ánh sáng trắng gồm nhiều màu", "Ánh sáng có tính hạt", "Ánh sáng truyền thẳng"], c: 1, e: "Newton: lăng kính tách ánh sáng trắng thành dải màu." },
      { q: "Gia tốc trong chuyển động thẳng đều:", a: ["a = 0", "a = const ≠ 0", "a tăng dần", "a giảm dần"], c: 0, e: "Thẳng đều: vận tốc không đổi → gia tốc bằng 0." },
      { q: "Bước sóng λ liên hệ v và f:", a: ["λ = v·f", "λ = v/f", "λ = f/v", "λ = v + f"], c: 1, e: "v = λf → λ = v/f." },
      { q: "Lực hướng tâm chuyển động tròn đều: F = ?", a: ["mv²/r", "mvr", "mv/r²", "mr²/v"], c: 0, e: "F_ht = m·a_ht = m·v²/r." },
      { q: "Động năng của vật m = 2 kg chuyển động với v = 3 m/s là:", a: ["6 J", "9 J", "12 J", "18 J"], c: 1, e: "W = ½·m·v² = ½×2×9 = 9 J." },
      { q: "Đặt U = 20 V vào điện trở R = 10 Ω, cường độ dòng điện là:", a: ["0,5 A", "2 A", "200 A", "5 A"], c: 1, e: "I = U/R = 20/10 = 2 A." },
      { q: "Sóng dừng trên dây dài l, hai đầu cố định. Âm cơ bản (k = 1) có bước sóng:", a: ["λ = l", "λ = 2l", "λ = l/2", "λ = 4l"], c: 1, e: "l = kλ/2 → với k = 1 thì λ = 2l." },
      { q: "Công thoát A = 2 eV. Giới hạn quang điện λ₀ xấp xỉ:", a: ["0,31 μm", "0,62 μm", "1,24 μm", "0,41 μm"], c: 1, e: "λ₀ = hc/A ≈ 0,62 μm." },
      { q: "Mạch RLC nối tiếp xảy ra cộng hưởng điện khi:", a: ["Z_L = Z_C", "R = 0", "U_L = U", "I = 0"], c: 0, e: "ωL = 1/(ωC) → Z_L = Z_C, cường độ hiệu dụng cực đại." },
      { q: "Một electron bay vuông góc với các đường sức từ của từ trường đều (cảm ứng từ B) với vận tốc v. Độ lớn lực Lorentz tác dụng lên electron là:", a: ["|q|vB", "|q|v/B", "|q|B/v", "0"], c: 0, e: "f = |q|vB·sin90° = |q|vB." },
      { q: "Lực F = 10 N kéo vật đi s = 5 m, góc giữa F và hướng dịch chuyển là 60°. Công A bằng:", a: ["50 J", "25 J", "43,3 J", "0 J"], c: 1, e: "A = F·s·cos60° = 10×5×0,5 = 25 J." },
      { q: "Chu kì con lắc lò xo T = 2π√(m/k). Nếu m tăng 4 lần thì T:", a: ["tăng 2 lần", "tăng 4 lần", "giảm 2 lần", "không đổi"], c: 0, e: "T tỉ lệ với √m → tăng √4 = 2 lần." },
      { q: "Năng lượng liên kết hạt nhân có độ hụt khối Δm là:", a: ["Δm·c²", "Δm/c²", "Δm·c", "Δm²·c"], c: 0, e: "E_lk = Δm·c² (hệ thức Einstein)." },
      { q: "Thấu kính hội tụ f = 10 cm, vật thật cách kính 30 cm cho ảnh cách kính:", a: ["15 cm, ảnh thật", "15 cm, ảnh ảo", "30 cm, ảnh thật", "10 cm, ảnh thật"], c: 0, e: "1/d' = 1/10 − 1/30 = 1/15 → d' = 15 cm > 0: ảnh thật." },
      { q: "Vật đi 100 m trong 20 s, vận tốc trung bình là:", a: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"], c: 1, e: "v = s/t = 100/20 = 5 m/s." },
      { q: "Trọng lượng của vật m = 5 kg (lấy g = 10 m/s²) là:", a: ["5 N", "50 N", "0,5 N", "500 N"], c: 1, e: "P = m·g = 5×10 = 50 N." },
      { q: "Sóng có tần số f = 5 Hz thì chu kì bằng:", a: ["0,2 s", "5 s", "2 s", "0,5 s"], c: 0, e: "T = 1/f = 1/5 = 0,2 s." },
      { q: "Đun 1 kg nước tăng 10°C (c = 4200 J/kg.K), nhiệt lượng cần là:", a: ["4200 J", "42 kJ", "420 kJ", "4,2 kJ"], c: 1, e: "Q = m·c·Δt = 1×4200×10 = 42000 J = 42 kJ." },
      { q: "Thấu kính phân kì luôn cho ảnh:", a: ["thật, ngược chiều", "ảo, cùng chiều, nhỏ hơn vật", "thật, cùng chiều", "ảo, lớn hơn vật"], c: 1, e: "TKPK luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật." },
      { q: "Đơn vị của công suất trong hệ SI là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "eV"], c: 1, e: "Công suất đo bằng Watt (W)." },
      { q: "Âm thanh truyền nhanh nhất trong môi trường nào?", a: ["không khí", "nước", "thép", "chân không"], c: 2, e: "Vận tốc âm tăng dần: khí < lỏng < rắn; chân không không truyền âm." },
      { q: "Bóng đèn 100 W dùng trong 1 giờ tiêu thụ điện năng:", a: ["100 kWh", "1 kWh", "0,1 kWh", "10 kWh"], c: 2, e: "A = P·t = 0,1 kW×1 h = 0,1 kWh." },
      { q: "Hiện tượng phản xạ toàn phần xảy ra khi ánh sáng đi từ môi trường:", a: ["chiết quang kém sang hơn", "chiết quang hơn sang kém", "bất kỳ sang bất kỳ", "chân không sang thủy tinh"], c: 1, e: "Cần n₁ > n₂ và góc tới lớn hơn góc giới hạn." },
      { q: "Lực đẩy Archimedes lên vật nhúng trong chất lỏng có công thức:", a: ["F = d·V", "F = d/V", "F = V/d", "F = m·g·h"], c: 0, e: "F_A bằng trọng lượng chất lỏng bị chiếm chỗ: F = d·V." },
      { q: "72 km/h đổi ra m/s là:", a: ["7,2", "20", "72", "36"], c: 1, e: "72/3,6 = 20 m/s." },
      { q: "Vật rơi tự do từ độ cao 20 m (g = 10 m/s²), thời gian rơi là:", a: ["1 s", "2 s", "4 s", "20 s"], c: 1, e: "h = ½gt² → t = 2 s." },
      { q: "Vận tốc sau 3 s rơi tự do (g = 10 m/s²) là:", a: ["3 m/s", "10 m/s", "30 m/s", "33 m/s"], c: 2, e: "v = g·t = 30 m/s." },
      { q: "Gia tốc rơi tự do gần mặt đất xấp xỉ:", a: ["1 m/s²", "6 m/s²", "9,8 m/s²", "12 m/s²"], c: 2, e: "g ≈ 9,8 m/s²." },
      { q: "Trọng lượng vật 60 kg (g = 10 m/s²) là:", a: ["6 N", "60 N", "600 N", "6000 N"], c: 2, e: "P = 60×10 = 600 N." },
      { q: "Hợp lực tác dụng lên vật đang đứng yên bằng:", a: ["F", "0", "m·a", "m·g"], c: 1, e: "Định luật I Newton: hợp lực bằng 0." },
      { q: "Đại lượng đặc trưng cho mức quán tính là:", a: ["vận tốc", "khối lượng", "lực", "gia tốc"], c: 1, e: "Khối lượng càng lớn, quán tính càng lớn." },
      { q: "1 N bằng:", a: ["1 kg·m/s", "1 kg·m/s²", "1 kg/m·s²", "1 J/s"], c: 1, e: "F = m·a → đơn vị kg·m/s²." },
      { q: "Phương trình chuyển động thẳng đều là:", a: ["x = x₀ + v·t", "x = x₀ + ½a·t²", "v = v₀ + a·t", "s = v·t²"], c: 0, e: "Vận tốc không đổi theo thời gian." },
      { q: "Trong chuyển động nhanh dần đều, a và v:", a: ["cùng dấu", "trái dấu", "vuông góc", "a = 0"], c: 0, e: "Gia tốc cùng hướng vận tốc." },
      { q: "Chu kỳ Trái Đất tự quay quanh trục là:", a: ["12 giờ", "24 giờ", "365 ngày", "1 giờ"], c: 1, e: "Một ngày đêm là 24 giờ." },
      { q: "Tần số kim giây đồng hồ là:", a: ["60 Hz", "1 Hz", "1/60 Hz", "1/3600 Hz"], c: 2, e: "f = 1/T = 1/60 Hz." },
      { q: "Khoảng cách tăng 2 lần, lực hấp dẫn:", a: ["tăng 2 lần", "giảm 2 lần", "giảm 4 lần", "không đổi"], c: 2, e: "F tỉ lệ nghịch với r²." },
      { q: "Đơn vị của khối lượng riêng là:", a: ["kg/m³", "N", "Pa", "J"], c: 0, e: "D = m/V → kg/m³." },
      { q: "Moment của lực F = 10 N, tay đòn 0,5 m là:", a: ["5 N·m", "20 N·m", "10 N", "0,05 N·m"], c: 0, e: "M = F·d = 5 N·m." },
      { q: "Áp suất khí quyển xấp xỉ:", a: ["10³ Pa", "10⁵ Pa", "10⁷ Pa", "76 Pa"], c: 1, e: "1 atm ≈ 10⁵ Pa." },
      { q: "Định luật II Newton được viết là:", a: ["F = m·a", "F = m/a", "F = a/m", "F = m + a"], c: 0, e: "Gia tốc tỉ lệ thuận với lực." },
      { q: "Chất điểm cân bằng khi:", a: ["hợp lực = 0", "hợp lực ≠ 0", "v = 0", "a ≠ 0"], c: 0, e: "Cân bằng ⇔ hợp lực triệt tiêu." },
      { q: "Đơn vị của công cơ học là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"], c: 0, e: "Công đo bằng Jun." },
      { q: "Hiệu suất được tính bằng:", a: ["A_ci/A_tp", "A_tp/A_ci", "P/t", "F·s"], c: 0, e: "H = công có ích trên công toàn phần." },
      { q: "Động năng KHÔNG phụ thuộc vào:", a: ["khối lượng", "vận tốc", "độ cao", "cả m và v"], c: 2, e: "W_đ = ½mv², không có h." },
      { q: "Thế năng trọng trường được tính bằng:", a: ["m·g·h", "½m·v²", "m·g/h", "m·v"], c: 0, e: "W_t = m·g·h." },
      { q: "Cơ năng được bảo toàn khi:", a: ["có ma sát", "chỉ có lực thế", "có lực kéo", "mọi trường hợp"], c: 1, e: "Không có lực không thế sinh công." },
      { q: "Đơn vị của nhiệt lượng là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "độ C"], c: 0, e: "Nhiệt lượng đo bằng Jun." },
      { q: "Nhiệt dung riêng của nước là:", a: ["420 J/kg.K", "4200 J/kg.K", "8400 J/kg.K", "1000 J/kg.K"], c: 1, e: "c = 4200 J/kg.K." },
      { q: "Nguyên lí I nhiệt động lực học là:", a: ["ΔU = A + Q", "Q = m·c·Δt", "U = 0", "A = Q"], c: 0, e: "Độ biến thiên nội năng bằng công và nhiệt." },
      { q: "0°C bằng bao nhiêu K?", a: ["0 K", "273 K", "−273 K", "100 K"], c: 1, e: "T(K) = t(°C) + 273." },
      { q: "Quá trình đẳng nhiệt tuân theo định luật:", a: ["Boyle", "Charles", "Gay-Lussac", "Dalton"], c: 0, e: "p·V = hằng số (Boyle-Mariotte)." },
      { q: "Dòng điện là dòng chuyển dời:", a: ["hỗn loạn của điện tích", "có hướng của điện tích", "tròn đều", "không đổi"], c: 1, e: "Định nghĩa dòng điện." },
      { q: "Chiều dòng điện quy ước đi từ:", a: ["cực − sang +", "cực + sang −", "tùy ý", "cả hai chiều"], c: 1, e: "Từ nơi điện thế cao đến thấp." },
      { q: "Đơn vị cường độ dòng điện là:", a: ["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Oát (W)"], c: 0, e: "I đo bằng Ampe." },
      { q: "Đơn vị hiệu điện thế là:", a: ["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Jun (J)"], c: 1, e: "U đo bằng Vôn." },
      { q: "Đơn vị điện trở là:", a: ["Ampe (A)", "Vôn (V)", "Ôm (Ω)", "Fara (F)"], c: 2, e: "R đo bằng Ôm." },
      { q: "Để đo hiệu điện thế dùng:", a: ["ampe kế mắc nối tiếp", "vôn kế mắc song song", "ôm kế mắc nối tiếp", "oát kế"], c: 1, e: "Vôn kế mắc song song với đoạn mạch." },
      { q: "Điện trở dây dẫn được tính bằng:", a: ["ρ·l/S", "ρ·S/l", "ρ/(l·S)", "l/(ρ·S)"], c: 0, e: "R = ρl/S." },
      { q: "Công suất tỏa nhiệt trên điện trở là:", a: ["I²·R", "U²·R", "I·R²", "I/R"], c: 0, e: "P = I²R = U²/R." },
      { q: "Nhiệt lượng tỏa ra theo định luật Jun-Lenxơ:", a: ["Q = I²·R·t", "Q = U·R·t", "Q = I·R²·t", "Q = I·R/t"], c: 0, e: "Q = I²Rt." },
      { q: "Từ trường tồn tại ở đâu?", a: ["quanh nam châm và dòng điện", "chỉ trong nam châm", "chỉ trong dây dẫn", "mọi nơi"], c: 0, e: "Xung quanh nam châm và dòng điện." },
      { q: "Kim nam châm chỉ hướng Bắc-Nam vì:", a: ["Trái Đất là nam châm khổng lồ", "gió thổi", "trọng lực", "ma sát"], c: 0, e: "Trái Đất có từ trường." },
      { q: "Bên ngoài nam châm, đường sức từ:", a: ["đi ra cực Bắc, vào cực Nam", "đi ra cực Nam, vào cực Bắc", "là đường thẳng", "không tồn tại"], c: 0, e: "Quy ước đường sức từ." },
      { q: "Quy tắc nắm tay phải dùng để xác định:", a: ["chiều dòng điện", "chiều đường sức từ của dòng thẳng", "cực của pin", "độ lớn cảm ứng từ"], c: 1, e: "Ngón cái chỉ chiều dòng, ngón tay chỉ chiều B." },
      { q: "Lực từ lên dây dẫn cực đại khi góc α bằng:", a: ["0°", "90°", "180°", "góc bất kỳ"], c: 1, e: "F = IlB·sinα lớn nhất khi sinα = 1." },
      { q: "Hiện tượng cảm ứng điện từ do ai phát hiện?", a: ["Faraday", "Newton", "Ohm", "Ampere"], c: 0, e: "M. Faraday năm 1831." },
      { q: "Dòng Fu-cô là:", a: ["dòng một chiều", "dòng điện xoáy trong khối kim loại", "dòng trong dây thẳng", "dòng quang điện"], c: 1, e: "Dòng xoáy sinh bởi biến thiên từ thông." },
      { q: "Máy biến áp hoạt động với dòng điện:", a: ["một chiều", "xoay chiều", "cả hai", "không cần điện"], c: 1, e: "Cần từ thông biến thiên." },
      { q: "Tần số lưới điện Việt Nam là:", a: ["50 Hz", "60 Hz", "100 Hz", "220 Hz"], c: 0, e: "Lưới điện 50 Hz, 220 V." },
      { q: "U hiệu dụng 220 V thì U cực đại xấp xỉ:", a: ["220 V", "311 V", "110 V", "440 V"], c: 1, e: "U₀ = 220√2 ≈ 311 V." },
      { q: "Sóng điện từ trong chân không truyền với tốc độ:", a: ["3×10⁸ m/s", "340 m/s", "1500 m/s", "vô hạn"], c: 0, e: "Bằng tốc độ ánh sáng c." },
      { q: "Tia hồng ngoại có bước sóng:", a: ["dài hơn ánh sáng đỏ", "ngắn hơn ánh sáng tím", "bằng ánh sáng đỏ", "không tồn tại"], c: 0, e: "Hồng ngoại nằm ngoài vùng đỏ." },
      { q: "Tia tử ngoại có bước sóng:", a: ["dài hơn ánh sáng đỏ", "ngắn hơn ánh sáng tím", "nhìn thấy được", "dài nhất"], c: 1, e: "Tử ngoại nằm ngoài vùng tím." },
      { q: "Quang phổ liên tục phụ thuộc vào:", a: ["nhiệt độ", "áp suất", "thể tích", "khối lượng"], c: 0, e: "Chỉ phụ thuộc nhiệt độ nguồn sáng." },
      { q: "Năng lượng photon được tính bằng:", a: ["E = h·f", "E = h·v", "E = h·c", "E = m·c"], c: 0, e: "Thuyết lượng tử Planck." },
      { q: "Hiện tượng quang điện được giải thích bởi:", a: ["Newton", "Einstein", "Bohr", "Huygens"], c: 1, e: "Einstein với thuyết photon." },
      { q: "Nguyên tử phát sáng khi electron:", a: ["đứng yên", "chuyển từ mức cao xuống thấp", "chuyển từ thấp lên cao", "rơi vào hạt nhân"], c: 1, e: "Phát photon khi xuống mức thấp." },
      { q: "Hạt nhân gồm:", a: ["proton + electron", "proton + neutron", "neutron + electron", "chỉ proton"], c: 1, e: "Nuclon là proton và neutron." },
      { q: "Các đồng vị khác nhau về:", a: ["số proton", "số neutron", "số electron", "điện tích"], c: 1, e: "Cùng Z, khác số neutron." },
      { q: "Tia alpha là:", a: ["electron", "hạt nhân He", "photon", "neutron"], c: 1, e: "Hạt ²₄He." },
      { q: "Tia beta là:", a: ["proton", "electron", "hạt He", "tia gamma"], c: 1, e: "Electron (hoặc positron) năng lượng cao." },
      { q: "Tia gamma là:", a: ["hạt He", "electron", "sóng điện từ", "neutron"], c: 2, e: "Photon năng lượng rất cao." },
      { q: "Nhiên liệu phân hạch điển hình là:", a: ["U-235", "H-1", "He-4", "C-12"], c: 0, e: "Uranium-235 dễ phân hạch." },
      { q: "Năng lượng Mặt Trời sinh ra từ:", a: ["phân hạch", "nhiệt hạch", "phản ứng hóa học", "cơ năng"], c: 1, e: "Tổng hợp H thành He." },
      { q: "Năng lượng Mặt Trời từ phản ứng biến H thành:", a: ["He", "C", "O", "Fe"], c: 0, e: "4H → He + năng lượng (nhiệt hạch)." },
      { q: "Đơn vị khối lượng nguyên tử u bằng:", a: ["1,66×10⁻²⁷ kg", "9,1×10⁻³¹ kg", "1,6×10⁻¹⁹ kg", "3×10⁸ kg"], c: 0, e: "1u = 1/12 khối lượng ¹²C." },
      { q: "Chu kỳ bán rã là thời gian để:", a: ["1/4 số hạt phân rã", "1/2 số hạt phân rã", "phân rã hết", "số hạt nhân đôi"], c: 1, e: "Định nghĩa chu kỳ bán rã T." },
      { q: "Kính lúp cho ảnh:", a: ["thật, lớn hơn vật", "ảo, lớn hơn vật", "thật, nhỏ hơn vật", "ảo, nhỏ hơn vật"], c: 1, e: "Kính lúp cho ảnh ảo, lớn hơn vật." },
      { q: "Mắt cận thị đeo kính:", a: ["hội tụ", "phân kì", "song song", "phẳng"], c: 1, e: "TKPK đưa ảnh về điểm cực viễn." },
      { q: "Điểm cực viễn của mắt thường ở:", a: ["25 cm", "vô cùng", "10 cm", "1 m"], c: 1, e: "Mắt không điều tiết nhìn xa vô cùng." },
      { q: "Gương phẳng cho ảnh:", a: ["thật, bằng vật", "ảo, bằng vật", "thật, lớn hơn", "ảo, nhỏ hơn"], c: 1, e: "Ảnh ảo, bằng vật, đối xứng gương." },
      { q: "Chiết suất của môi trường trong suốt:", a: ["n ≥ 1", "n < 1", "n = 0", "n âm"], c: 0, e: "n = c/v ≥ 1." },
      { q: "Máy quang phổ dùng để:", a: ["đo khối lượng", "phân tích quang phổ", "đo điện trở", "đo phóng xạ"], c: 1, e: "Phân tích thành phần ánh sáng." }
    ]
  },
  hoa: {
    title: "🧪 Hóa học",
    desc: "Vô cơ & Hữu cơ — bảng tuần hoàn, phản ứng đặc trưng và mẹo nhớ nhanh.",
    bank: [
      { q: "Kí hiệu hóa học của sodium là:", a: ["N", "Na", "Ni", "Ne"], c: 1, e: "sodium: Na. N là nitrogen." },
      { q: "pH của dung dịch HCl 0,01M xấp xỉ:", a: ["2", "7", "12", "1"], c: 0, e: "pH = −log[H⁺] = −log(0,01) = 2." },
      { q: "Khí làm đục nước vôi trong Ca(OH)₂ là:", a: ["O₂", "H₂", "CO₂", "N₂"], c: 2, e: "CO₂ + Ca(OH)₂ → CaCO₃↓ (trắng đục) + H₂O." },
      { q: "Kim loại nào dẫn điện tốt nhất?", a: ["copper (Cu)", "aluminium (Al)", "silver (Ag)", "iron (Fe)"], c: 2, e: "Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe." },
      { q: "Công thức phân tử của methane là:", a: ["C₂H₄", "CH₄", "C₂H₆", "CO₂"], c: 1, e: "methane — alkane đơn giản nhất: CH₄." },
      { q: "Axit + Bazơ → ?", a: ["Muối + Nước", "Muối + Khí", "Chỉ nước", "Chỉ muối"], c: 0, e: "Phản ứng trung hòa: Axit + Bazơ → Muối + Nước." },
      { q: "Nguyên tố có Z = 1 là:", a: ["helium", "oxygen", "hydrogen", "lithium"], c: 2, e: "Z=1 là hydrogen (H), nhẹ nhất bảng tuần hoàn." },
      { q: "Dung dịch nào làm quỳ tím hóa đỏ?", a: ["NaOH", "NaCl", "HCl", "KNO₃"], c: 2, e: "Axit (HCl) → quỳ đỏ; bazơ → quỳ xanh." },
      { q: "Liên kết trong NaCl thuộc loại:", a: ["Cộng hóa trị", "Ion", "Kim loại", "Hydrogen"], c: 1, e: "Kim loại điển hình + phi kim điển hình → liên kết ion." },
      { q: "Số oxi hóa của S trong H₂SO₄ là:", a: ["+4", "+6", "−2", "0"], c: 1, e: "2(+1) + x + 4(−2) = 0 → x = +6." },
      { q: "Công thức của ethyl acetate là:", a: ["CH₃COOH", "CH₃COOC₂H₅", "C₂H₅OH", "HCOOCH₃"], c: 1, e: "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O." },
      { q: "Chất nào sau đây lưỡng tính?", a: ["NaOH", "HCl", "Al(OH)₃", "NaCl"], c: 2, e: "Al(OH)₃ tan được trong cả axit và kiềm." },
      { q: "Cho glucose tác dụng AgNO₃/NH₃ (tráng bạc), hiện tượng là:", a: ["kết tủa đỏ gạch", "lớp bạc sáng bám thành ống", "sủi bọt khí", "dung dịch hóa xanh"], c: 1, e: "Nhóm −CHO khử Ag⁺ thành Ag bám thành ống nghiệm." },
      { q: "Kim loại nào thụ động trong HNO₃ đặc, nguội?", a: ["Cu", "Al", "Ag", "Mg"], c: 1, e: "Al (cùng Fe, Cr) tạo màng oxit bảo vệ." },
      { q: "pH của dung dịch NaOH 0,01M là:", a: ["2", "7", "12", "10"], c: 2, e: "[OH⁻] = 0,01 → pOH = 2 → pH = 12." },
      { q: "Để điều chế 1 mol Al từ Al³⁺ cần số mol electron là:", a: ["1", "2", "3", "6"], c: 2, e: "Al³⁺ + 3e → Al." },
      { q: "Ethanol có nhiệt độ sôi cao hơn alkane tương ứng chủ yếu vì:", a: ["liên kết ion", "liên kết hidro liên phân tử", "khối lượng mol lớn", "liên kết kim loại"], c: 1, e: "Nhóm −OH tạo liên kết hidro liên phân tử." },
      { q: "Đun acetic acid với ethanol (H₂SO₄ đặc) thu được:", a: ["ethyl acetate + nước", "methyl acetate + H₂", "axit + ete", "không phản ứng"], c: 0, e: "Phản ứng este hóa thuận nghịch tạo este + nước." },
      { q: "Kim loại mạnh nhất trong dãy K, Mg, Al, Cu là:", a: ["Cu", "Al", "Mg", "K"], c: 3, e: "Tính khử giảm dần: K > Mg > Al > Cu." },
      { q: "Phân tử khối của CaCO₃ là:", a: ["84", "100", "56", "40"], c: 1, e: "40 + 12 + 16×3 = 100." },
      { q: "Nguyên tử khối của oxygen là:", a: ["8", "12", "16", "32"], c: 2, e: "O có nguyên tử khối 16." },
      { q: "Khí nhẹ nhất trong các khí sau là:", a: ["O₂", "H₂", "CO₂", "N₂"], c: 1, e: "H₂ (M = 2) nhẹ nhất." },
      { q: "Dung dịch nào làm quỳ tím hóa xanh?", a: ["HCl", "NaOH", "NaCl", "H₂O"], c: 1, e: "Bazơ (NaOH) → quỳ xanh." },
      { q: "Công thức của muối ăn là:", a: ["NaCl", "CaCO₃", "Na₂CO₃", "KCl"], c: 0, e: "Muối ăn là NaCl." },
      { q: "Kim loại nào tác dụng với HCl loãng sinh khí H₂?", a: ["Cu", "Ag", "Zn", "Au"], c: 2, e: "Zn đứng trước H trong dãy hoạt động." },
      { q: "Khí gây hiệu ứng nhà kính chính là:", a: ["O₂", "N₂", "CO₂", "H₂"], c: 2, e: "CO₂ hấp thụ bức xạ hồng ngoại." },
      { q: "Nước cứng chứa nhiều ion nào?", a: ["Na⁺", "Ca²⁺ và Mg²⁺", "K⁺", "Cl⁻"], c: 1, e: "Nước cứng giàu Ca²⁺, Mg²⁺." },
      { q: "Alkene đơn giản nhất là:", a: ["CH₄", "C₂H₄", "C₂H₂", "C₃H₆"], c: 1, e: "Ethene C₂H₄ (một nối đôi C=C)." },
      { q: "Công thức của ethanol là:", a: ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "CH₃COOH"], c: 1, e: "Ethanol: C₂H₅OH." },
      { q: "Nhiệt phân CaCO₃ thu được:", a: ["CaO + CO₂", "Ca + CO₃", "CaO + O₂", "CaC₂"], c: 0, e: "CaCO₃ → CaO + CO₂ (nhiệt độ cao)." },
      { q: "Kí hiệu hóa học của oxygen là:", a: ["O", "H", "C", "N"], c: 0, e: "Oxygen: O." },
      { q: "Kí hiệu hóa học của carbon là:", a: ["O", "H", "C", "N"], c: 2, e: "Carbon: C." },
      { q: "Kí hiệu hóa học của iron là:", a: ["Ir", "Fe", "In", "Fr"], c: 1, e: "Iron (sắt): Fe." },
      { q: "Kí hiệu hóa học của aluminium là:", a: ["Am", "Al", "Au", "Ag"], c: 1, e: "Aluminium (nhôm): Al." },
      { q: "Kí hiệu hóa học của copper là:", a: ["Co", "Cu", "Cr", "Ca"], c: 1, e: "Copper (đồng): Cu." },
      { q: "Kí hiệu hóa học của zinc là:", a: ["Zn", "Zc", "Zi", "Sn"], c: 0, e: "Zinc (kẽm): Zn." },
      { q: "Kí hiệu hóa học của silver là:", a: ["Si", "Ag", "Au", "Sr"], c: 1, e: "Silver (bạc): Ag." },
      { q: "Kí hiệu hóa học của gold là:", a: ["Ag", "Gd", "Au", "W"], c: 2, e: "Gold (vàng): Au." },
      { q: "Kí hiệu hóa học của calcium là:", a: ["C", "Ca", "Cd", "K"], c: 1, e: "Calcium (canxi): Ca." },
      { q: "Kí hiệu hóa học của potassium là:", a: ["P", "K", "Po", "Pt"], c: 1, e: "Potassium (kali): K." },
      { q: "Kí hiệu hóa học của chlorine là:", a: ["C", "Cl", "Cr", "Co"], c: 1, e: "Chlorine (clo): Cl." },
      { q: "Kí hiệu hóa học của sulfur là:", a: ["Si", "S", "Su", "Sf"], c: 1, e: "Sulfur (lưu huỳnh): S." },
      { q: "Kí hiệu hóa học của magnesium là:", a: ["Mn", "Mg", "Mo", "Hg"], c: 1, e: "Magnesium (magie): Mg." },
      { q: "Kí hiệu hóa học của phosphorus là:", a: ["F", "P", "Ph", "Pb"], c: 1, e: "Phosphorus (photpho): P." },
      { q: "Kí hiệu hóa học của silicon là:", a: ["S", "Si", "Se", "Sc"], c: 1, e: "Silicon (silic): Si." },
      { q: "Số proton của carbon (Z = 6) là:", a: ["4", "6", "12", "14"], c: 1, e: "Số proton bằng Z = 6." },
      { q: "Số neutron của ¹²C là:", a: ["6", "12", "18", "0"], c: 0, e: "12 − 6 = 6 neutron." },
      { q: "Số electron của sodium (Z = 11) là:", a: ["10", "11", "12", "23"], c: 1, e: "Nguyên tử trung hòa: 11 electron." },
      { q: "Khối lượng mol của H₂O là:", a: ["16", "17", "18", "20"], c: 2, e: "2×1 + 16 = 18 g/mol." },
      { q: "Khối lượng mol của CO₂ là:", a: ["28", "32", "44", "48"], c: 2, e: "12 + 2×16 = 44 g/mol." },
      { q: "Khối lượng mol của O₂ là:", a: ["16", "24", "32", "48"], c: 2, e: "2×16 = 32 g/mol." },
      { q: "Thể tích 1 mol khí ở đktc là:", a: ["22,4 lít", "24,79 lít", "11,2 lít", "44,8 lít"], c: 0, e: "Mọi khí ở đktc chiếm 22,4 lít/mol." },
      { q: "Số Avogadro có giá trị:", a: ["6,022×10²³", "3×10⁸", "1,6×10⁻¹⁹", "9,1×10⁻³¹"], c: 0, e: "1 mol chứa 6,022×10²³ hạt." },
      { q: "Công thức tính nồng độ mol là:", a: ["C = n/V", "C = n·V", "C = m/V", "C = V/n"], c: 0, e: "Số mol trên một lít dung dịch." },
      { q: "Hòa tan 1 mol NaCl vào nước thành 1 lít dung dịch, nồng độ là:", a: ["1M", "2M", "0,5M", "58,5M"], c: 0, e: "C = 1/1 = 1M." },
      { q: "Sản phẩm của CaO + HCl là:", a: ["CaCl₂ + H₂", "CaCl₂ + H₂O", "Ca + HClO", "không phản ứng"], c: 1, e: "Oxit bazơ + axit → muối + nước." },
      { q: "Sản phẩm của CO₂ + NaOH dư là:", a: ["Na₂CO₃ + H₂O", "NaHCO₃", "Na₂O", "không phản ứng"], c: 0, e: "Kiềm dư tạo muối trung hòa." },
      { q: "Đốt Mg trong O₂ thu được:", a: ["MgO", "MgO₂", "Mg₂O", "MgOH"], c: 0, e: "2Mg + O₂ → 2MgO." },
      { q: "H₂ tác dụng với Cl₂ (ánh sáng) thu được:", a: ["HCl", "HClO", "H₂Cl", "không phản ứng"], c: 0, e: "H₂ + Cl₂ → 2HCl." },
      { q: "Kim loại tác dụng với nước ở nhiệt độ thường là:", a: ["K", "Mg", "Al", "Fe"], c: 0, e: "K phản ứng mãnh liệt với nước." },
      { q: "Kim loại yếu nhất trong Cu, Ag, Au, Fe là:", a: ["Cu", "Ag", "Au", "Fe"], c: 2, e: "Au kém hoạt động nhất." },
      { q: "Fe tác dụng với Cl₂ thu được:", a: ["FeCl₂", "FeCl₃", "FeCl", "Fe₂Cl"], c: 1, e: "Sắt lên số oxi hóa +3 với clo." },
      { q: "Fe tác dụng với HCl loãng sinh khí:", a: ["Cl₂", "H₂", "O₂", "HCl"], c: 1, e: "Fe + 2HCl → FeCl₂ + H₂." },
      { q: "Điều kiện để sắt bị gỉ là:", a: ["có O₂ và H₂O", "chỉ có O₂", "chỉ có H₂O", "có CO₂"], c: 0, e: "Gỉ sắt cần cả oxi và hơi ẩm." },
      { q: "Cách bảo vệ sắt khỏi gỉ là:", a: ["mạ kẽm", "để nơi ẩm", "ngâm axit", "đốt nóng"], c: 0, e: "Kẽm bảo vệ sắt khỏi ăn mòn." },
      { q: "Thành phần chính của gang là:", a: ["Fe và C", "Fe và Si", "Al và Cu", "Cu và Zn"], c: 0, e: "Gang là hợp kim Fe-C." },
      { q: "Đồng thau là hợp kim của:", a: ["Cu-Zn", "Cu-Sn", "Fe-C", "Al-Cu"], c: 0, e: "Đồng thau = đồng + kẽm." },
      { q: "Nhôm bền trong không khí vì có màng:", a: ["Al₂O₃", "AlCl₃", "Al(OH)₃", "AlN"], c: 0, e: "Màng oxit mỏng bảo vệ." },
      { q: "Bạc để lâu bị đen do tạo:", a: ["Ag₂S", "AgCl", "Ag₂O", "AgNO₃"], c: 0, e: "Ag tác dụng với S trong không khí." },
      { q: "Tính chất của khí Cl₂ là:", a: ["không màu, không mùi", "vàng lục, mùi hắc", "nâu đỏ", "đen"], c: 1, e: "Clo vàng lục, mùi hắc, độc." },
      { q: "Nước Gia-ven chứa:", a: ["NaCl", "NaClO", "NaClO₃", "Cl₂"], c: 1, e: "NaClO có tính tẩy màu, sát khuẩn." },
      { q: "pH của dung dịch NaCl là:", a: ["< 7", "> 7", "= 7", "= 0"], c: 2, e: "Muối trung hòa, pH = 7." },
      { q: "Phân đạm cung cấp nguyên tố nào?", a: ["urê (chứa N)", "phân lân", "phân kali", "vôi"], c: 0, e: "Đạm = nitrogen (urê)." },
      { q: "Phân lân cung cấp nguyên tố nào?", a: ["N", "P", "K", "Ca"], c: 1, e: "Lân = phosphorus." },
      { q: "Vôi tôi có công thức là:", a: ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"], c: 1, e: "CaO + H₂O → Ca(OH)₂." },
      { q: "Khí O₂ có vai trò:", a: ["duy trì sự cháy", "dập lửa", "độc hại", "làm đục nước vôi"], c: 0, e: "Oxi duy trì sự sống và sự cháy." },
      { q: "So với không khí, O₂:", a: ["nhẹ hơn", "nặng hơn", "bằng", "không so được"], c: 1, e: "32 > 29 nên nặng hơn." },
      { q: "H₂ khử CuO ở nhiệt độ cao thu được:", a: ["Cu + H₂O", "CuO + H₂", "CuOH", "không phản ứng"], c: 0, e: "H₂ + CuO → Cu + H₂O." },
      { q: "Điện phân nước thu H₂ và O₂ theo tỉ lệ thể tích:", a: ["1:1", "2:1", "1:2", "3:1"], c: 1, e: "2H₂O → 2H₂ + O₂." },
      { q: "Dung môi phân cực phổ biến nhất là:", a: ["xăng", "nước", "dầu ăn", "benzen"], c: 1, e: "Nước hòa tan nhiều chất." },
      { q: "Cho dầu ăn vào nước, hiện tượng là:", a: ["tan hoàn toàn", "phân lớp, dầu nổi", "phân lớp, dầu chìm", "sôi"], c: 1, e: "Dầu không tan, nhẹ hơn nước." },
      { q: "Rượu 45° nghĩa là:", a: ["45 g", "45 ml ethanol/100 ml", "45°C", "45% khối lượng"], c: 1, e: "Độ rượu = ml ethanol trong 100 ml." },
      { q: "Giấm ăn chứa acetic acid khoảng:", a: ["5%", "50%", "98%", "0,5%"], c: 0, e: "Giấm ăn nồng độ 2–5%." },
      { q: "Đun chất béo với kiềm là phản ứng:", a: ["este hóa", "xà phòng hóa", "tráng bạc", "trùng hợp"], c: 1, e: "Tạo xà phòng + glycerol." },
      { q: "Công thức của glycerol là:", a: ["C₃H₈O₃", "C₂H₆O₂", "CH₄O", "C₃H₆O"], c: 0, e: "C₃H₅(OH)₃ = C₃H₈O₃." },
      { q: "Nhỏ I₂ vào hồ tinh bột thấy màu:", a: ["đỏ", "xanh tím", "vàng", "không màu"], c: 1, e: "Phản ứng đặc trưng xanh tím." },
      { q: "Khi đun lòng trắng trứng thì protein:", a: ["đông tụ", "tan ra", "bay hơi", "kết tinh"], c: 0, e: "Nhiệt làm biến tính protein." },
      { q: "Tơ nilon thuộc loại tơ:", a: ["thiên nhiên", "tổng hợp", "nhân tạo", "vô cơ"], c: 1, e: "Nilon điều chế bằng tổng hợp." },
      { q: "Monome của cao su buna là:", a: ["ethylene", "butadiene", "isoprene", "styrene"], c: 1, e: "Trùng hợp buta-1,3-diene." },
      { q: "Nhựa PE được điều chế từ:", a: ["ethylene", "acetylene", "methane", "benzene"], c: 0, e: "Trùng hợp ethylene." },
      { q: "Nhựa PVC được điều chế từ:", a: ["ethylene", "vinyl chloride", "styrene", "propene"], c: 1, e: "Trùng hợp vinyl chloride." },
      { q: "Công thức của benzene là:", a: ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₅NH₂"], c: 0, e: "Vòng 6C thơm C₆H₆." },
      { q: "Phenol tác dụng với nước Br₂ cho:", a: ["kết tủa trắng", "kết tủa vàng", "sủi khí", "mất màu nâu đỏ"], c: 0, e: "Tạo 2,4,6-tribromophenol trắng." },
      { q: "Công thức của aniline là:", a: ["C₆H₅OH", "C₆H₅NH₂", "C₆H₅CH₃", "C₆H₅Cl"], c: 1, e: "C₆H₅-NH₂." },
      { q: "Công thức của toluene là:", a: ["C₆H₆", "C₆H₅CH₃", "C₆H₅OH", "C₇H₁₆"], c: 1, e: "C₆H₅-CH₃." },
      { q: "Axit nào mạnh hơn?", a: ["fomic", "acetic", "cả hai bằng nhau", "propionic"], c: 0, e: "HCOOH mạnh hơn CH₃COOH." },
      { q: "Công thức tính nồng độ phần trăm là:", a: ["C% = mct/mdd", "C% = mdd/mct", "C = n/V", "C = m·V"], c: 0, e: "Khối lượng chất tan trên dung dịch." },
      { q: "Hòa tan 10 g muối vào 90 g nước, nồng độ là:", a: ["5%", "10%", "11,1%", "20%"], c: 1, e: "10/(10+90) = 10%." },
      { q: "Khi điện li NaCl thu được ion:", a: ["Na⁺ + Cl⁻", "Na + Cl", "Na²⁺ + Cl₂⁻", "không điện li"], c: 0, e: "NaCl → Na⁺ + Cl⁻." },
      { q: "Khí nào dùng bơm bóng bay vì nhẹ và trơ?", a: ["H₂", "He", "O₂", "N₂"], c: 1, e: "He nhẹ, không cháy, an toàn." }
    ]
  }
};

const ORDER = ["toan", "ly", "hoa"];
const SET_COUNT = 10, SET_SIZE = 10; // mỗi môn 10 bộ × 10 câu, không trùng nhau
let current = "toan";
let setIdx = { toan: 0, ly: 0, hoa: 0 }; // bộ đang làm (0-9)
let answers = {};  // answers[mon][bo]
let graded = {};   // graded[mon][bo]
let orderIdx = {}; // orderIdx[mon][bo]
let timeLeft = 15 * 60, timerId = null;

const $ = (id) => document.getElementById(id);
const quizEl = $("quiz"), tabsEl = $("subjectTabs");

ORDER.forEach(s => {
  answers[s] = Array.from({ length: SET_COUNT }, () => Array(SET_SIZE).fill(null));
  graded[s] = Array(SET_COUNT).fill(false);
  orderIdx[s] = Array.from({ length: SET_COUNT }, () => Array.from({ length: SET_SIZE }, (_, i) => i));
});
// Helpers cho bộ đề hiện tại (bộ k gồm câu bank[k*10 .. k*10+9])
const curSet = () => setIdx[current];
const curQ = () => DATA[current].bank.slice(curSet() * SET_SIZE, curSet() * SET_SIZE + SET_SIZE);
const curA = () => answers[current][curSet()];
const curG = () => graded[current][curSet()];
const curO = () => orderIdx[current][curSet()];
const totalQs = (s) => DATA[s].bank.length;

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) { timeLeft = 0; autoSubmit(); }
    renderTimer();
  }, 1000);
  renderTimer();
}
function renderTimer() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  const t = $("timer");
  t.textContent = `⏱ ${m}:${s}`;
  t.classList.toggle("danger", timeLeft < 120);
}
function resetTimer() { timeLeft = 15 * 60; startTimer(); }
function autoSubmit() {
  if (!curG()) { doGrade(true); alert("Hết giờ! Bài đã được tự động nộp."); }
}

function switchSubject(s) {
  if (!DATA[s]) return;
  current = s;
  renderTabs(); renderQuiz();
}

function renderTabs() {
  tabsEl.querySelectorAll(".tab").forEach(b =>
    b.classList.toggle("active", b.dataset.subject === current));
  $("subjectTitle").textContent = DATA[current].title;
  $("subjectDesc").textContent = DATA[current].desc;
  $("statTotal").textContent = ORDER.reduce((n, s) => n + totalQs(s), 0);
  const cc = { toan: $("cardCountToan"), ly: $("cardCountLy"), hoa: $("cardCountHoa") };
  ORDER.forEach(s => {
    if (cc[s]) cc[s].textContent = `${totalQs(s)} câu • 10 bộ đề`;
  });
  const si = $("setInfo");
  if (si) si.textContent = `📚 Bộ ${curSet() + 1} / 10`;
}
function switchSet(k) {
  setIdx[current] = ((k % SET_COUNT) + SET_COUNT) % SET_COUNT;
  resetTimer();
  renderTabs(); renderQuiz();
}

function renderQuiz() {
  const qs = curQ();
  const idx = curO();
  quizEl.innerHTML = "";
  idx.forEach((qi, pos) => {
    const item = qs[qi];
    const your = curA()[qi];
    const isG = curG();
    const isBlank = isG && your === null;
    const isCorrect = isG && your === item.c;

    const card = document.createElement("div");
    card.className = "q-card" + (your !== null ? " answered" : "") +
      (isG ? (isCorrect ? " graded correct" : isBlank ? " graded blank" : " graded wrong") : "");

    const letters = ["A", "B", "C", "D"];
    let badge = "";
    if (isG) {
      if (isCorrect) badge = `<span class="badge ok">✓ Đúng</span>`;
      else if (isBlank) badge = `<span class="badge none">⚪ Chưa trả lời — đáp án đúng: ${letters[item.c]}</span>`;
      else badge = `<span class="badge bad">✕ Sai — đáp án đúng: ${letters[item.c]}</span>`;
    }

    const top = document.createElement("div");
    top.className = "q-top";
    top.innerHTML = `<div class="q-num">${isG ? (isCorrect ? "✓" : isBlank ? "!" : "✕") : (pos + 1)}</div>
      <div class="q-text">Câu ${pos + 1}: ${item.q}<br>${badge}</div>`;
    card.appendChild(top);

    const box = document.createElement("div");
    box.className = "opts";
    item.a.forEach((opt, oi) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      if (your === oi) btn.classList.add("selected");
      if (isG) {
        btn.disabled = true;
        if (oi === item.c) btn.classList.add("correct");
        else if (oi === your) btn.classList.add("wrong");
      }
      btn.innerHTML = `<span class="key">${letters[oi]}</span><span>${opt}</span>`;
      btn.onclick = () => {
        if (curG()) return;
        curA()[qi] = oi;
        renderQuiz();
      };
      box.appendChild(btn);
    });
    card.appendChild(box);

    const ex = document.createElement("div");
    ex.className = "explain";
    ex.innerHTML = isG
      ? `<b>💡 Giải thích:</b> ${item.e}<br><b>Đáp án đúng: ${letters[item.c]}.</b>` +
        (your === null ? ` Bạn <b>chưa chọn</b> câu này.`
          : your === item.c ? ` Bạn chọn đúng! 🎉`
          : ` Bạn chọn ${letters[your]} — sai rồi, xem lại nhé.`)
      : "";
    card.appendChild(ex);
    quizEl.appendChild(card);
  });
  updateProgress();
  renderResult();
}

function updateProgress() {
  const n = curQ().length;
  const done = curA().filter(x => x !== null).length;
  $("progressText").textContent = `Đã làm ${done}/${n}`;
  $("progressBar").style.width = (done / n * 100) + "%";
  $("scoreLive").textContent = curG() ? `Đã chấm: ${scoreOf().toFixed(1)}/10` : "Điểm tạm tính: —";
}

function statsOf() {
  const qs = curQ(), ans = curA();
  let ok = 0, blank = 0;
  qs.forEach((q, i) => {
    if (ans[i] === null) blank++;
    else if (ans[i] === q.c) ok++;
  });
  const wrong = qs.length - ok - blank;
  const score = ok / qs.length * 10;
  const pct = Math.round(ok / qs.length * 100);
  return { ok, wrong, blank, score, pct, total: qs.length };
}

function scoreOf() { return statsOf().score; }

function doGrade(auto = false) {
  const n = curQ().length;
  const done = curA().filter(x => x !== null).length;
  if (done < n && !auto && !curG()) {
    if (!confirm(`Bạn mới làm ${done}/${n} câu. Vẫn nộp bài?`)) return;
  }
  graded[current][curSet()] = true;
  renderQuiz();
  $("resultBox").scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderResult() {
  const box = $("resultBox");
  if (!curG()) { box.classList.add("hidden"); return; }
  box.classList.remove("hidden");
  const st = statsOf();
  $("scoreNum").textContent = st.score.toFixed(1);
  document.getElementById("scoreRing").style.setProperty("--p", (st.score * 10) + "%");
  $("rCorrect").textContent = st.ok;
  $("rWrong").textContent = st.wrong;
  $("rBlank").textContent = st.blank;
  $("rPct").textContent = st.pct + "%";
  let msg = st.score >= 8 ? "Xuất sắc! Bạn nắm bài rất chắc. 🏆"
    : st.score >= 6.5 ? "Khá tốt! Ôn thêm chút nữa là 9-10. 💪"
    : st.score >= 5 ? "Đạt yêu cầu. Xem lại giải thích các câu sai nhé. 📚"
    : "Chưa đạt. Đừng nản — đọc kỹ giải thích và làm lại! 🌱";
  $("resultTitle").textContent = msg;
  $("resultDetail").textContent =
    `Điểm: ${st.score.toFixed(1)}/10 • Đúng ${st.ok}/${st.total} • Sai ${st.wrong} • Chưa trả lời ${st.blank} • Tỉ lệ đúng ${st.pct}%. Kéo lên trên để xem đáp án đúng (xanh 🟩) và giải thích từng câu.`;
}

// events
tabsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (!b) return;
  switchSubject(b.dataset.subject);
});
document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.onclick = () => {
    switchSubject(btn.dataset.goto);
    document.getElementById("board").scrollIntoView({ behavior: "smooth" });
  };
});
$("btnSubmit").onclick = () => doGrade(false);
$("btnReset").onclick = () => {
  if (!confirm("Làm lại từ đầu bộ đề này?")) return;
  answers[current][curSet()] = Array(curQ().length).fill(null);
  graded[current][curSet()] = false; resetTimer(); renderQuiz();
};
$("btnRetry").onclick = () => {
  answers[current][curSet()] = Array(curQ().length).fill(null);
  graded[current][curSet()] = false; resetTimer(); renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("btnNext").onclick = () => {
  const i = ORDER.indexOf(current);
  switchSubject(ORDER[(i + 1) % ORDER.length]);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("btnShuffle").onclick = () => {
  if (curG()) { alert("Bài đã chấm, bấm Làm lại nếu muốn đảo câu hỏi."); return; }
  const a = curO();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  renderQuiz();
};
$("btnSet").onclick = () => {
  const done = curA().filter(x => x !== null).length;
  if (done > 0 && !curG()) {
    if (!confirm(`Bộ này đang làm dở ${done}/${curQ().length} câu (được giữ nguyên). Chuyển sang bộ khác?`)) return;
  }
  switchSet(curSet() + 1);
  document.getElementById("board").scrollIntoView({ behavior: "smooth", block: "start" });
};


renderTabs(); renderQuiz(); resetTimer();
