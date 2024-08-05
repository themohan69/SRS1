const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

const connectDB = require("./config/db");
const teacherRoute = require("./routes/authRoute");

app.use(express.json());
app.use(cors());
// Connect database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello Boy!");
});

app.use("/api/teacher", teacherRoute);

app.listen(PORT, () => console.log(`Server running on port 8080`));
