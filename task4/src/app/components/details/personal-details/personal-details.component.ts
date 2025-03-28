import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    FormsModule,
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
  personalDetails = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
  };
  
  constructor(private userService: UserService, private router: Router) {}

  saveDetails() {
    if (!this.personalDetails.firstName.trim() || !this.personalDetails.lastName.trim() || !this.personalDetails.dateOfBirth || !this.personalDetails.gender) {
      alert('Please fill in all required fields correctly.');
      return;
    }
  
    // Format date to DD/MM/YYYY before storing
    const date = new Date(this.personalDetails.dateOfBirth);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    this.personalDetails.dateOfBirth = formattedDate;
  
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    const updatedUser = { ...currentUser, personalDetails: this.personalDetails };
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.router.navigate(['/details/educational-details']);
    });
  }  
}  
