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
  selector: 'app-family-details',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent {
  familyForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.familyForm = this.fb.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      siblings: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  get siblings(): FormArray {
    return this.familyForm.get('siblings') as FormArray;
  }

  addSibling() {
    this.siblings.push(this.fb.control('', Validators.required));
  }

  removeSibling(index: number) {
    if (this.siblings.length > 1) {
      this.siblings.removeAt(index);
    }
  }

  saveDetails() {
    if (this.familyForm.invalid) {
      return; // Prevent submission if form is invalid
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const updatedUser = { ...currentUser, familyDetails: this.familyForm.value };

    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.router.navigate(['/user/user-list']);
    });
  }
}
