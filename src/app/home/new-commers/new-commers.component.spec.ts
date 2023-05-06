import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommersComponent } from './new-commers.component';

describe('NewCommersComponent', () => {
  let component: NewCommersComponent;
  let fixture: ComponentFixture<NewCommersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCommersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
