// handle ALL API route definitions and logic
const express = require("express");
const { body, validationResult } = require("express-validator");
require("express-validator");
const transporter = require("../config/email");
const { emailLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

// --- routes setup ---

// health check route for Elastic Beanstalk Load Balancer
router.get("/", (req, res) => {
  res.status(200).send("Ok");
});

// POST /api/send-email
// handles sending emails from the contact form in the frontend
router.post(
  "/send-email",
  emailLimiter, // apply rate limiting middleware
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

module.exports = router;
