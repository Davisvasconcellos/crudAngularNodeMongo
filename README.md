# CRUD Impact

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) utilizando Node.js para o backend e Angular para o frontend, com MongoDB como banco de dados.

## Requisitos

- Node.js instalado
- MongoDB instalado com um banco de dados `crud-impact` e uma coleção `clients`

## Instruções

### 1. Descompactar o Conteúdo da Pasta

Descompacte o conteúdo da pasta em um diretório de sua escolha.

### 2. Estrutura do Projeto

- **Backend**: Node.js
- **Frontend**: Angular

### 3. Iniciar o Servidor Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   
2. Inicie o servidor Node.js:
   ```bash
   node server.js

2. Navegue até o diretório `frontend`:
   ```bash
   cd Frontend

2. Inicie o Angular:
   ```bash
   ng serve

### 3. Iniciar o Servidor Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd backed
   
2. Inicie o servidor Node.js:
   ```bash
   node server.js

### 4. Iniciar o Frontend

1. Navegue até o diretório `frontend`:
   ```bash
   cd Frontend

2. Inicie o Angular:
   ```bash
   ng serve

# Endpoints das Rotas do Node

# Listagem de Todos os Usuários (GET)
- Descrição: Utilizado para obter a lista de todos os usuários.
- URL: /user/getAll
- Exemplo: http://localhost:8000/user/getAll
- Método: GET

# Criação de um Novo Usuário (POST)
- Descrição: Utilizado para criar um novo usuário.
- URL: /user/create
- Exemplo: http://localhost:8000/user/create
- Método: POST
   ```bash
   {
    "nome": "User Name",
    "telefone": "1234567890",
    "endereco": {
        "cep": "12345-678",
        "endereco": "Rua Exemplo",
        "numero": "100",
        "complemento": "Apt 101"
    },
    "cpf": "123.456.789-00",
    "descricao": "Descrição do usuário",
    "dataRegistro": "2024-07-01T12:00:00Z",
    "dataInicioContrato": "2024-08-01T00:00:00Z",
    "status": true
    }

# Atualização de um Usuário Existente (PUT)
- Descrição: Utilizado para atualizar um usuário específico, onde :id representa o identificador único do usuário no banco de dados.
- URL: /user/update/:id
- Exemplo: http://localhost:8000/user/update/:id
- Método: PUT
   ```bash
  {
      "nome": "Updated User Name",
      "telefone": "0987654321",
      "endereco": {
          "cep": "87654-321",
          "endereco": "Rua Atualizada",
          "numero": "200",
          "complemento": "Apt 202"
      },
      "cpf": "987.654.321-00",
      "descricao": "Descrição do usuário atualizada",
      "dataInicioContrato": "2024-09-01T00:00:00Z",
      "status": false
  }


# Remoção de um Usuário Existente (DELETE)
- Descrição: Utilizado para excluir um usuário específico, onde :id representa o identificador único do usuário no banco de dados.
- URL: /user/delete/:id
- Exemplo: http://localhost:8000/user/delete/:id
- Método: DELETE
- Substitua :id pelo ID do usuário que você deseja remover.

# Video Preview
- URL: https://youtu.be/Pi0MVgBK9II
