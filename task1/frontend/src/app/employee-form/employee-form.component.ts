import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  // Form group for handling employee form data
  employeeForm: FormGroup;

  // Event emitter to send form data to the parent component
  @Output() employeeAdded = new EventEmitter<Employee>();

  constructor(private fb: FormBuilder) {
    // Define form fields and add validations
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required]
    });
  }

  // Submit form and emit valid data to parent
  submitForm() {
    if (this.employeeForm.valid) {
      this.employeeAdded.emit(this.employeeForm.value);
      this.employeeForm.reset(); // Clear form after submission
    }
  }
}
