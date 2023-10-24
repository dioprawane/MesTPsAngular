import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ListAssignmentsComponent } from './assignments/list-assignments/list-assignments.component';
import { AddAssignmentsComponent } from './assignments/add-assignments/add-assignments.component';
import { ChangeAssignmentsComponent } from './assignments/change-assignments/change-assignments.component';
import { DeleteAssignmentsComponent } from './assignments/delete-assignments/delete-assignments.component';
import { TestsDataComponent } from './assignments/tests-data/tests-data.component';
import { DetailAssignmentsComponent } from './assignments/detail-assignments/detail-assignments.component';
import { FooterComponent } from './footer/footer.component';
import { AssignmentsService } from './shared/assignments.service';
import { LoggingService } from './shared/logging.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: AssignmentsComponent},
  { path: ' ', component: AssignmentsComponent},
  { path: 'connexion', component: AssignmentsComponent},
  { path: 'list', component: ListAssignmentsComponent},
  { path: 'add', component:AddAssignmentsComponent },
  { path: 'change', component: ChangeAssignmentsComponent },
  { path: 'delete', component: DeleteAssignmentsComponent },
  { path: 'tests', component: TestsDataComponent },
  { path: 'assignment/:id', component: DetailAssignmentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RenduDirective,
    NonRenduDirective,
    AssignmentsComponent,
    ListAssignmentsComponent,
    AddAssignmentsComponent,
    ChangeAssignmentsComponent,
    DeleteAssignmentsComponent,
    TestsDataComponent,
    DetailAssignmentsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AssignmentsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
