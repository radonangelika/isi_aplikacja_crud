import React from "react";
import { getUser, logout } from "../utils/auth";  // Import funkcji do pobierania użytkownika i wylogowania

function Account() {
  // Pobieramy dane aktualnie zalogowanego użytkownika
  const user = getUser();

  return (
    // Kontener z marginesem, szerokością, tłem, paddingiem, zaokrągleniem i cieniem
    <div className="container mt-4 col-md-6 bg-white p-4 rounded shadow">
      
      {/* Nagłówek sekcji konta */}
      <h2 className="mb-4">👤 Moje konto</h2>
      
      {/* Wyświetlamy imię użytkownika */}
      <p><strong>Imię:</strong> {user.imie}</p>
      
      {/* Wyświetlamy email użytkownika */}
      <p><strong>Email:</strong> {user.email}</p>
      
      {/* Przycisk do wylogowania */}
      <button className="btn btn-danger mt-3" onClick={logout}>🚪 Wyloguj się</button>
    </div>
  );
}

export default Account;
