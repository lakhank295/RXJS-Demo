import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addVid') addVid: ElementRef;

  subscription: Subscription;

  constructor(private _service: CommonService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
  
    let data = fromEvent(this.addVid.nativeElement, 'click')
    let count = 0;
    this.subscription = data.subscribe(res => {
      count++
      this._service.printData('Video' + count, 'elContainer')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
