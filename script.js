function saldoRakeada(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

function obterNivel(saldo) {
    const niveis = {
        Ferro: 10,
        Bronze: 20,
        Prata: 50,
        Ouro: 80,
        Diamante: 90,
        Lendario: 100,
        Imortal: Infinity
    }

    for (const nivel in niveis) {
        if (saldo <= niveis[nivel])
        return nivel;
    }
}

let saldo = saldoRakeada(139, 30)
let nivel = obterNivel(saldo)

console.log('O Herói tem saldo de ' + saldo + ' e está no nível de ' + nivel)