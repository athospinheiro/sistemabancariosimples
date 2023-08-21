const dados = require('../bancodedados');
const { buscarRetornarConta } = require('../funcoes');
const { format } = require('date-fns');

const depositar = (req, res) => {

    const { numero_conta, valor } = req.body;
    const buscarConta = buscarRetornarConta(Number(numero_conta));
    if (Number(valor) <= 0) {
        return res.status(400).json({ "mensagem": "O valor de depósito foi informado de forma errada" });
    }
    const saldoAtual = Number(buscarConta.saldo);
    const saldoAtualizado = saldoAtual + Number(valor);
    buscarConta.saldo = saldoAtualizado;
    const dataAtual = new Date();
    const registroDeposito = {
        data: format(dataAtual, "dd/MM/yyyy HH:mm   :ss"),
        numero_conta,
        valor
    }
    dados.depositos.push(registroDeposito);

    return res.status(201).json({ "mensagem": "Depósito realizado com sucesso." });

};
const sacar = (req, res) => {

    const { numero_conta, valor } = req.body;

    const buscarConta = buscarRetornarConta(Number(numero_conta));
    if (Number(buscarConta.saldo) < Number(valor)) {
        return res.status(400).json({ "mensagem": "Saldo insuficiente." });
    }
    const saldoAtual = Number(buscarConta.saldo);
    const saldoAtualizado = saldoAtual - Number(valor);
    buscarConta.saldo = saldoAtualizado;
    const dataAtual = new Date();
    const registroSaque = {
        data: format(dataAtual, "dd/MM/yyyy HH:mm:ss"),
        numero_conta,
        valor
    }
    dados.saques.push(registroSaque);
    return res.status(201).json({ "mensagem": "Saque realizado com sucesso." });

}
const transferir = (req, res) => {

    const { numero_conta_origem, numero_conta_destino, senha, valor } = req.body;

    const buscarContaOrigem = buscarRetornarConta(Number(numero_conta_origem));

    const buscarContaDestino = buscarRetornarConta(Number(numero_conta_destino));
    if (senha != buscarContaOrigem.usuario.senha) {
        return res.status(400).json({ "mensagem": "Senha inválida." });
    }
    if (Number(buscarContaOrigem.saldo) < Number(valor)) {
        return res.status(400).json({ "mensagem": "Saldo insuficiente." });
    }
    const saldoAtualOrigem = Number(buscarContaOrigem.saldo);
    const saldoAtualizadoOrigem = saldoAtualOrigem - Number(valor);
    buscarContaOrigem.saldo = saldoAtualizadoOrigem;
    const saldoAtualDestino = Number(buscarContaDestino.saldo);
    const saldoAtualizadoDestino = saldoAtualDestino + Number(valor);
    buscarContaDestino.saldo = saldoAtualizadoDestino;
    const dataAtual = new Date();
    const registroTransferencia = {
        data: format(dataAtual, "dd/MM/yyyy HH:mm:ss"),
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    dados.transferencias.push(registroTransferencia);
    return res.status(201).json({ "mensagem": "Transferência realizada com sucesso." });

}
const saldo = (req, res) => {

    const { numero_conta } = req.query;


    const buscarConta = buscarRetornarConta(Number(numero_conta));

    // if (!buscarConta) {
    //     return res.status(404).json({ "mensagem": "Conta não encontrada." });
    // }
    // if (senha != buscarConta.usuario.senha) {
    //     return res.status(400).json({ "mensagem": "Senha inválida" });
    // }
    return res.json(`Saldo : ${buscarConta.saldo}`);


}
const extrato = (req, res) => {

    const { numero_conta, senha } = req.query;

    const buscarConta = buscarRetornarConta(Number(numero_conta));

    const depositos = dados.depositos.filter((conta) => {
        return conta.numero_conta == numero_conta;
    })
    const saques = dados.saques.filter((conta) => {
        return conta.numero_conta == numero_conta;
    })
    const transferenciasEnviadas = dados.transferencias.filter((conta) => {
        return conta.numero_conta_origem == numero_conta;
    })
    const transferenciasRecebidas = dados.transferencias.filter((conta) => {
        return conta.numero_conta_destino == numero_conta;
    });
    const extrato = [
        {
            depositos,
            saques,
            transferenciasEnviadas,
            transferenciasRecebidas
        }
    ]
    return res.json(extrato);


}
module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato
}   