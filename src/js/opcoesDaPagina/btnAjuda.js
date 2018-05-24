;(function() {
    "use strict"

    const btnAjuda = $('#btnAjuda')

    btnAjuda.on('click', function() {
        // const ajudas = [{"conteudo":"Bem vindo ao Ceep!","cor":"#FFAA10"},{"conteudo":"O site é otimizado para celulares!","cor":"#45AAEE"},{"conteudo":"Para mudar o layout, clique no botão Linha do cabeçalho","cor":"#FF1010"}]


        const pegaAjudas = new XMLHttpRequest()

        pegaAjudas.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes/')
        pegaAjudas.responseType = 'json'
        pegaAjudas.send()

        // Assincrona
        pegaAjudas.addEventListener('load', function() {
            pegaAjudas.response.instrucoes.forEach(function(ajuda) {
                        adicionaCartaoNoMural(ajuda)
                })
        })

        // AJAJ
        // Asynchrounous
        // JavaScript
        // And
        // JSON

        // qual url
        // o que vai fazer lá
        // e o que fazer com o que retornar
        
        // ajudas.forEach(function(ajuda) {
        //         adicionaCartaoNoMural(ajuda)
        // })
        // function forEach(funcao) {
        //     for(const itemDoSeuArray of seuArray) {
        //         funcao(itemDoSeuArray)
        //     }
        // }
    })

    btnAjuda.removeClass('no-js')
})()