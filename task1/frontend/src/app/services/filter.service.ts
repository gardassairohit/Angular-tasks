import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private selectedStatuses = new BehaviorSubject<string[]>([]);
  statusChanges$ = this.selectedStatuses.asObservable();

  updateSelectedStatuses(statuses: string[]) {
    this.selectedStatuses.next(statuses);
  }
}
