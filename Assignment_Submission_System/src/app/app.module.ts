import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCardModule, MatCheckbox, MatCheckboxModule, MatSlideToggle, MatSlideToggleModule, MatTabsModule, MatStepperModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsgnCmpComponent } from './asgn-cmp/asgn-cmp.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetialComponent } from './assignment-detial/assignment-detial.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from './shared/assignments.service';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';


const routes: Routes =[
  {path :'',component:AsgnCmpComponent},
  {path :'home',component:AsgnCmpComponent},
  {path :'add',component:AddAssignmentComponent},
  {path :'assignments/:id',component:AssignmentDetialComponent},
  {path :'assignments/:id/edit',
  canActivate: [AuthGuard] ,component:EditAssignmentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AsgnCmpComponent,
    SubmittedDirective,
    AssignmentDetialComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    SnackbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    HttpClientModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    ScrollingModule,
    DragDropModule
  ],
  entryComponents:[
    SnackbarComponent
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
