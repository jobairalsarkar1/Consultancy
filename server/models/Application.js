const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    about: {
      type: String,
      required: [true, "About you is required"],
    },
    cv: {
      type: String, // Store the file path or URL of the CV
      required: [true, "CV is required"],
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost", // Reference to JobPost model
      required: [true, "Job ID is required"],
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
