// translations.js - Système de traduction automatique

const translations = {
  fr: {
    // Niveaux de compétence
    levels: {
      "5": "Notions complètes",
      "4": "Autonomie",
      "3": "Autonomie partielle",
      "2": "Notions de base",
      "1": "En progrès"
    },

    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      competencesPro: "Compétences Pro",
      education: "Formation",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      eyebrow: "ENSIM • Ingénierie Logicielle",
      greeting: "Bonjour, je suis",
      role: "Étudiant Ingénieur Logiciel",
      subtitle: "Étudiant en cycle ingénieur à l'ENSIM et alternant chez Covéa (MMA), passionné par le développement logiciel, les architectures backend et les technologies Cloud.",
      emailBtn: "Email"
    },
    
    // About Section
    about: {
      title: "À propos",
      subtitle: "Pour mieux comprendre mon parcours et ce qui me motive.",
      whoAmI: "Qui suis-je ?",
      intro: "Je suis étudiant en 2ème année de cycle ingénieur à l'ENSIM (Université du Mans), spécialisation informatique, et j'effectue mon alternance chez Covéa (MMA).",
      passion: "J'aime concevoir des solutions fiables et maintenables, que ce soit en <strong>Java</strong>, <strong>Node.js</strong>, <strong>Angular</strong>, <strong>JavaScript</strong> ou via des architectures orientées services. Mon expérience en entreprise m'a permis de développer des <strong>soft skills</strong> solides : communication, gestion de priorités, professionnalisme, et travail en équipe.",
      interests: "Je m'intéresse particulièrement au <strong>Cloud</strong>, au <strong>DevOps</strong> et aux bonnes pratiques d'architecture logicielle, tout en consolidant mes bases en réseaux, systèmes et développement back-end."
    },
    
    // Skills Section
    skills: {
      title: "Compétences Techniques",
      subtitle: "Une vue d'ensemble de mes compétences techniques.",
      programming: "Langages de Programmation",
      webDev: "Développement Web",
      backend: "Backend & Bases de données",
      devops: "DevOps & Outils",
      design: "Design & Modélisation",
      embedded: "Systèmes Embarqués"
    },
    
    // Projects Section
    projects: {
      title: "Projets",
      subtitle: "Une sélection de projets académiques et personnels.",
      viewCode: "Code GitHub →",
      
      project1: {
        title: "Client / Serveur Linux (C)",
        desc: "Serveur TCP multi-clients et client en C sous Linux, utilisé avec une carte Raspberry Pi pour découvrir les sockets et la communication réseau bas niveau."
      },
      project2: {
        title: "API REST Rhum (Node.js + MongoDB)",
        desc: "Backend complet pour gérer des Rhums, Recettes et Utilisateurs, architecture MVC avec Express, authentification JWT et tests Postman."
      },
      project3: {
        title: "Gestionnaire de Tâches (Angular + Spring)",
        desc: "Application de gestion de tâches réalisée avec Angular et une API Spring Boot (JPA/H2), comprenant filtres, statuts et authentification basique."
      },
      project4: {
        title: "Jeu Pacman (Java)",
        desc: "Implémentation d'un mini-jeu Pacman en Java, mettant en pratique la POO, la gestion d'événements et l'interface graphique."
      },
      project5: {
        title: "Traitement du signal avec Arduino",
        desc: "Projet de 2A combinant capteurs, traitement de signal et restitution, pour découvrir la frontière entre software et hardware."
      }
    },
    
    // Experience Section
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours en entreprise et dans la vie associative.",
      
      job1: {
        title: "Apprenti Ingénieur — Covéa (MMA), SIGMA IARD",
        location: "Le Mans, France",
        tasks: [
          "Paramétrage des produits Assurance IARD.",
          "Analyse et gestion d'incidents de production via <strong>ServiceNow</strong>.",
          "Optimisation de l'environnement applicatif.",
          "Rédaction des spécifications et traitement des demandes d'évolution des pilotes métier (DEMTRA) via <strong>Jira</strong>.",
          "Élaboration et exécution des <strong>plans de test</strong> post développement.",
          "Suivi des demandes : respect des budgets, priorisation et délais de livraison.",
          "Contribution au développement d'outils internes en <strong>Smalltalk</strong>.",
          "Interventions sur la base de données (mises à jour produits maintenance)."
        ]
      },
      job2: {
        title: "Agent au service universitaire — SUIO-IP",
        location: "Le Mans, France",
        tasks: [
          "Aide logistique lors de 6 événements.",
          "Guide lors des journées portes ouvertes de plus de 100 visiteurs."
        ]
      },
      job3: {
        title: "Animateur à l'association Miroir pour l'enfant autiste",
        location: "Maroc",
        tasks: [
          "Orientation de 49 personnes.",
          "Encadrement de diverses activités."
        ]
      }
    },

    // Compétences Professionnelles Section
    competencesPro: {
      title: "Compétences Professionnelles",
      subtitle: "Compétences développées lors de mon alternance chez Covéa (MMA)",

      comp1: {
        title: "Organisation et gestion du travail",
        badge: "Autonome",
        situationsTitle: "Situations professionnelles mobilisées",
        situations: [
          "Participation au processus de Terme et au TAB (Terme à Blanc)",
          "Gestion simultanée de : incidents Run, demandes de travaux (DEMTRA), assistances gestionnaire produit (ASSGP)",
          "Participation aux daily terme et suivi d'avancement"
        ],
        competencesTitle: "Compétences acquises",
        competences: [
          "Hiérarchisation des priorités",
          "Respect des échéances",
          "Travail en équipe"
        ],
        evaluation: " Durant ces travaux, j'ai été en mesure de gérer mes activités de manière autonome, en respectant les priorités définies (Run > Terme > DEMTRA) et les délais imposés. Mon travail s'est déroulé avec un encadrement ponctuel de ma tutrice, principalement pour la validation des décisions et des livrables."
      },

      comp2: {
        title: "Démarche structurée d'analyse",
        badge: "Autonome",
        situationsTitle: "Situations professionnelles mobilisées",
        situations: [
          "Analyse de demandes de travaux via Jira DEMTRA",
          "Analyse et traitement d'incidents Run via ServiceNow",
          "Reproduction d'erreurs en environnement de test",
          "Rédaction de spécifications et plans de test"
        ],
        competencesTitle: "Compétences acquises",
        competences: [
          "Analyse fonctionnelle",
          "Investigation méthodique",
          "Proposition de solutions"
        ],
        evaluation: " J'ai été capable de conduire l'analyse complète des demandes et des incidents de manière autonome, depuis la compréhension du besoin jusqu'aux spécifications et développements. L'intervention de ma tutrice s'est principalement faite pour la validation finale des choix effectués et des livrables produits."
      },

      comp3: {
        title: "Mobilisation des ressources",
        badge: "En progression",
        situationsTitle: "Situations professionnelles mobilisées",
        situations: [
          "Utilisation de Confluence (documentation, bonnes pratiques, normes)",
          "Échanges via Teams",
          "Sollicitation ciblée de collègues experts",
          "Exploitation des guides internes (DEP, normes de nommage)"
        ],
        competencesTitle: "Compétences acquises",
        competences: [
          "Recherche d'information",
          "Capitalisation sur l'existant",
          "Communication professionnelle"
        ],
        evaluation: " Un plan de montée en compétences est en cours afin de me familiariser davantage avec les demandes émanant des autres services. Un canal Teams dédié à l'alternance me permet d'exprimer ma compréhension des sujets confiés et de solliciter, si nécessaire, des éclaircissements."
      },

      comp4: {
        title: "Développement et conception d'outils",
        badge: "En progression",
        situationsTitle: "Situations professionnelles mobilisées",
        situations: [
          "Navigation dans les packages, classes et méthodes (architecture du code)",
          "Analyse de code existant pour identifier les points d'intervention",
          "Application des normes de qualité et de lisibilité",
          "Traitement de demandes ASSGP (corrections fonctionnelles, ergonomiques, accessibilité)",
          "Amélioration de l'IHM (libellés, boutons, tableaux)",
          "Conception d'un nouvel outil : cahier des charges, maquettes Figma, modélisation UML"
        ],
        competencesTitle: "Compétences acquises",
        competences: [
          "Lecture de code",
          "Smalltalk",
          "Conception fonctionnelle",
          "UML / Figma",
          "Accessibilité"
        ],
        evaluation: " Je ne dispose pas encore d'une autonomie suffisante sur certaines tâches de développement en Smalltalk, notamment lors d'interventions sur des portions de code complexes. Des collègues expérimentés m'apportent des explications détaillées, ce qui me permet de développer progressivement les bons réflexes. Ces accompagnements s'inscrivent dans mon plan de montée en compétences."
      }
    },

    // Education Section
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique.",
      
      degree1: {
        title: "Cycle Ingénieur Informatique",
        school: "École Nationale Supérieure d'Ingénieurs du Mans — Université du Mans",
        dates: "2024 - 2027",
        intro: "Formation complète en informatique et ingénierie, développant de solides compétences en résolution de problèmes et pensée analytique à travers :",
        courses: [
          "Programmation orientée objet et concurrente",
          "Mathématiques pour ingénieurs",
          "Traitement du signal",
          "Développement back-end et front-end",
          "Électronique numérique et logique combinatoire",
          "Conception d'interfaces utilisateur",
          "Fondamentaux de gestion d'entreprise",
          "Architecture des réseaux et systèmes d'exploitation"
        ]
      },
      degree2: {
        title: "Cycle préparatoire / Licence scientifique",
        school: "ENSIM / Université",
        dates: "2022 - 2024",
        desc: "Bases solides en mathématiques, physique et informatique, avec premiers projets en programmation et systèmes embarqués."
      },
      
      certifications: "Certifications (visées / en cours)",
      softSkills: "Soft Skills",
      softSkillsList: {
        0: "Communication",
        1: "Travail en équipe",
        2: "Organisation",
        3: "Adaptabilité",
        4: "Autonomie"
      }
    },
    
    // Contact Section
    contact: {
      title: "Me Contacter",
      subtitle: "N'hésitez pas à me contacter pour un échange, une opportunité ou un projet.",
      contactInfo: "Informations de Contact",
      email: "Email :",
      location: "Localisation :",
      locationValue: "France",
      connect: "Me Suivre"
    },
    
    // Footer
    footer: {
      rights: "Tous droits réservés"
    }
  },
  
  en: {
    // Skill levels
    levels: {
      "5": "Complete mastery",
      "4": "Proficiency",
      "3": "Intermediate",
      "2": "Basic knowledge",
      "1": "In progress"
    },

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      competencesPro: "Professional Skills",
      education: "Education",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      eyebrow: "ENSIM • Software Engineering",
      greeting: "Hi, I'm",
      role: "Software Engineering Student",
      subtitle: "Engineering student at ENSIM and apprentice at Covéa (MMA), passionate about software development, backend architectures and Cloud technologies.",
      emailBtn: "Email"
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "To better understand my background and what drives me.",
      whoAmI: "Who am I?",
      intro: "I am a second-year engineering student at ENSIM (University of Le Mans), specializing in computer science, and I am doing my apprenticeship at Covéa (MMA).",
      passion: "I enjoy designing reliable and maintainable solutions, whether in <strong>Java</strong>, <strong>Node.js</strong>, <strong>Angular</strong>, <strong>JavaScript</strong> or through service-oriented architectures. My professional experience has allowed me to develop strong <strong>soft skills</strong>: communication, priority management, professionalism, and teamwork.",
      interests: "I am particularly interested in <strong>Cloud</strong>, <strong>DevOps</strong> and software architecture best practices, while strengthening my foundations in networks, systems and back-end development."
    },
    
    // Skills Section
    skills: {
      title: "Technical Skills",
      subtitle: "An overview of my technical skills.",
      programming: "Programming Languages",
      webDev: "Web Development",
      backend: "Backend & Databases",
      devops: "DevOps & Tools",
      design: "Design & Modelling",
      embedded: "Embedded & Systems"
    },
    
    // Projects Section
    projects: {
      title: "Projects",
      subtitle: "A selection of academic and personal projects.",
      viewCode: "View Code →",
      
      project1: {
        title: "Client / Server Linux (C)",
        desc: "Multi-client TCP server and client in C on Linux, used with a Raspberry Pi board to explore sockets and low-level network communication."
      },
      project2: {
        title: "REST API Rhum (Node.js + MongoDB)",
        desc: "Complete backend to manage Rums, Recipes and Users, MVC architecture with Express, JWT authentication and Postman tests."
      },
      project3: {
        title: "Task Manager (Angular + Spring)",
        desc: "Task management application built with Angular and a Spring Boot API (JPA/H2), including filters, statuses and basic authentication."
      },
      project4: {
        title: "Pacman Game (Java)",
        desc: "Implementation of a mini Pacman game in Java, applying OOP concepts, event handling and graphical interface."
      },
      project5: {
        title: "Signal Processing with Arduino",
        desc: "Second-year project combining sensors, signal processing and output, to explore the boundary between software and hardware."
      }
    },
    
    // Experience Section
    experience: {
      title: "Professional Experience",
      subtitle: "My professional and associative experience.",
      
      job1: {
        title: "Engineering Apprentice — Covéa (MMA), SIGMA IARD",
        location: "Le Mans, France",
        tasks: [
          "Configuration of Property & Casualty insurance products.",
          "Analysis and management of production incidents via <strong>ServiceNow</strong>.",
          "Optimization of the application environment.",
          "Writing specifications and handling change requests from business stakeholders (DEMTRA) via <strong>Jira</strong>.",
          "Development and execution of post-development <strong>test plans</strong>.",
          "Request tracking: budget compliance, prioritization and delivery deadlines.",
          "Contribution to the development of internal tools in <strong>Smalltalk</strong>.",
          "Database interventions (product updates and maintenance)."
        ]
      },
      job2: {
        title: "University Service Agent — SUIO-IP",
        location: "Le Mans, France",
        tasks: [
          "Logistical support during 6 events.",
          "Guide during open days for over 100 visitors."
        ]
      },
      job3: {
        title: "Activity Leader at Miroir Association for Autistic Children",
        location: "Morocco",
        tasks: [
          "Guidance and supervision of 49 individuals.",
          "Facilitation of various activities."
        ]
      }
    },

    // Professional Skills Section
    competencesPro: {
      title: "Professional Skills",
      subtitle: "Skills developed during my apprenticeship at Covéa (MMA)",

      comp1: {
        title: "Work organization and management",
        badge: "Autonomous",
        situationsTitle: "Professional situations mobilized",
        situations: [
          "Participation in the Term process and TAB (Blank Term)",
          "Simultaneous management of: Run incidents, work requests (DEMTRA), product manager assistance (ASSGP)",
          "Participation in daily terms and progress monitoring"
        ],
        competencesTitle: "Skills acquired",
        competences: [
          "Priority setting",
          "Deadline management",
          "Teamwork"
        ],
        evaluation: "During this work, I was able to manage my activities autonomously, respecting defined priorities (Run > Term > DEMTRA) and imposed deadlines. My work was carried out with occasional supervision from my tutor, mainly for validation of decisions and deliverables."
      },

      comp2: {
        title: "Structured analysis approach",
        badge: "Autonomous",
        situationsTitle: "Professional situations mobilized",
        situations: [
          "Analysis of work requests via Jira DEMTRA",
          "Analysis and processing of Run incidents via ServiceNow",
          "Error reproduction in test environment",
          "Writing specifications and test plans"
        ],
        competencesTitle: "Skills acquired",
        competences: [
          "Functional analysis",
          "Methodical investigation",
          "Solution proposal"
        ],
        evaluation: "I was able to conduct complete analysis of requests and incidents autonomously, from understanding the need to specifications and developments. My tutor's intervention was mainly for final validation of choices made and deliverables produced."
      },

      comp3: {
        title: "Resource mobilization",
        badge: "In progress",
        situationsTitle: "Professional situations mobilized",
        situations: [
          "Use of Confluence (documentation, best practices, standards)",
          "Exchanges via Teams",
          "Targeted consultation with expert colleagues",
          "Exploitation of internal guides (DEP, naming standards)"
        ],
        competencesTitle: "Skills acquired",
        competences: [
          "Information research",
          "Knowledge capitalization",
          "Professional communication"
        ],
        evaluation: "A skills development plan is underway to familiarize myself further with requests from other services. A Teams channel dedicated to apprenticeship allows me to express my understanding of assigned topics and request clarifications if needed."
      },

      comp4: {
        title: "Tool development and design",
        badge: "In progress",
        situationsTitle: "Professional situations mobilized",
        situations: [
          "Navigation through packages, classes and methods (code architecture)",
          "Analysis of existing code to identify intervention points",
          "Application of quality and readability standards",
          "Processing ASSGP requests (functional, ergonomic, accessibility corrections)",
          "UI improvements (labels, buttons, tables)",
          "Design of a new tool: specifications, Figma mockups, UML modeling"
        ],
        competencesTitle: "Skills acquired",
        competences: [
          "Code reading",
          "Smalltalk",
          "Functional design",
          "UML / Figma",
          "Accessibility"
        ],
        evaluation: "I do not yet have sufficient autonomy on certain Smalltalk development tasks, especially when intervening on complex code portions. Experienced colleagues provide detailed explanations, allowing me to gradually develop good reflexes. These supports are part of my skills development plan."
      }
    },

    // Education Section
    education: {
      title: "Education",
      subtitle: "My academic background.",
      
      degree1: {
        title: "Computer Engineering Program",
        school: "École Nationale Supérieure d'Ingénieurs du Mans — Université du Mans",
        dates: "2024 - 2027",
        intro: "Comprehensive training in computer science and engineering, developing strong problem-solving and analytical thinking skills through:",
        courses: [
          "Object-oriented and concurrent programming",
          "Engineering mathematics",
          "Signal processing",
          "Back-end and front-end development",
          "Digital electronics and combinatorial logic",
          "User interface design",
          "Business management fundamentals",
          "Network architecture and operating systems"
        ]
      },
      degree2: {
        title: "Integrated Preparatory Cycle / Bachelor's Degree in Science",
        school: "ENSIM / University",
        dates: "2022 - 2024",
        desc: "Strong foundation in mathematics, physics and computer science, with first projects in programming and embedded systems."
      },
      
      certifications: "Certifications (targeted / in progress)",
      softSkills: "Soft Skills",
      softSkillsList: {
        0: "Communication",
        1: "Teamwork",
        2: "Organization",
        3: "Adaptability",
        4: "Autonomy"
      }
    },
    
    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Feel free to contact me for a discussion, an opportunity or a project.",
      contactInfo: "Contact Information",
      email: "Email:",
      location: "Location:",
      locationValue: "France",
      connect: "Connect With Me"
    },
    
    // Footer
    footer: {
      rights: "All Rights Reserved"
    }
  }
};

