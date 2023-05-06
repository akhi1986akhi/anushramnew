import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MCQRoutingModule } from './mcq-routing.module';
import { McqDashComponent } from './mcq-dash/mcq-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    McqDashComponent
  ],
  imports: [
    CommonModule,
    MCQRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MCQModule { }
