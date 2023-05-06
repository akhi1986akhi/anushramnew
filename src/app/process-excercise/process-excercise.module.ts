import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProcessExcerciseDashComponent} from './process-excercise-dash/process-excercise-dash.component'
import { ProcessExcerciseRoutingModule } from './process-excercise-routing.module';
import { ProcessExcerciseDetailsComponent } from './process-excercise-details/process-excercise-details.component';
import { ExResRepoComponent } from './process-excercise-details/ex-res-repo/ex-res-repo.component';
import { SynopsisIndexSampleComponent } from './process-excercise-details/synopsis-index-sample/synopsis-index-sample.component';
import { ProcessExcerciseTwoComponent } from './process-excercise-two/process-excercise-two.component';
import { ProcessExcerciseThreeComponent } from './process-excercise-three/process-excercise-three.component';
import { ProcessExcerciseFourComponent } from './process-excercise-four/process-excercise-four.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaOfInterestComponent } from './process-excercise-details/stage-two/area-of-interest/area-of-interest.component';


console.log('process excercise module')
@NgModule({
  declarations: [
    ProcessExcerciseDashComponent,
    ProcessExcerciseDetailsComponent,
    ExResRepoComponent,
    SynopsisIndexSampleComponent,
    ProcessExcerciseTwoComponent,
    ProcessExcerciseThreeComponent,
    ProcessExcerciseFourComponent,
    AreaOfInterestComponent,

  ],
  imports: [
    CommonModule,
    ProcessExcerciseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProcessExcerciseModule { }
