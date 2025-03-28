import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  saveDetails() {
    if (this.personalDetailsForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    let personalDetails = this.personalDetailsForm.value;
    
    // Format date to DD/MM/YYYY
    const date = new Date(personalDetails.dateOfBirth);
    personalDetails.dateOfBirth = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const updatedUser = { ...currentUser, personalDetails };
    
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.router.navigate(['/details/educational-details']);
    });
  }
}
