import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  data;

  @ViewChild('btnClick') btnClick: ElementRef;

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let tempData = fromEvent(this.btnClick.nativeElement, 'click')

    let obs2 = interval(1000);

    this.subscription = tempData.pipe(
      switchMap(data => { 
        return obs2
      })
    )
    .subscribe(res => {
      this.data = res
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
