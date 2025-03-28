import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFilterComponent } from './status-filter.component';

describe('StatusFilterComponent', () => {
  let component: StatusFilterComponent;
  let fixture: ComponentFixture<StatusFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
