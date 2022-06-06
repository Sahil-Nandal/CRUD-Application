const { Route } = require('express');
const express = require('express');
const { render } = require('express/lib/response');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
// @description ROOT Route
// @METHOD GET
route.get('/', services.homeRoutes);

// @description Add user
// @METHOD GET/add_user
route.get('/add-user', services.add_user);

// @description update_user
// @METHOD GET/update_user
route.get('/update-user', services.update_user);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route