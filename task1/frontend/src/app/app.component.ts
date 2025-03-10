import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent, StatusFilterComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: any[] = [];

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
}
