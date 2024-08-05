const express = require("express");
const {
  registerTeacher,
  loginTeacher,
  teacherProfile,
} = require("../controllers/teacherCont");

const router = express.Router();

router.post("/register", registerTeacher);
router.post("/login", loginTeacher);
router.get("/profile", teacherProfile);

module.exports = router;
