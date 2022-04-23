const mysql = require("mysql");

const config = {
  host: "shippify-hiring.cv2sgxogwffx.sa-east-1.rds.amazonaws.com",
  user: "candidate4",
  password: "ubnpS3rySnj88Sum",
  database: "shippify4",
};

const connect = async function () {
  var con = mysql.createConnection(config);

  return new Promise((resolve, reject) => {
    con.connect(function (err) {
      if (err) return reject(err);
      console.log("Connected!");
      resolve(con);
    });
  });
};

module.exports = { connect };