// Fonction pour obtenir une valeur imbriquée depuis un objet avec notation point
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Fonction pour détecter la langue du navigateur
function detectLanguage() {
  // Vérifier si une langue est déjà sauvegardée
  const saved = localStorage.getItem('preferredLanguage');
  if (saved && (saved === 'fr' || saved === 'en')) {
    return saved;
  }
  
  // Sinon, détecter depuis le navigateur
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

// Fonction pour appliquer les traductions
function applyTranslations(lang) {
  const t = translations[lang];
  
  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;
  
  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedValue(t, key);
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Traduire tous les éléments avec data-i18n-html (permet le HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    const translation = getNestedValue(t, key);
    if (translation) {
      element.innerHTML = translation;
    }
  });
  
  // Traduire les listes
  document.querySelectorAll('[data-i18n-list]').forEach(element => {
    const key = element.getAttribute('data-i18n-list');
    const translations = getNestedValue(t, key);
    if (Array.isArray(translations)) {
      element.innerHTML = translations.map(item => `<li>${item}</li>`).join('');
    }
  });
  
  // Mettre à jour le footer avec l'année
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    footerText.innerHTML = `© ${year} Mohammed Mansouri — ${t.footer.rights}`;
  }
}

// Créer un sélecteur de langue
function createLanguageSelector(currentLang) {
  const selector = document.createElement('div');
  selector.className = 'language-selector';
  selector.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 20px;
    padding: 5px;
    box-shadow: var(--shadow-lg);
    display: flex;
    gap: 5px;
  `;
  
  const langs = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: '🇬🇧', name: 'English' }
  ];
  
  langs.forEach(({ code, flag, name }) => {
    const btn = document.createElement('button');
    btn.textContent = flag;
    btn.title = name;
    btn.className = 'lang-btn';
    
    // Fonction pour mettre à jour le style
    const updateStyle = () => {
      if (code === currentLang) {
        btn.style.cssText = `
          background: var(--accent);
          border: 2px solid var(--accent);
          border-radius: 15px;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        `;
      } else {
        btn.style.cssText = `
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 15px;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: none;
        `;
      }
    };
    
    updateStyle();
    
    btn.addEventListener('click', () => {
      applyTranslations(code);
      currentLang = code;
      // Mettre à jour tous les boutons
      selector.querySelectorAll('.lang-btn').forEach((b, idx) => {
        const langCode = langs[idx].code;
        if (langCode === code) {
          b.style.background = 'var(--accent)';
          b.style.border = '2px solid var(--accent)';
          b.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.3)';
        } else {
          b.style.background = 'var(--bg-secondary)';
          b.style.border = '2px solid var(--border-color)';
          b.style.boxShadow = 'none';
        }
      });
      // Sauvegarder la préférence
      localStorage.setItem('preferredLanguage', code);
    });
    
    btn.addEventListener('mouseenter', () => {
      if (code !== currentLang) {
        btn.style.background = 'var(--accent-light)';
        btn.style.borderColor = 'var(--accent)';
        btn.style.transform = 'scale(1.05)';
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      if (code !== currentLang) {
        btn.style.background = 'var(--bg-secondary)';
        btn.style.borderColor = 'var(--border-color)';
        btn.style.transform = 'scale(1)';
      }
    });
    
    selector.appendChild(btn);
  });
  
  document.body.appendChild(selector);
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  applyTranslations(lang);
  createLanguageSelector(lang);
});