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
    imageUrl: '/Monitor-POS2.webp', 
    projectUrl: 'https://youtu.be/taf_GHSvXzY',
  },
  {
    id: 2,
    title: {
      EN: 'Task Management App',
      PT: 'App de Gerenciamento de Tarefas',
    },
    description: {
      EN: 'Kanban-style board with drag-and-drop. Real-time updates with WebSocket.',
      PT: 'Quadro estilo Kanban com arrastar e soltar. Atualizações em tempo real com WebSocket.',
    },
    difficulty: {
      EN: 'Medium',
      PT: 'Médio',
    },
    reward: '300 XP',
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400',
  },
  {
    id: 3,
    title: {
      EN: 'Weather Dashboard',
      PT: 'Painel de Clima',
    },
    description: {
      EN: 'Real-time weather data with interactive maps and forecasts. API integration practice.',
      PT: 'Dados meteorológicos em tempo real com mapas interativos e previsões. Prática de integração de API.',
    },
    difficulty: {
      EN: 'Easy',
      PT: 'Fácil',
    },
    reward: '150 XP',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400',
  },
];
