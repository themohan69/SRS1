const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/SRS`);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connecting database " + error.message);
  }
};

module.exports = connectDB;
