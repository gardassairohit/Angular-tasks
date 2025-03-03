import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent],
  template: `<app-employee-list></app-employee-list>`
})
export class AppComponent {}
