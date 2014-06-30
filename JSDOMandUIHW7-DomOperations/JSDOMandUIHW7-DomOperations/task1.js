/*
    1. Write a script that creates a number of div elements. Each div element must have the following
    - Random width and height between 20px and 100px
    - Random background color
    - Random font color
    - Random position on the screen (position:absolute)
    - A strong element with text "div" inside the div
    - Random border radius
    - Random border color
    - Random border width between 1px and 20px
*/

window.onload = function () {

    function generateRandomNumber(to, from) {
        if (!from) from = 0;
        if (!to) to = 100;

        return Math.floor(Math.random() * (to - from) + from);
    }

    function generateColor() {
        var randomRed = generateRandomNumber(255,0);
        var randomGreen = generateRandomNumber(255,0);
        var randomBlue = generateRandomNumber(255,0);

        return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
    }

    function generateDiv() {
        var randomWidth = generateRandomNumber(200, 20);
        var randomHeight = generateRandomNumber(200, 20);

        var leftPos = generateRandomNumber(window.innerWidth,0);
        var topPos = generateRandomNumber(window.innerHeight,0);

        var randomBorderRadius = generateRandomNumber(100, 1);
        var randomBorderWidth = generateRandomNumber(30, 1);

        var div = document.createElement('div');
        var strong = document.createElement('strong');
        var strongContent = document.createTextNode('DIV');

        strong.appendChild(strongContent);
        div.appendChild(strong);

        div.style.position = 'absolute';
        div.style.left = leftPos + 'px';
        div.style.top = topPos + 'px';
        div.style.width = randomWidth + 'px';
        div.style.height = randomHeight + 'px';
        div.style.backgroundColor = generateColor();
        div.style.border = randomBorderWidth + 'px solid ' + generateColor();
        div.style.borderRadius = randomBorderRadius + 'px';

        document.body.appendChild(div);
    }

    var i = 0;
    for (i = 0; i < 20; i++) {
        generateDiv();
    }
};