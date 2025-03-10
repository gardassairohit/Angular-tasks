import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Employee } from '../models/employee.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.getStatusChanges().subscribe(selectedStatuses => {
      this.filterEmployees(selectedStatuses);
    });

    this.filteredEmployees = this.employees;
  }
  // Filter employees based on selected statuses
  filterEmployees(selectedStatuses: string[]): void {
    if (selectedStatuses.length === 0) {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(emp => selectedStatuses.includes(emp.status));
    }
  }
}
