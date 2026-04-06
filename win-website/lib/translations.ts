export type Lang = "fr" | "en";

export const translations = {
  nav: {
    home: { fr: "Accueil", en: "Home" },
    about: { fr: "À propos", en: "About" },
    programs: { fr: "Programmes", en: "Programs" },
    impact: { fr: "Impact", en: "Impact" },
    partners: { fr: "Partenaires", en: "Partners" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    tagline: {
      fr: "Autonomiser les femmes.\nTransformer l'Afrique.",
      en: "Empowering Women.\nTransforming Africa.",
    },
    subtitle: {
      fr: "Women Impact Network accompagne les femmes entrepreneures africaines vers l'excellence, l'innovation et la liberté économique.",
      en: "Women Impact Network empowers African women entrepreneurs toward excellence, innovation, and economic freedom.",
    },
    cta_primary: { fr: "Découvrir nos programmes", en: "Explore our programs" },
    cta_secondary: { fr: "Nous contacter", en: "Contact us" },
  },
  about: {
    title: { fr: "Qui sommes-nous ?", en: "Who are we?" },
    subtitle: {
      fr: "Une organisation engagée pour l'entrepreneuriat féminin en Afrique",
      en: "An organization committed to female entrepreneurship in Africa",
    },
    mission_title: { fr: "Notre Mission", en: "Our Mission" },
    mission_text: {
      fr: "Accompagner, former et connecter les femmes entrepreneures africaines pour bâtir une économie inclusive, innovante et durable.",
      en: "Support, train, and connect African women entrepreneurs to build an inclusive, innovative, and sustainable economy.",
    },
    vision_title: { fr: "Notre Vision", en: "Our Vision" },
    vision_text: {
      fr: "Un continent africain où chaque femme a les outils, les ressources et la confiance pour transformer ses idées en entreprises prospères.",
      en: "An African continent where every woman has the tools, resources, and confidence to turn her ideas into thriving businesses.",
    },
    values_title: { fr: "Nos Valeurs", en: "Our Values" },
    values: {
      fr: ["Inclusion", "Excellence", "Innovation", "Solidarité", "Impact"],
      en: ["Inclusion", "Excellence", "Innovation", "Solidarity", "Impact"],
    },
  },
  programs: {
    title: { fr: "Nos Programmes", en: "Our Programs" },
    subtitle: {
      fr: "8 programmes conçus pour chaque étape de votre parcours entrepreneurial",
      en: "8 programs designed for every stage of your entrepreneurial journey",
    },
    items: [
      {
        id: "bootcamp",
        number: "01",
        title: { fr: "Women Empowerment Bootcamp", en: "Women Empowerment Bootcamp" },
        description: {
          fr: "Un séminaire intensif de stratégie entrepreneuriale pour passer de l'idée au projet. Basé sur des valeurs collectives et collaboratives, il réunit des femmes porteuses de projets pour échanger, construire et booster leurs entreprises.",
          en: "An intensive entrepreneurship strategy seminar to go from idea to project. Based on collective values, it brings together women with projects to exchange, build, and boost their businesses.",
        },
        image: "/formation-1.jpg",
        tags: { fr: ["Séminaire", "Stratégie", "Mentorat"], en: ["Seminar", "Strategy", "Mentoring"] },
      },
      {
        id: "féminin",
        number: "02",
        title: { fr: "J'entreprends au Féminin 2.0", en: "Women's Entrepreneurship 2.0" },
        description: {
          fr: "Des week-ends d'échanges, conférences et brunchs dédiés à l'entrepreneuriat digital féminin. Des ateliers et workshops animés par des chefs d'entreprise pour développer votre savoir-être numérique.",
          en: "Weekend exchanges, conferences, and brunches dedicated to female digital entrepreneurship. Workshops led by business leaders to develop your digital know-how.",
        },
        image: "/entrepreneuse-digital.jpg",
        tags: { fr: ["Digital", "Conférences", "Networking"], en: ["Digital", "Conferences", "Networking"] },
      },
      {
        id: "coding",
        number: "03",
        title: { fr: "Coding Class 229 — Zones Rurales", en: "Coding Class 229 — Rural Areas" },
        description: {
          fr: "Des jeunes filles des zones rurales du Bénin formées au codage informatique avec des ordinateurs solaires. Un cycle vertueux : s'épanouir, se qualifier et contribuer au développement de leur communauté.",
          en: "Young girls from rural Benin trained in coding with solar-powered computers. A virtuous cycle: flourish, qualify, and contribute to their community's development.",
        },
        image: "/coding-class.jpg",
        tags: { fr: ["Tech", "Bénin rural", "Énergie solaire"], en: ["Tech", "Rural Benin", "Solar energy"] },
      },
      {
        id: "build",
        number: "04",
        title: { fr: "Build to Impact Program", en: "Build to Impact Program" },
        description: {
          fr: "Construire un programme impact, définir la rentabilité dans un business plan, et lancer son projet entrepreneurial. Dédié aux entrepreneures avec un chiffre d'affaires de près de 100 millions FCFA.",
          en: "Build an impact program, define profitability in a business plan, and launch your entrepreneurial project. Dedicated to entrepreneurs with revenue near 100 million FCFA.",
        },
        image: "/build-impact.jpg",
        tags: { fr: ["Business Plan", "Impact", "Formation"], en: ["Business Plan", "Impact", "Training"] },
      },
      {
        id: "fabe",
        number: "05",
        title: { fr: "FABE — Femme Africaine Booste ton Entreprise", en: "FABE — African Woman, Boost Your Business" },
        description: {
          fr: "Programme de financement et d'accompagnement à l'entrepreneuriat féminin. Du capital-risque aux subventions gouvernementales : toutes les clés pour financer et développer votre projet.",
          en: "Financing and support program for female entrepreneurship. From venture capital to government grants: all the keys to fund and grow your project.",
        },
        image: "/fabe-industry.jpg",
        tags: { fr: ["Financement", "Accompagnement", "Investissement"], en: ["Funding", "Coaching", "Investment"] },
      },
      {
        id: "masterclass",
        number: "06",
        title: { fr: "Women Empowerment Masterclass", en: "Women Empowerment Masterclass" },
        description: {
          fr: "Planifier son année, développer la confiance en soi, redéfinir le succès et explorer le financement alternatif. Des sessions pour lever tous les freins et barrières à l'entrepreneuriat féminin.",
          en: "Plan your year, build self-confidence, redefine success, and explore alternative financing. Sessions to overcome all barriers to female entrepreneurship.",
        },
        image: "/masterclass-1.jpg",
        tags: { fr: ["Masterclass", "Confiance", "Succès"], en: ["Masterclass", "Confidence", "Success"] },
      },
      {
        id: "adej",
        number: "07",
        title: { fr: "Tournées ADEJ", en: "ADEJ Tours" },
        description: {
          fr: "En partenariat avec l'ADEJ, outiller 1000 entrepreneurs dans 10 villes du Bénin en communication digitale et corporate branding. Utiliser Instagram et les TIC pour booster leur chiffre d'affaires.",
          en: "In partnership with ADEJ, equip 1000 entrepreneurs in 10 cities of Benin with digital communication and corporate branding. Use Instagram and ICT to boost their revenue.",
        },
        image: "/adej-tournee.jpg",
        tags: { fr: ["Bénin", "Branding", "Digital"], en: ["Benin", "Branding", "Digital"] },
      },
      {
        id: "atingi",
        number: "08",
        title: { fr: "Programme ATINGI", en: "ATINGI Program" },
        description: {
          fr: "Programme prioritaire pour les personnes vivant avec des handicaps. Une plateforme de formation en ligne en français et anglais pour leur permettre d'avoir une voix et une place sur le marché de l'emploi.",
          en: "Priority program for people living with disabilities. An online training platform in French and English to give them a voice and a place in the job market.",
        },
        image: "/women-tech.jpg",
        tags: { fr: ["Inclusivité", "Formation en ligne", "Handicap"], en: ["Inclusivity", "E-learning", "Disability"] },
      },
    ],
  },
  impact: {
    title: { fr: "Notre Impact", en: "Our Impact" },
    subtitle: {
      fr: "Des résultats concrets pour les femmes entrepreneures africaines",
      en: "Tangible results for African women entrepreneurs",
    },
    stats: [
      { value: "2000+", label: { fr: "Femmes accompagnées", en: "Women supported" } },
      { value: "20+", label: { fr: "Programmes", en: "Programs" } },
      { value: "11", label: { fr: "Villes au Bénin", en: "Cities in Benin" } },
      { value: "500+", label: { fr: "Jeunes filles en zone rurale", en: "Young girls in rural areas" } },
    ],
  },
  partners: {
    title: { fr: "Nos Partenaires", en: "Our Partners" },
    subtitle: {
      fr: "Ensemble pour un entrepreneuriat féminin africain fort",
      en: "Together for a strong African female entrepreneurship",
    },
  },
  contact: {
    title: { fr: "Contactez-nous", en: "Contact us" },
    subtitle: {
      fr: "Une question, un partenariat, une collaboration ? Nous sommes là.",
      en: "A question, a partnership, a collaboration? We're here.",
    },
    name: { fr: "Nom complet", en: "Full name" },
    email: { fr: "Adresse e-mail", en: "Email address" },
    subject: { fr: "Sujet", en: "Subject" },
    message: { fr: "Votre message", en: "Your message" },
    send: { fr: "Envoyer le message", en: "Send message" },
    success: {
      fr: "Message envoyé ! Nous vous répondrons bientôt.",
      en: "Message sent! We'll get back to you soon.",
    },
  },
  footer: {
    tagline: {
      fr: "Autonomiser les femmes. Transformer l'Afrique.",
      en: "Empowering Women. Transforming Africa.",
    },
    rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
  },
};
