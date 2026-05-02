# CONTEXT.md — aureussocial.be

Site vitrine commercial d'**Aureus Social Pro** (le SaaS de paie belge).

## Identité du projet
- **Produit** : Aureus Social Pro — logiciel de paie belge avec optimisation fiscale intégrée
- **URL cible** : `aureussocial.be` (racine, sans `app.`)
- **App SaaS** : `app.aureussocial.be` (repo séparé `Aureus-Social/aureus-social`)
- **Société** : Aureus IA SPRL (BCE BE 1028.230.781)
- **Email** : info@aureus-ia.com

## Cible commerciale
1. **PME belges** (1 à 100+ employés) qui cherchent un nouveau secrétariat / logiciel paie
2. **Fiduciaires** qui veulent migrer leurs clients ou ajouter une couche optimisation à leur offre

## Stack & Design
- **Stack** : HTML / CSS / JS vanilla (pas de framework, pas de build)
- **Fonts** : `Fraunces` (titres, italiques) + `Inter` (body) — distincts du site holding aureus-ia.com (qui utilise DM Serif Display + DM Sans)
- **Couleurs** : noir profond `#0b0b0d` + or warm `#d4a857` + accents (vert succès, rouge urgence)
- **Direction esthétique** : moderne, conversion-driven, B2B Belgique
- **Charte distincte** du site holding : plus chaleureuse, plus orientée conversion

## Structure
```
/
├── index.html              ← Landing principale (toutes fonctionnalités + 3 prix)
├── optimisation.html       ← Page produit dédiée Module Optimisation (10 leviers détaillés)
├── assets/
│   ├── style.css           ← Charte commerciale (~700 lignes)
│   └── script.js           ← Reveal IntersectionObserver + smooth scroll
├── CONTEXT.md              ← Ce fichier
└── README.md               ← Instructions repo
```

## Sections du site

### `index.html` — Landing
1. **Hero** — Titre fort + side panel "potentiel détecté" avec stats Q2 2026
2. **12 fonctionnalités** — Toutes les features actuelles d'Aureus Social Pro
3. **Module Optimisation (killer)** — Showcase des 10 leviers avec board interactif
4. **Comparaison** — Aureus vs cabinet externe no cure no pay
5. **PME / Fiduciaire** — Deux cartes ciblées
6. **Pull quote** — 156k€/an PME 10 ETP
7. **Workflow** — 4 étapes J0→J90
8. **Tarifs** — 3 plans (Démarrage 29€/fiche, Module Optim 20%★, Fiduciaire devis)
9. **FAQ** — 9 questions clés
10. **CTA final**
11. **Footer**

### `optimisation.html` — Page produit dédiée
1. Hero spécifique Module Optimisation
2. Argbox "~156 000 € / an"
3. **Détail des 10 leviers un par un** avec lever-num gold, source légale, chiffres Q2 2026
4. FAQ 7 questions spécifiques module
5. CTA final
6. Footer

## Chiffres légaux Q2 2026 (synchronisés avec LOIS_BELGES de l'app SaaS)
- Werkbonus max : **282,37 €/mois** (seuils S0=2 561,42 / S1=2 997,59)
- Premier engagement T1 : **199,06 €/trim** · T2-T3 : **100 €/trim**
- Maribel social : **507,39 €/trim/ETP**
- Réduction structurelle : **361,64 €/trim**
- Travailleurs âgés/jeunes/handicapés : **1 500 €/trim**
- SESAM Wallonie : **25 000 €/an** (sur 36 mois)
- Tremplin Wallonie : **10 800 €/an**
- VOP Flandre : **18 000 €/an** (sur 5 ans)
- Aanwerving 55+ Flandre : **1 150 à 1 800 €/trim**
- KMO-portefeuille : **7 500 €/an** (30%)
- Dispenses PP : nuit/équipe **22,8 %** · immobilier **18 %** · R&D **80 %** · HS **32,19 %** · start-up **10-20 %** · sportif **80 %** · marine **100 %**
- Pension 2e pilier : déduction **80 %**, ATN **4,4 %**, plafond Wijninckx **36 886,16 €**
- Outplacement CCT 82bis : forfait min **1 800 €**, 60 h sur 12 mois
- FSE 50+ : aménagement jusqu'à **80 %**, tutorat **500 €/mois**, formation **70 %**

## Règles design / contenu
1. **Aucune mention de concurrent nommé** (SBEP, Binnemans, Matterne, Barette etc.) — utiliser "cabinets externes" / "cabinets de récupération"
2. **Pricing partout** : 29 €/fiche/mois + 20 % commission sur récupéré (vs 25-30 % cabinets externes)
3. **Mentions légales obligatoires** : Aureus IA SPRL · BCE BE 1028.230.781 · matricule ONSS 66999-83
4. **Email contact** : info@aureus-ia.com
5. **Lien app** : https://app.aureussocial.be
6. **Charte distincte du site holding** : Fraunces + Inter (vs DM Serif/DM Sans pour aureus-ia.com)
7. **Statut Aureus** : "Prestataire ONSS niveau 2" (pas "secrétariat social agréé")

## Synchronisation avec l'app SaaS
Le site doit refléter les nouvelles fonctionnalités de `aureus-social` au fil de leur déploiement :
- ✅ Module Optimisation (10 leviers + Sync Engine)
- ✅ Support Contrôle ONSS / SPF
- ✅ Agent IA juridique
- ✅ Export PDF professionnel
- ✅ Sync Engine v1.5
- ✅ Multi-tenant fiduciaire
- ✅ Sécurité pen test (avril 2026)
- ✅ Audit gratuit 3 ans rétroactif

Si une fonctionnalité majeure est ajoutée à l'app : mettre à jour `index.html` section Fonctionnalités et `CONTEXT.md`.

## Déploiement
- **Repo** : `Aureus-Social/aureussocial-website`
- **Branche** : `main`
- **Hébergement** : statique — Vercel / Netlify / GitHub Pages
- **DNS** : pointer `aureussocial.be` (et `www.aureussocial.be`) vers la plateforme

## Pending
1. 🟡 Configurer Vercel + DNS aureussocial.be
2. 🟡 Pages `mentions.html` + `rgpd.html` (références dans footer)
3. 🟡 Captures d'écran réelles de l'app à intégrer
4. 🟢 Témoignages clients post-lancement
5. 🟢 Blog SEO droit social belge
6. 🟢 Calculateur interactif "Combien votre PME peut récupérer ?"

## Comment mettre à jour ce site
À chaque release majeure d'Aureus Social Pro qui apporte une fonctionnalité visible côté client :
1. Mettre à jour la section `#fonctionnalites` de `index.html`
2. Si chiffre légal change dans `lois-belges.js` → MAJ chiffres Q2 2026 ici
3. Tester local en ouvrant `index.html` directement
4. Commit + push main → auto-deploy
