const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  description: String,
  case: {
    caseName: String,
    caseStatus: String,
    description: String
  },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

module.exports = mongoose.model("Client", ClientSchema);
