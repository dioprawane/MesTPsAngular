import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  //titre = "Mon application Angular sur les assignments !";
  ajoutActive = false;
  nomDevoir = "";
  dateRendu = new Date;

  constructor() { } 

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
    
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
    //console.log(this.nomDevoir);
    //event.preventDefault();
  }

  assignments: Assignment[] = [
    {
      nom:"T1 Web Components",
      dateDeRendu: new Date('2023-09-17'),
      rendu:true
    },
    {
      nom: "Devoir NodeJS",
      dateDeRendu: new Date('2023-10-17'),
      rendu:true
    },
    {
      nom: "Devoir MongoDB",
      dateDeRendu: new Date('2023-01-17'),
      rendu:false
    }
  ]

}
