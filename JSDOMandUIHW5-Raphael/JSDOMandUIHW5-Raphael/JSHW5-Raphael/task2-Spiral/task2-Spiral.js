window.onload = function () {
    var paper = Raphael(0, 0, 1000, 500),
        rad = Math.PI / 180,
        totalSpiralRadius = 185,
        spiralDensity = 0.3;

    drawSpiral(400, 300, 5, 0, 5);

    function drawSpiral(cx, cy, r, startAngle, endAngle) {
        var curstartAngle = startAngle,
            curEndAngle = endAngle,
            curR = r,
            buffer;

        while (curR < totalSpiralRadius) {
            arc(cx, cy, curR, curstartAngle, curEndAngle);

            curR += spiralDensity;
            buffer = curstartAngle;
            curstartAngle = curEndAngle;
            curEndAngle = buffer + 5;
        }
    }

    function arc(cx, cy, r, startAngle, endAngle) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        paper.path(["M", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2]);
    }
};