var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var corpo = document.querySelector("body")

function carregar() {
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora <= 12) {
        img.src = '/pic/manha.jpg'
        corpo.style.background = 'blue'
    } else if (hora > 12 && hora <= 18) {
        img.src = '/pic/tarde.jpg'
        corpo.style.background = 'green'
    } else {
        img.src = '/pic/noite.jpg'
        corpo.style.background = 'yellow'
    }{
        
    }
}