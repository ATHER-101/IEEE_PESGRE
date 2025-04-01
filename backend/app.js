const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send({"response":"Hello, Express Backend!"});
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});