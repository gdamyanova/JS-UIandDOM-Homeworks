var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = "teal";
ctx.fillStyle = "skyblue";

//bicycle
//wheels
ctx.save();
ctx.beginPath();
ctx.arc(300, 700, 75, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(600, 700, 75, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 700);
ctx.lineTo(450, 700);
ctx.lineTo(580, 600);
ctx.lineTo(400, 600);
ctx.lineTo(300, 700);
ctx.stroke();

ctx.beginPath();
ctx.arc(450, 700, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 700);
ctx.lineTo(580, 600);
ctx.lineTo(570, 550);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(510, 560);
ctx.lineTo(570, 550);
ctx.lineTo(610, 510);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(345, 550);
ctx.lineTo(410, 550);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(376, 550);
ctx.lineTo(450, 700);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 670);
ctx.lineTo(450, 700);
ctx.setLineDash([25, 15]);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(475, 730);
ctx.lineTo(450, 700);
ctx.setLineDash([25, 15]);
ctx.stroke();
ctx.restore();