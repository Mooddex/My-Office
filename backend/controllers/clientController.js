const Client = require('../models/client');

const addClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    const savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
   addClient,
   getClients,
   };