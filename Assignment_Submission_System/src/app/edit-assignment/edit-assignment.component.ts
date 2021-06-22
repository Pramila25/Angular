import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Assignment } from '../asgn-cmp/asgn-cmp.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
assignment :Assignment;
name:string;
dueDate:Date;
  constructor(private assignService:AssignmentsService,
 private route : ActivatedRoute, private router:Router
    ) {

     }

  ngOnInit() {
   const id = +this.route.snapshot.params.id;
   this.getAssignment(id);
   console.log(this.route.snapshot.queryParams);
   console.log(this.route.snapshot.fragment);
   this.route.queryParams.subscribe(params=>console.log(params));
   this.route.fragment.subscribe(frag => console.log(frag) );
  }
getAssignment(id){
  this.assignService.getAssignment(id).subscribe(assignment => this.assignment =assignment);
}
addAssign(){
  if(this.name){
    this.assignment.name =this.name;
  }if(this.dueDate){
    this.assignment.dueDate=this.dueDate;
  }
  this.assignService.updateAssignments(this.assignment).subscribe(res =>this.router.navigate(['/assignments/'+this.assignment.id]));
  
}
}
