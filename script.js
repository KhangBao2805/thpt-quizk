const DATA = {
  toan: {
    title: "📐 Toán học",
    desc: "Đại số, Giải tích, Hình học — chọn đáp án rồi bấm Nộp bài để chấm điểm.",
    sets: [
      [
      { q: "Đạo hàm của hàm số y = x³ − 2x² + 5 là:", a: ["y' = 3x² − 4x", "y' = 3x² − 2x + 5", "y' = x² − 4x", "y' = 3x² − 4x + 5"], c: 0, e: "Áp dụng (xⁿ)' = n·xⁿ⁻¹: (x³)'=3x², (−2x²)'=−4x, (5)'=0." },
      { q: "Nghiệm của phương trình 2ˣ = 16 là:", a: ["x = 2", "x = 3", "x = 4", "x = 8"], c: 2, e: "16 = 2⁴ nên x = 4." },
      { q: "Giá trị của log₂(32) bằng:", a: ["3", "4", "5", "6"], c: 2, e: "32 = 2⁵ nên log₂32 = 5." },
      { q: "Cho cấp số cộng có u₁ = 3, d = 4. Số hạng u₅ bằng:", a: ["15", "19", "23", "18"], c: 1, e: "uₙ = u₁ + (n−1)d → u₅ = 3 + 4×4 = 19." },
      { q: "Diện tích hình tròn bán kính r = 3 là:", a: ["6π", "9π", "12π", "3π"], c: 1, e: "S = πr² = π×9 = 9π." },
      { q: "Lim (2n+1)/(n+2) khi n→∞ bằng:", a: ["1", "2", "1/2", "+∞"], c: 1, e: "Chia tử mẫu cho n: (2+1/n)/(1+2/n) → 2." },
      { q: "Thể tích khối lập phương cạnh a = 2 là:", a: ["4", "6", "8", "12"], c: 2, e: "V = a³ = 2³ = 8." },
      { q: "Phương trình x² − 5x + 6 = 0 có nghiệm:", a: ["x=1, x=6", "x=2, x=3", "x=−2, x=−3", "Vô nghiệm"], c: 1, e: "Δ = 25−24 = 1 → x = (5±1)/2 = 2 hoặc 3." },
      { q: "Hai vectơ vuông góc thì tích vô hướng và cos góc bằng:", a: ["1", "0", "−1", "1/2"], c: 1, e: "Vuông góc → tích vô hướng = 0 → cos = 0." },
      { q: "Nguyên hàm của f(x) = 2x là:", a: ["x² + C", "x²", "2 + C", "2x² + C"], c: 0, e: "∫2x dx = x² + C." },
      ],
      [
      { q: "Hàm số y = x³ − 3x + 2 đồng biến trên khoảng nào?", a: ["(−1; 1)", "(−∞; −1) và (1; +∞)", "(0; +∞)", "(−∞; 0)"], c: 1, e: "y' = 3x² − 3 > 0 ⇔ x² > 1 ⇔ x < −1 hoặc x > 1." },
      { q: "Tích phân ∫₀¹ 3x² dx bằng:", a: ["1", "3", "1/3", "0"], c: 0, e: "Nguyên hàm là x³ → [x³]₀¹ = 1." },
      { q: "Mô-đun của số phức z = 3 − 4i bằng:", a: ["5", "7", "25", "−1"], c: 0, e: "|z| = √(3² + (−4)²) = 5." },
      { q: "Trong Oxyz, khoảng cách từ M(1; 2; 3) đến mặt phẳng (Oxy) bằng:", a: ["1", "2", "3", "√14"], c: 2, e: "Khoảng cách bằng |z_M| = 3." },
      { q: "Gieo một con súc sắc cân đối, xác suất xuất hiện mặt 6 chấm là:", a: ["1/6", "1/2", "1/3", "5/6"], c: 0, e: "1 kết quả thuận lợi trên 6 kết quả đồng khả năng." },
      { q: "Số cách chọn 2 học sinh từ 10 học sinh là:", a: ["20", "45", "90", "100"], c: 1, e: "C(10,2) = 10×9/2 = 45." },
      { q: "Thể tích khối chóp S.ABCD có đáy hình vuông cạnh a, SA ⊥ đáy, SA = a là:", a: ["a³", "a³/3", "a³/2", "2a³/3"], c: 1, e: "V = (1/3)·a²·a = a³/3." },
      { q: "Nghiệm của phương trình log₂(x − 1) = 3 là:", a: ["x = 7", "x = 8", "x = 9", "x = 10"], c: 2, e: "x − 1 = 2³ = 8 → x = 9." },
      { q: "Giá trị lớn nhất của hàm số y = −x² + 4x − 3 là:", a: ["1", "2", "3", "4"], c: 0, e: "Parabol đỉnh x = 2 → y = −4 + 8 − 3 = 1." },
      { q: "Cấp số nhân có u₁ = 2, q = 3. Số hạng u₃ bằng:", a: ["6", "12", "18", "24"], c: 2, e: "u₃ = u₁·q² = 2×9 = 18." }
      ]
    ]
  },
  ly: {
    title: "⚡ Vật Lý",
    desc: "Cơ học, Điện, Dao động & Sóng — nắm công thức là ăn điểm.",
    sets: [
      [
      { q: "Đơn vị của lực trong hệ SI là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"], c: 2, e: "Lực đo bằng Newton (N). Joule là công/năng lượng." },
      { q: "Vật rơi tự do từ độ cao h, vận tốc khi chạm đất (bỏ qua cản):", a: ["v = gh", "v = √(2gh)", "v = 2gh", "v = h/t"], c: 1, e: "Bảo toàn cơ năng: mgh = ½mv² → v = √(2gh)." },
      { q: "Định luật Ohm cho đoạn mạch: I = ?", a: ["U·R", "U/R", "R/U", "U²/R"], c: 1, e: "I = U/R: cường độ tỉ lệ thuận với hiệu điện thế." },
      { q: "Chu kỳ con lắc đơn (biên độ nhỏ): T = ?", a: ["2π√(g/l)", "2π√(l/g)", "2π√(m/k)", "π√(l/g)"], c: 1, e: "T = 2π√(l/g), chỉ phụ thuộc chiều dài và g." },
      { q: "Sóng cơ KHÔNG truyền được trong môi trường nào?", a: ["Rắn", "Lỏng", "Khí", "Chân không"], c: 3, e: "Sóng cơ cần môi trường vật chất → không truyền trong chân không." },
      { q: "Công suất điện P = ?", a: ["U·I", "U/I", "I²·R²", "U²·I"], c: 0, e: "P = U·I = I²R = U²/R." },
      { q: "Tán sắc ánh sáng chứng tỏ:", a: ["Ánh sáng là sóng ngang", "Ánh sáng trắng gồm nhiều màu", "Ánh sáng có tính hạt", "Ánh sáng truyền thẳng"], c: 1, e: "Newton: lăng kính tách ánh sáng trắng thành dải màu." },
      { q: "Gia tốc trong chuyển động thẳng đều:", a: ["a = 0", "a = const ≠ 0", "a tăng dần", "a giảm dần"], c: 0, e: "Thẳng đều: vận tốc không đổi → gia tốc bằng 0." },
      { q: "Bước sóng λ liên hệ v và f:", a: ["λ = v·f", "λ = v/f", "λ = f/v", "λ = v + f"], c: 1, e: "v = λf → λ = v/f." },
      { q: "Lực hướng tâm chuyển động tròn đều: F = ?", a: ["mv²/r", "mvr", "mv/r²", "mr²/v"], c: 0, e: "F_ht = m·a_ht = m·v²/r." },
      ],
      [
      { q: "Động năng của vật m = 2 kg chuyển động với v = 3 m/s là:", a: ["6 J", "9 J", "12 J", "18 J"], c: 1, e: "W = ½·m·v² = ½×2×9 = 9 J." },
      { q: "Đặt U = 20 V vào điện trở R = 10 Ω, cường độ dòng điện là:", a: ["0,5 A", "2 A", "200 A", "5 A"], c: 1, e: "I = U/R = 20/10 = 2 A." },
      { q: "Sóng dừng trên dây dài l, hai đầu cố định. Họa âm cơ bản (k = 1) có bước sóng:", a: ["λ = l", "λ = 2l", "λ = l/2", "λ = 4l"], c: 1, e: "l = kλ/2 → với k = 1 thì λ = 2l." },
      { q: "Công thoát A = 2 eV. Giới hạn quang điện λ₀ xấp xỉ:", a: ["0,31 μm", "0,62 μm", "1,24 μm", "0,41 μm"], c: 1, e: "λ₀ = hc/A ≈ 0,62 μm." },
      { q: "Mạch RLC nối tiếp xảy ra cộng hưởng điện khi:", a: ["Z_L = Z_C", "R = 0", "U_L = U", "I = 0"], c: 0, e: "ωL = 1/(ωC) → Z_L = Z_C, cường độ hiệu dụng cực đại." },
      { q: "Electron bay vuông góc vào từ trường đều B với vận tốc v, độ lớn lực Lorentz là:", a: ["|q|vB", "|q|v/B", "|q|B/v", "0"], c: 0, e: "f = |q|vB·sin90° = |q|vB." },
      { q: "Lực F = 10 N kéo vật đi s = 5 m, góc giữa F và hướng dịch chuyển là 60°. Công A bằng:", a: ["50 J", "25 J", "43,3 J", "0 J"], c: 1, e: "A = F·s·cos60° = 10×5×0,5 = 25 J." },
      { q: "Chu kỳ con lắc lò xo T = 2π√(m/k). Nếu m tăng 4 lần thì T:", a: ["tăng 2 lần", "tăng 4 lần", "giảm 2 lần", "không đổi"], c: 0, e: "T tỉ lệ với √m → tăng √4 = 2 lần." },
      { q: "Năng lượng liên kết hạt nhân có độ hụt khối Δm là:", a: ["Δm·c²", "Δm/c²", "Δm·c", "Δm²·c"], c: 0, e: "E_lk = Δm·c² (hệ thức Einstein)." },
      { q: "Thấu kính hội tụ f = 10 cm, vật thật cách kính 30 cm cho ảnh cách kính:", a: ["15 cm, ảnh thật", "15 cm, ảnh ảo", "30 cm, ảnh thật", "10 cm, ảnh thật"], c: 0, e: "1/d' = 1/10 − 1/30 = 1/15 → d' = 15 cm > 0: ảnh thật." }
      ]
    ]
  },
  hoa: {
    title: "🧪 Hóa học",
    desc: "Vô cơ & Hữu cơ — bảng tuần hoàn, phản ứng đặc trưng và mẹo nhớ nhanh.",
    sets: [
      [
      { q: "Ký hiệu hóa học của Natri là:", a: ["N", "Na", "Ni", "Ne"], c: 1, e: "Natri: Na (Latin Natrium). N là Nitơ." },
      { q: "pH của dung dịch HCl 0,01M xấp xỉ:", a: ["2", "7", "12", "1"], c: 0, e: "pH = −log[H⁺] = −log(0,01) = 2." },
      { q: "Khí làm đục nước vôi trong Ca(OH)₂ là:", a: ["O₂", "H₂", "CO₂", "N₂"], c: 2, e: "CO₂ + Ca(OH)₂ → CaCO₃↓ (trắng đục) + H₂O." },
      { q: "Kim loại nào dẫn điện tốt nhất?", a: ["Đồng (Cu)", "Nhôm (Al)", "Bạc (Ag)", "Sắt (Fe)"], c: 2, e: "Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe." },
      { q: "Công thức phân tử của Metan là:", a: ["C₂H₄", "CH₄", "C₂H₆", "CO₂"], c: 1, e: "Metan — ankan đơn giản nhất: CH₄." },
      { q: "Axit + Bazơ → ?", a: ["Muối + Nước", "Muối + Khí", "Chỉ nước", "Chỉ muối"], c: 0, e: "Phản ứng trung hòa: Axit + Bazơ → Muối + Nước." },
      { q: "Nguyên tố có Z = 1 là:", a: ["Heli", "Oxi", "Hidro", "Liti"], c: 2, e: "Z=1 là Hidro (H), nhẹ nhất bảng tuần hoàn." },
      { q: "Dung dịch nào làm quỳ tím hóa đỏ?", a: ["NaOH", "NaCl", "HCl", "KNO₃"], c: 2, e: "Axit (HCl) → quỳ đỏ; bazơ → quỳ xanh." },
      { q: "Liên kết trong NaCl thuộc loại:", a: ["Cộng hóa trị", "Ion", "Kim loại", "Hidro"], c: 1, e: "Kim loại điển hình + phi kim điển hình → liên kết ion." },
      { q: "Số oxi hóa của S trong H₂SO₄ là:", a: ["+4", "+6", "−2", "0"], c: 1, e: "2(+1) + x + 4(−2) = 0 → x = +6." },
      ],
      [
      { q: "Công thức của etyl axetat là:", a: ["CH₃COOH", "CH₃COOC₂H₅", "C₂H₅OH", "HCOOCH₃"], c: 1, e: "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O." },
      { q: "Chất nào sau đây lưỡng tính?", a: ["NaOH", "HCl", "Al(OH)₃", "NaCl"], c: 2, e: "Al(OH)₃ tan được trong cả axit và kiềm." },
      { q: "Cho glucozơ tác dụng AgNO₃/NH₃ (tráng bạc), hiện tượng là:", a: ["kết tủa đỏ gạch", "lớp bạc sáng bám thành ống", "sủi bọt khí", "dung dịch hóa xanh"], c: 1, e: "Nhóm −CHO khử Ag⁺ thành Ag bám thành ống nghiệm." },
      { q: "Kim loại nào thụ động trong HNO₃ đặc, nguội?", a: ["Cu", "Al", "Ag", "Mg"], c: 1, e: "Al (cùng Fe, Cr) tạo màng oxit bảo vệ." },
      { q: "pH của dung dịch NaOH 0,01M là:", a: ["2", "7", "12", "10"], c: 2, e: "[OH⁻] = 0,01 → pOH = 2 → pH = 12." },
      { q: "Để điều chế 1 mol Al từ Al³⁺ cần số mol electron là:", a: ["1", "2", "3", "6"], c: 2, e: "Al³⁺ + 3e → Al." },
      { q: "Ancol etylic có nhiệt độ sôi cao hơn ankan tương ứng chủ yếu vì:", a: ["liên kết ion", "liên kết hidro liên phân tử", "khối lượng mol lớn", "liên kết kim loại"], c: 1, e: "Nhóm −OH tạo liên kết hidro liên phân tử." },
      { q: "Đun axit axetic với ancol etylic (H₂SO₄ đặc) thu được:", a: ["etyl axetat + nước", "metyl axetat + H₂", "axit + ete", "không phản ứng"], c: 0, e: "Phản ứng este hóa thuận nghịch tạo este + nước." },
      { q: "Kim loại mạnh nhất trong dãy K, Mg, Al, Cu là:", a: ["Cu", "Al", "Mg", "K"], c: 3, e: "Tính khử giảm dần: K > Mg > Al > Cu." },
      { q: "Phân tử khối của CaCO₃ là:", a: ["84", "100", "56", "40"], c: 1, e: "40 + 12 + 16×3 = 100." }
      ]
    ]
  }
};

