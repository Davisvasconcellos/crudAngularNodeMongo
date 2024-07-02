// Importação dos módulos necessários
var userService = require('./userService');


// Controlador para obter todos os usuários
module.exports.getDataConntrollerfn = async (req, res) => {
    try {
        const users = await userService.getDataFromDBService();
        res.json(users);
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};


// Controller para criar um novo usuário
module.exports.createUserControllerFn = async (req, res) => {
    try {
        const result = await userService.createUserDBService(req.body);
        res.json({ status: true, message: "User created successfully", data: result });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

// Controlador para atualizar um usuário existente
module.exports.updateUserController = async (req, res) => {
    try {
        const result = await userService.updateUserDBService(req.params.id, req.body);
        res.json({ status: true, message: "User updated successfully", data: result });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};


// Controlador para excluir um usuário pelo ID
module.exports.deleteUserController = async (req, res) => {
    try {
        const result = await userService.removeUserDBService(req.params.id);
        res.json({ status: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

// Controlador para obter um usuário por ID
module.exports.getUserByIdControllerFn = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserByIdService(userId);
        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};