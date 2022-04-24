const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const values = req.query;
  const { page, limit } = values;

  if (limit > 20) res.status(400).send("Limit must be less than 20");

  try {
    const vehicles = await vehicleController.getVehicles(values);
    return res.status(200).json({
      data: vehicles,
      message: "Successfully retrieved vehicles",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while getting vehicles",
      error: error.message,
    });
  }
});

router.post("/", async (req, res, next) => {
  const vehicle = req.body;
  try {
    const result = await vehicleController.createVehicle(vehicle);
    return res.status(200).json({
      data: result,
      message: "Successfully created vehicle",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating vehicle",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res, next) => {
  const vehicle = req.body;
  const id = req.params.id;
  try {
    const result = await vehicleController.updateVehicle(id, vehicle);
    return res.status(200).json({
      data: result,
      message: "Successfully updated vehicle",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating vehicle",
      error: error.message,
    });
  }
});

module.exports = router;
