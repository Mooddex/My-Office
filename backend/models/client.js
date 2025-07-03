const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  description: String,
  case: {
    caseName: { type: String },
    caseType: { type: String },
    caseStatus: { type: String },
    notes: { type: String }, 
  }
});

module.exports = mongoose.model('Client', ClientSchema);
