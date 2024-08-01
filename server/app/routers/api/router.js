const express = require("express");

const router = express.Router();

const wildSeries = (req, res) => {
  res.send("Welcome to Wild Series");
};
router.get("/", wildSeries);
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
