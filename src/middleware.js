const dados = require('./bancodedados')
const { buscarRetornarConta } = require('./funcoes');

const testeSenha = (req, res, next) => {
    const { senha_banco } = req.query;
    if (senha_banco == dados.banco.senha) {
        next();
    }
    if (!senha_banco) {
        return res.status(400).json({ "mensagem": "É necessário preencher o campo senha" });
    }
    if (senha_banco != dados.banco.senha) {
        return res.status(400).json({ "mensagem": "Senha inválida." });
    }
};

const preencherCamposObrigatorios = (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ "mensagem": "É necessário preencher todos os campos obrigatórios." });
    }
    else {
        next();
    }
}

const buscarCpfEmail = (req, res, next) => {
    const { cpf, email } = req.body;
    const buscarCpf = dados.contas.find((conta) => {
        return conta.usuario.cpf == cpf;
    });
    const buscarEmail = dados.contas.find((conta) => {
        return conta.usuario.email == email;
    });
    if (buscarCpf || buscarEmail) {
        return res.status(400).json({ "mensagem": "Já existe um CPF ou EMAIL cadastrados com as informações desejadas." });
    }
    else {
        next();
    }
}

const buscarConta = (req, res, next) => {
    const { numeroConta } = req.params;
    const contaSolicitada = dados.contas.find((conta) => {
        return conta.numero == Number(numeroConta);
    });
    if (!contaSolicitada) {
        return res.status(404).json({ "mensagem": "Conta não encontrada." });
    }
    else {
        next();
    }
}

const peloMenosUmCampo = (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
        return res.status(400).json({ "mensagem": "É necessário preencher ao menos um dos campos a ser atualizado." })
    }
    else {
        next();
    }
}

const preencherCamposObrigatoriosDeposito = (req, res, next) => {
    const { numero_conta, valor } = req.body;
    if (!numero_conta || !valor) {
        return res.status(400).json({ "mensagem": "É necessário preencher ambos os dados obrigatórios" });
    }
    else {
        next();
    }
}

const preencherCamposObrigatoriosSaque = (req, res, next) => {
    const { numero_conta, valor, senha } = req.body;
    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ "mensagem": "É necessário preencher ambos os dados obrigatórios" });
    }
    else {
        next();
    }
}

const buscarContaTrans = (req, res, next) => {
    const { numero_conta } = req.body;
    const contaSolicitada = dados.contas.find((conta) => {
        return conta.numero == Number(numero_conta);
    });
    if (!contaSolicitada) {
        return res.status(404).json({ "mensagem": "Conta não encontrada." });
    }
    else {
        next();
    }
}

const testarSenhaTrans = (req, res, next) => {
    const { numero_conta, senha } = req.body;

    const buscarConta = buscarRetornarConta(Number(numero_conta));

    if (senha != buscarConta.usuario.senha) {
        return res.status(400).json({ "mensagem": "Senha inválida." });
    }

    else {
        next();
    }
}

const preencherCamposObrigatoriosTrans = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, senha, valor } = req.body;
    if (!numero_conta_destino && !numero_conta_origem && !senha && !valor) {
        return res.status(400).json({ "mensagem": "É necessário preencher todos os campos obrigatórios." });
    } else {
        next();
    }
}

const buscarContaOrigemDestino = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino } = req.body;
    const buscarContaOrigem = buscarRetornarConta(Number(numero_conta_origem));
    if (!buscarContaOrigem) {
        return res.status(400).json({ "mensagem": "Conta origem inválida." });
    }
    const buscarContaDestino = buscarRetornarConta(Number(numero_conta_destino));
    if (!buscarContaDestino) {
        return res.status(400).json({ "mensagem": "Conta destino inválida." });
    }
    else {
        next();
    }
}

const preencherCamposObrigatoriosSaldo = (req, res, next) => {
    const { numero_conta, senha } = req.query;
    if (!numero_conta || !senha) {
        return res.status(400).json({ "mensagem": "É necessário preencher ambos os dados obrigatórios" });
    }
    else {
        next();
    }
}

const buscarContaQuery = (req, res, next) => {
    const { numero_conta } = req.query;
    const contaSolicitada = dados.contas.find((conta) => {
        return conta.numero == Number(numero_conta);
    });
    if (!contaSolicitada) {
        return res.status(404).json({ "mensagem": "Conta não encontrada." });
    }
    else {
        next();
    }
}

const testarSenhaQuery = (req, res, next) => {
    const { numero_conta, senha } = req.query;

    const buscarConta = buscarRetornarConta(Number(numero_conta));

    if (senha != buscarConta.usuario.senha) {
        return res.status(400).json({ "mensagem": "Senha inválida." });
    }

    else {
        next();
    }
}
module.exports = {
    testeSenha,
    preencherCamposObrigatorios,
    buscarCpfEmail,
    buscarConta,
    peloMenosUmCampo,
    preencherCamposObrigatoriosDeposito,
    buscarContaTrans,
    preencherCamposObrigatoriosSaque,
    testarSenhaTrans,
    preencherCamposObrigatoriosTrans,
    buscarContaOrigemDestino,
    preencherCamposObrigatoriosSaldo,
    buscarContaQuery,
    testarSenhaQuery

}