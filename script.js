const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

const shapes = [];

for (let i = 0; i < 50; i++) {
  shapes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.3,
    type: Math.floor(Math.random() * 3)
  });
}

function drawShape(s) {
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 2;

  if (s.type === 0) {
    ctx.strokeRect(s.x, s.y, s.size, s.size);
  } else if (s.type === 1) {
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x + s.size, s.y);
    ctx.lineTo(s.x + s.size / 2, s.y - s.size);
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size / 2, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  shapes.forEach(s => {
    s.y -= s.speed;
    if (s.y < -50) s.y = canvas.height + 50;
    drawShape(s);
  });

  requestAnimationFrame(animate);
}

animate();
