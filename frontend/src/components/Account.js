import React from "react";
import { getUser, logout } from "../utils/auth";

function Account() {
  const user = getUser();

  return (
    <div className="container mt-4 col-md-6 bg-white p-4 rounded shadow">
      <h2 className="mb-4">👤 Moje konto</h2>
      <p><strong>Imię:</strong> {user.imie}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button className="btn btn-danger mt-3" onClick={logout}>🚪 Wyloguj się</button>
    </div>
  );
}

export default Account;