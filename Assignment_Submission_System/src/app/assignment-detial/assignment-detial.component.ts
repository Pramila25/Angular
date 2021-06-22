import { Component, OnInit,Input } from '@angular/core';
import { Assignment } from '../asgn-cmp/asgn-cmp.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-assignment-detial',
  templateUrl: './assignment-detial.component.html',
  styleUrls: ['./assignment-detial.component.css']
})
export class AssignmentDetialComponent implements OnInit {
//@Input('passedAssignemnt') passedAssignemnt :Assignment;
passedAssignemnt :Assignment;
  constructor(private assignmentService : AssignmentsService,
    private route : ActivatedRoute, private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.getAssignment();
  }
  getAssignment(){
    const id = +this.route.snapshot.params.id;
    this.assignmentService.getAssignment(id).subscribe(assignment => this.passedAssignemnt=assignment);
  }
  onAssignmentSubmit(){

    this.passedAssignemnt.submitted=true;
    this.assignmentService.updateAssignments(this.passedAssignemnt).subscribe(res => console.log(res));
  }
  deleteselect(){
    this.assignmentService.deleteAssignment(this.passedAssignemnt).subscribe(res => console.log(res));
   // this.passedAssignemnt=null;
   this.router.navigate(['/home']);
  }
  onEditClick(){
    this.router.navigate(['/assignments',this.passedAssignemnt.id,'edit'],
  {queryParams:{name:this.passedAssignemnt.name},fragment:'editing' }
  );
  }

  isAdmin() :boolean{
   return this.authService.loggedIn;
  }
}
