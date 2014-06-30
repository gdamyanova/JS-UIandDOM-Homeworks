var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');
//face
ctx.lineWidth = 3;
ctx.strokeStyle = "teal";
ctx.fillStyle = "skyblue";
ctx.beginPath();
//ctx.scale(1, 1);
ctx.arc(300, 300, 75, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//eyes
ctx.beginPath();
ctx.save();
ctx.scale(1, 0.6);
ctx.arc(260, 470, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(320, 470, 15, 0, 2 * Math.PI);
ctx.stroke();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.fillStyle = "teal";
ctx.scale(0.6, 1);
ctx.arc(425, 283, 6, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(525, 283, 6, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.restore();

//nose
ctx.beginPath();
ctx.moveTo(290, 320);
ctx.lineTo(270, 320);
ctx.lineTo(290, 280);
ctx.stroke();

//mouth
ctx.beginPath();
ctx.save();
ctx.rotate(10 * Math.PI / 180);
ctx.lineWidth = 4;
ctx.scale(1, 0.3);
ctx.arc(340, 960, 25, 0, 2 * Math.PI);
ctx.stroke();
ctx.restore();

//hat - bottom
ctx.save();
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.fillStyle = "#386491";
ctx.beginPath();
ctx.scale(1, 0.25);
ctx.arc(300, 900, 90, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

//hat - top
ctx.restore();
ctx.lineWidth = 3;
ctx.save();
ctx.strokeStyle = "black";
ctx.fillStyle = "#396693";
ctx.beginPath();
ctx.scale(1, 0.3);
ctx.arc(300, 430, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.lineTo(350, 430);
ctx.arc(300, 710, 50, 0, Math.PI);
ctx.lineTo(250, 430);
ctx.fill();
ctx.stroke();
ctx.restore();