import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "../utils/auth";

function MojeWizyty() {
  const [wizyty, setWizyty] = useState([]);
  const user = getUser();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/klientki/uzytkownik/${user.id}`)
      .then(res => setWizyty(res.data))
      .catch(err => console.error(err));
  }, [user.id]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📅 Moje wizyty</h2>
      {wizyty.length === 0 ? (
        <p>Nie masz jeszcze żadnych wizyt.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Zabieg</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {wizyty.map(w => (
              <tr key={w.id}>
                <td>{w.zabieg}</td>
                <td>{new Date(w.dataWizyty).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MojeWizyty;
