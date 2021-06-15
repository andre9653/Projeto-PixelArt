// criar quadro de pixels:
const boardPixel = document.querySelector('#pixel-board');
// função para adicionar elemento, recebe 2 parametros, elemento a ser adicionado e elemento pai:
function creatLines(className) {
  const divLines = document.createElement('div');
  divLines.className = className;
  return divLines;
}
function colorsRandom() {
  const randomColors = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
  return `rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]})`;
}
const palete = document.createElement('div');
palete.classList = 'color blackColor selected';
const palete1 = document.createElement('div');
palete1.classList = 'color redColor';
const palete2 = document.createElement('div');
palete2.classList = 'color blueColor';
const palete3 = document.createElement('div');
palete3.classList = 'color greenColor';
function appendPaletes(elemento) {
  const paletaDeCores = document.querySelector('#PaletaDeCores');
  paletaDeCores.appendChild(elemento);
}
appendPaletes(palete);
appendPaletes(palete1);
appendPaletes(palete2);
appendPaletes(palete3);
function recebeColor(value1, value2) {
  const recebe = value1;
  recebe.style.backgroundColor = value2;
}

const paleteColor = document.querySelector('.blackColor');
recebeColor(paleteColor, 'black');
const paleteColor1 = document.querySelector('.redColor');
recebeColor(paleteColor1, colorsRandom());
const paleteColor2 = document.querySelector('.blueColor');
recebeColor(paleteColor2, colorsRandom());
const paleteColor3 = document.querySelector('.greenColor');
recebeColor(paleteColor3, colorsRandom());
// função pra adicionar todos os blocos:
let bloco = 5;
function appendLines() {
  for (let index = 0; index < bloco; index += 1) {
    boardPixel.appendChild(creatLines('divLines'));
  }
}
appendLines();

function appendBox() {
  const lines = document.querySelectorAll('.divLines');
  for (let index = 0; index < lines.length; index += 1) {
    for (let indice = 0; indice < bloco; indice += 1) {
      lines[index].appendChild(creatLines('pixel'));
    }
  }
}
appendBox();
// adiciona class selected a cor clicada

const cor1 = document.querySelector('.blackColor');
const cor2 = document.querySelector('.redColor');
const cor3 = document.querySelector('.blueColor');
const cor4 = document.querySelector('.greenColor');
function colorSelected(eventoDeOrigem) {
  const evento = eventoDeOrigem.target;
  const classSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < classSelected.length; index += 1) {
    if (classSelected[index] !== evento) {
      classSelected[index].classList.toggle('selected');
    }
  }
  evento.classList.add('selected');
}

function addEvent(value1, value2, value3) {
  value1.addEventListener(value2, value3);
}
addEvent(cor1, 'click', colorSelected);
addEvent(cor2, 'click', colorSelected);
addEvent(cor3, 'click', colorSelected);
addEvent(cor4, 'click', colorSelected);

function alterColor(eventoDeOrigem) {
  const evento = eventoDeOrigem.target;
  const classPixel = document.querySelectorAll('.pixel');
  const colorSelect = document.querySelector('.selected').style.backgroundColor;
  for (let index = 0; index < classPixel.length; index += 1) {
    if (classPixel[index] === evento) {
      classPixel[index].style.backgroundColor = colorSelect;
    }
  }
}
function colorPixel() {
  const classPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < classPixel.length; index += 1) {
    addEvent(classPixel[index], 'click', alterColor);
  }
}
colorPixel();

// resetar quadro de pixels:
const btn = document.querySelector('#clear-board');
function resetColor() {
  const classPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].style.backgroundColor = 'white';
  }
}
addEvent(btn, 'click', resetColor);

// modificar tamanho do quadro de pixels:
const VQV = document.querySelector('#generate-board');
addEvent(VQV, 'click', () => {
  const qntBlocos = document.querySelector('#board-size').value;
  if (qntBlocos === '') {
    alert('Board inválido!');
  } else if (qntBlocos < 5) {
    bloco = 5;
  } else if (qntBlocos > 50) {
    bloco = 50;
  } else {
    bloco = qntBlocos;
  }
  boardPixel.innerText = '';
  appendLines();
  appendBox();
  colorPixel();
});
