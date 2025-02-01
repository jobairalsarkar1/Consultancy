const WorkLiveAbroad = require("../models/WorkLiveAbroad");
const StudyAbroad = require("../models/StudyAbroad");

// Handle Work/Live Abroad Consultation
exports.workLiveAbroadConsultation = async (req, res) => {
  try {
    const { fullName, email, phone, service, country, message, contactTime } =
      req.body;

    if (!fullName || !email || !phone || !service || !country) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newConsultation = new WorkLiveAbroad({
      fullName,
      email,
      phone,
      service,
      country,
      message,
      contactTime,
    });

    await newConsultation.save();

    res.status(201).json({
      message:
        "Your consultation request for Work/Live Abroad has been submitted successfully!",
      data: newConsultation,
    });
  } catch (error) {
    console.error("Error saving Work/Live Abroad consultation:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Handle Study Abroad Consultation
exports.studyAbroadConsultation = async (req, res) => {
  try {
    const { fullName, email, phone, country, universities, contactTime } =
      req.body;

    if (!fullName || !email || !phone || !country) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newConsultation = new StudyAbroad({
      fullName,
      email,
      phone,
      country,
      universities,
      contactTime,
    });

    await newConsultation.save();

    res.status(201).json({
      message:
        "Your consultation request for Study Abroad has been submitted successfully!",
      data: newConsultation,
    });
  } catch (error) {
    console.error("Error saving Study Abroad consultation:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
