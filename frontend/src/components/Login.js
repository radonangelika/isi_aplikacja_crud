import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
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

    axios.post("http://localhost:3000/api/auth/login", form)
      .then(res => {
        const user = res.data.user;

        // Zapisz token i użytkownika
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(user));

        // Przekieruj zgodnie z rolą
        if (user.rola === "admin") {
          navigate("/lista");
        } else {
          navigate("/konto");
        }
      })
      .catch(err => {
        const msg = err.response?.data?.error || "Błąd logowania";
        setError(msg);
      });
  };

  return (
    <div className="container mt-5 col-md-6 bg-white p-4 rounded shadow">
      <h2 className="mb-4 text-center">🔐 Logowanie</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success w-100">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
