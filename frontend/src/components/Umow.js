import React, { useState } from "react";
import axios from "axios";
import { getUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Umow() {
  const [form, setForm] = useState({
    zabieg: "",
    dataWizyty: "",
    telefon: ""
  });

  const navigate = useNavigate();
  const user = getUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nowaWizyta = {
      imie: user.imie,
      nazwisko: user.nazwisko || "",      // <- jeśli jest
      email: user.email,
      zabieg: form.zabieg,
      dataWizyty: form.dataWizyty,
      userId: user.id
};
    console.log("Dane do wysłania:", nowaWizyta);

    axios.post("http://localhost:3000/api/klientki", nowaWizyta)
      .then(() => {
        alert("Wizyta została umówiona!");
        navigate("/moje-wizyty");
      })
      .catch(err => {
        alert("Błąd: nie udało się zapisać wizyty.");
        console.error(err);
      });
  };

  return (
    <div className="container mt-4 col-md-6 bg-white p-4 rounded shadow">
      <h2 className="mb-4 text-center">📝 Umów wizytę</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Zabieg</label>
          <select
            name="zabieg"
            className="form-select"
            value={form.zabieg}
            onChange={handleChange}
            required
          >
            <option value="">-- Wybierz zabieg --</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Masaż twarzy">Masaż twarzy</option>
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
        <button type="submit" className="btn btn-success w-100">Zarezerwuj</button>
      </form>
    </div>
  );
}

export default Umow;
