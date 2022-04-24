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
  let sql =
    "SELECT * FROM vehicle as v INNER JOIN driver as d on (v.driver_id = d.id)";
  const { page, limit, search } = queryParameters;
  if (search)
    sql +=
      " WHERE d.first_name LIKE '%" +
      search +
      "%' OR d.phone LIKE '%" +
      search +
      "%' OR d.email LIKE '%" +
      search +
      "%'";

  sql += " LIMIT ?,?";
  const params = [parseInt((page - 1) * limit), parseInt(limit)];

  return new Promise((resolve, reject) => {
    con.query(sql, params, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const updateVehicle = async function (con, id, vehicle) {
  const { driver_id, plate, model, type, capacity } = vehicle;
  const sql =
    "UPDATE vehicle SET driver_id = ?, plate = ?, model = ?, type = ?, capacity = ? WHERE id = ?";
  const params = [driver_id, plate, model, type, capacity, id];

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
  updateVehicle,
};
