// criar quadro de pixels:
const boardPixel = document.querySelector('#pixel-board');
// função para adicionar elemento, recebe 2 parametros, elemento a ser adicionado e elemento pai:
function creatLines(className) {
  const divLines = document.createElement('div');
  divLines.className = className;
  return divLines;
}



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


function addEvent(value1, value2, value3) {
  value1.addEventListener(value2, value3);
}


function alterColor(eventoDeOrigem) {
  const evento = eventoDeOrigem.target;
  const classPixel = document.querySelectorAll('.pixel');
  const colorSelect = document.querySelector('.selected').value;
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
const qntBlocos = document.querySelector('#board-size');

qntBlocos.addEventListener('keypress', (event) => {
const qntBlocos = document.querySelector('#board-size').value;
  const key = event.key
  if (key === 'Enter') {
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
  }
})

