import { Component, OnInit } from '@angular/core';
import { throwError, of, timer, from, merge, } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  errorMsg;
  errorMsg2;
  constructor() { }

  ngOnInit(): void {

    //Ex - 01
    const source = throwError('This is an Custom Error');

    source.pipe(
      catchError(val => of('I caught: '+ val))
    ).subscribe(res => {
      this.errorMsg = res;
    })

    //Ex - 02
    const myBadPromise = () => new Promise((resolve, reject) => reject('Rejected!'));
    const source2 = timer(1000);

   source2.pipe(
      mergeMap(res => from(myBadPromise()).pipe(
        catchError(error=> of(`Bad Promise: ${error}`))
      ))
    ).subscribe(res => {
      this.errorMsg2 = res
    })
  }

}
