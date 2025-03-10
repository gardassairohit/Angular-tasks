import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private selectedStatuses: string[] = [];
  // Observable to store selected statuses for filtering
  private statusSubject = new BehaviorSubject<string[]>(this.selectedStatuses);

  getStatusChanges(): Observable<string[]> {
    return this.statusSubject.asObservable();
  }

  // Toggle selection of statuses and update filter
  toggleStatus(status: string): void {
    if (this.selectedStatuses.includes(status)) {
      this.selectedStatuses = this.selectedStatuses.filter(s => s !== status);
    } else {
      this.selectedStatuses.push(status);
    }
    this.statusSubject.next(this.selectedStatuses);
  }
}
