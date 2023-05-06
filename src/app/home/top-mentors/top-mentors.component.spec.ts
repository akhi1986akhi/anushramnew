import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMentorsComponent } from './top-mentors.component';

describe('TopMentorsComponent', () => {
  let component: TopMentorsComponent;
  let fixture: ComponentFixture<TopMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
