import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private _service: CommonService) { }

  ngOnInit(): void {

    //Ex 01 | of

    const obs1 = of('Lakhan', 'Deepak', 'Khandelwal')

    obs1.subscribe(res => {
        this._service.printData(res, 'elContainer1')
    })

    //Ex 01 | of
    const obs2 = of({a: 'Lakhan', b: 'Deepak', c: 'Khandelwal'})

    obs2.subscribe(res => {
      this.obsMsg = res
    })

    //Ex 01 | from
    const obs3 = from(['Lakhan', 'Deepak', 'Khandelwal'])

    obs3.subscribe(res => {
      this._service.printData(res, 'elContainer3')
    })

    const promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 2000);
    })

    const obs4 = from(promise)

    obs4.subscribe(res => {
      this._service.printData(res, 'elContainer4')
    })

    const str = 'I am Lakhan'

    const obs5 = from(str)

    obs5.subscribe(res => {
      this._service.printData(res, 'elContainer5')
    })    
  }

}
