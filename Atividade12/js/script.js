var janela = document.querySelector('img');

janela.addEventListener('mouseover', () => {
  janela.src = "./img/aberta.png"
})
janela.addEventListener('mouseout', () => {
  janela.src = "./img/fechada.png"
})
janela.addEventListener('click', () => {
  janela.src = "./img/quebrada.png"
})