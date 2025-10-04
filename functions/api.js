const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
// Define your API routes
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Netlify Function!" });
});

// Link the router to the base path for Netlify Functions
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
