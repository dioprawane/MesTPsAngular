import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService:LoggingService) { }

  assignments:Assignment[] = [
    {
      id: 1,
      nom:"T1 Web Components",
      dateDeRendu: new Date('2023-09-17'),
      rendu:true,
    },
    {
      id: 2,
      nom: "NodeJS",
      dateDeRendu: new Date('2023-10-17'),
      rendu:true,
    },
    {
      id: 3,
      nom: "MongoDB",
      dateDeRendu: new Date('2023-01-17'),
      rendu:false
    },
  ];

  getAssignments():Observable<Assignment[]> {
    return of (this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<String> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment?.nom, "ajouté");

    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<String> {
    return of('Assignment service : assignment modifié !');
  }

  deleteAssignment(assignment: Assignment): Observable<String> {
    /*// position de l'assignment à supprimer, dans le tableau
    const pos = this.assignments.indexOf(a);

    // on le supprime avec ma méthode standard splice
    // sur les tableaux javascript. Elle prend en parametre
    // la position de l'élément à supprimer et le nombre d'éléments
    // à supprimer à partir de cette position
    this.assignments.splice(pos, 1);*/
    const index = this.assignments.indexOf(assignment, 0);
    if (index > -1) {
      this.assignments.splice(index, 1);
    }
    return of('Assignment service : assignment supprimé !');
  }

  /*
  Fonction qui renvoie comme Observable l'assignment dont l'id est passé en paramètre
  ou undefined si l'assignment n'est pas trouvé
   */
  getAssignment(id: number): Observable<Assignment | undefined> {

    const a:Assignment|undefined = this.assignments.find(a => a.id === id);

    return of(a);

}

}
