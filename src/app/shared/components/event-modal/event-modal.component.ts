import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { PopUpEvent } from '../../../models/event.model';

@Component({
  selector: 'app-event-modal',
  standalone: true,
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventModalComponent {
  @Input() event: PopUpEvent | null = null;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly accountRequested = new EventEmitter<void>();

  closeFromBackdrop(target: EventTarget | null, currentTarget: EventTarget | null): void {
    if (target === currentTarget) {
      this.closed.emit();
    }
  }
}
