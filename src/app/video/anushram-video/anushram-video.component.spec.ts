import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnushramVideoComponent } from './anushram-video.component';

describe('AnushramVideoComponent', () => {
  let component: AnushramVideoComponent;
  let fixture: ComponentFixture<AnushramVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnushramVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnushramVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
