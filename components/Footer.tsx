import React from 'react';


export default function Footer() {
return (
<footer className="mt-12 p-6 border-t text-sm opacity-90">
<h3 className="font-medium">Contato</h3>
<p className="mt-2">Quer trocar uma ideia? Me chama no LinkedIn!</p>
<div className="mt-4 flex gap-3">
<a href="https://www.linkedin.com/in/estrmrnd" target="_blank" className="px-4 py-2 border rounded-md">LinkedIn</a>
</div>
<p className="mt-6 text-xs opacity-70">© {new Date().getFullYear()} Ester Miranda</p>
</footer>
);
}