const express = require("express");
const {
  getFYStudents,
  getFYStudentById,
  getFYStudentsByStandard,
  addFYStudent,
  getSYStudents,
  getSYStudentById,
  getSYStudentsByStandard,
  addSYStudent,
  getTYStudents,
  getTYStudentById,
  getTYStudentsByStandard,
  addTYStudent,
} = require("../controllers/studentsCont");

const router = express.Router();

// FY routes
router.get("/fy/students", getFYStudents);
router.get("/fy/studentbyid/:id", getFYStudentById);
router.get("/fy/studentbystandard/:standard", getFYStudentsByStandard);
router.post("/fy/addstudent", addFYStudent);

// SY routes
router.get("/sy/students", getSYStudents);
router.get("/sy/studentbyid/:id", getSYStudentById);
router.get("/sy/studentbystandard/:standard", getSYStudentsByStandard);
router.post("/sy/addstudent", addSYStudent);

// TY routes
router.get("/ty/students", getTYStudents);
router.get("/ty/studentbyid/:id", getTYStudentById);
router.get("/ty/studentbystandard/:standard", getTYStudentsByStandard);
router.post("/ty/addstudent", addTYStudent);

module.exports = router;
