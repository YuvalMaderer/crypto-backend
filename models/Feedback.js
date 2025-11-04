const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  section: String,
  vote: String,
  timestamp: Date,
  context: Object,
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
