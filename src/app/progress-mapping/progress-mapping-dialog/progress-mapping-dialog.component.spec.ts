import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressMappingDialogComponent } from './progress-mapping-dialog.component';

describe('ProgressMappingDialogComponent', () => {
  let component: ProgressMappingDialogComponent;
  let fixture: ComponentFixture<ProgressMappingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressMappingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressMappingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
