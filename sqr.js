var containerElement = document.querySelector('#sqr');
var btnElement = document.querySelector('#sqr button');

btnElement.style.marginBottom = '16px';

btnElement.onclick = function addRedSqr() {
    var boxElement = document.createElement('div');

    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#F00';
    
    boxElement.onmouseover = function changeColor() {
        this.style.backgroundColor = getRandomColor();
    }

    containerElement.appendChild(boxElement);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}