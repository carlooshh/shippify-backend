const vehicleService = require("../services/vehicle.service");
const dbService = require("../config/index");

const getVehicles = async function (values) {
  const con = await dbService.connect();
  const vehicles = await vehicleService.getVehicles(con, values);
  con.end();
  return vehicles;
};

const createVehicle = async function (vehicle) {
  const con = await dbService.connect();
  const result = await vehicleService.createVehicle(con, vehicle);
  con.end();
  return result;
};

const updateVehicle = async function (id, vehicle) {
  const con = await dbService.connect();
  const result = await vehicleService.updateVehicle(con, id, vehicle);
  con.end();
  return result;
};

const deleteVehicle = async function (id) {
  const con = await dbService.connect();
  const result = await vehicleService.deleteVehicle(con, id);
  con.end();
  return result;
};

module.exports = { getVehicles, createVehicle, updateVehicle, deleteVehicle };
