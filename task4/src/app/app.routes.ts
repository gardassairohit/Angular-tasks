import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { EducationalDetailsComponent } from './components/educational-details/educational-details.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { FamilyDetailsComponent } from './components/family-details/family-details.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'personal-details', component: PersonalDetailsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'educational-details', component: EducationalDetailsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'achievements', component: AchievementsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'family-details', component: FamilyDetailsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];