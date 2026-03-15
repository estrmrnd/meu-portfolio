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
          Sou desenvolvedora front-end com experiência em React, Next.js e TypeScript, além de experiência em desenvolvimento 
          back-end utilizando C# e bancos de dados. Também atuo na área de dados, trabalhando com SQL, ambientes em AWS e estruturas 
          de Data Lake para exploração, organização e análise de informações.</p>
          <p className="mt-2 text-sm opacity-90">
            Tenho experiência na manipulação de dados e na construção de dashboards e visualizações que auxiliam na geração de 
            insights e na tomada de decisão. Meu foco é desenvolver interfaces limpas, responsivas e funcionais, 
            unindo desenvolvimento e dados para criar soluções eficientes e orientadas à informação.</p>
      </section>

      <section className="mt-8">
  <h2 className="text-xl font-medium">Competências</h2>

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm opacity-90">

    <div>
      <h3 className="font-semibold mb-2">Front-end</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Interfaces responsivas</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Dados</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li>SQL</li>
        <li>AWS</li>
        <li>Análise de dados</li>
        <li>Manipulação de dados</li>
        <li>Dashboards</li>
        <li>Power BI</li>
        <li>Modelagem de dados</li>
        
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Back-end</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li>C#</li>
        <li>.NET</li>
        <li>APIs REST</li>
        <li>Integração de dados</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Banco de Dados</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li>MySQL</li>
        <li>Joins</li>
        <li>Agregações</li>
        <li>Filtros avançados</li>
      </ul>
    </div>

  </div>
</section>

 
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Projetos</h3>
          {/* <input
            placeholder="buscar..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          /> */}
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