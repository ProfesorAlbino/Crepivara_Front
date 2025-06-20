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

const PrivateRoute = ({ children }) => {
  return isAuthenticated()
    ? children
    : <Navigate to="/login" replace />;
};

// Componente wrapper para AdminLayout que usa Outlet
const AdminLayoutWrapper = () => {
  return (
    <PrivateRoute>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </PrivateRoute>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas con UserLayout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MainMenu />} />
        </Route>

        {/* Rutas privadas con AdminLayout */}
        <Route path="/home-admin" element={<AdminLayoutWrapper />}>
          {/* Subrutas de admin */}
          <Route index element={<AdminHome />} />
          {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Route>

        {/* Auth fuera de cualquier layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timecount" element={<TimeCounter />} />
        
        

        {/* Redirección por defecto */}
      </Routes>
    </Router>
  );
}

export default App;