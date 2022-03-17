const express = require("express");
const router = express.Router();
const { getIndividualJob } = require("../controllers/individualJobController");

router.route("/job/:id").get(getIndividualJob);

module.exports = router;
