import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('search1') search1: ElementRef;
  @ViewChild('search2') search2: ElementRef;

  data1 = null;
  data2 = null;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

    // Ex - 01 | debounceTime
    let searchTerm = fromEvent<any>(this.search1.nativeElement, 'keyup')

    searchTerm.pipe(
      map(event => event.target.value),
      debounceTime(500)
    ).subscribe(res => {
      console.log(res)
      this.data1 = res

      setTimeout(() => {
        this.data1 = null
      }, 1000);
    })  

    // Ex - 02 | distinctUntilChanged
    let searchTerm2 = fromEvent<any>(this.search2.nativeElement, 'keyup')

    searchTerm2.pipe(
      map(event => event.target.value),
      distinctUntilChanged()
    ).subscribe(res => {
      this.data2 = res
      setTimeout(() => {
        this.data2 = null
      }, 1000);
    })  

  }


}
