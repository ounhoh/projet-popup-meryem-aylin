# POP UP — page d’accueil Angular

Prototype de la page d’accueil POP UP construit avec Angular standalone components.

## Lancer le projet

```bash
npm install
npm start
```

Puis ouvrir `http://localhost:4200`.

## Vérifier le build

```bash
npm run build:production
```

## Structure

```text
src/app/
├── core/data + models       # données de démonstration et types
├── pages/home               # composition de la page d’accueil
└── shared/components        # composants réutilisables
```

Les contenus d’événements sont fictifs. Les images utilisent actuellement des URLs Unsplash afin de garder le prototype léger ; elles peuvent ensuite être remplacées par des fichiers dans `src/assets/images`.

## Push GitHub

Depuis le dossier du projet déjà cloné :

```bash
git add .
git commit -m "feat: add POP UP Angular homepage"
git push origin main
```
