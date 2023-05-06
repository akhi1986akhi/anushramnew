import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentZoneHomeComponent } from './student-zone-home.component';

describe('StudentZoneHomeComponent', () => {
  let component: StudentZoneHomeComponent;
  let fixture: ComponentFixture<StudentZoneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentZoneHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentZoneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
