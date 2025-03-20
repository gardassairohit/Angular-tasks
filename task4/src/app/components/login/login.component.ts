import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(users => {
      console.log('Login - users:', users); // Debugging
      if (users.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        if (!users[0].personalDetails) {
          this.router.navigate(['/personal-details']);
        }
        else if(!users[0].educationalDetails){
          this.router.navigate(['/educational-details']);
        }        
        else if(!users[0].achievements){
          this.router.navigate(['/achievements']);
        }
        else if(!users[0].familyDetails){
          this.router.navigate(['/family-details']);
        } 
        else {
          this.router.navigate(['/user-list']);
        }
      } else {
        alert('Invalid credentials');
      }
    });
  }
}