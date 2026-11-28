import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPageComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly mode = signal<'login' | 'signup'>('login');
  readonly statusMessage = signal('');
  readonly loading = signal(false);
  readonly showPassword = signal(false);

  setMode(mode: 'login' | 'signup'): void {
    this.mode.set(mode);
    this.statusMessage.set('');
  }

  async submit(form: HTMLFormElement): Promise<void> {
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    const password = String(data.get('password') ?? '');
    const firstName = String(data.get('firstName') ?? '').trim();

    this.loading.set(true);
    this.statusMessage.set('');

    if (this.mode() === 'signup') {
      const { error, needsConfirmation } = await this.auth.signUp(email, password, firstName);
      if (error) {
        this.statusMessage.set(error);
      } else if (needsConfirmation) {
        this.statusMessage.set('Compte créé ! Vérifie ta boîte mail pour confirmer ton adresse.');
      } else {
        await this.router.navigateByUrl('/');
      }
    } else {
      const error = await this.auth.signIn(email, password);
      if (error) {
        this.statusMessage.set(error);
      } else {
        await this.router.navigateByUrl('/');
      }
    }

    this.loading.set(false);
  }

  async forgotPassword(email: string): Promise<void> {
    if (!email.trim()) {
      this.statusMessage.set('Saisis ton adresse e-mail pour récupérer ton mot de passe.');
      return;
    }
    const error = await this.auth.resetPassword(email.trim());
    this.statusMessage.set(error ?? 'Un e-mail de réinitialisation vient de t’être envoyé.');
  }

  async google(): Promise<void> {
    const error = await this.auth.signInWithGoogle();
    if (error) {
      this.statusMessage.set(error);
    }
  }
}