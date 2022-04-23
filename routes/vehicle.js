const express = require("express");
const getVehicles = require("../controllers/vehicle.controller");
const router = express.Router();

router.get("/", (req, res, next) => {
  const values = req.query;
  console.log(values);
  getVehicles(values);
  res.send("respond with a resource");
});

module.exports = router;
