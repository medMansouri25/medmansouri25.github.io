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
      competencesPro: "Compétences S8",
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
      title: "Compétences & Travail réalisé — Semestre 8",
      subtitle: "Compétences et travail réalisé lors de mon alternance chez Covéa (MMA) — Semestre 8",
      exampleLabel: "Exemple :",
      competencesLabel: "Compétences mobilisées",

      uf81: {
        title: "UF 8.1 — Vie Professionnelle : Conduite de projet",
        item1: {
          code: "8.1.1",
          title: "Normes et certification, démarche qualité, aspects réglementaires",
          description: "Pilotage d'un projet de normalisation du nommage dans l'outil de paramétrage produit PGP (Poste Gestion Produit), qui permet de concevoir les données et la structure d'un produit d'assurance chez MMA. Le but est d'unifier les pratiques de développement au sein de l'équipe GP. Le projet a été structuré selon une démarche qualité rigoureuse : division en phases et sous-tâches, jalons de livraison définis et points de validation systématiques avant chaque livrable. Cette approche séquentielle avec réunions intermédiaires a permis d'améliorer continuellement les livrables pour qu'ils correspondent aux attentes.",
          example: "Mise en place d'un processus de validation multi-étapes incluant reformulation du besoin, revue par la manager et la tutrice, et ajustements avant chaque livraison de phase (spécification fonctionnelle, technique, etc.).",
          competences: [
            "Gestion de projet",
            "Démarche qualité",
            "Structuration méthodologique",
            "Respect des normes internes"
          ]
        },
        item2: {
          code: "8.1.2",
          title: "Recherche de solution en conception / réalisation / produit / service",
          description: "Conception d'une solution d'aide au nommage pour l'outil PGP en combinant modélisation UML et prototypage IHM. La conception a débuté par l'élaboration de diagrammes de cas d'utilisation pour identifier l'impact du système sur le quotidien des gestionnaires produits, puis de diagrammes de séquence pour visualiser les interactions utilisateur-outil et garantir une réponse efficace aux besoins. J'ai ensuite créé une maquette Figma respectant les principes d'accessibilité et d'ergonomie, validée par les utilisateurs finaux avant passage aux spécifications techniques.",
          example: "Développement d'une interface de formulaire permettant la sélection de règles / fonctions / paquets, le contrôle du champ libre, la gestion des suffixes FO/BO et l'accès à la structure produit (ORP/ORC/GAR), avec système d'alerte lors de l'enregistrement.",
          competences: [
            "Modélisation UML",
            "Conception IHM",
            "Prototypage Figma",
            "Analyse des besoins utilisateurs",
            "Ergonomie"
          ]
        },
        item3: {
          code: "8.1.3",
          title: "Réalisation : organiser la mission, conduite de l'équipe et exercice des responsabilités",
          description: "Organisation et conduite du projet de A à Z en structurant la mission en 7 phases : initialisation (macro/micro-planning, reformulation du besoin), chiffrage (estimation de charge par phases et sous-tâches), spécifications fonctionnelle et technique, développement et tests, mise en production et garantie. Pour piloter l'avancement, j'ai créé un tableau Kanban sur Jira avec des tâches filles rattachées à la tâche mère, offrant une vision claire du reste à faire. J'ai programmé des réunions régulières avec ma manager et ma tutrice pour valider mes livrables et m'assurer du respect du planning et de la charge initiale. J'ai exercé ma responsabilité par des prises de décisions techniques autonomes sur les choix de conception et de modélisation.",
          example: "Création d'un plan de charge détaillé sous guidance managériale, basé sur des exemples de projets réels MMA, et utilisation de Jira pour suivre l'avancement en temps réel (tâches en cours, terminées, bloquées).",
          competences: [
            "Conduite de projet",
            "Planification (macro/micro)",
            "Gestion des tâches (Jira/Kanban)",
            "Animation de réunions",
            "Prise de décision technique",
            "Autonomie"
          ]
        },
        item4: {
          code: "8.1.4",
          title: "Présentation des livrables, bilan, communication des résultats et actions correctives",
          description: "Livraison de plusieurs documents professionnels améliorés itérativement suite aux réunions de validation : un planning macro (vision globale du projet) et micro (détail des sous-tâches avec capacité temporelle), un plan de charge inspiré de projets réels MMA, et un dossier de spécification normalisé comprenant la reformulation détaillée du besoin, la démarche projet, les spécifications fonctionnelle et technique (pseudo-code) ainsi qu'un guide utilisateur pour les nouveaux arrivants. Lors des points réguliers avec ma manager et ma tutrice, j'ai présenté mes résultats, expliqué mes réalisations et intégré leurs remarques pour corriger et améliorer chaque livrable, assurant leur conformité aux normes de gestion de projet et aux attentes métier.",
          example: "Après présentation du dossier de spécification fonctionnelle (maquettes Figma + diagrammes UML), intégration des retours pour ajuster l'ergonomie de l'interface et préciser certains cas d'utilisation avant passage à la phase technique.",
          competences: [
            "Communication professionnelle",
            "Présentation de livrables",
            "Analyse de retours",
            "Amélioration continue",
            "Formalisation documentaire",
            "Conformité aux standards"
          ]
        }
      },

      uf82: {
        title: "UF 8.2 — Technique : Sécurité du système d'information",
        item1: {
          code: "3.1",
          title: "Identifier les risques d'une cyberattaque",
          description: "Participation à une formation gamifiée sur la cybersécurité dispensée en interne chez MMA (groupe Covéa), couvrant les principales menaces auxquelles un collaborateur peut être exposé en environnement professionnel. Le parcours pédagogique, structuré autour de scénarios interactifs, a permis d'acquérir des réflexes concrets face aux cybermenaces du quotidien. Programme couvert : création de mots de passe robustes, sécurisation du matériel professionnel, sécurisation des connexions réseau, identification des bonnes et mauvaises pratiques numériques, détection d'e-mails de phishing, communication sécurisée sur les réseaux sociaux.",
          example: "Mise en situation sur les risques liés aux réseaux Wi-Fi publics — un collaborateur en déplacement se connecte à un réseau non sécurisé, exposant les données du groupe à une interception par des cybercriminels. L'exercice a permis d'identifier les bons réflexes : utilisation du VPN d'entreprise, vérification du réseau, évitement des connexions sensibles hors réseau sécurisé.",
          competences: [
            "Sensibilisation à la cybersécurité",
            "Identification des menaces",
            "Bonnes pratiques numériques",
            "Hygiène informatique"
          ]
        },
        item2: {
          code: "3.2",
          title: "Comprendre le fonctionnement du web dans un système d'information complexe",
          description: "Dans le cadre du projet de normalisation de nommage mené chez MMA, j'ai appréhendé l'architecture du système d'information interne, notamment le fonctionnement de l'outil PGP (Poste Gestion Produit) développé en Smalltalk et son intégration dans l'environnement applicatif global. J'ai également pris conscience des échanges entre les différentes couches applicatives : interface utilisateur, couche métier et données produit, et la manière dont ces flux conditionnent la sécurité et la cohérence du SI.",
          example: "Analyse des interactions entre l'interface IHM de l'outil de nommage, le validateur de règles et le générateur de noms, modélisées via des diagrammes de séquence UML — permettant d'identifier les points d'échange critiques et les risques d'incohérence de données.",
          competences: [
            "Architecture SI",
            "Compréhension des flux applicatifs",
            "Modélisation UML",
            "Analyse des échanges inter-composants"
          ]
        },
        item3: {
          code: "3.3",
          title: "Connaître les failles et les dispositifs de sécurité",
          description: "L'environnement de travail chez MMA (groupe Covéa) est soumis à des exigences de sécurité strictes, notamment en matière de gestion des accès, de confidentialité des données produit et de contrôle des modifications en production. Dans ce contexte, j'ai été sensibilisé aux failles courantes liées aux outils internes : accès non contrôlés, absence de validation des entrées utilisateur, risques liés aux nommages hétérogènes pouvant générer des incohérences dans la base de données produit. Le projet de normalisation lui-même constitue une réponse à une faille organisationnelle : l'absence de conventions de nommage uniformes fragilisait la maintenabilité et la lisibilité du SI.",
          example: "Intégration d'un système de contrôle et d'alerte dans l'outil de nommage — lors de l'enregistrement, une validation est déclenchée pour détecter les noms non conformes aux conventions définies, empêchant ainsi l'introduction de données incohérentes dans l'outil PGP.",
          competences: [
            "Identification des failles organisationnelles et applicatives",
            "Contrôle des entrées",
            "Validation des données",
            "Sécurité par conception (security by design)"
          ]
        },
        item4: {
          code: "3.4",
          title: "Proposer une politique de sécurité pour un système d'information",
          description: "La démarche de normalisation du nommage menée dans le cadre du projet PGP s'apparente à la mise en place d'une politique de gouvernance de la donnée — composante essentielle de toute politique de sécurité SI. En définissant des règles de nommage obligatoires, un processus de validation multi-étapes et un guide utilisateur destiné aux nouveaux arrivants, j'ai contribué à formaliser un cadre de référence interne garantissant la cohérence, la traçabilité et la maintenabilité du système.",
          example: "Rédaction d'un dossier de spécification normalisé comprenant les règles de nommage, les cas d'erreur gérés et un guide d'utilisation — constituant une base documentaire réutilisable pour encadrer les pratiques de l'équipe GP et réduire les risques d'erreurs en production.",
          competences: [
            "Gouvernance de la donnée",
            "Formalisation de politiques internes",
            "Documentation normative",
            "Réduction des risques SI",
            "Amélioration de la maintenabilité"
          ]
        }
      },

      uf83: {
        title: "UF 8.3 — IPS Technique : Projet ergonomique",
        item1: {
          code: "8.3",
          title: "Conception de la maquette IHM de l'outil de normalisation du nommage",
          description: "Conception et réalisation de la maquette IHM de l'outil de normalisation du nommage PGP, en appliquant les principes fondamentaux de l'ergonomie logicielle et de l'accessibilité numérique. L'enjeu était double : répondre aux besoins fonctionnels des gestionnaires produits (GP) tout en respectant les contraintes visuelles et techniques imposées par l'environnement de travail existant (développé en Smalltalk). La démarche a débuté par une phase d'analyse des besoins utilisateurs, puis une conception itérative sur Figma, avec des allers-retours réguliers avec les utilisateurs finaux pour valider les choix d'interface. Chaque décision de design — palette de couleurs, disposition des composants, libellés, gestion des alertes — a été justifiée par des principes UX concrets : réduction de la charge cognitive, cohérence visuelle avec l'outil existant, clarté des actions disponibles.",
          example: "L'interface intègre un formulaire de saisie guidée permettant la sélection des règles, fonctions et paquets via des listes déroulantes contraintes, un contrôle du champ libre avec retour visuel immédiat, la gestion des suffixes FO/BO et un accès structuré à la hiérarchie produit (ORP/ORC/GAR). Un système d'alerte contextuel s'active à l'enregistrement en cas de non-conformité, guidant l'utilisateur sans blocage brutal — conformément aux principes de feedback et de tolérance à l'erreur.",
          competences: [
            "Ergonomie logicielle",
            "Conception UX/UI",
            "Prototypage Figma",
            "Accessibilité numérique",
            "Analyse des besoins utilisateurs",
            "Cohérence visuelle",
            "Itération sur retours utilisateurs"
          ]
        }
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
      competencesPro: "Skills S8",
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
      title: "Skills & Work — Semester 8",
      subtitle: "Skills and work carried out during my apprenticeship at Covéa (MMA) — Semester 8",
      exampleLabel: "Example:",
      competencesLabel: "Skills applied",

      uf81: {
        title: "UF 8.1 — Professional Life: Project Management",
        item1: {
          code: "8.1.1",
          title: "Standards and certification, quality approach, regulatory aspects",
          description: "Led a naming standardization project in the PGP product configuration tool (Poste Gestion Produit), which is used to design the data and structure of an insurance product at MMA. The goal was to unify development practices within the GP team. The project was structured following a rigorous quality approach: division into phases and subtasks, defined delivery milestones, and systematic validation checkpoints before each deliverable. This sequential approach with intermediate meetings allowed continuous improvement of deliverables to match expectations.",
          example: "Implementation of a multi-step validation process including need reformulation, review by the manager and tutor, and adjustments before each phase delivery (functional specification, technical specification, etc.).",
          competences: [
            "Project management",
            "Quality approach",
            "Methodological structuring",
            "Compliance with internal standards"
          ]
        },
        item2: {
          code: "8.1.2",
          title: "Solution research in design / implementation / product / service",
          description: "Designed a naming-assistance solution for the PGP tool by combining UML modeling and UI prototyping. The design began with use case diagrams to identify the system's impact on product managers' daily work, followed by sequence diagrams to visualize user-tool interactions and ensure an effective response to needs. I then created a Figma mockup respecting accessibility and ergonomics principles, validated by end users before moving to technical specifications.",
          example: "Development of a form interface allowing the selection of rules / functions / packages, free-field control, FO/BO suffix management and access to the product structure (ORP/ORC/GAR), with an alert system on save.",
          competences: [
            "UML modeling",
            "UI design",
            "Figma prototyping",
            "User needs analysis",
            "Ergonomics"
          ]
        },
        item3: {
          code: "8.1.3",
          title: "Implementation: organizing the mission, team leadership and exercising responsibilities",
          description: "Organized and led the project from A to Z by structuring the mission into 7 phases: initialization (macro/micro planning, need reformulation), estimation (workload estimation by phase and subtask), functional and technical specifications, development and testing, production rollout and warranty. To steer progress, I created a Kanban board on Jira with child tasks attached to the parent task, giving a clear view of remaining work. I scheduled regular meetings with my manager and tutor to validate deliverables and ensure compliance with the initial schedule and workload. I exercised responsibility through autonomous technical decisions on design and modeling choices.",
          example: "Creation of a detailed workload plan under managerial guidance, based on real MMA project examples, and use of Jira to track progress in real time (in-progress, completed, blocked tasks).",
          competences: [
            "Project management",
            "Planning (macro/micro)",
            "Task management (Jira/Kanban)",
            "Meeting facilitation",
            "Technical decision-making",
            "Autonomy"
          ]
        },
        item4: {
          code: "8.1.4",
          title: "Presentation of deliverables, review, communication of results and corrective actions",
          description: "Delivered several professional documents iteratively improved following validation meetings: a macro schedule (global project view) and micro schedule (subtask detail with time capacity), a workload plan inspired by real MMA projects, and a standardized specification file including the detailed need reformulation, the project approach, the functional and technical specifications (pseudo-code) as well as a user guide for newcomers. During regular check-ins with my manager and tutor, I presented my results, explained my work and integrated their feedback to correct and improve each deliverable, ensuring compliance with project management standards and business expectations.",
          example: "After presenting the functional specification file (Figma mockups + UML diagrams), I integrated feedback to adjust the interface ergonomics and clarify certain use cases before moving to the technical phase.",
          competences: [
            "Professional communication",
            "Deliverable presentation",
            "Feedback analysis",
            "Continuous improvement",
            "Documentary formalization",
            "Compliance with standards"
          ]
        }
      },

      uf82: {
        title: "UF 8.2 — Technical: Information System Security",
        item1: {
          code: "3.1",
          title: "Identify the risks of a cyberattack",
          description: "Participated in a gamified cybersecurity training delivered internally at MMA (Covéa group), covering the main threats an employee may face in a professional environment. The educational path, structured around interactive scenarios, helped acquire concrete reflexes against everyday cyber threats. Program covered: creating strong passwords, securing professional equipment, securing network connections, identifying good and bad digital practices, detecting phishing emails, secure communication on social networks.",
          example: "Simulation of the risks of public Wi-Fi networks — an employee on the move connects to an unsecured network, exposing group data to interception by cybercriminals. The exercise highlighted the right reflexes: using the corporate VPN, verifying the network, avoiding sensitive connections outside a secured network.",
          competences: [
            "Cybersecurity awareness",
            "Threat identification",
            "Good digital practices",
            "IT hygiene"
          ]
        },
        item2: {
          code: "3.2",
          title: "Understand how the web works within a complex information system",
          description: "As part of the naming standardization project at MMA, I grasped the architecture of the internal information system, in particular how the PGP tool (Poste Gestion Produit) developed in Smalltalk works and how it integrates into the overall application environment. I also became aware of the exchanges between the different application layers: user interface, business layer and product data, and how these flows condition the security and consistency of the IS.",
          example: "Analysis of the interactions between the naming tool's UI, the rule validator and the name generator, modeled via UML sequence diagrams — making it possible to identify critical exchange points and the risks of data inconsistency.",
          competences: [
            "IS architecture",
            "Understanding application flows",
            "UML modeling",
            "Inter-component exchange analysis"
          ]
        },
        item3: {
          code: "3.3",
          title: "Know the vulnerabilities and security mechanisms",
          description: "The work environment at MMA (Covéa group) is subject to strict security requirements, particularly regarding access management, product data confidentiality and control of changes in production. In this context, I was made aware of common vulnerabilities related to internal tools: uncontrolled access, lack of user input validation, risks related to heterogeneous naming that can generate inconsistencies in the product database. The standardization project itself is a response to an organizational vulnerability: the absence of uniform naming conventions weakened the maintainability and readability of the IS.",
          example: "Integration of a control and alert system into the naming tool — on save, a validation is triggered to detect names that do not comply with the defined conventions, thus preventing inconsistent data from being introduced into the PGP tool.",
          competences: [
            "Identification of organizational and application vulnerabilities",
            "Input control",
            "Data validation",
            "Security by design"
          ]
        },
        item4: {
          code: "3.4",
          title: "Propose a security policy for an information system",
          description: "The naming standardization carried out as part of the PGP project is akin to setting up a data governance policy — an essential component of any IS security policy. By defining mandatory naming rules, a multi-step validation process and a user guide for newcomers, I helped formalize an internal reference framework guaranteeing the consistency, traceability and maintainability of the system.",
          example: "Drafting a standardized specification file including the naming rules, the handled error cases and a user guide — forming a reusable documentary base to frame the GP team's practices and reduce the risk of production errors.",
          competences: [
            "Data governance",
            "Formalization of internal policies",
            "Normative documentation",
            "IS risk reduction",
            "Maintainability improvement"
          ]
        }
      },

      uf83: {
        title: "UF 8.3 — Technical IPS: Ergonomic Project",
        item1: {
          code: "8.3",
          title: "Design of the UI mockup for the naming standardization tool",
          description: "Designed and built the UI mockup of the PGP naming standardization tool, applying the fundamental principles of software ergonomics and digital accessibility. The challenge was twofold: meeting the functional needs of product managers (GP) while respecting the visual and technical constraints imposed by the existing work environment (developed in Smalltalk). The approach began with a user needs analysis phase, then an iterative design on Figma, with regular back-and-forth with end users to validate interface choices. Every design decision — color palette, component layout, labels, alert handling — was justified by concrete UX principles: reducing cognitive load, visual consistency with the existing tool, clarity of available actions.",
          example: "The interface includes a guided input form allowing the selection of rules, functions and packages via constrained drop-down lists, free-field control with immediate visual feedback, FO/BO suffix management and structured access to the product hierarchy (ORP/ORC/GAR). A contextual alert system activates on save in case of non-compliance, guiding the user without abrupt blocking — in line with the principles of feedback and error tolerance.",
          competences: [
            "Software ergonomics",
            "UX/UI design",
            "Figma prototyping",
            "Digital accessibility",
            "User needs analysis",
            "Visual consistency",
            "Iteration on user feedback"
          ]
        }
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