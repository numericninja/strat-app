const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FinaliteSchema = new Schema({
  name: { type: String, required: true, max: 140 },
  votes: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

// Export the model
module.exports = mongoose.model("Finalite", FinaliteSchema);
