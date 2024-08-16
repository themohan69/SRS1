const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  standard: {
    type: String,
    required: true,
  },
});

const FY_IT = mongoose.model("FY_IT", studentsSchema);
const SY_IT = mongoose.model("SY_IT", studentsSchema);
const TY_IT = mongoose.model("TY_IT", studentsSchema);

module.exports = { FY_IT, SY_IT, TY_IT };
