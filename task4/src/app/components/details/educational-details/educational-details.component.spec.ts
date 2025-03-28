import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalDetailsComponent } from './educational-details.component';

describe('EducationalDetailsComponent', () => {
  let component: EducationalDetailsComponent;
  let fixture: ComponentFixture<EducationalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
