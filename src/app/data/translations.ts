export const translations = {
  EN: {
    // Header
    nav: {
      home: 'HOME',
      stats: 'ABOUT',
      quests: 'PROJECTS',
      contact: 'CONTACT',
    },
    logo: 'DEV. GABRIEL GALDINO',
    
    // Hero Section
    hero: {
      level: 'LVL 99 DEVELOPER',
      title: 'WELCOME, ADVENTURER',
      description: 'Computer Science Student and FullStack Developer. Building epic cross-platform experiences using React Native, and .NET. Ready for any quest.',
      viewQuests: 'View Projects',
      hireMe: 'Hire Me',
      curriculum: 'Curriculum',
    },
    
    // Skills Section
    skills: {
      title: '⚔️ INVENTORY ⚔️',
      subtitle: 'My Arsenal of Skills & Technologies',
      characterSheet: '📜 CHARACTER SHEET',
      class: 'CLASS:',
      classValue: 'Full-Stack Developer',
      specialization: 'SPECIALIZATION:',
      specializationValue: 'Frontend & Backend',
      experience: 'EXPERIENCE:',
      experienceValue: '3+ Years',
      alignment: 'ALIGNMENT:',
      alignmentValue: 'Agile & Adaptive',
    },
    
    // About Me
    about: {
      title: '👤 ABOUT ME 👤',
      text1: 'My journey started in 2018 at IFBA Jequié as an IT Technician. There, I built a solid foundation not only in programming but also in hardware, networks, and technical support.',
      text2: 'Currently, I am a Computer Science student at UESC and a former Software Resident at CEPEDI. I combine academic theory with daily practice in real-world projects, solving complex challenges.',
      text3: 'As a versatile developer (Mobile & Web) and Scrum Master, I specialize in Kotlin, React Native, .NET, and Node.js. I value agile methodology and teamwork to deliver high-quality software.',
    },
    
    // Projects Section
    projects: {
      title: '📋 Projects LOG 📋',
      subtitle: 'Completed Missions & Adventures',
      viewQuest: 'View Quest',
    },
    
    // Contact Section
    contact: {
      title: '✉️ SEND MESSAGE ✉️',
      subtitle: 'Summon me for your next project',
      nameLabel: 'Your Name:',
      namePlaceholder: 'Enter your name...',
      emailLabel: 'Your Email:',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Project Details:',
      messagePlaceholder: 'Describe your project...',
      submit: 'Submit Proposal',
    },
    
    // Footer
    footer: {
      title: '⚔️ JOIN MY GUILD ⚔️',
      copyright: '© 2026 Gabriel Galdino - All Rights Reserved | Built with ❤️ and ✨',
      quote: '"May your code compile and your deploys succeed"',
    },
  },
  
  PT: {
    // Header
    nav: {
      home: 'INÍCIO',
      stats: 'SOBRE',
      quests: 'PROJETOS',
      contact: 'CONTATO',
    },
    logo: 'DEV. GABRIEL GALDINO',
    
    // Hero Section
    hero: {
      level: 'NÍVEL 99 DESENVOLVEDOR',
      title: 'BEM-VINDO, AVENTUREIRO',
      description: 'Estudante de Ciência da Computação e Desenvolvedor FullStack. Construo experiências multiplataforma épicas usando React Native e .NET. Pronto para qualquer missão.',
      viewQuests: 'Ver Projetos',
      hireMe: 'Me Contrate',
      curriculum: 'Curriculo',
    },
    
    // Skills Section
    skills: {
      title: '⚔️ INVENTÁRIO ⚔️',
      subtitle: 'Meu Arsenal de Habilidades e Tecnologias',
      characterSheet: '📜 FICHA DO PERSONAGEM',
      class: 'CLASSE:',
      classValue: 'Desenvolvedor Full-Stack',
      specialization: 'ESPECIALIZAÇÃO:',
      specializationValue: 'Frontend & Backend',
      experience: 'EXPERIÊNCIA:',
      experienceValue: '3+ Anos',
      alignment: 'ALINHAMENTO:',
      alignmentValue: 'Ágil & Adaptável',
    },
    
    // About Me
    about: {
      title: '👤 SOBRE MIM 👤',
      text1: 'Minha trajetória começou em 2018 no IFBA Jequié, como Técnico em Informática. Lá, construí uma base sólida não apenas em programação, mas também em hardware, redes e suporte técnico.',
      text2: 'Atualmente, curso Ciência da Computação na UESC e sou ex-Residente de Software no CEPEDI. Combino a teoria acadêmica com a prática diária em projetos reais, resolvendo desafios complexos.',
      text3: 'Como desenvolvedor versátil (Mobile & Web) e Scrum Master, sou especialista em Kotlin, React Native, .NET e Node.js. Valorizo a metodologia ágil e o trabalho em equipe para entregar software de alta qualidade.',
    },
    
    // Projects Section
    projects: {
      title: '📋 REGISTRO DE PROJETOS 📋',
      subtitle: 'Missões e Aventuras Completas',
      viewQuest: 'Ver Missão',
    },
    
    // Contact Section
    contact: {
      title: '✉️ ENVIAR MENSAGEM ✉️',
      subtitle: 'Me Chame para seu próximo projeto',
      nameLabel: 'Seu Nome:',
      namePlaceholder: 'Digite seu nome...',
      emailLabel: 'Seu Email:',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Detalhes do Projeto:',
      messagePlaceholder: 'Descreva seu projeto...',
      submit: 'Enviar Proposta',
    },
    
    // Footer
    footer: {
      title: '⚔️ JUNTE-SE À MINHA GUILDA ⚔️',
      copyright: '© 2026 Gabriel Galdino - Todos os Direitos Reservados | Feito com ❤️ e ✨',
      quote: '"Que seu código compile e seus deploys tenham sucesso"',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations[Language];