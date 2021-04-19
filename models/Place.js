const mongoose = require("mongoose");
const schema = mongoose.Schema;

const placeSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  placeImage: {
    type: [String],
  },

  gouvernorate: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now },

  idfeedback: [{ type: schema.Types.ObjectId, ref: "feedback" }],
});

module.exports = Place = mongoose.model("place", placeSchema);
