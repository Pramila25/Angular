import { Injectable } from '@angular/core';
import {Assignment} from '../asgn-cmp/asgn-cmp.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { AnimationQueryMetadata } from '@angular/animations';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators'; 
import { pipe } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments :Assignment[] = [
    {id:1,name:'first',dueDate:new Date('2018-01-01'),submitted:false},
    {id:2,name:'sec',dueDate:new Date('2018-01-01'),submitted:false},
    {id:3,name:'thrd',dueDate:new Date('2018-01-01'),submitted:false},
  ];
  url ='http://localhost:4200/api/assignments';
  urlOne: string ='http://localhost:4200/api/assignment';
  addUrl ='http://localhost:4200/api/assignment';
  putUrl ='http://localhost:4200/api/assignment';
  deleteUrl: string ='http://localhost:4200/api/assignment';
  constructor(private loggingSer : LoggingService,
    private httpclient: HttpClient) { }

  getAssignments() : Observable<Assignment[]>{
 return of(this.assignments);
  //of(this.assignments);

  return this.httpclient.get<Assignment[]>(this.url);
  }
  getAssignment(id:number):Observable<Assignment>{
   // return of(this.assignments.find(x => x.id === id));
   return this.httpclient.get<Assignment>(this.urlOne+'/'+id);
  }
  addAssignments(assignment : Assignment): Observable<any>{
    //this.assignments.push(assignment);
    //this.loggingSer.log(assignment.name,"Added");
    //return of('assignment added');
    return this.httpclient.post<Assignment>(this.addUrl,assignment);
  }

  updateAssignments(assignment : Assignment): Observable<any>{
  /* this.assignments.forEach((assignment,i)=>{
   if(assignment === assignment){
     this.assignments[i] = assignment;
   }
  });
  this.loggingSer.log(assignment.name,"UPdATEd");
    return of('assignment updated');*/
    return this.httpclient.put<Assignment>(this.putUrl,assignment); 
  }
  deleteAssignment(assignment:Assignment) : Observable<any>{
   /* this.assignments.forEach((assignment,i)=>{
      if(assignment === assignment){
       
      this.assignments.splice(i,1);
      }
     });
     this.loggingSer.log(assignment.name,"DELETE");
       return of('assignment deleted');
  }*/
  return this.httpclient.delete(this.deleteUrl+'/'+assignment._id); 
}

getSubmitted():Observable<Assignment[]>{
  // return of(this.assignments.find(x => x.id === id));
  const assgS = this.httpclient.get<Assignment[]>(this.url);
 
  return assgS.pipe(map(
      arr=>arr.filter(a => !a.submitted)));
 }
 getNonSubmitted():Observable<Assignment[]>{
  // return of(this.assignments.find(x => x.id === id));
  const assgS = this.httpclient.get<Assignment[]>(this.url);
  return assgS.pipe(map(
      arr=>arr.filter(a => a.submitted)));
 }
}
