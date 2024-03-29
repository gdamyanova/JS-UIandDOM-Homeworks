﻿/*
Task2 - Write a script that creates 5 div elements and moves 
them in circular path with interval of 100 milliseconds 
*/

window.onload = function () {

    function generateRandomNumber(to, from) {
        if (!from) from = 0;
        if (!to) to = 100;

        return Math.floor(Math.random() * (to - from) + from);
    }

    function generateColor() {
        var randomRed = generateRandomNumber(255);
        var randomGreen = generateRandomNumber(255);
        var randomBlue = generateRandomNumber(255);

        return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
    }

    function generateDiv() {
        var width = 100;
        var height = 100;

        var leftPos = 75;
        var topPos = 75;

        var borderRadius = 30;
        var borderWidth = 3;

        var div = document.createElement('div');

        div.style.position = 'absolute';
        div.style.left = leftPos + 'px';
        div.style.top = topPos + 'px';
        div.style.margin = 250 + 'px';
        div.style.width = width + 'px';
        div.style.height = height + 'px';
        div.style.backgroundColor = generateColor();
        div.style.border = borderWidth + 'px solid ' + generateColor();
        div.style.borderRadius = borderRadius + 'px';

        document.body.appendChild(div);
    }

    var i = 0;

    for (i = 0; i < 5; i++) {
        generateDiv();
    }

    var allDivs = document.querySelectorAll('div');
    var angle = 0;
    var radius = 50;
    var maxAngle = false;

    function animateDiv() {
        for (i = 0; i < 5; i++) {
            allDivs[i].style.left = Math.cos(angle + 2 * Math.PI / allDivs.length * i) / radius * 10000 + 'px';
            allDivs[i].style.top = Math.sin(angle + 2 * Math.PI / allDivs.length * i) / radius * 10000 + 'px';
        }

        angle = angle + 0.1;

        setTimeout(animateDiv, 50);
    }

    animateDiv();

};