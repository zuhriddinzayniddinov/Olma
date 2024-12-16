import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./admin.component'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      {
        path: 'users',
        loadComponent: () =>
          import('./domains/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
    ],
  },
] as Routes;
