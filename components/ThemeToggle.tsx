'use client';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.theme = newTheme;
  };

  return (
    <button
      onClick={toggleTheme}
      className="border rounded-md px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-100"
    >
      {theme === 'light' ? '🌞 Claro' : '🌙 Escuro'}
    </button>
  );
}
