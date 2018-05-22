// Exercicio - 09
// 1 - Pega o elemento
// 2 - Adicionou o evento
// 3 - Lógica

// quem é o this?
const btn = document.querySelector('#btnMudaLayout')
// Chamada de Retorno (CallBack)
// btn.onclick = function () {
//     mudaTexto()
//     mudaLayout()
// }
// Escutador de Evento === Event Listener
btn.addEventListener('click', mudaTexto);
// Explicar a ordem da função (dps do exercicio)
function mudaTexto() {
    if(btn.textContent.trim() == 'Linhas') {
        btn.textContent = 'Blocos'
    } else {
        btn.textContent = 'Linhas'
    }
}

const mural = document.querySelector('.mural')
btn.addEventListener('click', mudaLayout);
// Hoisting // Hasteamento
function mudaLayout() {
    // Adicionar uma classe: mural--linha
    // .cls ajuda a testar as classes
    // if(mural.classList.contains('mural--linha')) {
    //     mural.classList.remove('mural--linha')
    // } else {
    //     mural.classList.add('mural--linha')
    // }
    mural.classList.toggle('mural--linha')
}


btn.classList.remove('no-js')