const express = require("express");

const app = express();
const vehicleRouter = require("./routes/vehicle");

app.use("/vehicle", vehicleRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
