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
      education: "Formation",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      eyebrow: "ENSIM 2027 • Alternance de 3 ans • Maroc & France",
      greeting: "Bonjour, je suis",
      role: "Élève ingénieur informatique — Gestion de projet, IA & DevOps",
      subtitle: "Profil polyvalent, à la fois fonctionnel et technique : analyse métier, développement et support de production chez Covéa / MMA, et un projet d'IA mené de bout en bout jusqu'en production au port de Casablanca (Marsa Maroc).",
      emailBtn: "Me contacter",
      s8Btn: "Portfolio S8",
      panel: {
        title: "Compétences clés",
        pmLabel: "Besoin, spécifications, recette, risques",
        aiLabel: "Vision par ordinateur, intégration de LLM",
        cloudTitle: "Cloud & DevOps",
        cloudLabel: "CI/CD, conteneurs, production",
        more: "Toutes les compétences"
      }
    },

    // About Section
    about: {
      title: "À propos",
      subtitle: "Pour mieux comprendre mon parcours et ce qui me motive.",
      whoAmI: "Qui suis-je ?",
      intro: "Je suis élève ingénieur en informatique à l'ENSIM (Le Mans), en apprentissage, diplômé en 2027. Depuis 2024, j'allie chez Covéa / MMA analyse métier, développement et support de production dans l'assurance, et je pilote un projet d'automatisation.",
      passion: "Chez <strong>Marsa Maroc</strong>, j'ai mené de bout en bout un projet d'<strong>IA</strong> mis en production au port de Casablanca : vision par ordinateur (<strong>YOLO11</strong>, <strong>EasyOCR</strong>), API <strong>Flask</strong>, déploiement continu avec <strong>Docker</strong> et <strong>GitHub Actions</strong>. J'aime faire le lien entre les équipes métier et la technique : recueillir le besoin, spécifier, développer, puis livrer.",
      interests: "Je souhaite rejoindre une <strong>entreprise marocaine en transformation digitale</strong>, en <strong>CDI dès septembre 2027</strong>. Je me prépare actuellement à la certification <strong>AWS Solutions Architect – Associate</strong>.",
      extra: "<strong>Langues :</strong> arabe (langue maternelle), français (courant), anglais (B2, Linguaskill), espagnol (A2). <strong>Centres d'intérêt :</strong> golf, musique, voyages et découverte d'autres cultures."
    },
    
    // Skills Section
    skills: {
      title: "Compétences Techniques",
      subtitle: "Une vue d'ensemble de mes compétences techniques.",
      projectMgmt: "Gestion de projet SI",
      ai: "IA & Data",
      programming: "Langages de Programmation",
      webDev: "Développement Web",
      backend: "Backend & Bases de données",
      devops: "Cloud, DevOps & Production",
      design: "Design & Modélisation",
      embedded: "Systèmes Embarqués"
    },

    // Projects Section
    projects: {
      title: "Projets",
      subtitle: "Une sélection de projets : IA en production, full-stack, deep learning, automatisation et cloud.",
      viewCode: "Code GitHub →",
      private: "Dépôt privé",

      jobflow: {
        title: "JobFlow AI — self-hosted",
        desc: "Application personnelle pour centraliser et suivre une recherche d'emploi, menée comme un projet professionnel : Spec-Driven Development, TDD, décisions d'architecture documentées, CI/CD GitHub Actions et auto-hébergement sur Raspberry Pi (Docker Compose, Caddy, accès privé Tailscale)."
      },
      container: {
        title: "SmartContainer_AI — Marsa Maroc",
        desc: "Plateforme IA en production au port de Casablanca : lecture automatique des codes conteneurs (ISO 6346) par YOLO11 + EasyOCR, enregistrement uniquement après validation par l'agent, API Flask, déploiement continu Docker / GitHub Actions."
      },
      eventfire: {
        title: "EventFire — réservation d'événements",
        desc: "Application full-stack MERN menée en Spec-Driven Development : contrat de projet, maquettes Figma et architecture définis avant la première ligne de code, puis livraison en releases successives (consultation et administration, recherche et tableau de bord, réservations avec emails de confirmation). Release sécurité ajoutée hors contrat : JWT + Google OAuth, Helmet, rate limiting, protection contre l'injection NoSQL."
      },
      othello: {
        title: "Deep Learning — Othello",
        desc: "Prédiction du meilleur coup à Othello avec PyTorch : comparaison de 5 architectures (MLP, CNN, BiLSTM, CNN+LSTM). Le meilleur modèle, CNN+LSTM, atteint 50,1 % de précision contre 1,6 % au hasard."
      },
      scraper: {
        title: "Generic Scraper — Playwright",
        desc: "Outil de scraping générique configurable entièrement en JSON : navigation, formulaires, pagination, conditions et sous-workflows, logs Winston, interface Vue et déploiement Docker."
      },
      wordle: {
        title: "Wordle sur le cloud",
        desc: "Déploiement cloud d'une application Bun + React 19 sur Render avec une base MongoDB Atlas, après migration de SQLite vers MongoDB ; conteneurisation Docker et lancement local scripté."
      },
      api: {
        title: "API REST Express — JWT & RBAC",
        desc: "API REST de gestion de contenu avec Express : authentification JWT, contrôle d'accès par rôles (RBAC), gestion des utilisateurs et des contenus, health check."
      }
    },
    
    // Experience Section
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours en entreprise, au Maroc et en France, et dans la vie associative.",

      jobMarsa: {
        title: "Stagiaire ingénieur IA & DevOps — Marsa Maroc",
        dates: "Juin – sept. 2026",
        location: "DSI, Port de Casablanca, Maroc · Les codes conteneurs étaient saisis à la main au point de contrôle",
        tasks: [
          "<strong>Gestion de projet :</strong> analyse du besoin et spécification fonctionnelle, backlog en 7 epics priorisés (P0 à P2), pilotage en 6 jalons avec points réguliers avec le tuteur ; périmètre recentré en semaine 5 après analyse des données terrain.",
          "<strong>IA :</strong> entraînement de 3 modèles de vision par ordinateur (<strong>YOLO11</strong>) sur 17 000 images ; détection des conteneurs portée de 70 % à 91 %, zone du code détectée à 99,5 % ; choix argumenté de l'OCR (<strong>EasyOCR</strong>) faute de données annotées au caractère.",
          "<strong>Fiabilité :</strong> contrôle automatique de validité du code (norme ISO 6346) ; validation finale par l'agent avant tout enregistrement (le modèle propose, l'agent décide) ; benchmark sur 60 photos terrain.",
          "<strong>Développement :</strong> API REST Python (<strong>Flask</strong>) ; application web de capture, historique et tableau de bord (<strong>PostgreSQL</strong>) ; analyse de vidéos ; extension navigateur ; prototype de flux caméra IP.",
          "<strong>DevOps :</strong> chaîne de déploiement continu (<strong>GitHub Actions</strong>, <strong>Docker Hub</strong>, serveur Linux, HTTPS) avec contrôle de santé bloquant ; modèles adaptés à un serveur sans GPU ; lecture complète en 0,5 s sur GPU.",
          "<strong>Documentation :</strong> spécification centrale et plus de 15 décisions d'architecture tracées."
        ]
      },

      job1: {
        title: "Ingénieur apprenti — Chargé d'application — Covéa / MMA",
        dates: "Sept. 2024 – sept. 2027",
        location: "Groupe d'assurance (MMA, MAAF, GMF) · DSI, Gestion Produit IARD, Le Mans, France",
        tasks: [
          "<strong>Fonctionnel :</strong> traitement des demandes de travaux dans <strong>Jira</strong> : analyse du besoin et du chiffrage, rédaction des dossiers de spécifications, validation avec le pilote d'activité, plan de tests et recette.",
          "<strong>Métier :</strong> paramétrage des produits d'assurance IARD de 5 marchés (auto, habitation, entreprise, santé, prévoyance) pour MMA et Covéa Fleet : règles, garanties, tarifs.",
          "<strong>Campagne tarifaire :</strong> participation au terme annuel (revalorisation des contrats au 1er janvier) : tableaux de garanties, majorations, nouveaux tarifs, suivi en point quotidien.",
          "<strong>Développement :</strong> développement et correction de code <strong>Smalltalk</strong> sur l'outil de paramétrage, tests de flux XML (<strong>SoapUI</strong>), livraisons hebdomadaires via <strong>Jenkins</strong>.",
          "<strong>Production :</strong> gestion des incidents (<strong>ServiceNow</strong>) : analyse, reproduction en environnement de test, correction ou réaffectation ; priorisation entre incidents, échéances et demandes.",
          "<strong>Gestion de projet :</strong> pilotage d'un outil interne d'automatisation du nommage (57 jours, 7 phases) : problématique, périmètre, spécifications, UML, maquette Figma, analyse de risques DICT, suivi Jira / Kanban."
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

    // Education Section
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique.",
      
      degree1: {
        title: "Diplôme d'ingénieur en informatique, par apprentissage",
        school: "ENSIM — École Nationale Supérieure d'Ingénieurs du Mans, Le Mans",
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
        title: "Classe préparatoire MPSI, puis cycle préparatoire ENSIM",
        school: "ISEN Toulon, puis ENSIM Le Mans",
        dates: "2022 - 2024",
        desc: "Bases solides en mathématiques, physique et informatique, avec premiers projets en programmation et systèmes embarqués."
      },

      certifications: "Certifications",
      certAws: "AWS Solutions Architect – Associate — en préparation (examen nov. 2026)",
      softSkills: "Savoir-être",
      softSkillsList: {
        0: "Communication avec les équipes métier",
        1: "Autonomie et sens des priorités",
        2: "Adaptation à des environnements variés"
      },
      languages: "Langues",
      languagesList: {
        0: "Arabe — langue maternelle",
        1: "Français — courant",
        2: "Anglais — B2 (Linguaskill, objectif B2+)",
        3: "Espagnol — A2"
      }
    },

    // Contact Section
    contact: {
      title: "Me Contacter",
      subtitle: "N'hésitez pas à me contacter pour un échange, une opportunité ou un projet.",
      contactInfo: "Informations de Contact",
      email: "Email :",
      location: "Mobilité :",
      locationValue: "Maroc, France, Luxembourg",
      availability: "Disponibilité :",
      availabilityValue: "CDI dès septembre 2027",
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
      education: "Education",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      eyebrow: "ENSIM 2027 • 3-year apprenticeship • Morocco & France",
      greeting: "Hi, I'm",
      role: "Computer Engineering Student — Project Management, AI & DevOps",
      subtitle: "A versatile profile, both functional and technical: business analysis, development and production support at Covéa / MMA, and an AI project delivered end to end into production at the port of Casablanca (Marsa Maroc).",
      emailBtn: "Get in touch",
      s8Btn: "S8 Portfolio",
      panel: {
        title: "Key skills",
        pmLabel: "Requirements, specs, acceptance testing, risks",
        aiLabel: "Computer vision, LLM integration",
        cloudTitle: "Cloud & DevOps",
        cloudLabel: "CI/CD, containers, production",
        more: "All skills"
      }
    },

    // About Section
    about: {
      title: "About Me",
      subtitle: "To better understand my background and what drives me.",
      whoAmI: "Who am I?",
      intro: "I am a computer engineering student at ENSIM (Le Mans), in a work-study program, graduating in 2027. Since 2024 at Covéa / MMA, I have combined business analysis, development and production support in insurance, and I lead an automation project.",
      passion: "At <strong>Marsa Maroc</strong>, I led an <strong>AI</strong> project end to end, now in production at the port of Casablanca: computer vision (<strong>YOLO11</strong>, <strong>EasyOCR</strong>), a <strong>Flask</strong> API, and continuous deployment with <strong>Docker</strong> and <strong>GitHub Actions</strong>. I enjoy bridging business teams and engineering: gathering needs, writing specifications, building, then delivering.",
      interests: "I aim to join a <strong>Moroccan company undergoing digital transformation</strong>, in a <strong>permanent position from September 2027</strong>. I am currently preparing for the <strong>AWS Solutions Architect – Associate</strong> certification.",
      extra: "<strong>Languages:</strong> Arabic (native), French (fluent), English (B2, Linguaskill), Spanish (A2). <strong>Interests:</strong> golf, music, travel and discovering other cultures."
    },
    
    // Skills Section
    skills: {
      title: "Technical Skills",
      subtitle: "An overview of my technical skills.",
      projectMgmt: "IT Project Management",
      ai: "AI & Data",
      programming: "Programming Languages",
      webDev: "Web Development",
      backend: "Backend & Databases",
      devops: "Cloud, DevOps & Production",
      design: "Design & Modelling",
      embedded: "Embedded & Systems"
    },

    // Projects Section
    projects: {
      title: "Projects",
      subtitle: "A selection of projects: AI in production, full-stack, deep learning, automation and cloud.",
      viewCode: "View Code →",
      private: "Private repository",

      jobflow: {
        title: "JobFlow AI — self-hosted",
        desc: "Personal app to centralise and track a job search, run like a professional project: Spec-Driven Development, TDD, documented architecture decisions, GitHub Actions CI/CD and self-hosting on a Raspberry Pi (Docker Compose, Caddy, private access via Tailscale)."
      },
      container: {
        title: "SmartContainer_AI — Marsa Maroc",
        desc: "AI platform in production at the port of Casablanca: automatic container code reading (ISO 6346) with YOLO11 + EasyOCR, records saved only after operator validation, Flask API, continuous deployment with Docker / GitHub Actions."
      },
      eventfire: {
        title: "EventFire — event booking",
        desc: "Full-stack MERN app built with Spec-Driven Development: project contract, Figma mock-ups and architecture defined before the first line of code, then delivered in successive releases (browsing and admin, search and dashboard, bookings with confirmation emails). A security release added beyond the contract: JWT + Google OAuth, Helmet, rate limiting, NoSQL injection protection."
      },
      othello: {
        title: "Deep Learning — Othello",
        desc: "Predicting the best Othello move with PyTorch: 5 architectures compared (MLP, CNN, BiLSTM, CNN+LSTM). The best model, CNN+LSTM, reaches 50.1% accuracy versus 1.6% for random play."
      },
      scraper: {
        title: "Generic Scraper — Playwright",
        desc: "Generic scraping tool configured entirely in JSON: navigation, forms, pagination, conditions and sub-workflows, Winston logging, Vue interface and Docker deployment."
      },
      wordle: {
        title: "Wordle in the cloud",
        desc: "Cloud deployment of a Bun + React 19 app on Render with a MongoDB Atlas database, after migrating from SQLite to MongoDB; Docker containerisation and scripted local start-up."
      },
      api: {
        title: "Express REST API — JWT & RBAC",
        desc: "Content-management REST API built with Express: JWT authentication, role-based access control (RBAC), user and content management, health check."
      }
    },
    
    // Experience Section
    experience: {
      title: "Professional Experience",
      subtitle: "My professional experience in Morocco and France, and associative work.",

      jobMarsa: {
        title: "AI & DevOps Engineering Intern — Marsa Maroc",
        dates: "June – Sept. 2026",
        location: "IT Department, Port of Casablanca, Morocco · Container codes were typed by hand at the checkpoint",
        tasks: [
          "<strong>Project management:</strong> needs analysis and functional specification, backlog of 7 prioritized epics (P0 to P2), 6 milestones with regular check-ins with my tutor; scope refocused in week 5 after analysing field data.",
          "<strong>AI:</strong> trained 3 computer vision models (<strong>YOLO11</strong>) on 17,000 images; container detection raised from 70% to 91%, code area detected at 99.5%; reasoned choice of OCR (<strong>EasyOCR</strong>) given the lack of character-level annotated data.",
          "<strong>Reliability:</strong> automatic code validity check (ISO 6346); final validation by the operator before any record is saved (the model suggests, the operator decides); benchmark on 60 field photos.",
          "<strong>Development:</strong> Python REST API (<strong>Flask</strong>); web app for capture, history and dashboard (<strong>PostgreSQL</strong>); video analysis; browser extension; IP camera stream prototype.",
          "<strong>DevOps:</strong> continuous deployment pipeline (<strong>GitHub Actions</strong>, <strong>Docker Hub</strong>, Linux server, HTTPS) with a blocking health check; models adapted to a GPU-less server; full read in 0.5 s on GPU.",
          "<strong>Documentation:</strong> central specification and more than 15 recorded architecture decisions."
        ]
      },

      job1: {
        title: "Engineering Apprentice — Application Analyst — Covéa / MMA",
        dates: "Sept. 2024 – Sept. 2027",
        location: "Insurance group (MMA, MAAF, GMF) · IT Department, P&C Product Management, Le Mans, France",
        tasks: [
          "<strong>Functional:</strong> handling change requests in <strong>Jira</strong>: needs and cost analysis, writing specifications, validation with the business owner, test plan and acceptance testing.",
          "<strong>Business:</strong> configuring P&C insurance products across 5 markets (motor, home, business, health, protection) for MMA and Covéa Fleet: rules, coverages, rates.",
          "<strong>Pricing campaign:</strong> contributing to the annual renewal (contract revaluation on January 1st): coverage tables, surcharges, new rates, daily follow-up meetings.",
          "<strong>Development:</strong> developing and fixing <strong>Smalltalk</strong> code on the configuration tool, XML flow testing (<strong>SoapUI</strong>), weekly releases via <strong>Jenkins</strong>.",
          "<strong>Production:</strong> incident management (<strong>ServiceNow</strong>): analysis, reproduction in a test environment, fix or reassignment; prioritizing between incidents, deadlines and requests.",
          "<strong>Project management:</strong> leading an internal naming-automation tool (57 days, 7 phases): problem statement, scope, specifications, UML, Figma mock-up, DICT risk analysis, Jira / Kanban tracking."
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

    // Education Section
    education: {
      title: "Education",
      subtitle: "My academic background.",
      
      degree1: {
        title: "Computer Engineering Degree, work-study program",
        school: "ENSIM — École Nationale Supérieure d'Ingénieurs du Mans, Le Mans",
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
        title: "MPSI preparatory class, then ENSIM preparatory cycle",
        school: "ISEN Toulon, then ENSIM Le Mans",
        dates: "2022 - 2024",
        desc: "Strong foundation in mathematics, physics and computer science, with first projects in programming and embedded systems."
      },

      certifications: "Certifications",
      certAws: "AWS Solutions Architect – Associate — in preparation (exam Nov. 2026)",
      softSkills: "Soft Skills",
      softSkillsList: {
        0: "Communication with business teams",
        1: "Autonomy and sense of priorities",
        2: "Adapting to varied environments"
      },
      languages: "Languages",
      languagesList: {
        0: "Arabic — native",
        1: "French — fluent",
        2: "English — B2 (Linguaskill, aiming for B2+)",
        3: "Spanish — A2"
      }
    },

    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Feel free to contact me for a discussion, an opportunity or a project.",
      contactInfo: "Contact Information",
      email: "Email:",
      location: "Mobility:",
      locationValue: "Morocco, France, Luxembourg",
      availability: "Availability:",
      availabilityValue: "Permanent position from September 2027",
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
  // Le style vient entièrement du CSS (theme-glass.css) : capsule de verre, onglet actif = classe .active
  const selector = document.createElement('div');
  selector.className = 'language-selector';
  selector.setAttribute('role', 'group');
  selector.setAttribute('aria-label', 'Langue / Language');

  const langs = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'en', label: 'EN', name: 'English' }
  ];

  langs.forEach(({ code, label, name }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = label;
    btn.title = name;
    btn.className = 'lang-btn' + (code === currentLang ? ' active' : '');
    btn.setAttribute('aria-pressed', code === currentLang ? 'true' : 'false');

    btn.addEventListener('click', () => {
      applyTranslations(code);
      currentLang = code;
      selector.querySelectorAll('.lang-btn').forEach((b, idx) => {
        const on = langs[idx].code === code;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      localStorage.setItem('preferredLanguage', code);
    });

    selector.appendChild(btn);
  });
  
  // placé dans la barre de navigation : il suit exactement la grille du contenu
  (document.querySelector('.topbar .nav') || document.body).appendChild(selector);
}

// Initialiser la traduction au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  applyTranslations(lang);
  createLanguageSelector(lang);
});