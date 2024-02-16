# LabX-Angular-Security

## Introduction

L'application LabTech est une plateforme de laboratoire médical destinée aux professionnels de la santé, offrant une gestion complète des données des patients, des résultats d'analyses, des rendez-vous, etc.

La sécurité des données est une priorité absolue pour garantir la confidentialité et l'intégrité des informations médicales sensibles.

## Fonctionnalités de Sécurité

### 1. Implémentation de l'authentification JWT

- Objectif : Intégrer un système d'authentification basé sur JSON Web Tokens (JWT) pour permettre aux utilisateurs de s'identifier de manière sécurisée et d'obtenir un jeton JWT valide.

- Étapes :
  1. Utilisation d'Angular JWT pour la gestion des JWT.
  2. Mise en place d'un endpoint d'authentification côté serveur.
  3. Stockage sécurisé du jeton JWT côté client.

### 2. Gestion des sessions utilisateur

- Objectif : Mettre en place un mécanisme de gestion des sessions utilisateur à l'aide de JWT pour maintenir l'état d'authentification et stocker les informations utilisateur nécessaires.

- Étapes :
  1. Utilisation de JWT pour stocker les informations utilisateur côté client.
  2. Implémentation d'un mécanisme pour vérifier la validité du jeton côté client.

### 3. Contrôle d'accès basé sur les rôles

- Objectif : Définir des rôles d'utilisateur (admin, médecin, technicien) et mettre en place des Guards au niveau du routing pour restreindre l'accès aux fonctionnalités en fonction du rôle de l'utilisateur.

- Étapes :
  1. Définition des différents rôles utilisateur.
  2. Mise en place de Guards au niveau du routing pour chaque rôle.

### 4. Protection des routes sensibles

- Objectif : Configurer des Guards au niveau du routing pour protéger les routes sensibles de l'application, telles que les pages d'administration ou les fonctionnalités réservées aux utilisateurs authentifiés.

- Étapes :
  1. Création de Guards pour les routes sensibles.
  2. Configuration des Guards dans le système de routage d'Angular.

### 5. Gestion des jetons JWT expirés

- Objectif : Implémenter une logique de rafraîchissement des jetons JWT expirés afin de maintenir la session utilisateur active et de prévenir les déconnexions involontaires.

- Étapes :
  1. Mise en place d'un système de rafraîchissement côté serveur.
  2. Implémentation d'une logique de rafraîchissement côté client.

## Stack Technique

- Angular
- Angular JWT (JSON Web Tokens)
- Guards au niveau du routing
- HttpClient
- Interceptors
- Forms
- Router Services
- Local Storage
- Cross-Origin Resource Sharing (CORS)
