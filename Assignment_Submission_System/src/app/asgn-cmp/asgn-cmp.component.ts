import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import {Assignment} from './asgn-cmp.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-asgn-cmp',
  templateUrl: './asgn-cmp.component.html',
  styleUrls: ['./asgn-cmp.component.css']
})
export class AsgnCmpComponent implements OnInit {
  title='***************** ADD ASSIGNEMNT ************';
  enabled=false;
  formDisable =true;
  selectedAssignment :Assignment;
  assignments: Assignment[];
  subassignments: Assignment[];
  unSubassignments: Assignment[];


  constructor(private assignmentService :AssignmentsService,
    private route: Router) { }

  ngOnInit() {   
   // this.assignments =this.assignmentService.getAssignments();
   this.getAssignment();
  this.assignmentService.getSubmitted().subscribe(
     subAss => this.subassignments = subAss);
     this.assignmentService.getNonSubmitted().subscribe(
      subAss => this.unSubassignments = subAss);
  }
  getAssignment(){
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments= assignments);
    console.log("sssssssssssssssssssss"+this.assignments);
      //assignments => this.assignments= assignments);
  }
 // onNewAssignment(event : Assignment){
    //this.assignments.push(event);
  //  this.assignmentService.addAssignments(event).subscribe(sucess => console.log(sucess));
    //this.formDisable = true;
  //}

  selectItem(assignSelected:Assignment){
   // this.selectedAssignment =assignSelected;
   this.route.navigate(['/assignments/'+assignSelected.id])
  }
  onAddButtonClick(){
   // this.formDisable=false;
    this.selectedAssignment=null;
  }
onDrop(event: CdkDragDrop<any>){
  if(event.previousContainer === event.container){
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
  }else{
    transferArrayItem(event.previousContainer.data,
      event.container.data,event.previousIndex,
      event.currentIndex);
  }
}


}
