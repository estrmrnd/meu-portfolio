'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';


export default function Header({ onToggleTheme, theme }: { onToggleTheme: () => void; theme: string }) {
return (
<header className="flex items-center justify-between py-6 border-b">
<div>
<h1 className="text-2xl font-semibold">Ester Miranda</h1>
<p className="text-sm opacity-80">Desenvolvedora Front-end &amp; Back-end.</p>
</div>
<div className="flex items-center gap-3 mt-3">
<a href="/CURRÍCULO ESTER MIRANDA.pdf" download className="px-3 py-2 border rounded-md">
Baixar CV
</a>
</div>
</header>
);
}