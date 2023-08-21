const dados = require('./bancodedados');

const buscarRetornarConta = (conta) => {
    arrayContas = dados.contas;

    const contaSolicitada = arrayContas.find((contaPessoa) => {
        return contaPessoa.numero == conta;
    });
    return contaSolicitada;
}

const jaExisteCpf = (numero) => {
    const arrayCpfs = dados.contas.filter((conta) => {
        return conta.cpf = numero;
    });
    if (arrayCpfs.length > 0) {
        return true;
    } else {
        return false;
    }
}
module.exports = {
    buscarRetornarConta
}