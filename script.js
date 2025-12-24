let c = 10;

const cd = document.getElementById("countdown");
const m = document.getElementById("message");
const ss = document.getElementById("slideshow");
const sp = document.getElementById("slide");
const st = document.getElementById("stext");
const music = document.getElementById("music");

const slides = [
  { photo: "photo1.jpg", text: "You are amazing 💖" },
  { photo: "photo2.jpg", text: "Keep smiling always 😊" },
  { photo: "photo3.jpg", text: "This year is ours ✨" }
];

let idx = 0;

setInterval(() => {
  if (c > 0) {
    c--;
    cd.textContent = c;
  }

  if (c === 0) {
    cd.style.display = "none";
    m.classList.remove("hidden");
    ss.classList.remove("hidden");
    music.play();

    startShow();
    startFireworks();
    startSnow();
    startRoses();
  }
}, 1000);

function startShow() {
  setInterval(() => {
    sp.src = slides[idx].photo;
    st.innerHTML = slides[idx].text;
    idx = (idx + 1) % slides.length;
  }, 5000);
}

// 🎆 Fireworks
function startFireworks() {
  const cv = document.getElementById("fireworks");
  const ctx = cv.getContext("2d");
  cv.width = innerWidth;
  cv.height = innerHeight;

  let p = [];

  function add() {
    for (let i = 0; i < 120; i++) {
      p.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height / 2,
        dx: (Math.random() - 0.5) * 6,
        dy: (Math.random() - 0.5) * 6,
        l: 100
      });
    }
  }

  (function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    p.forEach((o, i) => {
      ctx.fillStyle = "gold";
      ctx.fillRect(o.x, o.y, 3, 3);
      o.x += o.dx;
      o.y += o.dy;
      o.l--;
      if (o.l < 0) p.splice(i, 1);
    });
    if (p.length < 200) add();
    requestAnimationFrame(anim);
  })();
}

// ❄ Snow
function startSnow() {
  const cv = document.getElementById("snow");
  const ctx = cv.getContext("2d");
  cv.width = innerWidth;
  cv.height = innerHeight;

  let f = Array.from({ length: 200 }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    r: Math.random() * 3 + 1,
    s: Math.random() + 0.5
  }));

  (function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    f.forEach(o => {
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      o.y += o.s;
      if (o.y > cv.height) o.y = 0;
    });
    requestAnimationFrame(anim);
  })();
}

// 🌹 Roses
function startRoses() {
  const cv = document.getElementById("roses");
  const ctx = cv.getContext("2d");
  cv.width = innerWidth;
  cv.height = innerHeight;

  let r = Array.from({ length: 60 }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    s: Math.random() + 0.5
  }));

  (function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    r.forEach(o => {
      ctx.fillStyle = "pink";
      ctx.beginPath();
      ctx.arc(o.x, o.y, 5, 0, Math.PI * 2);
      ctx.fill();
      o.y += o.s;
      if (o.y > cv.height) o.y = 0;
    });
    requestAnimationFrame(anim);
  })();
}
