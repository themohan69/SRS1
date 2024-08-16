const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

const connectDB = require("./config/db");
const teacherRoute = require("./routes/authRoute");
const studentRoute = require("./routes/studentRoute");

app.use(express.json());
app.use(cors());
// Connect database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("<h1>" + "Hello Boy!" + "</h1>");
});

app.use("/api/teacher", teacherRoute);
app.use("/api", studentRoute);

app.listen(PORT, () => console.log(`Server running on port 8080`));
