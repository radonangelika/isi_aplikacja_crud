const db = require("../models");
const Klientka = db.Klientka;

exports.findAll = (req, res) => {
  Klientka.findAll().then(data => res.send(data));
};

exports.findOne = (req, res) => {
  Klientka.findByPk(req.params.id).then(data => res.send(data));
};

exports.create = async (req, res) => {
  try {
    const nowa = await Klientka.create(req.body);
    res.send(nowa);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
exports.update = (req, res) => {
  Klientka.update(req.body, { where: { id: req.params.id } })
    .then(num => res.send({ updated: num }));
};

exports.delete = (req, res) => {
  Klientka.destroy({ where: { id: req.params.id } })
    .then(num => res.send({ deleted: num }));
};

exports.findByUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Klientka.findAll({ where: { userId: id } });
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
