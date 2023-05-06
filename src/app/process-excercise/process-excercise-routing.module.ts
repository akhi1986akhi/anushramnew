import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessExcerciseDashComponent } from './process-excercise-dash/process-excercise-dash.component';
import { ProcessExcerciseDetailsComponent } from './process-excercise-details/process-excercise-details.component';
import { ProcessExcerciseFourComponent } from './process-excercise-four/process-excercise-four.component';
import { ProcessExcerciseThreeComponent } from './process-excercise-three/process-excercise-three.component';
import { ProcessExcerciseTwoComponent } from './process-excercise-two/process-excercise-two.component';


const routes: Routes = [
  {
    path:'research-course-work',component:ProcessExcerciseDashComponent

  },
  {
    path:'research-launcher',component:ProcessExcerciseTwoComponent

  },

  {
    path:'research-execution',component:ProcessExcerciseThreeComponent

  },
  {
    path:'research-defence',component:ProcessExcerciseFourComponent

  },
  {
    path:'excercise/:id',component:ProcessExcerciseDetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessExcerciseRoutingModule { }
