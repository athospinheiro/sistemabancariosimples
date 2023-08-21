const dados = require('../bancodedados');
const { buscarRetornarConta } = require('../funcoes');

const listarContas = (req, res) => {
    return res.json(dados.contas);
}

const criarConta = (req, res) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;


    ++dados.contadorContas;
    const numeroConta = dados.contadorContas.toString();

    const novoUsuario = {
        numero: numeroConta,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };
    dados.contas.push(novoUsuario);
    return res.status(201).json(novoUsuario);

}

const atualizarUsuario = (req, res) => {

    const { numeroConta } = req.params;
    const contaSolicitada = buscarRetornarConta(Number(numeroConta));

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (nome) {
        contaSolicitada.usuario.nome = nome;
    }
    if (cpf) {
        contaSolicitada.usuario.cpf = cpf;
    }
    if (data_nascimento) {
        contaSolicitada.usuario.data_nascimento = data_nascimento;
    }
    if (telefone) {
        contaSolicitada.usuario.telefone = telefone;
    }
    if (email) {
        contaSolicitada.usuario.email = email;
    }
    if (senha) {
        contaSolicitada.usuario.senha = senha;
    }
    return res.status(201).json({ "mensagem": "Conta atualizada com sucesso." });
}

const excluirConta = (req, res) => {

    const { numeroConta } = req.params;
    const contaSolicitada = buscarRetornarConta(Number(numeroConta));
    if (contaSolicitada.saldo > 0) {
        return res.status(400).json({ "mensagem": "Não é possível excluir a conta pois a mesma contém saldo positivo." })
    }

    const encontrarPosicao = dados.contas.findIndex((conta) => {
        return conta.numero == contaSolicitada.numero;
    });

    dados.contas.splice(encontrarPosicao, 1);


    return res.json({ "mensagem": "Conta excluída com sucesso." });
}


module.exports = {
    listarContas,
    criarConta,
    atualizarUsuario,
    excluirConta
}