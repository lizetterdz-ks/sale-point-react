// Modules
const express = require('express');
const ItemResources = express.Router();

// Controllers
const { ItemControllers } = require('../controllers');

// //Validations
// const { Validations } = require('../validation');

// All book resources
ItemResources.post('/items', ItemControllers.postItem);

ItemResources.get('/items', ItemControllers.getAll);

ItemResources.get('/items/:id', ItemControllers.getById);

ItemResources.put('/items/:id', ItemControllers.putItem);

ItemResources.delete('/items/:id', ItemControllers.removeItem);

ItemResources.get('/sales', ItemControllers.getAllSales);

ItemResources.post('/sales', ItemControllers.postSale);

ItemResources.put('/sales/:id', ItemControllers.putSale);

module.exports = ItemResources;
