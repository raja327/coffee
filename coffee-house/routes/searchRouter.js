const express = require("express");
const router = express.Router();

const { allSearch } = require("../controllers/searchController");

router.get("/", allSearch);

module.exports = router;
