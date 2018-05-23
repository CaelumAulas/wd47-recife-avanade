let contador = 0
function adicionaCartaoNoMural(conteudo) {
    contador++
    // criar o cartão de forma Imperativa
    // <article id="cartao_${contador}" class="cartao" tabindex="0">
    // const cartao = document.createElement('article') // cria elementos
    // cartao.classList.add('cartao')
    // cartao.id = "cartao_${contador}"
    // cartao.setAttribute('tabindex', '0')
    
    // cartao precisa do html se baseando nos cartões existentes
    // Declarativa :)
    const cartao = $(`
    <article id="cartao_${contador}" class="cartao" tabindex="0">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked="">
            <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable="" tabindex="0">${conteudo}</p>
    </article>
    `)
    // Trabalhar com Componentes JS
    // const cartao = tplCartao.querySelector('.cartao')

    // COPIAR O CONTEUDO DENTRO DO FOR DO CARTAO.JS E COLAR AQUI \/
    cartao.on('click', function (evento) {
        // Delegate bonito
        const elementoAtual = evento.target
        if(elementoAtual.classList.contains('opcoesDoCartao-remove')) {
            cartao.addClass('cartao--some')
            cartao.on('transitionend', () => {
                cartao.remove()
            })    
        }
    })    

    // Adicionar essa classe no focus do cartão
    // cartao--focus-within
    cartao.on('focusin', function() {
        cartao.addClass('cartao--focus-within')
    })
    // Bubbling 
    cartao.on('focusout', function() {
        cartao.removeClass('cartao--focus-within')
    })

    // Delegate
    cartao.on('change', function mudaCor(eventoQueTaConteceno) {
        const elementoAtual = eventoQueTaConteceno.target
        const isRadioTipo = elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

        if(isRadioTipo) {
            console.log('', elementoAtual)
            const corNovaDoCartao = elementoAtual.value
            // cartao.style.backgroundColor = corNovaDoCartao
            cartao.css('background-color', corNovaDoCartao)
        }
    })

    // - Cadastrar um evento no no cartão: keyup, keydown, sendkey, keypress, input
    // - Faz uma condicional para ver se estamos focados nas bolinhas
    // - Identificar enter ou espaço   
    cartao.on('keyup', function (event) {
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
    

    $('.mural').append(cartao)

    // precisa do texto
    // fazer esse cartão aparecer no mural
}