function showMessage() {
  document.getElementById("messageBox").classList.remove("hidden");
}

const flirtyLines = [
  "So let me warm you up with some cheeky lines sweetie",
  "Are you cake? Because I want a slice of you every day 🍰😉",
  "You’re so sweet, you give me a sugar rush 🥰",
  "If kisses were snowflakes, I'd send you a blizzard 😘",
  "You're aging like fine wine… but I’m drunk on you already 🍷💋",
  "So my dear girl I would like you to know that you are a special person to me, a strong and caring woman",
  "I love the times where I was lost in your love, the feelings the rush you made me experience... Those experiences are something I would not experience if it weren't you",
  "I really love you so much and my love keeps growing and growing...Wishing you a happy birthday love."
];

function moreLove() {
  const line = flirtyLines[Math.floor(Math.random() * flirtyLines.length)];
  document.getElementById("flirtyLine").textContent = line;
}

// Simple hearts animation
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 10 + 10,
  speed: Math.random() * 2 + 1,
}));

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const heart of hearts) {
    ctx.fillStyle = "#ff4d6d";
    ctx.beginPath();
    ctx.arc(heart.x, heart.y, heart.size / 2, 0, Math.PI * 2);
    ctx.fill();

    heart.y += heart.speed;
    if (heart.y > canvas.height) {
      heart.y = -heart.size;
      heart.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawHearts);
}
drawHearts();
