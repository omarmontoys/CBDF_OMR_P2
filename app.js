const express = require("express");
const routesUser = require("./src/routes/auth.routes");
const cors = require("cors"); // Import the cors middleware
const app = express();
const puerto = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/socios/v1/users", routesUser);
const server = app.listen(puerto, () =>
  console.log(`Server Connected to port ${puerto}`)
);
