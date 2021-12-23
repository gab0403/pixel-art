let cor = document.querySelectorAll('.color');

function remover(evento) {
  cor.forEach((color) => color.classList.remove('selected'));
  evento.target.classList.add('selected');
  //classList é útil para adicionar, remover e alternar classes CSS em um elemento.
  //forEach executa uma função callback para cada elemento do array. Pesquisado no blog da Trybe <https://blog.betrybe.com/javascript/javascript-foreach/>
}
cor.forEach((color) => color.addEventListener('click', remover));


let pixel = document.getElementsByClassName('pixel')

function onloadColor() {
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].addEventListener("click", function () {
      pixel[index].style.backgroundColor = "black";
    })
  }//Deixa a cor preta pré-definida.
}
onloadColor()

function black() {
  let cor1 = document.getElementById("cor1")
  cor1.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].addEventListener("click", function () {
        pixel[index].style.backgroundColor = "black";
      })
    }  //A cor preta pode ser selecionada.
  })
}
black()

function lilas() {
  let cor2 = document.getElementById("cor2")
  cor2.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].addEventListener("click", function () {
        pixel[index].style.backgroundColor = "#cdb4db";
      })
    }
  })
}
lilas()

function ciano() {
  let cor3 = document.getElementById("cor3")
  cor3.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].addEventListener("click", function () {
        pixel[index].style.backgroundColor = "#83c5be";
      })
    }
  })
}
ciano()

function rosa() {
  let cor4 = document.getElementById("cor4")
  cor4.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].addEventListener("click", function () {
        pixel[index].style.backgroundColor = "#e5989b";
      })
    }
  })
}
rosa()

function limpar() {
  let limpar = document.getElementById("clear-board")
  limpar.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index++) {
      pixel[index].style.backgroundColor = "white";
    }
    console.log('test');
  })
}
limpar()