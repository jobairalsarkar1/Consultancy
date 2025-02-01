const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultationController");

// Route for Work/Live Abroad Consultation
router.post(
  "/work-live-abroad",
  consultationController.workLiveAbroadConsultation
);

// Route for Study Abroad Consultation
router.post("/study-abroad", consultationController.studyAbroadConsultation);

module.exports = router;
