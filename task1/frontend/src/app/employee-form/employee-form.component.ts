import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  @Output() employeeAdded = new EventEmitter<any>();
  employee = {
    firstName: '',
    lastName: '',
    dob: '',
    bloodGroup: '',
    mobile: '',
    email: '',
    status: 'Pending',
  };

  statusOptions = ['Completed', 'Pending', 'In Progress', 'Cancelled'];

  addEmployee() {
    if (this.employee.firstName && this.employee.lastName) {
      this.employeeAdded.emit({ ...this.employee });
      this.employee = {
        firstName: '',
        lastName: '',
        dob: '',
        bloodGroup: '',
        mobile: '',
        email: '',
        status: 'Pending',
      };
    }
  }
}
