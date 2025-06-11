import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Komponent rejestracji użytkownika
function Register() {
  // Stan formularza do przechowywania danych: imię, email i hasło
  const [form, setForm] = useState({
    imie: "",
    email: "",
    haslo: ""
  });

  // Stan do przechowywania ewentualnego błędu
  const [error, setError] = useState("");

  // Hook do nawigacji między stronami
  const navigate = useNavigate();

  // Funkcja obsługująca zmianę wartości pól formularza
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zatrzymuje domyślne odświeżenie strony
    setError(""); // Czyści poprzedni błąd

    // Wysłanie danych formularza do backendu — UWAGA: to endpoint logowania, nie rejestracji!
    axios.post(`https://salon-backend-87g8.onrender.com/api/auth/register`, form)
      .then(() => {
        alert("Rejestracja zakończona sukcesem!");
        navigate("/login"); // Przekierowanie do strony logowania
      })
      .catch(err => {
        // Obsługa błędu — wyświetlenie wiadomości z backendu lub domyślnej
        const msg = err.response?.data?.error || "Coś poszło nie tak";
        setError(msg);
      });
  };

  return (
    <div className="container mt-5 col-md-6 bg-white p-4 rounded shadow">
      <h2 className="mb-4 text-center">📝 Rejestracja klientki</h2>

      {/* Wyświetlenie błędu, jeśli istnieje */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Formularz rejestracji */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Imię</label>
          <input
            type="text"
            className="form-control"
            name="imie"
            value={form.imie}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Hasło</label>
          <input
            type="password"
            className="form-control"
            name="haslo"
            value={form.haslo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
}

export default Register;

