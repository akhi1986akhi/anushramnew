import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewConnectionComponent } from './overview-connection.component';

describe('OverviewConnectionComponent', () => {
  let component: OverviewConnectionComponent;
  let fixture: ComponentFixture<OverviewConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
