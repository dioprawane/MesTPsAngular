import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-list-assignments',
  templateUrl: './list-assignments.component.html',
  styleUrls: ['./list-assignments.component.css']
})
export class ListAssignmentsComponent implements OnInit {

  assignments:Assignment[] = [];
  afficheMessage: boolean = false;
  currentUser: any = null;
  
  assignmentSelectionne?:Assignment;

  constructor(private assignmentService: AssignmentsService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getAssignments();
    this.authService.userObservable$.subscribe(user => {
      this.currentUser = user;

      // Vérifier si l'utilisateur est connecté
      if(!this.currentUser) {
        this.router.navigate(['/home']);
      }
    });
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
