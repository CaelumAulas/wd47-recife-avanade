# Anotações do Curso

## 08 - Limpando os cartões cartunescos
- Lixinho apaga os cartões
- Usuário: 
    - Usuário clica na lixeira
    - Cartão some
- Dev:
    - tirar o cartão da lista
        - apagar o cartão clicado
    - evento 
        - qual foi clicado?
    - Single Page Application 

- JavaScript roda:
 - No page load
 - Pelo console da pra "forçar" um código;
 - Conseguimos escutar interação do usuário;
- **Página 73 Capitulo 8**
- Fazer remover todos os cartões com "onclick"


## Telas da vida
Notebook FullHD 1920x1080
Celular FullHD 1920x1080 / Viewport of Iphone 6: 320x600

====

## Capitulo 09 - Saga Mudando o Layout: Muda o Texto
- Blocos
- Linhas
- Usuário:
    - Usuario clica
    - Botão muda pra blocos e vice-versa
- Dev:
    - Registar um click 
    - onclick === escutador evento
    - Qual elemento que recebe o onclick?

>// 1 - Pega o elemento
>// 2 - Adicionou o evento
>// 3 - Lógica

# Capitulo 10 - Saga Mudando o Layout: Organizar os cartoes
- Mexer no layout, envolve css;
- Usar as funções do Class List para manipular o: mural--linha

> Para flexbox: https://flexboxfroggy.com/
> CollabCode: https://www.youtube.com/channel/UCVheRLgrk7bOAByaQ0IVolg/videos

```js
// Ideia de como funfa o addEventListener
const arrayComAsFuncoesDoClickDoBotao = [mudaTexto, mudaLayout]

addEventListener('click', mudaTexto)
addEventListener('click', mudaLayout)


for(arrayComAsFuncoesDoClickDoBotao) {
    arrayComAsFuncoesDoClickDoBotao[i]()
}
```

# Capitulo 11 - Progressive Enhancement
- Cria o seletor `.no-js``
- Adiciona a classe no-js nos elementos com possível funcionalidade (btnLinhas, btnSync, Busca, Form Novo Cartao)

# Capitulo 12 - Removendo cartões com emoção :)
- opacidade pra fazer animação;
- adicionar essa classe css: cartao--some
- usar função "anemona"

# Capitulo 13 (pag 85) - Exterminando todos os cartões
- Usando querySelectorAll;
- Let do poder;
- 

# Capitulo 14 - Focando nos cartões em qualquer lugar
- CSS
- Hover
- display: none;
- focusin e focusout no addEventListener adicionando classe css :)
- Estudarem mais CSS do BEM: http://getbem.com/introduction/
- https://mariosouto.com/

# Capitulo 15 - Trocando as cores loucamente
- Usuario clica na bolinha
- Dev:
    - Adicionar um evento: click na bolinha ou no cartao?
    - Fazer um if pra ver qual cor
    - Pegar a cor da bolinha e aplica no cartão
    - Usar o delegate, fazendo o cartão mandar o filho executar o evento

# Capitulo 16 - Delegate para ajustar a navegação de teclado
- Cadastrar um evento no no cartão: keyup, keydown, sendkey, keypress, input
- Faz uma condicional para ver se estamos focados nas bolinhas
- Identificar enter ou espaço
- Forçar o click na label
- Testem o parâmetro `event` do evento de keyup e dos outros: `keyup, keydown, sendkey, keypress, input`
- Brinquem no http://keycode.info/
## Desafio
- Tenta fazer algum atalho de teclado; (faz aparecer um alert ou algo do genero)
- Descobre a diferença de == para ===
    - Verfica o tipo e o valor: ===
    - Verifica só o valor: ==

# Capitulo 17 - 


















