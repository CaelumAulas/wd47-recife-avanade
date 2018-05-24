// // Módulos no JavaScript
// // FIE
// // IIFE
//     // Imediately
//     // Invocked
//     // Function by
//     // Expression
// ;(function () {

// // Converter esse código p/ Delegate
// // Colocar no cartão.js 
// const botoesRemover = document.querySelectorAll('.opcoesDoCartao-remove')
// console.log('window',this)
// for(let i = 0; i < botoesRemover.length; i++) {

//     botoesRemover[i].addEventListener('click', function () {
//         const cartao = botoesRemover[i].parentNode.parentNode
        
//         cartao.classList.add('cartao--some')
//         cartao.addEventListener('transitionend', () => {
//             cartao.remove()
//         })
//     })    
// }
// // Garbage Collector limpa variaveis nao mais usadas



// })()


//     // setTimeout(() => {
//     //     console.log('é o botao', this)
//     // }, 0)
//     // setTimeout(function () {
//     //     console.log('é o botao', this)
//     // }, 0)

//     // setTimeout(function () { // Função anonima
//     //     console.log('aqui dentro')
//     //     cartao.remove()
//     // }, 5000)