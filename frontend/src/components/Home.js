import React from "react";
import { Link } from "react-router-dom";  // Import Link do nawigacji między stronami

function Home() {
  return (
    // Kontener z klasami do stylowania (centrowanie, marginesy, tło, padding, zaokrąglenie i cień)
    <div className="container text-center mt-5 bg-white p-4 rounded shadow">
      
      {/* Nagłówek powitalny */}
      <h1 className="mb-4">🌸 Witamy w Salonie Piękna</h1>
      
      {/* Krótki opis/instrukcja dla użytkownika */}
      <p className="lead">
        Zarejestruj się lub zaloguj, aby umówić się na wizytę i zarządzać swoim kontem.
      </p>

      {/* Sekcja z dwoma przyciskami: rejestracja i logowanie */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        {/* Link do strony rejestracji */}
        <Link to="/register" className="btn btn-success">📝 Zarejestruj się</Link>
        
        {/* Link do strony logowania */}
        <Link to="/login" className="btn btn-primary">🔐 Zaloguj się</Link>
      </div>
    </div>
  );
}

export default Home;
