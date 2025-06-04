import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/components/DarkModeStyle.css';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Al montar, comprobamos si el usuario ya tenía tema guardado
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Pasar a modo claro
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      // Pasar a modo oscuro
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className="slider">
          <Sun size={16} className="sun-icon" />
          <Moon size={16} className="moon-icon" />
        </div>
      </label>
    </div>
  );
}
