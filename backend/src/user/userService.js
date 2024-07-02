// Importação dos módulos necessários
var userModel = require('./userModel');


// Serviço para buscar todos os dados do banco de dados de usuários
module.exports.getDataFromDBService = async () => {
    try {
        const result = await userModel.find({});
        return result;
    } catch (error) {
        console.error("Erro ao buscar dados do banco de dados:", error);
        throw new Error("Erro ao buscar dados do banco de dados");
    }
};

// Serviço para criar um novo usuário no banco de dados
module.exports.createUserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel({
            nome: userDetails.nome,
            telefone: userDetails.telefone,
            endereco: {
                cep: userDetails.endereco.cep,
                endereco: userDetails.endereco.endereco,
                numero: userDetails.endereco.numero,
                complemento: userDetails.endereco.complemento
            },
            cpf: userDetails.cpf,
            descricao: userDetails.descricao,
            dataRegistro: userDetails.dataRegistro,
            dataInicioContrato: userDetails.dataInicioContrato,
            status: userDetails.status
        });

        const result = await userModelData.save();
        console.log("Dados do usuário salvos com sucesso:", result);
        return result;
    } catch (error) {
        console.error("Erro ao salvar os dados do usuário:", error);
        throw new Error("Erro ao salvar dados do usuário");
    }
};


// Serviço para atualizar dados de um usuário existente no banco de dados
module.exports.updateUserDBService = async (id, userDetails) => {
    try {
        const updateData = {
            nome: userDetails.nome,
            telefone: userDetails.telefone,
            endereco: {
                cep: userDetails.endereco.cep,
                endereco: userDetails.endereco.endereco,
                numero: userDetails.endereco.numero,
                complemento: userDetails.endereco.complemento
            },
            cpf: userDetails.cpf,
            descricao: userDetails.descricao,
            dataInicioContrato: userDetails.dataInicioContrato,
            status: userDetails.status
        };

        const result = await userModel.findByIdAndUpdate(id, updateData, { new: true });
        console.log("Dados do usuário atualizados com sucesso:", result);
        return result;
    } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
        throw new Error("Erro ao atualizar dados do usuário");
    }
};


// Serviço para remover um usuário do banco de dados pelo ID
module.exports.removeUserDBService = async (id) => {
    try {
        const result = await userModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error("Erro ao remover dados do usuário:", error);
        throw new Error("Erro ao remover dados do usuário");
    }
};

// Serviço para obter um usuário do banco de dados pelo ID
module.exports.getUserByIdService = async (userId) => {
    try {
        const user = await userModel.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
};