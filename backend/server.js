// Importação dos módulos necessários
var express = require('express');   
var mongoose = require('mongoose'); 
var routes = require('./routes/routes'); 
const cors = require('cors');

// Criação da instância do servidor Express
var server = express();


// Função assíncrona para conectar ao banco de dados MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud-impact");
        console.log("Servidor MongoDB: Conectado");
    } catch (error) {
        console.log("Erro de conexão MongoDB", error);
    }
}
connectToDatabase();


// Configuração do servidor
server.use(cors());
server.use(express.json());
server.use(routes);



// Inicialização do servidor na porta 8000
var PORT = 8000;
server.listen(PORT, function check(error) {
    if (error) {
        console.log("Erro iniciando servidor");
    } else {
        console.log("Servidor Node: iniciado na porta " + PORT);
    }
});
