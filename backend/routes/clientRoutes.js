const express = require('express');
const router = express.Router();
const { addClient, getClients } = require('../controllers/clientController');
const isAuthenticated = require("../middleware/isAuthenticated"); 

// POST /api/clients
router.post('/', isAuthenticated, addClient);
router.get('/',isAuthenticated, getClients);

module.exports = router;
