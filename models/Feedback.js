const mongoose = require("mongoose");

const schema = mongoose.Schema;

const feedbackSchema = new schema({
  text: {
    type: String,
  },

  iduser: { type: schema.Types.ObjectId, ref: "user" },
  idplace: { type: schema.Types.ObjectId },
});

module.exports = Feedback = mongoose.model("feedback", feedbackSchema);
