const createVehicle = async function (con, vehicle) {
  const { driver_id, plate, model, type, capacity } = vehicle;
  const sql =
    "INSERT INTO vehicle (driver_id, plate, model, type, capacity) VALUES (?, ?, ?, ?, ?)";
  const params = [driver_id, plate, model, type, capacity];

  return new Promise((resolve, reject) => {
    con.query(sql, params, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getVehicles = async function (con, queryParameters) {
  const sql = "SELECT * FROM vehicle LIMIT ?,?";
  const { page, limit } = queryParameters;
  const params = [parseInt((page - 1) * limit), parseInt(limit)];

  return new Promise((resolve, reject) => {
    con.query(sql, params, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  createVehicle,
  getVehicles,
};
