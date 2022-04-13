const express = require("express");
const router = express.Router();
router
    .route("/index-two")
    .get((req, res) => res.send("GET index-two"))
    .post((req, res) => res.send("POST index-two"));
module.exports = router;