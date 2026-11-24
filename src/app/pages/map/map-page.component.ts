import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { POP_UP_EVENTS } from '../../data/events.data';
import { EventCategory, EVENT_CATEGORY_LABELS, PopUpEvent } from '../../models/event.model';
import { EventMapComponent } from '../../shared/components/event-map/event-map.component';
import { EventModalComponent } from '../../shared/components/event-modal/event-modal.component';

type CategoryFilter = EventCategory | 'all';

interface MapFilter {
  value: CategoryFilter;
  label: string;
}

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [EventMapComponent, EventModalComponent, FormsModule, RouterLink],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent {
  readonly events = POP_UP_EVENTS;
  readonly filters: MapFilter[] = [
    { value: 'all', label: 'Toutes les pépites' },
    { value: 'matcha', label: EVENT_CATEGORY_LABELS.matcha },
    { value: 'mode', label: EVENT_CATEGORY_LABELS.mode },
    { value: 'beaute', label: EVENT_CATEGORY_LABELS.beaute },
    { value: 'seconde-main', label: EVENT_CATEGORY_LABELS['seconde-main'] }
  ];

  activeFilter: CategoryFilter = 'all';
  searchTerm = '';
  selectedEvent: PopUpEvent | null = this.events[0] ?? null;
  modalEvent: PopUpEvent | null = null;

  get filteredEvents(): PopUpEvent[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.events.filter((event) => {
      const matchesCategory =
        this.activeFilter === 'all' || event.category === this.activeFilter;
      const matchesSearch =
        !search ||
        event.city.toLowerCase().includes(search) ||
        event.title.toLowerCase().includes(search) ||
        event.location.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }

  selectFilter(filter: CategoryFilter): void {
    this.activeFilter = filter;
    this.keepSelectedEventVisible();
  }

  selectEvent(event: PopUpEvent): void {
    this.selectedEvent = event;
  }

  clearSelectedEvent(): void {
    this.selectedEvent = null;
  }

  openEventDetails(): void {
    this.modalEvent = this.selectedEvent;
  }

  closeEventDetails(): void {
    this.modalEvent = null;
  }

  private keepSelectedEventVisible(): void {
    if (!this.selectedEvent || !this.filteredEvents.some((event) => event.id === this.selectedEvent?.id)) {
      this.selectedEvent = this.filteredEvents[0] ?? null;
    }
  }
}
