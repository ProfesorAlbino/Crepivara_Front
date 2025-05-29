import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import Home from "./view/Home";
import AdminHome from "./view/admin/AdminHome";

import "./index.css";

const isAuthenticated = () => localStorage.getItem("user") !== null;

const PrivateRoute = ({ children }) => {
  return isAuthenticated()
    ? children
    : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas públicas con UserLayout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Rutas privadas con AdminLayout */}
        <Route
          path="/home-admin/*"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Outlet />
              </AdminLayout>
            </PrivateRoute>
          }
        >
          {/* subrutas de admin */}
          <Route index element={<AdminHome />} />
          {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Route>

        {/* Auth fuera de cualquier layout, si quieres */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
