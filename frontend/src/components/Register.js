import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    imie: "",
    email: "",
    haslo: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    axios.post(`https://salon-backend-87g8.onrender.com/api/auth/login`, form)
      .then(() => {
        alert("Rejestracja zakończona sukcesem!");
        navigate("/login");
      })
      .catch(err => {
        const msg = err.response?.data?.error || "Coś poszło nie tak";
        setError(msg);
      });
  };

  return (
    <div className="container mt-5 col-md-6 bg-white p-4 rounded shadow">
      <h2 className="mb-4 text-center">📝 Rejestracja klientki</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Imię</label>
          <input type="text" className="form-control" name="imie" value={form.imie} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Hasło</label>
          <input type="password" className="form-control" name="haslo" value={form.haslo} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Zarejestruj się</button>
      </form>
    </div>
  );
}

export default Register;
