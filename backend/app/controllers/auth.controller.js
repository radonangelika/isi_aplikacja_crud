const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = db.User;

// ✅ REJESTRACJA
exports.register = async (req, res) => {
  try {
    const { imie, email, haslo } = req.body;

    if (!imie || !email || !haslo) {
      return res.status(400).send({ error: "Wszystkie pola są wymagane" });
    }

    // sprawdź, czy taki email już istnieje
    const istnieje = await User.findOne({ where: { email } });
    if (istnieje) {
      return res.status(400).send({ error: "Użytkownik o tym adresie już istnieje" });
    }

    const hashed = await bcrypt.hash(haslo, 10);

    const user = await User.create({
      imie,
      email,
      haslo: hashed,
      rola: "klient" // domyślna rola
    });

    res.send({ message: "Zarejestrowano pomyślnie", user });
  } catch (err) {
    console.error("Błąd rejestracji:", err);
    res.status(500).send({ error: err.message });
  }
};

// ✅ LOGOWANIE
exports.login = async (req, res) => {
  try {
    const { email, haslo } = req.body;

    if (!email || !haslo) {
      return res.status(400).send({ error: "Email i hasło są wymagane" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ error: "Nieprawidłowy email" });
    }

    const valid = await bcrypt.compare(haslo, user.haslo);
    if (!valid) {
      return res.status(400).send({ error: "Błędne hasło" });
    }

    const token = jwt.sign({ id: user.id }, "tajnyklucz", {
      expiresIn: "1h"
    });

    res.send({
      message: "Zalogowano",
      token,
      user: {
        id: user.id,
        email: user.email,
        imie: user.imie,
        rola: user.rola
      }
    });
  } catch (err) {
    console.error("Błąd logowania:", err);
    res.status(500).send({ error: err.message });
  }
};
