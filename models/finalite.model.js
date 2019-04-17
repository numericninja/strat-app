const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let FinaliteSchema = new Schema({
  name: { type: String, required: true, max: 100, unique: true },
  votes: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

// Export the model
FinaliteSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Finalite", FinaliteSchema);
