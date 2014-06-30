/*
Create a text area and two inputs with type="color" 
 Make the font color of the text area as the value of the 
first color input 
 Make the background color of the text area as the 
value of the second input
*/

window.onload = function () {
    container = document.createDocumentFragment();

    textarea = document.createElement('textarea');
    textarea.id = 'text';
    textarea.style.width = '300px';
    textarea.style.height = '200px';
    textarea.style.fontSize = '20px';
    textarea.style.fontWeight = 'bold';
    container.appendChild(textarea);

    container.appendChild(document.createElement('br'));

    text = document.createElement('span');
    text.innerHTML += 'Text color: ';
    container.appendChild(text);

    inputTextColor = document.createElement('input');
    inputTextColor.type = 'color';
    inputTextColor.id = 'fontcolor';
    container.appendChild(inputTextColor);

    container.appendChild(document.createElement('br'));

    text = document.createElement('span');
    text.innerHTML += 'Background color: ';
    container.appendChild(text);

    inputBGColor = document.createElement('input');
    inputBGColor.type = 'color';
    inputBGColor.id = 'bgcolor';
    container.appendChild(inputBGColor);

    document.body.appendChild(container);

    //Changing colors on input
    inputTextColor = document.getElementById('fontcolor');
    inputBGColor = document.getElementById('bgcolor');
    textarea = document.getElementById('text');

    inputTextColor.addEventListener('change', function () {
        textarea.style.color = inputTextColor.value;
    });

    inputBGColor.addEventListener('change', function () {
        textarea.style.backgroundColor = inputBGColor.value;
    });
}