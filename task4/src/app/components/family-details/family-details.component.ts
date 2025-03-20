import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-family-details',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent {
  familyDetails = {
    fatherName: '',
    motherName: '',
    siblings: []
  };

  constructor(private userService: UserService, private router: Router) {}

  saveDetails() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // Merge familyDetails with existing user data
    const updatedUser = { ...currentUser, familyDetails: this.familyDetails };
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update localStorage
      this.router.navigate(['/user-list']);
    });
  }
}