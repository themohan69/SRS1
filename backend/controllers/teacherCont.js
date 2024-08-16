const Teacher = require("../models/teacherMod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth_token = "abcd";

const registerTeacher = async (req, res) => {
  const { name, email, password, standard } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (teacher) {
      return res.status(401).json({ message: "Teacher already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newTeacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      standard,
    });
    await newTeacher.save();
    res.status(201).json({ message: "Teacher registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const loginTeacher = async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });

    // find teacher
    if (!teacher) {
      return res.status(404).json({ error: "User not found" });
    }

    // check the password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // generating jwt token
    const token = jwt.sign({ id: teacher._id }, auth_token, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const teacherProfile = async (req, res) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ message: "Please login" });
  }
  try {
    const decode = jwt.verify(token, auth_token);
    const user = await Teacher.findById(decode.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { loginTeacher, registerTeacher, teacherProfile };
