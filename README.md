# WIN — Women Impact Network

Site vitrine officiel de **Women Impact Network**, une organisation dédiée à l'accompagnement des femmes entrepreneures africaines.

---

## Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Language** : TypeScript
- **Styles** : Tailwind CSS
- **Internationalisation** : Contexte React custom (FR / EN)

---

## Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Structure du projet

```
win-website/
├── app/
│   ├── layout.tsx           # Metadata SEO + LanguageProvider
│   └── page.tsx             # Assemblage des sections
├── components/
│   ├── Navbar.tsx           # Navigation fixe avec scroll effect
│   ├── Hero.tsx             # Section d'accueil (hero)
│   ├── About.tsx            # À propos — Mission, Vision, Valeurs
│   ├── Programs.tsx         # Grille des 8 programmes
│   ├── ProgramCard.tsx      # Carte individuelle de programme
│   ├── Impact.tsx           # Chiffres clés + galerie photos
│   ├── Partners.tsx         # Partenaires (ENABEL, ADEJ, ATINGI)
│   ├── Contact.tsx          # Formulaire de contact
│   └── Footer.tsx           # Pied de page
├── context/
│   └── LanguageContext.tsx  # Switch FR/EN global
├── lib/
│   └── translations.ts      # Toutes les traductions centralisées
└── public/                  # Images et assets statiques
```

---

## Internationalisation (FR / EN)

Toutes les traductions sont centralisées dans **`lib/translations.ts`**.

Pour modifier un texte :
```ts
// lib/translations.ts
hero: {
  tagline: {
    fr: "Autonomiser les femmes.\nTransformer l'Afrique.",
    en: "Empowering Women.\nTransforming Africa.",
  },
}
```

Pour utiliser une traduction dans un composant :
```tsx
const { t } = useLang();
<h1>{t(translations.hero.tagline)}</h1>
```

---

## Ajouter ou remplacer une image

1. Dépose le fichier dans `public/` (ex: `public/ma-photo.jpg`)
2. Référence-la dans le composant : `src="/ma-photo.jpg"`
3. Si Next.js met l'ancienne image en cache : `rm -rf .next/cache/images` puis redémarre le serveur

---

## Les 8 programmes de WIN

| # | Programme |
|---|-----------|
| 1 | Women Empowerment Bootcamp |
| 2 | J'entreprends au Féminin 2.0 |
| 3 | Coding Class 229 — Zones Rurales |
| 4 | Build to Impact Program |
| 5 | FABE — Femme Africaine Booste ton Entreprise |
| 6 | Women Empowerment Masterclass |
| 7 | Tournées ADEJ |
| 8 | Programme ATINGI |

---

## Partenaires

- **ENABEL DIGIBOOST** — Agence belge de développement
- **ADEJ** — Agence pour le développement de l'emploi des jeunes
- **ATINGI** — Plateforme de formation en ligne

---

## Build de production

```bash
npm run build
npm start
```
