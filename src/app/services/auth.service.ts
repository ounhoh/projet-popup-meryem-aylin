import { Injectable, computed, signal } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly client: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey
  );

  readonly user = signal<User | null>(null);
  readonly firstName = computed(() => {
    const user = this.user();
    const meta = user?.user_metadata ?? {};
    const name = (meta['first_name'] || meta['given_name'] || meta['full_name'] || meta['name']) as string | undefined;
    return name?.split(' ')[0] || user?.email?.split('@')[0] || '';
  });

  constructor() {
    this.client.auth.getSession().then(({ data }) => this.user.set(data.session?.user ?? null));
    this.client.auth.onAuthStateChange((_event, session) => this.user.set(session?.user ?? null));
  }

  async signIn(email: string, password: string): Promise<string | null> {
    const { error } = await this.client.auth.signInWithPassword({ email, password });
    if (!error) return null;
    if (error.message.includes('Email not confirmed')) {
      return 'Ton e-mail n’est pas encore confirmé : clique sur le lien reçu par mail.';
    }
    if (error.message.includes('Invalid login credentials')) {
      return 'E-mail ou mot de passe incorrect (ou compte non confirmé).';
    }
    return error.message;
  }

  async signUp(email: string, password: string, firstName: string): Promise<{ error: string | null; needsConfirmation: boolean }> {
    const { data, error } = await this.client.auth.signUp({
      email,
      password,
      options: { data: { first_name: firstName } }
    });
    return { error: error ? error.message : null, needsConfirmation: !error && !data.session };
  }

  async resetPassword(email: string): Promise<string | null> {
    const { error } = await this.client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/auth'
    });
    return error ? error.message : null;
  }

  async signInWithGoogle(): Promise<string | null> {
    const { error } = await this.client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    });
    return error ? error.message : null;
  }

  async signOut(): Promise<void> {
    await this.client.auth.signOut();
  }
}
