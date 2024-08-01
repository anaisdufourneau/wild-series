const express = require("express");

const router = express.Router();
const programs = (req, res) => {
  res.json(programs);
};
router.get("/", programs);
