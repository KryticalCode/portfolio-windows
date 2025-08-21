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

module.exports = transporter;
