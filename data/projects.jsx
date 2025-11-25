export const projects = [
    {
        imgSrc : "./P7.png", 
        name : "DeepDiver 2D game", 
        desc : "DeepDiver est un petit jeu 2D dans lequel le joueur contrôle un plongeur et navigue parmi des obstacles sous-marins ainsi que des objets à collecter. L’objectif principal est de battre le meilleur score en plongeant toujours plus profond dans les abysses. Le code du jeu suit une structure classique multi-module de libGDX, avec la logique du jeu dans le module core et un lanceur desktop/lwjgl3 dans le module lwjgl3.", 
        link : "https://github.com/SorokineDmytro/DeepDiver",
    },
    {
        imgSrc : "./P6.png", 
        name : "Job board", 
        desc : "Application développée sous forme de plateforme full-stack de recherche d’emploi et de recrutement. Le backend est conçu avec Laravel (PHP) et expose une API REST sécurisée par JWT, documentée avec L5-Swagger, connectée à une base de données MySQL. Le frontend est développé en React + TypeScript avec Vite, utilisant Tailwind CSS, ShadCN, Zustand pour la gestion d’état, TanStack Query pour la gestion des requêtes et Zod avec React Hook Form pour la validation des formulaires. Le projet est conteneurisé avec Docker et orchestré via Docker Compose pour un environnement de développement et de déploiement simplifié.", 
        link : "https://github.com/SorokineDmytro/AlloBoulot",
    },
    {
        imgSrc : "./P5.png", 
        name : "Site e-commerce de vêtements (en production)", 
        desc : "Application conçue sous forme de REST API, avec un frontend en React.js (utilisant Tailwind CSS et Vite) et un backend conteneurisé avec Docker et déployé sur un serveur Nginx. Développé avec Symfony et API Platform, intégrant OAuth2 pour l’authentification et une base de données PostgreSQL pour la gestion des données.", 
        link : "https://github.com/SorokineDmytro/FreshDrobe",
    },
    {
        imgSrc : "./P4.png", 
        name : "Système de gestion du temps de travail du personnel", 
        desc : "Application destinée à un restaurant situé à Marseille, permettant de préparer les plannings de travail, d’exporter les plannings hebdomadaires et mensuels au format PDF, ainsi que d’accumuler le temps de travail de chaque employé afin de générer des statistiques détaillées. Conçu selon le modèle MVC, développé avec Express.js et connecté à une base de données SQLite en local.", 
        link : "https://github.com/SorokineDmytro/lcb-crm",
    },
    {
        imgSrc : "./P3.png", 
        name : "Outil de gestion des finances personnelles", 
        desc : "Application permettant d’ajouter et de gérer ses comptes, de catégoriser les opérations, et de générer des statistiques détaillées sur la période sélectionnée. Conçu selon le modèle MVC, avec un frontend en HTML, CSS et JavaScript natif (intégrant la bibliothèque Chart.js) et un backend en PHP natif orienté objet, connecté à une base de données PostgreSQL.", 
        link : "https://github.com/SorokineDmytro/Wallet",
    },
    {
        imgSrc : "./P2.png", 
        name : "Système de gestion commerciale", 
        desc : "Application permettant la création et la gestion des produits, ainsi que le suivi des commandes et des clients. Développée avec un frontend en HTML, Bootstrap et JavaScript natif, et un backend en PHP natif connecté à MariaDB.", 
        link : "https://github.com/SorokineDmytro/DWWM",
    },
    // {
    //     imgSrc : "./P1.png", 
    //     name : "Système de gestion clients", 
    //     desc : "Partie frontend d’un système de gestion de personnel en HTML, CSS et JavaScript natif.", 
    //     link : "#projects",
    // },
]