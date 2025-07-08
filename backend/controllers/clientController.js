const Client = require('../models/client');

exports.addClient = async (req, res) => {
  try {
    const newClient = await Client.create({
      ...req.body,
      user: req.user._id
    });

    console.log("✅ Client created by:", req.user.email);
    res.status(201).json(newClient);
  } catch (err) {
    console.error("❌ Error adding client:", err);
    res.status(500).json({ message: "Failed to add client" });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user._id });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
