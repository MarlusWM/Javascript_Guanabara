let num = document.querySelector('#insertNumber')
let lista = document.querySelector('#fLista')
let res = document.querySelector('#res')

let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n <= 100)) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

let incluir = document.querySelector('#adic')
incluir.addEventListener('click', adicionar)

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('VALORE INVÁLIDO OU JÁ ENCONTRADO NA LISTA')
    }
    num.value = ''
    num.focus()
}

let contar = document.querySelector('#finalizar')
contar.addEventListener('click', finalizar)

function finalizar() {
    if (valores.length == 0) {
        alert('ADICIONE VALORES ANTES DE FINALIZAR')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma/tot
            if (valores[pos] > maior) 
            maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]            
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}`
        res.innerHTML += `Na média, temos ${media}`
    }
}