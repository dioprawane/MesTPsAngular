import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-assignments',
  templateUrl: './list-assignments.component.html',
  styleUrls: ['./list-assignments.component.css']
})
export class ListAssignmentsComponent implements OnInit {

  assignments:Assignment[] = [];
  
  assignmentSelectionne?:Assignment;

  constructor(private assignmentService: AssignmentsService, private router:Router) { }

  ngOnInit(): void {
    this.getAssignments();
  }
  //Recuperer de assignments.component.ts
  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  getDescription() {
    return 'Je suis un sous composant';
  }

  getColor(a: any) {
    if (a.rendu) return 'green';
    else return 'red';
  }


  assignmentClique(a:Assignment) {
    this.assignmentSelectionne = a;
  }

  onDeleteAssignment(a:Assignment) {
    this.assignmentService.deleteAssignment(a).subscribe(message => console.log(message));
  }

}
