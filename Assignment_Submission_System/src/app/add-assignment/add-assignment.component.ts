import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Assignment} from '../asgn-cmp/asgn-cmp.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  name : string;
  dueDate : Date;
//@Output() newAssignment = new EventEmitter<Assignment>();
newAssignment :Assignment;

  constructor(private assignService : AssignmentsService,
    private route: Router,public snackbar : MatSnackBar) { }

  ngOnInit() {
  }
  
  addAssign(){
    console.log('hiii'+this.name);
    const assignment = new Assignment();
    assignment.name= this.name;
    assignment.dueDate=this.dueDate;
    assignment.submitted=false;
    assignment.id =Math.floor(Math.random()*1000);
    //this.assignments.push(assignment);

    //this.newAssignment.emit(assignment);

    this.assignService.addAssignments(assignment).subscribe(res => this.route.navigate(['/home']));
this.openSnackBarComponent();

  }

openSnackBarComponent(){
  this.snackbar.openFromComponent(SnackbarComponent,
    {duration:1000});
}

}
