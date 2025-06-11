import React, { useState } from "react";
import { create } from "../services/Api"; // Import funkcji do tworzenia nowej klientki (np. wysyłanie POST do backendu)
import { useNavigate } from "react-router-dom"; // Hook do nawigacji po wykonanej akcji

// Komponent formularza tworzenia nowej klientki
function Create() {
  // Stan formularza zawierający dane klientki
  const [form, setForm] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: "",
    zabieg: "",
    dataWizyty: ""
  });

  const navigate = useNavigate(); // Funkcja do przekierowywania użytkownika

  // Funkcja aktualizująca stan formularza przy zmianie wartości w polach
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony
    create(form).then(() => navigate("/")); // Wywołanie funkcji tworzącej i przekierowanie do strony głównej
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">➕ Dodaj nową klientkę</h2>

      {/* Formularz dodawania klientki */}
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
          <label>Nazwisko</label>
          <input
            type="text"
            className="form-control"
            name="nazwisko"
            value={form.nazwisko}
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
          <label>Telefon</label>
          <input
            type="text"
            className="form-control"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Zabieg</label>
          {/* Lista rozwijana z dostępnymi zabiegami */}
          <select
            className="form-select"
            name="zabieg"
            value={form.zabieg}
            onChange={handleChange}
            required
          >
            <option value="">-- Wybierz zabieg --</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Masaż twarzy">Masaż twarzy</option>
            <option value="Depilacja">Depilacja</option>
            <option value="Henna brwi">Henna brwi</option>
            <option value="Zabieg oczyszczający">Zabieg oczyszczający</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Data wizyty</label>
          <input
            type="date"
            className="form-control"
            name="dataWizyty"
            value={form.dataWizyty}
            onChange={handleChange}
            required
          />
        </div>

        {/* Przycisk zapisujący formularz */}
        <button type="submit" className="btn btn-success">Zapisz</button>
      </form>
    </div>
  );
}

export default Create;
