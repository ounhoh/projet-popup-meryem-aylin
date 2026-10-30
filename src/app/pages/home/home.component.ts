import { ChangeDetectionStrategy, Component } from '@angular/core';

import { POP_UP_EVENTS } from '../../data/events.data';
import { PopUpEvent } from '../../models/event.model';
import { AccountModalComponent } from '../../shared/components/account-modal/account-modal.component';
import { EventExplorerComponent } from '../../shared/components/event-explorer/event-explorer.component';
import { EventModalComponent } from '../../shared/components/event-modal/event-modal.component';
import { ExperienceSectionComponent } from '../../shared/components/experience-section/experience-section.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { NewsletterComponent } from '../../shared/components/newsletter/newsletter.component';
import { OrganizerCtaComponent } from '../../shared/components/organizer-cta/organizer-cta.component';
import { SiteFooterComponent } from '../../shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/components/site-header/site-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccountModalComponent,
    EventExplorerComponent,
    EventModalComponent,
    ExperienceSectionComponent,
    HeroSectionComponent,
    NewsletterComponent,
    OrganizerCtaComponent,
    SiteFooterComponent,
    SiteHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly events = POP_UP_EVENTS;
  selectedEvent: PopUpEvent | null = null;
  accountModalOpen = false;
  organizerModalOpen = false;

  openEvent(event: PopUpEvent): void {
    this.selectedEvent = event;
  }

  closeEvent(): void {
    this.selectedEvent = null;
  }

  openAccount(): void {
    this.accountModalOpen = true;
  }

  openOrganizer(): void {
    this.organizerModalOpen = true;
  }

  closeAccount(): void {
    this.accountModalOpen = false;
  }

  closeOrganizer(): void {
    this.organizerModalOpen = false;
  }
}
