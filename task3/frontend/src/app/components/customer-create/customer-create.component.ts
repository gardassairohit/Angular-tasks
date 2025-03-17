import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../services/customer.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-create',
  imports: [
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})
export class CustomerCreateComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.customerService.post(this.form.value).subscribe(
        data => {
        console.log('Customer created:', data);
        this.router.navigate(['/']);
      },
        error => {
          console.log('Error:', error);
        }
      );
    }
  }
}
