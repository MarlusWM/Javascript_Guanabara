function num() { /*funcao*/
    return num /*acao*/
}
num(2) /*chamada*/

/*em uma funçao basica*/
function soma(n1, n2) { 
    return n1 + n2
}
console.log(soma(2,5)) /*retorno

/*funcao com parametros padroes*/
function som(n1=0, n2=0) { //se não colocar, ele retorna nan
    return n1+n2
}
console.log(`O resultado de função com parâmetro padrão é ${som(2)}`)

/*funcao através de variaveis*/
let v = function mult(x) {
    return x*2
}
console.log(v(5))

/*funcao recursiva*/
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))
/*conceito
5! fatorial = 5x4x3x2x1= 120
5! = 5x4!=120
então se deduz que:
n! = n x (n-1)!
1! = 1
*/