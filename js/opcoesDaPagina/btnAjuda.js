;(function() {
    const btnAjuda = $('#btnAjuda')

    btnAjuda.on('click', function() {
        const ajudas = [
                        'Bem vindo :)',
                        'Você pode criar cartões',
                        'Você pode orgnizar cartões',
                        'Você pode dar um twist carpado se for o Ceep do Neto cartões',
                        'Você pode exluir cartões'
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