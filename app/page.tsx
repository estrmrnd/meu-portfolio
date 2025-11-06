'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { PROJECTS } from '../lib/data';

export default function Page() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selected, setSelected] = useState<any>(null);
  const [q, setQ] = useState('');

  const filtered = PROJECTS.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Header onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />

      <section className="mt-8">
        <h2 className="text-xl font-medium">Sobre mim</h2>
        <p className="mt-2 text-sm opacity-90">
          Desenvolvedora front-end com experiência em React, Next.js, TypeScript e Back-end em C# e banco de dados.
          Busco criar interfaces limpas, responsivas e funcionais. Abaixo, estão alguns dos meus projetos principais.
        </p>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Projetos</h3>
          <input
            placeholder="buscar..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id} {...p} onClick={() => setSelected(p)} />
          ))}
          {filtered.length === 0 && <p className="text-sm opacity-80">Nenhum projeto encontrado.</p>}
        </div>
      </section>

      <Footer />
      <Modal selected={selected} onClose={() => setSelected(null)} />
    </main>
  );
}