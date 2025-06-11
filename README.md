#  Salon Piękna – Aplikacja SPA z REST API

Aplikacja umożliwia klientkom rejestrację i umawianie wizyt w salonie kosmetycznym oraz logowanie się jako administrator, który ma pełny wgląd w listę klientek i wizyt.

---

##  Technologie

- **Frontend**: React (SPA, React Router DOM, Bootstrap)
- **Backend**: Node.js + Express + Sequelize (REST API)
- **Baza danych**: MySQL (hostowana zdalnie)
- **Hosting**: Render.com (PaaS)
- **Inne**: LocalStorage, JWT, bcryptjs

---

## Funkcje aplikacji

###  Klientka:
- Rejestracja i logowanie
- Formularz umawiania wizyt
- Przeglądanie własnych wizyt

### Administrator:
- Logowanie jako `admin`
- Przeglądanie i zarządzanie wszystkimi wizytami klientek
- Edytowanie, usuwanie wizyt

---

##  Dane testowe do logowania

| Typ konta   | Email               | Hasło      |
|-------------|---------------------|------------|
| Administrator | admin@salon.pl    | admin123   |
| Klientka      | klient@salon.pl   | klient123  |

---

##  Hosting (Render.com)

Projekt został wdrożony jako dwie osobne usługi:

###  Frontend (React)
- **Typ**: Static Site
- **Root Directory**: `proj_baj/frontend`
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Zmienna środowiskowa**:
## Link do testowania
https://salon-frontend-v8vf.onrender.com
