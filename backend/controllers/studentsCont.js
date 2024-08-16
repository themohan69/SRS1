const { FY_IT, SY_IT, TY_IT } = require("../models/studentsMod");

const getStudents = (model) => async (req, res) => {
  try {
    const students = await model.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server problem" });
  }
};

const getStudentById = (model) => async (req, res) => {
  const { id } = req.params;

  try {
    const student = await model.findById(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server problem" });
  }
};

const getStudentsByStandard = (model) => async (req, res) => {
  const { standard } = req.params;

  try {
    const students = await model.find({ standard });

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found for this standard" });
    }

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: `Server problem ${error}` });
  }
};

const addStudent = (model) => async (req, res) => {
  const { rollNo, name, number, dob, standard } = req.body;

  if (!rollNo || !name || !number || !dob || !standard) {
    return res.status(400).json({ message: "Please fill all the information" });
  }

  try {
    const existingStudent = await model.findOne({ rollNo });
    if (existingStudent) {
      return res.status(401).json({ message: "Student already registered" });
    }

    const newStudent = new model({
      rollNo,
      name,
      number,
      dob,
      standard,
    });

    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server problem" });
  }
};

module.exports = {
  getFYStudents: getStudents(FY_IT),
  getSYStudents: getStudents(SY_IT),
  getTYStudents: getStudents(TY_IT),
  getFYStudentById: getStudentById(FY_IT),
  getSYStudentById: getStudentById(SY_IT),
  getTYStudentById: getStudentById(TY_IT),
  getFYStudentsByStandard: getStudentsByStandard(FY_IT),
  getSYStudentsByStandard: getStudentsByStandard(SY_IT),
  getTYStudentsByStandard: getStudentsByStandard(TY_IT),
  addFYStudent: addStudent(FY_IT),
  addSYStudent: addStudent(SY_IT),
  addTYStudent: addStudent(TY_IT),
};