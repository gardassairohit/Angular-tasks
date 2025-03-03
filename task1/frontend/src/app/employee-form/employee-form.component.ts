import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Output() employeeAdded = new EventEmitter<any>();
  
  newEmployee = {
    firstName: '',
    lastName: '',
    dob: '',
    bloodGroup: '',
    mobile: '',
    email: ''
  };
  
  submitForm() {
    this.employeeAdded.emit({ ...this.newEmployee });
    this.newEmployee = { firstName: '', lastName: '', dob: '', bloodGroup: '', mobile: '', email: '' };
  }
}
