const canvas = document.getElementById('fractal-trees');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 60;

  console.log(ctx);


function drawTree(startX, startY, length, angle, segmentW, color1, color2){
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = segmentW;
  ctx.lineCap = "round";
  ctx.translate(startX, startY)
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0,0);
  ctx.lineTo(0, -length);
  ctx.stroke();
 

  if (length < 5 || segmentW < 1) {
    ctx.restore();
    return;
  }
  drawTree(0, -length * 0.95, length * 0.75, angle + 15, segmentW * 0.75);
  drawTree(0, -length * 0.95, length * 0.75, angle - 15, segmentW * 0.75);

  ctx.restore();
}

drawTree(canvas.width/2, canvas.height -40, 200, 0, 20, 'brown', 'green')