const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    countryValue: {
      type: String,
      required: true,
      unique: true,
    },
    countryLevel: {
      type: String,
      required: true,
    },
    universities: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
