import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsStationComponent } from './jobs-station.component';

describe('JobsStationComponent', () => {
  let component: JobsStationComponent;
  let fixture: ComponentFixture<JobsStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
