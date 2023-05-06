import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentZoneRoutingModule } from './student-zone-routing.module';
import { StudentZoneHomeComponent } from './student-zone-home/student-zone-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentZoneHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentZoneRoutingModule
  ]
})
export class StudentZoneModule { }
