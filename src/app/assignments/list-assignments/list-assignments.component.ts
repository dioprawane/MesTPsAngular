import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-list-assignments',
  templateUrl: './list-assignments.component.html',
  styleUrls: ['./list-assignments.component.css']
})
export class ListAssignmentsComponent {

  @Input()
  assignmentTransmis?:Assignment;

  onAssignmentRendu() {
    if(this.assignmentTransmis)
      this.assignmentTransmis.rendu = true;
  }

}
