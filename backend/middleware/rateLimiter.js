const rateLimit = require("express-rate-limit");

const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  limit: 2, // limit each IP to 2 requests per windowMs
  message: {
    error: "Too many email requests sent from this IP, please try again soon.",
  },
  standardHeaders: false, // disable standard headers
  legacyHeaders: false, // disable legacy headers
  skipSuccessfulRequests: true, // only count failed requests
  skip: (req) => req.ip === "::1", // skip rate limiting for localhost -> my IP
});

module.exports = { emailLimiter };
