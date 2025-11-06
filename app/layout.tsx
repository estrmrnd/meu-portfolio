'use client';
import './globals.css';
import React, { useState, useEffect } from 'react';


export default function RootLayout({ children }: { children: React.ReactNode }) {
const [theme, setTheme] = useState<'light' | 'dark'>('dark');


useEffect(() => {
const stored = localStorage.getItem('theme');
if (stored === 'light' || stored === 'dark') setTheme(stored);
}, []);


useEffect(() => {
document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('theme', theme);
}, [theme]);


return (
<html lang="pt-BR" data-theme={theme}>
<body className="bg-background text-foreground transition-colors duration-300 min-h-screen">
{children}
</body>
</html>
);
}
