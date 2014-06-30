var paperSecond = Raphael(10, 200, 300, 100);

var you = paperSecond.text(10, 40, 'You');
you.attr({
    'font-size': 70,
    "font-family": "Arial Narrow",
    'font-weight': 'bold',
    "text-anchor": "start"
});

var redRect = paperSecond.rect(120, 0, 155, 82, 20);
redRect.attr({
    fill: '#EC2828',
    stroke: '#EC2828'
});

var tube = paperSecond.text(130, 40, 'Tube');
tube.attr({
    'font-size': 70,
    "font-family": "Arial Narrow",
    'font-weight': 'bold',
    "text-anchor": "start",
    fill: 'white'
});