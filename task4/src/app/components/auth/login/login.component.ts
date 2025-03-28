import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Reactive Forms modules
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; // Define the form group

  constructor(
    private fb: FormBuilder, // Inject FormBuilder
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) { // Check if the form is valid
      const { username, password } = this.loginForm.value; // Get form values
      this.authService.login(username, password).subscribe(users => {
        console.log('Login - users:', users); // Debugging
        if (users.length > 0) {
          localStorage.setItem('currentUser', JSON.stringify(users[0]));
          if (!users[0].personalDetails) {
            this.router.navigate(['/details/personal-details']);
          } else if (!users[0].educationalDetails) {
            this.router.navigate(['/details/educational-details']);
          } else if (!users[0].achievements) {
            this.router.navigate(['/details/achievements']);
          } else if (!users[0].familyDetails) {
            this.router.navigate(['details/family-details']);
          } else {
            this.router.navigate(['user/user-list']);
          }
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
}