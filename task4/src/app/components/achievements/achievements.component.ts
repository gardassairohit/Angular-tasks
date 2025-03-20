import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements = {
    awards: [],
    certifications: []
  };

  constructor(private userService: UserService, private router: Router) {}

  saveDetails() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // Merge achievements with existing user data
    const updatedUser = { ...currentUser, achievements: this.achievements };
    this.userService.updateUser(updatedUser).subscribe(() => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update localStorage
      this.router.navigate(['/family-details']);
    });
  }
}