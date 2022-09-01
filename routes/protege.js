const express = require("express");
const protegeController = require("../controllers/protege");

const router = express.Router();

router.get("/test", protegeController.test);

module.exports = router;


