import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./client/client.component') },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes') }
];
