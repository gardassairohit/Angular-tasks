import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeFormComponent } from './app/employee-form/employee-form.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
