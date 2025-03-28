import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievementsForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.achievementsForm = this.fb.group({
      awards: this.fb.array([this.fb.control('', Validators.required)]),
      certifications: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  get awards(): FormArray {
    return this.achievementsForm.get('awards') as FormArray;
  }

  get certifications(): FormArray {
    return this.achievementsForm.get('certifications') as FormArray;
  }

  addAward() {
    this.awards.push(this.fb.control('', Validators.required));
  }

  removeAward(index: number) {
    if (this.awards.length > 1) {
      this.awards.removeAt(index);
    }
  }

  addCertification() {
    this.certifications.push(this.fb.control('', Validators.required));
  }

  removeCertification(index: number) {
    if (this.certifications.length > 1) {
      this.certifications.removeAt(index);
    }
  }

  saveDetails() {
    if (this.achievementsForm.invalid) {
      return; // Prevent submission if form is invalid
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const updatedUser = { ...currentUser, achievements: this.achievementsForm.value };

    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.router.navigate(['/details/family-details']);
    });
  }
}
