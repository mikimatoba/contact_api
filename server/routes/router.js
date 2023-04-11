const express = require("express");
const route = express.Router();
const controller = require('../controller/controller');

// API
route.post('/api/form', controller.create);
route.get('/api/form', controller.find);

module.exports = route