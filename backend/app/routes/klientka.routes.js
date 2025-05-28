module.exports = app => {
  const klientki = require("../controllers/klientka.controller");
  const router = require("express").Router();

  router.post("/", klientki.create);
  router.get("/", klientki.findAll);
  router.get("/uzytkownik/:id", klientki.findByUser); // <-- ważne: PRZED `/:id`
  router.get("/:id", klientki.findOne);
  router.put("/:id", klientki.update);
  router.delete("/:id", klientki.delete);

  app.use("/api/klientki", router);
};
