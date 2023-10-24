import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {
  titre = "Formulaire d'ajout d'un devoir";
  ajoutActive = false;
  color = 'green';
  id="monParagraphe";
  assignments:Assignment[] = [];
  
  assignmentSelectionne?:Assignment;

  constructor(private assignmentService:AssignmentsService) { } 

  ngOnInit() {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

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

  /*onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }*/

  /*onNouvelAssignment(event:Assignment) {
    //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));

    this.formVisible = false;
  }*/

  onDeleteAssignment(a:Assignment) {
    this.assignmentService.deleteAssignment(a).subscribe(message => console.log(message));
  }


}
