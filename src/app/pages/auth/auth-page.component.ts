import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPageComponent {
  mode: 'login' | 'signup' = 'login';
  statusMessage = '';

  setMode(mode: 'login' | 'signup'): void {
    this.mode = mode;
    this.statusMessage = '';
  }

  submitPreview(): void {
    this.statusMessage = 'La connexion sera bientôt disponible.';
  }

  googlePreview(): void {
    this.statusMessage = 'La connexion avec Google sera bientôt disponible.';
  }
}