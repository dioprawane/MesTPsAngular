import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent {
  // Evenement qu'on enverra au père avec la soumission
  // du formulaire
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // pour le formulaire
  nomDevoir=""
  dateDeRendu?:Date=undefined;

  onSubmit(event:any) {

    let a = new Assignment();
    a.nom = this.nomDevoir;
    if(this.dateDeRendu)
      a.dateDeRendu = this.dateDeRendu;

    a.rendu = false;

    //this.assignments.push(a);
    this.nouvelAssignment.emit(a);
  }

}