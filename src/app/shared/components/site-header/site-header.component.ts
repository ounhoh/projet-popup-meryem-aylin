import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { BrandLogoComponent } from '../brand-logo/brand-logo.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [BrandLogoComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  @Output() readonly accountRequested = new EventEmitter<void>();

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  requestAccount(): void {
    this.closeMenu();
    this.accountRequested.emit();
  }
}
