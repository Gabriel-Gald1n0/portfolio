export const translations = {
  EN: {
    // Header
    nav: {
      home: 'HOME',
      stats: 'STATS',
      quests: 'QUESTS',
      contact: 'CONTACT',
    },
    logo: 'DEV.HERO',
    
    // Hero Section
    hero: {
      level: 'LVL 99 DEVELOPER',
      title: 'WELCOME, ADVENTURER',
      description: 'I am a full-stack developer specializing in creating epic web experiences. My quest is to build legendary applications that solve real-world problems.',
      viewQuests: 'View Quests',
      hireMe: 'Hire Me',
    },
    
    // Skills Section
    skills: {
      title: '⚔️ INVENTORY ⚔️',
      subtitle: 'My Arsenal of Skills & Technologies',
      characterSheet: '📜 CHARACTER SHEET',
      class: 'CLASS:',
      classValue: 'Full-Stack Developer',
      specialization: 'SPECIALIZATION:',
      specializationValue: 'Frontend Magic',
      experience: 'EXPERIENCE:',
      experienceValue: '5+ Years',
      alignment: 'ALIGNMENT:',
      alignmentValue: 'Chaotic Good',
    },
    
    // About Me
    about: {
      title: '👤 ABOUT ME 👤',
      text1: 'A seasoned traveler of the code realms, seeking legendary bugs to vanquish and epic systems to build.',
      text2: 'Fluent in the ancient tongues of Java and Python, with a knack for weaving frontend magic that enchants users across the digital kingdoms.',
      text3: 'Forged in the fires of countless deploys, wielding the sacred frameworks of React and Node.js to craft experiences worthy of legend.',
    },
    
    // Projects Section
    projects: {
      title: '📋 QUEST LOG 📋',
      subtitle: 'Completed Missions & Adventures',
      viewQuest: 'View Quest',
    },
    
    // Contact Section
    contact: {
      title: '✉️ SEND MESSAGE ✉️',
      subtitle: 'Summon me for your next quest',
      nameLabel: 'Your Name:',
      namePlaceholder: 'Enter your name...',
      emailLabel: 'Your Email:',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Quest Details:',
      messagePlaceholder: 'Describe your project...',
      submit: 'Submit Quest',
    },
    
    // Footer
    footer: {
      title: '⚔️ JOIN MY GUILD ⚔️',
      copyright: '© 2026 DEV.HERO - All Rights Reserved | Built with ⚔️ and ✨',
      quote: '"May your code compile and your deploys succeed"',
    },
  },
  
  PT: {
    // Header
    nav: {
      home: 'INÍCIO',
      stats: 'STATUS',
      quests: 'MISSÕES',
      contact: 'CONTATO',
    },
    logo: 'DEV.HERO',
    
    // Hero Section
    hero: {
      level: 'NÍVEL 99 DESENVOLVEDOR',
      title: 'BEM-VINDO, AVENTUREIRO',
      description: 'Sou um desenvolvedor full-stack especializado em criar experiências web épicas. Minha missão é construir aplicações lendárias que resolvem problemas do mundo real.',
      viewQuests: 'Ver Missões',
      hireMe: 'Me Contrate',
    },
    
    // Skills Section
    skills: {
      title: '⚔️ INVENTÁRIO ⚔️',
      subtitle: 'Meu Arsenal de Habilidades e Tecnologias',
      characterSheet: '📜 FICHA DO PERSONAGEM',
      class: 'CLASSE:',
      classValue: 'Desenvolvedor Full-Stack',
      specialization: 'ESPECIALIZAÇÃO:',
      specializationValue: 'Magia Frontend',
      experience: 'EXPERIÊNCIA:',
      experienceValue: '5+ Anos',
      alignment: 'ALINHAMENTO:',
      alignmentValue: 'Caótico Bom',
    },
    
    // About Me
    about: {
      title: '👤 SOBRE MIM 👤',
      text1: 'Um viajante experiente dos reinos do código, buscando bugs lendários para vencer e sistemas épicos para construir.',
      text2: 'Fluente nas antigas línguas de Java e Python, com talento para tecer magia frontend que encanta usuários pelos reinos digitais.',
      text3: 'Forjado nas chamas de incontáveis deploys, empunhando os frameworks sagrados de React e Node.js para criar experiências dignas de lenda.',
    },
    
    // Projects Section
    projects: {
      title: '📋 REGISTRO DE MISSÕES 📋',
      subtitle: 'Missões e Aventuras Completas',
      viewQuest: 'Ver Missão',
    },
    
    // Contact Section
    contact: {
      title: '✉️ ENVIAR MENSAGEM ✉️',
      subtitle: 'Me invoque para sua próxima missão',
      nameLabel: 'Seu Nome:',
      namePlaceholder: 'Digite seu nome...',
      emailLabel: 'Seu Email:',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Detalhes da Missão:',
      messagePlaceholder: 'Descreva seu projeto...',
      submit: 'Enviar Missão',
    },
    
    // Footer
    footer: {
      title: '⚔️ JUNTE-SE À MINHA GUILDA ⚔️',
      copyright: '© 2026 DEV.HERO - Todos os Direitos Reservados | Feito com ⚔️ e ✨',
      quote: '"Que seu código compile e seus deploys tenham sucesso"',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations[Language];