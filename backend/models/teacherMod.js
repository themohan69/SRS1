const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  standard: {
    type: String,
    require,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
