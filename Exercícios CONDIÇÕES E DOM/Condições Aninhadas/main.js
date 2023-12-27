var idade = document.querySelector('#numberIdade')
var verif = document.querySelector('#calcIdade')
verif.addEventListener('click', calcular)
var txtIdade = document.querySelector('#resultadoIdade')

function calcular() {
    var year = Number(idade.value)

    var txtVerIdade = document.createElement('p')
    txtVerIdade.innerText = `Sua idade digitada é ${year}`
    var txtResultado = document.querySelector('#cxResultado')
    txtResultado.prepend(txtVerIdade)

    if (year < 16) {        
        txtIdade.innerText = 'Você é menor de idade, não pode votar'
    } else { /*poderia colocar } else if (year >= 16 && year < 18){*/
        if (year >= 16 && year < 18 || year > 65) { /*aqui foi suprimido (year >= 16 &&) por ser lógico no comando*/
            txtIdade.innerText = 'Você têm o voto facultativo'
        } else {
            txtIdade.innerText = 'Você é maior de idade, pode votar'
            txtIdade.innerHTML += '<p>Exerça sua cidadania</p>'
        }
        
    }
}

var hours = document.querySelector('#hours')
var hora = new Date()
var pegarHora = hora.getHours()

hours.innerText = `São ${pegarHora}.`

if (pegarHora >= 6 || pegarHora <= 12) {
    hours.innerHTML += ' Bom dia'
} else if (pegarHora >= 12 || pegarHora <= 18) {
    hours.innerHTML += ' Boa tarde'
} else {
    hours.innerHTML += ' Boa noite'
}

var dia = document.querySelector('#diaDaSemana')
var semana = new Date()
var pegarDia = semana.getDay()

switch (pegarDia) {
    case 0:
        dia.innerHTML = 'Domingo'
        break;
    case 1:
        dia.innerHTML = 'Segunda'
        break
    case 2:
        dia.innerHTML = 'Terça'
        break
    case 3:
        dia.innerHTML = 'Quarta'
        break
    case 4:
        dia.innerHTML = 'Quinta'
        break
    case 5:
        dia.innerHTML = 'Sexta'
        break
    case 6:
        dia.innerHTML = 'Sábado'
        break
    default:
        dia.innerHTML = 'Dia inválido'
        break;
}
