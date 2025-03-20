import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // Merge personalDetails with existing user data
    const updatedUser = { ...currentUser, personalDetails: this.personalDetails };
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update localStorage
      this.router.navigate(['/educational-details']);
    });
  }
}