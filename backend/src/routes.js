const express = require('express');
const ongController = require('./controller/OngController');
const incidentController = require('./controller/IncidentController');
const profileController = require('./controller/ProfileController');
const sessionController = require('./controller/SessionController');


const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profiles', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);
    
module.exports = routes;