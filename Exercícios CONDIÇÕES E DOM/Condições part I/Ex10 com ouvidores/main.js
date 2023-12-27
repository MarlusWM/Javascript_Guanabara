const verif = document.querySelector('#verificar');
verif.addEventListener('click', verifique);

function verifique() {
        var vel = document.querySelector('#velocidade');
        var velocity = Number(vel.value);
        var text = document.querySelector('#resultado');

        text.innerHTML = `Sua velocidade é de ${velocity} km/h. `;

        if (velocity > 60) {
        text.innerHTML += `Você ultrapassou o limite.`;
        } else {
        text.innerHTML += `Você está dentro do limite de velocidade.`;
        text.innerHTML += `<p>Lembre de usar o cinto de segurança.</p>`;
        }
}