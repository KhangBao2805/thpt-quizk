const DATA = {
  toan: {
    title: "📐 Toán học",
    desc: "Đại số, Giải tích, Hình học — chọn đáp án rồi bấm Nộp bài để chấm điểm.",
    questions: [
      { q: "Đạo hàm của hàm số y = x³ − 2x² + 5 là:", a: ["y' = 3x² − 4x", "y' = 3x² − 2x + 5", "y' = x² − 4x", "y' = 3x² − 4x + 5"], c: 0, e: "Áp dụng (xⁿ)' = n·xⁿ⁻¹: (x³)'=3x², (−2x²)'=−4x, (5)'=0." },
      { q: "Nghiệm của phương trình 2ˣ = 16 là:", a: ["x = 2", "x = 3", "x = 4", "x = 8"], c: 2, e: "16 = 2⁴ nên x = 4." },
      { q: "Giá trị của log₂(32) bằng:", a: ["3", "4", "5", "6"], c: 2, e: "32 = 2⁵ nên log₂32 = 5." },
      { q: "Cho cấp số cộng có u₁ = 3, d = 4. Số hạng u₅ bằng:", a: ["15", "19", "23", "18"], c: 1, e: "uₙ = u₁ + (n−1)d → u₅ = 3 + 4×4 = 19." },
      { q: "Diện tích hình tròn bán kính r = 3 là:", a: ["6π", "9π", "12π", "3π"], c: 1, e: "S = πr² = π×9 = 9π." },
      { q: "Lim (2n+1)/(n+2) khi n→∞ bằng:", a: ["1", "2", "1/2", "+∞"], c: 1, e: "Chia tử mẫu cho n: (2+1/n)/(1+2/n) → 2." },
      { q: "Thể tích khối lập phương cạnh a = 2 là:", a: ["4", "6", "8", "12"], c: 2, e: "V = a³ = 2³ = 8." },
      { q: "Phương trình x² − 5x + 6 = 0 có nghiệm:", a: ["x=1, x=6", "x=2, x=3", "x=−2, x=−3", "Vô nghiệm"], c: 1, e: "Δ = 25−24 = 1 → x = (5±1)/2 = 2 hoặc 3." },
      { q: "Hai vectơ vuông góc thì tích vô hướng và cos góc bằng:", a: ["1", "0", "−1", "1/2"], c: 1, e: "Vuông góc → tích vô hướng = 0 → cos = 0." },
      { q: "Nguyên hàm của f(x) = 2x là:", a: ["x² + C", "x²", "2 + C", "2x² + C"], c: 0, e: "∫2x dx = x² + C." }
    ]
  },
  ly: {
    title: "⚡ Vật Lý",
    desc: "Cơ học, Điện, Dao động & Sóng — nắm công thức là ăn điểm.",
    questions: [
      { q: "Đơn vị của lực trong hệ SI là:", a: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"], c: 2, e: "Lực đo bằng Newton (N). Joule là công/năng lượng." },
      { q: "Vật rơi tự do từ độ cao h, vận tốc khi chạm đất (bỏ qua cản):", a: ["v = gh", "v = √(2gh)", "v = 2gh", "v = h/t"], c: 1, e: "Bảo toàn cơ năng: mgh = ½mv² → v = √(2gh)." },
      { q: "Định luật Ohm cho đoạn mạch: I = ?", a: ["U·R", "U/R", "R/U", "U²/R"], c: 1, e: "I = U/R: cường độ tỉ lệ thuận với hiệu điện thế." },
      { q: "Chu kỳ con lắc đơn (biên độ nhỏ): T = ?", a: ["2π√(g/l)", "2π√(l/g)", "2π√(m/k)", "π√(l/g)"], c: 1, e: "T = 2π√(l/g), chỉ phụ thuộc chiều dài và g." },
      { q: "Sóng cơ KHÔNG truyền được trong môi trường nào?", a: ["Rắn", "Lỏng", "Khí", "Chân không"], c: 3, e: "Sóng cơ cần môi trường vật chất → không truyền trong chân không." },
      { q: "Công suất điện P = ?", a: ["U·I", "U/I", "I²·R²", "U²·I"], c: 0, e: "P = U·I = I²R = U²/R." },
      { q: "Tán sắc ánh sáng chứng tỏ:", a: ["Ánh sáng là sóng ngang", "Ánh sáng trắng gồm nhiều màu", "Ánh sáng có tính hạt", "Ánh sáng truyền thẳng"], c: 1, e: "Newton: lăng kính tách ánh sáng trắng thành dải màu." },
      { q: "Gia tốc trong chuyển động thẳng đều:", a: ["a = 0", "a = const ≠ 0", "a tăng dần", "a giảm dần"], c: 0, e: "Thẳng đều: vận tốc không đổi → gia tốc bằng 0." },
      { q: "Bước sóng λ liên hệ v và f:", a: ["λ = v·f", "λ = v/f", "λ = f/v", "λ = v + f"], c: 1, e: "v = λf → λ = v/f." },
      { q: "Lực hướng tâm chuyển động tròn đều: F = ?", a: ["mv²/r", "mvr", "mv/r²", "mr²/v"], c: 0, e: "F_ht = m·a_ht = m·v²/r." }
    ]
  },
  hoa: {
    title: "🧪 Hóa học",
    desc: "Vô cơ & Hữu cơ — bảng tuần hoàn, phản ứng đặc trưng và mẹo nhớ nhanh.",
    questions: [
      { q: "Ký hiệu hóa học của Natri là:", a: ["N", "Na", "Ni", "Ne"], c: 1, e: "Natri: Na (Latin Natrium). N là Nitơ." },
      { q: "pH của dung dịch HCl 0,01M xấp xỉ:", a: ["2", "7", "12", "1"], c: 0, e: "pH = −log[H⁺] = −log(0,01) = 2." },
      { q: "Khí làm đục nước vôi trong Ca(OH)₂ là:", a: ["O₂", "H₂", "CO₂", "N₂"], c: 2, e: "CO₂ + Ca(OH)₂ → CaCO₃↓ (trắng đục) + H₂O." },
      { q: "Kim loại nào dẫn điện tốt nhất?", a: ["Đồng (Cu)", "Nhôm (Al)", "Bạc (Ag)", "Sắt (Fe)"], c: 2, e: "Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe." },
      { q: "Công thức phân tử của Metan là:", a: ["C₂H₄", "CH₄", "C₂H₆", "CO₂"], c: 1, e: "Metan — ankan đơn giản nhất: CH₄." },
      { q: "Axit + Bazơ → ?", a: ["Muối + Nước", "Muối + Khí", "Chỉ nước", "Chỉ muối"], c: 0, e: "Phản ứng trung hòa: Axit + Bazơ → Muối + Nước." },
      { q: "Nguyên tố có Z = 1 là:", a: ["Heli", "Oxi", "Hidro", "Liti"], c: 2, e: "Z=1 là Hidro (H), nhẹ nhất bảng tuần hoàn." },
      { q: "Dung dịch nào làm quỳ tím hóa đỏ?", a: ["NaOH", "NaCl", "HCl", "KNO₃"], c: 2, e: "Axit (HCl) → quỳ đỏ; bazơ → quỳ xanh." },
      { q: "Liên kết trong NaCl thuộc loại:", a: ["Cộng hóa trị", "Ion", "Kim loại", "Hidro"], c: 1, e: "Kim loại điển hình + phi kim điển hình → liên kết ion." },
      { q: "Số oxi hóa của S trong H₂SO₄ là:", a: ["+4", "+6", "−2", "0"], c: 1, e: "2(+1) + x + 4(−2) = 0 → x = +6." }
    ]
  }
};

const ORDER = ["toan", "ly", "hoa"];
let current = "toan";
let answers = {};
let graded = {};
let orderIdx = {};
let timeLeft = 15 * 60, timerId = null;

const $ = (id) => document.getElementById(id);
const quizEl = $("quiz"), tabsEl = $("subjectTabs");

ORDER.forEach(s => {
  answers[s] = Array(DATA[s].questions.length).fill(null);
  graded[s] = false;
  orderIdx[s] = DATA[s].questions.map((_, i) => i);
});

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
  if (!graded[current]) { doGrade(true); alert("Hết giờ! Bài đã được tự động nộp."); }
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
  $("statTotal").textContent = ORDER.reduce((n, s) => n + DATA[s].questions.length, 0);
}

