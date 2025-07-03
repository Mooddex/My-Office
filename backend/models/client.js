// import mongoose from 'mongoose';
const mongoose = require("mongoose");


const ClientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  description: String,
});

module.exports = mongoose.model('Client', ClientSchema);