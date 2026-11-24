export type EventCategory = 'matcha' | 'mode' | 'beaute' | 'seconde-main';

export interface EventCoordinates {
  lat: number;
  lng: number;
}

export interface PopUpEvent {
  id: string;
  title: string;
  category: EventCategory;
  type: string;
  city: string;
  location: string;
  coordinates: EventCoordinates;
  date: string;
  time: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const EVENT_CATEGORY_LABELS: Record<EventCategory, string> = {
  matcha: 'Matcha & food',
  mode: 'Mode',
  beaute: 'Beauté',
  'seconde-main': 'Seconde main'
};
