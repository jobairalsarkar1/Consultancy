const Country = require("../models/Country");
const JobPost = require("../models/JobPost");

// Add a new country with universities
exports.addCountry = async (req, res) => {
  const { countryName, countryValue, countryLevel, universities } = req.body;
  console.log(req.body);

  if (
    !countryName ||
    !countryValue ||
    !countryLevel ||
    !universities ||
    universities.length === 0
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingCountry = await Country.findOne({ countryValue });
    if (existingCountry) {
      return res.status(400).json({ message: "Country already exists" });
    }

    const newCountry = new Country({
      countryName,
      countryValue,
      countryLevel,
      universities,
    });

    await newCountry.save();

    res
      .status(201)
      .json({ message: "Country added successfully", country: newCountry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add a new job posting
exports.addJobPosting = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      jobType,
      requirements,
      responsibilities,
    } = req.body;
    const newJobPost = new JobPost({
      title,
      company,
      location,
      salary,
      jobType,
      requirements,
      responsibilities,
    });

    await newJobPost.save();
    res.status(201).json({
      message: "Job posting added successfully",
      jobPost: newJobPost,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to add job posting", error: error.message });
  }
};

// Delete a job posting by ID
exports.deleteJobPosting = async (req, res) => {
  console.log(req.body);
  try {
    const jobPostId = req.params.id;
    const jobPost = await JobPost.findByIdAndDelete(jobPostId);

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    res.status(200).json({ message: "Job posting deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete job posting", error: error.message });
  }
};
