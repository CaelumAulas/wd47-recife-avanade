;(function() {

    const cartoes = document.querySelectorAll('.cartao')

    for(const cartao of cartoes) {
        // Adicionar essa classe no focus do cartão
        // cartao--focus-within
        cartao.addEventListener('focusin', function() {
            cartao.classList.add('cartao--focus-within')
        })
        // Bubbling 
        cartao.addEventListener('focusout', function() {
            cartao.classList.remove('cartao--focus-within')
        })

        // Delegate
        cartao.addEventListener('change', function mudaCor(eventoQueTaConteceno) {
            const elementoAtual = eventoQueTaConteceno.target
            const isRadioTipo = elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

            if(isRadioTipo) {
                console.log('', elementoAtual)
                const corNovaDoCartao = elementoAtual.value
                cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        // - Cadastrar um evento no no cartão: keyup, keydown, sendkey, keypress, input
        // - Faz uma condicional para ver se estamos focados nas bolinhas
        // - Identificar enter ou espaço   
        cartao.addEventListener('keyup', function (event) {
            // Testem o event de keyup e os outros
            // Brinquem no http://keycode.info/
            const elementoAtual = event.target
            const isOpcoesDoCartaoTipo = elementoAtual.classList.contains('opcoesDoCartao-tipo')

            if(isOpcoesDoCartaoTipo && ( event.key == 'Enter' || event.key == ' ') ) {
                elementoAtual.click()
            }

            // console.log('Ctrl', event.ctrlKey)
            // console.log('Tecla', event.key)
        })
        
    }

})()