const ORDER = ["toan", "ly", "hoa"];
let current = "toan";
let setIdx = { toan: 0, ly: 0, hoa: 0 }; // bộ đề đang làm của mỗi môn
let answers = {};  // answers[mon][bo] = [...]
let graded = {};   // graded[mon][bo] = bool
let orderIdx = {}; // orderIdx[mon][bo] = [...]
let timeLeft = 15 * 60, timerId = null;

const $ = (id) => document.getElementById(id);
const quizEl = $("quiz"), tabsEl = $("subjectTabs");

function initSubjectState(s) {
  answers[s] = DATA[s].sets.map(set => Array(set.length).fill(null));
  graded[s] = DATA[s].sets.map(() => false);
  orderIdx[s] = DATA[s].sets.map(set => set.map((_, i) => i));
}
ORDER.forEach(initSubjectState);
// Helpers cho bộ đề hiện tại
const curSet = () => setIdx[current];
const curQ = () => DATA[current].sets[curSet()];
const curA = () => answers[current][curSet()];
const curG = () => graded[current][curSet()];
const curO = () => orderIdx[current][curSet()];
const totalQs = (s) => DATA[s].sets.reduce((n, set) => n + set.length, 0);

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
    if (cc[s]) cc[s].textContent = `${totalQs(s)} câu • ${DATA[s].sets.length} bộ đề`;
  });
  const si = $("setInfo");
  if (si) si.textContent = `📚 Bộ ${curSet() + 1} / ${DATA[current].sets.length} • ${curQ().length} câu`;
}
function switchSet(k) {
  const n = DATA[current].sets.length;
  setIdx[current] = ((k % n) + n) % n;
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
  const n = DATA[current].sets.length;
  const done = curA().filter(x => x !== null).length;
  if (done > 0 && !curG()) {
    if (!confirm(`Bộ này đang làm dở ${done}/${curQ().length} câu (được giữ nguyên). Chuyển sang bộ khác?`)) return;
  }
  switchSet(curSet() + 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};


renderTabs(); renderQuiz(); resetTimer();
