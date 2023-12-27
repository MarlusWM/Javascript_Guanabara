
var idade = document.querySelector('#digIdade')
var result = document.querySelector('#resultado')
var sexM = document.querySelector('#masculino')
var sexF = document.querySelector('#feminino')



var verificar = document.querySelector('#verificar')
verificar.addEventListener('click', verif)

function verif(){
    var data = new Date()
    var dataHoje = data.getFullYear()

    if (Number(idade.value.length) == 0 || Number(idade.value) > dataHoje) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var calcIdade = dataHoje - Number(idade.value)
        var genero = ''

        if (sexM.checked) {
            genero = 'Homem'
            if(calcIdade >= 0 && calcIdade < 10) {
                img.setAttribute ('src', 'pic/menino.jpg')
            } else if (calcIdade >= 10 && calcIdade < 17) {
                img.setAttribute ('src', 'pic/adoleHomem.jpg')
            } else if (calcIdade >= 17 && calcIdade < 60) {
                img.setAttribute ('src', 'pic/adultoHomem.jpg')
            } else if (calcIdade >= 60) {
                img.setAttribute ('src', 'pic/idosoHomem.jpg')
            }
        } else if(sexF.checked) {
            genero = 'Mulher'
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Verficicamos ${genero} de ${calcIdade}`
        result.appendChild(img)
    }
}