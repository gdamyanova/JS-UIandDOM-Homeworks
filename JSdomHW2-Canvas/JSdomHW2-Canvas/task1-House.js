var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 3;

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