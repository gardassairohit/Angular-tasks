import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { error } from 'console';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [
    CommonModule
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  
  private activatedRouter = inject(ActivatedRoute);

  private customerService = inject(CustomerService);

  customer!: Customer;
  customerId!: string;

  ngOnInit(): void {
    //GET Customer ID from URL
    this.customerId = this.activatedRouter.snapshot.params['id'];
    if(this.customerId){
      //GET the Customer info
      this.customerService.getById(this.customerId).subscribe(
        data => {
          this.customer = data;
        },
        error => {
          console.log('Error:', error);
        }
  );
    console.log('Customer ID:', this.customerId);
    }
  }
}
