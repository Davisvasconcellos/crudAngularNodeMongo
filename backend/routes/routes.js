// Importação dos módulos necessários
const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');
const userService = require('../src/user/userService');


// Rota para obter todos os usuários
router.get('/user/getAll', async (req, res) => {
    try {
        const users = await userService.getDataFromDBService();
        res.json(users);
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});


// Rota para criar um novo usuário
router.post('/user/create', async (req, res) => {
    try {
        const result = await userService.createUserDBService(req.body);
        res.json({ status: true, message: "User created successfully", data: result });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});

// Rota para atualizar um usuário existente
router.put('/user/update/:id', async (req, res) => {
    try {
        const user = await userService.updateUserDBService(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});


// Rota para excluir um usuário pelo ID
router.delete('/user/delete/:id', async (req, res) => {
    try {
        const result = await userService.removeUserDBService(req.params.id);
        res.json({ status: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});

// Rota para obter um usuário pelo ID
router.get('/user/getById/:id', async (req, res) => {
    try {
        const user = await userService.getUserByIdService(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});



module.exports = router;
