import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'details/achievements',
    loadComponent: () => import('./components/details/achievements/achievements.component').then(m => m.AchievementsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'details/educational-details',
    loadComponent: () => import('./components/details/educational-details/educational-details.component').then(m => m.EducationalDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'details/family-details',
    loadComponent: () => import('./components/details/family-details/family-details.component').then(m => m.FamilyDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'details/personal-details',
    loadComponent: () => import('./components/details/personal-details/personal-details.component').then(m => m.PersonalDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'user/user-list',
    loadComponent: () => import('./components/user/user-list/user-list.component').then(m => m.UserListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'user/user-details/:id',
    loadComponent: () => import('./components/user/user-details/user-details.component').then(m => m.UserDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full' // Default route
  }
];
