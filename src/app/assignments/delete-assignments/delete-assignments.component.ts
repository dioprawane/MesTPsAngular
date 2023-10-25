import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-delete-assignments',
  templateUrl: './delete-assignments.component.html',
  styleUrls: ['./delete-assignments.component.css']
})
export class DeleteAssignmentsComponent implements OnInit {

  @Output() deleteAssignment = new EventEmitter<Assignment>();
  @Input() assignmentDelete: Assignment | undefined;

  assignments:Assignment[] = [];
  afficheMessage: boolean = false;
  currentUser: any = null;
  assignmentTransmis?: Assignment;
  
  selectedAssignment: Assignment | null = null;



  constructor(
    private assignmentService: AssignmentsService, 
    private authService: AuthService, 
    private router:Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getAssignments();
    this.getAssignment();
    this.authService.userObservable$.subscribe(user => {
      this.currentUser = user;

      // Vérifier si l'utilisateur est connecté
      if(!this.currentUser) {
        this.router.navigate(['/home']);
      }
    });
  }

  //Recuperer de assignments.component.ts
  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  onDelete(): void {
    this.deleteAssignment.emit(this.assignmentDelete);
  }

  onDeleteAssignment() {
    // ici on doit le supprimer de la liste des assignments
    // soucis : la liste n'est pas là mais dans le composant parent
    // on va donc envoyer un message au parent pour lui dire de supprimer
    // l'assignment de la liste. Cet assignment est égal à this.assignmentTransmis
    this.assignmentService.deleteAssignment(this.selectedAssignment).subscribe(message => console.log(message));

    // pour cacher le détail de l'assignment dans la page
    //this.assignmentTransmis = null;

    this.router.navigate(['/delete']);
  }

  getColor(a: any) {
    if (a.rendu) return 'green';
    else return 'red';
  }


  onAssignmentClicked(a: Assignment) {
    this.selectedAssignment = a;
  }
  
  
  isAdmin() : boolean {
    return this.authService.isAdmin();
  }

}
