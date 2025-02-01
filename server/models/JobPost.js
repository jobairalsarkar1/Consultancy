const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    salary: {
      type: String,
      required: [true, "Salary is required"],
    },
    jobType: {
      type: String,
      required: [true, "Job type is required"],
    },
    requirements: [String],
    responsibilities: [String],
  },
  { timestamps: true }
);

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;
