import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './status-filter.component.html',
  styleUrl: './status-filter.component.css'
})
export class StatusFilterComponent {
  // Define available statuses
  statusOptions: string[] = ['Completed', 'Pending', 'In Progress', 'Cancelled'];

  constructor(private filterService: FilterService) {}

  toggleStatus(status: string): void {
    this.filterService.toggleStatus(status);
  }
}
