import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  [x: string]: any;

  log(assignmentName, action) {
    console.log("Assignment : " + assignmentName + " " + action);
  }
  

  constructor() { }
}
