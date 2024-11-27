import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-bs-comp',
  templateUrl: './bs-comp.component.html',
  styleUrls: ['./bs-comp.component.css']
})
export class BsCompComponent implements OnInit {


  ngOnInit(): void {
    // //Observables are unicast
    // const observable = new Observable(obj => obj.next(Math.random()));

    // //subscriber1
    // observable.subscribe(d => console.log("subscriber1 ", d));

    // //subscriber 2
    // observable.subscribe(d => console.log("subscriber2 ", d));

    // //Subject       
    // const subject = new Subject();
   
    // //Subject subscriber1
    // subject.subscribe(d => console.log("subscriber1 ",d));

    // //Subject subscriber2
    // subject.subscribe(d => console.log("subscriber2 ",d));
    // // Emit a value after subscribing
    // subject.next(Math.random());

    const subject=new Subject();
    const data= ajax("https://jsonplaceholder.typicode.com/users").pipe(share());
    //Making 2 calls with observables
    // data.subscribe(d=>console.log("Subscribe1", d));
    // data.subscribe(d=>console.log("Subscribe2", d));

    //Making 1 calls with subject
    subject.subscribe(d=>console.log("subject Subscribe1", d));
    subject.subscribe(d=>console.log("subject Subscribe2", d));
    data.subscribe(subject);
    
  }

}
