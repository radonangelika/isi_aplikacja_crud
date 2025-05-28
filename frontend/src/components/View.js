import React, { useEffect, useState } from "react";
import { getById } from "../services/Api";
import { useParams, Link } from "react-router-dom";

function View() {
  const [klientka, setKlientka] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(res => setKlientka(res.data));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">👁️ Szczegóły klientki</h2>
      <Link to="/" className="btn btn-secondary mb-4">← Wróć</Link>
      <ul className="list-group">
        <li className="list-group-item"><strong>Imię:</strong> {klientka.imie}</li>
        <li className="list-group-item"><strong>Nazwisko:</strong> {klientka.nazwisko}</li>
        <li className="list-group-item"><strong>Email:</strong> {klientka.email}</li>
        <li className="list-group-item"><strong>Zabieg:</strong> {klientka.zabieg}</li>
        <li className="list-group-item"><strong>Data wizyty:</strong> {new Date(klientka.dataWizyty).toLocaleDateString()}</li>
      </ul>
    </div>
  );
}

export default View;
