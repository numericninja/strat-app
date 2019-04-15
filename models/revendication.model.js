const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RevendicationSchema = new Schema({
  name: { type: String, required: true, max: 140 },
  votes: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

// Export the model
module.exports = mongoose.model("Revendication", RevendicationSchema);
