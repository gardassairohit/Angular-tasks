import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit {

  // Inject the CustomerService
  private customerService = inject(CustomerService);

  //Customers list
  customers!: Customer[];
  ngOnInit(): void{
    this.customerService.get().subscribe(
      data => {
        console.log('Customers:',data);
        this.customers = data;
      },
      error => {
        console.log('Error:',error);
      }
    );
  }

  
  onDeleteClick(customerId: string): void {
    this.customerService.delete(customerId).subscribe(() => {
      this.customers = this.customers.filter(customer => customer._id !== customerId);
    });
  }

}
