const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let ActionsouhaiteeSchema = new Schema({
  name: { type: String, required: true, max: 100, unique: true },
  votes: { type: Number, required: true },
  effort: { type: Number, required: true, max: 10, min: 0 },
  impact: { type: Number, required: true, max: 10, min: 0 },
  created_at: { type: Date, required: true, default: Date.now }
});

// Export the model
ActionsouhaiteeSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Actionsouhaitee", ActionsouhaiteeSchema);
