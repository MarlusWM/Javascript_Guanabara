var geTab = document.querySelector('#gerarTabuada')
geTab.addEventListener('click', gerar)

var tab = document.querySelector('#resultado')

function gerar(){
    var numero = document.querySelector('#inNumber')
    
    if (numero.value.length == 0) {
        alert('[ERRO] Insira um número válido')
    } else {
        var n = Number(numero.value)
        var c = 0
        tab.innerHTML = '' /*isso é usado para limpar os espaços antes de uma nova geração de resultados*/
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}