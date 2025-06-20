// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import Home from "./view/Home";
import AdminHome from "./view/admin/AdminHome";

import "./index.css";
import MainMenu from "./view/menu/mainMenu";
import TimeCounter from "./view/counter/TimeCounter";

const isAuthenticated = () => localStorage.getItem("user") !== null;

// Función para comprobar si seguimos antes de la fecha de apertura
const bloquedTime = () => {
  const openingDateStr = process.env.REACT_APP_OPENING_DATE; // "DD/MM/YYYY"
  const openingHourStr = process.env.REACT_APP_OPENING_HOUR; // opcional: "HH" o "HH:MM"

  if (!openingDateStr) {
    console.warn('REACT_APP_OPENING_DATE no está definida');
    return false; // por seguridad, permitir navegación si no se define
  }

  const partes = openingDateStr.split('/');
  if (partes.length !== 3) {
    console.error('Formato inválido en REACT_APP_OPENING_DATE:', openingDateStr);
    return false;
  }
  const [diaStr, mesStr, añoStr] = partes;
  const dia = Number(diaStr);
  const mes = Number(mesStr);
  const año = Number(añoStr);
  if (
    Number.isNaN(dia) ||
    Number.isNaN(mes) ||
    Number.isNaN(año) ||
    dia < 1 || dia > 31 ||
    mes < 1 || mes > 12
  ) {
    console.error('Valores inválidos en REACT_APP_OPENING_DATE:', openingDateStr);
    return false;
  }
  // Crear fecha en zona local
  const fechaObj = new Date(año, mes - 1, dia);

  // Si se definió hora de apertura, parsearla:
  if (openingHourStr) {
    // Puede ser "HH" o "HH:MM"
    const partesHora = openingHourStr.split(':');
    const hora = Number(partesHora[0]);
    const minuto = partesHora.length > 1 ? Number(partesHora[1]) : 0;
    if (!Number.isNaN(hora) && hora >= 0 && hora < 24 && !Number.isNaN(minuto) && minuto >= 0 && minuto < 60) {
      fechaObj.setHours(hora, minuto, 0, 0);
    } else {
      console.warn('Formato inválido en REACT_APP_OPENING_HOUR:', openingHourStr);
      // dejamos la fechaObj a medianoche
    }
  } else {
    // opcional: si quieres una hora por defecto, p.ej. 00:00 o 10:00:
    fechaObj.setHours(0, 0, 0, 0);
  }

  const now = new Date();
  return now < fechaObj; // true = aún bloqueado
};

// Un componente guard genérico para rutas públicas/privadas
// Recibe: element: JSX.Element que se quiere renderizar, authRequired: boolean
const RouteGuard = ({ element, authRequired = false }) => {
  const blocked = bloquedTime();
  if (blocked) {
    // Si aún estamos bloqueados, redirigir siempre a /timecount
    return <Navigate to="/timecount" replace />;
  }
  // No estamos bloqueados: permitir o rechazar por autenticación
  if (authRequired && !isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return element;
};

// Wrapper para AdminLayout con auth y time guard
const AdminLayoutWrapper = () => (
  <AdminLayout>
    <Outlet />
  </AdminLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para TimeCounter: si ya pasó la fecha, redirigimos a "/" */}
        <Route
          path="/timecount"
          element={<TimeCounter/>}
        />

        {/* Rutas públicas bajo UserLayout */}
        <Route
          element={<RouteGuard element={<UserLayout />} authRequired={false} />}
        >
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/menu"
            element={<MainMenu />}
          />
        </Route>

        {/* Rutas de autenticación */}
        <Route path="/login" element={
          // Si ya pasó el tiempo y ya autenticado, quizá redirigir al home o admin?
          bloquedTime()
            ? <Login />  // Si antes de apertura, quizá no debería dejar login; pero puedes decidir: quizá permitir ver login para probar?
            : isAuthenticated()
              ? <Navigate to="/" replace />
              : <Login />
        } />
        <Route path="/register" element={
          bloquedTime()
            ? <Register />
            : isAuthenticated()
              ? <Navigate to="/" replace />
              : <Register />
        } />

        {/* Rutas privadas bajo AdminLayout */}
        <Route
          path="/home-admin/*"
          element={<RouteGuard element={<AdminLayoutWrapper />} authRequired={true} />}
        >
          <Route index element={<AdminHome />} />
          {/* Otras subrutas admin: */}
          {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Route>

        {/* Si ninguna ruta hace match, redirigir: 
            Si bloqueado, a /timecount; si no, a "/" o login según convenga */}
        <Route
          path="*"
          element={
            bloquedTime()
              ? <Navigate to="/timecount" replace />
              : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
