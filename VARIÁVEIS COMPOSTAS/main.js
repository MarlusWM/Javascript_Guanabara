
let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
console.log(`Qual tamanho do vetor? ${num.length}`)
console.log(`Qual o número na posição 0, ou no índice 0 ? ${num[0]}`)

/*pode-se utilizar no for*/

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} é ${num[pos]}`)
}

for(let pos in num){
    console.log(`testando o for in com arrays, onde a posição ${pos} é o número ${num[pos]}`)
}