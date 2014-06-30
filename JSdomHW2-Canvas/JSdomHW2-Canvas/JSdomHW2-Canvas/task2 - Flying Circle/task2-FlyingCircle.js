var canvas = document.getElementById("the-canvas");
var ctx = canvas.getContext("2d");
var xPosition = 20,
    yPosition = 20,
    xDirection = 1,
    yDirection = 1,
    radius = 10;

function move() {
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, (radius + 2), 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    xPosition += xDirection;
    yPosition += yDirection;
    if (xPosition === radius || xPosition === canvas.width - radius) {
        xDirection *= -1;
    }
    if (yPosition === radius || yPosition === canvas.height - radius) {
        yDirection *= -1;
    }

    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "magenta";
    ctx.fill();
    ctx.stroke();
}

var movement = setInterval(move, 5);