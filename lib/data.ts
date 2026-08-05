export const PROJECTS = [
  {
    id: 'agendaaqui',
    title: 'AgendaAqui — SaaS de Agendamento',
    short: 'Sistema de agendamento multi-tenant para salões e profissionais autônomos.',
    long: 'SaaS inspirado numa experiência real com minha esteticista, que perdia clientes por falta de lembrete de horário. Arquitetura multi-tenant baseada em slug (ex: /nome-do-salao), com notificações automáticas por email e push (Web Notifications API) para lembrar clientes dos agendamentos. Frontend em Next.js, backend em PHP.',
    tags: ['Next.js', 'PHP', 'Web Notifications API', 'Full Stack'],
    github: 'https://github.com/estrmrnd/salao',
},
{
id: 'credenciamento-firebase',
title: 'Sistema de Credenciamento (Firebase)',
short: 'Sistema Web para eventos com cadastro, painel admin e exportação.',
long: 'Sistema desenvolvido para o Festival Negritudes da TV Globo para gerenciar credenciados de serviço para o evento. Contem login via Google, painel admin, exportação e importação CSV e backend em Firebase.',
tags: ['Firebase', 'Firestore', 'React', 'Tailwind'],
github: 'https://github.com/estrmrnd/credenciamento',
deploy:'https://credenciamento-one.vercel.app/entrar'
},
{
id: 'memory-game',
title: 'Jogo da Memória',
short: 'Jogo da memória com limite de tempo e ranking (Firestore).',
long: 'Mini-jogo com limite de 3 minutos, ranking persistido em Firestore e feedback visual com SweetAlert. Jogo desenvolvido e utilizado por 2 anos consecutivos(2024 e 2025) no Festival de Inverno do Rio, na Marina da Glória.',
tags: ['React', 'Firestore', 'Game'],
github: 'https://github.com/estrmrnd/jogo-da-memoria-II',
deploy: 'https://jogo-da-memoria-ii.vercel.app/'
},
{
id: 'vtex-catalog-export',
title: 'Exportação VTEX - Estoque / Produtos',
short: 'Ferramenta C# / MySQL para exportar produtos sem foto, peso ou descrição (Integração VtexController).',
long: 'Primeiro projeto profissional em C# (.NET) para o Sistema Corporativo do Grupo S2, com BLL e controller para exportação dinâmica de produtos, integração com MySQL e geração de arquivos para análise.',
tags: ['C#', 'MySQL', 'Dapper', 'VTEX', '.NET'],
},
{
id: 'meu-primeiro-php',
title: 'Sistema de Notas em PHP e React Vite',
short: 'O sistema consome dados em JSON, permite o registro de múltiplas notas por aluno, conta com gráfico interativo e operações completas de CRUD.',
long: 'Projeto de consolidação de novos aprendizados em PHP com React Vite.',
tags: ['React Vite', 'PHP', 'API Rest', 'Tailwind', 'Full Stack'],
github: 'https://github.com/estrmrnd/meu-primeiro-php-sistema-de-notas',
video: '/video-php.mp4'
},
];