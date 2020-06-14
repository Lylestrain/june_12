function changeColour() {
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = colour ;
    document.getElementById('colourOutput').innerHTML = ':' + colour;
}

document.getElementById('rangeRed').addEventListener('click' , changeColour);
document.getElementById('rangeGreen').addEventListener('click' , changeColour);
document.getElementById('rangeBlue').addEventListener('onInput' , changeColour);