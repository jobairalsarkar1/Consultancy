const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studyAbroadSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  universities: {
    type: [String],
    default: [],
  },
  contactTime: {
    type: String,
    enum: ["Morning", "Afternoon", "Evening"],
    default: null,
  },
});

const StudyAbroad = mongoose.model("StudyAbroad", studyAbroadSchema);

module.exports = StudyAbroad;
