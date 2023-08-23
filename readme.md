# API do Banco Digital Inovador

Bem-vindo à Vanguarda das Transações Bancárias: a API do Banco Digital Inovador. Esta API redefine a forma como realizamos operações financeiras em um mundo interconectado. Desenvolvida com expertise, ela oferece desde validações criteriosas até endpoints estratégicos, permitindo criar contas, realizar depósitos, saques, transferências e muito mais, tudo isso em um ambiente seguro e confiável. Seja você um desenvolvedor buscando soluções sólidas ou um usuário final desejando uma experiência bancária fluida, a API do Banco Digital Inovador oferece uma abordagem moderna para gerenciar suas finanças.

# Instalação e Execução da API

1. **Clone o Repositório**: Faça o clone do repositório da API do Banco Digital Inovador para sua máquina local.

2. **Instale as Dependências**: Navegue até o diretório da API no terminal e execute o comando `npm install` para instalar as dependências necessárias.

3. **Configure o Ambiente**: No Postman ou Insomnia, crie um ambiente para testar a API. Defina as variáveis de ambiente necessárias, como a URL base da API (`http://localhost:3000`).

4. **Executando as Requests**:
   - **Listar Contas Bancárias**: Faça uma requisição GET para `http://localhost:3000/contas` para listar as contas existentes.
   - **Criar Conta Bancária**: Utilize uma requisição POST para `http://localhost:3000/contas` com os dados do usuário para criar uma nova conta.
   - **Atualizar Usuário da Conta**: Execute um requisição PUT para `http://localhost:3000/contas/:numeroConta/usuario` para atualizar os dados do usuário associado a uma conta específica.
   - **Excluir Conta Bancária**: Use uma requisição DELETE para `http://localhost:3000/contas/:numeroConta` para excluir uma conta.
   - **Depositar**: Envie um requisição POST para `http://localhost:3000/transacoes/depositar` com o número da conta e valor para realizar um depósito.
   - **Sacar**: Utilize uma requisição POST para `http://localhost:3000/transacoes/sacar` com o número da conta, valor e senha para realizar um saque.
   - **Transferir**: Execute um requisição POST para `http://localhost:3000/transacoes/transferir` com as informações necessárias para realizar uma transferência entre contas.
   - **Saldo**: Faça uma requisição GET para `http://localhost:3000/contas/saldo` com o número da conta e senha para consultar o saldo.
   - **Extrato**: Execute uma requisição GET para `http://localhost:3000/contas/extrato` com o número da conta e senha para obter um resumo das transações.

Lembrando que a utilização do `localhost` é recomendada apenas para testes na máquina local. Certifique-se de preencher as informações necessárias nos campos de requisição, como headers, parâmetros e body, conforme as especificações da API.

Agora você está pronto para testar e explorar a API do Banco Digital Inovador!
