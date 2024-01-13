function saldoRankeada(vitorias, derrotas) {
    let resultado = vitorias - derrotas

    return resultado
}

let saldo = saldoRankeada(128, 12)
if (saldo <= 10) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Ferro")
} else if (saldo <= 20) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Bronze")
} else if (saldo <= 50) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Prata")
} else if (saldo <= 80) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Ouro")
} else if (saldo <= 90) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Diamante")
} else if (saldo <= 100) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Lendário")
} else if (saldo >= 101) {
    console.log("O Herói tem saldo de " + saldo + " e está no nível de Imortal")
}
