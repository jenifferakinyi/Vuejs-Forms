const express = require('express');
const routes = express.Router();
const userController = require ('../controller/userController');






routes.post('/user', userController.AddUser);

routes.post('/login', userController.Login);

routes.post('/refresh', userController.refreshToken);



 module.exports = routes;


