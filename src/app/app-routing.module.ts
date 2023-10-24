import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentsComponent } from './assignments/list-assignments/list-assignments.component';
import { AddAssignmentsComponent } from './assignments/add-assignments/add-assignments.component';
import { ChangeAssignmentsComponent } from './assignments/change-assignments/change-assignments.component';
import { DeleteAssignmentsComponent } from './assignments/delete-assignments/delete-assignments.component';
import { TestsDataComponent } from './assignments/tests-data/tests-data.component';
import { AssignmentsComponent } from './assignments/assignments.component';


@NgModule({
  imports: [MatButtonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
