import React, { useEffect, useState } from "react";
import { getById, update } from "../services/Api";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: "",
    zabieg: "",
    dataWizyty: ""
  });

  useEffect(() => {
    getById(id).then(res => {
      const data = res.data;
      setForm({
        imie: data.imie,
        nazwisko: data.nazwisko,
        email: data.email,
        telefon: data.telefon,
        zabieg: data.zabieg,
        dataWizyty: data.dataWizyty.substring(0, 10)
      });
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(id, form).then(() => navigate("/"));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">✏️ Edytuj klientkę</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Imię</label>
          <input type="text" className="form-control" name="imie" value={form.imie} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Nazwisko</label>
          <input type="text" className="form-control" name="nazwisko" value={form.nazwisko} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Telefon</label>
          <input type="text" className="form-control" name="telefon" value={form.telefon} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label>Zabieg</label>
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
          <input type="date" className="form-control" name="dataWizyty" value={form.dataWizyty} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Zapisz zmiany</button>
      </form>
    </div>
  );
}

export default Edit;
