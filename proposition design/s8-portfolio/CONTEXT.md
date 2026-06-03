# CONTEXTE — Sous-portfolio S8 (déploiement Vercel)

> Fichier de mémoire du projet. **À mettre à jour à chaque modification** pour ne pas perdre le contexte.
> Dernière mise à jour : **2026-06-02**

---

## 1. Objectif

Construire une page web **autonome** présentant le **Semestre 8** d'alternance de Mohammed Mansouri
chez Covéa (MMA), destinée à être **poussée sur Vercel** comme site distinct du portfolio global
(`https://medmansouri25.github.io/`).

Cette page **fusionne** :
- **Le design proposé par Claude Design** — esthétique « chemise Oxford » (voir `../portfolio/`).
- **Le vrai contenu détaillé** issu du portfolio principal (`../../translations.js`, section `competencesPro`).

## 2. Emplacement & déploiement

- Dossier : `proposition design/s8-portfolio/`
- Fichier principal : `index.html` (vanilla HTML/CSS/JS, **aucune dépendance** sauf Google Fonts via CDN).
- **Vercel** : déployer en pointant *Root Directory* sur `proposition design/s8-portfolio`.
  Framework preset = **Other** / static. Aucun build nécessaire (`vercel.json` fourni).
- Test local : double-clic sur **`start.bat`** (serveur sur http://localhost:8080) ou ouvrir `index.html` directement.

## 3. Sources

| Source | Rôle | Chemin |
|---|---|---|
| Design Claude (référence) | Esthétique, structure, JS | `../portfolio/project/index.html` |
| Version standalone (fonts inline) | Référence offline | `../portfolio/project/Portfolio Mohammed Mansouri - standalone.html` |
| README handoff | Instructions Claude Design | `../portfolio/README.md` |
| Transcription | Intention utilisateur | `../portfolio/chats/chat1.md` |
| **Vrai contenu S8** | Textes UF (source de vérité) | `../../translations.js` → `competencesPro` |

## 4. Direction visuelle (verrouillée)

- **Palette** : navy `#16273F` (dominant, éclairci le 02/06), surface `#1E3350`, hairline `#2D425E`,
  ciel `#7EC8E3` (accent), oxford `#88A3C2` (mat, éclairci pour contraste), blanc `#F8F9FB`.
  > Le navy d'origine `#0A1628` était jugé trop sombre → remonté à `#16273F`.
- **Typo** : Syne (display) · Inter (corps) · IBM Plex Mono (labels d'ingénierie).
- **Rythme** : hero navy → Entreprise clair → Stack bande navy → Compétences clair → Formation (UF) clair → footer navy.
- **Interactions** : reveal au scroll (avec fallback ~1,1 s anti-masquage), navbar à état actif, accordéon UF (8.1 ouvert par défaut), menu burger mobile, micro-hovers.

## 5. Structure de la page

1. **Nav** fixe — ancres 01 Entreprise / 02 Stack / 03 Compétences / 04 Formation + GitHub/LinkedIn.
2. **Hero** — nom, rôle, accroche, carte d'identité (École/Année/Entreprise/Division/Équipe/Outil).
3. **01 · Entreprise** — Covéa MMA IARD, division SIGMA IARD, équipe GP, outil PGP (Smalltalk), mission normalisation.
4. **02 · Stack** — Smalltalk/PGP · UML/Figma · Jira/Kanban/Confluence · Cycle en V/qualité/spécifications.
5. **03 · Compétences** — 7 cartes (conduite projet, UML/IHM, Jira/Kanban, livrables, cybersécurité, ergonomie, gouvernance donnée).
6. **04 · Formation (UF)** — accordéon :
   - **UF 8.1** Vie pro / Conduite de projet → 8.1.1 à 8.1.4
   - **UF 8.2** Technique / Sécurité du SI → 3.1 à 3.4
   - **UF 8.3** IPS Technique / Projet ergonomique → entrée unique
   Chaque sous-item : code → titre → description → **Exemple** → puces compétences.
7. **Footer** — GitHub, LinkedIn, lien retour « Portfolio global », mention ENSIM / Covéa / S8 2024-2025.

## 6. Décisions / points à valider par l'utilisateur

- **UF 8.3 vs 7.3** : le design Claude libellait cette UF « **7.3** ». Le vrai portfolio utilise « **8.3** ».
  → Choix retenu : **UF 8.3** (cohérence avec le portfolio live). À confirmer si l'intitulé officiel École est 7.3.
- Le contenu des **UF est le vrai texte** (translations.js), pas les placeholders du design.
- Les sections **Entreprise / Stack / Compétences** reprennent le texte du design (jugé exact et fidèle au réel).
- **Période** affichée : « Semestre 8 · 2024 / 2025 » (repris du brief). À ajuster si l'année réelle diffère.

## 7. Journal des modifications

- **2026-06-02** — Création du dossier `s8-portfolio`. Base = design Claude. Fusion du vrai contenu
  détaillé dans l'accordéon UF (8.1.1→8.1.4, 3.1→3.4, 8.3). CSS de l'accordéon adapté (sous-items
  riches : description + exemple + compétences, grille 2 colonnes ≥980px). Ajout `CONTEXT.md` + `vercel.json`.
- **2026-06-02** — Ajout de `start.bat` (lancement local, port 8080 ; Python → Node → ouverture directe).
- **2026-06-02** — Retours utilisateur : (1) **navy éclairci** `#0A1628 → #16273F` (+ surface/hairline/oxford), nav rgba ajustée ;
  (2) **responsive** renforcé : titre hero `clamp(40px,10vw,108px)` + anti-débordement, carte d'identité `max-width` + paliers
  tablette/desktop, marque navbar tronquée (ellipsis) sur mobile, paddings réduits < 600px, paliers 380/560/600/860/900px ;
  (3) **répartition** : grille Compétences passée aux **bordures par carte** (plus de cases grises vides en fin de rangée),
  breakpoint 2 colonnes abaissé à 560px.
- **2026-06-02 (fix)** — Le titre hero se coupait en plein mot (« Mo-ham-med ») à cause de `hyphens:auto`/`overflow-wrap`.
  Retirés. Ajout `white-space:nowrap` sur `.ln` (noms jamais coupés), taille `clamp(40px,8vw,104px)`, hero realigné en haut
  (`align-items:start`, colonnes `1.4fr/.85fr`, gap 56px). **Ne jamais réintroduire `hyphens:auto` sur `.hero h1`.**

## 8. TODO / idées

- [ ] Confirmer l'intitulé officiel de l'UF ergonomique (8.3 ou 7.3).
- [ ] Vérifier l'année exacte du S8.
- [ ] (Option) Photo dans le hero / version bilingue FR-EN.
- [ ] (Option) Favicon « MM ».
