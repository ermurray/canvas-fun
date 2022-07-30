const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  console.log(ctx);


function drawfractal(startX, startY, length, angle, segmentW, color1, color2){
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = segmentW;
  ctx.translate(startX, startY)
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0,0);
  ctx.lineTo(0, -length);
  ctx.stroke();

  if (length < 5) {
    ctx.restore();
    return;
  }
  drawfractal(0, -length * 0.95, length * 0.75, angle + 15, segmentW * 0.75);
  drawfractal(0, -length * 0.95, length * 0.75, angle - 15, segmentW * 0.75);

  ctx.restore();
}

drawfractal(canvas.width/2, canvas.height -40, 120, 0, 10, 'brown', 'green')