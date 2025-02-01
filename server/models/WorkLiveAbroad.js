const mongoose = require("mongoose");

const workLiveAbroadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
      enum: ["Work Abroad", "Live Abroad", "Both"],
    },
    country: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    contactTime: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening"],
    },
  },
  { timestamps: true }
);

const WorkLiveAbroad = mongoose.model("WorkLiveAbroad", workLiveAbroadSchema);

module.exports = WorkLiveAbroad;
