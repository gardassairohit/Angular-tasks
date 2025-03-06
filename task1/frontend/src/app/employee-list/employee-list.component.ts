import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, NgFor, EmployeeFormComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    { firstName: 'John', lastName: 'Doe', dob: '1990-01-01', bloodGroup: 'O+', mobile: '1234567890', email: 'john@example.com' }
  ];

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
}
