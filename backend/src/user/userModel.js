// Importação dos módulos necessários
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Definindo o esquema do usuário
var userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        cep: String,
        endereco: String,
        numero: String,
        complemento: String
    },
    cpf: {
        type: String,
        required: true
    },
    descricao: String,
    dataRegistro: {
        type: Date,
        default: Date.now
    },
    dataInicioContrato: Date,
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('clients', userSchema);
