import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-educational-details',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent {
  educationalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.educationalDetailsForm = this.fb.group({
      highestDegree: ['', Validators.required],
      institution: ['', Validators.required],
      yearOfGraduation: ['', [Validators.required, Validators.pattern('^(19|20)\\d{2}$')]] // Ensures valid year
    });
  }

  saveDetails() {
    if (this.educationalDetailsForm.invalid) {
      return;
    }

    const formData = this.educationalDetailsForm.value;
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const updatedUser = { ...currentUser, educationalDetails: formData };

    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.router.navigate(['/details/achievements']);
    });
  }
}
