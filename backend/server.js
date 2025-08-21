// --- external packages first ---
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config(); // environment config
// --- internal imports ---
const apiRoutes = require("./routes/api");

// create express app
const app = express();
console.log("Express app created successfully");

// --- middleware setup ---
app.use(helmet()); // adds security headers
app.use(cors()); // then handle CORS -> allows cross-origin requests from frontend to backend
app.use(express.json()); // parse JSON bodies

// --- routes setup ---
app.use("/", apiRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3001;
console.log("About to start server on port:", PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
