import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-organizer-cta',
  standalone: true,
  templateUrl: './organizer-cta.component.html',
  styleUrl: './organizer-cta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizerCtaComponent {
  @Output() readonly organizerRequested = new EventEmitter<void>();
}
