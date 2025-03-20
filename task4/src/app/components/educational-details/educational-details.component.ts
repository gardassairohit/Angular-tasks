import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-educational-details',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent {
  educationalDetails = {
    highestDegree: '',
    institution: '',
    yearOfGraduation: null
  };

  constructor(private userService: UserService, private router: Router) {}

  saveDetails() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // Merge educationalDetails with existing user data
    const updatedUser = { ...currentUser, educationalDetails: this.educationalDetails };
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update localStorage
      this.router.navigate(['/achievements']);
    });
  }
}