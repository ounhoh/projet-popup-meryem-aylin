import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as L from 'leaflet';

import { PopUpEvent } from '../../../models/event.model';

const FRANCE_CENTER: L.LatLngExpression = [46.6, 2.4];

@Component({
  selector: 'app-event-map',
  standalone: true,
  templateUrl: './event-map.component.html',
  styleUrl: './event-map.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventMapComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('mapContainer', { static: true })
  private readonly mapContainer!: ElementRef<HTMLDivElement>;

  @Input({ required: true }) events: PopUpEvent[] = [];
  @Input() fullPage = false;
  @Output() readonly eventSelected = new EventEmitter<PopUpEvent>();

  private map: L.Map | null = null;
  private markers: L.CircleMarker[] = [];
  private viewReady = false;

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.map = L.map(this.mapContainer.nativeElement, {
      zoomControl: false,
      minZoom: 4,
      maxZoom: 18
    }).setView(FRANCE_CENTER, 5.5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);
    this.renderMarkers();

    window.setTimeout(() => this.map?.invalidateSize(), 0);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.viewReady) {
      this.renderMarkers();
    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
    this.map = null;
    this.markers = [];
  }

  private renderMarkers(): void {
    if (!this.map) {
      return;
    }

    this.clearMarkers();

    if (this.events.length === 0) {
      this.map.setView(FRANCE_CENTER, 5.5);
      return;
    }

    const bounds = L.latLngBounds(
      this.events.map(
        (event) => [event.coordinates.lat, event.coordinates.lng] as [number, number]
      )
    );

    for (const event of this.events) {
      const marker = L.circleMarker(
        [event.coordinates.lat, event.coordinates.lng],
        {
          radius: 10,
          color: '#fffdf9',
          weight: 3,
          fillColor: '#c8694e',
          fillOpacity: 1
        }
      );

      marker.bindTooltip(event.title, {
        direction: 'top',
        offset: L.point(0, -8),
        opacity: 0.96
      });
      marker.on('click', () => this.eventSelected.emit(event));
      marker.addTo(this.map);
      this.markers.push(marker);
    }

    if (this.events.length === 1) {
      this.map.setView(
        [this.events[0].coordinates.lat, this.events[0].coordinates.lng],
        12
      );
    } else {
      this.map.fitBounds(bounds.pad(0.15), { maxZoom: 12 });
    }

    window.setTimeout(() => this.map?.invalidateSize(), 0);
  }

  private clearMarkers(): void {
    if (!this.map) {
      return;
    }

    for (const marker of this.markers) {
      marker.removeFrom(this.map);
    }

    this.markers = [];
  }
}
