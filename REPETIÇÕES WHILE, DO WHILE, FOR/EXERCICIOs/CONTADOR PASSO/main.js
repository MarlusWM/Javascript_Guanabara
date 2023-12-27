

var contar = document.querySelector('#contar')
contar.addEventListener('click', calcular)

function calcular(){
    var ini = document.querySelector('#formIni')
    var fim = document.querySelector('#formFim')
    var passo = document.querySelector('#formPasso')
    var result = document.querySelector('#resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] FALTAM DADOS')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){ /*contagem crescente*/
            for(var c = i; c <= f; c += p){
            result.innerHTML += `${c}, `}       
        } else {
            for(var c = i; c >= f; c -= p){
            result.innerHTML += `${c}, `}
        }
    }result.innerHTML += 'FIM'
}