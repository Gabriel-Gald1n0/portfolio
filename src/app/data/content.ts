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
}

export const skills: Skill[] = [
  { name: 'React Native', icon: '🏹', level: 18, type: 'weapon' },
  { name: 'Kotlin', icon: '🪓', level: 17, type: 'weapon' },
  { name: 'React', icon: '⚔️', level: 18, type: 'weapon' },
  { name: 'Angular', icon: '🛡️', level: 16, type: 'armor' },
  { name: '.NET / C#', icon: '🔨', level: 17, type: 'weapon' },
  { name: 'Node.js', icon: '🧪', level: 15, type: 'potion' },
  { name: 'Django', icon: '🔥', level: 14, type: 'spell' },
  { name: 'JavaScript', icon: '📜', level: 20, type: 'scroll' },
  { name: 'TypeScript', icon: '⛓️', level: 16, type: 'armor' },
  { name: 'PostgreSQL', icon: '⚱️', level: 15, type: 'gem' },
  { name: 'SQL', icon: '💎', level: 14, type: 'gem' },
  { name: 'Git', icon: '🗝️', level: 19, type: 'item' },
  { name: 'Scrum', icon: '🗺️', level: 18, type: 'map' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: {
      EN: 'E-Commerce Platform',
      PT: 'Plataforma E-Commerce',
    },
    description: {
      EN: 'A fully functional shopping cart with payment integration. Built with React and Stripe API.',
      PT: 'Um carrinho de compras totalmente funcional com integração de pagamento. Feito com React e API Stripe.',
    },
    difficulty: {
      EN: 'Hard',
      PT: 'Difícil',
    },
    reward: '500 XP',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
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
