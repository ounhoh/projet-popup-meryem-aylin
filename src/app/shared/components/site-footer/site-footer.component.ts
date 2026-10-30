import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BrandLogoComponent } from '../brand-logo/brand-logo.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [BrandLogoComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();
}
