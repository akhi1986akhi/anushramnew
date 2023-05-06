import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorNavigationComponent } from './mentor-navigation.component';

describe('MentorNavigationComponent', () => {
  let component: MentorNavigationComponent;
  let fixture: ComponentFixture<MentorNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
