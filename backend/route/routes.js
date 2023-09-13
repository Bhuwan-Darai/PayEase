const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProile,
  registerStudent,
  students,
  updateStudent,
  deleteStudent,
  registerAccountant,
  getAccountant,
  updateAccountant,
  deleteAccountant,
  payments,
} = require("../controller/controller");
const uploadMidlleware = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile/:id")
  .get(protect, getUserProfile)
  .put(protect, updateUserProile);
router.post("/registerStudent", registerStudent);
router.get("/getStudents", students);
router.put("/updateStudent/:id", updateStudent);
router.route("/student/:id").get(protect, students).put(protect, updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.post("/registerAccountant", registerAccountant);
router.get("/getAccountant", getAccountant);
router
  .route("/accountant")
  .get(protect, getAccountant)
  .put(protect, updateAccountant);
router.delete("/deleteAccountant/:id", deleteAccountant);
router.post("/payments", uploadMidlleware.single("photo"), payments);
module.exports = router;
