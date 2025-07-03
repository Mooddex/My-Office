const express = require('express');
const router = express.Router();
const { addClient, getClients } = require('../controllers/clientController');

// POST /api/clients
router.post('/', addClient);
router.get('/', getClients); 


module.exports = router;