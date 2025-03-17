import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent {
  private activatedRouter = inject(ActivatedRoute);
  
    private customerService = inject(CustomerService);
  
    customer!: Customer;
    customerId!: string;

    form!: FormGroup;
    private router = inject(Router);
  
    ngOnInit(): void {
      //GET Customer ID from URL
      this.customerId = this.activatedRouter.snapshot.params['id'];

      //Init form
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required)
      });

      if(this.customerId){
        //GET the Customer info
        this.customerService.getById(this.customerId).subscribe(
          data => {
            this.customer = data;
            this.form.patchValue(data);
          },
          error => {
            console.log('Error:', error);
          }
        );
      }

      
    }

    onSubmit(): void {
      if (this.form.valid) {
        this.customerService.put(this.customerId, this.form.value).subscribe(
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
