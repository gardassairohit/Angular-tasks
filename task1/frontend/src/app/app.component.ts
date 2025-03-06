import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent],
  templateUrl: `./app.component.html`
})
export class AppComponent {}
