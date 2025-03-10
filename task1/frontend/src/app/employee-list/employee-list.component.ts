import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: any[] = [];
  filteredEmployees: any[] = [];

  constructor(private statusFilterService: FilterService) {}

  ngOnInit() {
    this.statusFilterService.statusChanges$.subscribe((selectedStatuses) => {
      this.filterEmployees(selectedStatuses);
    });
    this.filteredEmployees = this.employees; // Initial display
  }

  filterEmployees(selectedStatuses: string[]) {
    if (selectedStatuses.length === 0) {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter((emp) => selectedStatuses.includes(emp.status));
    }
  }
}
