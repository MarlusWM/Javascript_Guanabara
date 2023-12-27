const a = document.querySelector('#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


function clicar() {
    a.innerText = 'Clicou'
    a.style.background = 'red'
}

function entrar() {
    a.innerText ='Entrou'
    a.style.background = 'green'
}

function sair() {
    a.innerText = 'Saiu'
    a.style.background = 'yellow'
}




const b = document.querySelector('#inputSomar')
b.addEventListener('click', clicarMouse)

function clicarMouse() {
    var oneInput = document.querySelector('#txtn1')    
    var twoInput = document.querySelector('#txtn2')
    var n1 = Number(oneInput.value)
    var n2 = Number(twoInput.value) 

    var result = document.querySelector('#resultado')

    var soma = (n1 + n2)
    result.innerText = `O resultado é ${soma}`
}