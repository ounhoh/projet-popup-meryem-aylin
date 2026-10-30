import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventCardComponent } from '../event-card/event-card.component';
import { EventCategory, EVENT_CATEGORY_LABELS, PopUpEvent } from '../../../models/event.model';

type FilterValue = EventCategory | 'all';

interface CategoryFilter {
  value: FilterValue;
  label: string;
}

@Component({
  selector: 'app-event-explorer',
  standalone: true,
  imports: [EventCardComponent, FormsModule],
  templateUrl: './event-explorer.component.html',
  styleUrl: './event-explorer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventExplorerComponent {
  @Input({ required: true }) events: PopUpEvent[] = [];
  @Output() readonly eventSelected = new EventEmitter<PopUpEvent>();

  readonly categoryFilters: CategoryFilter[] = [
    { value: 'all', label: 'Tout voir' },
    { value: 'matcha', label: EVENT_CATEGORY_LABELS.matcha },
    { value: 'mode', label: EVENT_CATEGORY_LABELS.mode },
    { value: 'beaute', label: EVENT_CATEGORY_LABELS.beaute },
    { value: 'seconde-main', label: EVENT_CATEGORY_LABELS['seconde-main'] }
  ];

  activeFilter: FilterValue = 'all';
  selectedCity = 'all';

  get filteredEvents(): PopUpEvent[] {
    return this.events.filter((event) => {
      const matchesCategory = this.activeFilter === 'all' || event.category === this.activeFilter;
      const matchesCity = this.selectedCity === 'all' || event.city === this.selectedCity;
      return matchesCategory && matchesCity;
    });
  }

  selectFilter(filter: FilterValue): void {
    this.activeFilter = filter;
  }

  trackById(_index: number, event: PopUpEvent): string {
    return event.id;
  }
}
