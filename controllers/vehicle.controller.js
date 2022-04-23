const vehicleService = require("../services/vehicle.service");
const dbService = require("../config/index");

const getVehicles = async function (values) {
  const con = await dbService.connect();

  const vehicles = await vehicleService.getVehicles(con, values);
  console.log(vehicles);
  con.end();
};

module.exports = getVehicles;
