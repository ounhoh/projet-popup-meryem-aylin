import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent {
  email = '';
  submitted = false;

  submit(): void {
    this.submitted = true;
    this.email = '';
  }
}
