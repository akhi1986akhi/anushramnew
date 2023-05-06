import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressMappingRoutingModule } from './progress-mapping-routing.module';
import { ProgressMappingDashComponent } from './progress-mapping-dash/progress-mapping-dash.component';
import { ProgressMappingDialogComponent } from './progress-mapping-dialog/progress-mapping-dialog.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
console.log('progress-mapping module loaded')
@NgModule({
  declarations: [
    ProgressMappingDashComponent,
    ProgressMappingDialogComponent
  ],
  imports: [
    CommonModule,
    ProgressMappingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule 
  ]
})
export class ProgressMappingModule { }
