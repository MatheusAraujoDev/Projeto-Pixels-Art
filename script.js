const divColors = document.getElementsByClassName('.color');

function setColorToPalette() {
  for (let index = 0; index < divColors.length; index += 1) {
    const idColorDivs = divColors[index].id;
    if (divColors[index].getElementsByClassName.backgroundColor !== 'black') {
      divColors[0].getElementsByClassName.backgroundColor = 'black';
    }
    divColors[index].getElementsByClassName.backgroundColor = idColorDivs;
  }
}
setColorToPalette();

function setBlack() {
  const elementBlack = document.getElementById('black');
  elementBlack.classList.add('selected');
}
window.onload = setBlack;

function getColor(event) {
  if (event.target.classList[0] === 'color') {
    const colorSelected = document.querySelectorAll('.selected');
    for (let index = 0; index < colorSelected.length; index += 1) {
      colorSelected[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', getColor);

function handleSelected(e) {
  const colorSelected = document.querySelector('.selected');
  if (e.target.className === 'pixel') {
    const cor = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
    const clickedPixel = e.target;
    clickedPixel.style.background = cor;
  }
}

function setColorToBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', handleSelected);
}
setColorToBoard();

function clearColors() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const deleteButton = document.getElementById('clear-button');
deleteButton.addEventListener('click', clearColors);
