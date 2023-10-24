import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-delete-assignments',
  templateUrl: './delete-assignments.component.html',
  styleUrls: ['./delete-assignments.component.css']
})
export class DeleteAssignmentsComponent implements OnInit {

  @Output() deleteAssignment = new EventEmitter<Assignment>();
  @Input() assignmentDelete: Assignment | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteAssignment.emit(this.assignmentDelete);
  }

}
