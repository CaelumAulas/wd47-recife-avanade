;(function() {
    // formNovoCartao
    const form = document.querySelector('.formNovoCartao')
    let contador = document.querySelectorAll('.cartao').length
    form.addEventListener('submit', function(event) {
        // Form da refresh por padrão
        // Tem que acaba com isso
        event.preventDefault()
    
        // Pega o textarea e pega o innerHTML
        const textarea = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = textarea.value
        const isTextAreaVazio = conteudo.trim().length === 0
        
        if(isTextAreaVazio) {
            // <div class="formNovoCartao-msg">Não digite vários nada</div>
            const msgErro = document.createElement('div')
            msgErro.classList.add('formNovoCartao-msg')
            msgErro.textContent = 'Não digite vários nada'

            // Jogar uma mensagem de erro na tela
            const btnSalvar = form.querySelector('.formNovoCartao-salvar')

            btnSalvar.insertAdjacentElement('beforebegin', msgErro)
            msgErro.addEventListener('animationend', function(event) {
                msgErro.remove()
            })
            // Desabilitar o botão
        } else {
            // TIRA TODO O CÓDIGO DAQUI E JOGA NA FUNÇÃO DENTRO DO MURAL.JS
            const conteudoDoNovoCartao = conteudo
            adicionaCartaoNoMural(conteudoDoNovoCartao)
            // Quem for terminando faz funcionar por aqui tbm :)
        } // else acaba aqui :) 

        textarea.value = ''
        

    })
    
    
    form.classList.remove('no-js')
})()