import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent {}
