# 🌳 Arbre de Cœurs Animé

Un site web React interactif et émotionnel qui affiche un arbre animé avec des feuilles en forme de cœur et un message personnalisé.

## ✨ Fonctionnalités

- 🌲 Animation progressive d'un arbre qui pousse
- 💖 Feuilles en forme de cœur avec animation de flottement
- ✍️ Message avec effet machine à écrire
- 🎨 Design élégant sur fond sombre
- 📱 Responsive (desktop et mobile)
- 🎁 Message personnalisable via URL

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
Ouvrez simplement le site dans votre navigateur.

### Message personnalisé
Ajoutez un paramètre `message` dans l'URL :

```
http://localhost:5173/?message=Votre%20message%20personnalisé
```

Exemple :
```
http://localhost:5173/?message=Joyeux%20Anniversaire%20%F0%9F%8E%89%0AQue%20tous%20tes%20r%C3%AAves%20se%20r%C3%A9alisent
```

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
│   ├── TreeCanvas.jsx    # Animation de l'arbre
│   └── AnimatedMessage.jsx # Message animé
└── styles/
    └── main.css          # Styles principaux
```

## 🎨 Personnalisation

Vous pouvez modifier :
- Les couleurs des cœurs dans `TreeCanvas.jsx`
- Le message par défaut dans `App.jsx`
- Les styles dans `main.css`
- La vitesse d'animation dans les composants

## 📝 Licence

Projet personnel - Libre d'utilisation

