const express = require("express");
const cors = require("cors");

const app = express();

// POZWÓL NA WSZYSTKIE POŁĄCZENIA (z frontu na Renderze też)
app.use(cors());

// parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("111");

const db = require("./app/models");
db.authenticate();
db.sync(); // UWAGA: usuwa dane przy starcie!

// test route
app.get("/", (req, res) => {
  res.json({ message: "To ja SERWER!!!." });
});

// routes
require("./app/routes/klientka.routes")(app);
require("./app/routes/auth.routes")(app);

console.log("11222");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
