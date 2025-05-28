const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
console.log("111")
const db = require("./app/models");

db.authenticate();
db.sync(); // UWAGA: to usuwa WSZYSTKIE dane z bazy!

// simple route
app.get("/", (req, res) => {
  res.json({ message: "To ja SERWER!!!." });
});

require("./app/routes/klientka.routes")(app);
console.log("11222")

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
require("./app/routes/auth.routes")(app);