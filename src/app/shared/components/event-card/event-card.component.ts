import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { PopUpEvent } from '../../../models/event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent {
  @Input({ required: true }) event!: PopUpEvent;
  @Output() readonly selected = new EventEmitter<PopUpEvent>();

  saved = false;

  toggleSaved(event: MouseEvent): void {
    event.stopPropagation();
    this.saved = !this.saved;
  }
}
