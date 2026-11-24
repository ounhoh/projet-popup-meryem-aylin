import { Routes } from '@angular/router';

import { MapPageComponent } from './pages/map/map-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapPageComponent },
  { path: '**', redirectTo: '' }
];
