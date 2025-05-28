import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import List from "./components/List";
import Create from "./components/Create";
import Edit from "./components/Edit";
import View from "./components/View";
import MojeWizyty from "./components/MojeWizyty"; // musisz dodać ten komponent
import Umow from "./components/Umow";           // musisz dodać ten komponent

import { isLoggedIn, isAdmin, logout } from "./utils/auth";

function App() {
  return (
    <Router>
      {/* NAWIGACJA */}
      {isLoggedIn() && (
        <div className="text-center py-3 bg-dark text-white">
          <a href="/" className="btn btn-outline-light me-2">🏠 Strona główna</a>
          <a href="/konto" className="btn btn-outline-light me-2">👤 Moje konto</a>

          {!isAdmin() && (
            <>
              <a href="/moje-wizyty" className="btn btn-outline-info me-2">📅 Moje wizyty</a>
              <a href="/umow" className="btn btn-outline-success me-2">📝 Umów wizytę</a>
            </>
          )}

          {isAdmin() && (
            <a href="/lista" className="btn btn-outline-warning me-2">📋 Lista wizyt</a>
          )}

          <button className="btn btn-outline-danger" onClick={logout}>🚪 Wyloguj</button>
        </div>
      )}

      <div className="container">
        {/* NAGŁÓWEK */}
        <div className="text-center py-4 bg-light rounded shadow mb-4" style={{ opacity: 0.95 }}>
          <img src="/logo.png" alt="Salon logo" width="80" />
          <h1 className="mt-2" style={{ color: "#d63384" }}>Salon Piękna</h1>
          <p className="text-muted">Zadbaj o siebie z klasą ✨</p>
        </div>

        {/* TRASY */}
        <Routes>
          {/* STRONA GŁÓWNA */}
          <Route path="/" element={
            isLoggedIn()
              ? (isAdmin() ? <Navigate to="/lista" /> : <Navigate to="/konto" />)
              : <Home />
          } />

          {/* DOSTĘPNE DLA KAŻDEGO */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* TYLKO DLA ZALOGOWANEGO KLIENTA */}
          <Route path="/konto" element={isLoggedIn() ? <Account /> : <Navigate to="/login" />} />
          <Route path="/moje-wizyty" element={isLoggedIn() && !isAdmin() ? <MojeWizyty /> : <Navigate to="/login" />} />
          <Route path="/umow" element={isLoggedIn() && !isAdmin() ? <Umow /> : <Navigate to="/login" />} />

          {/* TYLKO DLA ADMINA */}
          <Route path="/lista" element={isLoggedIn() && isAdmin() ? <List /> : <Navigate to="/" />} />
          <Route path="/create" element={isLoggedIn() && isAdmin() ? <Create /> : <Navigate to="/" />} />
          <Route path="/edit/:id" element={isLoggedIn() && isAdmin() ? <Edit /> : <Navigate to="/" />} />
          <Route path="/view/:id" element={isLoggedIn() && isAdmin() ? <View /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
