import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
})
export class StatusFilterComponent {
  statusOptions = ['Completed', 'Pending', 'In Progress', 'Cancelled'];
  selectedStatuses: string[] = [];

  constructor(private statusFilterService: FilterService) {}

  toggleStatus(status: string) {
    if (this.selectedStatuses.includes(status)) {
      this.selectedStatuses = this.selectedStatuses.filter((s) => s !== status);
    } else {
      this.selectedStatuses.push(status);
    }
    this.statusFilterService.updateSelectedStatuses(this.selectedStatuses);
  }
}
