const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let StrategieSchema = new Schema({
  name: { type: String, required: true, max: 100, unique: true },
  votes: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

// Export the model
StrategieSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Strategie", StrategieSchema);
