import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentsComponent } from './list-assignments/list-assignments.component';
import { AddAssignmentsComponent } from './add-assignments/add-assignments.component';
import { ChangeAssignmentsComponent } from './change-assignments/change-assignments.component';
import { DeleteAssignmentsComponent } from './delete-assignments/delete-assignments.component';
import { TestsDataComponent } from './tests-data/tests-data.component';

const routes: Routes = [
  { path: 'list-devoirs', component:ListAssignmentsComponent /* Votre composant pour la liste des devoirs */ },
  { path: 'ajout-devoir', component:AddAssignmentsComponent /* Votre composant pour l'ajout d'un devoir */ },
  { path: 'modification-devoir', component:ChangeAssignmentsComponent /* Votre composant pour la modification d'un devoir */ },
  { path: 'suppression-devoir', component:DeleteAssignmentsComponent /* Votre composant pour la suppression d'un devoir */ },
  { path: 'generation-donnees', component:TestsDataComponent /* Votre composant pour la génération de données de test */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
