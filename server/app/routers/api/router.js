const express = require("express");

const router = express.Router();

// const wildRouter = require("./wild/router");

// router.use("/wild", wildRouter);

const { wildSeries } = require("../../controllers/seriesAction");

router.get("/", wildSeries);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const categoryRouter = require("./categories/router");

router.use("/categories", categoryRouter);
/* ************************************************************************* */

module.exports = router;
