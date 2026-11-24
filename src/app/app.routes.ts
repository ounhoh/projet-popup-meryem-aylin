import { Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth/auth-page.component';
import { MapPageComponent } from './pages/map/map-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: '**', redirectTo: '' }
];
