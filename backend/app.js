const express = require("express");
const cors = require("cors");

const app = express();

// app.use(cors({
//   origin: "https://pesgre2025.org",
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"]
// }));

app.use(cors()); //test

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send({"response":"Hello, Express Backend!"});
});

// Start the server
const PORT = 3000; //test
// const PORT = 4000;
app.listen(PORT,"localhost",() => {
  console.log(`Server running on http://localhost:${PORT}`);
});