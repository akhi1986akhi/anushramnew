import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewCardComponent } from './mentor-view-card.component';

describe('MentorViewCardComponent', () => {
  let component: MentorViewCardComponent;
  let fixture: ComponentFixture<MentorViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorViewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
