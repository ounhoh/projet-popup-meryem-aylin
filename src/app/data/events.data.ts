import { PopUpEvent } from '../models/event.model';

export const POP_UP_EVENTS: PopUpEvent[] = [
  {
    id: 'matcha-social-club',
    title: 'Matcha Social Club',
    category: 'matcha',
    type: 'Matcha & food',
    city: 'Paris',
    location: 'Paris · Le Marais',
    date: 'Samedi 15 novembre',
    time: '11:00',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Matcha latte dans une tasse',
    description: 'Une parenthèse douce autour du matcha : dégustation, atelier latte art et nouvelles rencontres.'
  },
  {
    id: 'vestiaire-lila',
    title: 'Le vestiaire de Lila',
    category: 'mode',
    type: 'Mode & créatrices',
    city: 'Lyon',
    location: 'Lyon · La Commune',
    date: 'Samedi 22 novembre',
    time: '14:00',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vêtements colorés sur un portant',
    description: 'Un dressing de créatrice, des pièces choisies avec soin et une après-midi pour chiner, discuter et repartir avec un coup de cœur.'
  },
  {
    id: 'beauty-lab',
    title: 'Beauty Lab Afterwork',
    category: 'beaute',
    type: 'Beauté & bien-être',
    city: 'Bordeaux',
    location: 'Bordeaux · Darwin',
    date: 'Jeudi 27 novembre',
    time: '18:30',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Produits de beauté colorés',
    description: 'Un afterwork feel good pour tester, apprendre et rencontrer les marques beauté qui font les choses autrement.'
  },
  {
    id: 'vinted-irl',
    title: 'Vinted IRL — Grand Dressing',
    category: 'seconde-main',
    type: 'Seconde main',
    city: 'Lille',
    location: 'Lille · Gare Saint Sauveur',
    date: 'Dimanche 30 novembre',
    time: '10:00',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Portants et vêtements dans une boutique',
    description: 'Le plaisir de trouver la bonne pièce en vrai, sans frais de port, avec une ambiance vide-dressing XXL et ultra conviviale.'
  },
  {
    id: 'peau-neuve',
    title: 'Peau neuve, idées neuves',
    category: 'beaute',
    type: 'Beauté & marques',
    city: 'Paris',
    location: 'Paris · Canal Saint-Martin',
    date: 'Mercredi 3 décembre',
    time: '18:00',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Soin et accessoires de beauté sur fond clair',
    description: 'Un mini pop-up imaginé pour découvrir des marques indépendantes, parler routines et prendre le temps d’essayer.'
  },
  {
    id: 'club-dimanche',
    title: 'Le club du dimanche',
    category: 'matcha',
    type: 'Communauté & food',
    city: 'Marseille',
    location: 'Marseille · Cours Julien',
    date: 'Dimanche 7 décembre',
    time: '11:30',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Amies réunies autour d’une table',
    description: 'Un dimanche simple : une boisson chaude, une grande table et quelques nouvelles personnes à rencontrer.'
  }
];
