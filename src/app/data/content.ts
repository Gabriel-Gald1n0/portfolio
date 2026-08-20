export interface Skill {
  name: string;
  icon: string;
  level: number;
  type: string;
}

export interface Project {
  id: number;
  title: {
    EN: string;
    PT: string;
  };
  description: {
    EN: string;
    PT: string;
  };
  difficulty: {
    EN: string;
    PT: string;
  };
  reward: string;
  imageUrl: string;
  projectUrl?: string;
}

export const frontendSkills: Skill[] = [
  { name: 'React Native', icon: '🏹', level: 18, type: 'weapon' },
  { name: 'React', icon: '⚔️', level: 18, type: 'weapon' },
  { name: 'Kotlin', icon: '🪓', level: 17, type: 'weapon' },
  { name: 'Angular', icon: '🛡️', level: 16, type: 'armor' },
  { name: 'JavaScript', icon: '📜', level: 20, type: 'scroll' },
  { name: 'TypeScript', icon: '⛓️', level: 16, type: 'armor' },
];

export const backendSkills: Skill[] = [
  { name: '.NET / C#', icon: '🔨', level: 17, type: 'weapon' },
  { name: 'Node.js', icon: '🧪', level: 15, type: 'potion' },
  { name: 'Django', icon: '🔥', level: 14, type: 'spell' },
  { name: 'PostgreSQL', icon: '⚱️', level: 15, type: 'gem' },
  { name: 'SQL', icon: '💎', level: 14, type: 'gem' },
];

export const toolSkills: Skill[] = [
  { name: 'Git', icon: '🗝️', level: 19, type: 'item' },
  { name: 'Docker', icon: '🐳', level: 14, type: 'item' }, 
  { name: 'Scrum', icon: '🗺️', level: 18, type: 'map' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: {
      EN: 'Monitor POS - Terminal Diagnostics',
      PT: 'Monitor POS - Diagnóstico de Terminal',
    },
    description: {
      EN: 'Native Android app (Kotlin) for payment terminals. Monitors hardware health (battery, printer, network) using low-level SDK integrations.',
      PT: 'App Android nativo (Kotlin) para terminais de pagamento. Monitora a saúde do hardware (bateria, impressora, rede) via integração de baixo nível com SDKs.',
    },
    difficulty: {
      EN: 'Hard',
      PT: 'Difícil',
    },
    reward: '1500 XP',
    imageUrl: '/Monitor-POS.webp', 
    projectUrl: 'https://youtu.be/taf_GHSvXzY',
  },
  {
    id: 2,
    title: {
      EN: 'Insane App',
      PT: 'Insane App',
    },
    description: {
      EN: 'Mobile social network designed to connect people who train in the same region, promoting interaction and training partnerships.',
      PT: 'Rede social mobile projetada para conectar pessoas que treinam na mesma região, promovendo interação e parcerias de treino.',
    },
    difficulty: {
      EN: 'Hard',
      PT: 'Difícil',
    },
    reward: '2000 XP',
    imageUrl: '/insane.jpg',
  },
  {
    id: 3,
    title: {
      EN: 'PROEX - INSTITUTIONAL PORTAL',
      PT: 'PROEX - PORTAL INSTITUCIONAL',
    },
    description: {
      EN: 'Institutional web platform aimed at managing and disseminating university extension programs. Focus on scalable architecture, data flow organization, and optimizing the navigation experience for the academic community.',
      PT: 'Plataforma web institucional voltada para a gestão e divulgação de programas de extensão universitária. Foco em arquitetura escalável, organização de fluxos de dados e otimização da experiência de navegação para a comunidade acadêmica.',
    },
    difficulty: {
      EN: 'Hard',
      PT: 'Difícil',
    },
    reward: '1500 XP',
    imageUrl: '/proexLogo.jpeg',
    projectUrl: 'https://proex.uesc.br',
  },
  {
    id: 4,
    title: {
      EN: 'UPT - UNIVERSITY FOR ALL',
      PT: 'UPT - UNIVERSIDADE PARA TODOS',
    },
    description: {
      EN: 'Portal and support system for the social pre-university course. Development of dynamic and functional interfaces aimed at efficient communication with students and organization of pedagogical content.',
      PT: 'Portal e sistema de apoio ao cursinho pré-vestibular social. Desenvolvimento de interfaces dinâmicas e funcionais voltadas para a comunicação eficiente com os estudantes e organização de conteúdos pedagógicos.',
    },
    difficulty: {
      EN: 'Medium',
      PT: 'Médio',
    },
    reward: '850 XP',
    imageUrl: '/banner_upt.webp',
    projectUrl: 'https://www.uesc.br/universidadeparatodos/',
  },
  {
    id: 5,
    title: {
      EN: 'AGIR - MUNICIPAL PUBLIC MANAGEMENT',
      PT: 'AGIR - GESTÃO PÚBLICA MUNICIPAL',
    },
    description: {
      EN: 'Management and institutional support platform aimed at the continuous training of municipal public managers and articulation with AMURC, integrating extension, teaching, research, and innovation actions.',
      PT: 'Plataforma de apoio gerencial e institucional voltada para a formação continuada de gestores públicos municipais e articulação com a AMURC, integrando ações de extensão, ensino, pesquisa e inovação.',
    },
    difficulty: {
      EN: 'Medium',
      PT: 'Médio',
    },
    reward: '850 XP',
    imageUrl: '/banner_agir.webp',
    projectUrl: 'https://www.uesc.br/projetos/agir/',
  },
];
