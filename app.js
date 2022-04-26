const express = require("express");

const app = express();
const vehicleRouter = require("./routes/vehicle");
const bp = require("body-parser");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/vehicle", vehicleRouter);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
