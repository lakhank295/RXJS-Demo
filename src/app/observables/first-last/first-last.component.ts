import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { first, last } from 'rxjs/operators';

@Component({
  selector: 'app-first-last',
  templateUrl: './first-last.component.html',
  styleUrls: ['./first-last.component.scss']
})
export class FirstLastComponent implements OnInit {
  first; last
  constructor() { }

  ngOnInit(): void {
    let source = of('Lakhan', 'Deepak', 'Khandelwal')

    // Ex 01 | First
    source.pipe(
      first()
    ).subscribe(res => {
      this.first = res
    })

    // Ex 02 | Last
    source.pipe(
      last()
    ).subscribe(res => {
      this.last = res
    })
  }

}
