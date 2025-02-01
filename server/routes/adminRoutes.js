const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  addCountry,
  addJobPosting,
  deleteJobPosting,
} = require("../controllers/adminController");

// Route to add a new country (Admin Only)
router.post("/add-country", protect, addCountry);
router.post("/add-job", protect, addJobPosting);
router.delete("/delete-job/:id", protect, deleteJobPosting);

module.exports = router;
