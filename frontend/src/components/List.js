import React, { useEffect, useState } from "react";
import { getAll, remove } from "../services/Api";  // Funkcje do pobierania i usuwania danych z API
import { Link } from "react-router-dom";           // Linki do nawigacji między stronami


function List() {
  // Stan przechowujący listę klientek
  const [klientki, setKlientki] = useState([]);
  // Stan przechowujący tekst z pola wyszukiwania
  const [search, setSearch] = useState("");

  // useEffect - uruchamia się raz po załadowaniu komponentu, wywołuje loadData()
  useEffect(() => {
    loadData();
  }, []);

  // Funkcja ładująca dane z API i ustawiająca je w stanie klientki
  const loadData = () => {
    getAll().then(res => setKlientki(res.data));
  };

  // Funkcja usuwająca klientkę po id, z potwierdzeniem
  const deleteKlientka = (id) => {
    if (window.confirm("Czy na pewno chcesz usunąć tę klientkę?")) {
      remove(id).then(() => {
        loadData();  // Po usunięciu odświeżamy listę
      });
    }
  };

  return (
    <div className="container mt-4">
      {/* Nagłówek listy */}
      <h2 className="mb-4">📋 Lista klientek salonu</h2>

      {/* Link do strony dodawania nowej klientki */}
      <Link to="/create" className="btn btn-success mb-3">➕ Dodaj nową klientkę</Link>

      {/* Pole wyszukiwania klientki po imieniu */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Szukaj klientki po imieniu"
        valuce={search}  // **UWAGA: literówka, powinno być `value`**
        onChange={(e) => setSearch(e.target.value)}  // Aktualizujemy search przy wpisywaniu
      />

      {/* Tabela z listą klientek */}
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
          {/* Mapujemy każdą klientkę na wiersz w tabeli */}
          {klientki.map(k => (
            <tr key={k.id}>
              <td>{k.imie}</td>
              <td>{k.nazwisko}</td>
              <td>{k.zabieg}</td>
              {/* Formatowanie daty na czytelny format */}
              <td>{new Date(k.dataWizyty).toLocaleDateString()}</td>
              <td>
                {/* Link do podglądu szczegółów klientki */}
                <Link to={`/view/${k.id}`} className="btn btn-info btn-sm me-2">👁️</Link>

                {/* Link do edycji klientki */}
                <Link to={`/edit/${k.id}`} className="btn btn-warning btn-sm me-2">✏️</Link>

                {/* Przycisk usuwania klientki */}
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
