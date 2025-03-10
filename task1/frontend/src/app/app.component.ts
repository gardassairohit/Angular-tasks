import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeFormComponent, StatusFilterComponent, EmployeeListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  employees: Employee[] = [];

  // Add new employee to the list
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}
