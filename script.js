for (let i = 0; i < 5; i++) {
  const papai = document.createElement('div');

  document.getElementById('pixel-board').appendChild(papai);
  papai.classList.add('line');

  for (let j = 0; j < 5; j++) {
    const crianca = document.createElement('div');

    document.getElementsByClassName('line')[i].appendChild(crianca);
    crianca.classList.add('pixel');
  }
}

document.getElementById('preto').classList.add('selected');

document.getElementById('color-palette').addEventListener('click', mudaSelect);
function mudaSelect(event) {
  const papito = document.getElementsByClassName('selected')[0];
  // console.log(papito);
  papito.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementById('pixel-board').addEventListener('click', colocaCor);
function colocaCor(event) {
  const papi = document.getElementsByClassName('selected')[0];
  const vovo = papi.classList[1];
  console.log(vovo);
  event.target.classList.add(vovo);
}

document.getElementsByClassName('color').addEventListener('mouseover', porCima);
function porCima(event) {
  document.getElementById('color').style.backgroundColor = 'white';
}

/* document.getElementsByTagName('h1')[0].addEventListener('click', cricoPerdeu);
function cricoPerdeu() {
  console.log('achou que ia dar errado? Acho errado otario');
  document.getElementsByTagName('h1')[0].style.backgroundColor = 'red';
}

document
  .getElementsByTagName('h1')[0]
  .addEventListener('mouseover', passaPorCima);
function passaPorCima() {
  console.log('passa por cimã gatah!!!');
  document.getElementsByTagName('h1')[0].style.backgroundColor = 'red';
}

document
  .getElementsByTagName('h1')[0]
  .addEventListener('mouseleave', passoReto);
function passoReto() {
  console.log('Tiro');
  document.getElementsByTagName('h1')[0].style.backgroundColor = 'white';
}

//console.log(document.getElementsByClassName('pixel'));

/*document.getElementsByClassName("selected").addEventListener('click', trocaDeSelecao);

function trocaDeSelecao(){
    const irmaoSelect = document.getElementsByClassName("selected");

    irmaoSelect.classList.remove("selected");

} */
