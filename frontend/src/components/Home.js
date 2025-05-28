import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5 bg-white p-4 rounded shadow">
      <h1 className="mb-4">🌸 Witamy w Salonie Piękna</h1>
      <p className="lead">Zarejestruj się lub zaloguj, aby umówić się na wizytę i zarządzać swoim kontem.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/register" className="btn btn-success">📝 Zarejestruj się</Link>
        <Link to="/login" className="btn btn-primary">🔐 Zaloguj się</Link>
      </div>
    </div>
  );
}

export default Home;
