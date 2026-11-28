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

## Authentification (Supabase)

L’inscription et la connexion reposent sur [Supabase Auth](https://supabase.com/docs/guides/auth).

- **Configuration** : renseigner `supabaseUrl` et `supabaseAnonKey` dans `src/environments/environment.ts`.
- **Service** : `src/app/services/auth.service.ts` gère connexion, inscription (avec prénom), réinitialisation du mot de passe, connexion Google et déconnexion, et expose l’utilisateur courant.
- **Page** : `src/app/pages/auth/` (formulaire connexion/inscription, bouton afficher/masquer le mot de passe, bouton « Continuer avec Google »).
- **En-tête** : une fois connecté, affiche « Bienvenue [prénom] » et un bouton Déconnexion.

### Mise en place côté Supabase

1. Exécuter `supabase/profiles.sql` dans **SQL Editor** : crée la table `profiles` (id, prénom, e-mail, date) protégée par RLS, et un trigger qui ajoute une ligne à chaque inscription.
2. Pour se connecter sans confirmation par e-mail : **Authentication → Sign In / Providers → Email**, désactiver **Confirm email**.
3. **Authentication → URL Configuration** : ajouter `http://localhost:4200` (et `/auth`) aux Redirect URLs.

### Connexion Google

1. Dans Google Cloud Console, créer un **OAuth client ID** (Web application) avec :
   - origine JavaScript autorisée : `http://localhost:4200`
   - URI de redirection : `https://<ton-projet>.supabase.co/auth/v1/callback`
2. Dans Supabase, **Authentication → Sign In / Providers → Google** : activer et renseigner Client ID et Client Secret.

## Push GitHub

Depuis le dossier du projet déjà cloné :

```bash
git add .
git commit -m "feat: add POP UP Angular homepage"
git push origin main
```
