;(function() {
    const btnAjuda = $('#btnAjuda')

    btnAjuda.on('click', function() {
        const ajudas = [
                        { conteudo: 'Bem vindo :)', cor: 'red' },
                        { conteudo: 'Você pode criar cartões' , cor: 'blue'},
                        { conteudo: 'Você pode orgnizar cartões', cor: 'blue'},
                        { conteudo: 'Você pode dar um twist carpado se for o Ceep do Neto cartões', cor: 'blue'},
                        { conteudo: 'Você pode exluir cartões', cor: 'blue'},
                        { conteudo: 'Mais uma ajuda', cor: 'blue'}
                    ]
        ajudas.forEach(function(ajuda) {
                adicionaCartaoNoMural(ajuda)
        })
        // function forEach(funcao) {
        //     for(const itemDoSeuArray of seuArray) {
        //         funcao(itemDoSeuArray)
        //     }
        // }
    })

    btnAjuda.removeClass('no-js')
})()