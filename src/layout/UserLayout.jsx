// src/layout/UserLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout/AdminLayoutStyle.css';

const UserLayout = () => {
  return (
    <div className="mainContainer flex flex-col min-h-screen">
      <header>
        <h1>Header</h1>
      </header>

      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default UserLayout;