function renderQuiz() {
  const qs = DATA[current].questions;
  const idx = orderIdx[current];
  quizEl.innerHTML = "";
  idx.forEach((qi, pos) => {
    const item = qs[qi];
    const your = answers[current][qi];
    const isG = graded[current];
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
        if (graded[current]) return;
        answers[current][qi] = oi;
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
  const n = DATA[current].questions.length;
  const done = answers[current].filter(x => x !== null).length;
  $("progressText").textContent = `Đã làm ${done}/${n}`;
  $("progressBar").style.width = (done / n * 100) + "%";
  $("scoreLive").textContent = graded[current] ? `Đã chấm: ${scoreOf(current).toFixed(1)}/10` : "Điểm tạm tính: —";
}

function statsOf(s) {
  const qs = DATA[s].questions;
  let ok = 0, blank = 0;
  qs.forEach((q, i) => {
    if (answers[s][i] === null) blank++;
    else if (answers[s][i] === q.c) ok++;
  });
  const wrong = qs.length - ok - blank;
  const score = ok / qs.length * 10;
  const pct = Math.round(ok / qs.length * 100);
  return { ok, wrong, blank, score, pct, total: qs.length };
}

function scoreOf(s) { return statsOf(s).score; }

function doGrade(auto = false) {
  const n = DATA[current].questions.length;
  const done = answers[current].filter(x => x !== null).length;
  if (done < n && !auto && !graded[current]) {
    if (!confirm(`Bạn mới làm ${done}/${n} câu. Vẫn nộp bài?`)) return;
  }
  graded[current] = true;
  renderQuiz();
  $("resultBox").scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderResult() {
  const box = $("resultBox");
  if (!graded[current]) { box.classList.add("hidden"); return; }
  box.classList.remove("hidden");
  const st = statsOf(current);
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
  if (!confirm("Làm lại từ đầu môn này?")) return;
  answers[current] = Array(DATA[current].questions.length).fill(null);
  graded[current] = false; resetTimer(); renderQuiz();
};
$("btnRetry").onclick = () => {
  answers[current] = Array(DATA[current].questions.length).fill(null);
  graded[current] = false; resetTimer(); renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("btnNext").onclick = () => {
  const i = ORDER.indexOf(current);
  switchSubject(ORDER[(i + 1) % ORDER.length]);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
$("btnShuffle").onclick = () => {
  if (graded[current]) { alert("Bài đã chấm, bấm Làm lại nếu muốn đảo câu hỏi."); return; }
  const a = orderIdx[current];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  renderQuiz();
};

renderTabs(); renderQuiz(); resetTimer();
