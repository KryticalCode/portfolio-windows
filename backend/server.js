// --- external packages first ---
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config(); // environment config

// setup transporter BEFORE creating the app
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});

// test OAuth2 connection early , ensures it is ready to receive requests
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Transporter verification failed:", error);
  } else {
    console.log("✅ Transporter is ready to send emails");
  }
});

// create express app
const app = express();
console.log("Express app created successfully");

// --- middleware setup ---
app.use(helmet()); // adds security headers
app.use(cors()); // then handle CORS -> allows cross-origin requests from frontend to backend
app.use(express.json()); // parse JSON bodies

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  limit: 2, // limit each IP to 2 requests per windowMs
  message: {
    error: "To many email requests sent from this IP, please try again soon.",
  },
  standardHeaders: false, // disable standard headers
  legacyHeaders: false, // disable legacy headers
  skipSuccessfulRequests: true, // only count failed requests
  skip: (req) => req.ip === "::1", // skip rate limiting for localhost -> my IP
});

// --- routes setup ---
// POST /api/send-email
// handles sending emails from the contact form in the frontend
app.post(
  "/api/send-email",
  limiter,
  // validation rules will go here
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("message")
    .isLength({ min: 20, max: 600 })
    .withMessage("Message must be 20-600 characters long.")
    .trim(), // will remove leading and trailing whitespace from the message
  // route handler
  async (req, res) => {
    // first check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, message } = req.body;
    // email sending logic will go here
    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // my email
        subject: "Portfolio Contact Form Submission",
        text: `From: ${email}\n\nMessage: ${message}`,
      });
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send the email" });
    }
  }
);

// // testing
// app.get("/test", (req, res) => {
//   res.status(200).json({ message: "Test endpoint is working!" });
// });

const PORT = process.env.PORT || 3001;
console.log("About to start server on port:", PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
