import React, { useEffect, useState } from "react";
import { getAll, remove } from "../services/Api";
import { Link } from "react-router-dom";


function List() {
  const [klientki, setKlientki] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getAll().then(res => setKlientki(res.data));
  };

  const deleteKlientka = (id) => {
    if (window.confirm("Czy na pewno chcesz usunąć tę klientkę?")) {
      remove(id).then(() => {
        loadData();
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📋 Lista klientek salonu</h2>
      <Link to="/create" className="btn btn-success mb-3">➕ Dodaj nową klientkę</Link>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Szukaj klientki po imieniu"
        valuce={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Zabieg</th>
            <th>Data wizyty</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {klientki.map(k => (
            <tr key={k.id}>
              <td>{k.imie}</td>
              <td>{k.nazwisko}</td>
              <td>{k.zabieg}</td>
              <td>{new Date(k.dataWizyty).toLocaleDateString()}</td>
              <td>
                <Link to={`/view/${k.id}`} className="btn btn-info btn-sm me-2">👁️</Link>
                <Link to={`/edit/${k.id}`} className="btn btn-warning btn-sm me-2">✏️</Link>
                <button className="btn btn-danger btn-sm" onClick={() => deleteKlientka(k.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;