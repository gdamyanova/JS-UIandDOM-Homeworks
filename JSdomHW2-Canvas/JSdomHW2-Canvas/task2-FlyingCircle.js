var canvas = document.getElementById("the-canvas");
var ctx = canvas.getContext("2d");
var xCoordinate = 20,
    yCoordinate = 20,
    xDirection = 1,
    yDirection = 1,
    radius = 10;

function move() {
    ctx.beginPath();
    ctx.arc(xCoordinate, yCoordinate, (radius + 2), 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    xCoordinate += xDirection;
    yCoordinate += yDirection;
    if (xCoordinate === radius || xCoordinate === canvas.width - radius) {
        xDirection *= -1;
    }
    if (yCoordinate === radius || yCoordinate === canvas.height - radius) {
        yDirection *= -1;
    }

    ctx.beginPath();
    ctx.arc(xCoordinate, yCoordinate, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "magenta";
    ctx.fill();
    ctx.stroke();
}

var movement = setInterval(move, 5);