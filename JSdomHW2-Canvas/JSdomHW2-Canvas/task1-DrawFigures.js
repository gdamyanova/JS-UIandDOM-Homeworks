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

//house... I'm, sick of Canvas already
ctx.strokeStyle = "black";
ctx.fillStyle = "#975B5B";
ctx.beginPath();
ctx.fillRect(800, 300, 350, 300);
ctx.strokeRect(800, 300, 350, 300);
ctx.fill();
ctx.stroke();

//windows
ctx.save();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.strokeRect(820, 330, 130, 90);
ctx.fillRect(820, 330, 130, 90);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeRect(990, 330, 130, 90);
ctx.fillRect(990, 330, 130, 90);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeRect(990, 460, 130, 90);
ctx.fillRect(990, 460, 130, 90);
ctx.stroke();
ctx.fill();

ctx.restore();


ctx.beginPath();
ctx.moveTo(885, 330);
ctx.lineTo(885, 420);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(820, 375);
ctx.lineTo(950, 375);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1055, 330);
ctx.lineTo(1055, 420);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(990, 375);
ctx.lineTo(1120, 375);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1055, 460);
ctx.lineTo(1055, 550);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(990, 505);
ctx.lineTo(1120, 505);
ctx.stroke();


//door
ctx.beginPath();
ctx.moveTo(885, 600);
ctx.lineTo(885, 460);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(840, 600);
ctx.lineTo(840, 505);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(930, 600);
ctx.lineTo(930, 505);
ctx.stroke();

ctx.beginPath();
ctx.arc(885, 505, 45, (1 * Math.PI), 0);
ctx.stroke();

ctx.beginPath();
ctx.arc(875, 550, 5, 0, (2 * Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.arc(895, 550, 5, 0, (2 * Math.PI));
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800, 300);
ctx.lineTo(975, 125);
ctx.lineTo(1150, 300);
ctx.lineTo(800, 300);
ctx.fill();
ctx.stroke();

//chimney
ctx.beginPath();
ctx.fillRect(1050, 150, 40, 110);
ctx.fill();
ctx.beginPath();
ctx.moveTo(1050, 260);
ctx.lineTo(1050, 150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1090, 260);
ctx.lineTo(1090, 150);
ctx.stroke();
ctx.beginPath();
ctx.scale(1, 0.3);
ctx.arc(1070, 495, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

