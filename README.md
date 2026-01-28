# 💖 Carte d'Anniversaire Animée

Une carte d'anniversaire interactive et émotionnelle créée avec React, présentant des centaines de cœurs animés dispersés autour d'un message personnalisé centré.

## ✨ Fonctionnalités

- 💖 Plus de 600 cœurs animés dispersés sur l'écran
- ✍️ Message centré avec effet machine à écrire
- 🎨 Design élégant sur fond sombre avec effets de lueur
- 🌊 Animation de flottement pour chaque cœur
- 📱 Responsive (desktop et mobile)
- 🎁 Message personnalisable via URL
- 🎯 Zone protégée autour du texte pour une lisibilité optimale

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 🎁 Utilisation

### Message par défaut
Ouvrez simplement le site dans votre navigateur. Cliquez sur le cœur pour démarrer l'animation.

### Message personnalisé
Ajoutez un paramètre `message` dans l'URL :

```
http://localhost:5173/?message=Votre%20message%20personnalisé
```

Exemple :
```
http://localhost:5173/?message=Hey%20Jojo%2C%0AHappy%20Birthday%0AMay%20God%20bless%20you
```

**Note :** Utilisez `%0A` pour les sauts de ligne dans l'URL.

## 🛠️ Technologies

- React 18
- HTML5 Canvas
- CSS3
- Vite
- JavaScript ES6+

## 📁 Structure du projet

```
src/
├── App.jsx                 # Composant principal
├── main.jsx               # Point d'entrée
├── components/
│   ├── HeartCanvas.jsx    # Animation des cœurs dispersés
│   ├── AnimatedMessage.jsx # Message animé avec effet machine à écrire
│   └── IntroScreen.jsx    # Écran d'introduction avec cœur cliquable
└── styles/
    └── main.css          # Styles principaux
```

## 🎨 Personnalisation

Vous pouvez modifier :
- **Les couleurs des cœurs** : Modifiez la palette dans `HeartCanvas.jsx`
- **Le nombre de cœurs** : Changez `numHearts` dans `HeartCanvas.jsx` (actuellement 600)
- **Le message par défaut** : Modifiez le message dans `App.jsx`
- **Les styles** : Personnalisez les couleurs, tailles et effets dans `main.css`
- **La vitesse d'animation** : Ajustez les délais et vitesses dans les composants
- **La zone protégée** : Modifiez `textZoneRadius` pour changer l'espace autour du texte

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages via une branche `gh-pages` (méthode la plus fiable).

### 1) Vérifier le `base` Vite

Dans `vite.config.js`, adapte le nom du dépôt si besoin :

```js
base: process.env.GITHUB_PAGES ? '/VOTRE-NOM-DE-REPO/' : '/',
```

### 2) Activer Pages sur la branche `gh-pages`

Sur GitHub : **Settings → Pages**

- **Source** : `Deploy from a branch`
- **Branch** : `gh-pages` / `(root)`

### 3) Push

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Le workflow **Actions** va builder et pousser le dossier `dist/` dans la branche `gh-pages`.

### URL

Ton site sera accessible à : `https://VOTRE-USERNAME.github.io/VOTRE-NOM-DE-REPO/`

## 📝 Licence

Projet personnel - Libre d'utilisation

