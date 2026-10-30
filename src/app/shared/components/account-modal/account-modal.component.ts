import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-modal.component.html',
  styleUrl: './account-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Input() description = '';
  @Output() readonly closed = new EventEmitter<void>();

  email = '';
  submitted = false;

  closeFromBackdrop(target: EventTarget | null, currentTarget: EventTarget | null): void {
    if (target === currentTarget) {
      this.closed.emit();
    }
  }

  submit(): void {
    this.submitted = true;
    this.email = '';
  }
}
