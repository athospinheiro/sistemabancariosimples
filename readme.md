# API de Banco Digital - Visão Geral Técnica

Neste documento, apresentamos a arquitetura e funcionalidades da API de Banco Digital que desenvolvemos. Esta solução foi projetada para oferecer uma experiência completa de serviços bancários por meio de uma interface RESTful. Assegurando padrões de segurança e eficiência, essa API permite operações bancárias essenciais, incluindo criação e gerenciamento de contas, transações, consulta de saldo e geração de extratos. Detalharemos a estrutura da API, como instalar e executar, suas tecnologias e recursos fundamentais, demonstrando sua utilidade e viabilidade técnica para ambientes bancários virtuais.


## Estrutura do Projeto

O projeto está organizado em:

- `index.js`: Ponto de entrada do aplicativo.
- `servidor.js`: Configuração do servidor Express e inicialização.
- `bancodedados.js`: Gerenciamento dos dados em memória.
- `funcoes.js`: Contém funções que podem ser utilizadas ao longo do projeto.
- `router.js`: Arquivo para gerenciamento de rotas.
- `middleware.js`: Arquivo que contém intermediários.
- Pasta `controladores`: Contém arquivos para cada tipo de operação.

## Como Instalar e Executar a API com Insomnia ou Postman

1. **Clone o Repositório:** Clone o repositório do projeto em sua máquina local.

2. **Instale as Dependências:** Na pasta do projeto, execute `npm install` para instalar as dependências.

3. **Inicie o Servidor:** Execute `npm start` para iniciar o servidor.

4. **Teste os Endpoints:** Use o Insomnia ou Postman com exemplos de endpoints fornecidos na seção "Exemplos de Endpoints". Substitua `base_url` por `http://localhost:3000`.

5. **Interaja com a API:** Faça requisições aos endpoints, envie entradas e observe as respostas.

Lembre-se, o ambiente local é para testes. Para produção, configure servidor e banco de dados apropriados.


## Visão Geral do Projeto

A API oferece funcionalidades para:

- Criar contas bancárias;
- Atualizar informações dos usuários;
- Realizar depósitos e saques;
- Efetuar transferências entre contas;
- Consultar saldo e emitir extratos;
- Excluir contas bancárias.

  
## Tecnologias Utilizadas

O projeto foi construído utilizando Node.js, Express.js e a biblioteca date-fns para manipulação de datas.


## Exemplos de Endpoints

Aqui estão alguns exemplos dos endpoints oferecidos:

- Listar Contas Bancárias:
  - Método: GET
  - Rota: `/contas?senha_banco=123`

- Criar Conta Bancária:
  - Método: POST
  - Rota: `/contas`
  - Entradas: Nome, CPF, Data de Nascimento, Telefone, Email, Senha

- Atualizar Usuário da Conta Bancária:
  - Método: PUT
  - Rota: `/contas/:numeroConta/usuario`
  - Entradas: Nome, CPF, Data de Nascimento, Telefone, Email, Senha

- Excluir Conta:
  - Método: DELETE
  - Rota: `/contas/:numeroConta`

- Depositar:
  - Método: POST
  - Rota: `/transacoes/depositar`
  - Entradas: Número da Conta, Valor

- Sacar:
  - Método: POST
  - Rota: `/transacoes/sacar`
  - Entradas: Número da Conta, Valor

- Transferir:
  - Método: POST
  - Rota: `/transacoes/sacar`
  - Entradas: Número da Conta origem, Número da conta destino, Valor

- Saldo:
  - Método: GET
  - Rota: `/contas/saldo`
  - Entradas: Número da Conta

- Extrato:
  - Método: GET
  - Rota: `/transacoes/extrato`
  - Entradas: Número da Conta

Estes exemplos fornecem uma visão detalhada de cada endpoint disponível na API de Banco Digital, juntamente com os métodos, rotas e informações necessárias para interagir com cada funcionalidade. Certifique-se de adaptar os parâmetros e valores de acordo com suas necessidades ao realizar as requisições.


## Conclusão

O projeto representou a criação de uma API abrangente para operações bancárias, demonstrando a aplicação de conceitos de Back-end na prática.




