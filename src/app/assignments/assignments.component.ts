import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

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
  //boutonDesactive = true;
  //nomDevoir = "";
  //dateRendu = new Date;

  // pour afficher tantot le formulaire,
  // tantot la liste des assignments
  formVisible = false;
  
  assignmentSelectionne?:Assignment;

  //constructor() { } 

  ngOnInit() {
    console.log(" AVANT RENDU DE LA PAGE !");
    /*setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);*/
    
  }

  /*onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
    //console.log(this.nomDevoir);
    //event.preventDefault();
  }*/

  assignments: Assignment[] = [
    {
      nom:"T1 Web Components",
      dateDeRendu: new Date('2023-09-17'),
      rendu:true,
    },
    {
      nom: "Devoir NodeJS",
      dateDeRendu: new Date('2023-10-17'),
      rendu:true,
    },
    {
      nom: "Devoir MongoDB",
      dateDeRendu: new Date('2023-01-17'),
      rendu:false
    },
  ];

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

  onAddAssignmentBtnClick() {
  this.formVisible = true;
  }

  onNouvelAssignment(event:Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }


}
