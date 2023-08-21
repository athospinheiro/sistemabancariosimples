const express = require('express');
const contas = require('./controllers/contas');
const transacoes = require('./controllers/transacoes');
const roteador = express.Router();
const { testeSenha, preencherCamposObrigatorios,
    buscarCpfEmail, buscarConta, peloMenosUmCampo,
    preencherCamposObrigatoriosDeposito, buscarContaTrans,
    preencherCamposObrigatoriosSaque, testarSenhaTrans, preencherCamposObrigatoriosTrans,
    buscarContaOrigemDestino, preencherCamposObrigatoriosSaldo, buscarContaQuery, testarSenhaQuery } = require('./middleware');

roteador.get('/contas', testeSenha, contas.listarContas); // listar contas
roteador.post('/contas', preencherCamposObrigatorios, buscarCpfEmail, contas.criarConta); // criar contas
roteador.put('/contas/:numeroConta/usuario', buscarConta, peloMenosUmCampo, buscarCpfEmail, contas.atualizarUsuario); // atualizar usuario    
roteador.delete('/contas/:numeroConta', buscarConta, contas.excluirConta); // excluir conta
roteador.post('/transacoes/depositar', preencherCamposObrigatoriosDeposito, buscarContaTrans, transacoes.depositar); // depositos
roteador.post('/transacoes/sacar', preencherCamposObrigatoriosSaque, buscarContaTrans, testarSenhaTrans, transacoes.sacar); // sacar
roteador.post('/transacoes/transferir', preencherCamposObrigatoriosTrans, buscarContaOrigemDestino, transacoes.transferir); //transferir
roteador.get('/contas/saldo', preencherCamposObrigatoriosSaldo, buscarContaQuery, testarSenhaQuery, transacoes.saldo); //saldo
roteador.get('/contas/extrato', preencherCamposObrigatoriosSaldo, buscarContaQuery, testarSenhaQuery, transacoes.extrato); //extrato
module.exports = roteador;



